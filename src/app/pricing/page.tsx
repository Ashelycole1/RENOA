"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ENGAGEMENT_MODELS } from "@/data/pricing";
import { SERVICES } from "@/data/services";

const FAQS_PRICING = [
  {
    q: "Are prices fixed or negotiable?",
    a: "Fixed-scope projects have transparent starting prices. Dedicated squads and enterprise work are scoped per engagement. We never charge for surprise extras — every change is approved through a formal change order.",
  },
  {
    q: "Do you accept payment in UGX?",
    a: "Yes. We accept UGX via bank transfer, MTN MoMo, and Airtel Money for Ugandan clients. USD via Wise, Payoneer, or bank wire for international clients.",
  },
  {
    q: "What is the payment schedule?",
    a: "Discovery Sprint: 50% upfront, 50% on delivery. MVP builds: 40% on contract, 30% at mid-sprint, 30% on final delivery. Squads: monthly in advance.",
  },
  {
    q: "Can we start with a Discovery Sprint and then move to a build?",
    a: "Absolutely. Most clients start with a 2-week Discovery Sprint to validate product direction and get an accurate build estimate before committing to a full build.",
  },
  {
    q: "Who owns the code and IP?",
    a: "You do. 100%. We transfer all git repositories, database credentials, design files, and cloud infrastructure accounts to you upon final payment. No vendor lock-in.",
  },
  {
    q: "What support is included after launch?",
    a: "All builds include a 30-day post-launch warranty covering bug fixes. Beyond that, we offer Monthly Retainer Squads starting from $2,000/month for continuous support and feature development.",
  },
];

export default function PricingPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#111827]">
      <Nav onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-32 pb-24">
        {/* Header */}
        <div className="wrapper max-w-[1160px] mb-16 space-y-4">
          <span className="label">TRANSPARENT PRICING</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111]">
            Honest pricing, zero surprises.
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
            We publish our starting prices so you can self-qualify before booking a call. Every engagement includes
            full IP transfer, source code ownership, and a clearly scoped deliverable list.
          </p>
        </div>

        {/* Pricing Cards */}
        <section className="wrapper max-w-[1160px] mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENGAGEMENT_MODELS.map((m) => (
              <div
                key={m.id}
                className={`rounded-2xl border bg-white p-7 shadow-xs flex flex-col justify-between transition-all duration-200 hover:shadow-md ${
                  m.popular
                    ? "border-[var(--accent)] ring-1 ring-[var(--accent)]"
                    : "border-[#0000000d]"
                }`}
              >
                <div className="space-y-4">
                  {m.badge && (
                    <span className="inline-block rounded-full bg-[#EAF2FF] px-2.5 py-0.5 text-[10px] font-mono font-bold text-[var(--accent)]">
                      {m.badge}
                    </span>
                  )}
                  <div>
                    <h2 className="text-xl font-bold text-[#111]">{m.name}</h2>
                    <p className="text-xs text-[#6b7280] font-mono mt-0.5">{m.timeline}</p>
                  </div>

                  <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{m.tagline}</p>

                  <div className="pt-2">
                    <span className="text-3xl font-bold text-[#111] font-mono">{m.priceUSD}</span>
                    <span className="text-xs text-[#9ca3af] ml-1.5 font-mono">/ {m.cadence}</span>
                    <p className="text-[11px] text-[#9ca3af] font-mono mt-0.5">{m.priceUGX}</p>
                  </div>

                  <div className="text-xs text-[var(--text-secondary)] bg-[#f9fafb] rounded-lg p-3 border border-[#00000006]">
                    <span className="font-semibold text-[#111] block mb-1">Ideal for:</span>
                    {m.idealFor}
                  </div>

                  <ul className="space-y-2 text-xs text-[#4b5563] pt-2 border-t border-[#00000008]">
                    {m.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-1" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className={`w-full inline-flex min-h-[42px] items-center justify-center rounded-xl text-xs font-semibold transition-colors ${
                      m.popular
                        ? "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)]"
                        : "border border-[#00000015] bg-[#fafafa] text-[#111] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)]"
                    }`}
                  >
                    {m.ctaLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Service Starting Prices */}
        <section className="border-t border-[#0000000d] bg-[#fafafa] py-20 mb-0">
          <div className="wrapper max-w-[1160px]">
            <div className="mb-12">
              <span className="label">SERVICE PRICING</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#111]">By service area.</h2>
              <p className="mt-4 max-w-xl text-base text-[var(--text-secondary)] leading-relaxed">
                Individual services can be packaged with an engagement model above or scoped independently.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-[#0000000d] bg-white shadow-xs">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#0000000d]">
                    <th className="text-left px-6 py-4 text-xs font-mono font-bold uppercase tracking-wider text-[#9ca3af]">Service</th>
                    <th className="text-left px-6 py-4 text-xs font-mono font-bold uppercase tracking-wider text-[#9ca3af]">Timeline</th>
                    <th className="text-left px-6 py-4 text-xs font-mono font-bold uppercase tracking-wider text-[#9ca3af]">Starting (USD)</th>
                    <th className="text-left px-6 py-4 text-xs font-mono font-bold uppercase tracking-wider text-[#9ca3af]">Starting (UGX)</th>
                    <th className="px-6 py-4" />
                  </tr>
                </thead>
                <tbody>
                  {SERVICES.map((s, i) => (
                    <tr key={s.slug} className={`border-b border-[#0000000d] hover:bg-[#fafafa] transition-colors ${i === SERVICES.length - 1 ? "border-b-0" : ""}`}>
                      <td className="px-6 py-4 font-semibold text-[#111]">{s.title}</td>
                      <td className="px-6 py-4 font-mono text-xs text-[#6b7280]">{s.timeline}</td>
                      <td className="px-6 py-4 font-mono text-sm font-bold text-[#111]">{s.startingRange.usd}</td>
                      <td className="px-6 py-4 font-mono text-xs text-[#6b7280]">{s.startingRange.ugx}</td>
                      <td className="px-6 py-4 text-right">
                        <Link href={`/services/${s.slug}`} className="text-xs font-semibold text-[var(--accent)] hover:underline">
                          Details →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="wrapper max-w-[1160px] py-20">
          <div className="mb-12">
            <span className="label">PRICING FAQ</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#111]">Common questions.</h2>
          </div>
          <div className="max-w-2xl space-y-3">
            {FAQS_PRICING.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-[#0000000d] bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-semibold text-[#111] hover:text-[var(--accent)] transition-colors"
                >
                  {faq.q}
                  <svg
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  >
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[#0000000d] pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="wrapper max-w-[1160px]">
          <div className="rounded-2xl border border-[#0000000d] bg-white p-8 md:p-14 text-center space-y-4 shadow-sm">
            <span className="label">GET A CUSTOM QUOTE</span>
            <h3 className="text-3xl font-bold text-[#111]">
              Not sure which model is right for you?
            </h3>
            <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-lg mx-auto">
              Book a free 30-minute call with our engineering leads. We review your requirements, budget, and timeline,
              and give you an honest recommendation — no sales pressure.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[var(--accent)] px-8 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
              >
                Book a free call
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
              <a
                href="mailto:hello@renoa.tech"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#00000015] bg-white px-7 text-sm font-medium text-[#111] hover:bg-[#fafafa]"
              >
                Email us
              </a>
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
