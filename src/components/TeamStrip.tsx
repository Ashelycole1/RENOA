"use client";

const TEAM = [
  { name: "Evans", role: "CEO" },
  { name: "Natozo Martha", role: "COO" },
  { name: "Egabo Aaron", role: "Project Manager" },
  { name: "Alimpa Anne Hillary", role: "Finance Lead" },
  { name: "Onyango John Steven", role: "Marketing Lead" },
  { name: "Niwasiima Ashelycole", role: "Co-Founder & CTO" },
];

export default function TeamStrip() {
  return (
    <section className="py-20 border-t border-[#e5e5e5]">
      <div className="wrapper">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2">
            <span className="label">Leadership Team</span>
            <h2 className="text-2xl font-bold text-[#0a0a0a] tracking-tight">
              Engineered by co-founders in Kampala.
            </h2>
          </div>
          <span className="text-xs font-mono text-[#a3a3a3]">KAMPALA · EAST AFRICA</span>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="card p-4 space-y-1 hover:border-[#0F6B3C]/40 group"
            >
              {/* Avatar placeholder */}
              <div className="w-9 h-9 rounded-full bg-[#E6F2EC] flex items-center justify-center mb-3">
                <span className="text-sm font-bold text-[#0F6B3C]">
                  {m.name.charAt(0)}
                </span>
              </div>
              <p className="text-sm font-bold text-[#0a0a0a] leading-tight group-hover:text-[#0F6B3C] transition-colors">
                {m.name}
              </p>
              <p className="text-[11px] text-[#a3a3a3]">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
