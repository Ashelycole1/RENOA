"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SERVICES } from "@/data/services";
import { ENGAGEMENT_MODELS } from "@/data/pricing";

export default function ServicesPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#111827]">
      <Nav onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-32 pb-24">
        {/* Header */}
        <div className="wrapper max-w-[1160px] mb-16 space-y-4">
          <span className="label">CAPABILITIES & SERVICES</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111]">
            Engineering that drives commercial traction.
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
            We partner with ambitious founders, SMEs, and international teams to architect, design, and ship digital products. From UX validation to MTN MoMo payment rails and private AI systems.
          </p>
        </div>

        {/* 5 Core Services Grid */}
        <div className="wrapper max-w-[1160px] space-y-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {SERVICES.map((s, idx) => (
              <div
                key={s.slug}
                className="group rounded-2xl border border-[#0000000d] bg-white p-8 shadow-xs flex flex-col justify-between hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-xs font-bold text-[var(--accent)]">0{idx + 1}</span>
                    <span className="font-mono text-xs text-[#9ca3af]">{s.timeline}</span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#111] mb-3 group-hover:text-[var(--accent)] transition-colors">
                    <Link href={`/services/${s.slug}`}>
                      {s.title}
                    </Link>
                  </h2>

                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-6">
                    {s.shortDesc}
                  </p>

                  <div className="space-y-2 border-t border-[#00000008] pt-4 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#9ca3af] font-semibold block mb-2">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#4b5563]">
                      {s.deliverables.slice(0, 3).map((d) => (
                        <li key={d} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#0000000a] flex items-center justify-between text-xs font-semibold">
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-1 text-[var(--accent)] hover:underline"
                  >
                    View detailed specs →
                  </Link>
                  <span className="font-mono text-[#6b7280]">
                    From {s.startingRange.usd}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Engagement Models Overview */}
        <section className="border-t border-[#0000000d] bg-[#fafafa] py-24">
          <div className="wrapper max-w-[1160px]">
            <div className="mb-14 text-center max-w-2xl mx-auto space-y-3">
              <span className="label">Flexible Engagement Models</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
                How we work with your team.
              </h2>
              <p className="text-sm md:text-base text-[var(--text-secondary)]">
                Whether you need a rapid two-week prototype sprint or an embedded full-stack squad for continuous delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ENGAGEMENT_MODELS.map((m) => (
                <div
                  key={m.id}
                  className={`rounded-2xl border bg-white p-7 shadow-xs flex flex-col justify-between transition-all duration-200 ${
                    m.popular ? "border-[var(--accent)] ring-1 ring-[var(--accent)]" : "border-[#0000000d]"
                  }`}
                >
                  <div className="space-y-4">
                    {m.badge && (
                      <span className="inline-block rounded-full bg-[#E4F3EA] px-2.5 py-0.5 text-[10px] font-mono font-bold text-[var(--accent)]">
                        {m.badge}
                      </span>
                    )}
                    <div>
                      <h3 className="text-xl font-bold text-[#111]">{m.name}</h3>
                      <p className="text-xs text-[#6b7280] font-mono mt-0.5">{m.timeline}</p>
                    </div>

                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                      {m.tagline}
                    </p>

                    <div className="pt-2">
                      <span className="text-2xl font-bold text-[#111] font-mono">{m.priceUSD}</span>
                      <span className="text-xs text-[#9ca3af] ml-1.5 font-mono">/ {m.cadence}</span>
                    </div>

                    <ul className="space-y-1.5 text-xs text-[#4b5563] pt-2 border-t border-[#00000008]">
                      {m.features.slice(0, 4).map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6">
                    <Link
                      href="/pricing"
                      className="w-full inline-flex min-h-[40px] items-center justify-center rounded-xl border border-[#00000015] bg-[#fafafa] text-xs font-semibold text-[#111] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] transition-colors"
                    >
                      Compare full details →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="wrapper max-w-[1160px] pt-20">
          <div className="rounded-2xl border border-[#0000000d] bg-white p-8 md:p-14 text-center space-y-4 shadow-sm">
            <span className="label">Ready to Build?</span>
            <h3 className="text-3xl font-bold text-[#111]">
              Not sure which service or model matches your timeline?
            </h3>
            <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-lg mx-auto">
              Book a free 30-minute discovery call. We review your requirements and provide an honest architectural recommendation.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[var(--accent)] px-8 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
              >
                Book a discovery call
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
              <Link
                href="/pricing"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#00000015] bg-white px-7 text-sm font-medium text-[#111] hover:bg-[#fafafa]"
              >
                View pricing & models
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
