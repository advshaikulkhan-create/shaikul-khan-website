"use client";

import { useState, use } from "react";
import Link from "next/link";

import { bsaChapters } from '@/data/acts/bsa';


const ACT_META: Record<string, { title: string; eyebrow: string; description: string }> = {
  bns: {
    title: "Bharatiya Nyaya Sanhita, 2023",
    eyebrow: "BNS",
    description: "The principal substantive criminal law statute of India, covering offences, punishments and criminal liability.",
  },
  bnss: {
    title: "Bharatiya Nagarik Suraksha Sanhita, 2023",
    eyebrow: "BNSS",
    description: "The procedural framework governing criminal investigation, inquiry, trial and related proceedings.",
  },
};

export default function BsaActPage() {
  
  const slug = 'bsa';
  const meta = {
    title: 'Bharatiya Sakshya Adhiniyam, 2023',
    eyebrow: 'BSA',
    description: 'An Act to consolidate and to provide for general rules and principles of evidence for fair trial.'
  };
  const chapters = bsaChapters as any;

  const [openSection, setOpenSection] = useState<string | null>("1");

  const totalSections = chapters.reduce((total: number, ch: any) => total + (ch.sections?.length || 0), 0);

  const toggleSection = (secNum: string) => {
    setOpenSection(openSection === secNum ? null : secNum);
  };

  return (
    <main className="min-h-screen bg-[#F5F5F7] px-5 py-12 font-sans text-[#0F172A] sm:px-8">
      <Link
        href="/knowledge-centre"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B8A00] transition-opacity hover:opacity-75"
      >
        ← Back to Knowledge Centre
      </Link>

      <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#4F7A4F]">{meta.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-5xl">
          {meta.title}
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">{meta.description}</p>
        {chapters.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <span className="rounded-full bg-slate-100 px-4 py-2 font-semibold text-slate-700">
              {chapters.length} Chapters
            </span>
            <span className="rounded-full bg-slate-100 px-4 py-2 font-semibold text-slate-700">
              {slug === "bnss" ? 531 : totalSections} Sections
            </span>
          </div>
        )}
      </section>

      <div className="mt-8 space-y-8">
        {chapters.map((chapter: any, chIdx: number) => {
          const chNum = chapter.chapterNum || chapter.chapterNumber || `${chIdx + 1}`;
          const secList = chapter.sections || [];
          const firstSec = secList[0]?.section || secList[0]?.sectionNumber || "1";
          const lastSec = secList[secList.length - 1]?.section || secList[secList.length - 1]?.sectionNumber || `${secList.length}`;

          return (
            <div key={chIdx} className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <div className="mb-6 border-b border-slate-100 pb-4">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#15803d]">
                  CHAPTER {chNum}
                </p>
                <h2 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  {chapter.title}
                </h2>
                <p className="mt-1 text-xs font-medium text-slate-500">
                  {meta.eyebrow} Section {firstSec} to Section {lastSec} ♦ {secList.length} sections in this chapter
                </p>
              </div>

              <div className="space-y-4">
                {secList.map((sec: any, sIdx: number) => {
                  const sNum = sec.section || sec.sectionNumber || `${sIdx + 1}`;
                  const isOpen = openSection === sNum;
                  const bareText = sec.statutoryText || sec.notes || "";

                  return (
                    <div
                      key={sIdx}
                      className="rounded-2xl border border-slate-200 bg-white transition-colors duration-200 overflow-hidden"
                    >
                      <button
                        type="button"
                        onClick={() => toggleSection(sNum)}
                        className="flex w-full items-center justify-between gap-4 p-4 sm:p-5 text-left transition hover:bg-slate-50"
                      >
                        <div className="flex items-center gap-3">
                          <span className="inline-block rounded-md bg-[#dcfce7] px-2.5 py-1 text-xs font-bold text-[#166534]">
                            {meta.eyebrow} Section {sNum}
                          </span>
                          <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
                            {sec.title}
                          </h3>
                        </div>
                        <span className="text-slate-400 font-bold text-lg px-2">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>

                      {isOpen && (
                        <div className="border-t border-slate-100 bg-white p-5 sm:p-6 space-y-5 text-sm">
                          {sec.ingredients && sec.ingredients.length > 0 && (
                            <div>
                              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                INGREDIENTS / PROVISIONS
                              </p>
                              <ul className="list-disc pl-5 space-y-1.5 text-slate-700 leading-relaxed">
                                {sec.ingredients.map((ing: string, idx: number) => (
                                  <li key={idx}>{ing}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {sec.punishment && (
                            <div>
                              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                                SCOPE / APPLICATION
                              </p>
                              <p className="text-slate-700 font-medium">{sec.punishment}</p>
                            </div>
                          )}

                          {bareText && (
                            <div className="rounded-xl border border-amber-200 bg-[#fffbeb] p-4 text-slate-800">
                              <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
                                BARE ACT TEXT (OFFICIAL BSA GAZETTE)
                              </p>
                              <pre className="whitespace-pre-wrap font-sans text-xs sm:text-sm text-slate-800 leading-relaxed">
                                {bareText}
                              </pre>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 border-t border-slate-200 pt-8 text-center">
        <p className="text-sm font-semibold text-[#0B8A00]">Advocate Shaikul Khan · Knowledge Centre</p>
        <p className="mt-2 text-sm text-slate-500">Structured legal research, procedural analysis and practical legal guidance.</p>
      </div>
    </main>
  );
}
