"use client";

import { useEffect, useRef, useState } from "react";

const CAPABILITIES = [
  {
    title: "Product Design",
    desc: "User journeys, interface systems, prototypes, and product decisions shaped around what the business needs to prove.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Brand Identity",
    desc: "Logos, visual language, typography, colors, and brand rules that make the product feel credible from day one.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Platform Development",
    desc: "Production web apps, SaaS platforms, commerce systems, APIs, databases, and internal tools built for real use.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12H2M12 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.0711 4.92896L4.92896 19.0711M19.0711 19.0711L4.92896 4.92896" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "AI and Automation",
    desc: "LLM features, workflow automation, routing logic, cloud tasks, and operational systems that remove manual work.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.92896 4.92896L19.0711 19.0711" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.92896 19.0711L19.0711 4.92896" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

function CapabilityCard({ item, delay }: { item: typeof CAPABILITIES[0], delay: number }) {
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
      className="group relative overflow-hidden rounded bg-[var(--surface)] p-8 md:p-12 border border-[var(--border)] transition-colors hover:border-[var(--accent)]"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      {/* Background illustration on hover - Afro Labs exact styling */}
      <div className="absolute -bottom-8 -right-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none group-hover:scale-105 transform origin-bottom-right ease-out">
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="120" cy="120" r="118" stroke="currentColor" strokeWidth="4" />
          <circle cx="120" cy="120" r="80" stroke="currentColor" strokeWidth="4" />
          <circle cx="120" cy="120" r="42" stroke="currentColor" strokeWidth="4" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-start md:gap-6">
        <div className="mb-6 md:mb-0 flex-shrink-0">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent)] text-[var(--bg)] shadow-[0_4px_14px_var(--btn-glow)] group-hover:scale-110 transition-transform duration-500 ease-out"
            style={{ boxShadow: "0 4px 14px var(--accent-deep)" }}
          >
            {item.icon}
          </div>
        </div>

        <div className="flex flex-col h-full flex-grow">
          <h3
            className="text-[28px] md:text-[32px] tracking-[-0.02em] text-[var(--text-primary)] mb-4"
            style={{ fontWeight: 400 }}
          >
            {item.title}
          </h3>
          <p className="text-[15px] leading-[1.6] text-[var(--text-secondary)] max-w-[400px]">
            {item.desc}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function Capabilities() {
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
    <section id="services-capabilities" className="bg-[var(--bg)] px-4 py-20 md:py-32">
      <div className="mx-auto max-w-[1080px]">
        {/* Exact Afro Labs split grid structure: left sticky header, right cards */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.4fr_0.6fr]">
          
          {/* Left Sticky Header */}
          <div
            ref={headerRef}
            className="flex flex-col items-start lg:sticky lg:top-32 lg:self-start"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
            }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                Capabilities
              </span>
              <div className="h-[1px] w-8 bg-[var(--accent)]" />
            </div>

            <h2
              className="text-[36px] leading-[1.05] tracking-[-0.04em] text-[var(--text-primary)] md:text-[56px]"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
            >
              Built for every <br className="hidden lg:block" /> product need.
            </h2>

            <p className="mt-6 max-w-[400px] text-[15px] leading-[1.75] text-[var(--text-secondary)]">
              Composable by design, our team adapts to the unique challenges of your project. Simplify operational complexity with fast, flexible solutions built for ROI at scale.
            </p>

            {/* Graphic / Image area */}
            <div className="mt-10 w-full max-w-[420px] rounded-md border border-[var(--border)] bg-[#f7f7f7] aspect-square flex flex-col items-center justify-center p-8 text-[var(--text-muted)]">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
              <span className="mt-4 text-xs font-mono">Platform Ecosystem</span>
            </div>
          </div>

          {/* Right Cards Stack */}
          <div className="flex flex-col gap-6">
            {CAPABILITIES.map((item, i) => (
              <CapabilityCard key={item.title} item={item} delay={i * 100} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
