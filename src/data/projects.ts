export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription?: string;
  discipline: "agentic-ai" | "web3" | "gamified";
  status: "Live" | "In development" | "Expo-shown";
  founderIndices: number[];
  liveLink?: string;
  stack?: string[];
  problem?: string;
  build?: string;
  result?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "rafiki",
    name: "Rafiki",
    shortDescription: "An agentic AI companion for mental health support tailored for East African users.",
    fullDescription: "Rafiki bridges the mental health gap in Uganda by providing accessible, empathetic AI-driven conversations in local languages and English.",
    discipline: "agentic-ai",
    status: "Live",
    founderIndices: [1, 0],
    liveLink: "https://rafiki.app",
    stack: ["Next.js", "Python", "AWS", "Africa's Talking"],
    problem: "Mental health resources in Uganda are scarce — 1 psychiatrist per 1.5 million people. Most people can't access or afford professional help, and stigma makes it harder.",
    build: "We built a multi-turn conversational agent using LLM APIs, grounded in culturally relevant context. Africa's Talking handles SMS fallback for users without data. The system routes critical situations to human counselors.",
    result: "Shown at Makerere University Innovation Expo. Active users across 3 districts. Crisis escalation pipeline validated with local NGO partners.",
    featured: true,
  },
  {
    slug: "driveug",
    name: "DriveUG",
    shortDescription: "A ride-hailing platform built for Uganda's mobile-money-first economy.",
    fullDescription: "DriveUG rethinks the checkout flow for a market where card-first UX fails. Mobile money is the default — not a fallback.",
    discipline: "gamified",
    status: "Live",
    founderIndices: [0, 3],
    liveLink: "https://driveug.app",
    stack: ["Flutter", "Node.js", "Flutterwave", "PostgreSQL"],
    problem: "Card-first checkout doesn't work for Uganda's mobile-money-first users. Existing ride apps lose 60%+ of conversions at payment because they treat mobile money as an afterthought.",
    build: "We rebuilt the payment flow from the ground up with MTN Mobile Money and Airtel Money as primary integrations via Flutterwave. The Flutter app achieves 95+ Lighthouse performance score on Android.",
    result: "Live in Kampala. Mobile money payment success rate 94%. Lighthouse performance: 97. Shown at Uganda ICT Expo 2024.",
    featured: true,
  },
  {
    slug: "velour",
    name: "Velour",
    shortDescription: "A Web3 loyalty and rewards platform for East African small businesses.",
    fullDescription: "Velour gives small businesses the tools to retain customers using blockchain-backed loyalty points without requiring customers to understand crypto.",
    discipline: "web3",
    status: "Expo-shown",
    founderIndices: [1, 4, 5],
    stack: ["Next.js", "Solidity", "Node.js", "PostgreSQL"],
    problem: "Small businesses in Uganda lose customers because they can't compete with big brands on loyalty programs. Traditional point systems are expensive to build and maintain.",
    build: "We abstract away the blockchain entirely. Customers earn points through QR codes, redeemable at any partner business. Smart contracts handle the settlement layer invisibly.",
    result: "Shown at Huawei Seeds for the Future 2024. Pilot with 3 Kampala businesses. Roadmap to production in Q3 2025.",
    featured: true,
  },
  {
    slug: "konnect",
    name: "Konnect",
    shortDescription: "An open-source community platform for African developer communities.",
    discipline: "agentic-ai",
    status: "In development",
    founderIndices: [1, 2],
    stack: ["Next.js", "PostgreSQL", "Docker"],
    featured: false,
  },
];
