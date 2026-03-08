import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";
import heroLight from "@/assets/mindroot-hero.png";
import heroDark from "@/assets/mindroot-hero-dark.png";
import explodedLight from "@/assets/mindroot-exploded.png";
import explodedDark from "@/assets/mindroot-exploded-dark.png";
import systemLight from "@/assets/mindroot-system.png";
import systemDark from "@/assets/mindroot-system-dark.png";

const GallerySection = () => {
  const { resolved } = useTheme();

  const items = [
    {
      src: resolved === "dark" ? heroDark : heroLight,
      alt: "Quartz Archive Crystal on aluminum base",
      label: "The Crystal",
    },
    {
      src: resolved === "dark" ? explodedDark : explodedLight,
      alt: "Exploded view — crystal, base seat, root node, storage core",
      label: "Exploded View",
    },
    {
      src: resolved === "dark" ? systemDark : systemLight,
      alt: "Generational Memory Archive System overview",
      label: "The System",
    },
  ];

  return (
    <section className="py-32 md:py-48 px-6 bg-surface-inverted transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-silver mb-6">
            Product Concepts
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-primary-foreground font-light">
            Designed to endure.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <div className="aspect-[3/4] overflow-hidden bg-soft-white mb-4 flex items-center justify-center p-4">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-contain opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700"
                />
              </div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-silver">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
