import { motion } from "framer-motion";

const ProblemSection = () => (
  <section className="py-32 md:py-48 px-6 bg-foreground">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-silver mb-6">
          The Problem
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-primary-foreground mb-10 italic">
          Memory lives on borrowed time.
        </h2>
        <div className="space-y-6 font-body text-base md:text-lg text-silver font-light leading-relaxed">
          <p>
            Today, a family's most precious memories exist on fragile devices, in
            cloud accounts tied to terms of service, and behind platforms that change,
            merge, or disappear.
          </p>
          <p>
            A grandmother's voice recording lives on a phone that will break. A
            child's first drawings are stored in a service that may sunset. The
            photographs that define a family's identity are scattered across accounts
            no one will remember the passwords to.
          </p>
          <p>
            We have more capacity to store memory than ever before — and less
            certainty that any of it will survive.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProblemSection;
