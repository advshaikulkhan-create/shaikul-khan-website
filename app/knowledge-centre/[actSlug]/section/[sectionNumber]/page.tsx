import Link from "next/link";

import bnsData from "../../../../../data/acts/bns";
import bnssData from "../../../../../data/acts/bnss";
import bsaData from "../../../../../data/acts/bsa";
import crpcData from "../../../../../data/acts/crpc";
import ieaData from "../../../../../data/acts/iea";
import ipcData from "../../../../../data/acts/ipc";
import jjData from "../../../../../data/acts/jj";
import mmdrData from "../../../../../data/acts/mmdr";
import ndpsData from "../../../../../data/acts/ndps";
import pocsoData from "../../../../../data/acts/pocso";
import rbaData from "../../../../../data/acts/rba";
import armsData from "../../../../../data/acts/arms";

type PageProps = {
  params: Promise<{
    actSlug: string;
    sectionNumber: string;
  }>;
};

type UnknownRecord = Record<string, unknown>;

const acts: Record<string, unknown> = {
  bns: bnsData,
  bnss: bnssData,
  bsa: bsaData,
  crpc: crpcData,
  iea: ieaData,
  ipc: ipcData,
  jj: jjData,
  mmdr: mmdrData,
  ndps: ndpsData,
  pocso: pocsoData,
  rba: rbaData,
  arms: armsData,
};

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null;
}

function findSection(
  data: unknown,
  sectionNumber: string
): UnknownRecord | null {
  if (Array.isArray(data)) {
    for (const item of data) {
      const found = findSection(item, sectionNumber);

      if (found) {
        return found;
      }
    }

    return null;
  }

  if (!isRecord(data)) {
    return null;
  }

  const possibleNumbers = [
    data.section,
    data.code,
    data.number,
    data.num,
  ];

  for (const value of possibleNumbers) {
    if (String(value ?? "") === sectionNumber) {
      return data;
    }
  }

  for (const value of Object.values(data)) {
    const found = findSection(value, sectionNumber);

    if (found) {
      return found;
    }
  }

  return null;
}

function getString(
  record: UnknownRecord,
  keys: string[]
): string | null {
  for (const key of keys) {
    const value = record[key];

    if (typeof value === "string" && value.trim()) {
      return value;
    }
  }

  return null;
}

function getStringArray(
  record: UnknownRecord,
  keys: string[]
): string[] {
  for (const key of keys) {
    const value = record[key];

    if (Array.isArray(value)) {
      return value.filter(
        (item): item is string =>
          typeof item === "string" && item.trim().length > 0
      );
    }
  }

  return [];
}

export default async function SectionPage({
  params,
}: PageProps) {
  const { actSlug, sectionNumber } = await params;

  const actKey = actSlug.toLowerCase();
  const actData = acts[actKey];

  if (!actData) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Act not found
          </h1>

          <Link
            href="/knowledge-centre"
            className="mt-6 inline-block font-semibold text-[#0B8A00]"
          >
            ← Back to Knowledge Centre
          </Link>
        </div>
      </main>
    );
  }

  const sectionData = findSection(
    actData,
    sectionNumber
  );

  if (!sectionData) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#0B8A00]">
            {actKey}
          </p>

          <h1 className="mt-2 text-2xl font-bold text-slate-900">
            Section {sectionNumber}
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            This section&apos;s detailed reference material is in progress
            and will appear here shortly.
          </p>

          <Link
            href={`/knowledge-centre/${actSlug}`}
            className="mt-6 inline-block font-semibold text-[#0B8A00]"
          >
            ← Back to Act
          </Link>
        </div>
      </main>
    );
  }

  const title =
    getString(sectionData, [
      "title",
      "heading",
      "name",
    ]) ?? `Section ${sectionNumber}`;

  const ipcMapping = getString(sectionData, [
    "ipcMapping",
    "mapping",
  ]);

  const punishment = getString(sectionData, [
    "punishment",
    "penalty",
  ]);

  const notes = getString(sectionData, [
    "notes",
    "description",
    "desc",
  ]);

  const ingredients = getStringArray(
    sectionData,
    [
      "ingredients",
      "points",
      "subsections",
    ]
  );

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8">
        <Link
          href={`/knowledge-centre/${actSlug}`}
          className="text-sm font-semibold text-[#0B8A00]"
        >
          ← Back to Act
        </Link>

        <p className="mt-5 text-sm font-semibold uppercase tracking-wide text-[#0B8A00]">
          {actKey}
        </p>

        <h1 className="mt-2 text-3xl font-bold leading-tight text-slate-900">
          Section {sectionNumber}: {title}
        </h1>
      </div>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        {ipcMapping && (
          <div className="border-b border-slate-100 pb-5">
            <p className="text-sm font-semibold text-slate-500">
              Related / Previous Law Mapping
            </p>

            <p className="mt-1 font-medium text-slate-900">
              {ipcMapping}
            </p>
          </div>
        )}

        {ingredients.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-bold text-slate-900">
              Key Provisions
            </h2>

            <ul className="mt-4 space-y-3">
              {ingredients.map((item, index) => (
                <li
                  key={`${index}-${item}`}
                  className="rounded-lg bg-slate-50 p-4 text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {punishment && (
          <div className="mt-6">
            <h2 className="text-lg font-bold text-slate-900">
              Punishment / Consequence
            </h2>

            <p className="mt-2 text-slate-700">
              {punishment}
            </p>
          </div>
        )}

        {notes && (
          <div className="mt-6">
            <h2 className="text-lg font-bold text-slate-900">
              Legal Notes
            </h2>

            <p className="mt-2 whitespace-pre-line leading-7 text-slate-700">
              {notes}
            </p>
          </div>
        )}
      </section>

      <div className="mt-12 border-t border-slate-200 pt-8 text-center">
        <p className="text-sm font-semibold text-[#0B8A00]">
          Advocate Shaikul Khan · Knowledge Centre
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Structured legal research, procedural analysis and practical legal guidance.
        </p>
      </div>
    </main>
  );
}
