"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavProps {
  onOpenBooking: () => void;
}

export default function Nav({ onOpenBooking }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#071019]/85 backdrop-blur-md border-b border-[#1C2A3A] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#4F7CFF] to-[#00F0FF] p-[1px]">
            <div className="w-full h-full bg-[#071019] rounded-[7px] flex items-center justify-center font-bold text-sm text-white group-hover:bg-transparent transition-colors">
              R
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight text-white group-hover:text-[#4F7CFF] transition-colors">
            RENOA
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/#services"
            className="text-sm font-medium text-[#9AA5B1] hover:text-white transition-colors"
          >
            Services
          </a>
          <a
            href="/#work"
            className="text-sm font-medium text-[#9AA5B1] hover:text-white transition-colors"
          >
            Work
          </a>
          <Link
            href="/projects"
            className="text-sm font-medium text-[#9AA5B1] hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/careers"
            className="text-sm font-medium text-[#9AA5B1] hover:text-white transition-colors"
          >
            Careers
          </Link>
        </nav>

        {/* Desktop Action */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-[#4F7CFF] hover:bg-[#3B66E6] rounded-xl transition-all shadow-md shadow-[#4F7CFF]/20 group"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#9AA5B1] hover:text-white bg-white/5 rounded-lg border border-[#1C2A3A]"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F1B29] border-b border-[#1C2A3A] px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-4">
            <a
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#9AA5B1] hover:text-white py-1"
            >
              Services
            </a>
            <a
              href="/#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#9AA5B1] hover:text-white py-1"
            >
              Work
            </a>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#9AA5B1] hover:text-white py-1"
            >
              Projects
            </Link>
            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#9AA5B1] hover:text-white py-1"
            >
              Careers
            </Link>
          </nav>
          <div className="pt-2 border-t border-[#1C2A3A]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#4F7CFF] hover:bg-[#3B66E6] rounded-xl transition-colors"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
