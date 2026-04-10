import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/hooks/use-theme";
import ThemeToggle from "@/components/mindroot/ThemeToggle";
import CalendarSync from "@/components/mindprint/CalendarSync";
import NotesEditor from "@/components/mindprint/NotesEditor";
import DailyPagePreview from "@/components/mindprint/DailyPagePreview";
import { LogOut, Settings, FileText, Calendar, StickyNote } from "lucide-react";

type Tab = "generate" | "calendar" | "notes" | "settings";

interface UserConfig {
  eprintEmail: string;
  printTime: string;
  timezone: string;
  calendarConnected: boolean;
}

const Dashboard = () => {
  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>("generate");
  const [config, setConfig] = useState<UserConfig>({
    eprintEmail: "",
    printTime: "06:00",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    calendarConnected: false,
  });
  const [saving, setSaving] = useState(false);
  const [calendarEvents, setCalendarEvents] = useState<any[]>([]);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!loading && !user) navigate("/mindprint");
  }, [user, loading, navigate]);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const snap = await getDoc(doc(db, "users", user.uid));
      if (snap.exists()) {
        const data = snap.data().mindprint;
        if (data) setConfig(data);
      }
    })();
  }, [user]);

  const saveConfig = async (updates: Partial<UserConfig>) => {
    if (!user) return;
    setSaving(true);
    const merged = { ...config, ...updates };
    setConfig(merged);
    await updateDoc(doc(db, "users", user.uid), { mindprint: merged });
    setSaving(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-body text-sm text-muted-foreground animate-pulse">Loading...</p>
      </div>
    );
  }

  if (!user) return null;

  const tabs: { id: Tab; label: string; icon: typeof FileText }[] = [
    { id: "generate", label: "Daily Page", icon: FileText },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "notes", label: "Notes", icon: StickyNote },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background transition-colors duration-500">
      <ThemeToggle />

      {/* Header */}
      <header className="border-b border-border px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="font-display text-xl text-foreground hover:opacity-80 transition-opacity">
              Mindroot
            </a>
            <span className="text-muted-foreground">/</span>
            <span className="font-body text-sm tracking-widest uppercase text-muted-foreground">
              MindPrint
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-body text-xs text-muted-foreground hidden sm:inline">
              {user.email}
            </span>
            <button
              onClick={signOut}
              className="flex items-center gap-2 font-body text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <LogOut size={14} />
              Sign out
            </button>
          </div>
        </div>
      </header>

      {/* Tab nav */}
      <nav className="border-b border-border px-6">
        <div className="max-w-5xl mx-auto flex gap-0">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center gap-2 px-5 py-3 font-body text-xs tracking-widest uppercase border-b-2 transition-colors ${
                tab === t.id
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <t.icon size={14} />
              {t.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Content */}
      <main className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          {tab === "generate" && (
            <DailyPagePreview
              calendarEvents={calendarEvents}
              notes={notes}
              config={config}
              user={user}
            />
          )}
          {tab === "calendar" && (
            <CalendarSync
              events={calendarEvents}
              setEvents={setCalendarEvents}
              config={config}
              saveConfig={saveConfig}
              user={user}
            />
          )}
          {tab === "notes" && (
            <NotesEditor notes={notes} setNotes={setNotes} />
          )}
          {tab === "settings" && (
            <SettingsPanel config={config} saveConfig={saveConfig} saving={saving} />
          )}
        </div>
      </main>
    </div>
  );
};

function SettingsPanel({
  config,
  saveConfig,
  saving,
}: {
  config: UserConfig;
  saveConfig: (u: Partial<UserConfig>) => void;
  saving: boolean;
}) {
  const [eprintEmail, setEprintEmail] = useState(config.eprintEmail);
  const [printTime, setPrintTime] = useState(config.printTime);

  useEffect(() => {
    setEprintEmail(config.eprintEmail);
    setPrintTime(config.printTime);
  }, [config]);

  return (
    <div className="max-w-md">
      <h2 className="font-display text-2xl text-foreground mb-8">Settings</h2>
      <div className="space-y-6">
        <div>
          <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
            ePrint Email
          </label>
          <input
            type="email"
            value={eprintEmail}
            onChange={(e) => setEprintEmail(e.target.value)}
            placeholder="your-printer@hpeprint.com"
            className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
          />
          <p className="font-body text-xs text-muted-foreground mt-1">
            Your HP ePrint email address for automatic daily printing.
          </p>
        </div>
        <div>
          <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
            Print Time
          </label>
          <input
            type="time"
            value={printTime}
            onChange={(e) => setPrintTime(e.target.value)}
            className="bg-transparent border-b border-border py-3 font-body text-sm text-foreground focus:outline-none focus:border-foreground transition-colors"
          />
        </div>
        <div>
          <label className="block font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">
            Timezone
          </label>
          <p className="font-body text-sm text-foreground">{config.timezone}</p>
        </div>
        <button
          onClick={() => saveConfig({ eprintEmail, printTime })}
          disabled={saving}
          className="border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background transition-all duration-300 tracking-widest uppercase text-xs font-body py-3 px-8 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Settings"}
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
