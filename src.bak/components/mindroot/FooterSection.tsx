const FooterSection = () => (
  <footer className="py-20 md:py-32 px-6 border-t border-border">
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
        <div className="max-w-md">
          <h3 className="font-display text-2xl text-foreground mb-4">
            Mindroot Foundation
          </h3>
          <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
            "The measure of a civilization is not what it builds, but what it
            remembers. We exist to ensure that the most intimate records of human
            life — the ones held by families — are never lost to indifference,
            obsolescence, or extraction."
          </p>
        </div>

        <nav className="flex flex-col gap-3 font-body text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors duration-300">About</a>
          <a href="#vision" className="hover:text-foreground transition-colors duration-300">Vision</a>
          <a href="#principles" className="hover:text-foreground transition-colors duration-300">Principles</a>
          <a href="#collaborate" className="hover:text-foreground transition-colors duration-300">Collaborate</a>
          <a href="/mindprint" className="hover:text-foreground transition-colors duration-300">MindPrint</a>
        </nav>
      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mindroot Foundation. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
