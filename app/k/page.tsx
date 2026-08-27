import Link from "next/link";
import { deepLegalResearchData } from "@/lib/deepLegalResearch";

export default function KnowledgeCentrePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
            Legal Knowledge Centre
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Criminal Law Research
          </h1>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">
            Structured legal research covering BNS, BNSS, BSA and related
            criminal defence issues, evidence, bail and cross-examination.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {deepLegalResearchData.map((item) => {
            const slug = `${item.act.toLowerCase()}-${item.section
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")
              .replace(/^-|-$/g, "")}`;

            return (
              <Link
                key={`${item.act}-${item.section}`}
                href={`/k/${slug}`}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                    {item.act}
                  </span>

                  <span className="text-sm font-semibold text-gray-500">
                    § {item.section}
                  </span>
                </div>

                <h2 className="text-xl font-semibold leading-7 text-gray-900 group-hover:text-gray-700">
                  {item.title}
                </h2>

                {item.category && (
                  <p className="mt-3 text-sm font-medium text-gray-500">
                    {item.category}
                  </p>
                )}

                <p className="mt-5 text-sm font-semibold text-gray-900">
                  View Research →
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
