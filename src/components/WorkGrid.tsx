"use client";

import Link from "next/link";
import WorkCard, { ProjectData } from "./WorkCard";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export const FEATURED_PROJECTS: ProjectData[] = [
  {
    id: "driveug",
    title: "DriveUG",
    category: "Mobility Platform",
    year: "2026",
    description: "Peer-to-peer car rental platform for Uganda with Mobile Money booking and owner dashboards.",
    liveUrl: "https://driveug.vercel.app",
    badge: "MOBILITY PLATFORM",
    accentColor: "#0F6B3C",
    metrics: "Uganda P2P Fleet Engine",
    techStack: ["Next.js 14", "Mobile Money", "Tailwind CSS"],
  },
  {
    id: "lawbuddy",
    title: "LAWBUDDY",
    category: "AI Legal Assistant",
    year: "2026",
    description: "An AI legal assistant grounded strictly in the 1995 Ugandan Constitution, with chat and side-by-side article comparison.",
    liveUrl: "https://uglawbuddy.vercel.app",
    badge: "CONSTITUTIONAL AI",
    accentColor: "#0F6B3C",
    metrics: "1995 Constitution Vector Grounding",
    techStack: ["Agentic AI", "Vector Search", "Next.js"],
  },
  {
    id: "gemyte",
    title: "Gemyte",
    category: "AI Learning Platform",
    year: "2026",
    description: "An AI-driven 3D learning engine — upload a syllabus, generate 'Knowledge Orbs,' and work through STEM material as gamified cognitive challenges, powered by Gemini 2.5.",
    liveUrl: "https://gemyte.vercel.app",
    badge: "3D LEARNING ENGINE",
    accentColor: "#0F6B3C",
    metrics: "Gemini 2.5 STEM Engine",
    techStack: ["Gemini 2.5", "WebGL", "Gamification"],
  },
];

export default function WorkGrid() {
  return (
    <section id="work" className="py-24 border-b border-[#0000000d]">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="eyebrow">SELECTED WORK</span>
              <span className="text-gray-300">|</span>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-xs font-bold text-[#0F6B3C]">01 / 03</span>
                <div className="flex items-center gap-1 ml-2">
                  <button className="w-7 h-7 rounded-full border border-[#0000001a] bg-white flex items-center justify-center text-[#6B7280] hover:text-[#111827]">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button className="w-7 h-7 rounded-full bg-[#0F6B3C] text-white flex items-center justify-center">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#111827] tracking-tight">
              What we&apos;ve shipped recently.
            </h2>
            <p className="text-[#4B5563] text-base">
              A clean look at the product systems we have designed, engineered, and launched recently to unlock business growth.
            </p>
          </div>

          <Link
            href="/projects"
            className="btn-secondary group whitespace-nowrap"
          >
            <span>View all projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <WorkCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
