import { motion } from "framer-motion";

const steps = [
  {
    label: "Artifact",
    description: "Memory is encoded into a physical crystal — beautiful, durable, and inheritable.",
  },
  {
    label: "Root",
    description: "The Archive Root receives, organizes, and safeguards the crystal at home.",
  },
  {
    label: "Vault",
    description: "A secure, long-term backup ensures memory survives beyond any single location.",
  },
  {
    label: "Inheritance",
    description: "Each generation receives the archive, adds their own, and passes it forward.",
  },
];

const TimelineSection = () => (
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
          The Process
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground font-light">
          From capture to continuity.
        </h2>
      </motion.div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-14 md:pl-20"
            >
              <div className="absolute left-2 md:left-4 top-1 w-4 h-4 border border-foreground bg-background rounded-full" />
              <span className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mt-1 mb-2">
                {step.label}
              </h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed max-w-md">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;
