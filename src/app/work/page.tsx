"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ALL_PROJECTS } from "@/data/projects";

const FILTERS = ["All", "Platform", "AI", "Web3", "Brand"];

export default function WorkPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#111827]">
      <Nav onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-32 pb-24">
        <div className="wrapper max-w-[1160px]">
          {/* Header */}
          <div className="max-w-2xl mb-12 space-y-4">
            <span className="label">PORTFOLIO & CASE STUDIES</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111]">
              Proof beats polish.
            </h1>
            <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
              Explore the digital products, localized AI assistants, and payment platforms engineered by our Kampala studio.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-6 border-b border-[#0000000d]">
            <span className="text-xs font-mono text-[#9ca3af] mr-2">FILTER:</span>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium font-mono transition-all ${
                  filter === f
                    ? "bg-[#111] text-white shadow-xs"
                    : "bg-[#f3f4f6] text-[#4b5563] hover:bg-[#e5e7eb] hover:text-[#111]"
                }`}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto text-xs font-mono text-[#9ca3af]">
              SHOWING {filtered.length} OF {ALL_PROJECTS.length}
            </span>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((project, idx) => (
              <div
                key={project.slug}
                className="group rounded-2xl border border-[#0000000d] bg-white p-7 shadow-xs flex flex-col justify-between hover:border-[var(--accent)] hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Top meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent)] font-mono">
                      {project.badge}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.status === "Live" ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#E4F3EA] px-2.5 py-0.5 text-[11px] font-medium text-[var(--accent)] border border-[#0F6B3C]/15 font-mono">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                          Live
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-medium text-amber-700 border border-amber-200 font-mono">
                          In dev
                        </span>
                      )}
                      <span className="text-xs font-mono text-[#9ca3af]">{project.year}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-[#111] mb-2 group-hover:text-[var(--accent)] transition-colors">
                    <Link href={`/work/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  {/* Metrics Badge */}
                  <div className="mb-4 inline-flex items-center gap-1.5 rounded-md bg-[#f6f7f9] px-2.5 py-1 text-xs font-mono text-[#4b5563]">
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                    {project.metrics}
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] mb-6">
                    {project.tagline}
                  </p>

                  {/* Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span key={tech} className="rounded border border-[#e5e7eb] bg-[#fafafa] px-2 py-0.5 text-[10px] font-mono text-[#6b7280]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-[#0000000a] flex items-center justify-between text-xs font-semibold">
                  <Link
                    href={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1 text-[var(--accent)] hover:underline"
                  >
                    Read case study →
                  </Link>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#6b7280] hover:text-[#111] inline-flex items-center gap-1"
                    >
                      Visit live
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
                    </a>
                  ) : (
                    <span className="font-mono text-[#9ca3af]">Coming soon</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Callout */}
          <div className="mt-20 rounded-2xl border border-[#0000000d] bg-[#f9fafb] p-8 md:p-12 text-center space-y-4">
            <h3 className="text-2xl font-bold text-[#111]">
              Building a platform, AI assistant, or fintech service?
            </h3>
            <p className="text-sm text-[var(--text-secondary)] max-w-lg mx-auto">
              Our engineering squad can take you from concept to live production software with payments in weeks.
            </p>
            <div className="pt-2">
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[var(--accent)] px-7 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
              >
                Start a similar project
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
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
