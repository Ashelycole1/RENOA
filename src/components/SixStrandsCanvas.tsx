"use client";

import { useEffect, useRef } from "react";

const STRAND_COLORS = [
  "#0d9488",
  "#14b8a6",
  "#2dd4bf",
  "#5eead4",
  "#99f6e4",
  "#0f766e",
];

export default function SixStrandsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const mouse = { x: -1000, y: -1000 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.005;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const spacing = width / 7;

      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        const startX = spacing * (i + 1);
        ctx.moveTo(startX, -100);

        for (let y = 0; y <= height + 100; y += 20) {
          let xOffset = 0;
          
          if (!reducedMotion) {
            // Idle drift
            xOffset = Math.sin(time + y * 0.002 + i) * 100;

            // Mouse interaction
            const dy = y - mouse.y;
            const distanceToMouseY = Math.abs(dy);
            const expectedX = startX + xOffset;
            const dx = expectedX - mouse.x;
            const distanceToMouse = Math.sqrt(dx * dx + dy * dy);

            if (distanceToMouse < 200) {
              const force = (200 - distanceToMouse) / 200;
              xOffset -= dx * force * 0.5;
            }
          }

          ctx.lineTo(startX + xOffset, y);
        }

        ctx.strokeStyle = STRAND_COLORS[i];
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: -1,
      }}
    />
  );
}
