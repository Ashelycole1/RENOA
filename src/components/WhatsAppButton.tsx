"use client";

import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Show after initial mount delay as well
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const message = encodeURIComponent("Hi RENOA team! I would like to discuss a project.");
  // Ugandan WhatsApp business contact
  const whatsappUrl = `https://wa.me/256700000000?text=${message}`;

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with RENOA on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-lg transition-transform duration-200 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#2563EB]/30 active:scale-95"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute -inset-1 -z-10 animate-ping rounded-full bg-[#2563EB]/30 opacity-75 duration-1000" />

        {/* WhatsApp SVG Icon */}
        <svg
          className="h-7 w-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.146-.539-.81-.336-1.528-.863-2.125-1.46-1.077-1.077-1.637-2.348-1.637-3.285 0-1.042.544-1.554.741-1.764.198-.21.433-.263.578-.263.144 0 .289.006.417.012.137.006.321-.052.502.383.189.453.645 1.574.701 1.69.056.115.093.25.019.397-.075.147-.112.238-.223.368-.111.13-.233.29-.333.39-.111.111-.228.232-.098.455.13.223.579.957 1.242 1.548.854.761 1.575.998 1.8.1.223-.111.954-.954 1.209-.954.254 0 .509.119.764.246.255.127 1.621.764 1.899.903.278.139.463.208.532.327.069.119.069.691-.075 1.096z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.811.484 3.513 1.327 4.985L2 22l5.163-1.306A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.154c-1.602 0-3.12-.463-4.409-1.261l-.316-.197-3.268.827.872-3.186-.216-.339A8.118 8.118 0 013.846 12c0-4.496 3.658-8.154 8.154-8.154s8.154 3.658 8.154 8.154-3.658 8.154-8.154 8.154z" />
        </svg>

        {/* Floating tooltip */}
        <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#111] px-3 py-1.5 text-xs font-medium text-white shadow-md opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
