"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import WorkCard, { ProjectData } from "@/components/WorkCard";
import { Sparkles, Filter } from "lucide-react";

const ALL_PROJECTS: ProjectData[] = [
  {
    id: "driveug",
    title: "DriveUG",
    category: "Mobility / Web3-ready Platform",
    year: "2026",
    description: "Peer-to-peer car rental platform for Uganda with Mobile Money booking and owner dashboards.",
    liveUrl: "https://driveug.vercel.app",
    badge: "LIVE MOBILITY PLATFORM",
    accentColor: "#1D9E75",
    metrics: "MTN / Airtel Mobile Money Integration",
    techStack: ["Next.js 14", "Mobile Money", "Tailwind CSS", "Ugandan Fleet"],
  },
  {
    id: "lawbuddy",
    title: "LAWBUDDY",
    category: "Agentic AI",
    year: "2026",
    description: "An AI legal assistant grounded strictly in the 1995 Ugandan Constitution, with chat and side-by-side article comparison.",
    liveUrl: "https://uglawbuddy.vercel.app",
    badge: "CONSTITUTIONAL AI ENGINE",
    accentColor: "#4F7CFF",
    metrics: "1995 Constitution RAG Grounding",
    techStack: ["Agentic AI", "Vector Search", "Uganda Law", "Next.js"],
  },
  {
    id: "gemyte",
    title: "Gemyte",
    category: "Gamified Systems / Agentic AI",
    year: "2026",
    description: "An AI-driven 3D learning engine — upload a syllabus, generate 'Knowledge Orbs,' and work through STEM material as gamified cognitive challenges, powered by Gemini 2.5.",
    liveUrl: "https://gemyte.vercel.app",
    badge: "3D GAMIFIED STEM ENGINE",
    accentColor: "#8A5CF5",
    metrics: "Gemini 2.5 Cognitive Orbs",
    techStack: ["Gemini 2.5", "WebGL", "Gamification", "React"],
  },
  {
    id: "six-strands",
    title: "Six Strands Identity System",
    category: "Brand & Motion Design",
    year: "2026",
    description: "Interactive canvas animation identity system representing RENOA's six co-founders and core technology pillars.",
    liveUrl: "https://driveug.vercel.app",
    badge: "CANVAS & MOTION SYSTEM",
    accentColor: "#00F0FF",
    metrics: "Interactive Node Architecture",
    techStack: ["Framer Motion", "HTML5 Canvas", "Design System"],
  },
];

const CATEGORIES = ["All", "Agentic AI", "Mobility / Web3-ready Platform", "Gamified Systems / Agentic AI", "Brand & Motion Design"];

export default function ProjectsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#071019] text-[#F5F7FA] selection:bg-[#4F7CFF] selection:text-white">
      <Nav onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-32 pb-24">
        <div className="container">
          {/* Header */}
          <div className="max-w-3xl mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 text-xs font-semibold text-[#7097FF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SHIPPED WORK & PIPELINE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              All Projects & Systems.
            </h1>

            <p className="text-lg text-[#9AA5B1] leading-relaxed">
              Explore our full index of deployed platforms, AI legal assistants, gamified learning engines, and infrastructure code built for East Africa and beyond.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-6 border-b border-[#1C2A3A]">
            <div className="flex items-center gap-1.5 mr-2 text-xs font-mono text-[#627284]">
              <Filter className="w-3.5 h-3.5" />
              <span>FILTER:</span>
            </div>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#4F7CFF] text-white shadow-md shadow-[#4F7CFF]/20"
                    : "bg-[#0F1B29] text-[#9AA5B1] hover:text-white border border-[#1C2A3A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <WorkCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
