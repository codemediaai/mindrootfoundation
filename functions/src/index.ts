import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { VertexAI } from "@google-cloud/vertexai";

admin.initializeApp();

// ============================================================
// MODEL CONFIGURATION
// Default: gemini-2.0-flash (works immediately, covered by credits)
// To use Gemma: deploy Gemma 2 via Model Garden, then set
//   MODEL_ID to your endpoint's model name
// Both are stateless on Vertex AI — Google does not train on
// customer data sent through Vertex AI APIs.
// ============================================================
const PROJECT_ID = process.env.GCLOUD_PROJECT || "";
const LOCATION = "us-central1";
const MODEL_ID = "gemini-2.0-flash-001";

interface DailyPageRequest {
  events: Array<{
    summary: string;
    start: string;
    end: string;
    location?: string;
  }>;
  notes: string;
  timezone: string;
}

export const generateDailyPage = functions.https.onRequest(async (req, res) => {
  // CORS
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    res.status(204).send("");
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  // Verify auth
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  try {
    await admin.auth().verifyIdToken(authHeader.split("Bearer ")[1]);
  } catch {
    res.status(401).json({ error: "Invalid token" });
    return;
  }

  const { events, notes, timezone } = req.body as DailyPageRequest;

  // Format schedule for the prompt
  const scheduleBlock = events.length > 0
    ? events.map((e) => {
        const time = e.start.includes("T")
          ? new Date(e.start).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              timeZone: timezone,
            })
          : "All day";
        return `- ${time}: ${e.summary}${e.location ? ` (${e.location})` : ""}`;
      }).join("\n")
    : "No scheduled events today.";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: timezone,
  });

  const prompt = `You are composing a single printed daily page for someone's morning. The page should feel grounded, clear, and human — not performative or overly motivational. Write as if you are a thoughtful companion, not a coach.

Date: ${today}
Timezone: ${timezone}

Schedule:
${scheduleBlock}

${notes ? `Personal notes for today:\n${notes}` : "No personal notes provided."}

Respond with ONLY a JSON object (no markdown, no backticks, no explanation) with these exact fields:
{
  "date": "${today}",
  "greeting": "A warm, brief greeting that acknowledges the day. One or two sentences. Not cheesy.",
  "focusPrompt": "A short paragraph suggesting what to focus on today based on the schedule and notes. Practical, grounded.",
  "schedule": ["Formatted schedule items as readable strings, e.g. '9:00 AM — Team standup'"],
  "reflectionPrompt": "A single reflective question for the end of the day. Something worth sitting with.",
  "closingThought": "One sentence. Quiet. Not a platitude."
}`;

  try {
    const vertexAI = new VertexAI({ project: PROJECT_ID, location: LOCATION });
    const model = vertexAI.getGenerativeModel({ model: MODEL_ID });

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    const responseText = result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "";

    // Parse the JSON response, stripping any markdown fencing
    const cleaned = responseText.replace(/```json\s*|```\s*/g, "").trim();
    const page = JSON.parse(cleaned);

    res.status(200).json(page);
  } catch (err: any) {
    console.error("Generation error:", err);
    res.status(500).json({ error: "Failed to generate daily page", details: err.message });
  }
});
