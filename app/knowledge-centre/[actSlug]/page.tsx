import Link from "next/link";
import { notFound } from "next/navigation";
import { sections } from "../../../data/acts/bns";

type Props = {
  params: Promise<{
    actSlug: string;
  }>;
};

export default async function KnowledgeCentreTopic({ params }: Props) {
  const { actSlug: slug } = await params;

  const currentSlug = (slug || "").toLowerCase().trim();

  const section = sections.find((section) =>
    section.items.some((item) => item.slug === currentSlug)
  );

  const item = section?.items.find(
    (item) => item.slug === currentSlug
  );

  if (!section || !item) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F5F5F7] px-5 py-12 font-sans text-[#0F172A] sm:px-8">
      <div className="mx-auto max-w-5xl">

        <Link
          href="/knowledge-centre"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B8A00] transition-opacity hover:opacity-75"
        >
          ← Back to Knowledge Centre
        </Link>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B8A00]">
            {section.title}
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl">
            {item.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            {item.description}
          </p>
        </section>

        {item.overview && (
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0B8A00]">
              Overview
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Legal Overview
            </h2>

            <p className="mt-6 max-w-4xl text-base leading-8 text-slate-600 sm:text-lg">
              {item.overview}
            </p>
          </section>
        )}

        {item.legalFramework && item.legalFramework.length > 0 && (
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0B8A00]">
              Legal Framework
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Applicable Legal Framework
            </h2>

            <div className="mt-8 space-y-4">
              {item.legalFramework.map((point, index) => (
                <div
                  key={index}
                  className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0B8A00]/10 text-sm font-bold text-[#0B8A00]">
                    {index + 1}
                  </span>

                  <p className="leading-7 text-slate-700">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {item.procedure && item.procedure.length > 0 && (
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0B8A00]">
              Procedure
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Procedural Roadmap
            </h2>

            <div className="mt-8 space-y-5">
              {item.procedure.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-5 border-l-2 border-[#0B8A00]/30 pl-5"
                >
                  <span className="shrink-0 text-sm font-bold text-[#0B8A00]">
                    STEP {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="leading-7 text-slate-700">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {item.keyIssues && item.keyIssues.length > 0 && (
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0B8A00]">
              Key Legal Issues
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Questions Requiring Legal Examination
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {item.keyIssues.map((issue, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
                >
                  <p className="text-sm font-bold text-[#0B8A00]">
                    ISSUE {index + 1}
                  </p>

                  <p className="mt-3 leading-7 text-slate-700">
                    {issue}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {item.evidence && item.evidence.length > 0 && (
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0B8A00]">
              Evidence
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Evidence and Supporting Records
            </h2>

            <div className="mt-8 grid gap-3">
              {item.evidence.map((record, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-2xl bg-slate-50 p-5"
                >
                  <span className="mt-1 text-[#0B8A00]">✓</span>

                  <p className="leading-7 text-slate-700">
                    {record}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {item.judgments && item.judgments.length > 0 && (
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0B8A00]">
              Judicial Research
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Judicial Precedents
            </h2>

            <div className="mt-8 space-y-4">
              {item.judgments.map((judgment, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 p-6"
                >
                  <p className="text-xs font-bold uppercase tracking-wider text-[#0B8A00]">
                    Research Area {index + 1}
                  </p>

                  <p className="mt-3 leading-7 text-slate-700">
                    {judgment}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {item.documents && item.documents.length > 0 && (
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0B8A00]">
              Documents
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Required Documents and Applications
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {item.documents.map((document, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 p-5"
                >
                  <p className="text-xs font-bold text-[#0B8A00]">
                    DOCUMENT {index + 1}
                  </p>

                  <p className="mt-3 leading-7 text-slate-700">
                    {document}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {item.relatedTopics && item.relatedTopics.length > 0 && (
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0B8A00]">
              Related Research
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
              Related Topics
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {item.relatedTopics.map((topic, index) => (
                <span
                  key={index}
                  className="rounded-full border border-[#0B8A00]/20 bg-[#0B8A00]/5 px-5 py-3 text-sm font-semibold text-slate-700"
                >
                  {topic}
                </span>
              ))}
            </div>
          </section>
        )}

        <section className="mt-10 border-t border-slate-200 py-10 text-center">
          <p className="text-sm font-semibold tracking-wide text-[#0B8A00]">
            ADVOCATE SHAIKUL KHAN · KNOWLEDGE CENTRE
          </p>

          <p className="mt-3 text-sm text-slate-500">
            Structured legal research, procedural analysis and practical
            legal guidance.
          </p>
        </section>

      </div>
    </main>
  );
}
