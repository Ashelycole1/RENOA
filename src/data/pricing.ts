export interface EngagementModel {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  popular?: boolean;
  timeline: string;
  idealFor: string;
  features: string[];
  ctaLabel: string;
}

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    id: "discovery-sprint",
    name: "Discovery Sprint",
    tagline: "De-risk your product concept, validate user flows, and get an investor-ready Figma prototype.",
    timeline: "2 weeks",
    idealFor: "Early-stage founders validating ideas or preparing for pitch meetings.",
    features: [
      "User research & competitive analysis",
      "Interactive Figma click-through prototype",
      "Full design system tokens & typography",
      "Technical Architecture & PRD document",
      "Sprint roadmap & milestone breakdown",
      "Zero lock-in — own 100% of the designs"
    ],
    ctaLabel: "Book a Discovery Sprint"
  },
  {
    id: "mvp-build",
    name: "MVP Launch Build",
    tagline: "From zero to live production software with payments, authentication, and core business workflows.",
    popular: true,
    badge: "MOST POPULAR",
    timeline: "6 – 8 weeks",
    idealFor: "Startups ready to launch, onboard real customers, and start generating revenue.",
    features: [
      "Everything in Discovery Sprint",
      "Production Next.js full-stack web app",
      "MTN MoMo & Airtel Money payment integration",
      "PostgreSQL database & secure auth (OAuth/Email)",
      "Admin management & metrics dashboard",
      "30-day post-launch warranty & bug fixes",
      "100% IP & source code repository transfer"
    ],
    ctaLabel: "Start an MVP Build"
  },
  {
    id: "dedicated-squad",
    name: "Dedicated Product Squad",
    tagline: "A dedicated senior team of engineering, design, and AI talent working as your embedded tech arm.",
    timeline: "Quarterly or ongoing",
    idealFor: "Funded scale-ups and established enterprises needing high-velocity continuous shipping.",
    features: [
      "Dedicated Full-Stack Developer + Product Designer",
      "Direct fractional CTO / AI Architect oversight",
      "Bi-weekly sprint planning & demo reviews",
      "Direct Slack / WhatsApp channel with the team",
      "Continuous CI/CD deployment & DevOps support",
      "Immediate priority bug resolution SLA",
      "Flexible scope — build what matters most each sprint"
    ],
    ctaLabel: "Engage a Product Squad"
  },
  {
    id: "enterprise-custom",
    name: "Custom Enterprise",
    tagline: "Custom architecture, sovereign AI deployment, and high-security compliance for large institutions.",
    timeline: "Tailored scope",
    idealFor: "Banks, telecom partners, universities, NGOs, and government civic platforms.",
    features: [
      "On-premise / sovereign private cloud deployment",
      "Custom Constitutional RAG over secure archives",
      "Uganda Data Protection Act 2019 compliance audit",
      "Enterprise SLA with 99.9% uptime commitment",
      "Custom telecom settlement & automated reconciliation",
      "Dedicated account manager & 24/7 incident response",
      "Formal NDA & custom contract terms"
    ],
    ctaLabel: "Request Enterprise Brief"
  }
];
