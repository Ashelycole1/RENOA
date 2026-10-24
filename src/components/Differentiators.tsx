"use client";

import Link from "next/link";

const DIFFERENTIATORS = [
  {
    icon: (
      <svg className="w-6 h-6 text-[var(--accent)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
    ),
    title: "Native Mobile Money Mastery",
    desc: "We don't treat African payments as a secondary plugin. We engineer direct MTN MoMo and Airtel Money integrations with resilient webhook handling, USSD pushes, and automated merchant payouts."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[var(--accent)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
    ),
    title: "Locally Grounded AI Systems",
    desc: "From the 1995 Ugandan Constitution to localized STEM learning, our AI implementations are constrained by verifiable citation guardrails that eliminate hallucinations in mission-critical applications."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[var(--accent)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    title: "Direct Senior Engineering",
    desc: "Zero junior agency layers. Every sprint is directly architected, reviewed, and shipped by our co-founders and senior leads. You have direct access to our CTO and leads on Slack or WhatsApp."
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[var(--accent)]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><polyline points="9 12 11 14 15 10"/></svg>
    ),
    title: "100% IP & Code Ownership",
    desc: "You own every line of code, every database migration, and every Figma component. We provide clean Git repositories, automated deployment pipelines, and zero proprietary framework lock-in."
  }
];

export default function Differentiators() {
  return (
    <section className="py-24 border-t border-[#0000000d] bg-[#f9fafb]">
      <div className="wrapper max-w-[1160px]">
        {/* Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto space-y-3">
          <span className="label">The RENOA Difference</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
            Why founders choose our Kampala studio.
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)]">
            A software studio that combines African commercial realities with world-class engineering discipline.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIATORS.map((diff) => (
            <div
              key={diff.title}
              className="rounded-2xl border border-[#0000000d] bg-white p-7 shadow-xs space-y-4 hover:border-[var(--accent)] hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EAF2FF] flex items-center justify-center">
                {diff.icon}
              </div>
              <h3 className="text-lg font-bold text-[#111]">
                {diff.title}
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                {diff.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-12 rounded-2xl border border-[#2563EB]/20 bg-[#EAF2FF]/50 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-[#111]">
              Ready to validate your product architecture?
            </h4>
            <p className="text-xs text-[var(--text-secondary)]">
              Schedule a 30-minute discovery call to review your scope, tech stack, and timeline.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-[var(--accent)] px-6 text-xs font-semibold text-white transition-colors hover:bg-[var(--accent-hover)] shrink-0"
          >
            Schedule Discovery Call →
          </Link>
        </div>
      </div>
    </section>
  );
}
