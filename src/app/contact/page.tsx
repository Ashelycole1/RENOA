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
    <div className="min-h-screen bg-[#071019] text-[#F5F7FA] selection:bg-[#4F7CFF] selection:text-white flex flex-col justify-between">
      <Nav onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-32 pb-24">
        <div className="container max-w-4xl">
          <div className="space-y-3 mb-12">
            <span className="number-motif">CONTACT RENOA</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Let&apos;s build something extraordinary.
            </h1>
            <p className="text-lg text-[#9AA5B1]">
              Reach out directly to our engineering team in Kampala for system architecture inquiries, partnerships, or project consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Direct Contact Info */}
            <div className="lg:col-span-5 bg-[#0F1B29] border border-[#1C2A3A] rounded-2xl p-8 space-y-6">
              <h3 className="text-xl font-bold text-white">Direct Contact</h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#4F7CFF] mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-[#627284]">EMAIL</div>
                    <a href="mailto:hello@renoa.dev" className="text-white hover:text-[#4F7CFF] font-medium">
                      hello@renoa.dev
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#4F7CFF] mt-0.5" />
                  <div>
                    <div className="text-xs font-mono text-[#627284]">HQ LOCATION</div>
                    <p className="text-white font-medium">Kampala, Uganda</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#1C2A3A]">
                <button
                  onClick={() => setBookingOpen(true)}
                  className="w-full py-3 bg-white/5 hover:bg-white/10 border border-[#1C2A3A] text-white font-semibold rounded-xl text-sm transition-colors"
                >
                  Schedule Cal.com Booking
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7 bg-[#0F1B29] border border-[#1C2A3A] rounded-2xl p-8">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-2">Project Inquiry</h3>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#9AA5B1] mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#071019] border border-[#1C2A3A] rounded-xl text-white placeholder-[#627284] focus:outline-none focus:border-[#4F7CFF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#9AA5B1] mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#071019] border border-[#1C2A3A] rounded-xl text-white placeholder-[#627284] focus:outline-none focus:border-[#4F7CFF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#9AA5B1] mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about what you want to build..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#071019] border border-[#1C2A3A] rounded-xl text-white placeholder-[#627284] focus:outline-none focus:border-[#4F7CFF] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#4F7CFF] hover:bg-[#3B66E6] text-white font-semibold rounded-xl transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#4F7CFF] mx-auto" />
                  <h3 className="text-xl font-bold text-white">Message Sent</h3>
                  <p className="text-sm text-[#9AA5B1]">
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
