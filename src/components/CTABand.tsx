"use client";

import { ArrowRight } from "lucide-react";

interface CTABandProps {
  onOpenBooking: () => void;
}

export default function CTABand({ onOpenBooking }: CTABandProps) {
  return (
    <section className="py-28 border-t border-[#e5e5e5] dot-bg">
      <div className="wrapper text-center max-w-2xl mx-auto space-y-6">
        <span className="label">Start Building</span>

        <h2 className="text-4xl sm:text-5xl font-bold text-[#0a0a0a] tracking-tight leading-tight">
          Ready to upgrade your product operations?
        </h2>

        <p className="text-[#525252] text-lg leading-relaxed">
          Our value engineers work with you to deeply understand your business, custom-build your workspace, and provide full-stack support.
        </p>

        <div className="pt-2">
          <button
            onClick={onOpenBooking}
            className="btn btn-fill text-base px-8 py-3.5"
          >
            Book a call <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
