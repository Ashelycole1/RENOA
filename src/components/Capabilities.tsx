"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CAPABILITIES = [
  {
    title: "Product Design",
    slug: "product-design",
    desc: "Discovery workshops, user journey mapping, design systems, and clickable prototypes shaped around business outcomes.",
    deliverables: ["User research & workflows", "Interactive Figma prototypes", "Design tokens & UI specs"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Platform Development",
    slug: "platform-development",
    desc: "Production web applications, SaaS platforms, high-throughput APIs, and databases built with Next.js and PostgreSQL.",
    deliverables: ["Full-stack Next.js apps", "Relational PostgreSQL schemas", "CI/CD cloud deployment"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12H2M12 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.0711 4.92896L4.92896 19.0711M19.0711 19.0711L4.92896 4.92896" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "AI & Automation",
    slug: "ai-automation",
    desc: "Constitutional RAG systems, localized domain intelligence, multi-agent workflows, and enterprise LLM integrations.",
    deliverables: ["Private RAG over documents", "Strict citation guardrails", "Workflow task automation"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.92896 4.92896L19.0711 19.0711" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.92896 19.0711L19.0711 4.92896" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Mobile Money & Payments",
    slug: "mobile-money-integrations",
    desc: "Direct MTN MoMo and Airtel Money Open API integrations, automated USSD push prompts, and vendor payouts across East Africa.",
    deliverables: ["MTN MoMo & Airtel Open APIs", "Idempotent webhooks", "Automated wallet disbursements"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Brand Identity & 3D",
    slug: "brand-identity",
    desc: "Authoritative brand systems, logo marks, 3D isometric architectural visuals, and production design guidelines.",
    deliverables: ["Logo & favicon suites", "3D isometric assets", "CSS variable token systems"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
      className="group flex flex-col justify-between rounded-2xl bg-white border border-[#0000000d] p-7 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-md"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      <div>
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF2FF] text-[var(--accent)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
          {item.icon}
        </div>

        <h3 className="mb-3 text-[20px] font-bold tracking-tight text-[#111] group-hover:text-[var(--accent)] transition-colors">
          <Link href={`/services/${item.slug}`}>
            {item.title}
          </Link>
        </h3>

        <p className="mb-6 text-[14px] leading-[1.65] text-[var(--text-secondary)]">
          {item.desc}
        </p>

        {/* Deliverables bullet list */}
        <div className="space-y-2 border-t border-[#00000008] pt-4 mb-6">
          <p className="text-[11px] font-mono uppercase tracking-wider text-[#9ca3af] font-semibold">Key Deliverables:</p>
          <ul className="space-y-1.5 text-xs text-[#4b5563]">
            {item.deliverables.map((d) => (
              <li key={d} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        href={`/services/${item.slug}`}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent)] hover:underline pt-2"
      >
        Explore {item.title} service
        <svg className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
      </Link>
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
    <section id="services" className="bg-[var(--bg)] px-4 py-20 md:py-32">
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
              Core Capabilities
            </span>
            <div className="h-[1px] w-8 bg-[var(--accent)]" />
          </div>

          <h2
            className="text-[34px] leading-[1.1] tracking-[-0.04em] text-[#111] md:text-[52px]"
            style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
          >
            How we partner with your business.
          </h2>

          <p className="mt-4 max-w-[580px] text-[15px] leading-[1.7] text-[var(--text-secondary)]">
            A cohesive squad covering the entire product lifecycle — from UX validation to cloud infrastructure and localized Mobile Money rails.
          </p>

          <div className="mt-7">
            <Link
              href="/services"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#00000015] bg-white px-6 text-[14px] font-medium text-[#111] shadow-xs transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
            >
              View all services & engagement models →
            </Link>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((item, i) => (
            <CapabilityCard key={item.slug} item={item} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
