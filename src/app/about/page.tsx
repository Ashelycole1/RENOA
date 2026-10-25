"use client";

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadershipContainers from "@/components/LeadershipContainers";


const VALUES = [
  {
    icon: "01",
    title: "Clarity over cleverness",
    desc: "A buyer should understand what we do and how to start within 5 seconds. We write plainly and build simply.",
  },
  {
    icon: "02",
    title: "Proof beats polish",
    desc: "Real results, real numbers, and real clients outrank aesthetic decoration. We ship software that performs.",
  },
  {
    icon: "03",
    title: "Built for East African reality",
    desc: "Fast on mid-range Android phones and variable networks. MTN MoMo and Mobile Money are first-class, not afterthoughts.",
  },
  {
    icon: "04",
    title: "Confident and warm",
    desc: "Plain-spoken, modern, never corporate-stiff or jargon-heavy. We build relationships, not just codebases.",
  },
  {
    icon: "05",
    title: "One primary action per screen",
    desc: "Every view points to a single next step. Focus eliminates confusion and drives commercial traction.",
  },
  {
    icon: "06",
    title: "Consistency is credibility",
    desc: "Same spacing, same tone, same quality on every project, every page, every commit.",
  },
];

const MILESTONES = [
  { year: "Q1 2026", event: "RENOA Collective founded in Kampala by 6 co-founders." },
  { year: "Q2 2026", event: "DriveUG launched: Uganda's first peer-to-peer vehicle rental with MTN MoMo escrow." },
  { year: "Q2 2026", event: "LAWBUDDY goes live: Uganda's first Constitutional AI legal assistant with zero-hallucination guarantee." },
  { year: "Q3 2026", event: "Gemyte ships: 3D AI learning engine for STEM education powered by Gemini 2.5." },
  { year: "Q3 2026", event: "RENOA Brand System: studio visual identity, 3D isometric library, and CSS token system completed." },
  { year: "Q4 2026", event: "Konnect Web3 enters testnet: gasless on-chain merchant loyalty protocol for East Africa." },
];

export default function AboutPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#111827]">
      <Nav onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-32 pb-24">
        {/* Hero */}
        <div className="wrapper max-w-[1160px] mb-20">
          <span className="label">OUR STORY · KAMPALA, UGANDA</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-[#111] max-w-3xl leading-tight">
            Building software that means business.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
            RENOA is a software studio founded in Kampala, Uganda in 2026 by six engineers, product designers, and operators who
            believe East Africa deserves world-class digital infrastructure built by people who live here.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[var(--accent)] px-7 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              Book a discovery call
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
            <Link
              href="/work"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#00000015] bg-white px-7 text-sm font-medium text-[#111] hover:bg-[#fafafa] transition-colors"
            >
              See our work
            </Link>
          </div>
        </div>

        {/* Stats */}
        <section className="border-y border-[#0000000d] bg-white py-14 mb-20">
          <div className="wrapper max-w-[1160px] grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { num: "6", label: "Co-Founders" },
              { num: "5+", label: "Products shipped" },
              { num: "2026", label: "Founded in Kampala" },
              { num: "3", label: "Live AI systems" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl md:text-5xl font-bold font-mono text-[#111]">{s.num}</p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="wrapper max-w-[1160px] mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="label">OUR MISSION</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
                Why we build.
              </h2>
              <p className="mt-5 text-base text-[var(--text-secondary)] leading-relaxed">
                Software built for Africa should work in Africa. That means blazing-fast performance on mid-range Android devices,
                reliable mobile money payment rails, and AI systems trained to understand local legal, educational, and commercial contexts.
              </p>
              <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
                We founded RENOA because too many promising East African ventures were paying offshore rates for software that didn't
                understand their markets, failed on MTN network timeouts, and couldn't cite Ugandan law without hallucinating.
              </p>
              <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
                We are the studio we wished existed when we were building our first products.
              </p>
            </div>
            <div className="rounded-2xl border border-[#0000000d] bg-white p-8 shadow-xs space-y-5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#111] font-mono">Who we build for</h3>
              {[
                { who: "Startups", desc: "Founders with a validated concept ready to ship an MVP and onboard paying users." },
                { who: "Scale-ups", desc: "Funded companies outgrowing no-code or needing a dedicated senior engineering squad." },
                { who: "Enterprises", desc: "Banks, universities, NGOs, and telecom partners requiring sovereign AI and compliance." },
                { who: "International teams", desc: "Global companies hiring East African engineering talent or entering the market." },
              ].map((item) => (
                <div key={item.who} className="flex items-start gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-[var(--accent)] shrink-0" />
                  <div>
                    <span className="font-semibold text-[#111] text-sm">{item.who}: </span>
                    <span className="text-sm text-[var(--text-secondary)]">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-[#0000000d] bg-[#fafafa] py-20 mb-0">
          <div className="wrapper max-w-[1160px]">
            <div className="mb-12">
              <span className="label">OUR PRINCIPLES</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#111]">How we work.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {VALUES.map((v) => (
                <div key={v.icon} className="rounded-2xl border border-[#0000000d] bg-white p-7 shadow-xs">
                  <span className="text-xs font-bold font-mono text-[var(--accent)]">{v.icon}</span>
                  <h3 className="mt-3 text-lg font-bold text-[#111]">{v.title}</h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Containers Structure */}
        <section className="wrapper max-w-[1160px] py-16">
          <LeadershipContainers />
        </section>

        {/* Timeline / Milestones */}
        <section className="border-t border-[#0000000d] bg-[#fafafa] py-20">
          <div className="wrapper max-w-[1160px]">
            <div className="mb-12">
              <span className="label">COMPANY TIMELINE</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#111]">2026 milestones.</h2>
            </div>
            <div className="relative max-w-2xl space-y-0">
              {MILESTONES.map((m, i) => (
                <div key={i} className="relative flex gap-6 pb-8">
                  <div className="flex flex-col items-center">
                    <div className="h-3 w-3 rounded-full bg-[var(--accent)] shrink-0 mt-1" />
                    {i < MILESTONES.length - 1 && <div className="flex-1 w-px bg-[var(--accent)]/20 mt-1" />}
                  </div>
                  <div className="pb-2">
                    <span className="text-xs font-mono font-bold text-[var(--accent)]">{m.year}</span>
                    <p className="mt-1 text-sm text-[#111] font-medium leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="wrapper max-w-[1160px] pt-20">
          <div className="rounded-2xl border border-[#0000000d] bg-white p-8 md:p-14 text-center space-y-4 shadow-sm">
            <span className="label">WORK WITH US</span>
            <h3 className="text-3xl font-bold text-[#111]">Ready to build something that matters?</h3>
            <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-lg mx-auto">
              Whether you have a validated concept or are starting from scratch, book a free 30-minute discovery call
              and talk directly with our engineering leads.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[var(--accent)] px-8 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
              >
                Book a free call
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
              <Link
                href="/contact"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#00000015] bg-white px-7 text-sm font-medium text-[#111] hover:bg-[#fafafa]"
              >
                Contact us
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
