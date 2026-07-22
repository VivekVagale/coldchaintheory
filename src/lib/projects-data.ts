import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  ratio: string; // aspect
  client: string;
  year: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "midnight-drive",
    title: "Midnight Drive",
    category: "Cinematic Vehicle Film",
    description: "A nocturnal automotive study rendered frame by frame in CGI.",
    image: p1,
    ratio: "4/5",
    client: "Confidential Marque",
    year: "2025",
  },
  {
    slug: "aurum-parfum",
    title: "Aurum Parfum",
    category: "Product Advertisement",
    description: "Liquid architecture and macro splashes for a luxury fragrance launch.",
    image: p2,
    ratio: "1/1",
    client: "Creane Parfums",
    year: "2025",
  },
  {
    slug: "signal-flow",
    title: "Signal Flow",
    category: "Motion Design",
    description: "Chrome ribbons and typographic choreography for a broadcast identity.",
    image: p3,
    ratio: "16/10",
    client: "Vermilion Broadcast",
    year: "2024",
  },
  {
    slug: "cadence",
    title: "Cadence",
    category: "Social Media Commercial",
    description: "Weightless product moments for a footwear seasonal drop.",
    image: p4,
    ratio: "4/3",
    client: "Meridian Athletics",
    year: "2024",
  },
  {
    slug: "horology",
    title: "Horology",
    category: "CGI Commercial",
    description: "A precision timepiece rendered with sub-millimeter fidelity.",
    image: p5,
    ratio: "4/5",
    client: "Masonanic",
    year: "2025",
  },
  {
    slug: "obsidian",
    title: "Obsidian",
    category: "Visual Effects",
    description: "Kinetic sculpture study exploring fracture, heat and gravity.",
    image: p6,
    ratio: "1/1",
    client: "Studio Internal",
    year: "2024",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
