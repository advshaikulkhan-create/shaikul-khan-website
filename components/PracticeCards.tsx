export default function PracticeCards() {
  const areas = [
    "Cyber Crime & Digital Offences",
    "Bank Account Debit Freeze",
    "Bail Matters",
    "FIR Quashing",
    "Digital Evidence",
    "High Court Matters",
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-12 text-center text-5xl font-bold text-yellow-500">
        Practice Areas
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {areas.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-yellow-700/40 bg-[#111] p-8 hover:border-yellow-500 transition"
          >
            <h3 className="text-2xl font-bold text-yellow-400">
              {item}
            </h3>

            <p className="mt-4 text-gray-400">
              Professional legal assistance for {item}.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
