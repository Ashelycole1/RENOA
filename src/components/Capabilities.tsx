"use client";

import { Bot, Globe, ShieldAlert, Palette, Cpu, Sparkles } from "lucide-react";

const CAPABILITY_PILLARS = [
  {
    number: "01",
    title: "Intelligence & Automation",
    description:
      "AI systems, LLM-driven workflows, and automation that thinks ahead of the busywork, so your team doesn't have to.",
    tags: ["Agentic Workflows", "Vector RAG", "Custom LLMs", "Automation"],
    icon: Bot,
  },
  {
    number: "02",
    title: "Web & App Development",
    description:
      "Production-grade web platforms and mobile apps, built to hold up under real users, not just demos.",
    tags: ["Next.js & React", "TypeScript", "Mobile Money", "Mobile Apps"],
    icon: Globe,
  },
  {
    number: "03",
    title: "ICT Consultation",
    description:
      "Technical strategy, infrastructure audits, and roadmap decisions for teams who need a second set of eyes before they build.",
    tags: ["System Architecture", "Security Audits", "Cloud Infrastructure"],
    icon: ShieldAlert,
  },
  {
    number: "04",
    title: "Brand Design & Marketing",
    description:
      "Identity systems, visual language, and go-to-market storytelling that make a product feel credible from launch day.",
    tags: ["Brand Systems", "UI/UX Design", "Go-To-Market", "Motion"],
    icon: Palette,
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="py-24 border-b border-[#0000000d]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Title, Copy, Stippled Graphic */}
          <div className="lg:col-span-5 space-y-8 sticky top-28">
            <div className="space-y-3">
              <span className="eyebrow">CAPABILITIES</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight">
                Built for every product need.
              </h2>
              <p className="text-[#4B5563] text-base leading-relaxed">
                Composable by design, our team adapts to the unique challenges of your project. Simplify operational complexity with fast, flexible solutions built for ROI at scale.
              </p>
            </div>

            {/* Stippled 3D Dot-Matrix Illustration Box */}
            <div className="p-6 bg-[#f7f7f7] border border-[#0000000d] rounded-2xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0F6B3C]">
                <Cpu className="w-4 h-4 text-[#0F6B3C]" />
                <span>STIPPLED MATRIX SYSTEM</span>
              </div>
              
              {/* Dot Grid Visual Mockup */}
              <div className="grid grid-cols-8 gap-2 py-2 opacity-80">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all ${
                      i % 3 === 0
                        ? "bg-[#0F6B3C]"
                        : i % 2 === 0
                        ? "bg-[#0F6B3C]/40"
                        : "bg-[#0000001a]"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-[#6B7280]">
                <span>4 CORE PILLARS</span>
                <span className="font-mono text-[#0F6B3C]">FLEXIBLE & SCALABLE →</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillar Cards */}
          <div className="lg:col-span-7 space-y-6">
            {CAPABILITY_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.number}
                  className="card-light p-8 flex flex-col justify-between hover:border-[#0F6B3C]/40"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#0F6B3C] text-white flex items-center justify-center shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-mono text-xs font-bold text-[#0F6B3C]">
                        PILLAR {pillar.number}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#111827]">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#0000000d]">
                    <div className="flex flex-wrap gap-2">
                      {pillar.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs text-[#4B5563] bg-[#f7f7f7] border border-[#0000000d] rounded-md font-mono"
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
      </div>
    </section>
  );
}
