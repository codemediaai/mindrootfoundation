import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import crystalHero from "@/assets/crystal-hero-new.png";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Image fades in from 0-30% scroll, holds, fades out from 70-100%
  const imageOpacity = useTransform(scrollYProgress, [0, 0.15, 0.6, 0.85], [0, 1, 1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 0.15, 0.6, 0.85], [0.92, 1, 1, 1.04]);
  const imageY = useTransform(scrollYProgress, [0, 0.6, 1], ["0%", "0%", "-12%"]);

  // Text fades in slightly after image
  const textOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.55, 0.75], [0, 0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2, 0.55, 0.75], [40, 0, 0, -30]);

  // Scroll indicator fades out as you begin scrolling
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] bg-background transition-colors duration-500"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden">
        {/* Hero image with scroll-driven fade */}
        <motion.div
          style={{ opacity: imageOpacity, scale: imageScale, y: imageY }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img
            src={crystalHero}
            alt="Quartz Archive Crystal on precision machined aluminum base"
            className="w-full h-full object-cover object-center"
          />
          {/* Vignette overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </motion.div>

        {/* Text overlay */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="relative z-10 max-w-3xl text-center px-6"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-white/60 mb-6">
            Mindroot Foundation
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white font-light leading-tight mb-6">
            Memory as Artifact
          </h1>
          <p className="font-body text-base md:text-lg text-white/70 font-light leading-relaxed max-w-xl mx-auto">
            Preserving what matters across generations through
            artifact-centered archival systems.
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-12 z-10"
        >
          <div className="w-px h-12 bg-white/40 mx-auto animate-pulse" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
