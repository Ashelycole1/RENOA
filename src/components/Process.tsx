"use client";

import { CheckCircle, FileText, Code2, ShieldCheck } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Consultation",
    desc: "We sit down with your team to learn your daily operations, identify your main problems, and discover exactly what you need.",
    output: "Problem Analysis",
    icon: CheckCircle,
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We check what is technically possible, study the risks, and create a clear Product Requirement Document (PRD) and system blueprint.",
    output: "Project Roadmap & PRD",
    icon: FileText,
  },
  {
    num: "03",
    title: "Development",
    desc: "Our team writes clean, secure code and connects all necessary systems. We test everything thoroughly to make sure it works perfectly.",
    output: "Working Software",
    icon: Code2,
  },
  {
    num: "04",
    title: "Maintenance",
    desc: "We don't just deliver and leave. We manage the system, fix issues, and continuously improve the software as your business grows.",
    output: "Long-Term Support",
    icon: ShieldCheck,
  },
];

export default function Process() {
  return (
    <section id="services" className="py-24 border-t border-[#e5e5e5] bg-[#fafafa]">
      <div className="wrapper">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-3">
            <span className="label">THE PROCESS</span>
            <h2 className="text-4xl font-bold text-[#0a0a0a] tracking-tight">
              How we turn ideas into reality.
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-[#525252] text-base leading-relaxed">
              Our process is built around momentum and clarity. Each phase turns uncertainty into a concrete output the next phase can depend on.
            </p>
          </div>
        </div>

        {/* Steps: 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e5e5e5] border border-[#e5e5e5] rounded-xl overflow-hidden shadow-xs">
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="bg-white p-7 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Step meta */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-[#0F6B3C]">{step.num}</span>
                    <div className="w-9 h-9 rounded-lg bg-[#0F6B3C] text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-[#0a0a0a]">{step.title}</h3>
                    <p className="text-sm text-[#525252] leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Output */}
                <div className="pt-4 border-t border-[#e5e5e5] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#a3a3a3] uppercase tracking-wider font-semibold">OUTPUT</span>
                  <span className="text-xs font-mono font-bold text-[#0a0a0a] bg-[#fafafa] border border-[#e5e5e5] px-2.5 py-1 rounded">
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
