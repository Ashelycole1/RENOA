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
    service: "Web & App Development",
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
      onClick={close}
    >
      <div
        className="relative w-full max-w-md bg-white border border-[#e5e5e5] rounded-2xl p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={close}
          className="absolute top-5 right-5 p-1.5 text-[#a3a3a3] hover:text-[#0a0a0a] rounded-lg hover:bg-[#fafafa] transition-colors"
        >
          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        {!submitted ? (
          <>
            <span className="label block mb-2">Book a Call</span>
            <h3 className="text-2xl font-bold text-[#0a0a0a] mb-1">
              Let&apos;s build something.
            </h3>
            <p className="text-sm text-[#525252] mb-6">
              Connect with the RENOA team in Kampala — we respond within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#525252] mb-1 uppercase tracking-wider">Name</label>
                <input
                  type="text" required
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#fafafa] border border-[#e5e5e5] rounded-lg text-sm text-[#0a0a0a] placeholder-[#a3a3a3] focus:outline-none focus:border-[#0F6B3C] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#525252] mb-1 uppercase tracking-wider">Email</label>
                <input
                  type="email" required
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#fafafa] border border-[#e5e5e5] rounded-lg text-sm text-[#0a0a0a] placeholder-[#a3a3a3] focus:outline-none focus:border-[#0F6B3C] transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#525252] mb-1 uppercase tracking-wider">Service</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#fafafa] border border-[#e5e5e5] rounded-lg text-sm text-[#0a0a0a] focus:outline-none focus:border-[#0F6B3C] transition-colors"
                >
                  <option>Intelligence &amp; Automation</option>
                  <option>Web &amp; App Development</option>
                  <option>ICT Consultation</option>
                  <option>Brand &amp; Design</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#525252] mb-1 uppercase tracking-wider">Brief</label>
                <textarea
                  rows={3}
                  placeholder="What do you want to build?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2.5 bg-[#fafafa] border border-[#e5e5e5] rounded-lg text-sm text-[#0a0a0a] placeholder-[#a3a3a3] focus:outline-none focus:border-[#0F6B3C] transition-colors resize-none"
                />
              </div>

              <div className="flex gap-3 pt-1">
                <button type="submit" className="flex-1 btn btn-fill justify-center">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send inquiry
                </button>
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Cal.com
                </a>
              </div>
            </form>
          </>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-[#E6F2EC] rounded-full flex items-center justify-center mx-auto">
              <svg className="w-7 h-7 text-[#0F6B3C]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h3 className="text-xl font-bold text-[#0a0a0a]">Inquiry received!</h3>
            <p className="text-sm text-[#525252]">
              Thanks, <strong>{form.name}</strong>. The RENOA team will reach out within 24 hours.
            </p>
            <button onClick={close} className="btn btn-fill mx-auto">
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
