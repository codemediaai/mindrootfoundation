import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

const AboutSection = () => (
  <section className="py-32 md:py-48 px-6">
    <div className="max-w-3xl mx-auto">
      <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          About the Foundation
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-10 italic">
          Memory has intrinsic value.
        </h2>
        <div className="space-y-6 font-body text-base md:text-lg text-muted-foreground font-light leading-relaxed">
          <p>
            The Mindroot Foundation is a cultural and archival initiative dedicated to
            preserving family memory across generations. We believe that the stories,
            voices, images, and documents of ordinary families are among humanity's
            most important — and most neglected — cultural assets.
          </p>
          <p>
            Our mission is not to monetize memory but to protect it. To design systems
            that treat personal archives with the same reverence we give to museum
            collections and national heritage.
          </p>
          <p>
            Memory is not content. It is inheritance.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
