"use client";

import { motion } from "framer-motion";

const STEPS = [
  "Start with a ₦100,000 Virtual Account",
  "Place bets on real matches across up to 21 days",
  "Grow your balance to ₦120,000",
  "Without ever dropping below ₦88,000",
  "Qualify for real bookmaker-funded bonus accounts",
];

const PURPLE_GLOW = "0 0 25px rgba(124, 58, 237, 0.4)";

export default function HowItWorks() {
  return (
    <section className="border-t border-white/10 px-5 py-16 md:py-24 md:px-8">
      <div className="mx-auto max-w-2xl">
      <h2
  className="text-2xl md:text-3xl text-purple-200 tracking-tight"
  style={{ fontFamily: "Sora" }}
>
  How It Works
</h2>
        <ul className="mt-10 space-y-6">
          {STEPS.map((step, i) => (
            <motion.li
              key={i}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md md:p-6"
              whileHover={{
                scale: 1.03,
                y: -6,
                boxShadow: PURPLE_GLOW,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#7C3AED] text-sm font-semibold text-white">
                {i + 1}
              </span>
              <span className="text-base text-zinc-200 md:text-lg">{step}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
