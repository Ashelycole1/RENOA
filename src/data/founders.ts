export const STRAND_COLORS = [
  "#0d9488",
  "#14b8a6",
  "#2dd4bf",
  "#5eead4",
  "#99f6e4",
  "#0f766e",
];

export interface Founder {
  id: number;
  name: string;
  role: string;
  statement: string;
  strandColor: string;
  imageSrc?: string;
  socialLink?: string;
}

export const founders: Founder[] = [
  {
    id: 1,
    name: "Rwothomio Evans",
    role: "CEO",
    statement: "I build studios that outlive their founders — RENOA is the proof.",
    strandColor: STRAND_COLORS[0],
    socialLink: "https://linkedin.com",
  },
  {
    id: 2,
    name: "Niwasiima Ashelycole",
    role: "CTO",
    statement: "Every system I build should feel inevitable — obvious in hindsight, impossible before.",
    strandColor: STRAND_COLORS[1],
    socialLink: "https://github.com",
  },
  {
    id: 3,
    name: "Natozo Martha",
    role: "COO",
    statement: "Good ops is invisible. You only notice it when it's gone.",
    strandColor: STRAND_COLORS[2],
    socialLink: "https://linkedin.com",
  },
  {
    id: 4,
    name: "Egabo Aaron",
    role: "Project Manager",
    statement: "A project isn't done when the code works — it's done when the user doesn't think about the code.",
    strandColor: STRAND_COLORS[3],
    socialLink: "https://linkedin.com",
  },
  {
    id: 5,
    name: "Onyango John Steven",
    role: "Marketing",
    statement: "The best marketing is a product that makes people ask their friends about it.",
    strandColor: STRAND_COLORS[4],
    socialLink: "https://linkedin.com",
  },
  {
    id: 6,
    name: "Alimpa Anne Hillary",
    role: "Finance",
    statement: "Runway is strategy. I make sure ideas get the time they need to become real.",
    strandColor: STRAND_COLORS[5],
    socialLink: "https://linkedin.com",
  },
];
