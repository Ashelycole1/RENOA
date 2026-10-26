import Link from "next/link";

const SECURITY_PRACTICES = [
  {
    icon: "🔒",
    title: "TLS Encryption in Transit",
    desc: "All traffic between your browser and renoa.tech is encrypted using TLS 1.3. Payment data never traverses unencrypted channels.",
  },
  {
    icon: "🔐",
    title: "Isolated AI Processing",
    desc: "Client documents used in RAG pipelines are processed in isolated vector databases. Zero client data is used for foundation model training.",
  },
  {
    icon: "🗄️",
    title: "Role-Based Access Control",
    desc: "Internal systems operate on strict least-privilege RBAC. Project data is compartmentalized per client — engineers access only their assigned projects.",
  },
  {
    icon: "🛡️",
    title: "Enterprise API Isolation",
    desc: "We use enterprise-tier Google Gemini APIs with contractual data isolation guarantees. Shared or free-tier AI APIs are never used for client work.",
  },
  {
    icon: "🔄",
    title: "Idempotent Payment Webhooks",
    desc: "Our Mobile Money integration layer uses idempotent webhook queues ensuring zero duplicate charges and no missed payment callbacks.",
  },
  {
    icon: "📋",
    title: "NDA & Contractual Protection",
    desc: "We sign mutual NDAs before reviewing proprietary specifications. All client IP is transferred upon project sign-off with full legal clarity.",
  },
  {
    icon: "🚀",
    title: "Continuous Dependency Scanning",
    desc: "All production dependencies are scanned for CVEs using automated tools. Critical patches are applied within 72 hours of public disclosure.",
  },
  {
    icon: "✅",
    title: "Data Protection Act Compliance",
    desc: "We operate in compliance with the Uganda Data Protection and Privacy Act 2019. Client data is never shared with third parties for commercial purposes.",
  },
];

const COMPLIANCE = [
  { label: "Data Protection Law", value: "Uganda Data Protection and Privacy Act, 2019" },
  { label: "AI Data Policy", value: "Private enterprise APIs — zero public model training" },
  { label: "Payment Security", value: "MTN & Airtel Production KYC compliant" },
  { label: "Code Ownership", value: "100% IP transfer upon project sign-off" },
  { label: "NDA Availability", value: "Mutual NDA on request, signed before project kickoff" },
  { label: "Breach Notification", value: "Clients notified within 72 hours of any security incident" },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#111827]">
      <div className="wrapper max-w-[1000px] py-20">
        <div className="mb-12">
          <Link href="/" className="text-xs font-mono text-[#9ca3af] hover:text-[#111] transition-colors">
            ← Back to RENOA
          </Link>
          <span className="mt-6 block text-[11px] font-bold uppercase tracking-wider text-[var(--accent)] font-mono">
            SECURITY & DATA PROTECTION
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#111]">
            How we protect your data.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-[var(--text-secondary)] leading-relaxed">
            At RENOA, we build production software for fintech, legal, and enterprise clients where data integrity
            is non-negotiable. Here is exactly how we protect your information and ensure the systems we build are secure.
          </p>
        </div>

        {/* Security Grid */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-[#111] mb-6">Security practices.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SECURITY_PRACTICES.map((item) => (
              <div key={item.title} className="rounded-2xl border border-[#0000000d] bg-white p-6 shadow-xs hover:border-[var(--accent)]/30 transition-colors">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-[#111] text-sm mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Table */}
        <section className="mb-16">
          <h2 className="text-xl font-bold text-[#111] mb-6">Compliance at a glance.</h2>
          <div className="rounded-2xl border border-[#0000000d] bg-white overflow-hidden shadow-xs">
            {COMPLIANCE.map((item, i) => (
              <div
                key={item.label}
                className={`flex items-start gap-6 px-6 py-4 text-sm ${
                  i < COMPLIANCE.length - 1 ? "border-b border-[#0000000d]" : ""
                }`}
              >
                <span className="font-mono text-[#9ca3af] shrink-0 w-40">{item.label}</span>
                <span className="text-[#111] font-medium">{item.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* AI Security Deep Dive */}
        <section className="mb-16">
          <div className="rounded-2xl border border-[var(--accent)]/20 bg-[#EAF2FF]/30 p-8">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent)] font-mono block mb-4">
              AI SYSTEMS SECURITY
            </span>
            <h2 className="text-xl font-bold text-[#111] mb-4">Your documents never train public AI models.</h2>
            <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                When we build RAG (Retrieval-Augmented Generation) systems over your proprietary documents — legal archives,
                financial records, academic content, or internal wikis — those documents are processed in completely isolated
                environments.
              </p>
              <p>
                We exclusively use <strong className="text-[#111]">enterprise API endpoints</strong> from Google (Gemini) with
                contractual data isolation guarantees. These endpoints are explicitly configured to prevent any client data
                from being used in model training pipelines.
              </p>
              <p>
                Vector embeddings of your documents are stored in private, project-specific databases (ChromaDB or pgvector)
                that are not shared across clients or accessible without explicit credentials. At project completion, vector
                stores and all embeddings are transferred to you or securely deleted on request.
              </p>
            </div>
          </div>
        </section>

        {/* Mobile Money Security */}
        <section className="mb-16">
          <div className="rounded-2xl border border-[#0000000d] bg-white p-8 shadow-xs">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--accent)] font-mono block mb-4">
              MOBILE MONEY & PAYMENTS
            </span>
            <h2 className="text-xl font-bold text-[#111] mb-4">Production-grade payment security.</h2>
            <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
              <p>
                Our Mobile Money integrations use official MTN MoMo Open API and Airtel Money API production credentials
                obtained through the formal merchant onboarding process, not unofficial or reverse-engineered endpoints.
              </p>
              <p>
                Payment webhook handlers are implemented with <strong className="text-[#111]">idempotency keys</strong>,
                ensuring that network retries and duplicate callbacks never result in double-charges. Financial ledger entries
                are immutable append-only records with full audit trails.
              </p>
              <p>
                We never store raw card numbers. Card payment processing is delegated entirely to PCI-DSS compliant providers
                (Stripe, Flutterwave). Our application layer handles only tokenized payment references.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="rounded-2xl border border-[#0000000d] bg-white p-8 shadow-sm text-center space-y-4">
            <h3 className="text-xl font-bold text-[#111]">Security concerns or questions?</h3>
            <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
              If you discover a security vulnerability or have questions about how we handle your data, contact us immediately.
            </p>
            <a
              href="mailto:hello@renoa.tech?subject=Security%20Concern"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[var(--accent)] px-7 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-hover)]"
            >
              Report a security issue
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
