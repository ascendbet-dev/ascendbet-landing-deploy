import Link from "next/link";

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-zinc-500">Last Updated: February 24, 2025</p>

          <div className="mt-10 space-y-10 text-zinc-300">
            <section>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Evaluation Platform
              </h2>
              <p className="mt-3 leading-relaxed">
                AscendBet provides a virtual betting challenge using virtual funds only. No real money is required to participate in the evaluation. You bet on real football matches with real odds using virtual balance for the duration of the challenge.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Qualification
              </h2>
              <p className="mt-3 leading-relaxed">
                Performing well in the evaluation may qualify you for consideration for partner-funded bonus accounts. Qualification does not guarantee funding; final eligibility is determined by our partner bookmakers and their terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Partner Bookmakers
              </h2>
              <p className="mt-3 leading-relaxed">
                If you qualify, you may be directed to one or more partner bookmakers to open or access a funded account. Partner bookmakers may require you to register, complete verification (KYC), and make a deposit in accordance with their own terms and applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                User Responsibility
              </h2>
              <p className="mt-3 leading-relaxed">
                You are responsible for complying with the laws of your jurisdiction, including those relating to gambling and betting. You must be of legal age to participate where you reside. Use of the platform is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Limitation of Liability
              </h2>
              <p className="mt-3 leading-relaxed">
                AscendBet and its affiliates are not liable for any indirect, incidental, special, or consequential damages arising from your use of the platform or from any interaction with partner bookmakers. Our liability is limited to the maximum extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Changes to Terms
              </h2>
              <p className="mt-3 leading-relaxed">
                We may update these Terms of Service from time to time. We will indicate the last updated date at the top of this page. Continued use of the platform after changes constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white sm:text-2xl">
                Contact Information
              </h2>
              <p className="mt-3 leading-relaxed">
                For questions about these Terms of Service, contact us at{" "}
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
              href="/privacy"
              className="text-zinc-400 transition hover:text-[#7C3AED]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
