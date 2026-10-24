"use client";

import { useState, useRef, useEffect, MouseEvent } from "react";
import Link from "next/link";
import {
  Megaphone,
  Headphones,
  Share2,
  Video,
  Calculator,
  Code2,
  Cpu,
  Layers,
  Smartphone,
  Palette,
  Sparkles,
  TrendingUp,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

interface InteractiveServiceStackProps {
  onOpenBooking?: () => void;
}

interface ServiceCardItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  deliverables: string[];
  icon: typeof Megaphone;
  link?: string;
  gradient: string;
  activeGradient: string;
  glowColor: string;
}

const SNIPPET_SERVICES: ServiceCardItem[] = [
  {
    id: "digital-marketing",
    number: "01",
    title: "Full Stack Digital Marketing",
    subtitle: "High-ROI Omnichannel Growth",
    badge: "Growth Engine",
    description: "End-to-end performance marketing, paid acquisition, search engine dominance, and high-converting funnels that turn visitors into loyal revenue.",
    deliverables: ["PPC & Meta / Google Ads", "Technical & Programmatic SEO", "Conversion Rate Optimization (CRO)", "Email & Retention Automations"],
    icon: Megaphone,
    link: "/#contact",
    gradient: "linear-gradient(135deg, #0284c7 0%, #0891b2 55%, #0d9488 100%)",
    activeGradient: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #10b981 100%)",
    glowColor: "rgba(6, 182, 212, 0.5)",
  },
  {
    id: "virtual-assistance",
    number: "02",
    title: "Virtual Assistance",
    subtitle: "Executive & Operations Support",
    badge: "24/7 Operations",
    description: "Trained remote specialists handling executive administration, customer support workflows, calendar management, and specialized CRM operations.",
    deliverables: ["Omnichannel Customer Support", "CRM & Pipeline Management", "Executive Calendar & Email", "Research & Data Operations"],
    icon: Headphones,
    link: "/#contact",
    gradient: "linear-gradient(135deg, #0891b2 0%, #0d9488 55%, #059669 100%)",
    activeGradient: "linear-gradient(135deg, #06b6d4 0%, #14b8a6 50%, #10b981 100%)",
    glowColor: "rgba(20, 184, 166, 0.5)",
  },
  {
    id: "social-media",
    number: "03",
    title: "Social Media Marketing",
    subtitle: "Viral Content & Community",
    badge: "Brand Reach",
    description: "Creative content production, brand storytelling, community engagement, and algorithmic distribution across LinkedIn, X, Instagram, and TikTok.",
    deliverables: ["Short-form Video & Reels", "Thought Leadership Ghostwriting", "Community Moderation & Engagement", "Monthly Performance Analytics"],
    icon: Share2,
    link: "/#contact",
    gradient: "linear-gradient(135deg, #0d9488 0%, #059669 55%, #047857 100%)",
    activeGradient: "linear-gradient(135deg, #14b8a6 0%, #10b981 50%, #059669 100%)",
    glowColor: "rgba(16, 185, 129, 0.5)",
  },
  {
    id: "ai-video",
    number: "04",
    title: "Ai Video Generation",
    subtitle: "Automated Visual Production",
    badge: "AI Powered",
    description: "Next-generation video synthesis: photorealistic AI avatars, dynamic multilingual voiceovers, rapid video ad variants, and localized product demos.",
    deliverables: ["Photorealistic AI Presenters", "Multilingual Voice Dubbing", "Rapid Ad Variant Generation", "Interactive Product Walkthroughs"],
    icon: Video,
    link: "/#contact",
    gradient: "linear-gradient(135deg, #0284c7 0%, #2563eb 55%, #0891b2 100%)",
    activeGradient: "linear-gradient(135deg, #38bdf8 0%, #3b82f6 50%, #06b6d4 100%)",
    glowColor: "rgba(56, 189, 248, 0.5)",
  },
  {
    id: "book-keeping",
    number: "05",
    title: "Book - Keeping",
    subtitle: "Financial Clarity & Ledgers",
    badge: "Accounting",
    description: "Reliable, cloud-native financial ledgering, dual-currency accounting (UGX & USD), tax-readiness reconciliation, and real-time cash flow reporting.",
    deliverables: ["Automated Bank & MoMo Reconciliation", "Monthly P&L and Balance Sheets", "Tax & Audit Ready Reporting", "Cash Flow Forecasting Models"],
    icon: Calculator,
    link: "/#contact",
    gradient: "linear-gradient(135deg, #0369a1 0%, #0891b2 55%, #0d9488 100%)",
    activeGradient: "linear-gradient(135deg, #0284c7 0%, #06b6d4 50%, #14b8a6 100%)",
    glowColor: "rgba(6, 182, 212, 0.5)",
  },
];

const STUDIO_SERVICES: ServiceCardItem[] = [
  {
    id: "platform-dev",
    number: "01",
    title: "Platform Development",
    subtitle: "Full-Stack Web & Cloud",
    badge: "Next.js & Cloud",
    description: "Production web applications, SaaS platforms, custom internal tools, and high-throughput APIs built for scale and sub-second performance.",
    deliverables: ["Next.js 15 & React Full-Stack", "PostgreSQL & Supabase Architecture", "Role-Based Access & OAuth", "Automated CI/CD Pipelines"],
    icon: Code2,
    link: "/services/platform-development",
    gradient: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 55%, #0284c7 100%)",
    activeGradient: "linear-gradient(135deg, #2563eb 0%, #38bdf8 50%, #06b6d4 100%)",
    glowColor: "rgba(37, 99, 235, 0.55)",
  },
  {
    id: "ai-automation",
    number: "02",
    title: "AI & Automation",
    subtitle: "Enterprise LLMs & RAG",
    badge: "Intelligent Systems",
    description: "Constitutional RAG systems, localized intelligence, autonomous workflow pipelines, and enterprise LLM integrations with verifiable accuracy.",
    deliverables: ["Private Document RAG Indexing", "Multi-Agent Workflow Pipelines", "Citation & Hallucination Guardrails", "Cost & Latency Optimization"],
    icon: Cpu,
    link: "/services/ai-automation",
    gradient: "linear-gradient(135deg, #2563eb 0%, #0284c7 55%, #0891b2 100%)",
    activeGradient: "linear-gradient(135deg, #3b82f6 0%, #0ea5e9 50%, #14b8a6 100%)",
    glowColor: "rgba(14, 165, 233, 0.55)",
  },
  {
    id: "product-design",
    number: "03",
    title: "Product Design",
    subtitle: "Figma Prototypes & Systems",
    badge: "UI / UX Systems",
    description: "User research, product strategy, high-fidelity prototypes, and scalable design systems that de-risk software before writing code.",
    deliverables: ["Interactive Figma Prototypes", "Enterprise Design Systems & Tokens", "User Journey & Persona Mapping", "Usability Testing & Spec Handoff"],
    icon: Layers,
    link: "/services/product-design",
    gradient: "linear-gradient(135deg, #0284c7 0%, #0891b2 55%, #0d9488 100%)",
    activeGradient: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #10b981 100%)",
    glowColor: "rgba(6, 182, 212, 0.55)",
  },
  {
    id: "mobile-money",
    number: "04",
    title: "Mobile Money & Payments",
    subtitle: "MTN MoMo & Airtel Money",
    badge: "Fintech Infra",
    description: "Direct MTN MoMo and Airtel Money integrations, automated push USSD prompts, escrow systems, and automated vendor disbursement flows.",
    deliverables: ["MTN MoMo & Airtel Money APIs", "Instant USSD Push-to-Phone", "Idempotent Webhook Handlers", "Dual-Currency (UGX/USD) Ledgers"],
    icon: Smartphone,
    link: "/services/mobile-money-integrations",
    gradient: "linear-gradient(135deg, #0891b2 0%, #0d9488 55%, #059669 100%)",
    activeGradient: "linear-gradient(135deg, #06b6d4 0%, #14b8a6 50%, #10b981 100%)",
    glowColor: "rgba(20, 184, 166, 0.55)",
  },
  {
    id: "brand-identity",
    number: "05",
    title: "Brand Identity",
    subtitle: "Distinctive Visual Systems",
    badge: "Brand Polish",
    description: "Distinctive brand positioning, logos, 3D visual assets, typography, and design systems for companies that mean business.",
    deliverables: ["Primary Mark & Favicon Suite", "Curated Color & Type Scales", "Custom 3D Visual Assets", "Investor Pitch & Style Deck"],
    icon: Palette,
    link: "/services/brand-identity",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 55%, #2563eb 100%)",
    activeGradient: "linear-gradient(135deg, #2563eb 0%, #38bdf8 50%, #06b6d4 100%)",
    glowColor: "rgba(37, 99, 235, 0.55)",
  },
];

export default function InteractiveServiceStack({ onOpenBooking }: InteractiveServiceStackProps) {
  const [activeCategory, setActiveCategory] = useState<"growth" | "studio">("growth");
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // 3D Tilt state
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const services = activeCategory === "growth" ? SNIPPET_SERVICES : STUDIO_SERVICES;
  const currentService = services[selectedIndex] || services[0];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to 1
    setTilt({
      x: Number((y * -10).toFixed(2)), // tilt on X axis
      y: Number((x * 12).toFixed(2)),  // tilt on Y axis
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHoveredIndex(null);
  };

  const nextCard = () => {
    setSelectedIndex((prev) => (prev + 1) % services.length);
  };

  const prevCard = () => {
    setSelectedIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev + 1) % services.length);
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev - 1 + services.length) % services.length);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [services.length]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[490px] select-none"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -inset-6 -z-10 overflow-hidden">
        <div
          className="absolute -top-6 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full blur-3xl opacity-30"
          style={{ background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-6 right-2 h-56 w-56 rounded-full blur-3xl opacity-20"
          style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 70%)" }}
        />
      </div>

      {/* Main Glass Shell */}
      <div
        className="relative overflow-hidden rounded-[26px] p-5 sm:p-6 shadow-[0_20px_50px_-12px_rgba(6,182,212,0.2)] backdrop-blur-xl transition-all duration-300"
        style={{
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.96) 0%, rgba(240, 253, 250, 0.75) 60%, rgba(255, 255, 255, 0.94) 100%)",
          border: "1px solid rgba(20, 184, 166, 0.22)",
        }}
      >
        {/* Header from Snippet */}
        <div className="text-center">
          <p
            className="text-[19px] font-serif italic text-teal-700 tracking-wide"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Our
          </p>

          <h2
            className="text-[28px] sm:text-[30px] font-black tracking-tight uppercase leading-none mt-0.5"
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

          {/* Category Toggle */}
          <div
            className="mt-3.5 inline-flex items-center gap-1 rounded-full p-0.5 shadow-inner"
            style={{
              background: "rgba(241, 245, 249, 0.9)",
              border: "1px solid rgba(203, 213, 225, 0.8)",
            }}
          >
            <button
              onClick={() => {
                setActiveCategory("growth");
                setSelectedIndex(0);
              }}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 ${
                activeCategory === "growth"
                  ? "bg-teal-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-teal-800"
              }`}
            >
              Growth Solutions
            </button>
            <button
              onClick={() => {
                setActiveCategory("studio");
                setSelectedIndex(0);
              }}
              className={`rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 ${
                activeCategory === "studio"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-blue-800"
              }`}
            >
              Software Studio
            </button>
          </div>
        </div>

        {/* ── 3D Stepped Isometric Stack ── */}
        <div
          className="relative mx-auto my-5 flex flex-col items-center justify-center"
          style={{
            perspective: "1000px",
            minHeight: "260px",
            paddingTop: "6px",
            paddingBottom: "12px",
          }}
        >
          <div
            className="relative w-full max-w-[350px] transition-transform duration-200 ease-out"
            style={{
              transform: `rotateX(${16 + tilt.x}deg) rotateY(${-12 + tilt.y}deg) rotateZ(2deg)`,
              transformStyle: "preserve-3d",
            }}
          >
            {services.map((item, index) => {
              const isSelected = selectedIndex === index;
              const isHovered = hoveredIndex === index;
              const IconComponent = item.icon;

              // Diagonal Stepped Staircase matching user's snippet
              const stepX = index * 10;
              const stepY = index * 38;
              const baseZ = (services.length - index) * 5;

              // When hovered or active: slide out & lift up towards viewer
              const activeXShift = isSelected ? -24 : isHovered ? -16 : 0;
              const activeYShift = isSelected ? -6 : isHovered ? -4 : 0;
              const activeZShift = isSelected ? 50 : isHovered ? 35 : 0;
              const activeScale = isSelected ? 1.04 : isHovered ? 1.02 : 1;

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
                    marginTop: index === 0 ? 0 : "-22px",
                  }}
                >
                  {/* Glowing translucent card wafer */}
                  <div
                    className="relative flex items-center justify-between rounded-[18px] px-4 sm:px-5 py-3 transition-all duration-300"
                    style={{
                      background: isSelected ? item.activeGradient : item.gradient,
                      boxShadow: isSelected
                        ? `0 18px 40px -6px ${item.glowColor}, inset 0 1px 1px 0 rgba(255, 255, 255, 0.75), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.2)`
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
                        <Sparkles className="h-4 w-4 drop-shadow-sm" />
                      </div>
                    )}

                    {/* Left: Title & numbering */}
                    <div className="relative z-10 flex items-center gap-2">
                      <span
                        className="flex h-5 w-5 items-center justify-center rounded-full text-[9.5px] font-mono font-bold text-white shadow-xs"
                        style={{ background: "rgba(255, 255, 255, 0.22)" }}
                      >
                        {item.number}
                      </span>
                      <span
                        className="text-[13.5px] sm:text-[14px] font-bold tracking-tight text-white drop-shadow-xs"
                      >
                        {item.title}
                      </span>
                    </div>

                    {/* Right: Divider & Wireframe Icon */}
                    <div className="relative z-10 flex items-center gap-2.5 pl-2.5">
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

        {/* Navigation Indicator & Arrows */}
        <div className="mt-4 flex items-center justify-between border-t border-teal-100 pt-3 text-xs">
          <div className="flex items-center gap-1.5">
            {services.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedIndex(idx)}
                aria-label={`Jump to ${item.title}`}
                className="h-1.5 rounded-full transition-all duration-200"
                style={{
                  width: selectedIndex === idx ? "20px" : "6px",
                  background: selectedIndex === idx ? "#0d9488" : "#ccfbf1",
                }}
              />
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={prevCard}
              aria-label="Previous card"
              className="flex h-6 w-6 items-center justify-center rounded-full border border-teal-200 bg-white text-teal-800 shadow-2xs hover:bg-teal-50 active:scale-95 transition-all"
            >
              <ChevronLeft className="h-3 w-3" />
            </button>
            <span className="px-1 font-mono text-[10.5px] font-bold text-slate-500">
              0{selectedIndex + 1} / 0{services.length}
            </span>
            <button
              onClick={nextCard}
              aria-label="Next card"
              className="flex h-6 w-6 items-center justify-center rounded-full border border-teal-200 bg-white text-teal-800 shadow-2xs hover:bg-teal-50 active:scale-95 transition-all"
            >
              <ChevronRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Selected Service Detail Drawer */}
        <div
          className="mt-3 rounded-xl p-3 sm:p-3.5 transition-all duration-300"
          style={{
            background: "rgba(240, 253, 250, 0.8)",
            border: "1px solid rgba(20, 184, 166, 0.2)",
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-1 rounded-md bg-teal-100 px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-teal-800 font-mono">
                {currentService.badge}
              </span>
              <h3 className="mt-0.5 text-[13px] font-bold text-slate-900">
                {currentService.title}
              </h3>
            </div>
            <div
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-white shadow-xs"
              style={{ background: currentService.gradient }}
            >
              {(() => {
                const Icon = currentService.icon;
                return <Icon className="h-3.5 w-3.5 text-white" />;
              })()}
            </div>
          </div>

          <p className="mt-1 text-[11px] leading-relaxed text-slate-600">
            {currentService.description}
          </p>

          <div className="mt-2 grid grid-cols-2 gap-1 text-[10.5px] text-slate-700">
            {currentService.deliverables.slice(0, 4).map((d, i) => (
              <div key={i} className="flex items-center gap-1 truncate">
                <CheckCircle2 className="h-3 w-3 shrink-0 text-teal-600" />
                <span className="truncate">{d}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Badges & CTA */}
        <div className="mt-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-left">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-teal-200 bg-teal-50 text-teal-700 shadow-2xs">
              <TrendingUp className="h-3 w-3" />
            </div>
            <p className="max-w-[200px] text-[9.5px] leading-tight font-medium text-slate-600">
              Smart solutions designed to grow your brand and simplify your business.
            </p>
          </div>

          {onOpenBooking ? (
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-1 rounded-full px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-xs transition-all hover:opacity-95 hover:shadow-md active:scale-95"
              style={{
                background: "linear-gradient(135deg, #0d9488 0%, #0284c7 100%)",
              }}
            >
              <span>Let&apos;s build something</span>
              <span className="font-extrabold text-cyan-200">amazing together.</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          ) : (
            <Link
              href={currentService.link || "/#contact"}
              className="inline-flex items-center justify-center gap-1 rounded-full px-3.5 py-1.5 text-[11px] font-semibold text-white shadow-xs transition-all hover:opacity-95 hover:shadow-md active:scale-95"
              style={{
                background: "linear-gradient(135deg, #0d9488 0%, #0284c7 100%)",
              }}
            >
              <span>Let&apos;s build something</span>
              <span className="font-extrabold text-cyan-200">amazing together.</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
