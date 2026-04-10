import { useState } from "react";
import { signInWithPopup, type User } from "firebase/auth";
import { auth, googleProvider } from "@/lib/firebase";
import { Calendar, RefreshCw, Check } from "lucide-react";

interface CalendarEvent {
  id: string;
  summary: string;
  start: string;
  end: string;
  location?: string;
}

interface Props {
  events: CalendarEvent[];
  setEvents: (events: CalendarEvent[]) => void;
  config: { calendarConnected: boolean };
  saveConfig: (u: any) => void;
  user: User;
}

async function fetchTodayEvents(accessToken: string): Promise<CalendarEvent[]> {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const endOfDay = new Date(startOfDay.getTime() + 86400000);

  const params = new URLSearchParams({
    timeMin: startOfDay.toISOString(),
    timeMax: endOfDay.toISOString(),
    singleEvents: "true",
    orderBy: "startTime",
    maxResults: "20",
  });

  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/primary/events?${params}`,
    { headers: { Authorization: `Bearer ${accessToken}` } }
  );

  if (!res.ok) throw new Error("Failed to fetch calendar");

  const data = await res.json();
  return (data.items || []).map((item: any) => ({
    id: item.id,
    summary: item.summary || "(No title)",
    start: item.start?.dateTime || item.start?.date || "",
    end: item.end?.dateTime || item.end?.date || "",
    location: item.location,
  }));
}

const CalendarSync = ({ events, setEvents, config, saveConfig, user }: Props) => {
  const [syncing, setSyncing] = useState(false);
  const [error, setError] = useState("");

  const handleSync = async () => {
    setSyncing(true);
    setError("");
    try {
      // Re-auth with Google to get a fresh access token with calendar scope
      const result = await signInWithPopup(auth, googleProvider);
      const credential = (await import("firebase/auth")).GoogleAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken;

      if (!accessToken) throw new Error("No access token received");

      const fetched = await fetchTodayEvents(accessToken);
      setEvents(fetched);
      if (!config.calendarConnected) {
        saveConfig({ calendarConnected: true });
      }
    } catch (err: any) {
      console.error(err);
      setError("Could not sync calendar. Make sure you grant calendar access when prompted.");
    }
    setSyncing(false);
  };

  const formatTime = (iso: string) => {
    if (!iso || !iso.includes("T")) return "All day";
    return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-display text-2xl text-foreground">Calendar</h2>
        <button
          onClick={handleSync}
          disabled={syncing}
          className="flex items-center gap-2 border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background transition-all duration-300 tracking-widest uppercase text-xs font-body py-2 px-5 disabled:opacity-50"
        >
          <RefreshCw size={14} className={syncing ? "animate-spin" : ""} />
          {syncing ? "Syncing..." : config.calendarConnected ? "Refresh" : "Connect Google Calendar"}
        </button>
      </div>

      {error && (
        <p className="font-body text-xs text-red-400 mb-6">{error}</p>
      )}

      {!config.calendarConnected && events.length === 0 && (
        <div className="border border-dashed border-border rounded-sm p-12 text-center">
          <Calendar size={32} className="text-muted-foreground mx-auto mb-4" />
          <p className="font-body text-sm text-muted-foreground mb-2">No calendar connected yet.</p>
          <p className="font-body text-xs text-muted-foreground">
            Connect your Google Calendar to pull today's schedule into your daily page.
          </p>
        </div>
      )}

      {events.length > 0 && (
        <div className="space-y-3">
          <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-4">
            Today — {new Date().toLocaleDateString(undefined, { weekday: "long", month: "long", day: "numeric" })}
          </p>
          {events.map((event) => (
            <div key={event.id} className="border-l-2 border-foreground/20 pl-4 py-2">
              <div className="flex items-center gap-2">
                <Check size={12} className="text-muted-foreground" />
                <span className="font-body text-sm text-foreground">{event.summary}</span>
              </div>
              <p className="font-body text-xs text-muted-foreground mt-0.5 ml-5">
                {formatTime(event.start)} — {formatTime(event.end)}
                {event.location && ` · ${event.location}`}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CalendarSync;
