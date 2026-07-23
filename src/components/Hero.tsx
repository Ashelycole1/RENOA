"use client";

import { ArrowRight, ExternalLink } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="pt-28 pb-24 dot-bg">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[540px]">
          {/* Left: Text */}
          <div className="space-y-6">
            {/* Featured Chip */}
            <a
              href="https://driveug.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#E6F2EC] border border-[#0F6B3C]/20 rounded-full text-xs font-mono font-semibold text-[#0F6B3C] hover:bg-[#0F6B3C] hover:text-white transition-all group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0F6B3C] group-hover:bg-white animate-pulse" />
              <span>FEATURED: DriveUG — Peer-to-Peer Rental Platform</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0a0a0a] tracking-tight leading-[1.05]">
              We build software that means business.
            </h1>

            <p className="text-lg text-[#525252] max-w-lg leading-relaxed">
              Our adaptive team powers engineering, design, and AI operations for teams across Kampala and global markets.
            </p>

            <div className="flex items-center gap-4 flex-wrap pt-2">
              <button onClick={onOpenBooking} className="btn btn-fill">
                Book a call <ArrowRight className="w-4 h-4" />
              </button>
              <a href="#capabilities" className="btn btn-outline">
                Learn more <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Isometric Stack Illustration */}
          <div className="flex items-center justify-center">
            <svg
              viewBox="0 0 520 480"
              className="w-full max-w-[480px]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Orbit ring */}
              <ellipse
                cx="260"
                cy="200"
                rx="200"
                ry="85"
                stroke="#0F6B3C"
                strokeOpacity="0.25"
                strokeWidth="1.5"
                strokeDasharray="5 5"
              />
              {/* Vertical stem */}
              <line x1="260" y1="60" x2="260" y2="148" stroke="#0F6B3C" strokeOpacity="0.35" strokeWidth="1.5" />

              {/* Globe */}
              <g transform="translate(260,140)">
                <circle cx="0" cy="0" r="46" fill="#0F6B3C" />
                <ellipse cx="0" cy="0" rx="46" ry="20" stroke="#fff" strokeWidth="1" fill="none" strokeOpacity="0.5" />
                <ellipse cx="0" cy="0" rx="22" ry="46" stroke="#fff" strokeWidth="1" fill="none" strokeOpacity="0.5" />
                <line x1="-46" y1="0" x2="46" y2="0" stroke="#fff" strokeWidth="1" strokeOpacity="0.5" />
              </g>

              {/* ── Layer: LAUNCH (bottom) ── */}
              <polygon points="100,360 260,440 420,360 260,280" fill="#0B5230" />
              <polygon points="100,360 260,440 260,470 100,390" fill="#052E1A" />
              <polygon points="260,440 420,360 420,390 260,470" fill="#083D22" />
              <text
                x="190" y="388"
                fill="#ffffff" fillOpacity="0.9"
                fontSize="18" fontFamily="Space Grotesk, sans-serif"
                fontStyle="italic" fontWeight="600"
                transform="rotate(-26.5 190 388)"
              >Launch</text>

              {/* ── Layer: BUILD (middle) ── */}
              <polygon points="100,305 260,385 420,305 260,225" fill="#0F6B3C" />
              <polygon points="100,305 260,385 260,360 100,280" fill="#052E1A" />
              <polygon points="260,385 420,305 420,330 260,410" fill="#0A5030" />
              <text
                x="200" y="335"
                fill="#ffffff" fillOpacity="0.9"
                fontSize="18" fontFamily="Space Grotesk, sans-serif"
                fontStyle="italic" fontWeight="600"
                transform="rotate(-26.5 200 335)"
              >Build</text>

              {/* ── Layer: DESIGN (top) ── */}
              <polygon points="100,250 260,330 420,250 260,170" fill="#14844A" />
              <polygon points="100,250 260,330 260,305 100,225" fill="#0B5230" />
              <polygon points="260,330 420,250 420,275 260,355" fill="#0F6B3C" />
              <text
                x="190" y="282"
                fill="#ffffff" fillOpacity="0.9"
                fontSize="18" fontFamily="Space Grotesk, sans-serif"
                fontStyle="italic" fontWeight="600"
                transform="rotate(-26.5 190 282)"
              >Design</text>

              {/* Small satellite cube */}
              <rect x="408" y="390" width="32" height="32" rx="6" fill="#0F6B3C" />
              <rect x="408" y="390" width="32" height="32" rx="6" stroke="#fff" strokeWidth="1" fill="none" strokeOpacity="0.4" />
              <circle cx="420" cy="402" r="2.5" fill="#fff" fillOpacity="0.7" />
              <circle cx="428" cy="410" r="2.5" fill="#fff" fillOpacity="0.7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
