import Link from "next/link";
import GlobalSearch from "./GlobalSearch";

const acts = [
  {
    title: "Bharatiya Nyaya Sanhita, 2023",
    shortName: "BNS",
    description:
      "The principal criminal law framework governing offences and punishments in India.",
    slug: "bns",
  },
  {
    title: "Bharatiya Nagarik Suraksha Sanhita, 2023",
    shortName: "BNSS",
    description:
      "The procedural framework governing criminal investigation, inquiry, trial and criminal procedure.",
    slug: "bnss",
  },
  {
    title: "Bharatiya Sakshya Adhiniyam, 2023",
    shortName: "BSA",
    description:
      "The legal framework governing evidence, including electronic and digital evidence.",
    slug: "bsa",
  },
  {
    title: "Indian Penal Code, 1860",
    shortName: "IPC",
    description:
      "Reference material for offences and criminal law under the former Indian Penal Code.",
    slug: "ipc",
  },
  {
    title: "Code of Criminal Procedure, 1973",
    shortName: "CrPC",
    description:
      "Reference material for criminal procedure under the former Code of Criminal Procedure.",
    slug: "crpc",
  },
  {
    title: "Indian Evidence Act, 1872",
    shortName: "IEA",
    description:
      "Reference material for evidentiary law under the Indian Evidence Act.",
    slug: "iea",
  },
  {
    title: "Protection of Children from Sexual Offences Act",
    shortName: "POCSO",
    description:
      "Legal framework relating to offences against children and child protection.",
    slug: "pocso",
  },
  {
    title: "Juvenile Justice Act",
    shortName: "JJ Act",
    description:
      "Legal framework relating to children in conflict with law and child care and protection.",
    slug: "jj",
  },
  {
    title: "Narcotic Drugs and Psychotropic Substances Act",
    shortName: "NDPS",
    description:
      "Legal framework governing narcotic drugs, psychotropic substances and related offences.",
    slug: "ndps",
  },
  {
    title: "Arms Act",
    shortName: "Arms",
    description:
      "Legal framework governing arms, ammunition and related offences.",
    slug: "arms",
  },
  {
    title: "Mines and Minerals (Development and Regulation) Act",
    shortName: "MMDR",
    description:
      "Legal framework governing minerals, mining regulation and related offences.",
    slug: "mmdr",
  },
  {
    title: "Rajasthan Bovine Animal Act",
    shortName: "RBA",
    description:
      "Legal reference relating to Rajasthan laws concerning bovine animals and related offences.",
    slug: "rba",
  },
];

export default function KnowledgeCentre() {
  return (
    <main className="min-h-screen bg-[#F5F5F7] text-[#B8860B]">
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-[0.18em] text-[#0B8A00]">
            ADVOCATE SHAIKUL KHAN · KNOWLEDGE CENTRE
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-6xl">
            Legal Knowledge Centre
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Structured legal research and section-wise reference material
            covering criminal law, criminal procedure, evidence and important
            special statutes.
          </p>
        </div>

        <GlobalSearch />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {acts.map((act) => (
            <Link
              key={act.slug}
              href={`/knowledge-centre/${act.slug}`}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="text-xs font-semibold tracking-[0.16em] text-[#0B8A00]">
                  LEGAL ACT
                </span>

                <span className="text-lg text-slate-300 transition group-hover:-translate-x-1 group-hover:text-[#0B8A00]">
                  →
                </span>
              </div>

              <div className="mt-8 flex min-h-[190px] flex-col justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#0B8A00]">
                    {act.shortName}
                  </p>

                  <h2 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.02em] text-slate-900">
                    {act.title}
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {act.description}
                  </p>
                </div>

                <div className="mt-8 text-sm font-semibold text-[#0B8A00]">
                  Explore Sections →
                </div>
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-16 border-t border-slate-200 py-10 text-center">
          <p className="text-sm font-semibold tracking-wide text-[#0B8A00]">
            ADVOCATE SHAIKUL KHAN · KNOWLEDGE CENTRE
          </p>

          <p className="mt-3 text-sm text-slate-500">
            Structured legal research, section-wise analysis and practical legal
            guidance.
          </p>
        </section>
      </section>
    </main>
  );
}
