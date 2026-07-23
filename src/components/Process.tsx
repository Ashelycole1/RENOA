"use client";

import { CheckCircle, FileText, Code2, ShieldCheck } from "lucide-react";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We learn your operations, your users, and the problem worth solving before touching a spec.",
    output: "Problem Analysis",
    icon: CheckCircle,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We map the technical approach — agentic workflows, on-chain components, or game-loop design — into a PRD and system blueprint.",
    output: "Project Roadmap & PRD",
    icon: FileText,
  },
  {
    number: "03",
    title: "Build",
    description:
      "Clean, secure, tested code across the stack — from smart contracts to AI agents to production UI.",
    output: "Working Software",
    icon: Code2,
  },
  {
    number: "04",
    title: "Maintain",
    description:
      "We stay on as the system scales — monitoring agents, upgrading contracts, tuning game economies.",
    output: "Long-Term Support",
    icon: ShieldCheck,
  },
];

export default function Process() {
  return (
    <section className="py-24 border-b border-[#1C2A3A] bg-[#071019]/60">
      <div className="container">
        {/* Header */}
        <div className="mb-16 space-y-3">
          <div className="flex items-center gap-2">
            <span className="number-motif">01–04</span>
            <span className="text-xs uppercase font-semibold text-[#4F7CFF] tracking-wider">
              THE PROCESS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How we turn ideas into reality.
          </h2>
          <p className="text-[#9AA5B1] text-base max-w-2xl">
            A structured, contractual methodology that de-risks software development and guarantees delivery at every milestone.
          </p>
        </div>

        {/* 4-Step Process Grid (Afro Labs Structural Pattern) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative bg-[#0F1B29] border border-[#1C2A3A] hover:border-[#4F7CFF]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:bg-[#142436]"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-[#4F7CFF]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#071019] border border-[#1C2A3A] flex items-center justify-center text-[#4F7CFF] group-hover:text-white group-hover:bg-[#4F7CFF] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#9AA5B1] leading-relaxed mb-8">
                    {step.description}
                  </p>
                </div>

                {/* Named Deliverable Output (Afro Labs Signature Element) */}
                <div className="pt-4 border-t border-[#1C2A3A] flex items-center justify-between text-xs">
                  <span className="text-[#627284] font-mono uppercase tracking-wider text-[10px]">
                    DELIVERABLE
                  </span>
                  <span className="font-mono font-semibold text-[#00F0FF] bg-[#071019] px-2.5 py-1 rounded border border-[#1C2A3A]">
                    {step.output}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
