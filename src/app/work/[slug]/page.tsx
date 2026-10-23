"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ALL_PROJECTS } from "@/data/projects";
import { useState } from "react";

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [bookingOpen, setBookingOpen] = useState(false);

  const projectIndex = ALL_PROJECTS.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) {
    notFound();
  }

  const project = ALL_PROJECTS[projectIndex];
  const nextProject = ALL_PROJECTS[(projectIndex + 1) % ALL_PROJECTS.length];

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#111827]">
      <Nav onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-32 pb-24">
        {/* Hero Section */}
        <div className="border-b border-[#0000000d] bg-white pb-16 pt-6">
          <div className="wrapper max-w-[1160px] space-y-6">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-[#9ca3af]">
              <Link href="/work" className="hover:text-[#111] transition-colors">WORK</Link>
              <span>/</span>
              <span className="text-[var(--accent)] font-bold uppercase">{project.title}</span>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="label">{project.badge}</span>
              <div className="flex items-center gap-2">
                {project.status === "Live" ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E4F3EA] px-3 py-1 text-xs font-medium text-[var(--accent)] border border-[#0F6B3C]/15 font-mono">
                    <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
                    Live in Production
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700 border border-amber-200 font-mono">
                    In Development
                  </span>
                )}
                <span className="text-xs font-mono text-[#9ca3af]">{project.year}</span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#111]">
              {project.title}
            </h1>

            <p className="max-w-3xl text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
              {project.tagline}
            </p>

            {project.liveUrl && (
              <div className="pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[var(--accent)] px-7 text-sm font-semibold text-white shadow-xs transition-colors hover:bg-[var(--accent-hover)]"
                >
                  Visit live application
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Content & Sticky Sidebar Grid */}
        <div className="wrapper max-w-[1160px] pt-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-16 items-start">
            
            {/* Main Long-Form Case Study */}
            <div className="space-y-16">
              
              {/* Metrics Highlights Grid */}
              <div className="rounded-2xl border border-[#0000000d] bg-white p-8 shadow-xs">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent)] font-mono block mb-4">
                  Key Production Metrics
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  {project.results.map((res) => (
                    <div key={res.label} className="space-y-1">
                      <p className="text-2xl md:text-3xl font-bold text-[#111] font-mono">
                        {res.value}
                      </p>
                      <p className="text-xs text-[#6b7280]">
                        {res.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* The Challenge */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
                    01 · THE PROBLEM
                  </span>
                  <div className="h-px flex-1 bg-[#0000000d]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#111]">
                  The Challenge
                </h2>
                <p className="text-base leading-relaxed text-[var(--text-secondary)]">
                  {project.challenge}
                </p>
              </section>

              {/* Our Approach */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
                    02 · ARCHITECTURE & DESIGN
                  </span>
                  <div className="h-px flex-1 bg-[#0000000d]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#111]">
                  Our Approach
                </h2>
                <p className="text-base leading-relaxed text-[var(--text-secondary)]">
                  {project.approach}
                </p>
              </section>

              {/* The Solution */}
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[var(--accent)] uppercase tracking-wider">
                    03 · PRODUCTION SYSTEM
                  </span>
                  <div className="h-px flex-1 bg-[#0000000d]" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#111]">
                  The Solution
                </h2>
                <p className="text-base leading-relaxed text-[var(--text-secondary)]">
                  {project.solution}
                </p>
              </section>

              {/* Testimonial Quote (if present) */}
              {project.quote && (
                <div className="rounded-2xl border border-[#0F6B3C]/15 bg-[#E4F3EA]/40 p-8 space-y-4">
                  <div className="flex items-center gap-1 text-[var(--accent)]">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-base italic leading-relaxed text-[#111]">
                    &ldquo;{project.quote.text}&rdquo;
                  </blockquote>
                  <div className="pt-2 text-xs font-mono">
                    <p className="font-bold text-[#111]">{project.quote.author}</p>
                    <p className="text-[#6b7280]">{project.quote.role}</p>
                  </div>
                </div>
              )}

              {/* Next Case Study Navigation Band */}
              <div className="border-t border-[#0000000d] pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/work"
                  className="text-xs font-mono font-bold text-[#6b7280] hover:text-[#111] transition-colors"
                >
                  ← ALL CASE STUDIES
                </Link>

                <Link
                  href={`/work/${nextProject.slug}`}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:underline"
                >
                  <span>Next: {nextProject.title}</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </div>

            {/* Sticky Metadata Snapshot Sidebar */}
            <aside className="sticky top-28 space-y-6">
              <div className="rounded-2xl border border-[#0000000d] bg-white p-7 shadow-xs space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#111] font-mono border-b border-[#00000008] pb-3">
                  Project Snapshot
                </h3>

                <div className="space-y-4 text-xs">
                  <div>
                    <span className="text-[#9ca3af] font-mono uppercase block mb-1">Client / Product</span>
                    <p className="font-semibold text-[#111] text-sm">{project.client}</p>
                  </div>

                  <div>
                    <span className="text-[#9ca3af] font-mono uppercase block mb-1">Industry</span>
                    <p className="font-medium text-[#111]">{project.industry}</p>
                  </div>

                  <div>
                    <span className="text-[#9ca3af] font-mono uppercase block mb-1">Delivery Timeline</span>
                    <p className="font-medium text-[#111]">{project.timeline}</p>
                  </div>

                  <div>
                    <span className="text-[#9ca3af] font-mono uppercase block mb-1">Services Delivered</span>
                    <ul className="space-y-1 font-medium text-[#111]">
                      {project.services.map((s) => (
                        <li key={s} className="flex items-center gap-1.5">
                          <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[#9ca3af] font-mono uppercase block mb-2">Technology Stack</span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((t) => (
                        <span key={t} className="rounded border border-[#e5e7eb] bg-[#f9fafb] px-2 py-0.5 text-[11px] font-mono text-[#374151]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#0000000a] space-y-2">
                  <button
                    onClick={() => setBookingOpen(true)}
                    className="w-full inline-flex min-h-[42px] items-center justify-center rounded-xl bg-[var(--accent)] text-xs font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
                  >
                    Build something similar
                  </button>
                  <a
                    href="https://wa.me/256700000000?text=Hi%20RENOA%2C%20I%20reviewed%20your%20case%20study%20for%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex min-h-[40px] items-center justify-center gap-1.5 rounded-xl border border-[#25D366] bg-[#25D366]/10 text-xs font-semibold text-[#1E9E4B] hover:bg-[#25D366]/20 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
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
