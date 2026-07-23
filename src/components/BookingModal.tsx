"use client";

import { useState } from "react";
import { X, Calendar, Send, CheckCircle2 } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Software Engineering & Architecture",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all duration-300">
      <div 
        className="relative w-full max-w-lg bg-white border border-[#0000001a] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Accent background */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#0F6B3C]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 text-[#6B7280] hover:text-[#111827] bg-[#f7f7f7] hover:bg-[#e5e7eb] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="eyebrow">BOOK A CALL</span>
            </div>
            
            <h3 className="text-2xl font-bold text-[#111827] mb-2">
              We build software that means business.
            </h3>
            <p className="text-sm text-[#4B5563] mb-6">
              Connect directly with RENOA&apos;s co-founders & engineering team in Kampala or schedule a session via Cal.com.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4B5563] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mwangi"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#fdfdfd] border border-[#0000001a] rounded-xl text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0F6B3C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4B5563] mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#fdfdfd] border border-[#0000001a] rounded-xl text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0F6B3C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4B5563] mb-1">
                  Capability Area
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 bg-[#fdfdfd] border border-[#0000001a] rounded-xl text-[#111827] focus:outline-none focus:border-[#0F6B3C] transition-colors"
                >
                  <option value="Intelligence & Automation">Intelligence & Automation (AI Systems)</option>
                  <option value="Web & App Development">Web & App Development</option>
                  <option value="ICT Consultation">ICT Consultation & Technical Audit</option>
                  <option value="Brand Design & Marketing">Brand Design & Marketing</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#4B5563] mb-1">
                  Project Brief
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the problem you want to solve..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#fdfdfd] border border-[#0000001a] rounded-xl text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0F6B3C] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0F6B3C] hover:bg-[#0B5230] text-white font-semibold rounded-xl transition-all shadow-md shadow-[#0F6B3C]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
                
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#f7f7f7] hover:bg-[#e5e7eb] border border-[#0000001a] text-[#111827] font-semibold rounded-xl transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#0F6B3C]" />
                  <span>Book via Cal.com</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#E4F3EA] text-[#0F6B3C] border border-[#0F6B3C]/30 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#111827]">Inquiry Received!</h3>
            <p className="text-sm text-[#4B5563] max-w-md mx-auto">
              Thank you, <span className="text-[#111827] font-medium">{formData.name}</span>. The RENOA team in Kampala will review your request and reach out within 24 hours.
            </p>
            <button
              onClick={resetAndClose}
              className="mt-4 px-6 py-3 bg-[#0F6B3C] hover:bg-[#0B5230] text-white font-semibold rounded-xl transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
