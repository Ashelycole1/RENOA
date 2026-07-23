"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  liveUrl: string;
  badge: string;
}

export const FEATURED_PROJECTS: ProjectData[] = [
  {
    id: "driveug",
    title: "DriveUG",
    category: "Mobility Platform",
    year: "2026",
    description: "Peer-to-peer car rental platform for Uganda with Mobile Money booking and owner dashboards.",
    liveUrl: "https://driveug.vercel.app",
    badge: "MOBILITY PLATFORM",
  },
  {
    id: "lawbuddy",
    title: "LAWBUDDY",
    category: "AI Legal Assistant",
    year: "2026",
    description: "An AI legal assistant grounded strictly in the 1995 Ugandan Constitution, with chat and side-by-side article comparison.",
    liveUrl: "https://uglawbuddy.vercel.app",
    badge: "CONSTITUTIONAL AI",
  },
  {
    id: "gemyte",
    title: "Gemyte",
    category: "AI Learning Platform",
    year: "2026",
    description: "An AI-driven 3D learning engine — upload a syllabus, generate Knowledge Orbs, and work through STEM material as gamified cognitive challenges.",
    liveUrl: "https://gemyte.vercel.app",
    badge: "3D LEARNING ENGINE",
  },
];

function ProjectCard({ project, delay }: { project: ProjectData; delay: number }) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className="group overflow-hidden rounded bg-white border border-[#0000000d] transition-colors hover:border-[var(--accent)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block h-full flex flex-col">
        {/* Preview image area */}
        <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#0000000d] bg-[#f7f7f7] p-4 md:p-8">
          <div className="relative w-full h-full flex items-center justify-center text-[#e5e5e5]">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.67 18.95L7.6 15.64C8.39 15.11 9.53 15.17 10.24 15.78L10.57 16.07C11.35 16.74 12.61 16.74 13.39 16.07L17.55 12.5C18.33 11.83 19.59 11.83 20.37 12.5L22 13.9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Card content */}
        <div className="p-6 flex flex-col flex-grow">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              {project.category}
            </span>
            <span className="text-[12px] font-mono text-[#a3a3a3] group-hover:text-[#111] transition-colors">
              {project.year}
            </span>
          </div>

          <h3
            className="text-[24px] leading-[1.1] tracking-[-0.03em] text-[#111] mb-3"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
          >
            {project.title}
          </h3>

          <p className="min-h-[68px] text-[14px] leading-[1.65] text-[#525252] flex-grow">
            {project.description}
          </p>

          {/* Footer row */}
          <div className="mt-auto flex items-center justify-between pt-5 border-t border-[#0000000d]">
            <div className="flex items-center gap-2 text-[13px] font-medium text-[#111] transition-colors group-hover:text-[var(--accent)]">
              Visit
              <svg className="ml-2 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" />
              </svg>
            </div>
            <div className="flex items-center justify-center h-8 w-8 border border-[#0000001a] bg-white transition-all group-hover:bg-[var(--accent)] group-hover:border-[var(--accent)] group-hover:text-white text-[#111]">
              <svg
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rotate-[-45deg]"
                xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
              >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
}

export default function WorkGrid() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeaderVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="work" className="bg-[var(--bg)] px-4 py-20 md:py-32">
      <div className="mx-auto max-w-[1080px]">

        {/* Header — centered, matching Afro Labs exactly */}
        <div
          ref={headerRef}
          className="mb-12 flex flex-col items-center text-center"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
              Selected Work
            </span>
            <div className="h-[1px] w-8 bg-[var(--accent)]" />
          </div>

          <h2
            className="text-[36px] leading-[1.05] tracking-[-0.04em] text-[#111] md:text-[56px]"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
          >
            What we&apos;ve shipped recently.
          </h2>

          <p className="mt-5 max-w-[600px] text-[15px] leading-[1.7] text-[#525252]">
            A clean look at the product systems we have designed, engineered, and launched recently to unlock business growth.
          </p>

          <div className="mt-8">
            <Link
              href="/projects"
              className="inline-flex min-h-[44px] w-fit items-center gap-2 border border-[#0000001a] bg-transparent px-6 text-[14px] font-medium text-[#111] transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
              style={{ borderRadius: "var(--radius-md)" }}
            >
              View all projects
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURED_PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
