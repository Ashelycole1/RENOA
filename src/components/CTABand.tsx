"use client";

import { useEffect, useRef, useState } from "react";

interface CTABandProps {
  onOpenBooking: () => void;
}

export default function CTABand({ onOpenBooking }: CTABandProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="px-4 py-24 md:py-32">
      <div className="mx-auto max-w-[1080px]">
        
        <div
          ref={ref}
          className="group relative flex flex-col items-center overflow-hidden border border-[#0000000d] p-12 text-center transition-colors hover:border-[var(--accent)] md:p-20"
          style={{
            borderRadius: "var(--radius-md)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          {/* Subtle grid background matching Afro Labs strictly */}
          <div className="absolute inset-0 opacity-[0.02] transition-opacity duration-500 group-hover:opacity-[0.04] [background-image:linear-gradient(to_right,var(--text-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--text-primary)_1px,transparent_1px)] [background-size:2rem_2rem]" />

          <div className="relative z-10 flex max-w-[600px] flex-col items-center">
            <span className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Start building
            </span>

            <h2
              className="mb-6 text-[36px] leading-[1.05] tracking-[-0.04em] text-[var(--text-primary)] md:text-[56px]"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
            >
              Ready to upgrade your product operations?
            </h2>

            <p className="mb-10 max-w-[480px] text-[16px] leading-[1.6] text-[var(--text-secondary)]">
              Our value engineers work with you to deeply understand your business, custom-build your workspace, and provide full-stack support.
            </p>

            <button
              onClick={onOpenBooking}
              className="inline-flex min-h-[48px] items-center gap-2 bg-[var(--accent)] px-8 text-[15px] font-medium text-white shadow-sm transition-colors hover:bg-[var(--accent-hover)]"
              style={{ borderRadius: "var(--radius-md)" }}
            >
              Book a call
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
