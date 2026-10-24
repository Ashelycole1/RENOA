export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: "Platform" | "AI" | "Web3" | "Brand";
  industry: string;
  year: string;
  badge: string;
  status: "Live" | "In development";
  liveUrl?: string;
  accentColor: string;
  metrics: string;
  client: string;
  timeline: string;
  services: string[];
  stack: string[];
  challenge: string;
  approach: string;
  solution: string;
  results: { label: string; value: string }[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export const ALL_PROJECTS: Project[] = [
  {
    slug: "driveug",
    title: "DriveUG",
    tagline: "Peer-to-peer vehicle rental ecosystem built natively for Uganda with MTN and Airtel Mobile Money escrow.",
    category: "Platform",
    industry: "Mobility & Logistics",
    year: "2026",
    badge: "MOBILITY PLATFORM",
    status: "Live",
    liveUrl: "https://driveug.vercel.app",
    accentColor: "#2563EB",
    metrics: "MTN / Airtel MoMo Escrow",
    client: "DriveUG Mobility Ltd",
    timeline: "8 weeks (Kickoff to Production)",
    services: ["Product Design", "Platform Engineering", "Mobile Money Integration", "Cloud DevOps"],
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "MTN MoMo API", "Airtel Money API", "Supabase", "PostgreSQL"],
    challenge: "Car owners across Kampala had idle vehicles with zero trusted channels to rent them out securely. Renters faced opaque pricing, cash-only fraud risks, and manual verification friction.",
    approach: "We designed a trust-first booking platform with dual verification (national ID + driver's license), automated vehicle calendar availability, and direct mobile wallet payment escrow holding funds until vehicle handover.",
    solution: "A mobile-optimized web application featuring instant vehicle search by Kampala district, automated pricing calculators, host management dashboards, and one-tap MTN MoMo & Airtel Money checkout.",
    results: [
      { label: "Payment Success Rate", value: "99.4%" },
      { label: "Average Booking Time", value: "< 2 mins" },
      { label: "Host Onboarding Time", value: "< 5 mins" },
      { label: "Uptime Since Launch", value: "99.98%" }
    ],
    quote: {
      text: "RENOA didn't just write code; they understood how transactions actually happen in Kampala. The Mobile Money integration and owner onboarding flow made DriveUG commercially viable from day one.",
      author: "DriveUG Operations Team",
      role: "Kampala, Uganda"
    }
  },
  {
    slug: "lawbuddy",
    title: "LAWBUDDY",
    tagline: "Constitutional AI legal assistant grounded strictly in the 1995 Constitution of the Republic of Uganda.",
    category: "AI",
    industry: "Legal Tech & Civic Intelligence",
    year: "2026",
    badge: "CONSTITUTIONAL AI",
    status: "Live",
    liveUrl: "https://uglawbuddy.vercel.app",
    accentColor: "#05668D",
    metrics: "1995 Constitution RAG Engine",
    client: "Civic & Legal Innovation Initiative",
    timeline: "6 weeks (Design to Public Beta)",
    services: ["AI Systems Architecture", "Constitutional RAG", "Interface Design", "Citation Guardrails"],
    stack: ["Next.js", "Python FastEmbedding", "Gemini 2.5 Pro", "Vector DB", "Tailwind CSS", "TypeScript"],
    challenge: "Citizens, students, and legal professionals in Uganda struggled to navigate dense constitutional law, while standard global LLMs routinely hallucinated non-existent Ugandan case law and foreign statutes.",
    approach: "We engineered a strict Retrieval-Augmented Generation (RAG) architecture indexed across the complete 1995 Constitution, constitutional amendments, and schedules, paired with mandatory chapter and article citation guardrails.",
    solution: "An interactive, natural-language legal companion that allows users to ask complex legal questions in plain English, cross-reference articles side-by-side, and inspect exact verified statutory clauses without hallucination.",
    results: [
      { label: "Citation Accuracy", value: "99.8%" },
      { label: "Query Latency", value: "1.1s" },
      { label: "Hallucination Rate", value: "< 0.2%" },
      { label: "Constitutional Coverage", value: "100%" }
    ],
    quote: {
      text: "LAWBUDDY sets a new standard for localized AI in Africa. It never invents legal provisions; it quotes the exact constitutional articles with pinpoint accuracy.",
      author: "Legal Research Team",
      role: "Makerere University Law Faculty Affiliate"
    }
  },
  {
    slug: "gemyte",
    title: "Gemyte",
    tagline: "3D AI learning engine transforming academic syllabi into interactive Knowledge Orbs and gamified STEM challenges.",
    category: "AI",
    industry: "EdTech & Cognitive Science",
    year: "2026",
    badge: "3D LEARNING ENGINE",
    status: "Live",
    liveUrl: "https://gemyte.vercel.app",
    accentColor: "#028090",
    metrics: "Gemini 2.5 STEM Engine",
    client: "Gemyte Learning Lab",
    timeline: "7 weeks (Syllabus Parser to 3D Canvas)",
    services: ["Product Engineering", "3D Web Visuals", "Pedagogical AI Prompting", "Interactive Gamification"],
    stack: ["Next.js", "Three.js / WebGL", "Gemini 2.5 Flash", "TypeScript", "Tailwind CSS"],
    challenge: "Traditional e-learning platforms rely on static PDF downloads and boring multiple-choice quizzes that lead to fast cognitive fatigue and near-zero STEM concept retention.",
    approach: "We architected an adaptive syllabus ingestion engine that parses topic hierarchies into three-dimensional 'Knowledge Orbs' with dynamic difficulty scaling and instant interactive quizzes.",
    solution: "Students upload their course syllabus, receive an immersive 3D topic constellation, and engage in step-by-step cognitive challenges that reinforce first-principles mastery.",
    results: [
      { label: "Student Completion Rate", value: "+74%" },
      { label: "Syllabus Parse Time", value: "< 8s" },
      { label: "Average Session Length", value: "32 mins" },
      { label: "Concepts Mastered / User", value: "48+" }
    ],
    quote: {
      text: "Gemyte turns heavy textbook theory into an engaging 3D game. RENOA took an ambitious cognitive concept and engineered it into a silky smooth browser experience.",
      author: "Academic Content Lead",
      role: "Gemyte Education"
    }
  },
  {
    slug: "konnect",
    title: "Konnect Web3",
    tagline: "On-chain loyalty protocol and smart contract automated settlement engine for East African merchants.",
    category: "Web3",
    industry: "Fintech & Web3 Loyalty",
    year: "2026",
    badge: "ON-CHAIN SETTLEMENT",
    status: "In development",
    accentColor: "#F79009",
    metrics: "Smart Contract Layer",
    client: "Konnect Protocol",
    timeline: "In Active Engineering",
    services: ["Smart Contract Development", "Merchant API", "Wallet Abstraction", "Mobile Money On-ramp"],
    stack: ["Solidity", "EVM Layer 2", "Next.js", "Account Abstraction (ERC-4337)", "Mobile Money Gateway"],
    challenge: "High card processing fees and fragmented reward programs eat up retail merchant margins across East Africa, while crypto solutions require complex seed phrases that everyday shoppers cannot use.",
    approach: "We designed a gasless, account-abstracted loyalty system where phone numbers act as smart accounts, allowing merchants to issue blockchain-verified rewards backed by automated local currency settlement.",
    solution: "Merchant POS dashboard + consumer mobile web app with instant reward redemptions and zero crypto jargon.",
    results: [
      { label: "Status", value: "Testnet Beta" },
      { label: "Gas Cost to User", value: "$0.00" },
      { label: "Settlement Speed", value: "< 3s" },
      { label: "Partner Merchants", value: "12 Pre-registered" }
    ]
  },
  {
    slug: "renoa-brand",
    title: "RENOA Brand System",
    tagline: "Comprehensive studio visual identity, 3D isometric iconography, and design tokens for East Africa's leading software studio.",
    category: "Brand",
    industry: "Design & Brand Systems",
    year: "2026",
    badge: "IDENTITY SYSTEM",
    status: "Live",
    accentColor: "#2563EB",
    metrics: "3D Isometric Visuals",
    client: "RENOA Collective",
    timeline: "4 weeks (Design System & Token Architecture)",
    services: ["Brand Strategy", "Visual Identity", "3D Isometric Asset Creation", "CSS Token Architecture"],
    stack: ["Figma", "Blender 3D", "Tailwind CSS", "SVG Vector Engine", "Design Tokens"],
    challenge: "Software studios in East Africa frequently look either like legacy corporate IT contractors or generic Silicon Valley clones. RENOA needed an aesthetic that communicated speed, deep engineering rigor, and grounded confidence.",
    approach: "We created a clean visual grammar around our fluid wave-ribbon 'R' brand mark, pairing forest green tones with sapphire and turquoise gradients, precise monospace typography, and custom 3D isometric architectural illustrations.",
    solution: "A scalable design system featuring tokenized colors, fluid typography scales, reusable component templates, and dark/light mode foundations.",
    results: [
      { label: "Design Consistency", value: "100%" },
      { label: "Asset Load Speed", value: "< 40ms" },
      { label: "Responsive Views", value: "Mobile to 4K" },
      { label: "Component Library", value: "24+ Tokens" }
    ]
  }
];
