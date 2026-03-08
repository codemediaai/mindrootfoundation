import { motion } from "framer-motion";
import crystalHero from "@/assets/crystal-hero.jpg";
import explodedView from "@/assets/exploded-view.jpg";
import systemStack from "@/assets/system-stack.jpg";

const items = [
  { src: crystalHero, alt: "Quartz Lineage Crystal", label: "The Crystal" },
  { src: explodedView, alt: "Exploded view of the archival artifact", label: "Exploded View" },
  { src: systemStack, alt: "Archive Root system stack", label: "The System Stack" },
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
            <div className="aspect-square overflow-hidden bg-charcoal mb-4">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
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
