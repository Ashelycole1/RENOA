"use client";

import { Users, Code, ShieldCheck, PieChart, Megaphone, Terminal } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Evans",
    role: "Chief Executive Officer (CEO)",
    shortRole: "CEO",
    icon: ShieldCheck,
  },
  {
    name: "Natozo Martha",
    role: "Chief Operating Officer (COO)",
    shortRole: "COO",
    icon: Users,
  },
  {
    name: "Egabo Aaron",
    role: "Project Manager (PM)",
    shortRole: "Project Lead",
    icon: Code,
  },
  {
    name: "Alimpa Anne Hillary",
    role: "Finance Lead",
    shortRole: "Finance",
    icon: PieChart,
  },
  {
    name: "Onyango John Steven",
    role: "Marketing Lead",
    shortRole: "Marketing",
    icon: Megaphone,
  },
  {
    name: "Niwasiima Ashelycole",
    role: "Co-Founder & CTO",
    shortRole: "Co-Founder & CTO",
    icon: Terminal,
  },
];

export default function TeamStrip() {
  return (
    <section className="py-16 border-b border-[#0000000d] bg-[#f7f7f7]/40">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="eyebrow">LEADERSHIP TEAM</span>
            </div>
            <h3 className="text-xl font-bold text-[#111827]">
              Engineered by an adaptive co-founder team in Kampala.
            </h3>
          </div>
          <span className="text-xs text-[#6B7280] font-mono">
            KAMPALA · EAST AFRICA · GLOBAL
          </span>
        </div>

        {/* 6-Entry Horizontal Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {TEAM_MEMBERS.map((member) => {
            const Icon = member.icon;
            return (
              <div
                key={member.name}
                className="bg-white border border-[#0000000d] hover:border-[#0F6B3C]/40 rounded-xl p-4 flex flex-col justify-between transition-colors shadow-sm group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#E4F3EA] text-[#0F6B3C] flex items-center justify-center group-hover:bg-[#0F6B3C] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-[#6B7280] uppercase font-semibold">
                    {member.shortRole}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#111827] group-hover:text-[#0F6B3C] transition-colors leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-[11px] text-[#4B5563] mt-0.5 truncate">
                    {member.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
