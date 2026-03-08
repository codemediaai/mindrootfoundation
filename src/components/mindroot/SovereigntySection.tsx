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
  <section id="principles" className="py-32 md:py-48 px-6 bg-secondary">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Principles
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 font-light">
          The foundation stands on architecture — not slogans.
        </h2>
      </motion.div>

      {/* Three pillars */}
      <div className="space-y-12 mt-16 mb-20">
        {mainPrinciples.map((p, i) => (
          <motion.div
            key={p.numeral}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
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

      {/* Principle tags */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-body text-xs tracking-[0.1em] px-4 py-2 border border-border text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </div>
  </section>
);

export default SovereigntySection;
