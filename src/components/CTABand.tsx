"use client";

import { ArrowRight, Sparkles } from "lucide-react";

interface CTABandProps {
  onOpenBooking: () => void;
}

export default function CTABand({ onOpenBooking }: CTABandProps) {
  return (
    <section className="py-24 border-b border-[#1C2A3A] relative overflow-hidden bg-gradient-to-b from-[#071019] to-[#0F1B29]">
      {/* Background Ambient Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#4F7CFF]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10 text-center max-w-3xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 text-xs font-semibold text-[#7097FF]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>LET&apos;S PARTNER</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
          Ready to build something that{" "}
          <span className="text-accent-gradient">thinks, owns, or plays</span> for keeps?
        </h2>

        <p className="text-base sm:text-lg text-[#9AA5B1] leading-relaxed">
          From agentic AI workflows to on-chain infrastructure and gamified product engines — our team in Kampala turns abstract specs into working, production-ready code.
        </p>

        <div className="pt-2 flex justify-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#4F7CFF] hover:bg-[#3B66E6] text-white font-semibold text-base rounded-xl transition-all shadow-xl shadow-[#4F7CFF]/25 hover:scale-105"
          >
            <span>Book a call</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
