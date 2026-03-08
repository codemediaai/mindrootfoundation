import { motion } from "framer-motion";

const principles = [
  { title: "Stewardship", text: "We hold memory in trust, never as property." },
  { title: "Continuity", text: "Every system we build must outlast the generation that created it." },
  { title: "Dignity", text: "Personal archives deserve the same care as cultural heritage." },
  { title: "Openness", text: "Our standards, formats, and protocols remain open and interoperable." },
  { title: "Long-term Preservation", text: "We design for centuries, not product cycles." },
  { title: "Non-extractive Design", text: "Memory is never mined, monetized, or surveilled." },
];

const PrinciplesSection = () => (
  <section className="py-32 md:py-48 px-6">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-20"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Foundation Charter
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground font-light">
          Six principles for the future of memory.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {principles.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
            className="bg-background p-8 md:p-10"
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
