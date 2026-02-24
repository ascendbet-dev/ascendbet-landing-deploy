const ITEMS = [
  "Rule-based performance evaluation",
  "Risk-controlled betting structure",
  "No upfront payment required",
  "Qualify for partner funding opportunities",
];

export default function WhyAscendBet() {
  return (
    <section className="border-t border-white/10 px-5 py-16 md:py-24 md:px-8">
      <div className="mx-auto max-w-2xl">
      <h2
  className="text-2xl md:text-3xl text-purple-200 tracking-tight"
  style={{ fontFamily: "Sora" }}
>
  Why AscendBet
</h2>
        <ul className="mt-10 space-y-4">
          {ITEMS.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md"
            >
              <span className="text-[#7C3AED]" aria-hidden>
                ✓
              </span>
              <span className="text-zinc-200">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
