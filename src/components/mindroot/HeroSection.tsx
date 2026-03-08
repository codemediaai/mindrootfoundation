import { motion } from "framer-motion";
import crystalHero from "@/assets/crystal-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={crystalHero}
          alt="Quartz Lineage Crystal on pedestal"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 max-w-3xl text-center"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
          Mindroot Foundation
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] text-foreground mb-8 text-balance italic">
          What if memory became an artifact?
        </h1>
        <p className="font-body text-base md:text-lg text-muted-foreground font-light max-w-xl mx-auto leading-relaxed">
          Preserving family legacies across generations — not as files, but as
          physical, enduring objects of cultural inheritance.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 z-10"
      >
        <div className="w-px h-12 bg-silver mx-auto animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
