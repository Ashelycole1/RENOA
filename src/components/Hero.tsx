"use client";

import { ArrowRight } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="pt-32 pb-24 bg-[#fdfdfd]">
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[520px]">
          {/* Left: Text Column (Matching Afro Labs Screenshot 1) */}
          <div className="lg:col-span-6 space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-[#111827] tracking-tight leading-[1.08]">
              We build software <br />
              that means <br />
              business
            </h1>

            <p className="text-base sm:text-lg text-[#525252] max-w-md font-normal leading-relaxed">
              Our adaptive product team powers engineering, design, and AI operations for real-world enterprises, unleashing your business value.
            </p>

            <div className="flex items-center gap-4 flex-wrap pt-2">
              <button
                onClick={onOpenBooking}
                className="btn btn-fill text-sm px-6 py-3.5"
              >
                <span>Book a call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#capabilities"
                className="btn btn-outline text-sm px-6 py-3.5"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right: Isometric Stack 3D Graphic (Exact Replica of Screenshot 1) */}
          <div className="lg:col-span-6 flex items-center justify-center relative">
            <svg
              viewBox="0 0 540 500"
              className="w-full max-w-[500px] drop-shadow-md"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Dashed Orbital Ellipse */}
              <ellipse
                cx="270"
                cy="250"
                rx="230"
                ry="115"
                stroke="#0F6B3C"
                strokeOpacity="0.3"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />

              {/* Vertical Center Stem */}
              <line
                x1="270"
                y1="30"
                x2="270"
                y2="180"
                stroke="#0F6B3C"
                strokeOpacity="0.4"
                strokeWidth="1.2"
              />

              {/* ── Wireframe Globe (Top Sphere) ── */}
              <g transform="translate(270, 115)">
                {/* Solid Globe Fill */}
                <circle cx="0" cy="0" r="48" fill="#0F6B3C" />
                {/* Globe Outer Ring */}
                <circle cx="0" cy="0" r="48" stroke="#ffffff" strokeWidth="1.2" fill="none" strokeOpacity="0.9" />
                {/* Horizontal Latitudes */}
                <ellipse cx="0" cy="0" rx="48" ry="22" stroke="#ffffff" strokeWidth="1" fill="none" strokeOpacity="0.6" />
                <ellipse cx="0" cy="0" rx="48" ry="36" stroke="#ffffff" strokeWidth="1" fill="none" strokeOpacity="0.4" />
                {/* Vertical Longitudes */}
                <ellipse cx="0" cy="0" rx="22" ry="48" stroke="#ffffff" strokeWidth="1" fill="none" strokeOpacity="0.6" />
                <ellipse cx="0" cy="0" rx="36" ry="48" stroke="#ffffff" strokeWidth="1" fill="none" strokeOpacity="0.4" />
                {/* Equator Lines */}
                <line x1="-48" y1="0" x2="48" y2="0" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.7" />
                <line x1="0" y1="-48" x2="0" y2="48" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.7" />
              </g>

              {/* ── BOTTOM LAYER: LAUNCH ── */}
              {/* Top Face */}
              <polygon points="120,330 270,400 420,330 270,260" fill="#0B5230" />
              {/* Left Face */}
              <polygon points="120,330 270,400 270,440 120,370" fill="#04180F" />
              {/* Right Face */}
              <polygon points="270,400 420,330 420,370 270,440" fill="#062C1B" />
              {/* Label: Launch */}
              <text
                x="155"
                y="360"
                fill="#ffffff"
                fontSize="19"
                fontFamily="'Space Grotesk', system-ui, sans-serif"
                fontStyle="italic"
                fontWeight="500"
                transform="rotate(25 155 360)"
              >
                Launch
              </text>

              {/* ── MIDDLE LAYER: BUILD ── */}
              {/* Top Face */}
              <polygon points="120,275 270,345 420,275 270,205" fill="#0F6B3C" />
              {/* Left Face */}
              <polygon points="120,275 270,345 270,315 120,245" fill="#04180F" />
              {/* Right Face */}
              <polygon points="270,345 420,275 420,305 270,375" fill="#083B22" />
              {/* Label: Build */}
              <text
                x="155"
                y="305"
                fill="#ffffff"
                fontSize="19"
                fontFamily="'Space Grotesk', system-ui, sans-serif"
                fontStyle="italic"
                fontWeight="500"
                transform="rotate(25 155 305)"
              >
                Build
              </text>

              {/* ── TOP LAYER: DESIGN ── */}
              {/* Top Face */}
              <polygon points="120,220 270,290 420,220 270,150" fill="#12824A" />
              {/* Left Face */}
              <polygon points="120,220 270,290 270,260 120,190" fill="#0B5230" />
              {/* Right Face */}
              <polygon points="270,290 420,220 420,250 270,320" fill="#0A6136" />
              {/* Label: Design */}
              <text
                x="155"
                y="250"
                fill="#ffffff"
                fontSize="19"
                fontFamily="'Space Grotesk', system-ui, sans-serif"
                fontStyle="italic"
                fontWeight="500"
                transform="rotate(25 155 250)"
              >
                Design
              </text>

              {/* ── Bottom Right Satellite Cube (Matching Screenshot 1) ── */}
              <g transform="translate(425, 360)">
                {/* Top face */}
                <polygon points="0,15 22,25 44,15 22,5" fill="#0F6B3C" />
                {/* Left face */}
                <polygon points="0,15 22,25 22,48 0,38" fill="#0B5230" />
                {/* Right face */}
                <polygon points="22,25 44,15 44,38 22,48" fill="#04180F" />
                {/* White dots on right face */}
                <rect x="28" y="24" width="4" height="4" rx="1" fill="#ffffff" />
                <rect x="35" y="24" width="4" height="4" rx="1" fill="#ffffff" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
