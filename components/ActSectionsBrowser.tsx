"use client";

import { useState } from "react";
import Link from "next/link";

type KnowledgeSection = {
  sectionNumber: string;
  title: string;
  statutoryText: string;
  sourcePage: number | null;
};

type KnowledgeChapter = {
  chapterNumber: string;
  title: string;
  sections: KnowledgeSection[];
};

type Props = {
  actSlug: string;
  chapters: KnowledgeChapter[];
};

export default function ActSectionsBrowser({ actSlug, chapters }: Props) {
  const safeChapters = Array.isArray(chapters)
    ? chapters.filter(
        (chapter): chapter is KnowledgeChapter =>
          chapter !== null &&
          chapter !== undefined &&
          typeof chapter.chapterNumber === "string" &&
          typeof chapter.title === "string" &&
          Array.isArray(chapter.sections)
      )
    : [];

  const [openChapter, setOpenChapter] = useState<string | null>(
    safeChapters[0]?.chapterNumber ?? null
  );

  if (safeChapters.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-600 shadow-sm">
        No chapter data is available for this Act.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {safeChapters.map((chapter) => {
        const chapterKey = chapter.chapterNumber;
        const isOpen = openChapter === chapterKey;
        const sections = chapter.sections.filter(
          (section) =>
            section !== null &&
            section !== undefined &&
            typeof section.sectionNumber === "string"
        );

        const firstSection = sections[0]?.sectionNumber ?? null;
        const lastSection = sections[sections.length - 1]?.sectionNumber ?? null;

        return (
          <section
            key={chapterKey}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() =>
                setOpenChapter((current) =>
                  current === chapterKey ? null : chapterKey
                )
              }
              className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-8"
            >
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4F7A4F]">
                  {firstSection && lastSection
                    ? `Sections ${firstSection}–${lastSection}`
                    : `Chapter ${chapter.chapterNumber}`}
                </p>

                <h2 className="mt-3 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
                  Chapter {chapter.chapterNumber}: {chapter.title}
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  {sections.length} {sections.length === 1 ? "Section" : "Sections"}
                </p>
              </div>

              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-xl font-semibold text-slate-600"
                aria-hidden="true"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen && (
              <div className="border-t border-slate-200 px-6 py-5 sm:px-8">
                <div className="space-y-3">
                  {sections.map((section) => (
                    <Link
                      key={section.sectionNumber}
                      href={`/knowledge-centre/${encodeURIComponent(
                        actSlug
                      )}/section/${encodeURIComponent(section.sectionNumber)}`}
                      className="block rounded-2xl border border-slate-200 p-4 transition hover:border-[#4F7A4F] hover:bg-slate-50"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex min-h-10 min-w-10 items-center justify-center rounded-full bg-slate-100 px-3 text-sm font-bold text-slate-700">
                          {section.sectionNumber}
                        </span>

                        <div className="min-w-0">
                          <h3 className="font-semibold text-slate-900">
                            {section.title}
                          </h3>

                          {section.sourcePage !== null && (
                            <p className="mt-1 text-xs text-slate-500">
                              Official PDF page {section.sourcePage}
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}
