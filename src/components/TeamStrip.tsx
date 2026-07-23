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
    <section className="py-16 border-b border-[#1C2A3A] bg-[#071019]/40">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="number-motif">06 CO-FOUNDERS</span>
              <span className="text-xs uppercase font-semibold text-[#4F7CFF] tracking-wider">
                LEADERSHIP TEAM
              </span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Engineered by an adaptive co-founder team in Kampala.
            </h3>
          </div>
          <span className="text-xs text-[#627284] font-mono">
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
                className="bg-[#0F1B29] border border-[#1C2A3A] hover:border-[#4F7CFF]/40 rounded-xl p-4 flex flex-col justify-between transition-colors group"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#071019] border border-[#1C2A3A] flex items-center justify-center text-[#4F7CFF] group-hover:bg-[#4F7CFF] group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-[10px] text-[#627284] uppercase">
                    {member.shortRole}
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-[#4F7CFF] transition-colors leading-tight">
                    {member.name}
                  </h4>
                  <p className="text-[11px] text-[#9AA5B1] mt-0.5 truncate">
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
