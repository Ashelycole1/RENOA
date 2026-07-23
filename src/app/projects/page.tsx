"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import WorkCard, { ProjectData } from "@/components/WorkCard";
import { Filter } from "lucide-react";

const ALL_PROJECTS: ProjectData[] = [
  {
    id: "driveug",
    title: "DriveUG",
    category: "Platform",
    year: "2026",
    description: "Peer-to-peer car rental platform for Uganda with Mobile Money booking and verified owner dashboards.",
    liveUrl: "https://driveug.vercel.app",
    badge: "MOBILITY PLATFORM",
    accentColor: "#0F6B3C",
    metrics: "MTN / Airtel Mobile Money",
    inDevelopment: false,
  },
  {
    id: "lawbuddy",
    title: "LAWBUDDY",
    category: "AI",
    year: "2026",
    description: "AI legal assistant grounded strictly in the 1995 Ugandan Constitution with chat and article comparison.",
    liveUrl: "https://uglawbuddy.vercel.app",
    badge: "CONSTITUTIONAL AI",
    accentColor: "#0F6B3C",
    metrics: "1995 Constitution RAG",
    inDevelopment: false,
  },
  {
    id: "gemyte",
    title: "Gemyte",
    category: "AI",
    year: "2026",
    description: "3D AI learning engine — upload a syllabus, generate Knowledge Orbs, and master STEM via gamified challenges.",
    liveUrl: "https://gemyte.vercel.app",
    badge: "3D LEARNING ENGINE",
    accentColor: "#0F6B3C",
    metrics: "Gemini 2.5 STEM Engine",
    inDevelopment: false,
  },
  {
    id: "konnect-web3",
    title: "Konnect Web3",
    category: "Web3",
    year: "2026",
    description: "On-chain loyalty and automated smart contract settlement engine for East African merchants.",
    liveUrl: "https://driveug.vercel.app",
    badge: "ON-CHAIN SETTLEMENT",
    accentColor: "#0F6B3C",
    metrics: "Smart Contract Layer",
    inDevelopment: true,
  },
  {
    id: "renoa-brand",
    title: "RENOA Brand System",
    category: "Brand",
    year: "2026",
    description: "Identity system, visual language, and 3D illustration assets designed for RENOA studio.",
    liveUrl: "https://driveug.vercel.app",
    badge: "IDENTITY SYSTEM",
    accentColor: "#0F6B3C",
    metrics: "3D Isometric Visuals",
    inDevelopment: false,
  },
];

const FILTERS = ["All", "AI", "Web3", "Platform", "Brand", "Consulting"];

export default function ProjectsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      <Nav onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-32 pb-24">
        <div className="wrapper">
          {/* Header */}
          <div className="max-w-2xl mb-12 space-y-3">
            <span className="label">ALL PROJECTS</span>
            <h1 className="text-5xl font-bold text-[#0a0a0a] tracking-tight">Our Work</h1>
            <p className="text-lg text-[#525252] leading-relaxed">
              Every project is a partnership — from concept to launch, engineered with precision and care for global scale.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 mb-10 pb-8 border-b border-[#e5e5e5]">
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#a3a3a3] mr-1">
              <Filter className="w-3.5 h-3.5" /> FILTER:
            </div>
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                  filter === f
                    ? "bg-[#0F6B3C] text-white border-[#0F6B3C]"
                    : "bg-white text-[#525252] border-[#e5e5e5] hover:border-[#aaa]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {filtered.map((p, i) => (
              <WorkCard key={p.id} project={p} index={i} />
            ))}
          </div>

          {/* CTA */}
          <div className="p-10 rounded-xl bg-[#fafafa] border border-[#e5e5e5] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-[#0a0a0a]">Ready to build?</h2>
              <p className="text-sm text-[#525252]">Let&apos;s discuss how we can bring your next product to life.</p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="btn btn-fill shrink-0"
            >
              Start a Project
            </button>
          </div>
        </div>
      </main>

      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
