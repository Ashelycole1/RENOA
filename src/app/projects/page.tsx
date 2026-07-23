"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import WorkCard, { ProjectData } from "@/components/WorkCard";
import { Filter, ArrowRight } from "lucide-react";

const ALL_PROJECTS: ProjectData[] = [
  {
    id: "driveug",
    title: "DriveUG",
    category: "Platform",
    year: "2026",
    description: "Peer-to-peer car rental platform for Uganda with Mobile Money booking and owner dashboards.",
    liveUrl: "https://driveug.vercel.app",
    badge: "MOBILITY PLATFORM",
    accentColor: "#0F6B3C",
    metrics: "MTN / Airtel Mobile Money Integration",
    techStack: ["Next.js 14", "Mobile Money", "Tailwind CSS"],
    inDevelopment: false,
  },
  {
    id: "lawbuddy",
    title: "LAWBUDDY",
    category: "AI",
    year: "2026",
    description: "An AI legal assistant grounded strictly in the 1995 Ugandan Constitution, with chat and side-by-side article comparison.",
    liveUrl: "https://uglawbuddy.vercel.app",
    badge: "CONSTITUTIONAL AI",
    accentColor: "#0F6B3C",
    metrics: "1995 Constitution RAG Grounding",
    techStack: ["Agentic AI", "Vector Search", "Uganda Law"],
    inDevelopment: false,
  },
  {
    id: "gemyte",
    title: "Gemyte",
    category: "AI",
    year: "2026",
    description: "An AI-driven 3D learning engine — upload a syllabus, generate 'Knowledge Orbs,' and work through STEM material as gamified cognitive challenges, powered by Gemini 2.5.",
    liveUrl: "https://gemyte.vercel.app",
    badge: "3D LEARNING ENGINE",
    accentColor: "#0F6B3C",
    metrics: "Gemini 2.5 STEM Engine",
    techStack: ["Gemini 2.5", "WebGL", "Gamification"],
    inDevelopment: false,
  },
  {
    id: "konnect-web3",
    title: "Konnect Web3 Infrastructure",
    category: "Web3",
    year: "2026",
    description: "On-chain loyalty and automated smart contract settlement engine built for East African merchants.",
    liveUrl: "https://driveug.vercel.app",
    badge: "ON-CHAIN SETTLEMENT",
    accentColor: "#0F6B3C",
    metrics: "Smart Contract Settlement Layer",
    techStack: ["Solidity", "Web3", "Next.js"],
    inDevelopment: true,
  },
  {
    id: "renoa-brand",
    title: "RENOA Brand & Motion System",
    category: "Brand",
    year: "2026",
    description: "Identity system, visual language, and custom 3D illustration assets designed for RENOA studio.",
    liveUrl: "https://driveug.vercel.app",
    badge: "IDENTITY SYSTEM",
    accentColor: "#0F6B3C",
    metrics: "3D Isometric & Stippled Visuals",
    techStack: ["Design System", "Motion Design"],
    inDevelopment: false,
  },
];

const FILTER_CATEGORIES = ["All", "AI", "Web3", "Platform", "Brand", "Consulting"];

export default function ProjectsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#111827] selection:bg-[#0F6B3C] selection:text-white">
      <Nav onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-32 pb-24">
        <div className="container">
          {/* Header */}
          <div className="max-w-3xl mb-12 space-y-4">
            <span className="eyebrow">ALL PROJECTS</span>

            <h1 className="text-4xl sm:text-5xl font-bold text-[#111827] tracking-tight">
              Our Work
            </h1>

            <p className="text-lg text-[#4B5563] leading-relaxed">
              Every project is a partnership — from concept to launch, engineered with precision and care for global scale.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-[#0000000d]">
            <div className="flex items-center gap-1.5 mr-2 text-xs font-mono text-[#6B7280]">
              <Filter className="w-3.5 h-3.5" />
              <span>FILTER:</span>
            </div>
            {FILTER_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#0F6B3C] text-white shadow-sm shadow-[#0F6B3C]/20"
                    : "bg-white text-[#4B5563] hover:text-[#111827] border border-[#0000000d]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredProjects.map((project, idx) => (
              <WorkCard key={project.id} project={project} index={idx} />
            ))}
          </div>

          {/* Bottom CTA Band */}
          <div className="p-10 rounded-2xl bg-gradient-to-r from-[#E4F3EA] to-[#f7f7f7] border border-[#0000000d] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-[#111827]">Ready to build?</h2>
              <p className="text-sm text-[#4B5563]">Let&apos;s discuss how we can bring your next product to life.</p>
            </div>
            <button
              onClick={() => setBookingOpen(true)}
              className="btn-primary text-sm px-6 py-3.5 whitespace-nowrap"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
