import { motion } from "framer-motion";

const mainPrinciples = [
  {
    numeral: "I",
    title: "Integrity Before Incentive",
    text: "Build it right before we argue about who wins. Every architecture decision is filtered through this first.",
  },
  {
    numeral: "II",
    title: "Local-First by Default",
    text: "Cloud is optional and reversible. You own your archive, your artifacts, your metadata — and your right to delete.",
  },
  {
    numeral: "III",
    title: "Human Authorship Stays Intact",
    text: "The person remains the source. AI serves the individual, not the business model. Consent is ongoing — not a checkbox.",
  },
];

const tags = [
  "Open standards",
  "Dignity tech",
  "Continuity over convenience",
  "Portable by default",
  "No dark patterns",
  "Human authorship intact",
];

const SovereigntySection = () => (
  <section id="principles" className="py-32 md:py-48 px-6 bg-secondary transition-colors duration-500">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40, clipPath: "inset(10% 0% 10% 0%)" }}
        whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Principles
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 font-light">
          The foundation stands on architecture — not slogans.
        </h2>
      </motion.div>

      <div className="space-y-12 mt-16 mb-20">
        {mainPrinciples.map((p, i) => (
          <motion.div
            key={p.numeral}
            initial={{ opacity: 0, y: 30, clipPath: "inset(5% 0% 5% 0%)" }}
            whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            className="border-t border-border pt-8"
          >
            <span className="font-display text-lg text-muted-foreground">{p.numeral}</span>
            <h3 className="font-display text-xl md:text-2xl text-foreground mt-2 mb-3">
              {p.title}
            </h3>
            <p className="font-body text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-xl">
              {p.text}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {tags.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            viewport={{ once: true }}
            className="font-body text-xs tracking-[0.1em] px-4 py-2 border border-border text-muted-foreground"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SovereigntySection;
