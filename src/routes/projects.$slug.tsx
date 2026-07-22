import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Play } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { PROJECTS, getProject } from "@/lib/projects-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.title} — Cold Chain Theory` },
          { name: "description", content: loaderData.project.description },
          { property: "og:title", content: `${loaderData.project.title} — Cold Chain Theory` },
          { property: "og:description", content: loaderData.project.description },
        ]
      : [{ title: "Project — Cold Chain Theory" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center text-muted-foreground">Project not found.</div>
  ),
  component: ProjectShowcase,
});

const SOFTWARE = ["Cinema 4D", "Redshift", "Houdini", "Substance", "Nuke", "DaVinci Resolve"];
const DELIVERABLES = ["16:9 Master Film", "9:16 Vertical Cutdowns", "1:1 Square Edits", "Stills Pack", "GIF Loops"];

function ProjectShowcase() {
  const { project } = Route.useLoaderData();
  const others = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <div>
      <Nav />

      <section className="relative min-h-[80svh] w-full overflow-hidden">
        <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" width={1280} height={1600} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="relative z-10 container-cinema pt-40 md:pt-56 pb-16 md:pb-24 min-h-[80svh] flex flex-col justify-end">
          <p className="eyebrow text-accent">{project.category}</p>
          <h1 className="mt-4 font-display text-4xl md:text-7xl lg:text-8xl font-semibold text-foreground text-balance max-w-5xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-muted-foreground text-pretty">{project.description}</p>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl text-sm">
            {[
              ["Client", project.client],
              ["Year", project.year],
              ["Category", project.category],
              ["Role", "Full production"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="eyebrow">{k}</p>
                <p className="mt-2 text-foreground">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-cinema">
          <Reveal>
            <div className="group relative aspect-video rounded-3xl overflow-hidden border border-border bg-card">
              <img src={project.image} alt="Final film preview" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-background/40" />
              <button aria-label="Play film" className="absolute inset-0 flex items-center justify-center">
                <span className="relative inline-flex h-24 w-24 md:h-32 md:w-32 items-center justify-center rounded-full bg-background/40 backdrop-blur-md border border-border transition-all group-hover:scale-105 group-hover:bg-accent group-hover:border-accent">
                  <Play className="h-8 w-8 md:h-10 md:w-10 text-foreground translate-x-0.5 group-hover:text-accent-foreground" fill="currentColor" />
                </span>
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-cinema grid md:grid-cols-12 gap-10 md:gap-16">
          <Reveal className="md:col-span-4">
            <p className="eyebrow">Overview</p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8">
            <p className="font-display text-2xl md:text-3xl leading-snug text-foreground text-balance">
              A short-form cinematic film built entirely in CGI, designed for a global rollout across broadcast, cinema, and social.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2 text-sm">
              <div>
                <p className="eyebrow">Client Objective</p>
                <p className="mt-3 text-muted-foreground text-pretty">Reposition the brand as a design-forward category leader with a signature visual asset.</p>
              </div>
              <div>
                <p className="eyebrow">Creative Direction</p>
                <p className="mt-3 text-muted-foreground text-pretty">Restrained composition, controlled negative space, and an accent palette that lets the product carry the frame.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* moodboard grid */}
      <section className="py-16 md:py-24">
        <div className="container-cinema">
          <Reveal><p className="eyebrow mb-8">Moodboard & References</p></Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {PROJECTS.slice(0, 4).map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="aspect-[4/5] overflow-hidden rounded-xl border border-border">
                  <img src={p.image} alt="" loading="lazy" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* breakdowns */}
      <section className="py-16 md:py-28 border-y border-border bg-[color-mix(in_oklab,var(--color-surface-elevated)_40%,var(--color-background))]">
        <div className="container-cinema grid gap-10 md:grid-cols-2">
          {[
            { title: "Behind-the-scenes renders", copy: "Wireframes, clay renders, and lighting AOVs isolated to reveal the frame's construction." },
            { title: "Lighting breakdown", copy: "A single controlled key with soft rim light — every reflection intentional." },
            { title: "Animation breakdown", copy: "Camera and object motion choreographed to a 24fps musical grid." },
            { title: "Production timeline", copy: "Six weeks: one week direction, three weeks production, two weeks finishing." },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 0.05}>
              <div className="rounded-2xl border border-border bg-card p-8">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">{b.title}</h3>
                <p className="mt-4 text-muted-foreground text-pretty">{b.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* software / deliverables */}
      <section className="py-20 md:py-28">
        <div className="container-cinema grid md:grid-cols-2 gap-10 md:gap-16">
          <Reveal>
            <p className="eyebrow">Software Used</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {SOFTWARE.map((s) => (
                <li key={s} className="rounded-full border border-border px-4 py-2 text-sm text-foreground">{s}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Final Deliverables</p>
            <ul className="mt-6 space-y-3">
              {DELIVERABLES.map((d) => (
                <li key={d} className="flex items-center gap-3 text-foreground">
                  <span className="h-px w-6 bg-accent" /> {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* testimonial */}
      <section className="py-16 md:py-24">
        <div className="container-cinema">
          <Reveal>
            <blockquote className="max-w-4xl font-display text-2xl md:text-4xl leading-tight text-foreground text-balance">
              "Cold Chain Theory delivered a film that raised the bar for the entire category. Every frame was considered."
            </blockquote>
            <p className="mt-8 text-sm text-muted-foreground">— Creative Director, {project.client}</p>
          </Reveal>
        </div>
      </section>

      {/* related */}
      <section className="py-16 md:py-24">
        <div className="container-cinema">
          <Reveal><p className="eyebrow mb-8">Related Projects</p></Reveal>
          <div className="grid gap-6 md:grid-cols-3">
            {others.map((p) => (
              <Link key={p.slug} to="/projects/$slug" params={{ slug: p.slug }} className="group block overflow-hidden rounded-2xl border border-border bg-card">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-accent">{p.category}</p>
                  <h3 className="mt-2 font-display text-lg text-foreground">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-cinema">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-20 md:px-16 md:py-28 text-center">
            <div className="absolute -inset-x-20 -bottom-40 h-80 bg-accent/20 blur-[120px] opacity-60" />
            <div className="relative">
              <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground max-w-3xl mx-auto text-balance">
                Book a similar project.
              </h2>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:scale-[1.03] accent-glow">
                Start a conversation <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
