"use client";

import { CheckCircle, FileText, Code2, ShieldCheck } from "lucide-react";

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We sit down with your team to learn your daily operations, identify your main problems, and discover exactly what you need.",
    output: "Problem Analysis",
    icon: CheckCircle,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We check what is technically possible, study the risks, and create a clear Product Requirement Document (PRD) and system blueprint.",
    output: "Project Roadmap & PRD",
    icon: FileText,
  },
  {
    number: "03",
    title: "Development",
    description:
      "Our team writes clean, secure code and connects all necessary systems. We test everything thoroughly to make sure it works perfectly.",
    output: "Working Software",
    icon: Code2,
  },
  {
    number: "04",
    title: "Maintenance",
    description:
      "We don't just deliver and leave. We manage the system, fix issues, and continuously improve the software as your business grows.",
    output: "Long-Term Support",
    icon: ShieldCheck,
  },
];

export default function Process() {
  return (
    <section className="py-24 border-b border-[#0000000d] bg-[#f7f7f7]/60">
      <div className="container">
        {/* Header */}
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-6 space-y-2">
            <span className="eyebrow">THE PROCESS</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight">
              How we turn ideas into reality.
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[#4B5563] text-base leading-relaxed">
              Our process is built around momentum and clarity. Each phase turns uncertainty into a concrete output the next phase can depend on.
            </p>
          </div>
        </div>

        {/* 4-Step Process Row (Afro Labs Structural Pattern) */}
        <div className="bg-white border border-[#0000000d] rounded-2xl shadow-sm overflow-hidden divide-y lg:divide-y-0 lg:divide-x divide-[#0000000d] grid grid-cols-1 lg:grid-cols-4">
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-6">
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-[#0F6B3C]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#0F6B3C] text-white flex items-center justify-center shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#111827]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#4B5563] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Output Deliverable */}
                <div className="pt-4 border-t border-[#0000000d] flex items-center justify-between text-xs">
                  <span className="text-[#9CA3AF] font-mono uppercase tracking-wider text-[10px] font-semibold">
                    OUTPUT
                  </span>
                  <span className="font-mono font-bold text-[#111827] bg-[#f7f7f7] px-2.5 py-1 rounded border border-[#0000000d]">
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
