"use client";

import Link from "next/link";
import WorkCard, { ProjectData } from "./WorkCard";
import { ArrowRight } from "lucide-react";

export const FEATURED_PROJECTS: ProjectData[] = [
  {
    id: "driveug",
    title: "DriveUG",
    category: "Mobility / Web3-ready Platform",
    year: "2026",
    description: "Peer-to-peer car rental platform for Uganda with Mobile Money booking and owner dashboards.",
    liveUrl: "https://driveug.vercel.app",
    badge: "MOBILE MONEY & FLEET ENGINE",
    accentColor: "#1D9E75",
    metrics: "Uganda P2P Fleet Platform",
    techStack: ["Next.js 14", "Mobile Money API", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "lawbuddy",
    title: "LAWBUDDY",
    category: "Agentic AI",
    year: "2026",
    description: "An AI legal assistant grounded strictly in the 1995 Ugandan Constitution, with chat and side-by-side article comparison.",
    liveUrl: "https://uglawbuddy.vercel.app",
    badge: "UGANDAN CONSTITUTION AI",
    accentColor: "#4F7CFF",
    metrics: "Constitutional LLM Grounding",
    techStack: ["Agentic AI", "Vector RAG", "Next.js", "1995 Constitution"],
  },
  {
    id: "gemyte",
    title: "Gemyte",
    category: "Gamified Systems / Agentic AI",
    year: "2026",
    description: "An AI-driven 3D learning engine — upload a syllabus, generate 'Knowledge Orbs,' and work through STEM material as gamified cognitive challenges, powered by Gemini 2.5.",
    liveUrl: "https://gemyte.vercel.app",
    badge: "3D COGNITIVE GAMIFICATION",
    accentColor: "#8A5CF5",
    metrics: "Gemini 2.5 STEM Engine",
    techStack: ["Gemini 2.5", "Three.js / WebGL", "Gamified Systems", "TypeScript"],
  },
];

export default function WorkGrid() {
  return (
    <section id="work" className="py-24 border-b border-[#1C2A3A]">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="number-motif">01 / 03</span>
              <span className="text-xs uppercase font-semibold text-[#4F7CFF] tracking-wider">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What we&apos;ve shipped recently.
            </h2>
            <p className="text-[#9AA5B1] text-base max-w-xl">
              A clean look at the product systems we have designed, engineered, and launched recently to unlock business growth.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#4F7CFF] hover:text-white transition-colors group"
          >
            <span>View all projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3-Card Grid (Afro Labs Structural Pattern) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <WorkCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
