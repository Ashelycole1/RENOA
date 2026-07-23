"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavProps {
  onOpenBooking: () => void;
}

export default function Nav({ onOpenBooking }: NavProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-[100] flex justify-center px-2 pt-4 md:px-4">
      <header
        className="w-full max-w-[1160px] backdrop-blur-md"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-12px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <div className="flex min-h-[56px] items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex shrink-0 items-center rounded-sm outline-none focus-visible:ring-2"
            aria-label="RENOA home"
          >
            <span className="text-[18px] font-semibold tracking-[-0.04em] text-[var(--text-primary,#111)]">
              renoa
            </span>
            <span className="ml-0.5 mb-3 inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
            {[
              { label: "Services", href: "/#services" },
              { label: "Work", href: "/#work" },
              { label: "Projects", href: "/projects" },
              { label: "Careers", href: "/careers" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[16px] font-medium text-[#111] transition-colors hover:text-[var(--accent)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <span className="h-5 w-px bg-[#0000001a]" />
            <button
              onClick={onOpenBooking}
              className="inline-flex min-h-9 items-center bg-[var(--accent)] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
              style={{ borderRadius: "var(--radius-md)" }}
            >
              Let&apos;s Talk
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center text-[#111] md:hidden transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <div className="flex w-5 flex-col items-end justify-center gap-[5px]">
              <span
                className="block h-[1.5px] bg-current origin-center transition-transform duration-200"
                style={{ transform: open ? "rotate(45deg) translate(3px, 3px)" : "" }}
              />
              <span
                className="block h-[1.5px] bg-current transition-opacity duration-200"
                style={{ opacity: open ? 0 : 1 }}
              />
              <span
                className="block h-[1.5px] bg-current origin-center transition-transform duration-200"
                style={{ transform: open ? "rotate(-45deg) translate(3px, -3px)" : "" }}
              />
            </div>
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border border-[#0000001a] rounded-lg mt-2 px-5 py-5 space-y-4 shadow-lg">
            {[
              { label: "Services", href: "/#services" },
              { label: "Work", href: "/#work" },
              { label: "Projects", href: "/projects" },
              { label: "Careers", href: "/careers" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block text-base font-medium text-[#111] hover:text-[var(--accent)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => { setOpen(false); onOpenBooking(); }}
              className="w-full inline-flex min-h-[44px] items-center justify-center bg-[var(--accent)] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
              style={{ borderRadius: "var(--radius-md)" }}
            >
              Let&apos;s Talk
            </button>
          </div>
        )}
      </header>
    </div>
  );
}
