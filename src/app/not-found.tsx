"use client";

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#071019] text-[#F5F7FA] flex flex-col justify-between">
      <Nav onOpenBooking={() => {}} />

      <main className="py-32 flex flex-col items-center justify-center text-center px-4">
        <div className="font-mono text-6xl font-extrabold text-[#4F7CFF] mb-4">404</div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Page Not Found</h1>
        <p className="text-[#9AA5B1] max-w-md mb-8">
          The requested system node does not exist or has been moved to a new route.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#4F7CFF] hover:bg-[#3B66E6] text-white font-semibold rounded-xl transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to RENOA</span>
        </Link>
      </main>

      <Footer />
    </div>
  );
}
