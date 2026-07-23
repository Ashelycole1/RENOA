"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Sparkles, MapPin, Clock, ArrowUpRight, Zap, Globe2, ShieldCheck, HeartHandshake } from "lucide-react";

const OPEN_ROLES = [
  {
    id: "ai-engineer",
    title: "Senior AI / LLM Systems Engineer",
    department: "Intelligence & Automation",
    location: "Kampala / Remote (East Africa)",
    type: "Full-Time",
    description:
      "Lead the engineering of autonomous agentic workflows, constitutional RAG pipelines, and LLM orchestration systems for enterprise and startup clients.",
  },
  {
    id: "fullstack-dev",
    title: "Full-Stack Next.js / Web3 Developer",
    department: "Web & Platform Engineering",
    location: "Kampala / Remote",
    type: "Full-Time",
    description:
      "Architect production-grade web platforms and mobile integrations with Next.js 14, TypeScript, Mobile Money APIs, and smart contract layers.",
  },
  {
    id: "product-designer",
    title: "Lead Product Designer (UI/UX)",
    department: "Design & Systems",
    location: "Kampala / Remote",
    type: "Full-Time",
    description:
      "Craft high-contrast dark themes, spatial 3D micro-interactions, identity systems, and high-conversion UX for agentic AI and Web3 platforms.",
  },
];

const CULTURE_BENEFITS = [
  {
    title: "High Autonomy",
    desc: "We operate with clear outputs and high ownership, not micromanagement.",
    icon: Zap,
  },
  {
    title: "Kampala & Remote",
    desc: "Collaborate in-person at our Kampala studio or work remotely across East Africa.",
    icon: Globe2,
  },
  {
    title: "Cutting-Edge Stack",
    desc: "Ship code using Next.js 14, Agentic RAG, Gemini 2.5, Mobile Money APIs, and Web3.",
    icon: ShieldCheck,
  },
  {
    title: "Co-Founder Mindset",
    desc: "Direct access to leadership and long-term project upside on products we ship.",
    icon: HeartHandshake,
  },
];

export default function CareersPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [appliedRole, setAppliedRole] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#071019] text-[#F5F7FA] selection:bg-[#4F7CFF] selection:text-white">
      <Nav onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-32 pb-24">
        <div className="container space-y-20">
          {/* Header */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4F7CFF]/10 border border-[#4F7CFF]/30 text-xs font-semibold text-[#7097FF]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>JOIN RENOA</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Build the future of software in Kampala.
            </h1>

            <p className="text-lg text-[#9AA5B1] leading-relaxed">
              We are an adaptive team building systems that think, own, and play. We look for engineers and designers who care about technical depth and shipped business outcome.
            </p>
          </div>

          {/* Culture Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CULTURE_BENEFITS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-[#0F1B29] border border-[#1C2A3A] rounded-2xl p-6 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#071019] border border-[#1C2A3A] flex items-center justify-center text-[#4F7CFF]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-[#9AA5B1] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Open Positions Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-[#1C2A3A] pb-4">
              <div>
                <span className="number-motif">OPEN ROLES</span>
                <h2 className="text-2xl font-bold text-white mt-1">Available Positions</h2>
              </div>
              <span className="text-xs font-mono text-[#627284]">3 ROLES CURRENTLY OPEN</span>
            </div>

            <div className="space-y-4">
              {OPEN_ROLES.map((role) => (
                <div
                  key={role.id}
                  className="bg-[#0F1B29] border border-[#1C2A3A] hover:border-[#4F7CFF]/50 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all"
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#9AA5B1]">
                      <span className="badge-tag">{role.department}</span>
                      <span className="flex items-center gap-1 font-mono text-[#627284]">
                        <MapPin className="w-3.5 h-3.5" />
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[#627284]">
                        <Clock className="w-3.5 h-3.5" />
                        {role.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white">{role.title}</h3>
                    <p className="text-sm text-[#9AA5B1]">{role.description}</p>
                  </div>

                  <div>
                    {appliedRole === role.id ? (
                      <span className="px-4 py-2.5 bg-[#4F7CFF]/20 text-[#00F0FF] border border-[#00F0FF]/30 font-semibold rounded-xl text-xs inline-block">
                        Application Sent ✓
                      </span>
                    ) : (
                      <button
                        onClick={() => setSelectedRole(role.id)}
                        className="inline-flex items-center gap-1.5 px-5 py-3 bg-[#4F7CFF] hover:bg-[#3B66E6] text-white font-semibold rounded-xl transition-all text-sm group"
                      >
                        <span>Apply Position</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Role Application Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#0F1B29] border border-[#1C2A3A] rounded-2xl p-6 sm:p-8 max-w-md w-full space-y-4">
            <h3 className="text-xl font-bold text-white">Apply for Position</h3>
            <p className="text-sm text-[#9AA5B1]">
              Submit your portfolio or GitHub link directly to the RENOA team.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setAppliedRole(selectedRole);
                setSelectedRole(null);
              }}
              className="space-y-3"
            >
              <input
                type="text"
                required
                placeholder="Full Name"
                className="w-full px-4 py-2.5 bg-[#071019] border border-[#1C2A3A] rounded-xl text-white text-sm"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full px-4 py-2.5 bg-[#071019] border border-[#1C2A3A] rounded-xl text-white text-sm"
              />
              <input
                type="url"
                required
                placeholder="GitHub / Portfolio URL"
                className="w-full px-4 py-2.5 bg-[#071019] border border-[#1C2A3A] rounded-xl text-white text-sm"
              />
              <textarea
                rows={3}
                placeholder="Brief intro or recent projects built..."
                className="w-full px-4 py-2.5 bg-[#071019] border border-[#1C2A3A] rounded-xl text-white text-sm resize-none"
              />
              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-[#4F7CFF] text-white font-semibold rounded-xl text-sm"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedRole(null)}
                  className="px-4 py-2.5 bg-white/5 text-[#9AA5B1] rounded-xl text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}
