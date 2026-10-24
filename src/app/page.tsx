"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhoWeHelp from "@/components/WhoWeHelp";
import WorkGrid from "@/components/WorkGrid";
import Process from "@/components/Process";
import Capabilities from "@/components/Capabilities";
import Differentiators from "@/components/Differentiators";
import TechStackStrip from "@/components/TechStackStrip";
import Testimonials from "@/components/Testimonials";
import TeamStrip from "@/components/TeamStrip";
import FAQSection from "@/components/FAQSection";
import CTABand from "@/components/CTABand";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#111827] selection:bg-[#2563EB] selection:text-white">
      {/* Top Navbar */}
      <Nav onOpenBooking={() => setBookingOpen(true)} />

      {/* Main content flow */}
      <main>
        {/* Hero with live proof strip */}
        <Hero onOpenBooking={() => setBookingOpen(true)} />

        {/* Who We Build For */}
        <WhoWeHelp />

        {/* Selected Work — 3-Card Grid + 01/03 Counter */}
        <WorkGrid />

        {/* Process — 4 Steps + Outputs + Durations */}
        <Process />

        {/* Capabilities — 5 Core Pillars */}
        <Capabilities />

        {/* Why RENOA — Key Differentiators */}
        <Differentiators />

        {/* Tech Stack Strip */}
        <TechStackStrip />

        {/* Social Proof & Testimonials */}
        <Testimonials />

        {/* Leadership Team Strip — 6 Co-Founders in Kampala */}
        <TeamStrip />

        {/* Top FAQs Preview */}
        <FAQSection limit={5} />

        {/* Closing CTA Band */}
        <CTABand onOpenBooking={() => setBookingOpen(true)} />
      </main>

      {/* 4-Column Footer */}
      <Footer />

      {/* Global Floating WhatsApp shortcut */}
      <WhatsAppButton />

      {/* Booking / Lead intake Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
