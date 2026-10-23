"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

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
          className="grid w-full items-center gap-16 md:grid-cols-[minmax(0,1.15fr)_minmax(340px,480px)] md:gap-14"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.55s ease, transform 0.55s ease",
          }}
        >
          {/* Left: text */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            {/* Eyebrow chip */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0F6B3C22] bg-[var(--accent-soft)] px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
              <span className="text-[12px] font-semibold text-[var(--accent)] font-mono tracking-wide">
                Software Studio · Kampala, Uganda
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="text-[46px] leading-[1.08] tracking-[-0.04em] text-[#111] md:text-[64px] lg:text-[72px]"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
            >
              We build software
              <br />
              <span className="text-[var(--accent)] font-normal">that means</span>
              <br />
              business.
            </h1>

            {/* Subline */}
            <p className="mt-8 max-w-[540px] text-[17px] leading-[1.75] text-[#525252]">
              Product design, platform engineering, and localized AI operations from Kampala for teams across East Africa and global markets.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <button
                onClick={onOpenBooking}
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl bg-[var(--accent)] px-8 text-[15px] font-medium text-white shadow-sm transition-all hover:bg-[var(--accent-hover)] hover:shadow-md active:scale-[0.98]"
              >
                Book a call
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" />
                </svg>
              </button>

              <Link
                href="/work"
                className="inline-flex min-h-[50px] items-center gap-2 rounded-xl border border-[#0000001a] bg-white px-7 text-[15px] font-medium text-[#111] transition-all hover:bg-[var(--accent-soft)] hover:border-[#0F6B3C30]"
              >
                See our work
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" />
                </svg>
              </Link>
            </div>

            {/* Live production proof strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs text-[var(--text-secondary)] font-mono">
              <span className="text-[#9ca3af]">Live in production:</span>
              <Link href="/work/driveug" className="font-semibold text-[#111] hover:text-[var(--accent)] underline underline-offset-2">DriveUG</Link>
              <span className="text-[#d1d5db]">·</span>
              <Link href="/work/lawbuddy" className="font-semibold text-[#111] hover:text-[var(--accent)] underline underline-offset-2">LAWBUDDY</Link>
              <span className="text-[#d1d5db]">·</span>
              <Link href="/work/gemyte" className="font-semibold text-[#111] hover:text-[var(--accent)] underline underline-offset-2">Gemyte</Link>
              <span className="text-[#d1d5db]">·</span>
              <Link href="/work/konnect" className="font-semibold text-[#111] hover:text-[var(--accent)] underline underline-offset-2">Konnect</Link>
            </div>

            {/* Social proof bar */}
            <div className="mt-10 flex items-center gap-6 border-t border-[#0000000d] pt-8">
              <div className="text-center md:text-left">
                <p className="text-[26px] font-bold tracking-tight text-[#111]">4</p>
                <p className="text-[12px] text-[#737373] font-mono">Live products</p>
              </div>
              <div className="h-8 w-px bg-[#0000000d]" />
              <div className="text-center md:text-left">
                <p className="text-[26px] font-bold tracking-tight text-[#111]">2026</p>
                <p className="text-[12px] text-[#737373] font-mono">Founded</p>
              </div>
              <div className="h-8 w-px bg-[#0000000d]" />
              <div className="text-center md:text-left">
                <p className="text-[26px] font-bold tracking-tight text-[#111]">6</p>
                <p className="text-[12px] text-[#737373] font-mono">Co-founders & leads</p>
              </div>
              <div className="h-8 w-px bg-[#0000000d]" />
              <div className="text-center md:text-left">
                <p className="text-[26px] font-bold tracking-tight text-[#111]">100%</p>
                <p className="text-[12px] text-[#737373] font-mono">IP ownership</p>
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
              className="h-auto w-full max-w-[440px] md:max-w-[500px]"
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
              <polygon points="410,322 260,392 260,430 410,360" fill="#062315" />
              <text x="220" y="380" fill="#ffffff" fillOpacity="0.65" fontSize="13" fontFamily="var(--font-mono)" letterSpacing="0.05em">Launch</text>
              <polygon points="110,252 260,322 410,252 260,182" fill="#0F6B3C" />
              <polygon points="110,252 260,322 260,270 110,200" fill="#0B5230" />
              <polygon points="410,252 260,322 260,270 410,200" fill="#073B22" />
              <text x="226" y="278" fill="#ffffff" fillOpacity="0.65" fontSize="13" fontFamily="var(--font-mono)" letterSpacing="0.05em">Build</text>
              <polygon points="110,182 260,252 410,182 260,112" fill="#148F50" />
              <polygon points="110,182 260,252 260,200 110,130" fill="#0F6B3C" />
              <polygon points="410,182 260,252 260,200 410,130" fill="#0B5230" />
              <text x="220" y="206" fill="#ffffff" fillOpacity="0.75" fontSize="13" fontFamily="var(--font-mono)" letterSpacing="0.05em">Design</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
