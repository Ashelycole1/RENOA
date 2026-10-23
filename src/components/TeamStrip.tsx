"use client";

import Link from "next/link";
import { TEAM_MEMBERS } from "@/data/team";

export default function TeamStrip() {
  return (
    <section className="py-24 border-t border-[#0000000d] bg-[#fafafa]">
      <div className="wrapper max-w-[1160px]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="label">Leadership & Engineering</span>
            <h2 className="text-3xl font-bold text-[#0a0a0a] tracking-tight">
              Engineered by co-founders in Kampala.
            </h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-lg">
              Senior attention on every build. You work directly with the architects, designers, and operators shipping your product.
            </p>
          </div>
          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--accent)] hover:underline"
          >
            OUR STORY & VALUES →
          </Link>
        </div>

        {/* Team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TEAM_MEMBERS.map((m) => (
            <div
              key={m.name}
              className="card p-6 space-y-4 hover:border-[var(--accent)]/40 hover:shadow-sm group transition-all duration-200 bg-white"
            >
              <div className="flex items-start justify-between">
                {/* Styled Avatar Circle */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-base text-white shadow-xs"
                  style={{ backgroundColor: m.avatarColor }}
                >
                  {m.initials}
                </div>

                {m.linkedIn && (
                  <a
                    href={m.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on LinkedIn`}
                    className="p-1.5 text-[#9ca3af] hover:text-[#0A66C2] rounded-md hover:bg-[#f3f4f6] transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}
              </div>

              <div>
                <h4 className="text-base font-bold text-[#111] group-hover:text-[var(--accent)] transition-colors">
                  {m.name}
                </h4>
                <p className="text-xs font-mono font-medium text-[var(--accent)] mb-2">
                  {m.role}
                </p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {m.bio}
                </p>
              </div>

              <div className="pt-2 border-t border-[#f0f0f0] text-[11px] font-mono text-[#9ca3af]">
                {m.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
