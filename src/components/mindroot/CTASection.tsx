import { motion } from "framer-motion";
import { useState } from "react";

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

const CTASection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`From ${name} — Mindroot Foundation`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:adam@mindrootfoundation.org?subject=${subject}&body=${body}`;
  };

  return (
    <section id="collaborate" className="py-32 md:py-48 px-6 bg-secondary transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40, clipPath: "inset(10% 0% 10% 0%)" }}
          whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
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
              initial={{ opacity: 0, x: -30, clipPath: "inset(0% 100% 0% 0%)" }}
              whileInView={{ opacity: 1, x: 0, clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
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

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-lg mx-auto"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6 text-center">
            Get in Touch
          </p>
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8 font-light text-center">
            Interested in the mission?
            <br />
            Let's talk.
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border-b border-border py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full border border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background transition-all duration-300 tracking-widest uppercase text-xs font-body py-4"
            >
              Send Message
            </button>
          </form>

          <p className="font-body text-xs text-muted-foreground tracking-[0.2em] uppercase mt-8 text-center">
            No accounts. No tracking.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
