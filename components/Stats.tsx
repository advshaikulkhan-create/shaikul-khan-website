export default function Stats() {
  const stats = [
    ["1000+", "Cases Handled"],
    ["500+", "Bail Matters"],
    ["20+", "Court Appearances"],
    ["10+", "Years Experience"],
  ];

  return (
    <section className="border-y border-yellow-700/40 bg-[#080808]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 text-center lg:grid-cols-4">
        {stats.map(([number, label]) => (
          <div key={label}>
            <h2 className="text-5xl font-extrabold text-yellow-500">
              {number}
            </h2>
            <p className="mt-3 text-gray-400">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
