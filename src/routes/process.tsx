import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Cold Chain Theory" },
      { name: "description", content: "Five steps, no shortcuts. How Cold Chain Theory takes a brief from discovery to final delivery." },
      { property: "og:title", content: "Process — Cold Chain Theory" },
      { property: "og:description", content: "From discovery to final delivery, our five-step production process." },
    ],
  }),
  component: ProcessPage,
});

const STEPS = [
  { step: "01", title: "Discovery", copy: "We start with a conversation — brand, ambition, audience, edges. No templates, no assumptions." },
  { step: "02", title: "Creative Direction", copy: "Moodboards, references, and a single-minded visual thesis. Direction is decided before production begins." },
  { step: "03", title: "Production", copy: "Modeling, lookdev, animation, lighting, and simulation — all in-house, iterated closely with you." },
  { step: "04", title: "Review", copy: "Structured rounds with a clear checkpoint model. Feedback stays creative, never chaotic." },
  { step: "05", title: "Final Delivery", copy: "Master files, cutdowns, stills, and every format your rollout needs — delivered on time." },
];

function ProcessPage() {
  return (
    <div>
      <Nav />
      <main className="pt-32 md:pt-44 pb-24">
        <div className="container-cinema">
          <Reveal>
            <p className="eyebrow">Process</p>
            <h1 className="mt-4 font-display text-4xl md:text-7xl font-semibold text-foreground text-balance max-w-4xl">
              Five steps, no shortcuts.
            </h1>
            <p className="mt-6 max-w-2xl text-muted-foreground text-pretty">
              A deliberately small workflow that keeps craft, communication, and timing aligned from first call to final master.
            </p>
          </Reveal>

          <div className="mt-20 md:mt-28 space-y-6 md:space-y-8">
            {STEPS.map((s, i) => (
              <Reveal key={s.step} delay={i * 0.05}>
                <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start border-t border-border pt-8 md:pt-10">
                  <div className="md:col-span-2 font-display text-accent text-lg">{s.step}</div>
                  <h2 className="md:col-span-4 font-display text-2xl md:text-4xl font-semibold text-foreground">{s.title}</h2>
                  <p className="md:col-span-6 text-muted-foreground text-pretty">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
