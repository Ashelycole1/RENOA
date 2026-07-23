"use client";

import { ArrowRight } from "lucide-react";

interface CTABandProps {
  onOpenBooking: () => void;
}

export default function CTABand({ onOpenBooking }: CTABandProps) {
  return (
    <section className="py-24 border-b border-[#0000000d] relative overflow-hidden bg-grid-pattern bg-[#f7f7f7]/60">
      <div className="container relative z-10 text-center max-w-3xl mx-auto space-y-6">
        <span className="eyebrow">START BUILDING</span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight leading-tight">
          Ready to upgrade your product operations?
        </h2>

        <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
          Our value engineers work with you to deeply understand your business, custom-build your workspace, and provide full-stack support.
        </p>

        <div className="pt-4 flex justify-center">
          <button
            onClick={onOpenBooking}
            className="btn-primary text-base px-8 py-4"
          >
            <span>Book a call</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
