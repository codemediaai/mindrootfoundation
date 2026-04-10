import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "4", label: "Active initiatives" },
  { value: "3", label: "Foundation phases" },
  { value: "10K+", label: "Year horizon" },
];

const unfold = {
  hidden: { opacity: 0, y: 40, clipPath: "inset(10% 0% 10% 0%)" },
  visible: { opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" },
};

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="about" className="py-32 md:py-48 px-6 transition-colors duration-500" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={unfold}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          style={{ y }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
            About the Foundation
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-10 font-light">
            Protecting the human right to keep your own story.
          </h2>
          <div className="space-y-6 font-body text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              Mindroot Foundation exists to protect something most tech forgets — the
              human right to keep your own story. We build and teach local-first memory
              systems that preserve meaning and legacy, not just files.
            </p>
            <p>
              Help people capture, preserve, and retrieve their life with dignity —
              without surrendering privacy, authorship, or identity to extractive
              platforms.
            </p>
            <p>
              We believe a future where your memories don't vanish because a platform
              changed terms. Where AI serves the person, not the business model. Where
              families facing cognitive decline have real tools — not just "storage."
              Where legacy is curated, not dumped.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex gap-16 mt-16 pt-10 border-t border-border"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="font-display text-3xl md:text-4xl text-foreground">{s.value}</span>
              <p className="font-body text-xs text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-secondary transition-colors duration-500"
        >
          <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
            On permanence
          </p>
          <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
            Microsoft Research's Project Silica demonstrated glass-encoded storage lasting
            10,000 years (Nature, Feb 2026). The science of permanence is here. The human
            infrastructure for it is what we're building.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
