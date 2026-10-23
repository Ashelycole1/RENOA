"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQS } from "@/data/faq";

export default function FAQSection({ limit = 5 }: { limit?: number }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayedFaqs = FAQS.slice(0, limit);

  return (
    <section className="py-24 border-t border-[#0000000d] bg-white">
      <div className="wrapper max-w-[920px]">
        {/* Header */}
        <div className="mb-12 text-center space-y-3">
          <span className="label">Clarity & Answers</span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-base text-[var(--text-secondary)]">
            Everything you need to know about working with RENOA, our payment terms, timelines, and code ownership.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3">
          {displayedFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#0000000d] bg-[#fdfdfd] overflow-hidden transition-all duration-200 hover:border-[#0000001a]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-[#111] pr-4">
                    {faq.question}
                  </span>
                  <span className={`h-6 w-6 rounded-full border border-[#e5e7eb] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 bg-[var(--accent)] text-white border-[var(--accent)]" : "text-[#6b7280]"}`}>
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m6 9 6 6 6-6"/></svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-[var(--text-secondary)] border-t border-[#00000006]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {limit < FAQS.length && (
          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--accent)] hover:underline"
            >
              VIEW ALL {FAQS.length} FAQS →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
