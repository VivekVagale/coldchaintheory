import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border mt-24 md:mt-40">
      <div className="container-cinema py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl md:text-3xl font-semibold tracking-[0.06em] text-foreground">
              COLD CHAIN THEORY
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.24em] text-muted-foreground">
              CGI &amp; Motion Design Studio
            </p>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground text-pretty">
              Premium cinematic films, CGI commercials, and visual experiences
              crafted for creators and brands that refuse the ordinary.
            </p>
          </div>

          <div className="md:justify-self-center">
            <p className="eyebrow mb-4">Studio</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/projects" className="text-foreground hover:text-accent transition-colors">Projects</Link></li>
              <li><Link to="/services" className="text-foreground hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/process" className="text-foreground hover:text-accent transition-colors">Process</Link></li>
              <li><Link to="/contact" className="text-foreground hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:justify-self-end">
            <p className="eyebrow mb-4">Connect</p>
            <ul className="space-y-3 text-sm">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-foreground hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="mailto:hello@coldchaintheory.com" className="text-foreground hover:text-accent transition-colors">hello@coldchaintheory.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Cold Chain Theory. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
