import { motion } from "framer-motion";

const SovereigntySection = () => (
  <section className="py-32 md:py-48 px-6 bg-secondary">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Memory Sovereignty
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-10 italic">
          Your family's memory belongs to your family.
        </h2>
        <div className="space-y-6 font-body text-base md:text-lg text-muted-foreground font-light leading-relaxed">
          <p>
            Memory sovereignty is the principle that families should retain full
            cultural ownership of their archives — free from platform dependency,
            algorithmic curation, or corporate extraction.
          </p>
          <p>
            No company should own, analyze, or profit from the intimate record of a
            family's life. The Mindroot Foundation exists to ensure that the
            infrastructure of memory serves people, not markets.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default SovereigntySection;
