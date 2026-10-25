"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import WhatsAppButton from "@/components/WhatsAppButton";
import LeadershipContainers from "@/components/LeadershipContainers";

export default function LeadershipPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[#111827]">
      <Nav onOpenBooking={() => setBookingOpen(true)} />
      <main className="pt-28 pb-20">
        <div className="wrapper max-w-[1160px]">
          {/* Container structure from snippet without images, title, or blue background */}
          <LeadershipContainers />
        </div>
      </main>
      <Footer />
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
      <WhatsAppButton />
    </div>
  );
}
