export interface FAQItem {
  question: string;
  answer: string;
  category: "General" | "Engagement & Milestones" | "Process & Timeline" | "IP & Security" | "Support";
}

export const FAQS: FAQItem[] = [
  {
    category: "General",
    question: "Where is RENOA based, and how do you work with international clients?",
    answer: "RENOA is headquartered in Kampala, Uganda (East Africa Time, UTC+3). Our timezone provides 4 to 6 hours of clean working overlap with Europe and the Middle East, and convenient early-morning synchronization with the US East Coast. We communicate seamlessly via Slack, WhatsApp, Google Meet, and Loom asynchronous video walk-throughs."
  },
  {
    category: "Engagement & Milestones",
    question: "How do you structure project milestones and scoping?",
    answer: "Every project begins with a crystal-clear technical specification and delivery roadmap. Sprints are broken down into measurable 2-week milestones with tangible deliverables (clickable prototypes, staging previews, production deployment sign-offs) so you always have full visibility into velocity."
  },
  {
    category: "Engagement & Milestones",
    question: "How do you coordinate with our internal team during sprints?",
    answer: "We integrate directly into your workflows. You get a dedicated Slack or WhatsApp channel, weekly recorded video walkthroughs, and access to private staging URLs where you can test live progress continuously as features are merged."
  },
  {
    category: "IP & Security",
    question: "Who owns the intellectual property and code upon project completion?",
    answer: "You do. 100%. Upon project sign-off and milestone delivery, full intellectual property, all GitHub repositories, Figma source files, database credentials, and production secrets are legally transferred to your company. We never retain proprietary rights or charge licensing royalties."
  },
  {
    category: "IP & Security",
    question: "Do you sign Non-Disclosure Agreements (NDAs)?",
    answer: "Yes, we sign mutual NDAs before reviewing sensitive business documents, proprietary data sets, or technical specifications. Your confidentiality is protected under contractual law."
  },
  {
    category: "Process & Timeline",
    question: "How fast can you take an MVP from idea to live launch?",
    answer: "Our standard MVP launch timeline is 6 to 8 weeks. Because our engineering stack (Next.js, Supabase, Tailwind, Mobile Money APIs) is pre-architected and standardized, we bypass boilerplate setup and spend sprint hours directly on your unique product value."
  },
  {
    category: "Support",
    question: "What happens after the product is launched?",
    answer: "Every custom build includes a complimentary 30-day post-launch warranty covering any unforeseen bugs or configuration adjustments. Afterwards, clients can transition to an ongoing maintenance squad or on-demand engineering support for feature expansions, security updates, and infrastructure scaling."
  },
  {
    category: "General",
    question: "Can RENOA build both web and mobile experiences?",
    answer: "Yes. We specialize in high-performance Progressive Web Applications (PWAs) and responsive mobile web apps that deliver app-store caliber UX on mobile browsers without app-store gatekeeping or separate iOS/Android codebases. When native apps are required, we build with React Native."
  }
];
