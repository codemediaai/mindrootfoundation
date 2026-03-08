import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import heroLight from "@/assets/mindroot-hero.png";
import heroDark from "@/assets/mindroot-hero-dark.png";

const HeroSection = () => {
  const { resolved } = useTheme();
  const heroImg = resolved === "dark" ? heroDark : heroLight;

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden bg-background transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-3xl text-center pt-24"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-12"
        >
          Mindroot Foundation
        </motion.p>
        <motion.img
          key={resolved}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
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
