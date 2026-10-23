import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] flex items-center justify-center px-4">
      <div className="text-center max-w-xl">
        <div className="mb-8 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#E4F3EA] border border-[var(--accent)]/20">
            <svg className="w-10 h-10 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
        </div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent)] font-mono">
          MESSAGE RECEIVED
        </span>
        <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
          Thank you for reaching out.
        </h1>
        <p className="mt-4 text-base text-[var(--text-secondary)] leading-relaxed">
          A member of our engineering team will reply within one business day. For urgent matters,
          reach us directly on WhatsApp.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[var(--accent)] px-7 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
          >
            Back to home
          </Link>
          <a
            href="https://wa.me/256700000000?text=Hi%20RENOA%2C%20I%20just%20submitted%20an%20inquiry."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-[#25D366] bg-[#25D366]/10 px-7 text-sm font-medium text-[#1E9E4B] transition-colors hover:bg-[#25D366]/20"
          >
            Chat on WhatsApp
          </a>
        </div>
        <p className="mt-10 text-xs text-[#9ca3af] font-mono">
          hello@renoa.tech · Kampala, Uganda
        </p>
      </div>
    </div>
  );
}
