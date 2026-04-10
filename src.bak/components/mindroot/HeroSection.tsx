import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import crystalDark from "@/assets/crystal-hero-new.png";
import crystalLight from "@/assets/crystal-hero-light.png";

const HeroSection = () => {
  const { resolved } = useTheme();
  const isDark = resolved === "dark";
  const heroImg = isDark ? crystalDark : crystalLight;

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const exitOpacity = useTransform(scrollYProgress, [0, 0.6, 0.95], [1, 1, 0]);
  const exitScale = useTransform(scrollYProgress, [0, 0.95], [1, 1.05]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh]"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center items-center overflow-hidden bg-background transition-colors duration-500">
        <motion.div
          style={{ opacity: exitOpacity, scale: exitScale }}
          className="absolute inset-0"
        >
          <motion.img
            key={resolved}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
            src={heroImg}
            alt="Quartz Archive Crystal on precision machined aluminum base"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className={`absolute inset-0 ${
              isDark
                ? "bg-gradient-to-t from-black/50 via-transparent to-black/20"
                : "bg-gradient-to-t from-white/50 via-transparent to-white/20"
            }`}
          />
        </motion.div>

        <motion.div
          style={{ opacity: exitOpacity }}
          className="relative z-10 max-w-3xl text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className={`font-body text-xs tracking-[0.3em] uppercase mb-6 ${
              isDark ? "text-white/60" : "text-black/50"
            }`}
          >
            Mindroot Foundation
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2.4, ease: [0.25, 0.1, 0.25, 1] }}
            className={`font-display text-4xl md:text-6xl font-light leading-tight mb-6 ${
              isDark ? "text-white" : "text-black"
            }`}
          >
            What if memory became an artifact?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            className={`font-body text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto ${
              isDark ? "text-white/70" : "text-black/60"
            }`}
          >
            Preserving what matters across generations through
            artifact-centered archival systems.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          style={{ opacity: exitOpacity }}
          className="absolute bottom-12 z-10"
        >
          <div className={`w-px h-12 mx-auto animate-pulse ${
            isDark ? "bg-white/40" : "bg-black/30"
          }`} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
