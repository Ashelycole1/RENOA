"use client";

import { Bot, Globe, ShieldAlert, Palette } from "lucide-react";

const CAPABILITY_PILLARS = [
  {
    number: "01",
    title: "Intelligence & Automation",
    description:
      "AI systems, LLM-driven workflows, and automation that thinks ahead of the busywork, so your team doesn't have to.",
    tags: ["Agentic Workflows", "Vector RAG", "Custom LLMs", "Process Automation"],
    icon: Bot,
    color: "#4F7CFF",
  },
  {
    number: "02",
    title: "Web & App Development",
    description:
      "Production-grade web platforms and mobile apps, built to hold up under real users, not just demos.",
    tags: ["Next.js & React", "TypeScript", "Web3 / On-Chain", "Mobile Apps"],
    icon: Globe,
    color: "#00F0FF",
  },
  {
    number: "03",
    title: "ICT Consultation",
    description:
      "Technical strategy, infrastructure audits, and roadmap decisions for teams who need a second set of eyes before they build.",
    tags: ["System Architecture", "Security Audits", "Cloud Infrastructure", "PRD Generation"],
    icon: ShieldAlert,
    color: "#8A5CF5",
  },
  {
    number: "04",
    title: "Brand Design & Marketing",
    description:
      "Identity systems, visual language, and go-to-market storytelling that make a product feel credible from launch day.",
    tags: ["Brand Systems", "UI/UX Design", "Go-To-Market", "Motion Design"],
    icon: Palette,
    color: "#38BDF8",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 border-b border-[#1C2A3A]">
      <div className="container">
        {/* Header */}
        <div className="mb-16 space-y-3">
          <div className="flex items-center gap-2">
            <span className="number-motif">04 PILLARS</span>
            <span className="text-xs uppercase font-semibold text-[#4F7CFF] tracking-wider">
              CAPABILITIES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Built for every product need.
          </h2>
          <p className="text-[#9AA5B1] text-base max-w-2xl">
            Four specialized engineering pillars designed to cover your full product lifecycle from strategy to production release.
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAPABILITY_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative bg-[#0F1B29] border border-[#1C2A3A] hover:border-[#4F7CFF]/50 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:bg-[#142436]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-xl bg-[#071019] border border-[#1C2A3A] flex items-center justify-center transition-colors"
                      style={{ color: pillar.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-[#627284]">
                      PILLAR {pillar.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#4F7CFF] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#9AA5B1] leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1C2A3A]/70">
                  <div className="flex flex-wrap gap-2">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs text-[#9AA5B1] bg-[#071019] border border-[#1C2A3A] rounded-lg font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
