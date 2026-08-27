import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-800 text-white">

      {/* ================= NAVBAR ================= */}

      <nav className="sticky top-0 z-50 border-b border-yellow-700/40 bg-slate-800/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="flex items-center gap-4">

            <Image
              src="/images/logo.png"
              alt="Advocate Shaikul Khan Logo"
              width={70}
              height={70}
              priority
              className="rounded-full border-2 border-yellow-500 object-contain"
            />

            <div>
              <h2 className="text-2xl font-bold text-yellow-400">
                Advocate Shaikul Khan
              </h2>

              <p className="text-sm tracking-wide text-gray-400">
                Criminal Defence Lawyer | Cyber Crime Expert
              </p>
            </div>

          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-yellow-400 lg:flex">

            <a href="#">Home</a>

            <a href="#">About</a>

            <a href="#">Practice Areas</a>

            <a href="#">Knowledge Centre</a>

            <a href="#">Articles</a>

            <a href="#">Contact</a>

            <button className="rounded-lg border border-yellow-500 px-6 py-3 transition hover:bg-yellow-500 hover:text-black">
              Book Consultation
            </button>

          </div>

        </div>
      </nav>

      {/* ================= HERO ================= */}

<section className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row">

        <div className="max-w-2xl">

          <p className="mb-5 uppercase tracking-[8px] text-yellow-500">
            Criminal Defence • Cyber Crime
          </p>

          <h1 className="text-5xl font-extrabold leading-tight lg:text-7xl">

            Advocate

            <span className="block text-yellow-500">
              Shaikul Khan
            </span>

          </h1>

          <p className="mt-8 text-xl leading-10 text-gray-300">

            Professional Criminal Defence Lawyer specialising in
            Cyber Crime, Digital Evidence, High Court,
            Sessions Court, Banking Account Debit Freeze,
            Digital Investigation, IT Act, BNSS and BNS matters.

          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <button className="rounded-xl bg-yellow-500 px-8 py-4 text-lg font-bold text-black transition hover:bg-yellow-400">
              Book Consultation
            </button>

            <button className="rounded-xl border border-yellow-500 px-8 py-4 text-lg font-semibold text-yellow-400 transition hover:bg-yellow-500 hover:text-black">
              WhatsApp Now
            </button>

          </div>

        </div>

        <div className="flex items-center justify-center">

         <Image
  src="/images/logo.png"
  alt="Advocate Shaikul Khan"
  width={520}
  height={520}
  priority
  className="mx-auto w-full max-w-[520px] h-auto object-contain drop-shadow-[0_0_60px_rgba(234,179,8,0.45)]"
/>

        </div>

      </section>
      {/* ================= STATISTICS ================= */}

      <section className="border-y border-yellow-700/40 bg-[#080808]">

        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 text-center lg:grid-cols-4">

          {[
            ["1000+", "Cases Handled"],
            ["500+", "Bail Matters"],
            ["20+", "Court Appearances"],
            ["10+", "Years Experience"],
          ].map(([number, label]) => (

            <div key={label}>

              <h2 className="text-5xl font-extrabold text-yellow-500">
                {number}
              </h2>

              <p className="mt-3 text-lg text-gray-400">
                {label}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= PRACTICE AREAS ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <h2 className="text-center text-5xl font-bold text-yellow-500">
          Practice Areas
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-9 text-gray-400">
          Comprehensive Criminal Defence, Cyber Crime Litigation,
          High Court Representation and Banking Account Freeze
          matters across Rajasthan.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {[
            "Cyber Crime & Digital Offences",
            "Bail & Criminal Defence",
            "FIR & Investigation",
            "Economic Offences",
            "White Collar Crimes",
            "Women & Family Matters",
            "Special Criminal Laws",
            "Trial & Appeals",
            "Bank Account Debit Freeze",
          ].map((item) => (

            <div
              key={item}
              className="rounded-2xl border border-yellow-700 bg-[#111111] p-8 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
            >

              <h3 className="mb-5 text-3xl font-bold text-yellow-400">
                {item}
              </h3>

              <p className="text-lg leading-9 text-gray-400">
                Dedicated legal representation with strategic
                criminal defence, personalised legal advice and
                effective courtroom advocacy.
              </p>

            </div>

          ))}

        </div>

      </section>      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-[#050505] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-bold text-yellow-500">
            Why Choose Advocate Shaikul Khan
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-9 text-gray-400">
            Professional criminal defence with a strong focus on
            strategy, digital evidence, cyber investigation and
            effective courtroom advocacy.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Criminal Defence",
                desc: "Strategic representation from FIR to Trial and Appeal.",
              },
              {
                title: "Cyber Crime",
                desc: "UPI Fraud, Online Scam, IT Act, Digital Evidence and Electronic Records.",
              },
              {
                title: "High Court Practice",
                desc: "Bail, FIR Quashing, Criminal Revision and Writ Petitions.",
              },
              {
                title: "Client Confidentiality",
                desc: "Every matter handled with complete professionalism and privacy.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-yellow-700 bg-[#111111] p-8 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
              >

                <h3 className="mb-5 text-2xl font-bold text-yellow-400">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FEATURED SERVICES ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <h2 className="text-center text-5xl font-bold text-yellow-500">
          Featured Services
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {[
            "Bank Account Debit Freeze",
            "Cyber Fraud Defence",
            "Digital Evidence Analysis",
            "Anticipatory Bail",
            "FIR Quashing",
            "High Court Criminal Litigation",
          ].map((service) => (

            <div
              key={service}
              className="rounded-2xl border border-yellow-700 bg-[#111111] p-10 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
            >

              <h3 className="text-2xl font-bold text-yellow-400">
                {service}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Professional legal assistance with personalised
                strategy, strong courtroom representation and
                practical legal solutions.
              </p>

            </div>

          ))}

        </div>

      </section>      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-[#050505] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-bold text-yellow-500">
            Why Choose Advocate Shaikul Khan
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-9 text-gray-400">
            Professional criminal defence with a strong focus on
            strategy, digital evidence, cyber investigation and
            effective courtroom advocacy.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Criminal Defence",
                desc: "Strategic representation from FIR to Trial and Appeal.",
              },
              {
                title: "Cyber Crime",
                desc: "UPI Fraud, Online Scam, IT Act, Digital Evidence and Electronic Records.",
              },
              {
                title: "High Court Practice",
                desc: "Bail, FIR Quashing, Criminal Revision and Writ Petitions.",
              },
              {
                title: "Client Confidentiality",
                desc: "Every matter handled with complete professionalism and privacy.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-yellow-700 bg-[#111111] p-8 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
              >

                <h3 className="mb-5 text-2xl font-bold text-yellow-400">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FEATURED SERVICES ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <h2 className="text-center text-5xl font-bold text-yellow-500">
          Featured Services
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {[
            "Bank Account Debit Freeze",
            "Cyber Fraud Defence",
            "Digital Evidence Analysis",
            "Anticipatory Bail",
            "FIR Quashing",
            "High Court Criminal Litigation",
          ].map((service) => (

            <div
              key={service}
              className="rounded-2xl border border-yellow-700 bg-[#111111] p-10 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
            >

              <h3 className="text-2xl font-bold text-yellow-400">
                {service}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Professional legal assistance with personalised
                strategy, strong courtroom representation and
                practical legal solutions.
              </p>

            </div>

          ))}

        </div>

      </section>
      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-[#050505] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-bold text-yellow-500">
            Why Choose Advocate Shaikul Khan
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-9 text-gray-400">
            Professional criminal defence with a strong focus on
            strategy, digital evidence, cyber investigation and
            effective courtroom advocacy.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Criminal Defence",
                desc: "Strategic representation from FIR to Trial and Appeal.",
              },
              {
                title: "Cyber Crime",
                desc: "UPI Fraud, Online Scam, IT Act, Digital Evidence and Electronic Records.",
              },
              {
                title: "High Court Practice",
                desc: "Bail, FIR Quashing, Criminal Revision and Writ Petitions.",
              },
              {
                title: "Client Confidentiality",
                desc: "Every matter handled with complete professionalism and privacy.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-yellow-700 bg-[#111111] p-8 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
              >

                <h3 className="mb-5 text-2xl font-bold text-yellow-400">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FEATURED SERVICES ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <h2 className="text-center text-5xl font-bold text-yellow-500">
          Featured Services
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {[
            "Bank Account Debit Freeze",
            "Cyber Fraud Defence",
            "Digital Evidence Analysis",
            "Anticipatory Bail",
            "FIR Quashing",
            "High Court Criminal Litigation",
          ].map((service) => (

            <div
              key={service}
              className="rounded-2xl border border-yellow-700 bg-[#111111] p-10 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
            >

              <h3 className="text-2xl font-bold text-yellow-400">
                {service}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Professional legal assistance with personalised
                strategy, strong courtroom representation and
                practical legal solutions.
              </p>

            </div>

          ))}

        </div>

      </section>
      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-[#050505] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-bold text-yellow-500">
            Why Choose Advocate Shaikul Khan
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-9 text-gray-400">
            Professional criminal defence with a strong focus on
            strategy, digital evidence, cyber investigation and
            effective courtroom advocacy.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Criminal Defence",
                desc: "Strategic representation from FIR to Trial and Appeal.",
              },
              {
                title: "Cyber Crime",
                desc: "UPI Fraud, Online Scam, IT Act, Digital Evidence and Electronic Records.",
              },
              {
                title: "High Court Practice",
                desc: "Bail, FIR Quashing, Criminal Revision and Writ Petitions.",
              },
              {
                title: "Client Confidentiality",
                desc: "Every matter handled with complete professionalism and privacy.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-yellow-700 bg-[#111111] p-8 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
              >

                <h3 className="mb-5 text-2xl font-bold text-yellow-400">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FEATURED SERVICES ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <h2 className="text-center text-5xl font-bold text-yellow-500">
          Featured Services
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {[
            "Bank Account Debit Freeze",
            "Cyber Fraud Defence",
            "Digital Evidence Analysis",
            "Anticipatory Bail",
            "FIR Quashing",
            "High Court Criminal Litigation",
          ].map((service) => (

            <div
              key={service}
              className="rounded-2xl border border-yellow-700 bg-[#111111] p-10 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
            >

              <h3 className="text-2xl font-bold text-yellow-400">
                {service}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Professional legal assistance with personalised
                strategy, strong courtroom representation and
                practical legal solutions.
              </p>

            </div>

          ))}

        </div>

      </section>
      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-[#050505] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-bold text-yellow-500">
            Why Choose Advocate Shaikul Khan
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-9 text-gray-400">
            Professional criminal defence with a strong focus on
            strategy, digital evidence, cyber investigation and
            effective courtroom advocacy.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Criminal Defence",
                desc: "Strategic representation from FIR to Trial and Appeal.",
              },
              {
                title: "Cyber Crime",
                desc: "UPI Fraud, Online Scam, IT Act, Digital Evidence and Electronic Records.",
              },
              {
                title: "High Court Practice",
                desc: "Bail, FIR Quashing, Criminal Revision and Writ Petitions.",
              },
              {
                title: "Client Confidentiality",
                desc: "Every matter handled with complete professionalism and privacy.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-yellow-700 bg-[#111111] p-8 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
              >

                <h3 className="mb-5 text-2xl font-bold text-yellow-400">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FEATURED SERVICES ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <h2 className="text-center text-5xl font-bold text-yellow-500">
          Featured Services
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {[
            "Bank Account Debit Freeze",
            "Cyber Fraud Defence",
            "Digital Evidence Analysis",
            "Anticipatory Bail",
            "FIR Quashing",
            "High Court Criminal Litigation",
          ].map((service) => (

            <div
              key={service}
              className="rounded-2xl border border-yellow-700 bg-[#111111] p-10 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
            >

              <h3 className="text-2xl font-bold text-yellow-400">
                {service}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Professional legal assistance with personalised
                strategy, strong courtroom representation and
                practical legal solutions.
              </p>

            </div>

          ))}

        </div>

      </section>      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-[#050505] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-bold text-yellow-500">
            Why Choose Advocate Shaikul Khan
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-9 text-gray-400">
            Professional criminal defence with a strong focus on
            strategy, digital evidence, cyber investigation and
            effective courtroom advocacy.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Criminal Defence",
                desc: "Strategic representation from FIR to Trial and Appeal.",
              },
              {
                title: "Cyber Crime",
                desc: "UPI Fraud, Online Scam, IT Act, Digital Evidence and Electronic Records.",
              },
              {
                title: "High Court Practice",
                desc: "Bail, FIR Quashing, Criminal Revision and Writ Petitions.",
              },
              {
                title: "Client Confidentiality",
                desc: "Every matter handled with complete professionalism and privacy.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-yellow-700 bg-[#111111] p-8 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
              >

                <h3 className="mb-5 text-2xl font-bold text-yellow-400">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FEATURED SERVICES ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <h2 className="text-center text-5xl font-bold text-yellow-500">
          Featured Services
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {[
            "Bank Account Debit Freeze",
            "Cyber Fraud Defence",
            "Digital Evidence Analysis",
            "Anticipatory Bail",
            "FIR Quashing",
            "High Court Criminal Litigation",
          ].map((service) => (

            <div
              key={service}
              className="rounded-2xl border border-yellow-700 bg-[#111111] p-10 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
            >

              <h3 className="text-2xl font-bold text-yellow-400">
                {service}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Professional legal assistance with personalised
                strategy, strong courtroom representation and
                practical legal solutions.
              </p>

            </div>

          ))}

        </div>

      </section>      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-[#050505] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-bold text-yellow-500">
            Why Choose Advocate Shaikul Khan
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-9 text-gray-400">
            Professional criminal defence with a strong focus on
            strategy, digital evidence, cyber investigation and
            effective courtroom advocacy.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Criminal Defence",
                desc: "Strategic representation from FIR to Trial and Appeal.",
              },
              {
                title: "Cyber Crime",
                desc: "UPI Fraud, Online Scam, IT Act, Digital Evidence and Electronic Records.",
              },
              {
                title: "High Court Practice",
                desc: "Bail, FIR Quashing, Criminal Revision and Writ Petitions.",
              },
              {
                title: "Client Confidentiality",
                desc: "Every matter handled with complete professionalism and privacy.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-yellow-700 bg-[#111111] p-8 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
              >

                <h3 className="mb-5 text-2xl font-bold text-yellow-400">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FEATURED SERVICES ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <h2 className="text-center text-5xl font-bold text-yellow-500">
          Featured Services
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {[
            "Bank Account Debit Freeze",
            "Cyber Fraud Defence",
            "Digital Evidence Analysis",
            "Anticipatory Bail",
            "FIR Quashing",
            "High Court Criminal Litigation",
          ].map((service) => (

            <div
              key={service}
              className="rounded-2xl border border-yellow-700 bg-[#111111] p-10 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
            >

              <h3 className="text-2xl font-bold text-yellow-400">
                {service}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Professional legal assistance with personalised
                strategy, strong courtroom representation and
                practical legal solutions.
              </p>

            </div>

          ))}

        </div>

      </section>
      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-[#050505] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-bold text-yellow-500">
            Why Choose Advocate Shaikul Khan
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-9 text-gray-400">
            Professional criminal defence with a strong focus on
            strategy, digital evidence, cyber investigation and
            effective courtroom advocacy.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Criminal Defence",
                desc: "Strategic representation from FIR to Trial and Appeal.",
              },
              {
                title: "Cyber Crime",
                desc: "UPI Fraud, Online Scam, IT Act, Digital Evidence and Electronic Records.",
              },
              {
                title: "High Court Practice",
                desc: "Bail, FIR Quashing, Criminal Revision and Writ Petitions.",
              },
              {
                title: "Client Confidentiality",
                desc: "Every matter handled with complete professionalism and privacy.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-yellow-700 bg-[#111111] p-8 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
              >

                <h3 className="mb-5 text-2xl font-bold text-yellow-400">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FEATURED SERVICES ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <h2 className="text-center text-5xl font-bold text-yellow-500">
          Featured Services
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {[
            "Bank Account Debit Freeze",
            "Cyber Fraud Defence",
            "Digital Evidence Analysis",
            "Anticipatory Bail",
            "FIR Quashing",
            "High Court Criminal Litigation",
          ].map((service) => (

            <div
              key={service}
              className="rounded-2xl border border-yellow-700 bg-[#111111] p-10 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
            >

              <h3 className="text-2xl font-bold text-yellow-400">
                {service}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Professional legal assistance with personalised
                strategy, strong courtroom representation and
                practical legal solutions.
              </p>

            </div>

          ))}

        </div>

      </section>
      {/* ================= WHY CHOOSE US ================= */}

      <section className="bg-[#050505] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-bold text-yellow-500">
            Why Choose Advocate Shaikul Khan
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-center text-xl leading-9 text-gray-400">
            Professional criminal defence with a strong focus on
            strategy, digital evidence, cyber investigation and
            effective courtroom advocacy.
          </p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Criminal Defence",
                desc: "Strategic representation from FIR to Trial and Appeal.",
              },
              {
                title: "Cyber Crime",
                desc: "UPI Fraud, Online Scam, IT Act, Digital Evidence and Electronic Records.",
              },
              {
                title: "High Court Practice",
                desc: "Bail, FIR Quashing, Criminal Revision and Writ Petitions.",
              },
              {
                title: "Client Confidentiality",
                desc: "Every matter handled with complete professionalism and privacy.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-2xl border border-yellow-700 bg-[#111111] p-8 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
              >

                <h3 className="mb-5 text-2xl font-bold text-yellow-400">
                  {item.title}
                </h3>

                <p className="leading-8 text-gray-400">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FEATURED SERVICES ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <h2 className="text-center text-5xl font-bold text-yellow-500">
          Featured Services
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {[
            "Bank Account Debit Freeze",
            "Cyber Fraud Defence",
            "Digital Evidence Analysis",
            "Anticipatory Bail",
            "FIR Quashing",
            "High Court Criminal Litigation",
          ].map((service) => (

            <div
              key={service}
              className="rounded-2xl border border-yellow-700 bg-[#111111] p-10 transition hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.20)]"
            >

              <h3 className="text-2xl font-bold text-yellow-400">
                {service}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                Professional legal assistance with personalised
                strategy, strong courtroom representation and
                practical legal solutions.
              </p>

            </div>

          ))}

        </div>

      </section>
      {/* ================= COURT EXPERIENCE ================= */}

      <section className="bg-[#080808] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-5xl font-bold text-yellow-500">
            Court Experience
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              "Rajasthan High Court",
              "District & Sessions Court",
              "Cyber Crime Cases",
              "Criminal Appeals",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl border border-yellow-700 bg-[#111111] p-8 text-center"
              >

                <h3 className="text-2xl font-bold text-yellow-400">
                  {item}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= LATEST ARTICLES ================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <h2 className="text-center text-5xl font-bold text-yellow-500">
          Latest Articles
        </h2>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {[
            "Cyber Crime Investigation",
            "Bank Account Debit Freeze",
            "Digital Evidence & Electronic Records",
          ].map((item) => (

            <div
              key={item}
              className="rounded-2xl border border-yellow-700 bg-[#111111] p-8"
            >

              <h3 className="text-2xl font-bold text-yellow-400">
                {item}
              </h3>

              <p className="mt-4 text-gray-400">
                Read practical legal insights and recent updates.
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section className="bg-[#050505] py-24">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-5xl font-bold text-yellow-500">
            Contact Advocate Shaikul Khan
          </h2>

          <p className="mt-6 text-xl text-gray-400">
            Confidential Legal Consultation for Criminal Defence,
            Cyber Crime and High Court Matters.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <button className="rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black">
              Book Consultation
            </button>

            <button className="rounded-xl border border-yellow-500 px-8 py-4 text-yellow-400">
              WhatsApp
            </button>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-yellow-700/40 bg-slate-800 py-10">

        <div className="mx-auto max-w-7xl px-6 text-center text-gray-500">

          © 2026 Advocate Shaikul Khan.
          All Rights Reserved.

        </div>

      </footer>

    </main>
  );
}

