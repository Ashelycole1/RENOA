"use client";

import { ExternalLink, ArrowUpRight } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  liveUrl: string;
  badge: string;
  accentColor: string;
  metrics?: string;
  techStack?: string[];
}

interface WorkCardProps {
  project: ProjectData;
  index: number;
}

export default function WorkCard({ project, index }: WorkCardProps) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <div className="group relative bg-[#0F1B29] border border-[#1C2A3A] hover:border-[#4F7CFF]/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:bg-[#142436] hover:-translate-y-1 shadow-lg">
      {/* Top Meta Bar */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="number-motif">{formattedIndex}</span>
            <span className="badge-tag">{project.category}</span>
          </div>
          <span className="font-mono text-xs text-[#627284]">{project.year}</span>
        </div>

        {/* Project Card Visual Preview Banner */}
        <div className="relative h-44 mb-6 rounded-xl bg-[#071019] border border-[#1C2A3A] p-5 overflow-hidden flex flex-col justify-between group-hover:border-[#4F7CFF]/30 transition-colors">
          {/* Subtle Ambient Gradient */}
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
            style={{ backgroundColor: project.accentColor }}
          />

          <div className="flex items-center justify-between text-xs text-[#9AA5B1]">
            <span className="font-mono text-[11px] text-[#4F7CFF] uppercase font-semibold tracking-wider">
              {project.badge}
            </span>
            <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-white">
              LIVE DEPLOYMENT
            </span>
          </div>

          <div className="space-y-1">
            <h4 className="text-xl font-bold text-white group-hover:text-[#4F7CFF] transition-colors flex items-center gap-2">
              {project.title}
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#4F7CFF]" />
            </h4>
            {project.metrics && (
              <p className="text-xs text-[#00F0FF] font-mono">{project.metrics}</p>
            )}
          </div>
        </div>

        {/* Project Description */}
        <p className="text-sm text-[#9AA5B1] leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        {project.techStack && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-[11px] font-mono text-[#9AA5B1] bg-[#071019] border border-[#1C2A3A] rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Visit Link */}
      <div className="pt-4 border-t border-[#1C2A3A]/70 flex items-center justify-between">
        <span className="text-xs text-[#627284] font-mono">
          {project.liveUrl.replace("https://", "")}
        </span>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4F7CFF] group-hover:text-white transition-colors"
        >
          <span>Visit Product</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
