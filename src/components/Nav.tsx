"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavProps {
  onOpenBooking: () => void;
}

const NAV_LINKS = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Nav({ onOpenBooking }: NavProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-[100] flex justify-center px-3 pt-3 md:px-6 md:pt-4">
      <header
        className="w-full max-w-[1200px] rounded-2xl border border-[#00000010] bg-white/85 px-4 shadow-sm backdrop-blur-md transition-all duration-300 md:px-6"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(-12px)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <div className="flex min-h-[58px] items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-2.5 rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            aria-label="RENOA home"
          >
            <Image
              src="/favicon.png"
              alt="RENOA symbol"
              width={26}
              height={26}
              className="h-6 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              priority
            />
            <span className="text-[19px] font-semibold tracking-[-0.04em] text-[var(--text-primary,#111)]">
              renoa
            </span>
            <span className="ml-0.5 mb-2.5 inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            {NAV_LINKS.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[15px] font-medium transition-colors hover:text-[var(--accent)] ${
                    active ? "text-[var(--accent)] font-semibold" : "text-[#333]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <span className="h-4 w-px bg-[#00000015]" />
            <button
              onClick={onOpenBooking}
              className="inline-flex min-h-[40px] items-center gap-1.5 bg-[var(--accent)] px-5 text-[14px] font-medium text-white transition-all hover:bg-[var(--accent-hover)] hover:shadow-sm"
              style={{ borderRadius: "var(--radius-md)" }}
            >
              Book a call
              <svg className="w-4 h-4 ml-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
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
          <div className="md:hidden border-t border-[#00000010] py-4 space-y-3">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block py-1.5 text-base font-medium transition-colors ${
                  pathname === item.href ? "text-[var(--accent)] font-semibold" : "text-[#111] hover:text-[var(--accent)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => { setOpen(false); onOpenBooking(); }}
                className="w-full inline-flex min-h-[44px] items-center justify-center bg-[var(--accent)] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
                style={{ borderRadius: "var(--radius-md)" }}
              >
                Book a call
              </button>
              <a
                href="https://wa.me/256700000000?text=Hi%20RENOA%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="w-full inline-flex min-h-[44px] items-center justify-center gap-2 border border-[#25D366] bg-[#25D366]/10 px-5 text-[14px] font-medium text-[#1E9E4B] transition-colors"
                style={{ borderRadius: "var(--radius-md)" }}
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
