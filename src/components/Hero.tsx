"use client";

import { useEffect, useState } from "react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="bg-[var(--bg)] px-4 pb-20 pt-32 md:pt-40">
      <div className="mx-auto flex max-w-[1160px] flex-col items-center">

        {/* Hero grid — exact Afro Labs asymmetric columns */}
        <div
          className="grid w-full items-center gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] md:gap-10"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          {/* Left: text column */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <h1
              className="text-[46px] leading-[1.02] tracking-[-0.045em] text-[#111] md:text-[72px]"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
            >
              We build software{" "}
              <br className="hidden md:block" />
              <span>that means business</span>
            </h1>

            <p className="mt-6 max-w-[600px] text-[16px] leading-[1.6] text-[#525252] md:text-[18px]">
              Our adaptive product team powers engineering, design, and AI
              operations for teams across Kampala and global markets.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
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

              <a
                href="/#services"
                className="inline-flex min-h-[48px] items-center gap-2 border border-[#0000001a] bg-transparent px-6 text-[15px] font-medium text-[#111] transition-colors hover:bg-[var(--accent-soft)]"
                style={{ borderRadius: "var(--radius-md)" }}
              >
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: 3D isometric illustration — lifted up with -translate-y */}
          <div className="relative flex w-full justify-center md:-translate-y-16 md:justify-end lg:-translate-y-20">
            <svg
              viewBox="0 0 540 500"
              className="h-auto w-full max-w-[480px] md:max-w-[580px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Dashed Orbital Ellipse */}
              <ellipse
                cx="270" cy="252" rx="235" ry="118"
                stroke="#0F6B3C" strokeOpacity="0.25"
                strokeWidth="1" strokeDasharray="4 5"
              />
              {/* Vertical Center Stem */}
              <line
                x1="270" y1="28" x2="270" y2="175"
                stroke="#0F6B3C" strokeOpacity="0.35" strokeWidth="1"
              />

              {/* ── Wireframe Globe ── */}
              <g transform="translate(270, 112)">
                <circle cx="0" cy="0" r="50" fill="#0F6B3C" />
                <circle cx="0" cy="0" r="50" stroke="#fff" strokeWidth="1" fill="none" strokeOpacity="0.8" />
                <ellipse cx="0" cy="0" rx="50" ry="22" stroke="#fff" strokeWidth="0.8" fill="none" strokeOpacity="0.55" />
                <ellipse cx="0" cy="0" rx="50" ry="38" stroke="#fff" strokeWidth="0.8" fill="none" strokeOpacity="0.4" />
                <ellipse cx="0" cy="0" rx="22" ry="50" stroke="#fff" strokeWidth="0.8" fill="none" strokeOpacity="0.55" />
                <ellipse cx="0" cy="0" rx="38" ry="50" stroke="#fff" strokeWidth="0.8" fill="none" strokeOpacity="0.4" />
                <line x1="-50" y1="0" x2="50" y2="0" stroke="#fff" strokeWidth="0.8" strokeOpacity="0.65" />
                <line x1="0" y1="-50" x2="0" y2="50" stroke="#fff" strokeWidth="0.8" strokeOpacity="0.65" />
              </g>

              {/* ── LAUNCH (bottom) ── */}
              <polygon points="120,332 270,402 420,332 270,262" fill="#0B5230" />
              <polygon points="120,332 270,402 270,442 120,372" fill="#04180F" />
              <polygon points="270,402 420,332 420,372 270,442" fill="#062C1B" />
              <text x="158" y="362" fill="#fff" fontSize="18"
                fontFamily="'Space Grotesk', system-ui, sans-serif"
                fontStyle="italic" fontWeight="500"
                transform="rotate(26 158 362)" fillOpacity="0.9">Launch</text>

              {/* ── BUILD (middle) ── */}
              <polygon points="120,276 270,346 420,276 270,206" fill="#0F6B3C" />
              <polygon points="120,276 270,346 270,316 120,246" fill="#04180F" />
              <polygon points="270,346 420,276 420,306 270,376" fill="#083B22" />
              <text x="158" y="306" fill="#fff" fontSize="18"
                fontFamily="'Space Grotesk', system-ui, sans-serif"
                fontStyle="italic" fontWeight="500"
                transform="rotate(26 158 306)" fillOpacity="0.9">Build</text>

              {/* ── DESIGN (top) ── */}
              <polygon points="120,220 270,290 420,220 270,150" fill="#12824A" />
              <polygon points="120,220 270,290 270,260 120,190" fill="#0B5230" />
              <polygon points="270,290 420,220 420,250 270,320" fill="#0A6136" />
              <text x="158" y="250" fill="#fff" fontSize="18"
                fontFamily="'Space Grotesk', system-ui, sans-serif"
                fontStyle="italic" fontWeight="500"
                transform="rotate(26 158 250)" fillOpacity="0.9">Design</text>

              {/* ── Satellite mini-cube ── */}
              <g transform="translate(425, 360)">
                <polygon points="0,16 22,26 44,16 22,6" fill="#0F6B3C" />
                <polygon points="0,16 22,26 22,50 0,40" fill="#0B5230" />
                <polygon points="22,26 44,16 44,40 22,50" fill="#04180F" />
                <rect x="28" y="25" width="4" height="4" rx="1" fill="#fff" fillOpacity="0.8" />
                <rect x="35" y="25" width="4" height="4" rx="1" fill="#fff" fillOpacity="0.8" />
              </g>
            </svg>
          </div>
        </div>

        {/* Featured project demo strip — below hero, full width */}
        <div
          className="relative mt-20 w-full"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}
        >
          <div className="relative mx-auto w-full max-w-[1160px]">
            <a
              href="https://driveug.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group block transition-colors"
            >
              {/* Demo label row */}
              <div className="mb-4 flex flex-col gap-2 px-1 text-left sm:flex-row sm:items-end sm:justify-between">
                <div className="flex min-w-0 items-start gap-3">
                  <svg className="mt-0.5 shrink-0 text-[var(--accent)]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.5 4.5v2c0 1.1.9 2 2 2h2M10 13l-2 2 2 2M14 13l2 2-2 2" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="min-w-0">
                    <p className="text-[14px] font-semibold text-[#111]">DriveUG</p>
                    <p className="text-[12px] text-[#525252]">Peer-to-peer car rental platform</p>
                  </div>
                </div>
                <div className="sm:max-w-[420px] sm:text-right">
                  <p className="text-[13px] leading-[1.5] text-[#525252]">
                    Manage peer rentals, Mobile Money booking, and owner dashboards.
                  </p>
                </div>
              </div>

              {/* Demo screenshot area */}
              <div className="relative aspect-[1.86/1] w-full overflow-hidden border border-[#0000000d] bg-[#f7f7f7] transition-colors group-hover:border-[#0000001a]">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder illustration */}
                  <div className="flex flex-col items-center gap-4 text-[#d4d4d4]">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2.67 18.95L7.6 15.64C8.39 15.11 9.53 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[13px] font-mono text-[#a3a3a3]">driveug.vercel.app</span>
                  </div>
                </div>
              </div>
            </a>

            {/* Dots + counter + arrow nav */}
            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between px-2">
              <div className="flex gap-2">
                <button type="button" className="h-1.5 w-8 bg-[#111] transition-all" aria-label="DriveUG" aria-current="true" />
                <button type="button" className="h-1.5 w-4 bg-[#d4d4d4] hover:bg-[#a3a3a3] transition-all" aria-label="LAWBUDDY" aria-current="false" />
                <button type="button" className="h-1.5 w-4 bg-[#d4d4d4] hover:bg-[#a3a3a3] transition-all" aria-label="Gemyte" aria-current="false" />
              </div>
              <div className="flex items-center gap-3">
                <p className="text-[13px] font-medium text-[#a3a3a3] mr-2">01 / 03</p>
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center bg-transparent text-[#111] transition-colors hover:bg-[var(--accent-soft)]"
                  aria-label="Previous project"
                >
                  <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center bg-[var(--accent)] text-white transition-colors hover:bg-[var(--accent-hover)]"
                  aria-label="Next project"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
