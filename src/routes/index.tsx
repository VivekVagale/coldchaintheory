import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Play, ArrowUpRight, Film, Car, Sparkles, Cog, Wand2, Share2, Layers } from "lucide-react";

import heroImg from "@/assets/hero-moto.jpg.asset.json";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { PROJECTS } from "@/lib/projects-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cold Chain Theory — Cinematic CGI That Stops the Scroll" },
      {
        name: "description",
        content:
          "Cold Chain Theory is a CGI and motion design studio creating premium cinematic films, vehicle advertisements, and product commercials for ambitious brands.",
      },
      { property: "og:title", content: "Cold Chain Theory — Cinematic CGI Studio" },
      {
        property: "og:description",
        content:
          "Premium cinematic films, CGI commercials, and visual experiences that elevate brands.",
      },
    ],
  }),
  component: HomePage,
});

const SERVICES = [
  { icon: Car, title: "Cinematic Vehicle Films", copy: "Automotive stories crafted with the mood of a feature film — every reflection, every surface controlled." },
  { icon: Film, title: "CGI Commercials", copy: "High-concept spots built entirely in 3D, engineered to hold attention across every screen." },
  { icon: Sparkles, title: "Product Advertisements", copy: "Precision-lit product studies that reveal detail impossible to capture in camera." },
  { icon: Layers, title: "Motion Design", copy: "Kinetic identities and broadcast graphics with editorial rhythm and typographic craft." },
  { icon: Wand2, title: "Visual Effects", copy: "Simulation, environment work, and compositing for narrative and commercial pieces." },
  { icon: Share2, title: "Social Media Commercials", copy: "Vertical and square edits optimised for feeds without compromising cinematic quality." },
  { icon: Cog, title: "Custom CGI Productions", copy: "Bespoke pipelines for launches, activations, and experiential campaigns." },
];

const PROCESS = [
  { step: "01", title: "Discovery", copy: "We listen closely — brand, audience, ambition, and edges." },
  { step: "02", title: "Creative Direction", copy: "Concept, moodboards, and a single-minded visual thesis." },
  { step: "03", title: "Production", copy: "Modeling, lookdev, animation, lighting, simulation — in-house." },
  { step: "04", title: "Review", copy: "Precise iteration cycles guided by clear creative checkpoints." },
  { step: "05", title: "Final Delivery", copy: "Master files, cutdowns, and every format your rollout needs." },
];

const REVIEWS = [
  {
    name: "Selin K.",
    role: "Creative Director, Meridian",
    review: "Cold Chain Theory understood the brief before we finished the call. The final film outperformed every previous launch by a wide margin.",
    project: "Social Commercial",
  },
  {
    name: "Andrei V.",
    role: "Founder, Aurum",
    review: "Cinematic in a way we didn't know we needed. Every frame feels like a hero shot.",
    project: "Product Film",
  },
  {
    name: "Noor J.",
    role: "Head of Brand, Vermilion",
    review: "A rare studio that pairs craft with restraint. The motion system they built for us still feels current two years on.",
    project: "Motion Identity",
  },
];

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <div className="relative overflow-hidden">
      <Nav />

      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100svh] w-full overflow-hidden">
        <motion.div
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src={heroImg.url}
            alt="Cinematic dark automotive CGI still"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/40" />
        </motion.div>

        <div className="relative z-10 container-cinema flex min-h-[100svh] flex-col justify-end pb-16 md:pb-24 pt-32">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="eyebrow flex items-center gap-3"
          >
            <span className="inline-block h-px w-8 bg-accent" />
            CGI & Motion Design Studio
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[2.75rem] leading-[1.02] md:text-7xl lg:text-[6.5rem] font-semibold tracking-[-0.03em] text-foreground text-balance max-w-6xl"
          >
            Cinematic CGI
            <br />
            <span className="text-muted-foreground">That Stops </span>
            <span className="text-foreground">the Scroll.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="mt-8 max-w-2xl text-base md:text-lg text-muted-foreground text-pretty"
          >
            Cold Chain Theory creates premium cinematic films, CGI commercials,
            vehicle advertisements, and visual experiences that capture attention
            and elevate brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03] accent-glow"
            >
              Book a Project
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 backdrop-blur-md px-7 py-3.5 text-sm font-medium text-foreground hover:bg-background/70 transition-colors"
            >
              Explore Projects
            </Link>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
        >
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}
            className="h-8 w-px bg-gradient-to-b from-muted-foreground to-transparent"
          />
        </motion.div>
      </section>

      {/* SHOWREEL */}
      <section className="relative py-24 md:py-40">
        <div className="container-cinema">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <p className="eyebrow">Featured Showreel</p>
                <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-foreground text-balance max-w-2xl">
                  Two minutes inside the studio.
                </h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground text-pretty">
                A selection of recent frames — automotive, product, and motion —
                all rendered in-house.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="group relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src={heroImg.url}
                alt="Showreel preview"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
                width={1920} height={1080}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-background/40" />
              <button
                aria-label="Play showreel"
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="btn-glass relative inline-flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full bg-background/40 border border-white/20 transition-all group-hover:scale-105 group-hover:bg-accent/50 group-hover:border-accent">
                  <Play className="h-8 w-8 md:h-10 md:w-10 text-foreground translate-x-0.5 transition-colors group-hover:text-accent-foreground" fill="currentColor" />
                </span>
              </button>
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                <span className="h-px w-6 bg-muted-foreground/60" />
                Showreel 2025 · 02:14
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="relative py-24 md:py-32">
        <div className="container-cinema">
          <Reveal>
            <div className="flex items-end justify-between gap-6 mb-14">
              <div>
                <p className="eyebrow">Selected Work</p>
                <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-foreground text-balance max-w-3xl">
                  Films, frames, and finished stories.
                </h2>
              </div>
              <Link to="/projects" className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
                All projects <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 [column-fill:_balance]">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05} className="mb-6 md:mb-8 break-inside-avoid">
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div style={{ aspectRatio: p.ratio }} className="relative overflow-hidden">
                    <img
                      src={p.image} alt={p.title} loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent opacity-90" />
                    <div className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-background/50 backdrop-blur-md border border-border opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0">
                      <Play size={14} className="text-foreground translate-x-px" fill="currentColor" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-accent">{p.category}</p>
                      <h3 className="mt-2 font-display text-xl md:text-2xl font-semibold text-foreground">{p.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 md:hidden">
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-foreground">
              All projects <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-24 md:py-40">
        <div className="container-cinema">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-foreground text-balance max-w-3xl">
              A studio built around one obsession — the finished film.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <div className="group relative h-full rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-accent/40 hover:-translate-y-1">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground">
                    <s.icon size={18} />
                  </div>
                  <h3 className="mt-8 font-display text-xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground text-pretty">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="relative py-24 md:py-32 border-y border-border bg-[color-mix(in_oklab,var(--color-surface-elevated)_40%,var(--color-background))]">
        <div className="container-cinema">
          <Reveal>
            <div className="flex items-end justify-between gap-6 mb-14">
              <div>
                <p className="eyebrow">Process</p>
                <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-foreground text-balance max-w-2xl">
                  Five steps, no shortcuts.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border" />
            <div className="grid gap-8 lg:gap-4 lg:grid-cols-5">
              {PROCESS.map((p, i) => (
                <Reveal key={p.step} delay={i * 0.08}>
                  <div className="relative">
                    <div className="flex items-center gap-4 lg:block">
                      <span className="inline-flex h-16 w-16 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-background border border-border font-display text-sm text-accent">
                        {p.step}
                      </span>
                    </div>
                    <h3 className="mt-4 lg:mt-6 font-display text-lg font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground text-pretty pr-4">{p.copy}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="relative py-24 md:py-40">
        <div className="container-cinema">
          <Reveal>
            <p className="eyebrow">Client Reviews</p>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold text-foreground text-balance max-w-3xl">
              Trusted by teams that care about the final frame.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.06}>
                <figure className="h-full rounded-2xl border border-border bg-card p-8 flex flex-col">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <blockquote className="mt-6 text-foreground text-lg leading-relaxed text-pretty flex-1">
                    "{r.review}"
                  </blockquote>
                  <figcaption className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-sm font-medium text-foreground">
                      {r.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.role} · {r.project}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 md:py-32">
        <div className="container-cinema">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-20 md:px-16 md:py-32 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
              <div className="absolute -inset-x-20 -bottom-40 h-80 bg-accent/20 blur-[120px] opacity-60" />
              <div className="relative">
                <p className="eyebrow">Let's build something cinematic</p>
                <h2 className="mt-6 font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-foreground text-balance max-w-4xl mx-auto">
                  Your next film starts with a conversation.
                </h2>
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03] accent-glow"
                  >
                    Book a Project <ArrowUpRight size={16} />
                  </Link>
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground hover:bg-secondary"
                  >
                    Explore Projects
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
