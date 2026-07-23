"use client";

import { Bot, Globe, ShieldAlert, Palette, Cpu } from "lucide-react";

const SERVICES = [
  {
    icon: Bot,
    title: "Intelligence & Automation",
    description: "AI systems, LLM-driven workflows, and automation that thinks ahead of the busywork, so your team doesn't have to.",
    tags: ["Agentic Workflows", "Vector RAG", "Custom LLMs", "Automation"],
  },
  {
    icon: Globe,
    title: "Web & App Development",
    description: "Production-grade web platforms and mobile apps, built to hold up under real users, not just demos.",
    tags: ["Next.js & React", "TypeScript", "Mobile Money", "Mobile Apps"],
  },
  {
    icon: ShieldAlert,
    title: "ICT Consultation",
    description: "Technical strategy, infrastructure audits, and roadmap decisions for teams who need a second set of eyes before they build.",
    tags: ["System Architecture", "Security Audits", "Cloud Infrastructure"],
  },
  {
    icon: Palette,
    title: "Brand Design & Marketing",
    description: "Identity systems, visual language, and go-to-market storytelling that make a product feel credible from launch day.",
    tags: ["Brand Systems", "UI/UX Design", "Go-To-Market", "Motion"],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 border-t border-[#e5e5e5]">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Title, Subline, Stippled 3D Illustration */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-3">
              <span className="label">CAPABILITIES</span>
              <h2 className="text-4xl font-bold text-[#0a0a0a] tracking-tight">
                Built for every product need.
              </h2>
              <p className="text-[#525252] text-base leading-relaxed">
                Composable by design, our team adapts to the unique challenges of your project. Simplify operational complexity with fast, flexible solutions built for ROI at scale.
              </p>
            </div>

            {/* Stippled 3D Dot-Matrix Illustration (Green Stippled Theme) */}
            <div className="p-6 bg-[#fafafa] border border-[#e5e5e5] rounded-xl space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0F6B3C]">
                <Cpu className="w-4 h-4 text-[#0F6B3C]" />
                <span>STIPPLED MATRIX SYSTEM</span>
              </div>

              {/* Dot Grid Stippled Visual */}
              <div className="grid grid-cols-8 gap-2 py-2">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all ${
                      i % 3 === 0
                        ? "bg-[#0F6B3C]"
                        : i % 2 === 0
                        ? "bg-[#0F6B3C]/40"
                        : "bg-[#e5e5e5]"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-[#a3a3a3] font-mono">
                <span>4 CORE PILLARS</span>
                <span className="text-[#0F6B3C] font-semibold">FLEXIBLE & SCALABLE →</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillar Cards */}
          <div className="lg:col-span-7 space-y-4">
            {SERVICES.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="card p-7 space-y-4 hover:border-[#0F6B3C]/40 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#0F6B3C] text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#0F6B3C]">
                      PILLAR 0{idx + 1}
                    </span>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-xl font-bold text-[#0a0a0a]">{s.title}</h3>
                    <p className="text-sm text-[#525252] leading-relaxed">{s.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#e5e5e5]">
                    {s.tags.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
