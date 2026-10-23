"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { FAQS } from "@/data/faq";

const CATEGORIES = ["All", "General", "Pricing & Payments", "Process & Timeline", "IP & Security", "Support"] as const;

export default function FAQPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? FAQS : FAQS.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#111827]">
      <Nav onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-32 pb-24">
        {/* Header */}
        <div className="wrapper max-w-[900px] mb-12 space-y-4">
          <span className="label">FREQUENTLY ASKED QUESTIONS</span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#111]">
            Everything you need to know.
          </h1>
          <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
            Honest answers to the questions our clients ask most. If yours isn't here, email{" "}
            <a href="mailto:hello@renoa.tech" className="text-[var(--accent)] hover:underline">
              hello@renoa.tech
            </a>{" "}
            or{" "}
            <button
              onClick={() => setBookingOpen(true)}
              className="text-[var(--accent)] hover:underline font-medium"
            >
              book a free call
            </button>
            .
          </p>
        </div>

        {/* Category Filter */}
        <div className="wrapper max-w-[900px] mb-10">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIdx(null); }}
                className={`px-4 py-1.5 rounded-full text-xs font-medium font-mono transition-all ${
                  activeCategory === cat
                    ? "bg-[#111] text-white"
                    : "bg-[#f3f4f6] text-[#4b5563] hover:bg-[#e5e7eb] hover:text-[#111]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="wrapper max-w-[900px] space-y-3">
          {filtered.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[#0000000d] bg-white overflow-hidden hover:border-[var(--accent)]/30 transition-colors"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-start justify-between gap-4 px-7 py-5 text-left"
                id={`faq-${i}`}
                aria-expanded={openIdx === i}
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-[10px] font-bold font-mono text-[var(--accent)] mt-0.5 shrink-0 uppercase tracking-wider">
                    {faq.category.split(" ")[0]}
                  </span>
                  <span className="text-sm font-semibold text-[#111] leading-snug">{faq.question}</span>
                </div>
                <svg
                  className={`w-5 h-5 shrink-0 text-[#9ca3af] transition-transform duration-200 ${openIdx === i ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              {openIdx === i && (
                <div className="px-7 pb-6 text-sm text-[var(--text-secondary)] leading-relaxed border-t border-[#0000000d] pt-5 ml-0">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="wrapper max-w-[900px] mt-20">
          <div className="rounded-2xl border border-[#0000000d] bg-white p-8 md:p-12 text-center space-y-4 shadow-sm">
            <h3 className="text-2xl font-bold text-[#111]">Still have a question?</h3>
            <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
              Our engineering team responds to email within one business day. For urgent matters, WhatsApp is fastest.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[var(--accent)] px-7 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
              >
                Book a free call
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
              <a
                href="https://wa.me/256700000000?text=Hi%20RENOA%2C%20I%20have%20a%20question."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-[#25D366] bg-[#25D366]/10 px-7 text-sm font-medium text-[#1E9E4B] transition-colors hover:bg-[#25D366]/20"
              >
                Chat on WhatsApp
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
