import Link from "next/link";
import { sections } from "../data";
import { deepLegalResearchData } from "@/lib/deepLegalResearch";

export default async function KnowledgeCentreTopic({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const currentSlug = (slug || "bns").toLowerCase().trim();

  // 1. यदि यूज़र BNS कार्ड खोलता है (Complete BNS Master Overview)
  if (currentSlug === "bns") {
    const bnsChapters = [
      { num: "Chapter I", title: "Preliminary", range: "§ 1 – § 3", desc: "Short title, application, definitions, and general principles." },
      { num: "Chapter II", title: "Of Punishments", range: "§ 4 – § 13", desc: "Death, life imprisonment, rigorous/simple, forfeiture, fine, community service." },
      { num: "Chapter III", title: "General Exceptions", range: "§ 14 – § 44", desc: "Mistake of fact, judicial acts, accident, necessity, consent, right of private defence." },
      { num: "Chapter IV", title: "Of Abetment, Criminal Conspiracy and Attempt", range: "§ 45 – § 62", desc: "Abetment in India/abroad, conspiracy agreement, and inchoate attempts." },
      { num: "Chapter V", title: "Of Offences Against Women and Children", range: "§ 63 – § 99", desc: "Rape, sexual assault, marriage by deceitful means, dowry death, gang rape, child protection." },
      { num: "Chapter VI", title: "Of Offences Affecting the Human Body", range: "§ 100 – § 146", desc: "Culpable homicide, murder, hit and run (§106), grievous hurt, kidnapping, abduction." },
      { num: "Chapter VII", title: "Of Offences Against the State", range: "§ 147 – § 158", desc: "Acts endangering sovereignty, unity and integrity of India (replacing Sedition), waging war." },
      { num: "Chapter VIII", title: "Of Offences Relating to the Army, Navy and Air Force", range: "§ 159 – § 168", desc: "Mutiny, desertion, abetment of insubordination." },
      { num: "Chapter IX", title: "Of Offences Relating to Elections", range: "§ 169 – § 177", desc: "Bribery, undue influence, false statement, illegal payments." },
      { num: "Chapter X", title: "Of Offences Relating to Coin, Bank-Notes and Currency", range: "§ 178 – § 188", desc: "Counterfeiting currency-notes, government stamps, possession." },
      { num: "Chapter XI", title: "Of Offences Against the Public Tranquillity", range: "§ 189 – § 197", desc: "Unlawful assembly, rioting, promoting enmity between classes, affray." },
      { num: "Chapter XII", title: "Of Offences by or Relating to Public Servants", range: "§ 198 – § 205", desc: "Public servant unlawfully engaging in trade, personating public servant." },
      { num: "Chapter XIII", title: "Of Contempts of the Lawful Authority of Public Servants", range: "§ 206 – § 226", desc: "Absconding to avoid service, non-attendance, refusal to sign statements." },
      { num: "Chapter XIV", title: "Of False Evidence and Offences Against Public Justice", range: "§ 227 – § 269", desc: "Giving false evidence (perjury), fabrication, harbouring offenders, destruction of evidence." },
      { num: "Chapter XV", title: "Of Offences Affecting Public Health, Safety, Decency & Morals", range: "§ 270 – § 297", desc: "Negligent acts likely to spread infection, adulteration of food/drugs, rash driving, public nuisance." },
      { num: "Chapter XVI", title: "Of Offences Relating to Religion", range: "§ 298 – § 302", desc: "Injuring or defiling place of worship, deliberate and malicious acts to outrage feelings." },
      { num: "Chapter XVII", title: "Of Offences Against Property", range: "§ 303 – § 334", desc: "Theft, extortion, robbery, dacoity, criminal misappropriation, criminal breach of trust, cheating (§318)." },
      { num: "Chapter XVIII", title: "Of Offences Relating to Documents and Property Marks", range: "§ 335 – § 350", desc: "Forgery, making false documents/electronic records, forged electronic records, trade marks." },
      { num: "Chapter XIX", title: "Of Criminal Intimidation, Insult, Annoyance, Defamation", range: "§ 351 – § 357", desc: "Criminal intimidation, intentional insult to provoke breach of peace, defamation." },
      { num: "Chapter XX", title: "Repeal and Savings", range: "§ 358", desc: "Repeal of the Indian Penal Code, 1860 with savings clause for ongoing trials." }
    ];

    const keyResearchProvisions = [
      { sec: "§ 3(5)", title: "Common Intention / Joint Liability", legacy: "IPC Sec. 34", desc: "Constructive criminal liability for acts done by several persons in furtherance of common intention." },
      { sec: "§ 61", title: "Criminal Conspiracy", legacy: "IPC Sec. 120B", desc: "Agreement between two or more persons to commit an illegal act or a legal act by illegal means." },
      { sec: "§ 62", title: "Attempt to Commit Offences", legacy: "IPC Sec. 511", desc: "Standard punishment formula for inchoate attempts (half of maximum imprisonment)." },
      { sec: "§ 106(1)", title: "Causing Death by Negligence", legacy: "IPC Sec. 304A", desc: "Rash or negligent acts not amounting to culpable homicide (Section 106(2) hit-and-run in abeyance)." },
      { sec: "§ 303", title: "Theft & Aggravated Theft", legacy: "IPC Sec. 378/379", desc: "Dishonest taking of movable property with community service introduction." },
      { sec: "§ 316(2)", title: "Criminal Breach of Trust", legacy: "IPC Sec. 406", desc: "Dishonest misappropriation of entrusted property (punishment increased to 5 years)." },
      { sec: "§ 318(4)", title: "Cheating & Dishonestly Inducing Delivery", legacy: "IPC Sec. 420", desc: "Deception inducing delivery of property or valuable security (up to 7 years imprisonment)." },
      { sec: "§ 336(3)", title: "Forgery of Valuable Security / Will", legacy: "IPC Sec. 467", desc: "Fabrication of valuable financial instruments and authority documents." },
      { sec: "§ 340(2)", title: "Using Forged Document / Electronic Record", legacy: "IPC Sec. 471", desc: "Fraudulent or dishonest use of forged physical documents or digital records as genuine." }
    ];

    return (
      <main className="min-h-screen bg-[#F5F5F7] text-slate-900 font-sans pb-28">
        {/* HEADER SECTION */}
        <section className="border-b border-slate-200 bg-white px-5 pb-12 pt-8 sm:px-8 sm:pb-16 sm:pt-12">
          <div className="mx-auto max-w-6xl">
            <Link
              href="/knowledge-centre"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#B08A00] transition-opacity hover:opacity-75"
            >
              ← Back to Knowledge Centre
            </Link>

            <div className="mt-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-[#B08A00]/10 px-2.5 py-1 text-xs font-bold text-[#B08A00] uppercase tracking-wider">
                  Act No. 45 of 2023
                </span>
                <span className="rounded-md border border-emerald-500/30 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800">
                  Enforced: 1 July 2024*
                </span>
                <span className="rounded-md border border-blue-500/30 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-800">
                  Replaces: IPC, 1860
                </span>
              </div>

              <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Bharatiya Nyaya Sanhita, 2023 (BNS)
              </h1>
              <p className="mt-4 max-w-4xl text-base leading-7 text-slate-600 sm:text-lg">
                The primary substantive criminal code of India governing offences, definitions, general exceptions, punishments, and criminal liability.
              </p>
            </div>

            {/* SEPARATE COMPLETE MAPPING ACTION BANNER */}
            <div className="mt-8 rounded-2xl border-2 border-[#B08A00]/30 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#B08A00]">
                  Full Statutory Transition Matrix
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  Complete IPC ⇄ BNS Section Mapping Directory
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-xl">
                  Search and cross-reference all substantive criminal provisions transitioning from IPC 1860 to BNS 2023 in an interactive full-table view.
                </p>
              </div>
              <Link
                href="/knowledge-centre/bns/mapping"
                className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#0F172A] px-5 py-3 text-xs font-bold text-white shadow-md hover:bg-black transition-all"
              >
                <span>⇄ Open All Mapping Sections</span>
                <span>→</span>
              </Link>
            </div>

            {/* QUICK STATS STRIP */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs">
              <div>
                <span className="text-slate-500 uppercase font-semibold text-[10px] tracking-wider block">Total Chapters</span>
                <span className="text-base font-bold text-slate-900">20 Chapters</span>
              </div>
              <div>
                <span className="text-slate-500 uppercase font-semibold text-[10px] tracking-wider block">Total Sections</span>
                <span className="text-base font-bold text-slate-900">358 Sections</span>
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

            {/* CRITICAL LEGAL NOTE */}
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/80 p-3.5 text-xs text-amber-900">
              <strong>*Important Statutory Exception:</strong> Section 106(2) regarding enhanced hit-and-run punishment has been kept in abeyance by the Central Government via commencement notification and is not yet in force.
            </div>
          </div>
        </section>

        {/* SECTION 1: KEY SECTION-WISE RESEARCH DIGEST */}
        <section className="bg-[#0F172A] px-5 py-14 text-white sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="border-b border-white/10 pb-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                Litigation Research Directory
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl text-white">
                Key BNS Provisions Mapped to IPC
              </h2>
              <p className="mt-2 text-sm text-slate-400">
                Core provisions with statutory ingredients, evidence rules, and defence strategies.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {keyResearchProvisions.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-xl hover:border-[#D4AF37]/50 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-[#D4AF37]">{item.sec}</span>
                    <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-mono text-blue-300">
                      Legacy: {item.legacy}
                    </span>
                  </div>
                  <h3 className="mt-2.5 text-base font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: COMPLETE 20 CHAPTERS INDEX */}
        <section className="px-5 py-14 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="border-b border-slate-200 pb-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B08A00]">
                Statutory Table of Contents
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-4xl text-slate-950">
                Complete BNS Chapter Index (I – XX)
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Overview of all 20 Chapters spanning 358 Sections of the Bharatiya Nyaya Sanhita, 2023.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              {bnsChapters.map((ch, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B08A00] font-mono">
                      {ch.num}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-mono font-semibold text-slate-700">
                      {ch.range}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-slate-900">{ch.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{ch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    );
  }

  // 2. अन्य किसी विशिष्ट टॉपिक/कार्ड के लिए सामान्य हैंडलर
  const allSections = Array.isArray(sections) ? sections : [];
  const cardItem = allSections
    .flatMap((section: any) => (Array.isArray(section?.items) ? section.items : []))
    .find((topic: any) => topic?.code?.toLowerCase() === currentSlug);

  const researchItem = deepLegalResearchData.find(
    (item) => item.act.toLowerCase() === currentSlug || item.section.toLowerCase().replace(/[^a-z0-9]/g, "") === currentSlug.replace(/[^a-z0-9]/g, "")
  );

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-slate-900 font-sans px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Link href="/knowledge-centre" className="text-sm font-semibold text-[#B08A00]">
          ← Back to Knowledge Centre
        </Link>
        <div className="mt-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B08A00]">
            {cardItem?.code || currentSlug.toUpperCase()}
          </span>
          <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-5xl">
            {cardItem?.title || researchItem?.title || currentSlug.toUpperCase()}
          </h1>
          <p className="mt-4 text-slate-600 leading-relaxed max-w-3xl">
            {cardItem?.description || researchItem?.category || "Comprehensive legal research and procedural framework under development."}
          </p>
        </div>

        {researchItem && (
          <div className="mt-10 rounded-2xl bg-[#0F172A] p-6 text-white sm:p-8">
            <span className="text-xs font-mono text-[#D4AF37]">PROVISION & STRATEGY</span>
            <p className="mt-3 text-xs italic leading-relaxed text-slate-300">"{researchItem.provision}"</p>
            {researchItem.punishment && (
              <p className="mt-3 text-xs text-amber-300"><strong>Punishment:</strong> {researchItem.punishment}</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
