import { motion } from "framer-motion";

const charterSections = [
  {
    num: "00",
    title: "What We Are",
    text: "MindRoot Foundation exists to protect something most tech forgets — the human right to keep your own story. We build and teach local-first memory systems that preserve meaning and legacy, not just files.",
  },
  {
    num: "01",
    title: "North Star",
    text: "Human-owned memory. Local context. Ethical intelligence at the edges.",
  },
  {
    num: "02",
    title: "Mission",
    text: "Help people capture, preserve, and retrieve their life with dignity — without surrendering privacy, authorship, or identity to extractive platforms.",
  },
  {
    num: "03",
    title: "Vision",
    text: "A future where memory is yours — permanently. Where AI serves the person, families facing cognitive decline have real tools, and heirloom archives outlive hardware cycles.",
  },
];

const values = [
  { title: "Integrity before incentive", text: "Build it right before we argue about who wins." },
  { title: "Continuity over convenience", text: "Durable beats trendy." },
  { title: "Consent is ongoing", text: "Not a checkbox." },
  { title: "Local-first by default", text: "Cloud is optional and reversible." },
  { title: "Dignity tech", text: "Reduce shame. Increase agency." },
  { title: "Open standards", text: "Interoperability without capture." },
  { title: "Human authorship stays intact", text: "The person remains the source." },
];

const operations = [
  { title: "You own your archive", text: "Your artifacts, metadata, exports — and your right to delete." },
  { title: "We collect the minimum", text: "No 'because we can' telemetry. No dark patterns." },
  { title: "Everything should be portable", text: "Readable formats. Clean exports. Migration paths. No lock-in." },
  { title: "Meaning matters more than volume", text: "We optimize for clarity density." },
  { title: "Heirloom durability is a design requirement", text: "We design for decade-scale readability." },
];

const programs = [
  "Mindprint Literacy — teaching capture → tag → index → retrieve",
  "Local Repository Standards — simple schemas that survive apps and decades",
  "Tools + Reference Builds — open implementations people can run locally",
  "Care + Continuity Support — family legacy capture protocols",
  "Heirloom Archive Track — long-life storage and multi-copy preservation",
  "Legacy Curation — turning raw artifacts into curated capsules",
  "Capture Kits + Rituals — simple repeatable practices for families",
];

const CharterSection = () => (
  <section className="py-32 md:py-48 px-6">
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-6"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
          Foundation Charter
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-foreground font-light mb-4">
          The document that holds us accountable.
        </h2>
        <p className="font-body text-base text-muted-foreground font-light leading-relaxed max-w-2xl">
          This charter defines what Mindroot Foundation is, how it operates, and what it will refuse to do. 
          Changes require documentation, board approval, and a public changelog. No quiet mutations.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex gap-12 mb-24 pt-8 border-t border-border"
      >
        <div>
          <span className="font-body text-2xl text-foreground">12</span>
          <p className="font-body text-xs text-muted-foreground mt-1">sections</p>
        </div>
        <div>
          <span className="font-body text-2xl text-foreground">1</span>
          <p className="font-body text-xs text-muted-foreground mt-1">tie-breaker</p>
        </div>
        <div>
          <span className="font-body text-2xl text-foreground">No</span>
          <p className="font-body text-xs text-muted-foreground mt-1">exceptions</p>
        </div>
      </motion.div>

      {/* Core Sections 00–03 */}
      <div className="space-y-20 mb-28">
        {charterSections.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            viewport={{ once: true, margin: "-50px" }}
            className="border-t border-border pt-8"
          >
            <span className="font-body text-xs text-muted-foreground tracking-widest">{s.num}</span>
            <h3 className="font-display text-xl md:text-2xl text-foreground mt-2 mb-3">{s.title}</h3>
            <p className="font-body text-sm md:text-base text-muted-foreground font-light leading-relaxed max-w-xl">
              {s.text}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Values (04) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-28"
      >
        <div className="border-t border-border pt-8 mb-10">
          <span className="font-body text-xs text-muted-foreground tracking-widest">04</span>
          <h3 className="font-display text-xl md:text-2xl text-foreground mt-2">The non-negotiables.</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {values.map((v) => (
            <div key={v.title} className="py-3">
              <p className="font-body text-sm text-foreground font-medium">{v.title}</p>
              <p className="font-body text-sm text-muted-foreground font-light">{v.text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* How We Operate (05) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-28"
      >
        <div className="border-t border-border pt-8 mb-10">
          <span className="font-body text-xs text-muted-foreground tracking-widest">05</span>
          <h3 className="font-display text-xl md:text-2xl text-foreground mt-2">Rules of the road.</h3>
        </div>
        <div className="space-y-5">
          {operations.map((o) => (
            <div key={o.title} className="flex gap-4">
              <span className="text-muted-foreground mt-0.5 shrink-0">→</span>
              <div>
                <p className="font-body text-sm text-foreground font-medium">{o.title}</p>
                <p className="font-body text-sm text-muted-foreground font-light">{o.text}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Programs (06) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-50px" }}
        className="mb-28"
      >
        <div className="border-t border-border pt-8 mb-10">
          <span className="font-body text-xs text-muted-foreground tracking-widest">06</span>
          <h3 className="font-display text-xl md:text-2xl text-foreground mt-2">What we actually do.</h3>
        </div>
        <div className="space-y-3">
          {programs.map((p) => (
            <p key={p} className="font-body text-sm text-muted-foreground font-light leading-relaxed">
              <span className="text-foreground">•</span> {p}
            </p>
          ))}
        </div>
      </motion.div>

      {/* Governance, Privacy, IP, Funding, Transparency (07–11) */}
      <div className="space-y-16 mb-28">
        {[
          { num: "07", title: "Governance", subtitle: "Simple and real.", text: "Board protects the mission — approves budgets, enforces ethics, chooses what we refuse to do. If a decision is unclear, the tie-breaker is always: Integrity > Incentive." },
          { num: "08", title: "Privacy + Security", subtitle: "Default assumption: offline and local.", text: "If cloud exists: encryption, least privilege, documented retention, user-controlled export + deletion. No selling user data. No ads. No shadow profiles." },
          { num: "09", title: "IP + Open Source", subtitle: "Durability requires shared standards.", text: "We publish schemas, education, and software openly whenever feasible. If any paid licensing ever exists to fund sustainability, the boundary must be explicit — and user ownership stays untouched." },
          { num: "10", title: "Funding Ethics", subtitle: "Yes and no.", text: "Yes to donations, grants, mission-aligned partnerships, earned revenue from training and services. No to money that requires surveillance, data capture arrangements, exclusivity that harms interoperability, or anything that causes mission drift." },
          { num: "11", title: "Transparency", subtitle: "No quiet mutations.", text: "We publish what we build, what we collect, what we refuse to collect — and how decisions get made. Charter changes get logged. Change is allowed — but only with documentation, board approval, and a public changelog." },
        ].map((s) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="border-t border-border pt-8"
          >
            <span className="font-body text-xs text-muted-foreground tracking-widest">{s.num}</span>
            <h3 className="font-display text-xl md:text-2xl text-foreground mt-2 mb-1">{s.title}</h3>
            <p className="font-body text-sm text-foreground font-medium mb-3">{s.subtitle}</p>
            <p className="font-body text-sm text-muted-foreground font-light leading-relaxed max-w-xl">{s.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Tie-breaker */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="border-t border-foreground pt-10 text-center"
      >
        <blockquote className="font-display text-xl md:text-2xl text-foreground font-light">
          "If a decision is unclear, the answer is always: Integrity &gt; Incentive."
        </blockquote>
      </motion.div>
    </div>
  </section>
);

export default CharterSection;
