"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import Process from "@/components/Process";
import Capabilities from "@/components/Capabilities";
import TeamStrip from "@/components/TeamStrip";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#071019] text-[#F5F7FA] selection:bg-[#4F7CFF] selection:text-white">
      {/* Top Navbar */}
      <Nav onOpenBooking={() => setBookingOpen(true)} />

      {/* Hero Section */}
      <main>
        <Hero onOpenBooking={() => setBookingOpen(true)} />

        {/* Selected Work — 3-Card Grid + 01/03 Counter */}
        <WorkGrid />

        {/* Process — 4 Steps + Named Outputs */}
        <Process />

        {/* Capabilities — 4 Pillars */}
        <Capabilities />

        {/* Team Strip — 6 Co-Founders */}
        <TeamStrip />

        {/* CTA Band */}
        <CTABand onOpenBooking={() => setBookingOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking / Lead intake Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
