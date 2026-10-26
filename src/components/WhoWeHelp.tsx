"use client";

import Link from "next/link";

const AUDIENCES = [
  {
    tag: "STARTUPS & FOUNDERS",
    title: "Launch an MVP that Means Business",
    desc: "Stop wasting months on theoretical blueprints or fragile no-code prototypes. We architect, design, and ship production-ready web apps with payments in weeks.",
    deliverable: "6–8 week MVP build · 100% IP ownership · Mobile Money native",
    linkText: "Explore Engagement Models",
    href: "/pricing"
  },
  {
    tag: "SCALING SMES & COMMERCE",
    title: "Automate Operations & Accept Mobile Money",
    desc: "Replace spreadsheet bottlenecks and manual reconciliation with custom web platforms, admin portals, and automated MTN MoMo / Airtel Money workflows.",
    deliverable: "Automated payment ledgers · Zero missed transactions · Real-time sync",
    linkText: "See Payment Integrations",
    href: "/services/mobile-money-integrations"
  },
  {
    tag: "LEGAL, EDTECH & CIVIC",
    title: "Grounded AI with Zero Hallucinations",
    desc: "We build domain-specific AI engines (like LAWBUDDY) trained on private statutes, local law, or specialized curricula with strict citation guardrails.",
    deliverable: "100% cited answers · Private enterprise security · Production-hardened LLMs",
    linkText: "Discover AI & Automation",
    href: "/services/ai-automation"
  },
  {
    tag: "GLOBAL TEAMS & BUYERS",
    title: "Senior Product Squads with Timezone Overlap",
    desc: "Hire dedicated East African engineering and product design squads in Kampala (EAT · UTC+3), with 4–6 hours of clean overlap with Europe and the US.",
    deliverable: "Senior talent · Direct founder access · Global quality with high-velocity engineering",
    linkText: "Meet the Team",
    href: "/about"
  }
];

export default function WhoWeHelp() {
  return (
    <section className="py-24 border-t border-[#0000000d] bg-white">
      <div className="wrapper max-w-[1160px]">
        {/* Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto space-y-3">
          <span className="label">Who We Build For</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
            Engineered for founders and teams ready to ship.
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)]">
            Whether you are validating your first commercial product or scaling an established business across East Africa and beyond.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AUDIENCES.map((aud) => (
            <div
              key={aud.tag}
              className="group rounded-2xl border border-[#0000000d] bg-[#fdfdfd] p-8 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-md hover:bg-white flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--accent)] font-mono">
                  {aud.tag}
                </span>
                <h3 className="text-xl font-bold text-[#111] group-hover:text-[var(--accent)] transition-colors">
                  {aud.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                  {aud.desc}
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#0000000a] flex items-center justify-between text-xs">
                <span className="font-mono text-[#6b7280]">
                  {aud.deliverable}
                </span>
                <Link
                  href={aud.href}
                  className="font-semibold text-[var(--accent)] hover:underline inline-flex items-center gap-1 shrink-0 ml-2"
                >
                  {aud.linkText} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
