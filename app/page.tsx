import Link from "next/link";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import SeasonStructure from "./components/SeasonStructure";
import WaitlistForm from "./components/WaitlistForm";
import WhyAscendBet from "./components/WhyAscendBet";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <Hero />

      <HowItWorks />

      <SeasonStructure />

      <WhyAscendBet />

      {/* Waitlist Form */}
      <section
        id="waitlist"
        className="px-5 py-16 md:py-24 md:px-8"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Join the Waitlist
          </h2>
          <p className="mt-3 text-zinc-400">
            Get notified when the next season opens.
          </p>
          <div className="mt-10">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-5 py-8 md:px-8">
  <div className="mx-auto flex max-w-5xl items-center justify-center gap-6 text-sm">
    <Link
      href="/privacy"
      className="text-zinc-400 transition hover:text-[#7C3AED]"
    >
      Privacy Policy
    </Link>

    <span className="text-zinc-600">•</span>

    <Link
      href="/terms"
      className="text-zinc-400 transition hover:text-[#7C3AED]"
    >
      Terms of Service
    </Link>
  </div>
</footer>
    </div>
  );
}