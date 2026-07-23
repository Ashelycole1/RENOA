"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      <Nav onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-32 pb-24">
        <div className="wrapper max-w-4xl">
          <div className="space-y-3 mb-12">
            <span className="label">Contact RENOA</span>
            <h1 className="text-5xl font-bold text-[#0a0a0a] tracking-tight">
              Let&apos;s build something that means business.
            </h1>
            <p className="text-lg text-[#525252]">
              Reach out to our engineering team in Kampala for consultations, partnerships, or project inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Info column */}
            <div className="lg:col-span-2 card p-7 space-y-6 h-fit">
              <h3 className="text-lg font-bold text-[#0a0a0a]">Direct Contact</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#0F6B3C] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono text-[#a3a3a3] uppercase mb-0.5">Email</p>
                    <a href="mailto:hello@renoa.dev" className="font-medium text-[#0a0a0a] hover:text-[#0F6B3C] transition-colors">
                      hello@renoa.dev
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#0F6B3C] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] font-mono text-[#a3a3a3] uppercase mb-0.5">Location</p>
                    <p className="font-medium text-[#0a0a0a]">Kampala, Uganda</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-[#e5e5e5]">
                <button
                  onClick={() => setBookingOpen(true)}
                  className="btn btn-outline w-full justify-center"
                >
                  Schedule via Cal.com
                </button>
              </div>
            </div>

            {/* Form column */}
            <div className="lg:col-span-3 card p-7">
              {!submitted ? (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <h3 className="text-lg font-bold text-[#0a0a0a] mb-2">Project Inquiry</h3>
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
                    <label className="block text-xs font-semibold text-[#525252] mb-1 uppercase tracking-wider">Message</label>
                    <textarea
                      rows={5} required
                      placeholder="Tell us what you want to build..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#fafafa] border border-[#e5e5e5] rounded-lg text-sm text-[#0a0a0a] placeholder-[#a3a3a3] focus:outline-none focus:border-[#0F6B3C] transition-colors resize-none"
                    />
                  </div>
                  <button type="submit" className="btn btn-fill w-full justify-center">
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-[#E6F2EC] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7 text-[#0F6B3C]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0a0a0a]">Message sent!</h3>
                  <p className="text-sm text-[#525252]">The RENOA team will respond within 24 hours.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
