import { motion } from "framer-motion";
import heroImg from "@/assets/mindroot-hero.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-3xl text-center pt-24"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
          Mindroot Foundation
        </p>
        <img
          src={heroImg}
          alt="Quartz Archive Crystal on precision machined aluminum base"
          className="w-full max-w-md mx-auto mb-4"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12"
      >
        <div className="w-px h-12 bg-silver mx-auto animate-pulse" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
