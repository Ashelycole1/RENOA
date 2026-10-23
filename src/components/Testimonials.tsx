"use client";

const TESTIMONIALS = [
  {
    quote: "RENOA didn't just write code; they understood how transactions actually happen in Kampala. The Mobile Money escrow integration and host verification flow made DriveUG commercially viable from day one.",
    author: "DriveUG Operations Team",
    role: "Founding Partner · Mobility Platform",
    project: "DriveUG",
    initials: "DU"
  },
  {
    quote: "LAWBUDDY sets a new benchmark for localized AI in Africa. It never invents legal provisions; it quotes the exact 1995 constitutional articles and schedules with pinpoint accuracy.",
    author: "Civic Legal Research Group",
    role: "Legal Tech & Constitutional Access Initiative",
    project: "LAWBUDDY",
    initials: "LB"
  },
  {
    quote: "They took an ambitious 3D cognitive learning vision and engineered it into a silky smooth browser experience that students across East Africa love using on everyday laptops and phones.",
    author: "Gemyte Product Lab",
    role: "EdTech & Learning Science",
    project: "Gemyte",
    initials: "GM"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 border-t border-[#0000000d] bg-[#fdfdfd]">
      <div className="wrapper max-w-[1160px]">
        {/* Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto space-y-3">
          <span className="label">Proof & Partnership</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
            Trusted by the products we ship.
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)]">
            We judge our engineering by real-world adoption, zero-downtime reliability, and commercial traction.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.author}
              className="rounded-2xl border border-[#0000000d] bg-white p-8 flex flex-col justify-between shadow-xs hover:border-[var(--accent)]/40 hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-4">
                {/* 5 Star rating */}
                <div className="flex items-center gap-1 text-[var(--accent)]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm leading-relaxed text-[#374151] italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 pt-5 border-t border-[#0000000a] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E4F3EA] text-[var(--accent)] font-mono font-bold flex items-center justify-center text-xs shrink-0">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#111]">{t.author}</h4>
                  <p className="text-[11px] text-[var(--text-muted)] font-mono">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
