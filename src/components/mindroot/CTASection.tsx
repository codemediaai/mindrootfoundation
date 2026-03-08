import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const CTASection = () => (
  <section className="py-32 md:py-48 px-6 bg-secondary">
    <div className="max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Join the Foundation
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground mb-8 italic">
          Help shape the future of human memory.
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-12 max-w-xl mx-auto">
          We're looking for collaborators — archivists, designers, engineers, and
          families — who believe memory deserves more than a terms-of-service
          agreement.
        </p>
        <Button variant="hero" size="lg" className="px-12 py-6 h-auto">
          Get Involved
        </Button>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
