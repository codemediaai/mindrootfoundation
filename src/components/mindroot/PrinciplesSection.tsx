import { motion } from "framer-motion";

const principles = [
  { title: "Local Ownership", text: "Your archive lives on hardware you control. No account required to read your own memory." },
  { title: "Open Formats", text: "Plain text, JSON, YAML, markdown. Readable in 40 years without this software." },
  { title: "Integrity by Design", text: "Every record is checksummed. Every change is logged. Nothing silently disappears." },
  { title: "Composable Structure", text: "Canonical folder layout. Human-readable schema. Works with git, rsync, any backup tool." },
  { title: "Community Legibility", text: "Archives should be understandable by a family member, not just the archivist." },
  { title: "No Lock-in", text: "Import from anywhere, export to anywhere. We succeed when you don't need us." },
];

const PrinciplesSection = () => (
  <section className="py-32 md:py-48 px-6 transition-colors duration-500">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40, clipPath: "inset(10% 0% 10% 0%)" }}
        whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-20"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Foundation Charter
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground font-light">
          Six commitments. No exceptions.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="bg-background p-8 md:p-10 transition-colors duration-500"
          >
            <span className="font-body text-xs text-muted-foreground tracking-widest uppercase">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-xl text-foreground mt-3 mb-3">
              {p.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
              {p.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PrinciplesSection;
