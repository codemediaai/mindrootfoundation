import { motion } from "framer-motion";
import heroImg from "@/assets/mindroot-hero.png";
import explodedImg from "@/assets/mindroot-exploded.png";
import systemImg from "@/assets/mindroot-system.png";

const items = [
  { src: heroImg, alt: "Quartz Archive Crystal on aluminum base", label: "The Crystal" },
  { src: explodedImg, alt: "Exploded view — crystal, base seat, root node, storage core", label: "Exploded View" },
  { src: systemImg, alt: "Generational Memory Archive System overview", label: "The System" },
];

const GallerySection = () => (
  <section className="py-32 md:py-48 px-6 bg-foreground">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-20"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-silver mb-6">
          Product Concepts
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-primary-foreground italic">
          Designed to endure.
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="aspect-[3/4] overflow-hidden bg-soft-white mb-4 flex items-center justify-center p-4">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-500"
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

export default GallerySection;
