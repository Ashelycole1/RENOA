"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ALL_PROJECTS, Project } from "@/data/projects";

function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
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

  const num = String(index + 1).padStart(2, "0");

  return (
    <article
      ref={ref}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-[#0000000d] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${index * 90}ms, transform 0.5s ease ${index * 90}ms`,
      }}
    >
      <div>
        {/* Meta row */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[var(--accent)]">{num}</span>
            <span className="h-3 w-px bg-[#00000015]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text-secondary)] font-mono">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {project.status === "Live" ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-[#EAF2FF] px-2.5 py-0.5 text-[11px] font-medium text-[var(--accent)] border border-[#2563EB]/15 font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                Live
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-medium text-amber-700 border border-amber-200 font-mono">
                In dev
              </span>
            )}
            <span className="font-mono text-xs text-[var(--text-muted)]">{project.year}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-[22px] font-semibold tracking-[-0.03em] text-[#111] transition-colors group-hover:text-[var(--accent)]">
          <Link href={`/work/${project.slug}`}>
            {project.title}
          </Link>
        </h3>

        {/* Metrics Chip */}
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-md bg-[#f6f7f9] px-2.5 py-1 text-xs font-mono text-[#4b5563]">
          <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
          {project.metrics}
        </div>

        {/* Description */}
        <p className="text-[14px] leading-[1.65] text-[var(--text-secondary)]">
          {project.tagline}
        </p>
      </div>

      {/* Footer Links */}
      <div className="mt-8 flex items-center justify-between border-t border-[#0000000d] pt-4 text-xs font-medium">
        <Link
          href={`/work/${project.slug}`}
          className="inline-flex items-center gap-1 text-[var(--accent)] transition-colors hover:underline"
        >
          Case study
          <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </Link>

        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[#6b7280] transition-colors hover:text-[#111]"
          >
            Visit live
            <svg className="h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
        ) : (
          <span className="font-mono text-[#9ca3af]">Coming soon</span>
        )}
      </div>
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

  const featured = ALL_PROJECTS.slice(0, 3);

  return (
    <section id="work" className="bg-[var(--bg)] px-4 py-20 md:py-32">
      <div className="mx-auto max-w-[1160px]">
        {/* Header */}
        <div
          ref={headerRef}
          className="mb-14 flex flex-col items-center text-center"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent)] font-mono">
              Selected Work (01 / 03)
            </span>
            <div className="h-[1px] w-8 bg-[var(--accent)]" />
          </div>

          <h2
            className="text-[34px] leading-[1.1] tracking-[-0.04em] text-[#111] md:text-[52px]"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
          >
            What we&apos;ve shipped recently.
          </h2>

          <p className="mt-4 max-w-[580px] text-[15px] leading-[1.7] text-[var(--text-secondary)]">
            Real products deployed in production across East Africa — from peer-to-peer mobility with Mobile Money to constitutional legal AI.
          </p>

          <div className="mt-7">
            <Link
              href="/work"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#00000015] bg-white px-6 text-[14px] font-medium text-[#111] shadow-xs transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30"
            >
              View all 5 projects
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featured.map((project, i) => (
            <FeaturedProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
