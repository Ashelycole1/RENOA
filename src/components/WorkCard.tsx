"use client";


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
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className="card p-6 flex flex-col gap-5 group hover:border-[#0F6B3C]/40 transition-all">
      {/* Meta */}
      <div className="flex items-center justify-between">
        <span className="label text-[#0F6B3C]">{num}</span>
        <div className="flex items-center gap-2">
          {project.inDevelopment ? (
            <span className="tag bg-amber-50 text-amber-700 border-amber-200">In dev</span>
          ) : (
            <span className="tag bg-[#E6F2EC] text-[#0F6B3C] border-[#0F6B3C]/20">Live</span>
          )}
          <span className="tag">{project.year}</span>
        </div>
      </div>

      {/* Preview block */}
      <div className="h-36 bg-[#fafafa] border border-[#e5e5e5] rounded-lg flex items-end p-4 group-hover:border-[#0F6B3C]/30 transition-colors overflow-hidden relative">
        <div className="absolute top-3 right-3">
          <span className="label text-[9px]">{project.badge}</span>
        </div>
        <div>
          <h3 className="text-xl font-bold text-[#0a0a0a] flex items-center gap-1.5 group-hover:text-[#0F6B3C] transition-colors">
            {project.title}
            <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </h3>
          {project.metrics && (
            <p className="text-xs text-[#a3a3a3] font-mono mt-0.5">{project.metrics}</p>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-[#525252] leading-relaxed flex-1">
        {project.description}
      </p>

      {/* Footer */}
      <div className="pt-4 border-t border-[#e5e5e5] flex items-center justify-between">
        <span className="text-xs font-mono text-[#a3a3a3]">
          {project.liveUrl.replace("https://", "")}
        </span>
        {!project.inDevelopment ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F6B3C] hover:text-[#0B5230] transition-colors"
          >
            Visit <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        ) : (
          <span className="text-xs font-mono text-amber-600">Coming soon</span>
        )}
      </div>
    </div>
  );
}
