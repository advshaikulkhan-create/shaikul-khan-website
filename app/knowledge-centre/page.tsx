"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { sections } from "./data";
const allItems = sections.flatMap((section) => section.items);
export default function KnowledgeCentrePage() {
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) return sections;

    return sections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          `${item.code} ${item.title} ${item.description}`
            .toLowerCase()
            .includes(q)
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [query]);

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#0F172A]">
      {/* HERO */}
      <section className="px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold tracking-wide text-[#B08A00]">
              ADVOCATE SHAIKUL KHAN · KNOWLEDGE CENTRE
            </p>

            <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-7xl lg:text-8xl">
              Knowledge
              <br />
              Centre.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-500 sm:text-xl">
              Criminal Defence. Cyber Crime. Digital Evidence.
              <br className="hidden sm:block" />
              A structured legal research system built for serious litigation.
            </p>
          </div>

          {/* APPLE STYLE SEARCH */}
          <div className="mt-12 max-w-3xl">
            <label className="sr-only" htmlFor="knowledge-search">
              Search the Knowledge Centre
            </label>

            <div className="group flex items-center rounded-[22px] border border-black/[0.06] bg-white px-5 py-4 shadow-[0_10px_35px_rgba(15,23,42,0.06)] transition-all duration-300 focus-within:shadow-[0_16px_45px_rgba(15,23,42,0.10)]">
              <span className="mr-3 text-xl text-slate-400">⌕</span>

              <input
                id="knowledge-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search BNS, BNSS, electronic evidence, bail..."
                className="w-full bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-400 sm:text-lg"
              />

              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="ml-3 rounded-full px-2 py-1 text-sm text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            <p className="mt-4 text-sm text-slate-400">
              {allItems.length} research topics · Search across the entire hub
            </p>
          </div>
        </div>
      </section>

      {/* RESEARCH SECTIONS */}
      <div className="mx-auto max-w-6xl px-5 pb-28 sm:px-8">
        {filteredSections.length === 0 ? (
          <div className="rounded-[28px] bg-white px-6 py-20 text-center shadow-sm">
            <p className="text-lg font-medium">No research topic found.</p>
            <p className="mt-2 text-sm text-slate-500">
              Try BNS, BNSS, bail, evidence, NCRP or another legal topic.
            </p>
          </div>
        ) : (
          <div className="space-y-24">
            {filteredSections.map((section) => (
              <section key={section.id}>
                <div className="mb-10 max-w-3xl">
                  <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-[#B08A00]">
                    {section.eyebrow}
                  </p>

                  <h2 className="text-3xl font-semibold tracking-[-0.035em] sm:text-5xl">
                    {section.title}
                  </h2>

                  <p className="mt-4 text-base leading-7 text-slate-500 sm:text-lg">
                    {section.description}
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {section.items.map((item) => (
<Link href={`/knowledge-centre/${item.code.toLowerCase()}`}>
  <article
    key={item.code}
    className="group rounded-[28px] border ..."
  >
                      <div className="flex items-start justify-between gap-5">
                        <span className="text-sm font-semibold tracking-[0.12em] text-[#B08A00]">
                          {item.code}
                        </span>

                        <span className="text-lg text-slate-300 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#B08A00]">
                          →
                        </span>
                      </div>

                      <h3 className="mt-8 text-2xl font-semibold tracking-[-0.025em] text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-[15px] leading-7 text-slate-500">
                        {item.description}
                      </p>

                      <div className="mt-7 text-sm font-medium text-[#B08A00] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Explore research →
                      </div>
                    </article>
        </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>

      {/* RESEARCH METHOD */}
      <section className="bg-[#0F172A] px-5 py-24 text-white sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#D4AF37]">
            RESEARCH METHOD
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Provision to defence strategy.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Every future module will follow the same research architecture so
            that statutory law, procedure, evidence and defence analysis remain
            connected.
          </p>

          <div className="mt-14 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04]">
            <div className="grid divide-y divide-white/10 md:grid-cols-6 md:divide-x md:divide-y-0">
              {[
                "Provision",
                "Ingredients",
                "Evidence",
                "Procedure",
                "Case Law*",
                "Defence Strategy",
              ].map((step, index) => (
                <div key={step} className="p-6 sm:p-7">
                  <span className="text-xs text-[#D4AF37]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-base font-semibold sm:text-lg">
                    {step}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-5 text-xs text-slate-500">
            * Case Law/Citation will ultimately live on the separate Case Law
            section/page as planned.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#F5F5F7] px-5 py-24 text-center sm:px-8 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#B08A00]">
            BUILT FOR LITIGATION
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Research first.
            <br />
            Strategy follows.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
            Each topic will eventually open into a dedicated deep-research
            module covering the law, procedure, evidence and defence
            implications.
          </p>
        </div>
      </section>
    </main>
  );
}
