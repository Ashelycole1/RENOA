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
          ? "bg-[#fdfdfd]/85 backdrop-blur-md border-b border-[#0000000d] py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-[#0F6B3C] text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-[#0B5230] transition-colors">
            R
          </div>
          <span className="font-bold text-xl tracking-tight text-[#111827] group-hover:text-[#0F6B3C] transition-colors">
            RENOA
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="/#services"
            className="text-sm font-medium text-[#4B5563] hover:text-[#111827] transition-colors"
          >
            Services
          </a>
          <a
            href="/#work"
            className="text-sm font-medium text-[#4B5563] hover:text-[#111827] transition-colors"
          >
            Work
          </a>
          <Link
            href="/projects"
            className="text-sm font-medium text-[#4B5563] hover:text-[#111827] transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/careers"
            className="text-sm font-medium text-[#4B5563] hover:text-[#111827] transition-colors"
          >
            Careers
          </Link>
        </nav>

        {/* Desktop Action */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="btn-primary group"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#4B5563] hover:text-[#111827] bg-[#f7f7f7] rounded-lg border border-[#0000000d]"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fdfdfd] border-b border-[#0000000d] px-6 py-6 space-y-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            <a
              href="/#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#4B5563] hover:text-[#111827] py-1"
            >
              Services
            </a>
            <a
              href="/#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#4B5563] hover:text-[#111827] py-1"
            >
              Work
            </a>
            <Link
              href="/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#4B5563] hover:text-[#111827] py-1"
            >
              Projects
            </Link>
            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-[#4B5563] hover:text-[#111827] py-1"
            >
              Careers
            </Link>
          </nav>
          <div className="pt-2 border-t border-[#0000000d]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full btn-primary justify-center"
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
