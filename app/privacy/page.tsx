import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen text-white">
      <main className="px-5 py-24 md:py-32 md:px-8">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="mb-8 inline-block text-sm text-zinc-400 transition hover:text-[#7C3AED]"
          >
            ← Back to home
          </Link>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-zinc-500">Last Updated: February 24, 2025</p>

          <div className="mt-10 space-y-10 text-zinc-300">
            <section>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Information We Collect
              </h2>
              <p className="mt-3 leading-relaxed">
                We collect the following information when you join our waitlist or participate in our services:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
                <li>First Name</li>
                <li>Email Address</li>
                <li>Optional Phone Number</li>
                <li>Date of Birth</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                How We Use Your Information
              </h2>
              <p className="mt-3 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="mt-3 list-inside list-disc space-y-1 pl-2">
                <li>Send waitlist communication and updates</li>
                <li>Grant and manage evaluation season access</li>
                <li>Notify you about platform updates and new seasons</li>
                <li>Support partner onboarding when you qualify</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Data Security
              </h2>
              <p className="mt-3 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We do not sell your personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Third-Party Services
              </h2>
              <p className="mt-3 leading-relaxed">
                Our platform may direct you to partner bookmakers for funded account opportunities. Partner bookmakers handle full KYC (Know Your Customer) and identity verification independently. We encourage you to review their privacy policies when you engage with them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Contact Information
              </h2>
              <p className="mt-3 leading-relaxed">
                For questions about this Privacy Policy or your personal data, contact us at{" "}
                <a
                  href="mailto:support@ascendbet.com"
                  className="text-[#7C3AED] underline transition hover:text-[#8B5CF6]"
                >
                  support@ascendbet.com
                </a>
                .
              </p>
            </section>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <Link
              href="/terms"
              className="text-zinc-400 transition hover:text-[#7C3AED]"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
