"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SERVICES } from "@/data/services";
import { ALL_PROJECTS } from "@/data/projects";

export default function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedProject = ALL_PROJECTS.find((p) => p.slug === service.relatedProjectSlug);

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#111827]">
      <Nav onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <div className="border-b border-[#0000000d] bg-white pb-16 pt-6">
          <div className="wrapper max-w-[1160px] space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#9ca3af]">
              <Link href="/services" className="hover:text-[#111] transition-colors">SERVICES</Link>
              <span>/</span>
              <span className="text-[var(--accent)] font-bold uppercase">{service.title}</span>
            </div>

            <span className="label">SERVICE OVERVIEW</span>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111] max-w-3xl leading-tight">
              {service.title}
            </h1>

            <p className="max-w-2xl text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
              {service.promise}
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[var(--accent)] px-7 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[var(--accent-hover)]"
              >
                Start this service
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
              <div className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#00000015] bg-white px-6 text-sm">
                <span className="font-mono text-[#9ca3af] text-xs">Timeline:</span>
                <span className="font-semibold text-[#111]">{service.timeline}</span>
              </div>
              <div className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#00000015] bg-white px-6 text-sm">
                <span className="font-mono text-[#9ca3af] text-xs">Starting:</span>
                <span className="font-semibold text-[#111]">{service.startingRange.usd}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content + Sidebar */}
        <div className="wrapper max-w-[1160px] pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-start">

            {/* Main Column */}
            <div className="space-y-16">

              {/* Description */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">01 · OVERVIEW</span>
                  <div className="h-px flex-1 bg-[#0000000d]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#111]">What we deliver.</h2>
                <p className="text-base leading-relaxed text-[var(--text-secondary)]">{service.longDesc}</p>
                <div className="mt-2 rounded-xl border border-[var(--accent)]/15 bg-[#E4F3EA]/30 p-4 text-sm">
                  <span className="font-bold text-[#111]">Who this is for: </span>
                  <span className="text-[var(--text-secondary)]">{service.targetAudience}</span>
                </div>
              </section>

              {/* Deliverables */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">02 · DELIVERABLES</span>
                  <div className="h-px flex-1 bg-[#0000000d]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#111]">What you get.</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.deliverables.map((d) => (
                    <div key={d} className="flex items-start gap-3 rounded-xl border border-[#0000000d] bg-white p-4 shadow-xs">
                      <span className="mt-0.5 h-2 w-2 rounded-full bg-[var(--accent)] shrink-0" />
                      <span className="text-sm text-[#111] font-medium leading-snug">{d}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Process */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">03 · HOW WE WORK</span>
                  <div className="h-px flex-1 bg-[#0000000d]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#111]">Our process.</h2>
                <div className="space-y-4">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex gap-5 rounded-2xl border border-[#0000000d] bg-white p-6 shadow-xs">
                      <span className="text-xl font-bold font-mono text-[var(--accent)] shrink-0">{step.step}</span>
                      <div>
                        <h3 className="font-bold text-[#111] mb-1">{step.title}</h3>
                        <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Stack */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">04 · TECHNOLOGY</span>
                  <div className="h-px flex-1 bg-[#0000000d]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#111]">Tools & stack.</h2>
                <div className="flex flex-wrap gap-2">
                  {service.stack.map((t) => (
                    <span key={t} className="rounded-lg border border-[#e5e7eb] bg-white px-3 py-1.5 text-xs font-mono font-medium text-[#374151] shadow-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </section>

              {/* FAQs */}
              {service.faqs.length > 0 && (
                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">05 · FAQ</span>
                    <div className="h-px flex-1 bg-[#0000000d]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#111]">Common questions.</h2>
                  <div className="space-y-3">
                    {service.faqs.map((faq, i) => (
                      <div key={i} className="rounded-2xl border border-[#0000000d] bg-white overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-semibold text-[#111] hover:text-[var(--accent)] transition-colors"
                        >
                          {faq.question}
                          <svg
                            className={`w-4 h-4 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                          >
                            <path d="m6 9 6 6 6-6"/>
                          </svg>
                        </button>
                        {openFaq === i && (
                          <div className="px-6 pb-5 text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[#0000000d] pt-4">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Related Case Study */}
              {relatedProject && (
                <section className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">06 · PROOF POINT</span>
                    <div className="h-px flex-1 bg-[#0000000d]" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#111]">See it in action.</h2>
                  <div className="rounded-2xl border border-[#0000000d] bg-white p-7 shadow-xs hover:border-[var(--accent)] hover:shadow-md transition-all group">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold font-mono text-[var(--accent)] uppercase">{relatedProject.badge}</span>
                      {relatedProject.status === "Live" && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#E4F3EA] px-2 py-0.5 text-[10px] font-medium text-[var(--accent)] font-mono">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                          Live
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-[#111] group-hover:text-[var(--accent)] transition-colors mb-2">{relatedProject.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{relatedProject.tagline}</p>
                    <Link
                      href={`/work/${relatedProject.slug}`}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--accent)] hover:underline"
                    >
                      Read full case study →
                    </Link>
                  </div>
                </section>
              )}
            </div>

            {/* Sticky Sidebar */}
            <aside className="sticky top-28 space-y-4">
              <div className="rounded-2xl border border-[#0000000d] bg-white p-7 shadow-xs space-y-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#111] font-mono border-b border-[#00000008] pb-3">
                  Service Details
                </h3>
                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-[#9ca3af] font-mono uppercase block mb-1">Timeline</span>
                    <p className="font-semibold text-[#111] text-sm">{service.timeline}</p>
                  </div>
                  <div>
                    <span className="text-[#9ca3af] font-mono uppercase block mb-1">Starting Price (USD)</span>
                    <p className="font-bold text-[#111] text-xl font-mono">{service.startingRange.usd}</p>
                  </div>
                  <div>
                    <span className="text-[#9ca3af] font-mono uppercase block mb-1">Starting Price (UGX)</span>
                    <p className="font-medium text-[#111]">{service.startingRange.ugx}</p>
                  </div>
                  <div>
                    <span className="text-[#9ca3af] font-mono uppercase block mb-1">Deliverables</span>
                    <p className="font-medium text-[#111]">{service.deliverables.length} included items</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#0000000a] space-y-2">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="w-full inline-flex min-h-[42px] items-center justify-center rounded-xl bg-[var(--accent)] text-xs font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
                  >
                    Book a discovery call
                  </button>
                  <a
                    href={`https://wa.me/256700000000?text=Hi%20RENOA%2C%20I%27m%20interested%20in%20your%20${encodeURIComponent(service.title)}%20service.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-xl border border-[#25D366] bg-[#25D366]/10 text-xs font-semibold text-[#1E9E4B] hover:bg-[#25D366]/20 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* All services link */}
              <Link
                href="/services"
                className="block rounded-2xl border border-[#0000000d] bg-white p-5 shadow-xs text-xs font-mono font-semibold text-[#9ca3af] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all text-center"
              >
                ← View all services
              </Link>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
