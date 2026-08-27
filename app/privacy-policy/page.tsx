import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Advocate Shaikul Khan",
  description: "Privacy policy explaining the limited information collected through this website and how contact information is handled.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Privacy Policy | Advocate Shaikul Khan",
    description: "Privacy policy explaining the limited information collected through this website and how contact information is handled.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Advocate Shaikul Khan",
    description: "Privacy policy explaining the limited information collected through this website and how contact information is handled.",
  },
};

import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] text-slate-900 font-sans px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-4xl bg-white p-6 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
        <Link href="/" className="text-xs font-bold uppercase tracking-widest text-[#B08A00] hover:underline">
          ← Back to Home
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-xs font-mono text-slate-500">Effective Date: 2026</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">
          <section>
            <h2 className="text-base font-bold text-slate-900">1. Commitment to Confidentiality</h2>
            <p className="mt-1">Advocate Shaikul Khan & Associates upholds the highest professional standards of client confidentiality in accordance with the Advocates Act, 1961 and professional ethics rules.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">2. Collection of Information</h2>
            <p className="mt-1">We only collect contact details (such as name, phone number, and brief issue description) provided voluntarily by individuals seeking legal consultation through phone, email, or WhatsApp.</p>
          </section>

          <section>
            <h2 className="text-base font-bold text-slate-900">3. Non-Disclosure & Security</h2>
            <p className="mt-1">Client communications, case briefs, and uploaded digital documents are strictly confidential and will never be shared, sold, or disclosed to any unauthorized third party without express consent or lawful court direction.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
