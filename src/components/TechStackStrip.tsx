"use client";

const TECH_ITEMS = [
  { name: "Next.js 15", category: "Full-Stack Framework" },
  { name: "TypeScript", category: "Type-Safe Core" },
  { name: "Gemini 2.5", category: "Multimodal AI" },
  { name: "Python / FastAPI", category: "AI Systems Backend" },
  { name: "MTN MoMo API", category: "East Africa Payments" },
  { name: "Airtel Money", category: "Mobile Wallet API" },
  { name: "PostgreSQL", category: "Relational DB" },
  { name: "Supabase", category: "Auth & Realtime" },
  { name: "Tailwind CSS", category: "Design System Tokens" },
  { name: "Docker & Vercel", category: "CI/CD & Cloud" },
];

export default function TechStackStrip() {
  return (
    <section className="py-16 border-t border-[#0000000d] bg-white overflow-hidden">
      <div className="wrapper max-w-[1160px]">
        <div className="mb-8 flex items-center justify-between border-b border-[#0000000a] pb-4">
          <span className="label">Battle-Tested Technology</span>
          <span className="text-xs font-mono text-[#9ca3af]">ZERO LEGACY OVERHEAD</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {TECH_ITEMS.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-[#0000000d] bg-[#fafafa] p-4 text-center transition-colors hover:border-[var(--accent)] hover:bg-[#EAF2FF]/30 group"
            >
              <p className="text-sm font-bold text-[#111] group-hover:text-[var(--accent)] transition-colors">
                {item.name}
              </p>
              <p className="text-[11px] font-mono text-[#6b7280] mt-0.5">
                {item.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
