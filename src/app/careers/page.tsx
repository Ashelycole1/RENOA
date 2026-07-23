"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Mail, Layers, Code, Rocket, MapPin, Clock, ArrowUpRight, Zap, Globe2, ShieldCheck } from "lucide-react";

const OPEN_ROLES = [
  {
    id: "ai-engineer",
    title: "Senior AI / LLM Systems Engineer",
    department: "Intelligence & Automation",
    location: "Kampala / Remote",
    type: "Full-Time",
    description:
      "Lead the engineering of autonomous agentic workflows, constitutional RAG pipelines, and LLM orchestration systems.",
  },
  {
    id: "fullstack-dev",
    title: "Full-Stack Next.js Developer",
    department: "Engineering",
    location: "Kampala / Remote",
    type: "Full-Time",
    description:
      "Architect production-grade web platforms with Next.js 14, TypeScript, Mobile Money integrations, and scalable APIs.",
  },
  {
    id: "product-designer",
    title: "Lead Product Designer",
    department: "Design",
    location: "Kampala / Remote",
    type: "Full-Time",
    description:
      "Craft clean interface systems, 3D visual language, and high-conversion UX for platforms across East Africa.",
  },
];

export default function CareersPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [appliedRole, setAppliedRole] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#111827] selection:bg-[#0F6B3C] selection:text-white">
      <Nav onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-32 pb-24">
        <div className="container space-y-20">
          {/* Careers Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="eyebrow">CAREERS</span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] tracking-tight">
                We hire people who <span className="text-[#0F6B3C]">ship.</span>
              </h1>

              <p className="text-lg text-[#4B5563] leading-relaxed max-w-2xl">
                We do not always publish open roles. We are always looking for exceptional talent with proof of work, strong taste, and the ability to turn ideas into shipped products.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href="mailto:hello@renoa.dev"
                  className="btn-primary text-base px-7 py-4"
                >
                  <Mail className="w-4 h-4" />
                  <span>Contact Talent Team</span>
                </a>
              </div>
            </div>

            {/* Right Illustration Card */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-[#0000001a] rounded-2xl p-8 shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-[#0000000d] pb-4">
                  <span className="font-mono text-xs font-bold text-[#0F6B3C] uppercase tracking-wider">
                    TALENT SPECIFICATION
                  </span>
                  <span className="font-mono text-xs font-bold text-[#0F6B3C] bg-[#E4F3EA] px-2.5 py-0.5 rounded">
                    PROOF OF WORK
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="p-4 bg-[#f7f7f7] rounded-xl flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#0F6B3C] text-white flex items-center justify-center font-bold">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">High Ownership</h4>
                      <p className="text-xs text-[#4B5563]">Clear outputs, high autonomy</p>
                    </div>
                  </div>

                  <div className="p-4 bg-[#f7f7f7] rounded-xl flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#0F6B3C] text-white flex items-center justify-center font-bold">
                      <Globe2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">Kampala & Remote</h4>
                      <p className="text-xs text-[#4B5563]">East Africa and global markets</p>
                    </div>
                  </div>

                  <div className="p-4 bg-[#f7f7f7] rounded-xl flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-[#0F6B3C] text-white flex items-center justify-center font-bold">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">Engineering Depth</h4>
                      <p className="text-xs text-[#4B5563]">Production readiness & speed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Open Positions Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-[#0000000d] pb-4">
              <div>
                <span className="eyebrow">OPEN ROLES</span>
                <h2 className="text-2xl font-bold text-[#111827] mt-1">Current Opportunities</h2>
              </div>
              <span className="text-xs font-mono text-[#6B7280]">3 OPENINGS</span>
            </div>

            <div className="space-y-4">
              {OPEN_ROLES.map((role) => (
                <div
                  key={role.id}
                  className="card-light p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[#0F6B3C]/40"
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#6B7280]">
                      <span className="badge-tag">{role.department}</span>
                      <span className="flex items-center gap-1 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-[#0F6B3C]" />
                        {role.location}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <Clock className="w-3.5 h-3.5 text-[#0F6B3C]" />
                        {role.type}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#111827]">{role.title}</h3>
                    <p className="text-sm text-[#4B5563]">{role.description}</p>
                  </div>

                  <div>
                    {appliedRole === role.id ? (
                      <span className="px-4 py-2.5 bg-[#E4F3EA] text-[#0F6B3C] font-semibold rounded-xl text-xs inline-block">
                        Application Sent ✓
                      </span>
                    ) : (
                      <button
                        onClick={() => setSelectedRole(role.id)}
                        className="btn-primary text-sm px-5 py-3 group"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
          <div className="bg-white border border-[#0000001a] rounded-2xl p-6 sm:p-8 max-w-md w-full space-y-4 shadow-2xl">
            <h3 className="text-xl font-bold text-[#111827]">Apply for Position</h3>
            <p className="text-sm text-[#4B5563]">
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
                className="w-full px-4 py-2.5 bg-[#fdfdfd] border border-[#0000001a] rounded-xl text-[#111827] text-sm focus:outline-none focus:border-[#0F6B3C]"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full px-4 py-2.5 bg-[#fdfdfd] border border-[#0000001a] rounded-xl text-[#111827] text-sm focus:outline-none focus:border-[#0F6B3C]"
              />
              <input
                type="url"
                required
                placeholder="GitHub / Portfolio URL"
                className="w-full px-4 py-2.5 bg-[#fdfdfd] border border-[#0000001a] rounded-xl text-[#111827] text-sm focus:outline-none focus:border-[#0F6B3C]"
              />
              <textarea
                rows={3}
                placeholder="Brief intro or recent products shipped..."
                className="w-full px-4 py-2.5 bg-[#fdfdfd] border border-[#0000001a] rounded-xl text-[#111827] text-sm resize-none focus:outline-none focus:border-[#0F6B3C]"
              />
              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-[#0F6B3C] hover:bg-[#0B5230] text-white font-semibold rounded-xl text-sm transition-colors"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedRole(null)}
                  className="px-4 py-2.5 bg-[#f7f7f7] text-[#4B5563] rounded-xl text-sm"
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
