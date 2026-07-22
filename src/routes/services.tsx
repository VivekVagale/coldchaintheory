import { createFileRoute, Link } from "@tanstack/react-router";
import { Car, Film, Sparkles, Layers, Wand2, Share2, Cog, ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Cold Chain Theory" },
      { name: "description", content: "Cinematic vehicle films, CGI commercials, product advertisements, motion design, VFX, and custom CGI productions." },
      { property: "og:title", content: "Services — Cold Chain Theory" },
      { property: "og:description", content: "Cinematic CGI and motion design services for creators and brands." },
    ],
  }),
  component: ServicesPage,
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

function ServicesPage() {
  return (
    <div>
      <Nav />
      <main className="pt-32 md:pt-44 pb-24">
        <div className="container-cinema">
          <Reveal>
            <p className="eyebrow">Services</p>
            <h1 className="mt-4 font-display text-4xl md:text-7xl font-semibold text-foreground text-balance max-w-4xl">
              What we make, in seven forms.
            </h1>
            <p className="mt-6 max-w-2xl text-muted-foreground text-pretty">
              We deliver finished cinematic videos — not files, not source scenes.
              Each engagement ends with a master film and every cutdown your rollout needs.
            </p>
          </Reveal>

          <div className="mt-16 md:mt-24 grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-all duration-500 hover:border-accent/40 hover:-translate-y-1">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition-colors group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground">
                    <s.icon size={18} />
                  </div>
                  <h2 className="mt-8 font-display text-xl font-semibold text-foreground">{s.title}</h2>
                  <p className="mt-3 text-sm text-muted-foreground text-pretty">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-24">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03] accent-glow">
              Book a Project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
