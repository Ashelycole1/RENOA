export interface Service {
  slug: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  promise: string;
  targetAudience: string;
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
  stack: string[];
  relatedProjectSlug: string;
  timeline: string;
  startingRange: { usd: string; ugx: string };
  faqs: { question: string; answer: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: "product-design",
    title: "Product Design",
    shortDesc: "User research, product strategy, high-fidelity prototypes, and scalable design systems that de-risk software before writing code.",
    longDesc: "We shape raw ideas into intuitive, elegant digital products. Through rapid discovery sprints, customer journey mapping, and interactive prototypes, we validate your core value proposition and give your engineering team an airtight blueprint to build with confidence.",
    promise: "Turn ambiguous concepts into validated, investor-ready interactive product prototypes in 2 to 4 weeks.",
    targetAudience: "Founders validating an MVP, startups redesigning an existing product with UX friction, or enterprises digitizing manual workflows.",
    deliverables: [
      "Discovery workshops & user persona analysis",
      "Information architecture & user journey flows",
      "Interactive Figma prototypes (desktop & mobile)",
      "Comprehensive design systems & component tokens",
      "Usability testing sessions with real users",
      "Developer handoff documentation & asset packs"
    ],
    process: [
      { step: "01", title: "Problem Framing", desc: "We interview stakeholders and prospective users to identify true business constraints and technical realities." },
      { step: "02", title: "Wireframing & Journeys", desc: "We map end-to-end screens, edge cases, error states, and high-conversion paths." },
      { step: "03", title: "Visual Design & System", desc: "We apply brand aesthetics, typography hierarchy, micro-interactions, and design tokens." },
      { step: "04", title: "Validation & Handoff", desc: "We test click-through prototypes and deliver documented specs for zero-friction engineering." }
    ],
    stack: ["Figma", "Design Tokens", "Tailwind CSS", "Whimsical", "UsabilityHub"],
    relatedProjectSlug: "renoa-brand",
    timeline: "2 – 4 weeks",
    startingRange: { usd: "$2,500", ugx: "UGX 9,500,000" },
    faqs: [
      {
        question: "Do you provide Figma files that my internal developers can build from?",
        answer: "Yes. Every design project comes with full Figma source files, reusable auto-layout component libraries, style guides, and design tokens directly mappable to Tailwind or CSS variables."
      },
      {
        question: "How involved is our team during the design sprint?",
        answer: "We run tight asynchronous updates with two scheduled milestone reviews per week. You have direct access to our design leads on Slack or WhatsApp."
      }
    ]
  },
  {
    slug: "platform-development",
    title: "Platform Development",
    shortDesc: "Production web applications, SaaS platforms, custom internal tools, and high-throughput APIs built for scale and speed.",
    longDesc: "We engineer full-stack platforms using modern TypeScript and Next.js foundations. From database architecture and authenticated API gateways to real-time sync and cloud deployment, our software is engineered to handle real customer volume with sub-second response times.",
    promise: "Deploy production-grade, secure, and maintainable software ready for paying users.",
    targetAudience: "Companies launching new SaaS products, businesses scaling past no-code limitations, and teams requiring high-performance web applications.",
    deliverables: [
      "Modern Next.js 15 / React full-stack applications",
      "Scalable relational databases (PostgreSQL, Supabase)",
      "Robust REST & GraphQL APIs with schema validation",
      "Role-based access control (RBAC) & OAuth authentication",
      "Automated CI/CD pipelines & Vercel/AWS infrastructure",
      "100% intellectual property & source code handover"
    ],
    process: [
      { step: "01", title: "Architecture & Schema", desc: "We design database schemas, API contracts, security policies, and technical specifications." },
      { step: "02", title: "Sprint-Based Engineering", desc: "Weekly milestone releases with automated preview deployments and continuous testing." },
      { step: "03", title: "Quality Assurance & Load", desc: "End-to-end user flows, cross-device mobile testing, performance audits, and security checks." },
      { step: "04", title: "Production Launch", desc: "Zero-downtime deployment, domain connection, monitoring setup, and codebase transfer." }
    ],
    stack: ["Next.js", "TypeScript", "React", "PostgreSQL", "Supabase", "Node.js", "Docker", "Vercel"],
    relatedProjectSlug: "driveug",
    timeline: "6 – 10 weeks",
    startingRange: { usd: "$8,500", ugx: "UGX 32,000,000" },
    faqs: [
      {
        question: "Who owns the source code upon completion?",
        answer: "You own 100% of the intellectual property, git repositories, database credentials, and cloud assets. We never lock you into proprietary vendor frameworks."
      },
      {
        question: "Do you support the platform after launch?",
        answer: "Yes. Every project includes a 30-day post-launch warranty, and we offer monthly retainer squads for continuous feature development and DevOps maintenance."
      }
    ]
  },
  {
    slug: "ai-automation",
    title: "AI & Automation",
    shortDesc: "Constitutional RAG systems, localized intelligence, autonomous workflow pipelines, and enterprise LLM integrations.",
    longDesc: "We take generative AI beyond toy chat interfaces into reliable business software. We build systems that reason over proprietary documents, adhere to strict regulatory compliance, and automate complex multi-step workflows with verifiable citation guardrails.",
    promise: "Implement enterprise AI systems with verifiable accuracy, zero hallucination of critical facts, and cost-optimized latency.",
    targetAudience: "Law firms, universities, financial institutions, and businesses with large private document bases or manual data-entry operations.",
    deliverables: [
      "Retrieval-Augmented Generation (RAG) over private documents",
      "Custom system prompt engineering & guardrail enforcement",
      "Multi-agent autonomous workflow orchestration",
      "Document ingestion, OCR, and semantic vector indexing",
      "AI cost, token-budget, and latency optimization",
      "Human-in-the-loop review dashboards"
    ],
    process: [
      { step: "01", title: "Knowledge Ingestion", desc: "We clean, chunk, and embed your domain documentation into optimized vector stores." },
      { step: "02", title: "Guardrails & Citation Logic", desc: "We build strict verification prompts that enforce citations and suppress unsupported claims." },
      { step: "03", title: "Interface Integration", desc: "We deliver natural-language search, comparative side-by-side views, and export tools." },
      { step: "04", title: "Evaluation & Monitoring", desc: "We benchmark hallucination rates, latency, and token consumption under real user traffic." }
    ],
    stack: ["Gemini 2.5 Pro/Flash", "Python", "FastAPI", "ChromaDB / pgvector", "LangChain", "Next.js"],
    relatedProjectSlug: "lawbuddy",
    timeline: "4 – 8 weeks",
    startingRange: { usd: "$5,000", ugx: "UGX 19,000,000" },
    faqs: [
      {
        question: "Is our proprietary data used to train public AI models?",
        answer: "Never. We exclusively use private enterprise APIs and isolated vector databases with contractual guarantees that zero client data is logged or used for public foundation model training."
      },
      {
        question: "How do you prevent hallucinations in critical domains like law or finance?",
        answer: "We use strict hybrid search (keyword + semantic vector), threshold filtering, and deterministic fallback rules. If the exact answer is not present in verified source text, the model explicitly acknowledges the limitation."
      }
    ]
  },
  {
    slug: "brand-identity",
    title: "Brand Identity",
    shortDesc: "Distinctive brand positioning, logos, 3D isometric visual assets, and design systems for companies that mean business.",
    longDesc: "Great software deserves an aesthetic that commands trust from day one. We craft distinctive identities combining bold typography, sleek dark and light color systems, custom 3D isometric iconography, and comprehensive brand guidelines that make your company instantly memorable.",
    promise: "Equip your business with an authoritative, modern brand identity that elevates perceived value and investor confidence.",
    targetAudience: "New software studios, fintech startups, and scaling businesses looking to shed an amateur look for enterprise-grade polish.",
    deliverables: [
      "Primary brand mark, logotype, and favicon suite",
      "Curated color palette with light and dark mode tokens",
      "Typography pairings and layout scales",
      "Custom 3D isometric illustration assets and icons",
      "Investor pitch deck templates & social media kits",
      "Living brand style guide website or PDF"
    ],
    process: [
      { step: "01", title: "Market Positioning", desc: "We analyze your competitive landscape and establish visual differentiation." },
      { step: "02", title: "Identity Concepts", desc: "We present three distinct conceptual directions with real UI context mockups." },
      { step: "03", title: "3D & Token Production", desc: "We model 3D assets, craft vector icon sets, and establish CSS design variables." },
      { step: "04", title: "Brand Guidelines Pack", desc: "We compile production-ready SVGs, export packages, and documentation." }
    ],
    stack: ["Figma", "Blender 3D", "Adobe Illustrator", "CSS Variables"],
    relatedProjectSlug: "renoa-brand",
    timeline: "3 – 5 weeks",
    startingRange: { usd: "$3,000", ugx: "UGX 11,500,000" },
    faqs: [
      {
        question: "Do you supply all vector file formats for print and digital use?",
        answer: "Yes, you receive high-resolution PNGs, SVGs, source Figma/Illustrator vectors, and web-optimized favicon packages."
      }
    ]
  },
  {
    slug: "mobile-money-integrations",
    title: "Mobile Money & Payments Integrations",
    shortDesc: "Native MTN MoMo, Airtel Money, card processing, automated payouts, and escrow systems designed for East African commerce.",
    longDesc: "In East Africa, Mobile Money is not an afterthought — it is the lifeblood of digital transactions. We build seamless, reliable payment infrastructure supporting MTN Mobile Money and Airtel Money across Uganda and the region, complete with automated webhook reconciliation, failure retries, and host payout disbursement flows.",
    promise: "Enable your users to pay via MTN MoMo and Airtel Money in under 30 seconds with 99%+ webhook reliability.",
    targetAudience: "Marketplaces, e-commerce platforms, mobility apps, subscription services, and fintech companies operating in East Africa.",
    deliverables: [
      "Direct MTN MoMo & Airtel Money Open API integrations",
      "Automated push-to-phone USSD payment prompts",
      "Idempotent webhook handlers & reconciliation systems",
      "Disbursement & automated payout APIs to vendor wallets",
      "Dual-currency accounting (UGX & USD) and card fallbacks (Stripe/Flutterwave)",
      "Financial ledgering, receipt generation, and fraud checks"
    ],
    process: [
      { step: "01", title: "KYC & Merchant Setup", desc: "We guide your telecom merchant account verification and API key provision." },
      { step: "02", title: "Integration & Sandbox Testing", desc: "We build collections, disbursements, and simulate telecom network timeout scenarios." },
      { step: "03", title: "Ledger & Webhook Hardening", desc: "We implement idempotent callbacks so zero payments are missed or double-credited." },
      { step: "04", title: "Live Telecom Production", desc: "We monitor live real-money test transactions on MTN and Airtel before general rollout." }
    ],
    stack: ["MTN MoMo API", "Airtel Money API", "Flutterwave", "Stripe", "Next.js", "PostgreSQL"],
    relatedProjectSlug: "driveug",
    timeline: "3 – 6 weeks",
    startingRange: { usd: "$3,500", ugx: "UGX 13,000,000" },
    faqs: [
      {
        question: "Can you help us get MTN and Airtel API approval?",
        answer: "Yes. We guide you through the merchant onboarding, KYC documentation, and compliance requirements needed for both MTN MoMo and Airtel Money production credentials in Uganda."
      },
      {
        question: "How do you handle telecom network timeouts when a customer enters a PIN?",
        answer: "We implement automated polling fallbacks and idempotent webhook queues. If a telecom callback is delayed, our system verifies transaction status in the background without stranding the user."
      }
    ]
  }
];
