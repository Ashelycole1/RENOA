"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Client Project",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#111827] selection:bg-[#0F6B3C] selection:text-white flex flex-col justify-between">
      <Nav onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-32 pb-24">
        <div className="container max-w-4xl">
          <div className="space-y-3 mb-12">
            <span className="eyebrow">CONTACT RENOA</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#111827] tracking-tight">
              Let&apos;s build something that means business.
            </h1>
            <p className="text-lg text-[#4B5563]">
              Reach out directly to our engineering team in Kampala for system architecture inquiries, partnerships, or project consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Direct Contact Info */}
            <div className="lg:col-span-5 card-light p-8 space-y-6">
              <h3 className="text-xl font-bold text-[#111827]">Direct Contact</h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#0F6B3C] mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-[#6B7280]">EMAIL</div>
                    <a href="mailto:hello@renoa.dev" className="text-[#111827] hover:text-[#0F6B3C] font-semibold">
                      hello@renoa.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0F6B3C] mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-[#6B7280]">HQ LOCATION</div>
                    <p className="text-[#111827] font-semibold">Kampala, Uganda</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#0000000d]">
                <button
                  onClick={() => setBookingOpen(true)}
                  className="btn-secondary w-full justify-center"
                >
                  Schedule Cal.com Booking
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 card-light p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-[#111827] mb-2">Project Inquiry</h3>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4B5563] mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#fdfdfd] border border-[#0000001a] rounded-xl text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0F6B3C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4B5563] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#fdfdfd] border border-[#0000001a] rounded-xl text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0F6B3C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#4B5563] mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about what you want to build..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#fdfdfd] border border-[#0000001a] rounded-xl text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:border-[#0F6B3C] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center py-3.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#0F6B3C] mx-auto" />
                  <h3 className="text-xl font-bold text-[#111827]">Message Sent</h3>
                  <p className="text-sm text-[#4B5563]">
                    Thank you! The RENOA team will respond within 24 hours.
                  </p>
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
