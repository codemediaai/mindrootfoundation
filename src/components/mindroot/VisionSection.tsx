import { motion } from "framer-motion";

const concepts = [
  {
    title: "Quartz Lineage Crystal",
    description:
      "A physical artifact designed to hold a family's digital memory in crystalline form — enduring, beautiful, and passed between generations like an heirloom.",
  },
  {
    title: "Archive Root",
    description:
      "The base unit that reads, organizes, and protects the crystal. A home for memory that exists outside the cloud.",
  },
  {
    title: "Generational Stacking",
    description:
      "Each generation adds their layer to the family archive. Memory grows, but never overwrites what came before.",
  },
  {
    title: "Family Root Merging",
    description:
      "When families join, their archives can merge — preserving both lineages while creating a shared future record.",
  },
  {
    title: "Vault-Backed Stewardship",
    description:
      "Secure, long-term archival storage that ensures memory persists even if physical artifacts are lost or damaged.",
  },
];

const VisionSection = () => (
  <section className="py-32 md:py-48 px-6">
    <div className="max-w-4xl mx-auto">
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
          Memory as artifact, not storage.
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mb-20">
          We envision a world where family memory is held in physical objects of
          beauty and permanence — designed to be inherited, not subscribed to.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
        {concepts.map((concept, i) => (
          <motion.div
            key={concept.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="border-t border-border pt-6"
          >
            <h3 className="font-display text-xl md:text-2xl text-foreground mb-3">
              {concept.title}
            </h3>
            <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
              {concept.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VisionSection;
