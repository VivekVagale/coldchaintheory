import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { toast } from "sonner";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Cold Chain Theory" },
      { name: "description", content: "Book a cinematic CGI project with Cold Chain Theory. Share your brief, budget, and timeline." },
      { property: "og:title", content: "Book a Project — Cold Chain Theory" },
      { property: "og:description", content: "Start a conversation about your next cinematic film." },
    ],
  }),
  component: ContactPage,
});

const PROJECT_TYPES = ["Cinematic Vehicle Film", "CGI Commercial", "Product Advertisement", "Motion Design", "VFX", "Social Media Commercial", "Custom CGI Production"];
const BUDGETS = ["Under $10K", "$10K – $25K", "$25K – $50K", "$50K – $100K", "$100K+"];

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast.success("Brief received", { description: "We'll respond within one working day." });
  }

  const inputCls = "w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors";

  return (
    <div>
      <Nav />
      <main className="pt-32 md:pt-44 pb-24">
        <div className="container-cinema grid gap-16 lg:grid-cols-12 lg:gap-24">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Contact</p>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold text-foreground text-balance">
              Let's build something cinematic.
            </h1>
            <p className="mt-6 text-muted-foreground text-pretty">
              Share your brief and a few practical details. We'll respond within one working day with next steps or a short call invitation.
            </p>

            <div className="mt-12 space-y-6 text-sm">
              <div>
                <p className="eyebrow">Email</p>
                <a href="mailto:hello@coldchaintheory.com" className="mt-2 block text-foreground hover:text-accent">hello@coldchaintheory.com</a>
              </div>
              <div>
                <p className="eyebrow">Instagram</p>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-2 block text-foreground hover:text-accent">@coldchaintheory</a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            {sent ? (
              <div className="rounded-3xl border border-border bg-card p-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check size={22} />
                </div>
                <h2 className="mt-6 font-display text-2xl md:text-3xl text-foreground">Brief received.</h2>
                <p className="mt-3 text-muted-foreground">We'll get back to you within one working day.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                <input required name="name" placeholder="Name" className={inputCls} />
                <input required type="email" name="email" placeholder="Email" className={inputCls} />
                <input name="instagram" placeholder="Instagram" className={inputCls} />
                <input name="company" placeholder="Company (optional)" className={inputCls} />

                <label className="md:col-span-1">
                  <span className="eyebrow block mb-3">Project Type</span>
                  <select required name="type" className={inputCls + " appearance-none"}>
                    <option value="">Select</option>
                    {PROJECT_TYPES.map((t) => <option key={t} className="bg-background text-foreground">{t}</option>)}
                  </select>
                </label>
                <label className="md:col-span-1">
                  <span className="eyebrow block mb-3">Budget</span>
                  <select required name="budget" className={inputCls + " appearance-none"}>
                    <option value="">Select</option>
                    {BUDGETS.map((b) => <option key={b} className="bg-background text-foreground">{b}</option>)}
                  </select>
                </label>

                <label className="md:col-span-2">
                  <span className="eyebrow block mb-3">Deadline</span>
                  <input required type="date" name="deadline" className={inputCls} />
                </label>

                <input name="refImages" placeholder="Reference images (URL)" className={inputCls + " md:col-span-1"} />
                <input name="refVideos" placeholder="Reference videos (URL)" className={inputCls + " md:col-span-1"} />

                <label className="md:col-span-2">
                  <span className="eyebrow block mb-3">Project Description</span>
                  <textarea required name="description" rows={5} placeholder="Tell us about the film you want to make." className={inputCls + " resize-none"} />
                </label>

                <div className="md:col-span-2 pt-4">
                  <button type="submit" className="btn-glass group inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/25 px-8 py-4 text-sm font-medium text-foreground transition-transform hover:scale-[1.03] hover:bg-accent/35 accent-glow">
                    Book a Project
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </main>
      <Footer />
    </div>
  );
}
