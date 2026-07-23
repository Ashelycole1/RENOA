"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fdfdfd] text-[#111827] flex flex-col justify-between selection:bg-[#0F6B3C] selection:text-white">
      <Nav onOpenBooking={() => {}} />

      <main className="py-32 flex flex-col items-center justify-center text-center px-4">
        <div className="font-mono text-6xl font-extrabold text-[#0F6B3C] mb-4">404</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#111827] mb-2">Page Not Found</h1>
        <p className="text-[#4B5563] max-w-md mb-8">
          The requested system node does not exist or has been moved to a new route.
        </p>
        <Link
          href="/"
          className="btn-primary"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to RENOA</span>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
