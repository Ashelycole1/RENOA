"use client";

import { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "Platform Development",
    timeline: "ASAP (2-4 weeks)",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const close = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={close}
    >
      <div
        className="relative w-full max-w-lg bg-white border border-[#e5e5e5] rounded-2xl p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-5 right-5 p-1.5 text-[#a3a3a3] hover:text-[#0a0a0a] rounded-lg hover:bg-[#fafafa] transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        {!submitted ? (
          <>
            <span className="label block mb-2">Discovery Call</span>
            <h3 className="text-2xl font-bold text-[#0a0a0a] mb-1">
              Let&apos;s build something.
            </h3>
            <p className="text-sm text-[#525252] mb-6">
              Connect directly with RENOA&apos;s senior engineering team in Kampala. We reply within one business day.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#525252] mb-1 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#fafafa] border border-[#e5e5e5] rounded-lg text-sm text-[#0a0a0a] placeholder-[#a3a3a3] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#525252] mb-1 uppercase tracking-wider">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#fafafa] border border-[#e5e5e5] rounded-lg text-sm text-[#0a0a0a] placeholder-[#a3a3a3] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#525252] mb-1 uppercase tracking-wider">
                    Project Type
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#fafafa] border border-[#e5e5e5] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  >
                    <option value="Platform Development">Platform Development</option>
                    <option value="Product Design">Product Design</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="Mobile Money Integration">Mobile Money Integration</option>
                    <option value="Dedicated Squad">Dedicated Squad</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#525252] mb-1 uppercase tracking-wider">
                    Target Timeline
                  </label>
                  <select
                    value={form.timeline}
                    onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#fafafa] border border-[#e5e5e5] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[var(--accent)] transition-colors"
                  >
                    <option value="ASAP (within 2-4 weeks)">ASAP (within 2-4 weeks)</option>
                    <option value="1 - 2 months">1 – 2 months</option>
                    <option value="3 - 6 months">3 – 6 months</option>
                    <option value="Flexible / Ongoing">Flexible / Ongoing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#525252] mb-1 uppercase tracking-wider">
                  Project Brief *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Tell us what you're building, target timeline, or key technical challenges..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#fafafa] border border-[#e5e5e5] rounded-lg text-sm text-[#0a0a0a] placeholder-[#a3a3a3] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-5 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-hover)]"
                >
                  Send Inquiry & Request Call
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </button>

                <div className="flex items-center justify-between text-xs text-[#737373] pt-1">
                  <span>Prefer instant chat?</span>
                  <a
                    href="https://wa.me/256700000000?text=Hi%20RENOA%2C%20I%20would%20like%20to%20discuss%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-[#2563EB] hover:underline"
                  >
                    Open WhatsApp
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
                  </a>
                </div>
              </div>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-[#EAF2FF] rounded-full flex items-center justify-center mx-auto text-[var(--accent)]">
              <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a0a0a]">Inquiry received!</h3>
            <p className="text-sm text-[#525252] max-w-xs mx-auto">
              Thank you, {form.name}. Our engineering leads in Kampala will review your project brief and reply to <strong>{form.email}</strong> within 24 hours.
            </p>
            <button
              onClick={close}
              className="mt-4 px-6 py-2.5 rounded-lg border border-[#e5e5e5] text-sm font-medium text-[#111] hover:bg-[#fafafa]"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
