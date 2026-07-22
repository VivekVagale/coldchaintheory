import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reviews — Cold Chain Theory" },
      { name: "description", content: "What clients say about working with Cold Chain Theory on cinematic CGI and motion design projects." },
      { property: "og:title", content: "Reviews — Cold Chain Theory" },
      { property: "og:description", content: "Client reviews for Cold Chain Theory." },
    ],
  }),
  component: ReviewsPage,
});

const REVIEWS = [
  { name: "Selin K.", role: "Creative Director, Meridian", project: "Social Commercial", review: "Cold Chain Theory understood the brief before we finished the call. The final film outperformed every previous launch by a wide margin." },
  { name: "Andrei V.", role: "Founder, Aurum", project: "Product Film", review: "Cinematic in a way we didn't know we needed. Every frame feels like a hero shot." },
  { name: "Noor J.", role: "Head of Brand, Vermilion", project: "Motion Identity", review: "A rare studio that pairs craft with restraint. The motion system they built for us still feels current two years on." },
  { name: "David M.", role: "Producer, Masonanic", project: "CGI Commercial", review: "Precise, calm, and unbelievably fast for the quality delivered. We'll be working with them again." },
  { name: "Priya S.", role: "Marketing Lead, Cadence", project: "Vehicle Film", review: "The car has never looked like this in any of our previous shoots. We used the film across every market." },
  { name: "Lukas H.", role: "Founder, Signal", project: "VFX", review: "Simulation and compositing work you'd expect from a team five times the size." },
];

function ReviewsPage() {
  return (
    <div>
      <Nav />
      <main className="pt-32 md:pt-44 pb-24">
        <div className="container-cinema">
          <Reveal>
            <p className="eyebrow">Reviews</p>
            <h1 className="mt-4 font-display text-4xl md:text-7xl font-semibold text-foreground text-balance max-w-4xl">
              Words from the people we've made films with.
            </h1>
          </Reveal>

          <div className="mt-16 md:mt-24 grid gap-5 md:grid-cols-2">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.05}>
                <figure className="h-full rounded-2xl border border-border bg-card p-8 md:p-10 flex flex-col">
                  <div className="flex gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                    ))}
                  </div>
                  <blockquote className="mt-6 text-foreground text-lg md:text-xl leading-relaxed text-pretty flex-1">"{r.review}"</blockquote>
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
      </main>
      <Footer />
    </div>
  );
}
