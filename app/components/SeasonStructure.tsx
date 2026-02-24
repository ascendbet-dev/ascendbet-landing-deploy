"use client";

import { useRef, useEffect, useState } from "react";

const ITEMS = [
  "Up to 21 Day Evaluation Window",
  "₦100,000 Starting Balance",
  "Target: ₦120,000",
  "Disqualification Floor: ₦88,000",
  "Minimum 20 Settled Bets",
  "At least 8 Active Betting Days",
  "Max 3 Bets Per Day",
  "Pre-match Bets Only",
];

export default function SeasonStructure() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const direction = useRef(1);
  const [inView, setInView] = useState(false);

  const pages = [ITEMS.slice(0, 4), ITEMS.slice(4, 8)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      if (index === pages.length - 1) direction.current = -1;
      if (index === 0) direction.current = 1;

      const next = index + direction.current;

      setIndex(next);
      scrollRef.current.scrollTo({
        left: scrollRef.current.offsetWidth * next,
        behavior: "smooth",
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [index, inView]);

  return (
    <section ref={sectionRef} className="px-5 py-16 md:py-24 md:px-8">
      {/* SAME WIDTH AS HOW IT WORKS */}
      <div className="mx-auto max-w-2xl">
        {/* LEFT ALIGNED HEADING */}
        <h2
          className="text-2xl md:text-3xl text-purple-200 tracking-tight text-left"
          style={{ fontFamily: "Sora" }}
        >
          Season Structure
        </h2>

        {/* MOBILE SLIDER */}
        <div className="relative md:hidden mt-10">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-[#0F0A1F] to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-[#0F0A1F] to-transparent z-10" />

          <div
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar"
          >
            {pages.map((group, i) => (
              <div
                key={i}
                className="min-w-full grid grid-cols-2 gap-4 snap-start px-1"
              >
                {group.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col justify-center rounded-xl border border-purple-500/20 bg-white/5 p-4 backdrop-blur-md shadow-[0_0_20px_rgba(124,58,237,0.15)] h-[100px]"
                  >
                    <span className="mb-2 h-2 w-2 rounded-full bg-[#7C3AED] shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
                    <p className="text-sm text-zinc-200 leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* DOT INDICATOR */}
          <div className="mt-4 flex justify-center gap-2">
            {pages.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full ${
                  index === i
                    ? "bg-purple-500 shadow-[0_0_10px_rgba(124,58,237,0.8)]"
                    : "bg-zinc-600"
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP GRID */}
        <ul className="mt-10 hidden md:grid md:grid-cols-3 gap-3 text-zinc-300">
          {ITEMS.map((item, i) => (
            <li
              key={i}
              className="flex flex-col justify-center rounded-xl border border-purple-500/20 bg-white/5 p-4 backdrop-blur-md shadow-[0_0_15px_rgba(124,58,237,0.12)] h-[90px] hover:scale-[1.02] transition"
            >
              <span className="mb-2 h-2 w-2 rounded-full bg-[#7C3AED] shadow-[0_0_10px_rgba(124,58,237,0.8)]" />
              <p className="text-zinc-200 leading-snug text-sm">
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}