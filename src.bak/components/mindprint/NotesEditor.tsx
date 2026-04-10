import { StickyNote } from "lucide-react";

interface Props {
  notes: string;
  setNotes: (n: string) => void;
}

const NotesEditor = ({ notes, setNotes }: Props) => {
  return (
    <div>
      <h2 className="font-display text-2xl text-foreground mb-2">Daily Notes</h2>
      <p className="font-body text-xs text-muted-foreground mb-8">
        Anything you add here gets woven into today's printed page. Priorities, reminders, reflections.
        These notes are never stored beyond this session.
      </p>

      <div className="relative">
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="What's on your mind today?"
          rows={12}
          className="w-full bg-transparent border border-border rounded-sm p-6 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none leading-relaxed"
        />
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <StickyNote size={12} className="text-muted-foreground" />
          <span className="font-body text-xs text-muted-foreground">
            {notes.length > 0 ? `${notes.split(/\s+/).filter(Boolean).length} words` : ""}
          </span>
        </div>
      </div>

      <p className="font-body text-xs text-muted-foreground mt-4">
        These notes exist only in your browser. When you close this tab, they're gone.
        That's the point.
      </p>
    </div>
  );
};

export default NotesEditor;
