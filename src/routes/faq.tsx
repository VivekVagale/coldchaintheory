import { createFileRoute } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Cold Chain Theory" },
      { name: "description", content: "Answers to common questions about production timelines, revisions, deliverables, and commercial rights." },
      { property: "og:title", content: "FAQ — Cold Chain Theory" },
      { property: "og:description", content: "Common questions, answered." },
    ],
  }),
  component: FaqPage,
});

const FAQS = [
  { q: "How long does production take?", a: "Typical projects run between three and eight weeks depending on scope. Complex CGI vehicle films sit at the longer end; product spots often close within three." },
  { q: "Can I provide my own footage?", a: "Yes. We often integrate live-action plates with CGI or use client footage as reference for animation and lighting." },
  { q: "How many revisions are included?", a: "Every engagement includes structured review rounds at direction, animation, and finishing. Additional revisions are quoted transparently." },
  { q: "Can I use the videos commercially?", a: "Yes. Full commercial usage rights are included by default. Broadcast and paid media rights can be scoped as needed." },
  { q: "Do you deliver vertical videos for Instagram?", a: "Yes. Vertical 9:16 and square 1:1 cutdowns are part of every social-oriented package." },
  { q: "Do you deliver in 4K?", a: "Yes. Master films are delivered in 4K by default, with 6K or higher available on request." },
];

function FaqPage() {
  return (
    <div>
      <Nav />
      <main className="pt-32 md:pt-44 pb-24">
        <div className="container-cinema max-w-4xl">
          <Reveal>
            <p className="eyebrow">FAQ</p>
            <h1 className="mt-4 font-display text-4xl md:text-7xl font-semibold text-foreground text-balance">
              Frequently asked, briefly answered.
            </h1>
          </Reveal>

          <div className="mt-16 md:mt-20">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                  <AccordionTrigger className="py-6 md:py-8 text-left font-display text-lg md:text-2xl text-foreground hover:no-underline hover:text-accent transition-colors">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 text-muted-foreground text-base md:text-lg text-pretty">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
