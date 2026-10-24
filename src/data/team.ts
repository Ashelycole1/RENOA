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
    name: "Evans",
    role: "Chief Executive Officer",
    location: "Kampala, Uganda",
    bio: "Product strategist focused on venture scaling and commercializing digital infrastructure across East Africa.",
    linkedIn: "https://www.linkedin.com/company/renoa-collective/",
    initials: "EV",
    avatarColor: "#2563EB"
  },
  {
    name: "Natozo Martha",
    role: "Chief Operating Officer",
    location: "Kampala, Uganda",
    bio: "Operational architect coordinating client delivery cadences, talent operations, and project governance.",
    linkedIn: "https://www.linkedin.com/company/renoa-collective/",
    initials: "NM",
    avatarColor: "#05668D"
  },
  {
    name: "Egabo Aaron",
    role: "Project Manager",
    location: "Kampala, Uganda",
    bio: "Agile delivery lead ensuring every sprint ships on time, scope is tightly governed, and client expectations are exceeded.",
    linkedIn: "https://www.linkedin.com/company/renoa-collective/",
    initials: "EA",
    avatarColor: "#028090"
  },
  {
    name: "Alimpa Anne Hillary",
    role: "Finance Lead",
    location: "Kampala, Uganda",
    bio: "Financial strategist managing client contract structures, multi-currency cash flows, and fiscal compliance.",
    linkedIn: "https://www.linkedin.com/company/renoa-collective/",
    initials: "AH",
    avatarColor: "#00A896"
  },
  {
    name: "Onyango John Steven",
    role: "Marketing Lead",
    location: "Kampala, Uganda",
    bio: "Growth marketer bridging product engineering with audience acquisition and enterprise brand partnerships.",
    linkedIn: "https://www.linkedin.com/company/renoa-collective/",
    initials: "JS",
    avatarColor: "#02C39A"
  },
  {
    name: "Niwasiima Ashelycole",
    role: "Co-Founder & CTO",
    location: "Kampala, Uganda",
    bio: "Full-stack systems architect & AI engineer leading software design, LLM orchestration, and core platform delivery.",
    linkedIn: "https://www.linkedin.com/in/ashelycole-niwasiima-627258330/",
    initials: "AN",
    avatarColor: "#2563EB"
  }
];
