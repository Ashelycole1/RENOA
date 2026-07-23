"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#fdfdfd] to-[#f3f3f3] pt-16 pb-12 text-[#4B5563] border-t border-[#0000000d] relative overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none opacity-5 select-none font-bold text-[180px] leading-none text-[#0F6B3C]">
        RENOA
      </div>

      <div className="container relative z-10">
        {/* Top Callout & Booking Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 mb-12 border-b border-[#0000000d]">
          <div className="space-y-2 max-w-xl">
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-[#0F6B3C] text-white flex items-center justify-center font-bold text-sm">
                R
              </div>
              <span className="font-bold text-2xl tracking-tight text-[#111827]">
                RENOA
              </span>
            </Link>
            <h3 className="text-2xl font-bold text-[#111827]">
              We build software that means business.
            </h3>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              Product design, engineering, and AI operations from Kampala for teams across East Africa and global markets.
            </p>
          </div>

          <div>
            <a
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-7 py-4"
            >
              <Phone className="w-4 h-4" />
              <span>Book a call</span>
            </a>
          </div>
        </div>

        {/* Sitemap & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#0000000d]">
          {/* Column 1: Company */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111827]">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link href="/" className="hover:text-[#0F6B3C] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#services" className="hover:text-[#0F6B3C] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <Link href="/careers" className="hover:text-[#0F6B3C] transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Work */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111827]">
              WORK
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <a href="/#work" className="hover:text-[#0F6B3C] transition-colors">
                  Selected Work
                </a>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#0F6B3C] transition-colors">
                  All Projects
                </Link>
              </li>
              <li>
                <a
                  href="https://driveug.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0F6B3C] transition-colors flex items-center gap-1.5"
                >
                  <span>DriveUG</span>
                  <span className="text-[10px] font-mono font-bold text-[#0F6B3C] bg-[#E4F3EA] px-1.5 py-0.5 rounded">LIVE</span>
                </a>
              </li>
              <li>
                <a
                  href="https://uglawbuddy.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0F6B3C] transition-colors flex items-center gap-1.5"
                >
                  <span>LAWBUDDY</span>
                  <span className="text-[10px] font-mono font-bold text-[#0F6B3C] bg-[#E4F3EA] px-1.5 py-0.5 rounded">LIVE</span>
                </a>
              </li>
              <li>
                <a
                  href="https://gemyte.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0F6B3C] transition-colors flex items-center gap-1.5"
                >
                  <span>Gemyte</span>
                  <span className="text-[10px] font-mono font-bold text-[#0F6B3C] bg-[#E4F3EA] px-1.5 py-0.5 rounded">LIVE</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#111827]">
              CONTACT
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0F6B3C]" />
                <a href="mailto:hello@renoa.dev" className="hover:text-[#0F6B3C] transition-colors">
                  hello@renoa.dev
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0F6B3C]" />
                <span>Kampala, Uganda</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7280] gap-4">
          <p>© 2026 RENOA. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white border border-[#0000000d] flex items-center justify-center text-[#6B7280] hover:text-[#111827] hover:border-[#0F6B3C] transition-colors shadow-sm"
              aria-label="X / Twitter"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white border border-[#0000000d] flex items-center justify-center text-[#6B7280] hover:text-[#111827] hover:border-[#0F6B3C] transition-colors shadow-sm"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.77a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
              </svg>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg bg-white border border-[#0000000d] flex items-center justify-center text-[#6B7280] hover:text-[#111827] hover:border-[#0F6B3C] transition-colors shadow-sm"
              aria-label="GitHub"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
