"use client";

import { useState } from "react";

type Section = {
  sectionNumber: string;
  title: string;
  statutoryText?: string;
  sourcePage?: number | null;
};

type Chapter = {
  chapterNumber: string;
  title: string;
  sections: Section[];
};

type Props = {
  chapters: Chapter[];
  actEyebrow: string;
};

export default function ActSectionsBrowser({
  chapters,
  actEyebrow,
}: Props) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div className="mt-8 space-y-8">
      {chapters.map((chapter) => {
        const first = chapter.sections[0]?.sectionNumber;
        const last =
          chapter.sections[chapter.sections.length - 1]?.sectionNumber;

        return (
          <section
            key={chapter.chapterNumber}
            className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            <div className="border-b border-slate-200 px-5 py-6 sm:px-8 sm:py-8">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B8A00]">
                Chapter {chapter.chapterNumber}
                {first && last ? ` · Sections ${first} to ${last}` : ""}
              </p>

              <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                {chapter.title}
              </h2>

              <p className="mt-3 text-sm text-slate-500">
                {chapter.sections.length} Sections in this chapter
              </p>
            </div>

            <div className="divide-y divide-slate-200">
              {chapter.sections.map((section) => {
                const key = `${chapter.chapterNumber}-${section.sectionNumber}`;
                const isOpen = openSection === key;

                return (
                  <div key={key}>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenSection(isOpen ? null : key)
                      }
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition hover:bg-slate-50 sm:px-8"
                    >
                      <div className="min-w-0">
                        <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-[#0B8A00]">
                          {actEyebrow} Section {section.sectionNumber}
                        </span>

                        <h3 className="mt-3 text-base font-semibold leading-6 text-slate-900 sm:text-lg">
                          {section.title}
                        </h3>
                      </div>

                      <span className="shrink-0 text-xl font-medium text-slate-400">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-100 bg-[#FAFAFA] px-5 py-6 sm:px-8 sm:py-8">
                        <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
                          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0B8A00]">
                              Official Bare Act Text
                            </p>

                            {section.sourcePage && (
                              <p className="text-xs font-medium text-slate-400">
                                Source PDF Page {section.sourcePage}
                              </p>
                            )}
                          </div>

                          <h4 className="mt-5 text-xl font-bold text-slate-950">
                            Section {section.sectionNumber}
                          </h4>

                          <p className="mt-2 text-base font-semibold text-slate-700">
                            {section.title}
                          </p>

                          <div className="mt-6 whitespace-pre-line text-[15px] leading-8 text-slate-700 sm:text-base">
                            {section.statutoryText || "Bare Act text not yet added."}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
