"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 py-3 transition-all duration-300 md:px-6 md:py-4 ${
        scrolled
          ? "border-b border-white/10 bg-[#0F0A1F]/70 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <Link
        href="/"
        className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F0A1F] rounded-lg"
      >
        {/* Logo */}
        {logoError ? (
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(124,58,237,0.8)]"></div>
          </div>
        ) : (
          <Image
            src="/logo.png"
            alt="AscendBet Logo"
            width={160}
            height={48}
            className="h-8 w-auto md:h-10"
            priority
            onError={() => setLogoError(true)}
          />
        )}

        {/* Brand Text */}
        <div className="flex flex-col leading-tight">
          <span
            className="text-sm md:text-lg tracking-widest text-purple-300"
            style={{ fontFamily: "Orbitron" }}
          >
            ASCENDBET
          </span>

          <span className="hidden sm:block text-[10px] md:text-xs text-purple-300 drop-shadow-[0_0_6px_rgba(124,58,237,0.6)]">
  Get Funded to Bet.
</span>
        </div>
      <button
  onClick={() =>
    document.getElementById("waitlist")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="rounded-xl bg-[#7C3AED] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6d28d9] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F0A1F] active:scale-[0.98] md:px-6 md:py-3 md:text-base"
>
  Join Waitlist
</button>
    </header>
  );
}
