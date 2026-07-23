"use client";

import { useState } from "react";
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
    techStack: ["Next.js", "Mobile Money", "Tailwind CSS"],
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
    metrics: "1995 Constitution Grounding",
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
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? FEATURED_PROJECTS.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === FEATURED_PROJECTS.length - 1 ? 0 : i + 1));

  return (
    <section id="work" className="py-24 border-t border-[#e5e5e5]">
      <div className="wrapper">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-3">
              <span className="label">SELECTED WORK</span>
              <span className="text-[#e5e5e5]">|</span>
              <div className="flex items-center gap-1.5 font-mono text-xs font-bold text-[#0F6B3C]">
                <span>01 / 03</span>
                <div className="flex items-center gap-1 ml-1">
                  <button
                    onClick={prev}
                    className="w-6 h-6 rounded-full border border-[#e5e5e5] bg-white flex items-center justify-center text-[#525252] hover:border-[#0F6B3C] hover:text-[#0F6B3C] transition-colors"
                    aria-label="Previous Project"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={next}
                    className="w-6 h-6 rounded-full bg-[#0F6B3C] text-white flex items-center justify-center hover:bg-[#0B5230] transition-colors"
                    aria-label="Next Project"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            <h2 className="text-4xl font-bold text-[#0a0a0a] tracking-tight">
              What we&apos;ve shipped recently.
            </h2>
            <p className="text-[#525252] text-base leading-relaxed">
              A clean look at the product systems we have designed, engineered, and launched recently to unlock business growth.
            </p>
          </div>

          <Link
            href="/projects"
            className="btn btn-outline self-start md:self-auto shrink-0"
          >
            View all projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((project, i) => (
            <WorkCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
