import { useState, useRef } from "react";
import { type User } from "firebase/auth";
import { FileText, Printer, RefreshCw, Download } from "lucide-react";

interface CalendarEvent {
  summary: string;
  start: string;
  end: string;
  location?: string;
}

interface Props {
  calendarEvents: CalendarEvent[];
  notes: string;
  config: {
    eprintEmail: string;
    printTime: string;
    timezone: string;
  };
  user: User;
}

interface DailyPage {
  date: string;
  greeting: string;
  focusPrompt: string;
  schedule: string[];
  reflectionPrompt: string;
  closingThought: string;
}

const DailyPagePreview = ({ calendarEvents, notes, config, user }: Props) => {
  const [page, setPage] = useState<DailyPage | null>(null);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");
  const printRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    setGenerating(true);
    setError("");
    try {
      const token = await user.getIdToken();
      const res = await fetch("/api/generateDailyPage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          events: calendarEvents.map((e) => ({
            summary: e.summary,
            start: e.start,
            end: e.end,
            location: e.location,
          })),
          notes,
          timezone: config.timezone,
        }),
      });

      if (!res.ok) throw new Error("Generation failed");
      const data = await res.json();
      setPage(data);
    } catch (err) {
      console.error(err);
      setError("Could not generate your daily page. Make sure the Cloud Function is deployed.");
    }
    setGenerating(false);
  };

  const handlePrint = () => {
    if (!printRef.current) return;
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>MindPrint — ${page?.date || "Daily Page"}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Inter', sans-serif; padding: 48px; max-width: 680px; margin: 0 auto; color: #1a1a1a; }
          .date { font-size: 11px; letter-spacing: 0.3em; text-transform: uppercase; color: #888; margin-bottom: 32px; }
          .greeting { font-size: 22px; font-weight: 300; line-height: 1.5; margin-bottom: 32px; }
          .section-label { font-size: 10px; letter-spacing: 0.25em; text-transform: uppercase; color: #888; margin-bottom: 12px; }
          .focus { font-size: 14px; font-weight: 400; line-height: 1.7; margin-bottom: 32px; padding: 20px; border-left: 2px solid #ddd; }
          .schedule-item { font-size: 13px; line-height: 1.6; padding: 6px 0; border-bottom: 1px solid #f0f0f0; }
          .schedule { margin-bottom: 32px; }
          .reflection { font-size: 14px; font-style: italic; line-height: 1.7; margin-bottom: 32px; color: #555; }
          .closing { font-size: 13px; font-weight: 300; line-height: 1.6; color: #888; margin-top: 48px; padding-top: 24px; border-top: 1px solid #eee; }
          .footer { margin-top: 48px; font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: #ccc; }
          @media print { body { padding: 24px; } }
        </style>
      </head>
      <body>
        ${printRef.current.innerHTML}
        <div class="footer">MindPrint — Mindroot Foundation</div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const formatTime = (iso: string) => {
    if (!iso || !iso.includes("T")) return "All day";
    return new Date(iso).toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  };

  const today = new Date().toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-display text-2xl text-foreground">Daily Page</h2>
        <div className="flex gap-3">
          {page && (
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 border border-border text-muted-foreground hover:text-foreground hover:border-foreground transition-all duration-300 text-xs font-body py-2 px-4"
            >
              <Printer size={14} />
              Print
            </button>
          )}
          <button
            onClick={handleGenerate}
            disabled={generating}
            className="flex items-center gap-2 border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background transition-all duration-300 tracking-widest uppercase text-xs font-body py-2 px-5 disabled:opacity-50"
          >
            <RefreshCw size={14} className={generating ? "animate-spin" : ""} />
            {generating ? "Composing..." : page ? "Regenerate" : "Generate Today's Page"}
          </button>
        </div>
      </div>

      {error && <p className="font-body text-xs text-red-400 mb-6">{error}</p>}

      {!page && !generating && (
        <div className="border border-dashed border-border rounded-sm p-12 text-center">
          <FileText size={32} className="text-muted-foreground mx-auto mb-4" />
          <p className="font-body text-sm text-muted-foreground mb-2">No page generated yet.</p>
          <p className="font-body text-xs text-muted-foreground">
            Sync your calendar and add notes first, then generate your daily page.
            {calendarEvents.length === 0 && " Head to the Calendar tab to connect."}
          </p>
        </div>
      )}

      {generating && (
        <div className="border border-border rounded-sm p-12 text-center">
          <RefreshCw size={24} className="text-muted-foreground mx-auto mb-4 animate-spin" />
          <p className="font-body text-sm text-muted-foreground">
            Composing your page with Gemma...
          </p>
          <p className="font-body text-xs text-muted-foreground mt-2">
            Nothing is retained after generation.
          </p>
        </div>
      )}

      {page && !generating && (
        <div className="border border-border rounded-sm bg-background">
          {/* Print-ready content */}
          <div ref={printRef} className="p-8 md:p-12">
            <p className="date font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-8">
              {page.date || today}
            </p>

            <p className="greeting font-display text-xl md:text-2xl text-foreground font-light leading-relaxed mb-8">
              {page.greeting}
            </p>

            <p className="section-label font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
              Focus
            </p>
            <div className="focus border-l-2 border-border pl-5 mb-8">
              <p className="font-body text-sm text-foreground leading-relaxed">{page.focusPrompt}</p>
            </div>

            {page.schedule.length > 0 && (
              <>
                <p className="section-label font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
                  Schedule
                </p>
                <div className="schedule mb-8 space-y-0">
                  {page.schedule.map((item, i) => (
                    <p key={i} className="schedule-item font-body text-[13px] text-foreground py-1.5 border-b border-border/30">
                      {item}
                    </p>
                  ))}
                </div>
              </>
            )}

            <p className="section-label font-body text-[10px] tracking-[0.25em] uppercase text-muted-foreground mb-3">
              Reflection
            </p>
            <p className="reflection font-body text-sm text-muted-foreground italic leading-relaxed mb-8">
              {page.reflectionPrompt}
            </p>

            <div className="closing pt-6 border-t border-border">
              <p className="font-body text-[13px] text-muted-foreground font-light leading-relaxed">
                {page.closingThought}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DailyPagePreview;
