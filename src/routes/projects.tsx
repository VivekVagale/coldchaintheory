import { createFileRoute, Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { PROJECTS } from "@/lib/projects-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Cold Chain Theory" },
      { name: "description", content: "Selected cinematic CGI, motion design, and product films by Cold Chain Theory." },
      { property: "og:title", content: "Projects — Cold Chain Theory" },
      { property: "og:description", content: "Selected cinematic CGI, motion design, and product films." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div>
      <Nav />
      <main className="pt-32 md:pt-44 pb-24">
        <div className="container-cinema">
          <Reveal>
            <p className="eyebrow">Projects</p>
            <h1 className="mt-4 font-display text-4xl md:text-7xl font-semibold text-foreground text-balance max-w-4xl">
              A catalogue of finished frames.
            </h1>
            <p className="mt-6 max-w-2xl text-muted-foreground text-pretty">
              Every project below was directed, modelled, lit, animated, and finished
              by Cold Chain Theory. Select one to open its case study.
            </p>
          </Reveal>

          <div className="mt-16 md:mt-24 columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 [column-fill:_balance]">
            {PROJECTS.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05} className="mb-6 md:mb-8 break-inside-avoid">
                <Link
                  to="/projects/$slug" params={{ slug: p.slug }}
                  className="group relative block overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div style={{ aspectRatio: p.ratio }} className="relative overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                    <div className="absolute top-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-background/50 backdrop-blur-md border border-border opacity-0 group-hover:opacity-100 transition-all duration-500">
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
        </div>
      </main>
      <Footer />
    </div>
  );
}
