"use client";

import { useEffect, useState } from "react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative bg-[var(--bg)] overflow-hidden">
      {/* Subtle dot-grid background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: "radial-gradient(circle, #d4d4d420 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Soft radial glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-start justify-center">
        <div
          style={{
            width: "800px",
            height: "500px",
            background: "radial-gradient(ellipse at center top, #0F6B3C0a 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1160px] px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44">
        {/* Hero grid: left text / right illustration */}
        <div
          className="grid w-full items-center gap-16 md:grid-cols-[minmax(0,1fr)_minmax(340px,520px)] md:gap-16"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.55s ease, transform 0.55s ease",
          }}
        >
          {/* Left: text */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            {/* Eyebrow chip */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0F6B3C22] bg-[var(--accent-soft)] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <span className="text-[12px] font-medium text-[var(--accent)]">Product Studio · Kampala</span>
            </div>

            {/* Main heading */}
            <h1
              className="text-[48px] leading-[1.08] tracking-[-0.04em] text-[#111] md:text-[68px] lg:text-[76px]"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
            >
              We build software
              <br />
              <span className="text-[var(--accent)]">that means</span>
              <br />
              business.
            </h1>

            {/* Subline */}
            <p className="mt-8 max-w-[520px] text-[17px] leading-[1.75] text-[#525252]">
              Our adaptive product team powers engineering, design, and AI
              operations for teams across Kampala and global markets.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <button
                onClick={onOpenBooking}
                className="inline-flex min-h-[50px] items-center gap-2 rounded-md bg-[var(--accent)] px-8 text-[15px] font-medium text-white shadow-sm transition-all hover:bg-[var(--accent-hover)] hover:shadow-md active:scale-[0.98]"
              >
                Book a call
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" />
                </svg>
              </button>

              <a
                href="/#work"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-md border border-[#0000001a] bg-transparent px-7 text-[15px] font-medium text-[#111] transition-all hover:bg-[var(--accent-soft)] hover:border-[#0F6B3C30]"
              >
                See our work
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" />
                </svg>
              </a>
            </div>

            {/* Social proof bar */}
            <div className="mt-12 flex items-center gap-6 border-t border-[#0000000d] pt-8">
              <div className="text-center">
                <p className="text-[24px] font-semibold tracking-tight text-[#111]">3+</p>
                <p className="text-[12px] text-[#a3a3a3]">Products shipped</p>
              </div>
              <div className="h-8 w-px bg-[#0000000d]" />
              <div className="text-center">
                <p className="text-[24px] font-semibold tracking-tight text-[#111]">2026</p>
                <p className="text-[12px] text-[#a3a3a3]">Founded</p>
              </div>
              <div className="h-8 w-px bg-[#0000000d]" />
              <div className="text-center">
                <p className="text-[24px] font-semibold tracking-tight text-[#111]">6</p>
                <p className="text-[12px] text-[#a3a3a3]">Team members</p>
              </div>
            </div>
          </div>

          {/* Right: 3D isometric illustration */}
          <div
            className="flex w-full justify-center md:justify-end"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
            }}
          >
            <svg
              viewBox="0 0 520 480"
              className="h-auto w-full max-w-[440px] md:max-w-[520px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="260" cy="240" rx="230" ry="115" stroke="#0F6B3C" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="4 6" />
              <line x1="260" y1="28" x2="260" y2="160" stroke="#0F6B3C" strokeOpacity="0.3" strokeWidth="1" />
              <g transform="translate(260, 100)">
                <circle cx="0" cy="0" r="52" fill="#0F6B3C" />
                <circle cx="0" cy="0" r="52" stroke="#fff" strokeWidth="0.8" fill="none" strokeOpacity="0.6" />
                <ellipse cx="0" cy="0" rx="52" ry="23" stroke="#fff" strokeWidth="0.7" fill="none" strokeOpacity="0.45" />
                <ellipse cx="0" cy="0" rx="52" ry="40" stroke="#fff" strokeWidth="0.7" fill="none" strokeOpacity="0.3" />
                <ellipse cx="0" cy="0" rx="23" ry="52" stroke="#fff" strokeWidth="0.7" fill="none" strokeOpacity="0.45" />
                <ellipse cx="0" cy="0" rx="40" ry="52" stroke="#fff" strokeWidth="0.7" fill="none" strokeOpacity="0.3" />
                <line x1="-52" y1="0" x2="52" y2="0" stroke="#fff" strokeWidth="0.7" strokeOpacity="0.55" />
                <line x1="0" y1="-52" x2="0" y2="52" stroke="#fff" strokeWidth="0.7" strokeOpacity="0.55" />
              </g>
              <polygon points="110,322 260,392 410,322 260,252" fill="#0B5230" />
              <polygon points="110,322 260,392 260,430 110,360" fill="#04180F" />
              <polygon points="260,392 410,322 410,360 260,430" fill="#062C1B" />
              <text x="148" y="352" fill="#fff" fontSize="17" fontFamily="Space Grotesk, system-ui, sans-serif" fontStyle="italic" fontWeight="500" transform="rotate(26 148 352)" fillOpacity="0.9">Launch</text>
              <polygon points="110,266 260,336 410,266 260,196" fill="#0F6B3C" />
              <polygon points="110,266 260,336 260,306 110,236" fill="#04180F" />
              <polygon points="260,336 410,266 410,296 260,366" fill="#083B22" />
              <text x="148" y="296" fill="#fff" fontSize="17" fontFamily="Space Grotesk, system-ui, sans-serif" fontStyle="italic" fontWeight="500" transform="rotate(26 148 296)" fillOpacity="0.9">Build</text>
              <polygon points="110,210 260,280 410,210 260,140" fill="#12824A" />
              <polygon points="110,210 260,280 260,250 110,180" fill="#0B5230" />
              <polygon points="260,280 410,210 410,240 260,310" fill="#0A6136" />
              <text x="148" y="240" fill="#fff" fontSize="17" fontFamily="Space Grotesk, system-ui, sans-serif" fontStyle="italic" fontWeight="500" transform="rotate(26 148 240)" fillOpacity="0.9">Design</text>
              <g transform="translate(415, 350)">
                <polygon points="0,16 22,26 44,16 22,6" fill="#0F6B3C" />
                <polygon points="0,16 22,26 22,48 0,38" fill="#0B5230" />
                <polygon points="22,26 44,16 44,38 22,48" fill="#04180F" />
                <rect x="28" y="24" width="4" height="4" rx="1" fill="#fff" fillOpacity="0.8" />
                <rect x="34" y="24" width="4" height="4" rx="1" fill="#fff" fillOpacity="0.8" />
              </g>
              <circle cx="88" cy="265" r="6" fill="#0F6B3C" fillOpacity="0.2" stroke="#0F6B3C" strokeOpacity="0.4" strokeWidth="1" />
              <line x1="88" y1="265" x2="110" y2="266" stroke="#0F6B3C" strokeOpacity="0.25" strokeWidth="1" />
            </svg>
          </div>
        </div>

        {/* Featured project strip */}
        <div
          className="mt-20 w-full border-t border-[#0000000d] pt-16"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.6s ease 0.25s, transform 0.6s ease 0.25s",
          }}
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">Featured Work</span>
            <a href="/#work" className="text-[13px] font-medium text-[#525252] transition-colors hover:text-[var(--accent)]">
              View all ?
            </a>
          </div>

          <a href="https://driveug.vercel.app" target="_blank" rel="noopener noreferrer" className="group block">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-[#0000000d] bg-white text-[var(--accent)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.5 4.5v2c0 1.1.9 2 2 2h2M10 13l-2 2 2 2M14 13l2 2-2 2" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-[#111]">DriveUG</p>
                  <p className="text-[13px] text-[#525252]">Peer-to-peer car rental platform · 2026</p>
                </div>
              </div>
              <p className="text-[13px] leading-[1.6] text-[#525252] sm:max-w-[380px] sm:text-right">
                Mobile Money booking, owner dashboards, and peer rental management.
              </p>
            </div>

            <div className="relative aspect-[2/1] w-full overflow-hidden border border-[#0000000d] bg-[#f7f7f7] transition-colors group-hover:border-[#0000001a]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3 text-[#d4d4d4]">
                  <svg width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.67 18.95L7.6 15.64C8.39 15.11 9.53 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="font-mono text-[12px] text-[#a3a3a3]">driveug.vercel.app</span>
                </div>
              </div>
              <div className="absolute inset-0 bg-[var(--accent)] opacity-0 transition-opacity duration-300 group-hover:opacity-[0.02]" />
            </div>

            <div className="mt-5 flex items-center justify-between px-1">
              <div className="flex gap-2">
                <button type="button" className="h-1.5 w-8 bg-[#111] transition-all" aria-label="DriveUG" aria-current="true" />
                <button type="button" className="h-1.5 w-4 bg-[#d4d4d4] hover:bg-[#a3a3a3] transition-all" aria-label="LAWBUDDY" />
                <button type="button" className="h-1.5 w-4 bg-[#d4d4d4] hover:bg-[#a3a3a3] transition-all" aria-label="Gemyte" />
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[13px] text-[#a3a3a3]">01 / 03</span>
                <button type="button" className="flex h-9 w-9 items-center justify-center text-[#111] transition-colors hover:bg-[var(--accent-soft)]" aria-label="Previous">
                  <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" />
                  </svg>
                </button>
                <button type="button" className="flex h-9 w-9 items-center justify-center bg-[var(--accent)] text-white transition-colors hover:bg-[var(--accent-hover)]" aria-label="Next">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" />
                  </svg>
                </button>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
