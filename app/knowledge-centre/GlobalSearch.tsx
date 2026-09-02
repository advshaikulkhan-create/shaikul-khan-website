"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

import * as bnsMod from "../../data/acts/bns";
import * as bnssMod from "../../data/acts/bnss";
import * as bsaMod from "../../data/acts/bsa";
import * as ipcMod from "../../data/acts/ipc";
import * as crpcMod from "../../data/acts/crpc";
import * as ieaMod from "../../data/acts/iea";
import * as pocsoMod from "../../data/acts/pocso";
import * as jjMod from "../../data/acts/jj";
import * as ndpsMod from "../../data/acts/ndps";
import * as mmdrMod from "../../data/acts/mmdr";
import * as rbaMod from "../../data/acts/rba";
import * as armsMod from "../../data/acts/arms";

type AnySection = Record<string, any>;

type ActEntry = {
  slug: string;
  shortName: string;
  mod: any;
};

const ACTS: ActEntry[] = [
  { slug: "bns", shortName: "BNS", mod: bnsMod },
  { slug: "bnss", shortName: "BNSS", mod: bnssMod },
  { slug: "bsa", shortName: "BSA", mod: bsaMod },
  { slug: "ipc", shortName: "IPC", mod: ipcMod },
  { slug: "crpc", shortName: "CrPC", mod: crpcMod },
  { slug: "iea", shortName: "IEA", mod: ieaMod },
  { slug: "pocso", shortName: "POCSO", mod: pocsoMod },
  { slug: "jj", shortName: "JJ Act", mod: jjMod },
  { slug: "ndps", shortName: "NDPS", mod: ndpsMod },
  { slug: "mmdr", shortName: "MMDR", mod: mmdrMod },
  { slug: "rba", shortName: "RBA", mod: rbaMod },
  { slug: "arms", shortName: "Arms", mod: armsMod },
];

function extractChapters(mod: any): any[] {
  if (!mod) return [];
  const candidate =
    mod.default ??
    mod.bnsChapters ??
    mod.bnssChapters ??
    mod.chapters ??
    null;
  return Array.isArray(candidate) ? candidate : [];
}

function getSectionNumber(sec: AnySection): string {
  return String(sec.section ?? sec.sectionNumber ?? sec.code ?? "");
}

type SearchResult = {
  actSlug: string;
  actShortName: string;
  section: AnySection;
};

const ACT_KEYWORDS: Record<string, string> = {
  bns: "bns",
  bnss: "bnss",
  bsa: "bsa",
  ipc: "ipc",
  crpc: "crpc",
  iea: "iea",
  pocso: "pocso",
  jj: "jj",
  "jj act": "jj",
  ndps: "ndps",
  mmdr: "mmdr",
  rba: "rba",
  arms: "arms",
};

function parseQuery(raw: string): { actSlug: string | null; rest: string } {
  const lower = raw.trim().toLowerCase();
  if (!lower) return { actSlug: null, rest: "" };

  const words = lower.split(/\s+/);

  if (words.length > 1) {
    const firstWord = words[0];
    if (ACT_KEYWORDS[firstWord]) {
      return { actSlug: ACT_KEYWORDS[firstWord], rest: words.slice(1).join(" ") };
    }
    const lastWord = words[words.length - 1];
    if (ACT_KEYWORDS[lastWord]) {
      return { actSlug: ACT_KEYWORDS[lastWord], rest: words.slice(0, -1).join(" ") };
    }
  } else if (ACT_KEYWORDS[lower]) {
    return { actSlug: ACT_KEYWORDS[lower], rest: "" };
  }

  return { actSlug: null, rest: lower };
}

export default function GlobalSearch() {
  const [query, setQuery] = useState("");
  const trimmed = query.trim().toLowerCase();
  const { actSlug: filterActSlug, rest: searchTerm } = parseQuery(query);

  const allSections: SearchResult[] = useMemo(() => {
    const out: SearchResult[] = [];
    for (const act of ACTS) {
      const chapters = extractChapters(act.mod);
      for (const chapter of chapters) {
        const sections = Array.isArray(chapter.sections) ? chapter.sections : [];
        for (const sec of sections) {
          out.push({ actSlug: act.slug, actShortName: act.shortName, section: sec });
        }
      }
    }
    return out;
  }, []);

  const results = useMemo(() => {
    if (!trimmed) return [];

    let candidates = allSections;
    if (filterActSlug) {
      candidates = candidates.filter((r) => r.actSlug === filterActSlug);
    }

    if (!searchTerm) {
      // Act name typed alone (or with no remainder) — show that act's sections
      return candidates.slice(0, 30);
    }

    return candidates
      .filter(({ section }) => {
        const secNum = getSectionNumber(section).toLowerCase();
        if (secNum === searchTerm || secNum.startsWith(searchTerm)) return true;
        const haystack = [
          section.title || "",
          section.punishment || "",
          section.notes || "",
          ...(Array.isArray(section.ingredients) ? section.ingredients : []),
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(searchTerm);
      })
      .slice(0, 30);
  }, [allSections, trimmed, filterActSlug, searchTerm]);

  return (
    <div className="mt-10">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <label className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B8A00]">
          Search any section — BNS, BNSS, BSA, IPC, CrPC and more
        </label>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='e.g. "103", "murder", "bail", "cheating"'
          className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none focus:border-[#0B8A00]"
        />
        {trimmed && (
          <p className="mt-2 text-sm font-semibold text-slate-500">
            {results.length} result{results.length === 1 ? "" : "s"} found
          </p>
        )}
      </div>

      {trimmed && (
        <div className="mt-4 space-y-3">
          {results.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center text-slate-500">
              No section matches "{query}".
            </div>
          )}

          {results.map((r, i) => (
            <div
              key={`${r.actSlug}-${getSectionNumber(r.section)}-${i}`}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-bold text-slate-600">
                  {r.actShortName}
                </span>
                <span className="rounded-full bg-[#0B8A00]/10 px-2.5 py-0.5 text-xs font-bold text-[#0B8A00]">
                  Section {getSectionNumber(r.section)}
                </span>
              </div>
              <h3 className="mt-2 font-semibold text-slate-900">{r.section.title}</h3>

              {Array.isArray(r.section.ingredients) && r.section.ingredients.length > 0 && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                  {r.section.ingredients.map((ing: string, idx: number) => (
                    <li key={idx}>{ing}</li>
                  ))}
                </ul>
              )}

              {r.section.punishment && (
                <p className="mt-3 text-sm font-medium text-slate-800">
                  <span className="font-bold text-slate-500">Punishment: </span>
                  {r.section.punishment}
                </p>
              )}

              <Link
                href={`/knowledge-centre/${r.actSlug}`}
                className="mt-3 inline-block text-sm font-semibold text-[#0B8A00] hover:opacity-75"
              >
                Open full {r.actShortName} page →
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
