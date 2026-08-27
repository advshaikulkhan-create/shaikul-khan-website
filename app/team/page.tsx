import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Team | Advocate Shaikul Khan",
  description: "Meet the legal team and understand the criminal defence, cyber crime and litigation practice associated with Advocate Shaikul Khan.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Legal Team | Advocate Shaikul Khan",
    description: "Meet the legal team and understand the criminal defence, cyber crime and litigation practice associated with Advocate Shaikul Khan.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal Team | Advocate Shaikul Khan",
    description: "Meet the legal team and understand the criminal defence, cyber crime and litigation practice associated with Advocate Shaikul Khan.",
  },
};

import React from 'react';
import Link from 'next/link';

interface TeamMember {
  name: string;
  photoTitle: string;
  role: string;
  degree: string;
  court: string;
  address: string;
  phone: string;
  email?: string;
  specialization: string[];
  bio: string;
  image: string;
  badge?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Advocate Shaikul Khan",
    photoTitle: "Lead Advocate Shaikul Khan",
    role: "Founder & Lead Advocate",
    degree: "BA, MBA, LLB",
    court: "Rajasthan High Court & District & Session Courts (Kaman, Nagar, Deeg)",
    address: "Haji Deenu Niwas, Village Ubhaka, Tehsil Pahadi, District Deeg, Rajasthan - 321204",
    phone: "+91 89550 02298",
    email: "advshaikulkhan@gmail.com",
    specialization: [
      "Criminal Defence",
      "Cyber Crime & Bank Freeze",
      "NDPS Act Litigation",
      "All Types of Bail Matters",
      "High Court Writ & Revision Matters",
      "Supreme Court Guidance Desk"
    ],
    bio: "Lead Counsel with extensive trial and appellate experience before the Rajasthan High Court and District & Sessions Courts. His practice focuses on strategic criminal defence, complex financial and cyber-fraud matters, cybercrime-related bank account debit-freeze disputes, NDPS cases, and complex bail litigation. He also provides strategic litigation support and briefing assistance in matters before the Supreme Court.",
    image: "/pictures/shaikul.png",
    badge: "Lead Counsel"
  },
  {
    name: "Advocate Ansar Khan",
    photoTitle: "Associate Advocate Ansar Khan",
    role: "Associate Advocate / Junior Counsel",
    degree: "BA LLB (5 Years Integrated)",
    court: "District & Session Court, Kaman (Deeg)",
    address: "Kaman, District Deeg, Rajasthan",
    phone: "+91 88140 96972",
    specialization: [
      "Criminal Trial Advocacy",
      "Remand & Police Custody Defence",
      "Local Court Drafting",
      "Witness Handling & Evidence"
    ],
    bio: "Graduated with a 5-Year Integrated BA LLB degree (2024–25). Actively assisting in criminal trials, procedural court filings, case-record inspection, witness examination preparation, and trial court defence at Kaman and Deeg courts.",
    image: "/pictures/ansar.jpg",
    badge: "Associate"
  },
  {
    name: "Advocate Jubair Khan",
    photoTitle: "Associate Advocate Jubair Khan",
    role: "Associate Advocate / Research & Field Desk",
    degree: "BA LLB (5 Years Integrated)",
    court: "District Courts (Kaman & Deeg Jurisdiction)",
    address: "Village Lalpura, Tehsil Kaman, District Deeg, Rajasthan - 321022",
    phone: "+91 78912 14032",
    specialization: [
      "Substantive Criminal Law",
      "Case Law & Precedent Research",
      "Client Briefing & Field Verification",
      "Trial Record Management"
    ],
    bio: "Graduated with a comprehensive 5-Year Integrated BA LLB degree. Handles statutory legal research, trial briefing preparation, procedural concordance, and on-ground litigation support across Kaman and surrounding legal corridors.",
    image: "/pictures/jubair.jpg",
    badge: "Associate"
  },
  {
    name: "Advocate Aarif Khan",
    photoTitle: "Associate Advocate Aarif Khan",
    role: "Associate Advocate / Criminal & High Court Desk",
    degree: "BA LLB (5 Years Integrated)",
    court: "Chambers at Ferozepur Jhirka & District & Sessions Court Nuh (Mewat, Haryana)",
    address: "Village Basai Mew, Bivan, Ferozepur Jhirka, District Nuh Mewat, Haryana",
    phone: "+91 93504 00074",
    specialization: [
      "Criminal Defence & Trial Advocacy",
      "High Court Litigation Matters",
      "Sessions Court Trials",
      "Bail & Remand Strategy",
      "Inter-State Cross-Border Jurisdiction (Haryana/Rajasthan)"
    ],
    bio: "Criminal advocate with a 5-Year Integrated BA LLB degree, practicing across Ferozepur Jhirka and Sessions Court Nuh (Mewat). Specializes in criminal litigation, trial defence, and coordinating High Court matters across the regional Haryana-Rajasthan legal corridors.",
    image: "/pictures/arif.jpg",
    badge: "Associate"
  }
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] text-slate-900 font-sans pb-28">
      {/* 1. HERO BANNER */}
      <section className="border-b border-slate-200 bg-white px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#B08A00] hover:underline"
          >
            ← Back to Home
          </Link>

          <div className="mt-8 max-w-3xl">
            <span className="rounded-md bg-[#B08A00]/10 px-2.5 py-1 text-xs font-bold text-[#B08A00] uppercase tracking-wider">
              Legal Chambers & Associates
            </span>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Our Legal Team & Associates
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              A dedicated team of courtroom advocates and legal researchers delivering aggressive criminal defence, cyber fraud resolution, and trial litigation across Rajasthan & Haryana jurisdictions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. TEAM DIRECTORY CARDS */}
      <section className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-6xl space-y-10">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex flex-col lg:flex-row">
                {/* PHOTO & QUICK CONTACT COLUMN */}
                <div className="flex flex-col items-center justify-center border-b border-slate-100 bg-slate-50 p-6 sm:p-8 lg:w-80 lg:border-b-0 lg:border-r">
                  <div className="relative h-48 w-48 overflow-hidden rounded-2xl border-2 border-slate-200 bg-slate-200 shadow-md">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>

                  {/* NAME DIRECTLY UNDER PHOTO */}
                  <div className="mt-4 text-center">
                    <h3 className="text-sm font-extrabold text-slate-950 tracking-tight">
                      {member.photoTitle}
                    </h3>
                    <span className="mt-1.5 inline-block rounded-full bg-[#0F172A] px-3 py-0.5 text-[10px] font-bold tracking-wider text-[#D4AF37] uppercase">
                      {member.badge}
                    </span>
                  </div>
                  
                  <div className="mt-5 w-full space-y-2 text-center text-xs">
                    <a
                      href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`}
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-slate-200/70 px-3 py-2 font-semibold text-slate-800 hover:bg-slate-300 transition-colors"
                    >
                      📞 {member.phone}
                    </a>
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 transition-colors"
                      >
                        ✉️ {member.email}
                      </a>
                    )}
                  </div>
                </div>

                {/* DETAILS & SPECIALIZATION COLUMN */}
                <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#B08A00]">
                          {member.role}
                        </span>
                        <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-950">
                          {member.name}
                        </h2>
                        <p className="mt-1 text-xs font-mono font-semibold text-slate-600">
                          Qualification: <span className="text-slate-900">{member.degree}</span>
                        </p>
                      </div>
                      <a
                        href={`https://wa.me/${member.phone.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 transition-colors"
                      >
                        <span>WhatsApp Connect</span>
                        <span>→</span>
                      </a>
                    </div>

                    {/* LOCATION / COURT */}
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                      <div>
                        <span className="font-bold text-slate-500 block uppercase text-[10px]">Court / Seat of Practice:</span>
                        <span className="font-semibold text-slate-800">{member.court}</span>
                      </div>
                      <div>
                        <span className="font-bold text-slate-500 block uppercase text-[10px]">Chamber / Office Address:</span>
                        <span className="text-slate-700">{member.address}</span>
                      </div>
                    </div>

                    {/* BIO */}
                    <div className="mt-5">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Professional Profile
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-slate-700">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  {/* PRACTICE SPECIALIZATION TAGS */}
                  <div className="mt-6 pt-5 border-t border-slate-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Key Practice Areas & Focus
                    </h3>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {member.specialization.map((spec, i) => (
                        <span
                          key={i}
                          className="rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-800 shadow-xs"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
