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
  inDevelopment?: boolean;
}

interface WorkCardProps {
  project: ProjectData;
  index: number;
}

export default function WorkCard({ project, index }: WorkCardProps) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <div className="group card-light p-6 sm:p-8 flex flex-col justify-between hover:border-[#0F6B3C]/50 transition-all duration-300">
      {/* Top Meta Bar */}
      <div>
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-[#0F6B3C]">{formattedIndex}</span>
            <span className="badge-tag">{project.category}</span>
          </div>
          <span className="font-mono text-xs text-[#6B7280]">{project.year}</span>
        </div>

        {/* Visual Preview Banner */}
        <div className="relative h-44 mb-6 rounded-xl bg-[#f7f7f7] border border-[#0000000d] p-5 flex flex-col justify-between group-hover:border-[#0F6B3C]/30 transition-colors overflow-hidden">
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-[11px] font-bold text-[#0F6B3C] uppercase tracking-wider">
              {project.badge}
            </span>
            {project.inDevelopment ? (
              <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono text-[10px] font-bold">
                IN DEVELOPMENT
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded bg-[#E4F3EA] text-[#0F6B3C] font-mono text-[10px] font-bold">
                LIVE PRODUCT
              </span>
            )}
          </div>

          <div className="space-y-1">
            <h4 className="text-xl font-bold text-[#111827] group-hover:text-[#0F6B3C] transition-colors flex items-center gap-2">
              {project.title}
              <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#0F6B3C]" />
            </h4>
            {project.metrics && (
              <p className="text-xs text-[#4B5563] font-mono">{project.metrics}</p>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      {/* Bottom Visit Link */}
      <div className="pt-4 border-t border-[#0000000d] flex items-center justify-between">
        <span className="text-xs text-[#6B7280] font-mono">
          {project.inDevelopment ? "RENOA Pipeline" : project.liveUrl.replace("https://", "")}
        </span>

        {!project.inDevelopment ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0F6B3C] hover:text-[#0B5230] transition-colors"
          >
            <span>Visit</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="text-xs font-mono font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
            COMING SOON
          </span>
        )}
      </div>
    </div>
  );
}
