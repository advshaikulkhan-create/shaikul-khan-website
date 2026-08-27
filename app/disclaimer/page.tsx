import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | Advocate Shaikul Khan",
  description: "Important legal disclaimer regarding the informational, educational and research nature of this website and its legal content.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Disclaimer | Advocate Shaikul Khan",
    description: "Important legal disclaimer regarding the informational, educational and research nature of this website and its legal content.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | Advocate Shaikul Khan",
    description: "Important legal disclaimer regarding the informational, educational and research nature of this website and its legal content.",
  },
};

import React from 'react';
import Link from 'next/link';

export default function LegalDisclaimer() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] text-slate-900 font-sans px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-4xl bg-white p-6 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
        <Link href="/" className="text-xs font-bold uppercase tracking-widest text-[#B08A00] hover:underline">
          ← Back to Home
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Bar Council of India Disclaimer</h1>
        <p className="mt-2 text-xs font-mono text-slate-500">Compliance under BCI Rules</p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-slate-700">
          <section>
            <p className="leading-relaxed">
              As per the rules of the <strong>Bar Council of India</strong>, advocates and law chambers are not permitted to solicit work or advertise in any manner. By accessing this website (<strong>Advocate Shaikul Khan & Associates</strong>), the user acknowledges and confirms that:
            </p>
            <ul className="mt-4 list-disc pl-5 space-y-2">
              <li>There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever by Advocate Shaikul Khan or his associates.</li>
              <li>The user wishes to gain information about the chamber, its practice areas, team members, and the Knowledge Centre for personal information and legal educational purposes only.</li>
              <li>The information provided on this website does not constitute legal advice and does not create an advocate-client relationship.</li>
              <li>The firm is not liable for any action taken by the user relying on the material/information provided on this website.</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
