export interface TeamMember {
  name: string;
  role: string;
  location: string;
  bio: string;
  linkedIn?: string;
  initials: string;
  avatarColor: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Rwothomio Evans .E.",
    role: "CEO and Systems Analyst and Architect",
    location: "Kampala, Uganda",
    bio: "Product strategist focused on venture scaling and commercializing digital infrastructure across East Africa.",
    linkedIn: "https://www.linkedin.com/company/renoa-collective/",
    initials: "RE",
    avatarColor: "#2563EB"
  },
  {
    name: "Natozo Martha Patience",
    role: "COO and Developer",
    location: "Kampala, Uganda",
    bio: "Operational architect coordinating client delivery cadences, talent operations, and project governance.",
    linkedIn: "https://www.linkedin.com/company/renoa-collective/",
    initials: "NM",
    avatarColor: "#05668D"
  },
  {
    name: "Niwasiima Ashelycole",
    role: "CTO and Senior Developer and Designer",
    location: "Kampala, Uganda",
    bio: "Full-stack systems architect & AI engineer leading software design, LLM orchestration, and core platform delivery.",
    linkedIn: "https://www.linkedin.com/in/ashelycole-niwasiima-627258330/",
    initials: "NA",
    avatarColor: "#2563EB"
  },
  {
    name: "Egabo Aaron",
    role: "Products Manager, Senior Analyst and Developer",
    location: "Kampala, Uganda",
    bio: "Agile delivery lead ensuring every sprint ships on time, scope is tightly governed, and client expectations are exceeded.",
    linkedIn: "https://www.linkedin.com/company/renoa-collective/",
    initials: "EA",
    avatarColor: "#028090"
  },
  {
    name: "Onyango John Steven",
    role: "Sales And Marketing Manager, UI UX design",
    location: "Kampala, Uganda",
    bio: "Growth marketer bridging product engineering with audience acquisition and enterprise brand partnerships.",
    linkedIn: "https://www.linkedin.com/company/renoa-collective/",
    initials: "JS",
    avatarColor: "#02C39A"
  },
  {
    name: "Alimpa Ann Hillary",
    role: "Finance Manager",
    location: "Kampala, Uganda",
    bio: "Financial strategist managing client contract structures, multi-currency cash flows, and fiscal compliance.",
    linkedIn: "https://www.linkedin.com/company/renoa-collective/",
    initials: "AA",
    avatarColor: "#00A896"
  }
];
