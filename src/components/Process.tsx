"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    num: "01",
    title: "Consultation",
    desc: "We sit down with your team to learn your daily business operations, identify your main problems, and discover exactly what you need.",
    output: "Problem Analysis",
    // Afro Labs uses people/user icon for step 1
    iconPath: (
      <>
        <path opacity=".4" d="M9 2C6.38 2 4.25 4.13 4.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 0 0 4.58-4.74C13.75 4.13 11.62 2 9 2Z" fill="currentColor"/>
        <path d="M14.08 14.149c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21c1.4.94 3.24 1.41 5.08 1.41 1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21Z" fill="currentColor"/>
        <path opacity=".4" d="M19.99 7.338c.16 1.94-1.22 3.64-3.13 3.87h-.05c-.06 0-.12 0-.17.02-.97.05-1.86-.26-2.53-.83 1.03-.92 1.62-2.3 1.5-3.8a4.64 4.64 0 0 0-.77-2.18 3.592 3.592 0 0 1 5.15 2.92Z" fill="currentColor"/>
        <path d="M21.988 16.59c-.08.97-.7 1.81-1.74 2.38-1 .55-2.26.81-3.51.78.72-.65 1.14-1.46 1.22-2.32.1-1.24-.49-2.43-1.67-3.38-.67-.53-1.45-.95-2.3-1.26 2.21-.64 4.99-.21 6.7 1.17.92.74 1.39 1.67 1.3 2.63Z" fill="currentColor"/>
      </>
    ),
  },
  {
    num: "02",
    title: "Strategy",
    desc: "We check what is technically possible, study the risks, and create a clear Product Requirement Document (PRD) and system blueprint.",
    output: "Project Roadmap & PRD",
    iconPath: (
      <>
        <path opacity=".4" d="M21 2v12.1c0 1.9-1 2.9-2.9 2.9H5.9C4 17 3 16 3 14.1V2h18Z" fill="currentColor"/>
        <path d="M22 2.75H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75ZM16.67 22.34c-.13.26-.4.41-.67.41-.11 0-.23-.03-.33-.08L12 20.84l-3.67 1.83c-.1.05-.22.08-.33.08-.27 0-.54-.15-.67-.41a.74.74 0 0 1 .34-1.01l3.58-1.79V17h1.5v2.54l3.58 1.79c.38.18.53.63.34 1.01ZM7.5 11.75a.75.75 0 0 1-.48-1.33l3.15-2.63c.29-.24.66-.34 1.01-.28.36.06.67.28.86.6l1.05 1.75 2.93-2.44a.75.75 0 0 1 1.06.1c.27.32.22.79-.1 1.06l-3.15 2.63c-.29.24-.66.34-1.01.28-.36-.06-.67-.28-.86-.6l-1.05-1.75-2.93 2.44c-.14.11-.31.17-.48.17Z" fill="currentColor"/>
      </>
    ),
  },
  {
    num: "03",
    title: "Development",
    desc: "Our team writes clean, secure code and connects all necessary systems. We test everything thoroughly to make sure it works perfectly.",
    output: "Working Software",
    iconPath: (
      <>
        <path opacity=".4" d="M22 15V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7h6c5 0 7-2 7-7Z" fill="currentColor"/>
        <path d="M13.26 15.53 10.74 8.47c-.19-.53-.72-.72-1.16-.42l-3.08 2.05c-.36.24-.47.73-.23 1.09.24.36.73.47 1.09.23l2.14-1.43 2.15 6.04c.19.53.72.72 1.16.42l3.08-2.05c.36-.24.47-.73.23-1.09-.24-.36-.73-.47-1.09-.23l-2.77 1.45Z" fill="currentColor"/>
      </>
    ),
  },
  {
    num: "04",
    title: "Maintenance",
    desc: "We don't just deliver and leave. We manage the system, fix issues, and continuously improve the software as your business grows.",
    output: "Long-Term Support",
    iconPath: (
      <>
        <path opacity=".4" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z" fill="currentColor"/>
        <path d="M12 8v4l2.5 2.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.5 3.5 3 9M15.5 3.5 21 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeOpacity=".6"/>
      </>
    ),
  },
];

function ProcessStep({ step, delay }: { step: typeof STEPS[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col p-8 md:p-10 transition-colors hover:bg-[#f7f7f7] overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      {/* Accent top line on hover */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-transparent group-hover:bg-[var(--accent)] transition-colors duration-300" />

      {/* Step number + icon badge */}
      <div className="mb-12 flex items-center justify-between relative z-10">
        <span className="text-[14px] font-mono tracking-widest text-[var(--accent)]">
          {step.num[0]} {step.num[1]}
        </span>
        {/* Gradient icon badge — exact Afro Labs style */}
        <div
          className="relative flex h-12 w-12 items-center justify-center text-white transition-transform duration-300 group-hover:-translate-y-1"
          style={{
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--accent-hover)",
            background: "linear-gradient(145deg, var(--accent-hover), var(--accent) 58%, var(--accent-deep))",
            boxShadow: "0 10px 24px var(--btn-glow), inset 0 1px 0 rgba(255,255,255,0.26), inset 0 -10px 18px rgba(0,0,0,0.16)",
          }}
        >
          <svg
            className="relative z-10 drop-shadow-sm"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            {step.iconPath}
          </svg>
        </div>
      </div>

      {/* Title + description */}
      <h3
        className="mb-4 text-[24px] tracking-[-0.02em] text-[#111] relative z-10"
        style={{ fontWeight: 500 }}
      >
        {step.title}
      </h3>
      <p className="mb-12 text-[14px] leading-[1.6] text-[#525252] flex-grow relative z-10">
        {step.desc}
      </p>

      {/* Output */}
      <div className="mt-auto relative z-10">
        <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-[#a3a3a3] mb-1">
          Output
        </span>
        <span className="text-[14px] font-medium text-[#111]">{step.output}</span>
      </div>
    </div>
  );
}

export default function Process() {
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
    <section id="services" className="px-4 py-20 md:py-32">
      <div className="mx-auto max-w-[1200px]">

        {/* Header — 2-col, left H2 / right subline — matching Afro Labs */}
        <div
          ref={headerRef}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <div className="max-w-[600px]">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                The Process
              </span>
              <div className="h-[1px] w-8 bg-[var(--accent)]" />
            </div>
            <h2
              className="text-[36px] leading-[1.05] tracking-[-0.04em] text-[#111] md:text-[56px]"
              style={{ fontFamily: "var(--font-sans)", fontWeight: 400 }}
            >
              How we turn ideas into reality.
            </h2>
          </div>
          <p className="max-w-[400px] text-[15px] leading-[1.65] text-[#525252] pb-2">
            Our process is built around momentum and clarity. Each phase turns uncertainty into a concrete output the next phase can depend on.
          </p>
        </div>

        {/* Steps grid */}
        <div className="relative w-full bg-white shadow-sm border border-[#0000000d]" style={{ borderRadius: "var(--radius-md)" }}>
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#0000000d]">
            {STEPS.map((step, i) => (
              <ProcessStep key={step.num} step={step} delay={i * 80} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
