"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ExternalLink, Sparkles, Cpu, Layers, Gamepad2 } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Six Strands interactive canvas background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener("resize", handleResize);

    // 6 Strands Node System
    const nodes = Array.from({ length: 24 }).map((_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1.5,
      strandGroup: i % 6,
    }));

    const colors = [
      "#4F7CFF", // Agentic Blue
      "#00F0FF", // Cyan
      "#8A5CF5", // Web3 Violet
      "#38BDF8", // Sky
      "#6366F1", // Indigo
      "#A855F7", // Purple
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = colors[nodes[i].strandGroup];
            ctx.globalAlpha = (1 - dist / 140) * 0.25;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      // Draw & Update Nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors[node.strandGroup];
        ctx.shadowColor = colors[node.strandGroup];
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden border-b border-[#1C2A3A]">
      {/* Glow Orbs Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#4F7CFF]/15 to-[#00F0FF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Featured-Demo Chip (Afro Labs Pattern) */}
        <div className="inline-flex items-center gap-2 mb-8">
          <a
            href="https://driveug.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-pill inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs text-[#F5F7FA]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]"></span>
            </span>
            <span className="font-medium text-[#9AA5B1] group-hover:text-white transition-colors">
              FEATURED SHIP: <strong className="text-white font-semibold">DriveUG</strong> — Peer-to-Peer Rental Platform
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-[#4F7CFF] group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              We build systems that{" "}
              <span className="text-accent-gradient">think, own, and play.</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#9AA5B1] max-w-2xl font-normal leading-relaxed">
              Our adaptive team powers agentic AI, Web3 infrastructure, and gamified product experiences for teams building in Kampala and beyond.
            </p>

            {/* Dual CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#4F7CFF] hover:bg-[#3B66E6] text-white font-semibold rounded-xl transition-all shadow-lg shadow-[#4F7CFF]/25 hover:shadow-[#4F7CFF]/40 text-base"
              >
                <span>Book a call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 px-6 py-4 bg-[#0F1B29] hover:bg-[#142436] border border-[#1C2A3A] text-[#F5F7FA] font-semibold rounded-xl transition-colors text-base"
              >
                <span>Learn more</span>
              </a>
            </div>

            {/* Pillar badges row */}
            <div className="pt-8 border-t border-[#1C2A3A]/60 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-xs text-[#9AA5B1]">
                <Cpu className="w-4 h-4 text-[#4F7CFF]" />
                <span>Agentic AI</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#9AA5B1]">
                <Layers className="w-4 h-4 text-[#00F0FF]" />
                <span>Web3 Systems</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#9AA5B1]">
                <Gamepad2 className="w-4 h-4 text-[#8A5CF5]" />
                <span>Gamified UX</span>
              </div>
            </div>
          </div>

          {/* Right Column: Six Strands Animated Canvas Illustration */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[340px] sm:min-h-[400px]">
            <div className="relative w-full h-full rounded-2xl bg-[#0F1B29]/80 border border-[#1C2A3A] p-6 overflow-hidden shadow-2xl">
              <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

              {/* Overlay Interactive Mockup Card */}
              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between border-b border-[#1C2A3A] pb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#4F7CFF]" />
                    <span className="font-mono text-xs text-white font-semibold uppercase tracking-wider">
                      RENOA SIX STRANDS CORE
                    </span>
                  </div>
                  <span className="number-motif">01/06</span>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="p-3 bg-[#071019]/90 border border-[#1C2A3A] rounded-xl flex items-center justify-between text-xs">
                    <span className="text-[#9AA5B1]">Autonomous Agents</span>
                    <span className="text-[#00F0FF] font-mono">ACTIVE (1995 CONSTITUTION)</span>
                  </div>
                  <div className="p-3 bg-[#071019]/90 border border-[#1C2A3A] rounded-xl flex items-center justify-between text-xs">
                    <span className="text-[#9AA5B1]">Mobile Money Payments</span>
                    <span className="text-[#4F7CFF] font-mono">MTN / AIRTEL LIVE</span>
                  </div>
                  <div className="p-3 bg-[#071019]/90 border border-[#1C2A3A] rounded-xl flex items-center justify-between text-xs">
                    <span className="text-[#9AA5B1]">Gamified Cognitive Engine</span>
                    <span className="text-[#8A5CF5] font-mono">GEMINI 2.5 ORBS</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-[#627284]">
                  <span>KAMPALA HQ · EST. 2026</span>
                  <span className="text-[#4F7CFF]">ADAPTIVE ECOSYSTEM →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
