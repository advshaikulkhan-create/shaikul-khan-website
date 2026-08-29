import { bnssChaptersData } from "@/app/knowledge-centre/bnss-data";
import Link from "next/link";

export default async function KnowledgeCentreTopic({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentSlug = (slug || "").toLowerCase().trim();

  if (currentSlug === "bnss") {
    return (
      <main className="min-h-screen bg-[#F5F5F7] text-slate-900 font-sans pb-28">
        <section className="border-b border-slate-200 bg-white px-5 pt-8 sm:px-8 sm:pb-16 sm:pt-12">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/knowledge-centre"
              className="inline-flex items-center gap-1 text-sm font-bold text-[#B08A00] transition-opacity hover:opacity-75"
            >
              ← Back to Knowledge Centre
            </Link>

            <div className="mt-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-[#B08A00]/10 px-2.5 py-1 text-xs font-bold text-[#B08A00] uppercase tracking-wider">
                  Act No. 46 of 2023[span_0](start_span)[span_0](end_span)
                </span>
                <span className="rounded-md border border-emerald-500/30 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800">
                  Enforced: 1 July 2024
                </span>
                <span className="rounded-md border border-blue-500/30 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-800">
                  Replaces: CrPC, 1973[span_1](start_span)[span_1](end_span)
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)[span_2](start_span)[span_2](end_span)
              </h1>
              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600 sm:text-lg">
                Criminal procedure from FIR and investigation through arrest, search, remand, bail, trial and related proceedings[span_3](start_span)[span_3](end_span).
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs">
              <div>
                <span className="text-slate-500 uppercase font-semibold text-[10px] tracking-wider block">Total Chapters</span>
                <span className="text-base font-bold text-slate-900">39 Chapters[span_4](start_span)[span_4](end_span)</span>
              </div>
              <div>
                <span className="text-slate-500 uppercase font-semibold text-[10px] tracking-wider block">Total Sections</span>
                <span className="text-base font-bold text-slate-900">531 Sections[span_5](start_span)[span_5](end_span)</span>
              </div>
              <div>
                <span className="text-slate-500 uppercase font-semibold text-[10px] tracking-wider block">Enactment Date</span>
                <span className="text-base font-bold text-slate-900">25 Dec 2023</span>
              </div>
              <div>
                <span className="text-slate-500 uppercase font-semibold text-[10px] tracking-wider block">Status</span>
                <span className="text-base font-bold text-emerald-700">In Force (1 July 2024)</span>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="border-b border-slate-200 pb-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B08A00]">
                Statutory Table of Contents & Complete Sections
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl text-slate-950">
                Complete BNSS Master Index (Chapters I – XXXIX)
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Detailed chapter-wise breakdown and statutory sections mapping of the Bharatiya Nagarik Suraksha Sanhita, 2023[span_6](start_span)[span_6](end_span).
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {bnssChaptersData.map((ch: any, idx: number) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#B08A00] font-mono">
                        Chapter {ch.num} ({ch.roman})
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 mt-0.5">{ch.title}</h3>
                    </div>
                    <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-mono font-semibold text-amber-900">
                      Range: {ch.range}
                    </span>
                  </div>

                  <p className="mt-3 text-xs leading-relaxed text-slate-600 font-medium">
                    {ch.desc}
                  </p>

                  {ch.sections && ch.sections.length > 0 && (
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-3 border-t border-slate-100">
                      {ch.sections.map((sec: any, sIdx: number) => (
                        <div key={sIdx} className="bg-slate-50 rounded-lg p-2.5 text-xs border border-slate-100">
                          <span className="font-mono font-bold text-[#B08A00]">§ {sec[0]}</span>
                          <span className="text-slate-700 ml-1.5">{sec[1]}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-slate-900 font-sans px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/knowledge-centre" className="text-sm font-semibold text-[#B08A00]">
          ← Back to Knowledge Centre
        </Link>
        <div className="mt-8">
          <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-5xl uppercase">
            {currentSlug}
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
            Comprehensive legal research and procedural framework under development.
          </p>
        </div>
      </div>
    </main>
  );
}
