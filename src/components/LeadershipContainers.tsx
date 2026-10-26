"use client";

import React from "react";

export interface LeadershipSlot {
  id: string | number;
  name: string;
  role: string;
  image?: string;
  linkedin?: string;
}

interface LeadershipContainersProps {
  className?: string;
  slots?: LeadershipSlot[];
}

// 6 Leadership members in chronological order
export const LEADERSHIP_MEMBERS: LeadershipSlot[] = [
  {
    id: 1,
    name: "Rwothomio Evans .E.",
    role: "CEO and Systems Analyst and Architect",
    linkedin: "https://www.linkedin.com/in/rwothomio-evans-e-7948ab398",
    image: "/team/rwothomio.png",
  },
  {
    id: 2,
    name: "Natozo Martha Patience",
    role: "COO and Developer",
    linkedin: "https://www.linkedin.com/in/martha-natozo-bba5ab395/",
    image: "/team/natozo.png",
  },
  {
    id: 3,
    name: "Niwasiima Ashelycole",
    role: "CTO and Senior Developer and Designer",
    linkedin: "https://www.linkedin.com/in/niwasiima-ashelycole-091698390/",
    image: "/team/niwasiima.jpg",
  },
  {
    id: 4,
    name: "Egabo Aaron",
    role: "Products Manager, Senior Analyst and Developer",
    linkedin: "https://www.linkedin.com/in/egaboaaron/",
    image: "/team/egabo.jpg",
  },
  {
    id: 5,
    name: "Onyango John Steven",
    role: "Sales And Marketing Manager, UI UX design",
    linkedin: "https://www.linkedin.com/in/john-steven-onyango-9794a1376/",
    image: "/team/onyango.jpg",
  },
  {
    id: 6,
    name: "Alimpa Ann Hillary",
    role: "Finance Manager",
    linkedin: "https://www.linkedin.com/in/alimpa-hillary-9ab7b53b8/",
    image: "/team/alimpa.jpg",
  },
];

// LinkedIn Icon SVG
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function LeadershipContainers({
  className = "",
  slots = LEADERSHIP_MEMBERS,
}: LeadershipContainersProps) {
  const renderCard = (slot: LeadershipSlot, index: number) => {
    return (
      <div
        key={slot.id || index}
        className="group relative flex flex-col items-center w-full max-w-[270px] sm:max-w-[290px] transition-all duration-200 hover:-translate-y-1"
      >
        {/* Photo Container Frame */}
        <div
          className="relative w-full bg-slate-100 rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 transition-shadow duration-200 group-hover:shadow-md"
          style={{ aspectRatio: "4 / 5", minHeight: "330px" }}
        >
          {slot.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={slot.image}
              alt={slot.name}
              className="absolute inset-0 w-full h-full object-cover object-[center_18%] transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center text-center select-none p-4">
              <div className="w-12 h-12 rounded-full border border-dashed border-slate-300 flex items-center justify-center text-slate-400 mb-2">
                <svg
                  className="w-6 h-6 fill-none stroke-current"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-slate-400">
                Photo Slot
              </span>
            </div>
          )}
        </div>

        {/* Name & Role details below photo */}
        <div className="mt-4 flex flex-col items-center text-center w-full px-1">
          <h4 className="text-[15px] sm:text-[16px] font-bold text-slate-900 tracking-tight leading-snug">
            {slot.name}
          </h4>
          <p className="mt-1 text-[11px] font-semibold text-[var(--accent)] font-mono uppercase tracking-wider line-clamp-2 max-w-[260px]">
            {slot.role}
          </p>
        </div>

        {/* LinkedIn + Email buttons */}
        <div className="mt-3.5 flex items-center gap-2 w-full justify-center px-2">
          {slot.linkedin && (
            <a
              href={slot.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${slot.name} on LinkedIn`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-[11.5px] font-medium tracking-wide transition-all duration-150 hover:opacity-90 hover:shadow-xs"
              style={{ backgroundColor: "#0A66C2" }}
            >
              <LinkedInIcon className="w-3.5 h-3.5 fill-current" />
              <span>LinkedIn</span>
            </a>
          )}
          <a
            href="mailto:renoacollective@gmail.com"
            aria-label={`Message ${slot.name}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 bg-white text-slate-700 text-[11.5px] font-medium tracking-wide transition-all duration-150 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:shadow-xs"
          >
            <svg
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>Message</span>
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className={`w-full py-12 ${className}`}>
      {/* 6 Containers structured in 2 balanced rows of 3 on desktop, 2 cols on tablet, 1 col on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-8 sm:gap-x-10 lg:gap-x-14 justify-items-center max-w-5xl mx-auto px-4">
        {slots.map((slot, idx) => renderCard(slot, idx))}
      </div>
    </div>
  );
}
