import { motion } from "framer-motion";

const initiatives = [
  {
    num: "01",
    category: "Memory Literacy",
    title: "Mindprint",
    description:
      "Teaching capture → tag → index → retrieve so people can keep their continuity. Simple schemas that survive apps and decades.",
  },
  {
    num: "02",
    category: "Continuity Layer",
    title: "Mindroot",
    description:
      "The local-first memory infrastructure layer. User-owned context, metadata, and archives designed to survive shifting platforms — cloud optional and reversible.",
  },
  {
    num: "03",
    category: "Community Systems",
    title: "Civic Mesh",
    description:
      "Exploring how communities can coordinate care and support without turning into surveillance networks. Bounded, dignity-centered, distributed.",
  },
  {
    num: "04",
    category: "Long-life Preservation",
    title: "Heirloom Archive",
    description:
      "Guidance and reference workflows for decade-scale storage — including glass-based archival — with clear handoff paths so archives can be inherited without a tech degree.",
  },
];

const visionPoints = [
  "Your memories don't vanish because a platform changed terms",
  "AI serves the person — not the business model",
  "Families facing cognitive decline have real tools — not just storage",
  "Communities can coordinate care without turning into surveillance networks",
  "Heirloom archives outlive hardware cycles — stored on long-life media and readable across generations",
  "Legacy is curated, not dumped — your story is shaped into a living narrative",
];

const VisionSection = () => (
  <section id="vision" className="py-32 md:py-48 px-6">
    <div className="max-w-4xl mx-auto">
      {/* Vision */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          The Vision
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6 font-light">
          A future where memory is yours — permanently.
        </h2>
        <div className="space-y-3 mb-24">
          {visionPoints.map((point) => (
            <div key={point} className="flex gap-3">
              <span className="text-muted-foreground shrink-0 mt-0.5">—</span>
              <p className="font-body text-sm md:text-base text-muted-foreground font-light leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Initiatives */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-12"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Initiatives
        </p>
        <h2 className="font-display text-2xl md:text-4xl text-foreground font-light">
          The systems taking shape under the foundation.
        </h2>
        <p className="font-body text-base text-muted-foreground font-light leading-relaxed mt-4 max-w-2xl">
          Each initiative is a distinct layer of the same underlying conviction: that
          memory, context, and continuity are human rights — not product features.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-px bg-border">
        {initiatives.map((item, i) => (
          <motion.div
            key={item.num}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-background p-8 md:p-10"
          >
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-body text-xs text-muted-foreground tracking-widest">
                {item.num}
              </span>
              <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
                {item.category}
              </span>
            </div>
            <h3 className="font-display text-xl md:text-2xl text-foreground mb-3">
              {item.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionSection;
