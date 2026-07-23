"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavProps {
  onOpenBooking: () => void;
}

export default function Nav({ onOpenBooking }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled ? "bg-white/90 backdrop-blur-md border-b border-[#e5e5e5]" : "bg-transparent"
      }`}
    >
      <div className="wrapper flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 font-bold text-xl text-[#0a0a0a] tracking-tight">
          renoa
          <span className="w-1.5 h-1.5 rounded-full bg-[#0F6B3C] mb-3" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#525252]">
          <a href="/#services" className="hover:text-[#0a0a0a] transition-colors">Services</a>
          <a href="/#work" className="hover:text-[#0a0a0a] transition-colors">Work</a>
          <Link href="/projects" className="hover:text-[#0a0a0a] transition-colors">Projects</Link>
          <Link href="/careers" className="hover:text-[#0a0a0a] transition-colors">Careers</Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button onClick={onOpenBooking} className="btn btn-fill text-sm">
            Let&apos;s Talk
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-[#525252]"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-b border-[#e5e5e5] px-6 py-5 space-y-4">
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
              className="block text-base font-medium text-[#525252] hover:text-[#0a0a0a]"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => { setOpen(false); onOpenBooking(); }}
            className="w-full btn btn-fill mt-2"
          >
            Let&apos;s Talk
          </button>
        </div>
      )}
    </header>
  );
}
