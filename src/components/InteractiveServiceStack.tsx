"use client";

import { useState, useRef, useEffect, MouseEvent } from "react";
import Link from "next/link";
import {
  Code2,
  Layers,
  Workflow,
  Cloud,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface InteractiveServiceStackProps {
  onOpenBooking?: () => void;
}

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  icon: typeof Code2;
  gradient: string;
  activeGradient: string;
  glowColor: string;
  link: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "software-engineering",
    number: "01",
    title: "Custom Software & Product Engineering",
    icon: Code2,
    gradient: "linear-gradient(135deg, #0284c7 0%, #0891b2 55%, #0d9488 100%)",
    activeGradient: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #10b981 100%)",
    glowColor: "rgba(6, 182, 212, 0.5)",
    link: "/services/platform-development",
  },
  {
    id: "ui-ux-strategy",
    number: "02",
    title: "UI/UX Design & Product Strategy",
    icon: Layers,
    gradient: "linear-gradient(135deg, #0891b2 0%, #0d9488 55%, #059669 100%)",
    activeGradient: "linear-gradient(135deg, #06b6d4 0%, #14b8a6 50%, #10b981 100%)",
    glowColor: "rgba(20, 184, 166, 0.5)",
    link: "/services/product-design",
  },
  {
    id: "systems-integration",
    number: "03",
    title: "API, Systems Integration & Legacy Modernization",
    icon: Workflow,
    gradient: "linear-gradient(135deg, #0d9488 0%, #059669 55%, #047857 100%)",
    activeGradient: "linear-gradient(135deg, #14b8a6 0%, #10b981 50%, #059669 100%)",
    glowColor: "rgba(16, 185, 129, 0.5)",
    link: "/services/mobile-money-integrations",
  },
  {
    id: "cloud-devops",
    number: "04",
    title: "Cloud Architecture & DevOps Engineering",
    icon: Cloud,
    gradient: "linear-gradient(135deg, #0284c7 0%, #2563eb 55%, #0891b2 100%)",
    activeGradient: "linear-gradient(135deg, #38bdf8 0%, #3b82f6 50%, #06b6d4 100%)",
    glowColor: "rgba(56, 189, 248, 0.5)",
    link: "/services/ai-automation",
  },
  {
    id: "managed-it-qa",
    number: "05",
    title: "Managed IT, Maintenance & Quality Assurance (QA)",
    icon: ShieldCheck,
    gradient: "linear-gradient(135deg, #0369a1 0%, #0891b2 55%, #0d9488 100%)",
    activeGradient: "linear-gradient(135deg, #0284c7 0%, #06b6d4 50%, #14b8a6 100%)",
    glowColor: "rgba(6, 182, 212, 0.5)",
    link: "/services/platform-development",
  },
];

export default function InteractiveServiceStack({ onOpenBooking }: InteractiveServiceStackProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // 3D Tilt state
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to 1
    setTilt({
      x: Number((y * -9).toFixed(2)), // tilt on X axis
      y: Number((x * 11).toFixed(2)),  // tilt on Y axis
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHoveredIndex(null);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % SERVICES.length);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[490px] select-none flex flex-col items-center"
    >
      {/* Soft ambient light glow behind stack */}
      <div className="pointer-events-none absolute -inset-6 -z-10 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl opacity-25"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-0 h-56 w-56 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 70%)" }}
        />
      </div>

      {/* Header — clean typography blending directly onto page */}
      <div className="text-center mb-4">
        <p
          className="text-[19px] font-serif italic text-teal-700 tracking-wide"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Our
        </p>

        <h2
          className="text-[28px] sm:text-[32px] font-black tracking-tight uppercase leading-none mt-0.5"
          style={{
            color: "#042f2e",
            letterSpacing: "-0.03em",
          }}
        >
          SERVICES
        </h2>

        <p className="mt-1 text-[10.5px] font-extrabold tracking-[0.16em] uppercase text-slate-500">
          SOLUTIONS THAT <span className="text-teal-600 font-black">DRIVE</span> YOUR BRAND FORWARD
        </p>
      </div>

      {/* ── 3D Interactive Card Stack (No enclosing container) ── */}
      <div
        className="relative w-full flex flex-col items-center justify-center my-1"
        style={{
          perspective: "1100px",
          minHeight: "380px",
          paddingTop: "2px",
          paddingBottom: "10px",
        }}
      >
        <div
          className="relative w-full max-w-[420px] transition-transform duration-200 ease-out"
          style={{
            transform: `rotateX(${15 + tilt.x}deg) rotateY(${-10 + tilt.y}deg) rotateZ(1deg)`,
            transformStyle: "preserve-3d",
            minHeight: "350px",
          }}
        >
          {SERVICES.map((item, index) => {
            const isSelected = selectedIndex === index;
            const isHovered = hoveredIndex === index;
            const IconComponent = item.icon;

            // Stepped diagonal coordinates
            const stepX = index * 10;
            const stepY = index * 36;
            const baseZ = (SERVICES.length - index) * 5;

            // Hover / selection elevation
            const activeXShift = isSelected ? -20 : isHovered ? -14 : 0;
            const activeYShift = isSelected ? -5 : isHovered ? -3 : 0;
            const activeZShift = isSelected ? 46 : isHovered ? 30 : 0;
            const activeScale = isSelected ? 1.03 : isHovered ? 1.015 : 1;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedIndex(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                role="button"
                tabIndex={0}
                aria-label={`Select ${item.title}`}
                className="relative cursor-pointer transition-all duration-300 ease-out"
                style={{
                  transform: `translate3d(${stepX + activeXShift}px, ${stepY + activeYShift}px, ${baseZ + activeZShift}px) scale(${activeScale})`,
                  transformStyle: "preserve-3d",
                  zIndex: isSelected ? 40 : 20 - index,
                  marginTop: index === 0 ? 0 : "-18px",
                }}
              >
                {/* Glowing Translucent Glass Card */}
                <div
                  className="relative flex items-center justify-between rounded-[18px] px-4 sm:px-5 py-3 transition-all duration-300"
                  style={{
                    background: isSelected ? item.activeGradient : item.gradient,
                    boxShadow: isSelected
                      ? `0 16px 38px -6px ${item.glowColor}, inset 0 1px 1px 0 rgba(255, 255, 255, 0.8), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.2)`
                      : `0 8px 20px -4px ${item.glowColor}, inset 0 1px 1px 0 rgba(255, 255, 255, 0.5), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.15)`,
                    border: isSelected
                      ? "1.5px solid rgba(255, 255, 255, 0.9)"
                      : "1px solid rgba(255, 255, 255, 0.45)",
                  }}
                >
                  {/* Top specular reflection strip */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-[48%] rounded-t-[17px] opacity-75"
                    style={{
                      background: "linear-gradient(180deg, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 100%)",
                    }}
                  />

                  {/* Sparkle icon if active */}
                  {isSelected && (
                    <div className="pointer-events-none absolute -right-1 -top-1 text-yellow-200 animate-pulse">
                      <Sparkles className="h-4 w-4 drop-shadow-xs" />
                    </div>
                  )}

                  {/* Left: Number badge & Service Title */}
                  <div className="relative z-10 flex items-center gap-2.5 min-w-0 pr-2">
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[9.5px] font-mono font-bold text-white shadow-xs"
                      style={{ background: "rgba(255, 255, 255, 0.22)" }}
                    >
                      {item.number}
                    </span>
                    <span
                      className="text-[13px] sm:text-[13.5px] font-bold tracking-tight text-white leading-snug drop-shadow-xs"
                    >
                      {item.title}
                    </span>
                  </div>

                  {/* Right: Divider & Wireframe Icon */}
                  <div className="relative z-10 flex items-center gap-2.5 pl-2 shrink-0">
                    <div
                      className="h-6 w-[1px]"
                      style={{ background: "rgba(255, 255, 255, 0.35)" }}
                    />
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-200 ${
                        isSelected ? "scale-110 bg-white/20 shadow-inner" : "text-white"
                      }`}
                    >
                      <IconComponent className="h-4.5 w-4.5 text-white stroke-[2]" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── CTA Button — sits cleanly below the card stack ── */}
      <div className="relative z-30 mt-6 flex justify-center w-full">
        <Link
          href="/contact"
          className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-5 text-[13.5px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#1D4ED8] hover:shadow-md active:scale-[0.98]"
        >
          <span>Let&apos;s build something together</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
