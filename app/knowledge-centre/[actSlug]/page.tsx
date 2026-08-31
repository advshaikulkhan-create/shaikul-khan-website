import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    actSlug: string;
  }>;
};

// Presentation metadata for each act. This is UI copy, not legal content —
// safe to keep in code rather than in the data files.
const ACT_META: Record<string, { title: string; eyebrow: string; description: string }> = {
  bns: {
    title: "Bharatiya Nyaya Sanhita, 2023",
    eyebrow: "BNS",
    description:
      "The principal substantive criminal law statute of India, in force from 1 July 2024 — offences, ingredients and punishments, section by section.",
  },
  bnss: {
    title: "Bharatiya Nagarik Suraksha Sanhita, 2023",
    eyebrow: "BNSS",
    description: "The procedural framework governing criminal investigation, inquiry, trial and related proceedings.",
  },
  bsa: {
    title: "Bharatiya Sakshya Adhiniyam, 2023",
    eyebrow: "BSA",
    description: "The legal framework governing evidence, including electronic and digital evidence.",
  },
  ipc: {
    title: "Indian Penal Code, 1860",
    eyebrow: "IPC",
    description: "Reference material for offences and criminal law under the former Indian Penal Code.",
  },
  crpc: {
    title: "Code of Criminal Procedure, 1973",
    eyebrow: "CrPC",
    description: "Reference material for criminal procedure under the former Code of Criminal Procedure.",
  },
  iea: {
    title: "Indian Evidence Act, 1872",
    eyebrow: "IEA",
    description: "Reference material for evidentiary law under the Indian Evidence Act.",
  },
  pocso: {
    title: "Protection of Children from Sexual Offences Act",
    eyebrow: "POCSO",
    description: "Legal framework relating to offences against children and child protection.",
  },
  jj: {
    title: "Juvenile Justice Act",
    eyebrow: "JJ Act",
    description: "Legal framework relating to children in conflict with law and child care and protection.",
  },
  ndps: {
    title: "Narcotic Drugs and Psychotropic Substances Act",
    eyebrow: "NDPS",
    description: "Legal framework governing narcotic drugs and psychotropic substances offences.",
  },
  mmdr: {
    title: "Mines and Minerals (Development and Regulation) Act",
    eyebrow: "MMDR",
    description: "Legal framework governing mining and mineral development, including illegal mining offences.",
  },
  rba: {
    title: "Rajasthan Excise Act",
    eyebrow: "Excise",
    description: "State excise law governing liquor and excise violations in Rajasthan.",
  },
  arms: {
    title: "Arms Act",
    eyebrow: "Arms Act",
    description: "Legal framework governing possession, licensing and offences relating to arms and ammunition.",
  },
};

// Maps a slug to its data-file loader. Add a new act by adding one line here
// once its data file exists in data/acts/.
const ACT_LOADERS: Record<string, () => Promise<any>> = {
  bns: () => import("../../../data/acts/bns"),
  bnss: () => import("../../../data/acts/bnss"),
  bsa: () => import("../../../data/acts/bsa"),
  ipc: () => import("../../../data/acts/ipc"),
  crpc: () => import("../../../data/acts/crpc"),
  iea: () => import("../../../data/acts/iea"),
  pocso: () => import("../../../data/acts/pocso"),
  jj: () => import("../../../data/acts/jj"),
  ndps: () => import("../../../data/acts/ndps"),
  mmdr: () => import("../../../data/acts/mmdr"),
  rba: () => import("../../../data/acts/rba"),
  arms: () => import("../../../data/acts/arms"),
};

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

export default async function KnowledgeCentreTopic({ params }: Props) {
  const { actSlug } = await params;
  const slug = (actSlug || "").toLowerCase().trim();

  const meta = ACT_META[slug];
  const loader = ACT_LOADERS[slug];

  if (!meta || !loader) {
    notFound();
  }

  let mod: any = null;
  try {
    mod = await loader();
  } catch {
    mod = null;
  }

  const chapters: BNSChapter[] | undefined = mod?.bnsChapters ?? mod?.default;
  const hasRichContent = Array.isArray(chapters) && chapters.length > 0;

  const totalSections = hasRichContent
    ? chapters!.reduce((sum, ch) => sum + (ch.sections?.length || 0), 0)
    : 0;

  return (
    <main className="min-h-screen bg-[#F5F5F7] px-5 py-12 font-sans text-[#0F172A] sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/knowledge-centre"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B8A00] transition-opacity hover:opacity-75"
        >
          ← Back to Knowledge Centre
        </Link>

        {/* Hero */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-12">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B8A00]">
            {meta.eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 sm:text-6xl">
            {meta.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            {meta.description}
          </p>
          {hasRichContent && (
            <p className="mt-6 text-sm font-semibold text-slate-500">
              {totalSections} sections indexed across {chapters!.length} chapters
            </p>
          )}
        </section>

        {/* Content */}
        {hasRichContent ? (
          <div className="mt-8 space-y-8">
            {chapters!.map((chapter) => (
              <section
                key={chapter.chapterNum}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B8A00]">
                  Chapter {chapter.chapterNum}
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                  {chapter.title}
                </h2>
                {chapter.sections.length > 0 && (
                  <p className="mt-2 text-sm font-semibold text-slate-500">
                    {meta.eyebrow} Section {chapter.sections[0].section} to Section{" "}
                    {chapter.sections[chapter.sections.length - 1].section} — {chapter.sections.length}{" "}
                    {chapter.sections.length === 1 ? "section" : "sections"} in this chapter
                  </p>
                )}

                <div className="mt-6 space-y-3">
                  {chapter.sections.map((sec) => (
                    <details
                      key={sec.section}
                      className="group rounded-2xl border border-slate-200 bg-[#FAFAFA] open:bg-white open:shadow-sm"
                    >
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4">
                        <span className="flex items-baseline gap-3">
                          <span className="shrink-0 rounded-full bg-[#0B8A00]/10 px-2.5 py-0.5 text-sm font-bold text-[#0B8A00]">
                            {meta.eyebrow} Section {sec.section}
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
        ) : (
          <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm sm:p-16">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#0B8A00]">
              Coming soon
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-950">
              Section-wise content for {meta.title} is being added
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              This act's detailed, section-wise reference material is in progress and will appear
              here shortly.
            </p>
          </section>
        )}

        <div className="mt-12 border-t border-slate-200 pt-8 text-center">
          <p className="text-sm font-semibold text-[#0B8A00]">
            Advocate Shaikul Khan · Knowledge Centre
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Structured legal research, procedural analysis and practical legal guidance.
          </p>
        </div>
      </div>
    </main>
  );
}
