"use client";

import { useState, useMemo } from "react";

type BNSSection = {
  section: string;
  title: string;
  ipcMapping?: string;
  ingredients?: string[];
  punishment?: string;
  notes?: string;
};

type BNSChapter = {
  chapterNum: string;
  title: string;
  sections: BNSSection[];
};

function romanToArabic(roman: string): string {
  const map: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = map[roman[i]];
    const next = map[roman[i + 1]];
    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }
  return String(total);
}

function displayChapterNum(chapterNum: string): string {
  const match = chapterNum.match(/^([IVXLCDM]+)(.*)$/);
  if (!match) return chapterNum;
  const [, roman, rest] = match;
  return romanToArabic(roman) + rest;
}

export default function ActSectionsBrowser({
  chapters,
  actEyebrow,
}: {
  chapters: BNSChapter[];
  actEyebrow: string;
}) {
  const [query, setQuery] = useState("");

  const trimmedQuery = query.trim().toLowerCase();

  const filteredChapters = useMemo(() => {
    if (!trimmedQuery) return chapters;

    return chapters
      .map((chapter) => {
        const matchingSections = chapter.sections.filter((sec) => {
          if (sec.section.toLowerCase() === trimmedQuery) return true;
          if (sec.section.toLowerCase().startsWith(trimmedQuery)) return true;
          const haystack = [
            sec.title,
            sec.punishment || "",
            ...(sec.ingredients || []),
            sec.notes || "",
          ]
            .join(" ")
            .toLowerCase();
          return haystack.includes(trimmedQuery);
        });
        return { ...chapter, sections: matchingSections };
      })
      .filter((chapter) => chapter.sections.length > 0);
  }, [chapters, trimmedQuery]);

  const totalMatches = filteredChapters.reduce((sum, ch) => sum + ch.sections.length, 0);
  const isSearching = trimmedQuery.length > 0;

  return (
    <div>
      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <label className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B8A00]">
          Search a section
        </label>
        <div className="mt-2 flex items-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`e.g. "103" or "murder" or "hurt"`}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none focus:border-[#0B8A00]"
          />
          {isSearching && (
            <button
              onClick={() => setQuery("")}
              className="shrink-0 rounded-xl border border-slate-300 px-3 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50"
            >
              Clear
            </button>
          )}
        </div>
        {isSearching && (
          <p className="mt-2 text-sm font-semibold text-slate-500">
            {totalMatches} {totalMatches === 1 ? "section" : "sections"} found
          </p>
        )}
      </div>

      <div className="mt-8 space-y-8">
        {filteredChapters.length === 0 && (
          <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-500 shadow-sm">
            No section matches "{query}".
          </div>
        )}

        {filteredChapters.map((chapter) => (
          <section
            key={chapter.chapterNum}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10"
          >
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B8A00]">
              Chapter {displayChapterNum(chapter.chapterNum)}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              {chapter.title}
            </h2>
            {chapter.sections.length > 0 && !isSearching && (
              <p className="mt-2 text-sm font-semibold text-slate-500">
                {actEyebrow} Section {chapter.sections[0].section} to Section{" "}
                {chapter.sections[chapter.sections.length - 1].section} 鈥� {chapter.sections.length}{" "}
                {chapter.sections.length === 1 ? "section" : "sections"} in this chapter
              </p>
            )}

            <div className="mt-6 space-y-3">
              {chapter.sections.map((sec) => (
                <details
                  key={sec.section}
                  open={isSearching}
                  className="group rounded-2xl border border-slate-200 bg-[#FAFAFA] open:bg-white open:shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4">
                    <span className="flex items-baseline gap-3">
                      <span className="shrink-0 rounded-full bg-[#0B8A00]/10 px-2.5 py-0.5 text-sm font-bold text-[#0B8A00]">
                        {actEyebrow} Section {sec.section}
                      </span>
                      <span className="font-semibold text-slate-900">{sec.title}</span>
                    </span>
                    <span className="mt-1 shrink-0 text-slate-400 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <div className="space-y-4 border-t border-slate-200 px-5 py-5">
                    {sec.ingredients && sec.ingredients.length > 0 && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                          Ingredients
                        </p>
                        <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
                          {sec.ingredients.map((ing, i) => (
                            <li key={i}>{ing}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {sec.punishment && (
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
                          Punishment
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-800">{sec.punishment}</p>
                      </div>
                    )}

                    {sec.notes && (
                      <div className="rounded-xl bg-amber-50 px-4 py-3">
                        <p className="text-xs font-bold uppercase tracking-wide text-amber-700">
                          Practice note
                        </p>
                        <p className="mt-1 text-sm leading-6 text-amber-900">{sec.notes}</p>
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
