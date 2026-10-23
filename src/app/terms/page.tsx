import Link from "next/link";

export default function TermsPage() {
  const lastUpdated = "23 October 2026";

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#111827]">
      <div className="wrapper max-w-[800px] py-20">
        <div className="mb-12">
          <Link href="/" className="text-xs font-mono text-[#9ca3af] hover:text-[#111] transition-colors">
            ← Back to RENOA
          </Link>
          <h1 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-[#111]">Terms of Service</h1>
          <p className="mt-2 text-sm text-[#9ca3af] font-mono">Last updated: {lastUpdated}</p>
        </div>

        <div className="space-y-8 text-[var(--text-secondary)]">
          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">1. Agreement to Terms</h2>
            <p className="leading-relaxed">
              By accessing renoa.tech or engaging RENOA Collective Ltd ("RENOA") for services, you agree to be bound by these
              Terms of Service and all applicable Ugandan laws and regulations. If you do not agree, please do not use our
              website or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">2. Services</h2>
            <p className="leading-relaxed">
              RENOA provides software product design, platform engineering, AI & automation, brand identity, and mobile money
              integration services. The scope of work for each engagement is defined in a separate Statement of Work (SoW) or
              Service Agreement, which takes precedence over these general terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">3. Intellectual Property & Ownership</h2>
            <p className="leading-relaxed">
              Upon full payment of all project milestones, all intellectual property, source code, design files, database schemas,
              and deliverables created for the client are transferred fully to the client. RENOA retains no licensing rights over
              delivered work.
            </p>
            <p className="leading-relaxed mt-3">
              RENOA retains ownership of: (a) pre-existing proprietary frameworks and tools used in project delivery,
              (b) general knowledge and methodologies, and (c) publicly released open-source components. These are licensed
              to clients on a perpetual, royalty-free basis as part of the delivered software.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">4. Payment Terms</h2>
            <p className="leading-relaxed">
              Payment schedules are defined per engagement in the project contract. Standard terms:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Fixed-scope projects: 40% on signing, 30% at mid-point milestone, 30% on delivery.",
                "Discovery Sprints: 50% on signing, 50% on delivery.",
                "Monthly squads: invoiced monthly in advance.",
                "Late payments beyond 14 days may attract a 2% monthly interest charge.",
                "Final deliverables (code repositories, design files) are transferred only after full payment.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">5. Change Orders & Scope</h2>
            <p className="leading-relaxed">
              Any features, integrations, or deliverables outside the agreed Statement of Work require a written Change Order
              approved by both parties. Change orders are priced transparently and added to the project total before work begins.
              RENOA will never perform unscoped work without client authorization.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">6. Confidentiality</h2>
            <p className="leading-relaxed">
              Both parties agree to hold in confidence any proprietary information shared during the engagement. RENOA is
              willing to sign mutual Non-Disclosure Agreements (NDAs) prior to reviewing sensitive business data. Confidentiality
              obligations survive termination of the engagement for a period of 3 years.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">7. Warranties & Support</h2>
            <p className="leading-relaxed">
              All production builds include a 30-day post-launch warranty covering defects in the delivered software that arise
              from RENOA's implementation. The warranty does not cover: third-party API changes, client-initiated modifications
              after delivery, infrastructure outages outside RENOA's control, or feature requests beyond the original scope.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">8. Limitation of Liability</h2>
            <p className="leading-relaxed">
              To the maximum extent permitted by Ugandan law, RENOA's total liability for any claims arising from a project
              shall not exceed the total fees paid by the client for that specific engagement. RENOA is not liable for indirect,
              consequential, or incidental damages including lost profits.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">9. Termination</h2>
            <p className="leading-relaxed">
              Either party may terminate an engagement with 14 days written notice. Upon termination, the client is liable for
              work completed and accepted up to the termination date. RENOA will deliver all completed work products; work
              in progress may be delivered at RENOA's discretion based on milestone completion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">10. Governing Law</h2>
            <p className="leading-relaxed">
              These Terms are governed by the laws of the Republic of Uganda. Any disputes shall be resolved through
              good-faith negotiation, and if unresolved, through arbitration under the Arbitration and Conciliation Act
              of Uganda, or the courts of competent jurisdiction in Kampala, Uganda.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">11. Website Usage</h2>
            <p className="leading-relaxed">
              The content on renoa.tech is for informational purposes only. RENOA makes no warranties regarding the
              completeness, accuracy, or fitness for a particular purpose of any website content. Pricing and availability
              are subject to change without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">12. Contact</h2>
            <div className="mt-4 rounded-xl border border-[#0000000d] bg-white p-5 space-y-1 text-sm">
              <p className="font-bold text-[#111]">RENOA Collective Ltd</p>
              <p>Kampala, Uganda — Registered in the Republic of Uganda</p>
              <p>
                Email:{" "}
                <a href="mailto:hello@renoa.tech" className="text-[var(--accent)] hover:underline">
                  hello@renoa.tech
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
