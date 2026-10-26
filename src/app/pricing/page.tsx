"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ENGAGEMENT_MODELS } from "@/data/pricing";
import { SERVICES } from "@/data/services";

const FAQS_MODELS = [
  {
    q: "How do you scope a project before kickoff?",
    a: "We break every engagement into clear deliverable milestones with defined technical specifications. Before kickoff, you receive a detailed sprint roadmap so expectations, deliverables, and timelines are 100% aligned.",
  },
  {
    q: "Can we start with a Discovery Sprint and then transition to a build?",
    a: "Yes. Most clients start with a 2-week Discovery Sprint to validate user flows, design prototypes, and define technical architecture before committing to a full production build.",
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You do. 100%. We transfer all git repositories, database credentials, design files, and cloud infrastructure accounts to you upon milestone sign-off. Zero vendor lock-in.",
  },
  {
    q: "What support is included after launch?",
    a: "All production builds include a 30-day post-launch warranty covering defect resolution. Beyond that, we offer flexible dedicated product squads for continuous feature shipping and DevOps maintenance.",
  },
  {
    q: "How does our team collaborate with RENOA during a sprint?",
    a: "We maintain daily asynchronous communication via dedicated Slack or WhatsApp channels, run scheduled bi-weekly sprint demo reviews, and share click-through staging deployments at every milestone.",
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
          <span className="label">ENGAGEMENT MODELS</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111]">
            How we partner with you.
          </h1>
          <p className="max-w-2xl text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
            Structured collaboration models designed for every stage — whether de-risking a new concept,
            launching a production MVP, or scaling dedicated engineering velocity. Every engagement includes
            full IP transfer and direct engineer access.
          </p>
        </div>

        {/* Engagement Model Cards */}
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
                    <p className="text-xs text-[var(--accent)] font-mono font-semibold mt-1">
                      Timeline: {m.timeline}
                    </p>
                  </div>

                  <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{m.tagline}</p>

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

        {/* Service Scope & Timelines Table */}
        <section className="border-t border-[#0000000d] bg-[#fafafa] py-20 mb-0">
          <div className="wrapper max-w-[1160px]">
            <div className="mb-12">
              <span className="label">SERVICE SCOPE</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#111]">By service capability.</h2>
              <p className="mt-4 max-w-xl text-base text-[var(--text-secondary)] leading-relaxed">
                Individual capabilities can be packaged into an engagement model above or scoped for targeted product sprints.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-[#0000000d] bg-white shadow-xs">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#0000000d]">
                    <th className="text-left px-6 py-4 text-xs font-mono font-bold uppercase tracking-wider text-[#9ca3af]">Service Capability</th>
                    <th className="text-left px-6 py-4 text-xs font-mono font-bold uppercase tracking-wider text-[#9ca3af]">Typical Timeline</th>
                    <th className="text-left px-6 py-4 text-xs font-mono font-bold uppercase tracking-wider text-[#9ca3af]">Deliverables Count</th>
                    <th className="text-left px-6 py-4 text-xs font-mono font-bold uppercase tracking-wider text-[#9ca3af]">Primary Focus</th>
                    <th className="px-6 py-4" />
                  </tr>
                </thead>
                <tbody>
                  {SERVICES.map((s, i) => (
                    <tr key={s.slug} className={`border-b border-[#0000000d] hover:bg-[#fafafa] transition-colors ${i === SERVICES.length - 1 ? "border-b-0" : ""}`}>
                      <td className="px-6 py-4 font-semibold text-[#111]">{s.title}</td>
                      <td className="px-6 py-4 font-mono text-xs text-[#6b7280]">{s.timeline}</td>
                      <td className="px-6 py-4 font-mono text-xs text-[#111] font-semibold">{s.deliverables.length} Key Outputs</td>
                      <td className="px-6 py-4 text-xs text-[#6b7280] max-w-xs truncate">{s.promise}</td>
                      <td className="px-6 py-4 text-right">
                        <Link href={`/services/${s.slug}`} className="text-xs font-semibold text-[var(--accent)] hover:underline">
                          Specs →
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
            <span className="label">COLLABORATION FAQ</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#111]">Frequently asked questions.</h2>
          </div>
          <div className="max-w-2xl space-y-3">
            {FAQS_MODELS.map((faq, i) => (
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
            <span className="label">DISCUSS YOUR PROJECT</span>
            <h3 className="text-3xl font-bold text-[#111]">
              Not sure which model is right for you?
            </h3>
            <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-lg mx-auto">
              Book a free 30-minute call with our engineering leads. We review your requirements, technical architecture, and timeline,
              and give you an honest recommendation — no sales pressure.
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
                href="/contact#inquiry"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#00000015] bg-white px-7 text-sm font-medium text-[#111] hover:bg-[#fafafa]"
              >
                Send project inquiry
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
