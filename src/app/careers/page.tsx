"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Mail, MapPin, Clock, ArrowUpRight, Zap, Globe2, ShieldCheck } from "lucide-react";

const ROLES = [
  {
    id: "ai-engineer",
    title: "Senior AI / LLM Systems Engineer",
    dept: "Intelligence & Automation",
    location: "Kampala / Remote",
    type: "Full-Time",
    desc: "Lead engineering of autonomous agentic workflows, constitutional RAG pipelines, and LLM orchestration systems.",
  },
  {
    id: "fullstack-dev",
    title: "Full-Stack Next.js Developer",
    dept: "Engineering",
    location: "Kampala / Remote",
    type: "Full-Time",
    desc: "Architect production-grade platforms with Next.js, TypeScript, Mobile Money integrations, and scalable APIs.",
  },
  {
    id: "product-designer",
    title: "Lead Product Designer",
    dept: "Design",
    location: "Kampala / Remote",
    type: "Full-Time",
    desc: "Craft clean interface systems, 3D visual language, and high-conversion UX across East Africa.",
  },
];

export default function CareersPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [applied, setApplied] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-white text-[#0a0a0a]">
      <Nav onOpenBooking={() => setBookingOpen(true)} />

      <main className="pt-32 pb-24">
        <div className="wrapper space-y-20">
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="label">CAREERS</span>
              <h1 className="text-5xl lg:text-6xl font-bold text-[#0a0a0a] tracking-tight">
                We hire people who <span className="text-[#0F6B3C]">ship.</span>
              </h1>
              <p className="text-lg text-[#525252] leading-relaxed max-w-md">
                We do not always publish open roles. We are always looking for exceptional talent with proof of work, strong taste, and the ability to turn ideas into shipped products.
              </p>
              <a href="mailto:hello@renoa.dev" className="btn btn-fill self-start">
                <Mail className="w-4 h-4" /> Contact Talent Team
              </a>
            </div>

            {/* Reused 3D Isometric Stack Graphic per Section 5.8 */}
            <div className="flex items-center justify-center">
              <svg
                viewBox="0 0 520 480"
                className="w-full max-w-[420px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Orbit ring */}
                <ellipse
                  cx="260"
                  cy="200"
                  rx="200"
                  ry="85"
                  stroke="#0F6B3C"
                  strokeOpacity="0.25"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                />
                {/* Vertical stem */}
                <line x1="260" y1="60" x2="260" y2="148" stroke="#0F6B3C" strokeOpacity="0.35" strokeWidth="1.5" />

                {/* Globe */}
                <g transform="translate(260,140)">
                  <circle cx="0" cy="0" r="46" fill="#0F6B3C" />
                  <ellipse cx="0" cy="0" rx="46" ry="20" stroke="#fff" strokeWidth="1" fill="none" strokeOpacity="0.5" />
                  <ellipse cx="0" cy="0" rx="22" ry="46" stroke="#fff" strokeWidth="1" fill="none" strokeOpacity="0.5" />
                  <line x1="-46" y1="0" x2="46" y2="0" stroke="#fff" strokeWidth="1" strokeOpacity="0.5" />
                </g>

                {/* ── Layer: LAUNCH (bottom) ── */}
                <polygon points="100,360 260,440 420,360 260,280" fill="#0B5230" />
                <polygon points="100,360 260,440 260,470 100,390" fill="#052E1A" />
                <polygon points="260,440 420,360 420,390 260,470" fill="#083D22" />
                <text
                  x="190" y="388"
                  fill="#ffffff" fillOpacity="0.9"
                  fontSize="18" fontFamily="Space Grotesk, sans-serif"
                  fontStyle="italic" fontWeight="600"
                  transform="rotate(-26.5 190 388)"
                >Launch</text>

                {/* ── Layer: BUILD (middle) ── */}
                <polygon points="100,305 260,385 420,305 260,225" fill="#0F6B3C" />
                <polygon points="100,305 260,385 260,360 100,280" fill="#052E1A" />
                <polygon points="260,385 420,305 420,330 260,410" fill="#0A5030" />
                <text
                  x="200" y="335"
                  fill="#ffffff" fillOpacity="0.9"
                  fontSize="18" fontFamily="Space Grotesk, sans-serif"
                  fontStyle="italic" fontWeight="600"
                  transform="rotate(-26.5 200 335)"
                >Build</text>

                {/* ── Layer: DESIGN (top) ── */}
                <polygon points="100,250 260,330 420,250 260,170" fill="#14844A" />
                <polygon points="100,250 260,330 260,305 100,225" fill="#0B5230" />
                <polygon points="260,330 420,250 420,275 260,355" fill="#0F6B3C" />
                <text
                  x="190" y="282"
                  fill="#ffffff" fillOpacity="0.9"
                  fontSize="18" fontFamily="Space Grotesk, sans-serif"
                  fontStyle="italic" fontWeight="600"
                  transform="rotate(-26.5 190 282)"
                >Design</text>

                {/* Small satellite cube */}
                <rect x="408" y="390" width="32" height="32" rx="6" fill="#0F6B3C" />
                <rect x="408" y="390" width="32" height="32" rx="6" stroke="#fff" strokeWidth="1" fill="none" strokeOpacity="0.4" />
                <circle cx="420" cy="402" r="2.5" fill="#fff" fillOpacity="0.7" />
                <circle cx="428" cy="410" r="2.5" fill="#fff" fillOpacity="0.7" />
              </svg>
            </div>
          </div>

          {/* Open Roles */}
          <div className="space-y-6">
            <div className="flex items-end justify-between border-b border-[#e5e5e5] pb-5">
              <div className="space-y-1">
                <span className="label">Open Roles</span>
                <h2 className="text-2xl font-bold text-[#0a0a0a]">Current Opportunities</h2>
              </div>
              <span className="text-xs font-mono text-[#a3a3a3]">{ROLES.length} openings</span>
            </div>

            <div className="space-y-3">
              {ROLES.map((role) => (
                <div
                  key={role.id}
                  className="card p-6 flex flex-col md:flex-row md:items-center justify-between gap-5 hover:border-[#0F6B3C]/40"
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#a3a3a3]">
                      <span className="tag">{role.dept}</span>
                      <span className="flex items-center gap-1 font-mono">
                        <MapPin className="w-3 h-3 text-[#0F6B3C]" /> {role.location}
                      </span>
                      <span className="flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3 text-[#0F6B3C]" /> {role.type}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0a0a0a]">{role.title}</h3>
                    <p className="text-sm text-[#525252]">{role.desc}</p>
                  </div>

                  {applied === role.id ? (
                    <span className="px-4 py-2 bg-[#E6F2EC] text-[#0F6B3C] text-xs font-semibold rounded-lg shrink-0">
                      Application sent ✓
                    </span>
                  ) : (
                    <button
                      onClick={() => setSelectedRole(role.id)}
                      className="btn btn-fill shrink-0 self-start md:self-auto"
                    >
                      Apply <ArrowUpRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Application modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
          <div className="bg-white border border-[#e5e5e5] rounded-2xl p-8 max-w-md w-full space-y-4 shadow-xl">
            <h3 className="text-xl font-bold text-[#0a0a0a]">Apply for Position</h3>
            <p className="text-sm text-[#525252]">
              Submit your portfolio or GitHub link to the RENOA team.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setApplied(selectedRole);
                setSelectedRole(null);
              }}
              className="space-y-3"
            >
              {["Full Name", "Email Address", "GitHub / Portfolio URL"].map((ph, i) => (
                <input
                  key={ph}
                  type={i === 1 ? "email" : i === 2 ? "url" : "text"}
                  required
                  placeholder={ph}
                  className="w-full px-4 py-2.5 bg-[#fafafa] border border-[#e5e5e5] rounded-lg text-sm text-[#0a0a0a] placeholder-[#a3a3a3] focus:outline-none focus:border-[#0F6B3C] transition-colors"
                />
              ))}
              <textarea
                rows={3}
                placeholder="Recent products shipped or brief intro..."
                className="w-full px-4 py-2.5 bg-[#fafafa] border border-[#e5e5e5] rounded-lg text-sm text-[#0a0a0a] placeholder-[#a3a3a3] resize-none focus:outline-none focus:border-[#0F6B3C] transition-colors"
              />
              <div className="flex gap-3 pt-1">
                <button type="submit" className="flex-1 btn btn-fill justify-center">
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedRole(null)}
                  className="btn btn-outline"
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
