import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/process", label: "Process" },
  { to: "/reviews", label: "Reviews" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-cinema flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex flex-col leading-none group">
          <span className="font-display font-semibold tracking-[0.14em] text-sm md:text-[15px] text-foreground">
            COLD CHAIN THEORY
          </span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-muted-foreground mt-1">
            CGI &amp; Motion Design Studio
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.slice(1, -1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03] accent-glow"
          >
            Book a Project
            <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </nav>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl"
          >
            <div className="container-cinema py-6 flex flex-col gap-4">
              {NAV.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-lg font-display text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-accent-foreground"
              >
                Book a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
