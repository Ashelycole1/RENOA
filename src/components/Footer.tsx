import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-[#0000000d] bg-[var(--bg)]">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 pointer-events-none bg-gradient-to-b from-[var(--bg)] via-[#f9fafb] to-[#f3f4f6]" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        {/* Top Section */}
        <div className="grid gap-12 py-16 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-start md:py-20">
          <div>
            {/* Logo */}
            <Link href="/" className="group mb-6 inline-flex w-fit items-center gap-2.5 text-[var(--text-primary)]">
              <Image
                src="/favicon.png"
                alt="RENOA symbol"
                width={28}
                height={28}
                className="h-7 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <span className="text-[22px] font-semibold tracking-[-0.04em]">renoa</span>
              <span className="ml-0.5 mb-3 inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            </Link>

            <h2 className="max-w-[500px] text-[24px] font-normal leading-[1.25] tracking-[-0.03em] text-[var(--text-primary)] md:text-[32px]">
              We build software that means business.
            </h2>
            <p className="mt-4 max-w-[440px] text-[15px] leading-[1.65] text-[var(--text-secondary)]">
              Product design, platform engineering, and localized AI operations from Kampala for teams across East Africa and global markets.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)] font-mono">
              <span className="inline-flex items-center gap-1.5 rounded-md border border-[#00000010] bg-white px-2.5 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#12B76A]" /> Kampala, Uganda (EAT · UTC+3)
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-[#00000010] bg-white px-2.5 py-1">
                Founded 2026 · Co-Founders Studio
              </span>
            </div>
          </div>

          {/* Quick Action / Direct Channels */}
          <div className="rounded-2xl border border-[#00000010] bg-white/80 p-6 md:p-8 backdrop-blur-sm space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] font-mono">
              Start a Conversation
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Have an MVP, mobile money integration, or AI system in mind? Talk with our senior engineering team directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/contact"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
              >
                Book discovery call
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </Link>
              <a
                href="https://wa.me/256700000000?text=Hi%20RENOA%20team%2C%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-[#2563EB] bg-[#2563EB]/10 px-5 text-[14px] font-medium text-[#2563EB] transition-colors hover:bg-[#2563EB]/20"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        {/* 4-Column Navigation Links Grid */}
        <div className="grid gap-10 border-t border-[var(--border)] py-14 sm:grid-cols-2 md:grid-cols-4">
          {/* Column 1: Company */}
          <div className="flex flex-col gap-3">
            <span className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text-primary)] font-mono">
              Company
            </span>
            <Link href="/" className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">Home</Link>
            <Link href="/about" className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">About Us</Link>
            <Link href="/pricing" className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">Engagement Models</Link>
            <Link href="/careers" className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">Careers (Hiring)</Link>
            <Link href="/contact" className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">Contact</Link>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col gap-3">
            <span className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text-primary)] font-mono">
              Services
            </span>
            <Link href="/services/product-design" className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">Product Design</Link>
            <Link href="/services/platform-development" className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">Platform Development</Link>
            <Link href="/services/ai-automation" className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">AI & Automation</Link>
            <Link href="/services/mobile-money-integrations" className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">Mobile Money Integrations</Link>
            <Link href="/services/brand-identity" className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">Brand Identity & 3D</Link>
          </div>

          {/* Column 3: Work / Case Studies */}
          <div className="flex flex-col gap-3">
            <span className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text-primary)] font-mono">
              Case Studies
            </span>
            <Link href="/work/driveug" className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">DriveUG (Mobility)</Link>
            <Link href="/work/lawbuddy" className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">LAWBUDDY (Constitutional AI)</Link>
            <Link href="/work/gemyte" className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">Gemyte (3D STEM)</Link>
            <Link href="/work/konnect" className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">Konnect Web3 (Loyalty)</Link>
            <Link href="/work" className="text-[14px] font-medium text-[var(--accent)] transition-colors hover:underline">View all projects →</Link>
          </div>

          {/* Column 4: Legal & Direct Contact */}
          <div className="flex flex-col gap-3">
            <span className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text-primary)] font-mono">
              Trust & Legal
            </span>
            <Link href="/security" className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">Security & Data Privacy</Link>
            <Link href="/faq" className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">Frequently Asked Questions</Link>
            <Link href="/privacy" className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">Privacy Policy</Link>
            <Link href="/terms" className="text-[14px] text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]">Terms of Service</Link>
            <div className="pt-2">
              <a href="mailto:renoacollective@gmail.com" className="text-[14px] font-semibold text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                renoacollective@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="flex flex-col gap-5 border-t border-[var(--border)] py-8 md:flex-row md:items-center md:justify-between text-xs text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} RENOA Collective Ltd. All rights reserved. Registered in the Republic of Uganda.
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="https://twitter.com/renoa_tech" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--text-primary)]">
              X (Twitter)
            </a>
            <a href="https://www.linkedin.com/company/renoa-collective/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--text-primary)]">
              LinkedIn
            </a>
            <a href="https://github.com/Ashelycole1" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[var(--text-primary)]">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
