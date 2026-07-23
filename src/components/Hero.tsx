"use client";

import { ExternalLink, ArrowRight, Layers, Code, Rocket } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden border-b border-[#0000000d]">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#0F6B3C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Featured-Demo Chip */}
        <div className="inline-flex items-center gap-2 mb-8">
          <a
            href="https://driveug.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs bg-white border border-[#0000001a] shadow-sm hover:border-[#0F6B3C]/40 transition-all"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0F6B3C] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0F6B3C]"></span>
            </span>
            <span className="font-semibold text-[#4B5563] group-hover:text-[#111827] transition-colors">
              FEATURED: <strong className="text-[#111827] font-bold">DriveUG</strong> — Peer-to-Peer Rental Platform
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-[#0F6B3C] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] tracking-tight leading-[1.15]">
              We build software that{" "}
              <span className="text-[#0F6B3C]">means business.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#4B5563] max-w-2xl font-normal leading-relaxed">
              Our adaptive team powers engineering, design, and AI operations for teams across Kampala and global markets.
            </p>

            {/* Dual CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="btn-primary text-base px-7 py-4"
              >
                <span>Book a call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#capabilities"
                className="btn-secondary text-base px-6 py-4"
              >
                <span>Learn more</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Isometric Illustration System (Design / Build / Launch) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-md bg-white border border-[#0000001a] rounded-2xl p-8 shadow-xl overflow-hidden">
              {/* Top Banner Header */}
              <div className="flex items-center justify-between border-b border-[#0000000d] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0F6B3C]" />
                  <span className="font-mono text-xs font-bold text-[#111827] uppercase tracking-wider">
                    SYSTEM ARCHITECTURE
                  </span>
                </div>
                <span className="font-mono text-xs font-semibold text-[#0F6B3C] bg-[#E4F3EA] px-2.5 py-0.5 rounded">
                  DEPLOYED
                </span>
              </div>

              {/* 3D Isometric Stack Visual */}
              <div className="space-y-4">
                {/* Block 1: Design */}
                <div className="group p-4 bg-[#f7f7f7] border border-[#0000000d] rounded-xl flex items-center justify-between transition-all hover:bg-[#E4F3EA] hover:border-[#0F6B3C]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0F6B3C] text-white flex items-center justify-center font-bold">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">Design & Blueprint</h4>
                      <p className="text-xs text-[#4B5563] italic">System Architecture & PRD</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#0F6B3C]">01</span>
                </div>

                {/* Block 2: Build */}
                <div className="group p-4 bg-[#f7f7f7] border border-[#0000000d] rounded-xl flex items-center justify-between transition-all hover:bg-[#E4F3EA] hover:border-[#0F6B3C]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0F6B3C] text-white flex items-center justify-center font-bold">
                      <Code className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">Build & Engineering</h4>
                      <p className="text-xs text-[#4B5563] italic">Agentic AI & Web Platforms</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#0F6B3C]">02</span>
                </div>

                {/* Block 3: Launch */}
                <div className="group p-4 bg-[#f7f7f7] border border-[#0000000d] rounded-xl flex items-center justify-between transition-all hover:bg-[#E4F3EA] hover:border-[#0F6B3C]/30">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-[#0F6B3C] text-white flex items-center justify-center font-bold">
                      <Rocket className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">Launch & Scale</h4>
                      <p className="text-xs text-[#4B5563] italic">Continuous Operations</p>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#0F6B3C]">03</span>
                </div>
              </div>

              {/* Wireframe Orbit Badge */}
              <div className="mt-6 pt-4 border-t border-[#0000000d] flex items-center justify-between text-xs text-[#6B7280]">
                <span>KAMPALA · EAST AFRICA</span>
                <span className="font-mono font-bold text-[#0F6B3C]">PRODUCT STUDIO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
