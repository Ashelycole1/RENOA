"use client";

import React from "react";

export interface LeadershipSlot {
  id: string | number;
  name: string;
  role: string;
  image?: string;
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
  },
  {
    id: 2,
    name: "Natozo Martha Patience",
    role: "COO and Developer",
  },
  {
    id: 3,
    name: "Niwasiima Ashelycole",
    role: "CTO and Senior Developer and Designer",
  },
  {
    id: 4,
    name: "Egabo Aaron",
    role: "Products Manager, Senior Analyst and Developer",
  },
  {
    id: 5,
    name: "Onyango John Steven",
    role: "Sales And Marketing Manager, UI UX design",
  },
  {
    id: 6,
    name: "Alimpa Ann Hillary",
    role: "Finance Manager",
  },
];

export default function LeadershipContainers({
  className = "",
  slots = LEADERSHIP_MEMBERS,
}: LeadershipContainersProps) {
  const renderCard = (slot: LeadershipSlot, index: number) => {
    return (
      <div
        key={slot.id || index}
        className="relative flex flex-col items-center w-full max-w-[260px] sm:max-w-[280px] transition-transform duration-200 hover:-translate-y-1"
      >
        {/* Photo Container Frame with Snippet-style Blue Border */}
        <div className="relative w-full aspect-[4/5] border-2 border-[#1E60D5] bg-white rounded-none flex flex-col justify-between overflow-hidden shadow-sm">
          {/* Upper Image Slot (Empty/Placeholder ready for user's images) */}
          <div className="relative flex-1 w-full flex flex-col items-center justify-center bg-[#f8fafc]/80 p-4">
            {slot.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={slot.image}
                alt={slot.name}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-center select-none">
                <div className="w-12 h-12 rounded-full border border-dashed border-[#1E60D5]/40 flex items-center justify-center text-[#1E60D5]/60 mb-2">
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
                <span className="text-[11px] font-mono font-medium uppercase tracking-wider text-[#64748b]">
                  Photo Slot
                </span>
              </div>
            )}
          </div>

          {/* Name Bar across the bottom of the container */}
          <div className="w-full bg-[#1A4EA8] py-2.5 px-3 text-center border-t border-[#3B82F6] z-10 flex items-center justify-center min-h-[46px]">
            <h4 className="text-sm sm:text-base font-bold text-white tracking-wide leading-tight">
              {slot.name}
            </h4>
          </div>
        </div>

        {/* Role / Designation Tag centered below overlapping bottom */}
        <div className="relative -mt-3.5 z-20 w-full flex justify-center px-2">
          <div className="bg-white border border-[#1E60D5]/30 px-3 py-1.5 shadow-sm text-center max-w-[96%] min-h-[32px] flex items-center justify-center">
            <span className="text-[10px] sm:text-[11px] font-bold text-[#1A4EA8] tracking-wide uppercase font-mono leading-tight">
              {slot.role}
            </span>
          </div>
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
