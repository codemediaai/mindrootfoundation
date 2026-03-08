import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProblemSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={ref} className="py-32 md:py-48 px-6 bg-foreground transition-colors duration-500">
      <motion.div className="max-w-3xl mx-auto" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 50, clipPath: "inset(15% 0% 15% 0%)" }}
          whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-silver mb-6">
            The Problem
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-primary-foreground mb-10 font-light">
            Memory lives on borrowed time.
          </h2>
          <div className="space-y-6 font-body text-base md:text-lg text-silver font-light leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Today, a family's most precious memories exist on fragile devices, in
              cloud accounts tied to terms of service, and behind platforms that change,
              merge, or disappear.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              viewport={{ once: true }}
            >
              A grandmother's voice recording lives on a phone that will break. A
              child's first drawings are stored in a service that may sunset. The
              photographs that define a family's identity are scattered across accounts
              no one will remember the passwords to.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              We have more capacity to store memory than ever before — and less
              certainty that any of it will survive.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProblemSection;
