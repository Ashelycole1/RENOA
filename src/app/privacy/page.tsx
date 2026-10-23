import Link from "next/link";

export default function PrivacyPage() {
  const lastUpdated = "23 October 2026";

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#111827]">
      <div className="wrapper max-w-[800px] py-20">
        <div className="mb-12">
          <Link href="/" className="text-xs font-mono text-[#9ca3af] hover:text-[#111] transition-colors">
            ← Back to RENOA
          </Link>
          <h1 className="mt-6 text-3xl md:text-4xl font-bold tracking-tight text-[#111]">Privacy Policy</h1>
          <p className="mt-2 text-sm text-[#9ca3af] font-mono">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8 text-[var(--text-secondary)]">
          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">1. Who We Are</h2>
            <p className="leading-relaxed">
              RENOA Collective Ltd ("RENOA", "we", "our", or "us") is a software studio registered in the Republic of Uganda,
              headquartered in Kampala. Our contact email is{" "}
              <a href="mailto:hello@renoa.tech" className="text-[var(--accent)] hover:underline">
                hello@renoa.tech
              </a>
              .
            </p>
            <p className="leading-relaxed mt-3">
              This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website
              renoa.tech, contact us, or engage us for services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">2. Information We Collect</h2>
            <p className="leading-relaxed">We collect information you voluntarily provide, including:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Name, email address, and phone number when you contact us or fill in our inquiry form.",
                "Company name, project description, and budget range when booking a discovery call.",
                "Payment details processed securely via MTN Mobile Money, Airtel Money, or Stripe (we do not store full card numbers).",
                "Messages and attachments sent via email or WhatsApp in the course of a client engagement.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed mt-4">We also collect non-personal analytics data automatically, including:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Browser type, operating system, and device type.",
                "Pages visited, referral source, and session duration via Vercel Analytics (privacy-friendly, no cross-site tracking).",
                "IP address in server access logs, retained for up to 30 days.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">3. How We Use Your Information</h2>
            <p className="leading-relaxed">We use collected information to:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Respond to inquiries and schedule discovery calls.",
                "Deliver contracted software development services.",
                "Issue invoices and process payments.",
                "Send project status updates and milestone notifications.",
                "Improve our website and service offerings based on aggregate analytics.",
                "Comply with legal obligations under Ugandan law, including the Uganda Data Protection and Privacy Act, 2019.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed mt-4">
              We do <strong className="text-[#111]">not</strong> sell, rent, or trade your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">4. Data Sharing</h2>
            <p className="leading-relaxed">We may share data with trusted service providers who assist us in operating our business:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Vercel (hosting & analytics) — servers in the EU and US.",
                "Google Workspace (email and document collaboration).",
                "Stripe / Flutterwave (international payment processing).",
                "MTN MoMo & Airtel Money APIs (local payment rails).",
                "Calendly or similar booking tools (discovery call scheduling).",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed mt-4">
              All service providers are contractually bound to use your data only as necessary to provide their services
              and comply with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">5. AI Systems & Client Data</h2>
            <p className="leading-relaxed">
              When we build AI systems (RAG pipelines, LLM integrations) using your proprietary documents, those documents
              are processed in isolated environments. They are <strong className="text-[#111]">never</strong> used to train public
              foundation models. Private document processing uses enterprise API endpoints from Google (Gemini) with data
              isolation guarantees.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">6. Data Retention</h2>
            <p className="leading-relaxed">
              We retain personal data for as long as necessary to fulfill the purposes outlined above, or as required by
              Ugandan law. Client project files are retained for 3 years post-project. Server logs are retained for 30 days.
              You may request deletion of your data at any time.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">7. Your Rights</h2>
            <p className="leading-relaxed">Under the Uganda Data Protection and Privacy Act, 2019, you have the right to:</p>
            <ul className="mt-3 space-y-2 list-none">
              {[
                "Access the personal data we hold about you.",
                "Correct inaccurate or incomplete data.",
                "Request deletion of your personal data.",
                "Object to processing of your data for direct marketing.",
                "Lodge a complaint with the Personal Data Protection Office of Uganda.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shrink-0 mt-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="leading-relaxed mt-4">
              To exercise your rights, email{" "}
              <a href="mailto:hello@renoa.tech" className="text-[var(--accent)] hover:underline">
                hello@renoa.tech
              </a>{" "}
              with the subject line "Privacy Request". We will respond within 14 business days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">8. Security</h2>
            <p className="leading-relaxed">
              We implement industry-standard security measures including TLS encryption for all data in transit, access
              controls on internal systems, and regular security reviews. No transmission over the internet is 100% secure;
              we cannot guarantee absolute security but we commit to prompt notification in the event of a breach.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">9. Cookies</h2>
            <p className="leading-relaxed">
              This website uses essential cookies for functional operation and minimal privacy-friendly analytics
              (Vercel Analytics). We do not deploy advertising cookies or cross-site tracking pixels.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">10. Changes to This Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy periodically. The "Last updated" date at the top indicates the most recent revision.
              Continued use of our website following changes constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#111] mb-3">11. Contact</h2>
            <p className="leading-relaxed">
              For privacy questions, data requests, or concerns:
            </p>
            <div className="mt-4 rounded-xl border border-[#0000000d] bg-white p-5 space-y-1 text-sm">
              <p className="font-bold text-[#111]">RENOA Collective Ltd</p>
              <p>Kampala, Uganda</p>
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
