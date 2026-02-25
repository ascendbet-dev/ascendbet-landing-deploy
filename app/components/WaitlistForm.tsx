"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("waitlist").insert([
      {
        first_name: Name,
        email: email,
      },
    ]);

    if (error) {
      alert("This email may already exist or something went wrong.");
      setLoading(false);
      return;
    }

    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-md">
        <p className="text-lg font-medium text-white leading-relaxed">
          You&apos;re in. Season invites will be sent before the next evaluation
          window opens.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-sm mx-auto"
    >
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-zinc-400 backdrop-blur-md transition focus:border-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-zinc-400 backdrop-blur-md transition focus:border-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/30"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl bg-[#7C3AED] px-6 py-3.5 font-semibold text-white transition hover:bg-[#6d28d9] active:scale-[0.98] disabled:opacity-60"
      >
        {loading ? "Joining..." : "Join Waitlist"}
      </button>
    </form>
  );
}
