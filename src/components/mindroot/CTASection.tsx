import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const phases = [
  {
    num: "01",
    status: "Active",
    title: "Establish the Foundation",
    text: "Define the mission publicly. Launch the site and publish the core principles. Release the initial Local Repository Standards.",
  },
  {
    num: "02",
    status: "Upcoming",
    title: "Build the Core Tools",
    text: "Practical artifacts: schemas, metadata cards, export structures, Capture Kits and Rituals for families — interview prompts, labeling rules, and export packages designed for inheritance.",
  },
  {
    num: "03",
    status: "Planned",
    title: "Pilot Community Use",
    text: "Work with families, creators, and care communities to test Care + Continuity protocols — especially where memory is fading. Real life, not just theory.",
  },
];

const CTASection = () => (
  <section id="collaborate" className="py-32 md:py-48 px-6 bg-secondary">
    <div className="max-w-4xl mx-auto">
      {/* Roadmap */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-20"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Roadmap
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground font-light mb-4">
          Build the public layer — then prove it in practice.
        </h2>
        <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
          The foundation moves in deliberate phases. Each builds on the last. The work compounds.
        </p>
      </motion.div>

      <div className="space-y-8 mb-32">
        {phases.map((phase, i) => (
          <motion.div
            key={phase.num}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="border-t border-border pt-8 flex flex-col md:flex-row md:gap-16"
          >
            <div className="shrink-0 mb-4 md:mb-0 md:w-32">
              <span className="font-body text-xs tracking-widest text-muted-foreground">
                Phase {phase.num}
              </span>
              <span
                className={`block font-body text-xs mt-1 tracking-[0.1em] uppercase ${
                  phase.status === "Active" ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {phase.status}
              </span>
            </div>
            <div>
              <h3 className="font-display text-xl md:text-2xl text-foreground mb-2">{phase.title}</h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed max-w-lg">
                {phase.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Get Involved */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Get Involved
        </p>
        <h2 className="font-display text-2xl md:text-4xl text-foreground mb-6 font-light">
          This starts as a foundation — but it grows through real people, real stories, and real stewardship.
        </h2>
        <p className="font-body text-base text-muted-foreground font-light leading-relaxed mb-12 max-w-2xl mx-auto">
          The first version of Mindroot Foundation is a signal of intent: a public home for the mission,
          the principles, and the systems under development. From there, it becomes a place to publish
          work, invite aligned collaborators, and document the path toward ethical continuity infrastructure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.mindrootfoundation.org/charter" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="px-10 py-5 h-auto">
              Read the Charter
            </Button>
          </a>
          <a href="https://github.com/mindrootfoundation" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg" className="px-10 py-5 h-auto">
              Follow the Build
            </Button>
          </a>
        </div>
        <p className="font-body text-xs text-muted-foreground tracking-[0.2em] uppercase mt-10">
          No accounts. No tracking.
        </p>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
