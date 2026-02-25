"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MIN = 88000;
const START = 100000;
const MAX = 120000;
const RANGE = MAX - MIN;
const START_PCT = ((START - MIN) / RANGE) * 100;

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] overflow-hidden px-4 pt-12 pb-20 md:min-h-[90dvh] md:px-6 md:pt-16 md:pb-28">
      {/* Subtle radial glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124, 58, 237, 0.2) 0%, transparent 70%)",
        }}
      />

      {/* Floating blur orbs */}
      <div className="pointer-events-none absolute inset-0 -z-[1] overflow-hidden">
        <motion.div
          className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#7c3aed] opacity-20 blur-[100px]"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-24 top-1/2 h-80 w-80 rounded-full bg-[#5b21b6] opacity-15 blur-[80px]"
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 h-64 w-64 rounded-full bg-[#7c3aed] opacity-10 blur-[70px]"
          animate={{ x: [0, 20, 0], y: [0, 25, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mx-auto flex min-h-[80dvh] max-w-2xl flex-col items-center justify-center md:min-h-[85dvh]">
        <motion.div
          className="relative z-10 w-full max-w-xl rounded-3xl border border-white/10 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_4px_24px_rgba(0,0,0,0.4),0_0_60px_-12px_rgba(124,58,237,0.25)] md:p-8 overflow-hidden"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Performance Line (now INSIDE card) */}
          <div className="absolute inset-0 opacity-20">
            <svg
              viewBox="0 0 800 400"
              className="absolute w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 300 C 150 260, 250 200, 400 220 S 650 120, 800 80"
                fill="none"
                stroke="#7C3AED"
                strokeWidth="2"
                strokeDasharray="1000"
                strokeDashoffset="1000"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="1000"
                  to="0"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>

          {/* Glass overlay */}
          <div className="absolute inset-0 bg-white/5 backdrop-blur-md" />

          {/* Actual content */}
          <div className="relative z-10">
            <h1 className="text-center text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl md:leading-tight">
              Join the Free 14 – 21 Days Virtual Betting Challenge
            </h1>

            <p className="mt-4 text-center text-sm text-zinc-200 sm:text-base md:mt-5 md:text-lg">
              Bet on Real football matches using real odds. Top disciplined
              performers qualify for partner-funded bonus betting accounts.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs sm:text-sm">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md">
                <span className="text-zinc-400">Starting</span>
                <p className="font-semibold text-white">₦100,000</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md">
                <span className="text-zinc-400">Target</span>
                <p className="font-semibold text-emerald-400">₦120,000</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-md">
                <span className="text-zinc-400">DD Floor</span>
                <p className="font-semibold text-red-400">₦88,000</p>
              </div>
            </div>

            <div className="mt-6">
              <div className="relative h-3 w-full overflow-hidden rounded-full bg-white/10">
                <div className="absolute top-0 z-10 h-full w-1 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.7)]" />
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-[#7c3aed] to-emerald-500"
                  initial={{ width: `${START_PCT}%` }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1.8,
                    delay: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
              <div className="mt-1.5 flex justify-between text-[10px] text-zinc-400 sm:text-xs">
                <span>₦88k</span>
                <span>₦120k</span>
              </div>
            </div>

          <div className="mt-8 flex justify-center">
  <motion.button
    onClick={() =>
      document.getElementById("waitlist")?.scrollIntoView({
        behavior: "smooth",
      })
    }
    className="rounded-xl bg-[#7c3aed] px-8 py-3.5 font-semibold text-white shadow-[0_4px_14px_rgba(124,58,237,0.4)] hover:shadow-[0_4px_24px_rgba(124,58,237,0.5),0_0_32px_6px_rgba(124,58,237,0.3)]"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 400, damping: 20 }}
  >
    Join the Waitlist
  </motion.button>
</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
