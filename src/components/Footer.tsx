import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 pointer-events-none bg-gradient-to-b from-[var(--bg)] via-[var(--footer-to)]/45 to-[var(--footer-to)]" />
      
      {/* Texture image overlay */}
      <div className="absolute inset-x-0 bottom-0 top-0 -z-10 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-32 bg-[url('/noise.png')] bg-repeat"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, black 16%, black 84%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 16%, black 84%, transparent 100%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        
        {/* Top Section */}
        <div className="grid gap-10 py-14 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:py-20">
          <div>
            {/* Logo */}
            <Link href="/" className="mb-6 inline-flex w-fit items-center text-[var(--text-primary)]">
              <span className="text-[20px] font-semibold tracking-[-0.04em]">renoa</span>
              <span className="ml-0.5 mb-3 inline-block w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            </Link>

            <h2 className="max-w-[520px] text-[22px] leading-[1.25] tracking-[-0.03em] text-[var(--text-primary)] md:text-[34px]">
              We build software that means business.
            </h2>
            <p className="mt-5 max-w-[440px] text-[14px] leading-[1.7] text-[var(--text-secondary)]">
              Product design, engineering, and AI operations from Kampala for teams across Africa and global markets.
            </p>
          </div>

          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] w-fit items-center gap-2 rounded bg-[var(--accent)] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" d="M14.43 5.93L20.5 12l-6.07 6.07M3.5 12h16.83" />
            </svg>
            Book a call
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid gap-10 border-t border-[var(--border)] py-12 sm:grid-cols-3">
          <div className="flex flex-col gap-3">
            <span className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text-primary)]">
              Company
            </span>
            <Link href="/" className="text-[13px] font-medium text-[var(--text-secondary)] transition-colors duration-150 hover:text-[var(--text-primary)]">Home</Link>
            <Link href="/#services" className="text-[13px] font-medium text-[var(--text-secondary)] transition-colors duration-150 hover:text-[var(--text-primary)]">Services</Link>
            <Link href="/careers" className="text-[13px] font-medium text-[var(--text-secondary)] transition-colors duration-150 hover:text-[var(--text-primary)]">Careers</Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text-primary)]">
              Work
            </span>
            <Link href="/#work" className="text-[13px] font-medium text-[var(--text-secondary)] transition-colors duration-150 hover:text-[var(--text-primary)]">Selected work</Link>
            <Link href="/projects" className="text-[13px] font-medium text-[var(--text-secondary)] transition-colors duration-150 hover:text-[var(--text-primary)]">All projects</Link>
          </div>

          <div className="flex flex-col gap-3">
            <span className="mb-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text-primary)]">
              Contact
            </span>
            <a href="mailto:hello@renoa.tech" className="text-[13px] font-medium text-[var(--text-secondary)] transition-colors duration-150 hover:text-[var(--text-primary)]">hello@renoa.tech</a>
            <span className="text-[13px] font-medium text-[var(--text-secondary)]">Kampala, Uganda</span>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="flex flex-col gap-5 border-t border-[var(--border)] py-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] text-[var(--text-muted)]">
              © {new Date().getFullYear()} RENOA. All rights reserved.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="https://twitter.com/renoa_tech" target="_blank" rel="noopener noreferrer" className="text-[12px] font-medium text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--text-primary)]">
              X
            </a>
            <a href="https://www.linkedin.com/company/renoa-collective/" target="_blank" rel="noopener noreferrer" className="text-[12px] font-medium text-[var(--text-muted)] transition-colors duration-150 hover:text-[var(--text-primary)]">
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
