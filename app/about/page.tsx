import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Advocate Shaikul Khan | Criminal Defence Advocate",
  description: "Learn about Advocate Shaikul Khan, his criminal defence practice, cyber crime litigation and focus on digital evidence and financial cyber fraud matters.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "About Advocate Shaikul Khan | Criminal Defence Advocate",
    description: "Learn about Advocate Shaikul Khan, his criminal defence practice, cyber crime litigation and focus on digital evidence and financial cyber fraud matters.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Advocate Shaikul Khan | Criminal Defence Advocate",
    description: "Learn about Advocate Shaikul Khan, his criminal defence practice, cyber crime litigation and focus on digital evidence and financial cyber fraud matters.",
  },
};

import Link from "next/link";
import {
  FaShieldAlt,
  FaUniversity,
  FaBalanceScale,
  FaGavel,
  FaFileAlt,
  FaLandmark,
} from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">

      {/* Identity */}
      <section className="max-w-7xl mx-auto px-5 py-10 sm:py-14 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col items-center text-center">

              <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                <img
                  src="/brand/Premium-logo.png"
                  alt="Advocate Shaikul Khan"
                  className="h-full w-full object-contain"
                />
              </div>

              <h1 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight">
                Advocate Shaikul Khan
              </h1>

              <p className="mt-2 text-lg font-semibold text-[#EAB308]">
                Criminal Defence & Cyber Crime Lawyer
              </p>

              <p className="mt-4 text-base leading-7 text-slate-600">
                Rajasthan High Court (Jaipur Bench)
              </p>

              <p className="text-base leading-7 text-slate-600">
                District & Sessions Courts, Kaman, Nagar, Deeg, Rajasthan
              </p>

            </div>
          </div>

          {/* Professional Profile */}
          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Cyber Crime • Bank Freeze • High Court Matters
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.18em] text-[#EAB308]">
              About the Advocate
            </p>

            <h2 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
              Strategic criminal defence built around research, evidence and advocacy.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Advocate Shaikul Khan is a Criminal Defence Lawyer practising
              before the Rajasthan High Court (Jaipur Bench) and the District
              & Sessions Courts, Kaman, Nagar, Deeg, Rajasthan.
            </p>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              He specialises in Cyber Crime, Banking Account Debit Freeze,
              Bail Matters, FIR Quashing and Criminal Defence Matters.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="tel:+918955002298"
                className="inline-flex items-center justify-center rounded-2xl bg-[#0F172A] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5"
              >
                Call for Consultation
              </a>

              <a
                href="https://wa.me/918955002298"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-0.5"
              >
                WhatsApp
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-5 py-14 sm:py-16">

          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EAB308]">
              Practice Areas
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Focused legal support for cyber and criminal matters.
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[
              [
                "Cyber Crime",
                "Fraud, scam, IT Act and cybercrime-related matters.",
              ],
              [
                "Bank Account Debit Freeze",
                "Debit freeze, lien and account unfreeze matters.",
              ],
              [
                "Criminal Defence",
                "Strategic defence representation across criminal matters.",
              ],
              [
                "Bail Matters",
                "Regular and anticipatory bail proceedings.",
              ],
              [
                "FIR Quashing",
                "High Court proceedings and criminal petitions.",
              ],
              [
                "High Court Litigation",
                "Criminal litigation and strategic High Court representation.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-[1.75rem] border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-white">
  {title === "Cyber Crime" && <FaShieldAlt className="h-6 w-6 text-blue-600" />}
  {title === "Bank Account Debit Freeze" && <FaUniversity className="h-6 w-6 text-emerald-600" />}
  {title === "Criminal Defence" && <FaBalanceScale className="h-6 w-6 text-yellow-500" />}
  {title === "Bail Matters" && <FaGavel className="h-6 w-6 text-rose-600" />}
  {title === "FIR Quashing" && <FaFileAlt className="h-6 w-6 text-indigo-600" />}
  {title === "High Court Litigation" && <FaLandmark className="h-6 w-6 text-slate-800" />}
</div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {title}
                </h3>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  {description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Legal Approach */}
      <section className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 py-14 sm:py-16">

          <div className="max-w-3xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EAB308]">
              Legal Approach
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Every matter is approached with preparation and precision.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Every matter is approached with meticulous legal research,
              strategic preparation and courtroom advocacy.
            </p>

          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {[
              [
                "01",
                "Research",
                "Thorough legal research focused on the facts and applicable law.",
              ],
              [
                "02",
                "Evidence",
                "Focused attention to relevant documentary and digital evidence.",
              ],
              [
                "03",
                "Strategy",
                "Fact-specific preparation for the appropriate legal remedy.",
              ],
              [
                "04",
                "Advocacy",
                "Focused representation before the appropriate court.",
              ],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm"
              >

                <span className="text-sm font-bold text-[#EAB308]">
                  {number}
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  {title}
                </h3>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  {description}
                </p>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Professional Profile */}
      <section className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-5 py-14 sm:py-16">

          <div className="max-w-4xl">

            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EAB308]">
              Professional Profile
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
              Advocate Shaikul Khan
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">

              <p>
                Advocate Shaikul Khan is a Criminal Defence Lawyer practising
                before the Rajasthan High Court (Jaipur Bench) and the
                District & Sessions Courts, Kaman, Nagar, Deeg, Rajasthan.
              </p>

              <p>
                He specialises in Cyber Crime, Banking Account Debit Freeze,
                Bail Matters, FIR Quashing and Criminal Defence Matters.
              </p>

              <p>
                His approach is centred on meticulous legal research,
                strategic preparation and focused courtroom advocacy.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Consultation */}
      <section className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-5 py-14 sm:py-16">

          <div className="rounded-[2rem] bg-[#0F172A] px-6 py-10 sm:px-10 sm:py-12 text-white">

            <div className="max-w-3xl">

              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EAB308]">
                Need Legal Guidance?
              </p>

              <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
                Speak directly with Advocate Shaikul Khan.
              </h2>

              <p className="mt-4 text-base sm:text-lg leading-7 text-slate-300">
                Discuss your cyber crime, bank freeze, bail or criminal
                litigation matter.
              </p>

            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="tel:+918955002298"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-semibold text-[#0F172A] transition hover:bg-slate-100"
              >
                Call for Consultation
              </a>

              <a
                href="https://wa.me/918955002298"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-6 py-4 text-base font-semibold text-white transition hover:bg-[#20bd5a]"
              >
                WhatsApp
              </a>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-4 text-base font-semibold text-white transition hover:bg-white/10"
              >
                Back to Home
              </Link>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
