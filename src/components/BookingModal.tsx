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
    projectType: "Agentic AI System",
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300">
      <div 
        className="relative w-full max-w-lg bg-[#0F1B29] border border-[#1C2A3A] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Accent background */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#4F7CFF]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={resetAndClose}
          className="absolute top-5 right-5 p-2 text-[#9AA5B1] hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="number-motif">01/01</span>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#4F7CFF]">Schedule a Strategy Session</span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">
              Let&apos;s build something that thinks, owns, or plays.
            </h3>
            <p className="text-sm text-[#9AA5B1] mb-6">
              Connect directly with RENOA&apos;s co-founders & engineering team in Kampala or schedule a call.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#9AA5B1] mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Mwangi"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#071019] border border-[#1C2A3A] rounded-xl text-white placeholder-[#627284] focus:outline-none focus:border-[#4F7CFF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#9AA5B1] mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-[#071019] border border-[#1C2A3A] rounded-xl text-white placeholder-[#627284] focus:outline-none focus:border-[#4F7CFF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#9AA5B1] mb-1">
                  System Architecture Focus
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 bg-[#071019] border border-[#1C2A3A] rounded-xl text-white focus:outline-none focus:border-[#4F7CFF] transition-colors"
                >
                  <option value="Agentic AI System">Agentic AI & LLM Automation</option>
                  <option value="Web3 & On-Chain System">Web3 & On-Chain Infrastructure</option>
                  <option value="Gamified Product Experience">Gamified Product Systems</option>
                  <option value="Custom Web/App Platform">Custom Web / Mobile Platform</option>
                  <option value="ICT & Technical Audit">ICT Consultation & Technical Audit</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#9AA5B1] mb-1">
                  Project Brief / Goals
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about the problem you want to solve..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#071019] border border-[#1C2A3A] rounded-xl text-white placeholder-[#627284] focus:outline-none focus:border-[#4F7CFF] transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#4F7CFF] hover:bg-[#3B66E6] text-white font-semibold rounded-xl transition-all shadow-lg shadow-[#4F7CFF]/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
                
                <a
                  href="https://cal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/5 hover:bg-white/10 border border-[#1C2A3A] text-white font-semibold rounded-xl transition-colors"
                >
                  <Calendar className="w-4 h-4 text-[#4F7CFF]" />
                  <span>Book via Cal.com</span>
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#4F7CFF]/10 text-[#4F7CFF] border border-[#4F7CFF]/30 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
            <p className="text-sm text-[#9AA5B1] max-w-md mx-auto">
              Thank you, <span className="text-white font-medium">{formData.name}</span>. The RENOA engineering team in Kampala has received your request and will follow up within 24 hours.
            </p>
            <button
              onClick={resetAndClose}
              className="mt-4 px-6 py-3 bg-[#4F7CFF] hover:bg-[#3B66E6] text-white font-semibold rounded-xl transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
