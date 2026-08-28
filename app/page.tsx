import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advocate Shaikul Khan | Criminal Defence & Cyber Crime Advocate",
  description: "Advocate Shaikul Khan provides criminal defence, cyber crime defence, digital evidence analysis and legal representation in Rajasthan.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Advocate Shaikul Khan | Criminal Defence & Cyber Crime Advocate",
    description: "Advocate Shaikul Khan provides criminal defence, cyber crime defence, digital evidence analysis and legal representation in Rajasthan.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocate Shaikul Khan | Criminal Defence & Cyber Crime Advocate",
    description: "Advocate Shaikul Khan provides criminal defence, cyber crime defence, digital evidence analysis and legal representation in Rajasthan.",
  },
};


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What documents are needed for a bank account unfreeze request?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Relevant documents may include the account holder's ID/KYC, bank freeze or lien details, account statement, disputed transaction details, and documents explaining the source or legitimacy of the funds."
      }
    },
    {
      "@type": "Question",
      "name": "Can a 1930 Cyber Portal debit-freeze account be reopened?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. An NCRP/CFCFRMS-related debit freeze or lien can be removed or restricted, subject to verification and the applicable legal process."
      }
    },
    {
      "@type": "Question",
      "name": "Can a bank permanently freeze a bank account?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A cybercrime-related debit freeze is not automatically permanent. Its continuation, restriction or removal depends on the legal basis of the freeze."
      }
    }
  ]
};

export default function Home() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-5 py-10 sm:py-14 lg:py-20">
        <div className="mb-7 flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-1 shadow-sm">
          <img
            src="/brand/Premium-logo.png"
            alt="Advocate Shaikul Khan"
            className="h-full w-full object-contain"
          />
        </div>

        <div>
          <div className="text-lg font-bold tracking-tight text-[#0F172A]">
            Advocate Shaikul Khan
          </div>
          <div className="mt-1 text-sm font-medium text-slate-500">
            Rajasthan High Court
          </div>
        </div>
      </div>

      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              Cyber Crime • Bank Freeze • High Court Matters
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
              Strategic legal defence for cyber and criminal matters.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              Digital Evidence, Criminal Defence, High Court Litigation and Regular Bail.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+918955002298"
                className="inline-flex items-center justify-center rounded-2xl bg-[#0F172A] px-6 py-4 text-base font-semibold text-white shadow-xl shadow-slate-900/20 transition hover:scale-[1.02]"
              >
                Call for Consultation
              </a>

              <a
                href="https://wa.me/918955002298"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-xl shadow-emerald-500/25 transition hover:scale-[1.02]"
              >
                <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16.04 3C9.39 3 4 8.26 4 14.74c0 2.28.69 4.41 1.88 6.21L4 29l8.28-1.82a12.2 12.2 0 0 0 3.76.58C22.61 27.76 28 22.5 28 16.02 28 9.54 22.69 3 16.04 3Zm0 22.6c-1.2 0-2.37-.2-3.47-.58l-.25-.08-4.91 1.08 1.12-4.79-.16-.25a10.5 10.5 0 0 1-1.65-5.64c0-5.82 4.7-10.56 10.48-10.56 5.78 0 10.48 4.74 10.48 10.56 0 5.82-4.7 10.56-10.64 10.56Zm5.78-7.88c-.31-.16-1.84-.9-2.12-1-.28-.1-.48-.16-.68.16-.2.31-.78 1-.96 1.21-.18.2-.36.23-.67.08-.31-.16-1.3-.47-2.48-1.5-.92-.8-1.54-1.79-1.72-2.09-.18-.31-.02-.47.13-.62.13-.13.31-.34.47-.51.16-.18.2-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.68-1.63-.93-2.24-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.52.08-.79.39-.28.31-1.04 1.01-1.04 2.47 0 1.45 1.07 2.86 1.22 3.06.16.21 2.1 3.32 5.08 4.52.71.31 1.27.49 1.7.63.71.23 1.35.2 1.86.12.57-.08 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.37Z"/>
                </svg>
                WhatsApp
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:max-w-md">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-3xl font-bold text-[#0F172A]">95%</div>
                <div className="mt-2 text-sm text-slate-500">Cyber focus</div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-3xl font-bold text-[#0F172A]">24h</div>
                <div className="mt-2 text-sm text-slate-500">Response time</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
              <img
                src="/brand/hero-image.png"
                alt="Advocate Shaikul Khan"
                className="h-[620px] w-full object-cover"
              />

              <div className="border-t border-slate-100 bg-white p-6">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span>Cyber defence</span>
                  <span>•</span>
                  <span>High Court litigation</span>
                </div>

                <p className="text-lg font-semibold leading-8 text-[#0F172A]">
                  Strategic representation in cyber fraud, bank freeze, digital evidence, bail and criminal litigation matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section className="max-w-7xl mx-auto px-5 pb-16">
        <div className="mb-8">
          <p className="text-sm font-semibold tracking-[0.25em] text-slate-500 uppercase">
            Practice Areas
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
            Clear legal support for cyber and criminal matters.
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl">
              🛡️
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#0F172A]">
              Cyber Crime
            </h3>

            <p className="mt-3 text-base leading-7 text-slate-600">
              Fraud, scam, IT Act and digital evidence matters.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl">
              🏦
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#0F172A]">
              Bank Freeze
            </h3>

            <p className="mt-3 text-base leading-7 text-slate-600">
              Debit freeze, lien and account unfreeze matters.
            </p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:col-span-2 lg:col-span-1">
            <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl">
              ⚖️
            </div>

            <h3 className="mt-5 text-xl font-semibold text-[#0F172A]">
              High Court
            </h3>

            <p className="mt-3 text-base leading-7 text-slate-600">
              Regular bail and criminal litigation matters.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="max-w-7xl mx-auto px-5 pb-16">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10 lg:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.25em] text-slate-500 uppercase">
              Need legal guidance?
            </p>

            <h2 className="mt-4 text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-[#0F172A]">
              Speak directly with Advocate Shaikul Khan.
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Cyber Fraud",
                "Bank Freeze",
                "Regular Bail",
                "Digital Evidence",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-medium text-[#0F172A]"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+918955002298"
                className="inline-flex items-center justify-center rounded-2xl bg-[#0F172A] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:scale-[1.02]"
              >
                Call for Consultation
              </a>

              <a
                href="https://wa.me/918955002298"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:scale-[1.02]"
              >
                <svg width="22" height="22" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M16.04 3C9.39 3 4 8.26 4 14.74c0 2.28.69 4.41 1.88 6.21L4 29l8.28-1.82a12.2 12.2 0 0 0 3.76.58C22.61 27.76 28 22.5 28 16.02 28 9.54 22.69 3 16.04 3Zm0 22.6c-1.2 0-2.37-.2-3.47-.58l-.25-.08-4.91 1.08 1.12-4.79-.16-.25a10.5 10.5 0 0 1-1.65-5.64c0-5.82 4.7-10.56 10.48-10.56 5.78 0 10.48 4.74 10.48 10.56 0 5.82-4.7 10.56-10.64 10.56Zm5.78-7.88c-.31-.16-1.84-.9-2.12-1-.28-.1-.48-.16-.68.16-.2.31-.78 1-.96 1.21-.18.2-.36.23-.67.08-.31-.16-1.3-.47-2.48-1.5-.92-.8-1.54-1.79-1.72-2.09-.18-.31-.02-.47.13-.62.13-.13.31-.34.47-.51.16-.18.2-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.68-1.63-.93-2.24-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.52.08-.79.39-.28.31-1.04 1.01-1.04 2.47 0 1.45 1.07 2.86 1.22 3.06.16.21 2.1 3.32 5.08 4.52.71.31 1.27.49 1.7.63.71.23 1.35.2 1.86.12.57-.08 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.28-.21-.59-.37Z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

{/* Debit Freeze FAQ */}
<section className="max-w-7xl mx-auto px-5 pb-16">
  <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm sm:p-10">

    <p className="text-sm font-semibold tracking-[0.25em] text-slate-500 uppercase">
      Debit Freeze FAQ
    </p>

    <h2 className="mt-3 text-3xl font-bold text-[#0F172A] sm:text-4xl">
      Frequently asked questions
    </h2>

    <div className="mt-6 divide-y divide-slate-200">

      <details className="group py-5">
        <summary className="cursor-pointer list-none pr-8 text-lg font-semibold leading-8 text-[#0F172A]">
          What documents are needed for a bank account unfreeze request?
        </summary>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Relevant documents may include the account holder’s ID/KYC,
          bank freeze or lien details, account statement, disputed
          transaction details, and documents explaining the source or
          legitimacy of the funds. Additional documents may be required
          depending on the case.
        </p>
      </details>

      <details className="group py-5">
        <summary className="cursor-pointer list-none pr-8 text-lg font-semibold leading-8 text-[#0F172A]">
          Can a 1930 Cyber Portal debit-freeze account be reopened?
        </summary>

        <p className="mt-4 text-base leading-7 text-slate-600">
          Yes. An NCRP/CFCFRMS-related debit freeze or lien can be removed
          or restricted, subject to verification and the applicable legal
          process. The 2026 SOP provides a grievance-redressal mechanism
          for affected account holders. Appropriate remedies may also be
          pursued before the jurisdictional court and, where maintainable,
          before the High Court under Article 226.
        </p>
      </details>

      <details className="group py-5">
        <summary className="cursor-pointer list-none pr-8 text-lg font-semibold leading-8 text-[#0F172A]">
          Can a bank permanently freeze a bank account?
        </summary>

        <p className="mt-4 text-base leading-7 text-slate-600">
          A cybercrime-related debit freeze is not automatically permanent.
          Its continuation, restriction or removal depends on the legal
          basis of the freeze, the investigation, verification and the
          applicable legal process.
        </p>
      </details>

    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-[#0F172A]">
              Advocate Shaikul Khan
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Cyber Crime • Bank Freeze • High Court Matters
            </p>
          </div>

          <div className="flex gap-6 text-sm text-slate-500">
            <a href="/about" className="hover:text-slate-900 transition">
              About
            </a>

            <a href="/contact" className="hover:text-slate-900 transition">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
