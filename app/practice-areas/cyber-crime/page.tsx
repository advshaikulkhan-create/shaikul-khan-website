"use client";
import { useEffect, useState } from "react";

const slideData = [
  {
    image: "/images/1-image-web.png",
    tag: "Cyber Crime Defence",
    title: "Digital Evidence",
    desc: "Mastering electronic records and digital footprints for flawless courtroom defence and cross-examination.",
  },
  {
    image: "/images/2-image-web.png",
    tag: "Investigation Expert",
    title: "Cyber Investigation",
    desc: "Strategic unravelling of complex cybercrimes, hacking, data breaches, and digital forensics.",
  },
  {
    image: "/images/3-image-web.png",
    tag: "Appellate Practice",
    title: "High Court Litigation",
    desc: "Aggressive, result-oriented representation and appellate practice before the Rajasthan High Court.",
  },
  {
    image: "/images/4-image-web.png",
    tag: "Financial Crimes",
    title: "Banking Fraud",
    desc: "Defending complex UPI scams, account debit freezes, and online banking fraud allegations.",
  },
  {
    image: "/images/5-image-web.png",
    tag: "Modern Tech Law",
    title: "Cryptocurrency",
    desc: "Navigating the legal complexities of crypto assets, wallet tracing, and blockchain forensics.",
  },
  {
    image: "/images/6-image-web.png",
    tag: "IT Act • BSA",
    title: "Electronic Evidence",
    desc: "Strict legal compliance and defence strategies under the Information Technology Act & BSA.",
  },
  {
    image: "/images/7-image-web.png",
    tag: "Strategic Defence",
    title: "Cyber Defence Strategy",
    desc: "Customized, high-end legal strategies protecting your constitutional rights in the digital age.",
  },
];

const processSteps = [
  { step: "01", title: "Evidence Seizure & Analysis", desc: "Immediate review of digital footprints, server logs, and electronic records." },
  { step: "02", title: "Notice & Summons Defence", desc: "Strategic response to cyber cell notices under Section 41A CrPC / BNSS." },
  { step: "03", title: "Account Unfreezing & Bail", desc: "Legal petitions for de-freezing bank accounts and securing anticipatory bail." },
  { step: "04", title: "High Court Trial & Quashing", desc: "Aggressive litigation and FIR quashing before the High Court." },
];

const knowledgeItems = [
  { title: "Hash Value & Integrity", desc: "Ensuring electronic records maintain mathematical integrity under Section 63 BSA.", icon: "🔐" },
  { title: "Chain of Custody", desc: "Documenting every handling phase of digital devices to prevent evidence tampering.", icon: "📋" },
  { title: "IP Tracking & CDR", desc: "Decoding Internet Protocol logs, Cell Tower dumps, and subscriber details.", icon: "🌐" },
  { title: "Debit Freeze Legalities", desc: "Challenging arbitrary cyber cell merchant account and bank freezes.", icon: "💳" },
];

const faqData = [
  { q: "What should I do if my bank account is frozen due to cyber complaints?", desc: "Immediately identify the reporting police station via your bank, analyze the transaction trail, and file a formal representation or petition for de-freezing." },
  { q: "How is electronic evidence verified under the new criminal laws?", desc: "Under the Bharatiya Sakshya Adhiniyam (BSA), electronic records require strict certification and hash-value verification to be admissible in court." },
  { q: "Can anticipatory bail be secured in cyber fraud cases?", desc: "Yes, with robust technical defense demonstrating lack of direct mens rea and cooperation with the investigation." },
];

export default function CyberCrimeCompletePage() {
  const [active, setActive] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slideData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-yellow-500 selection:text-[#0F172A]">
      
      {/* 1. HERO SECTION */}
      <section className="relative h-[720px] md:h-[800px] w-full overflow-hidden bg-black text-white">
        {slideData.map((slide, idx) => (
          <div key={idx} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${active === idx ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
            <div className={`absolute inset-0 transition-transform duration-[10000ms] ease-out ${active === idx ? "scale-100" : "scale-[1.15]"}`}>
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover object-center" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/25" />

            <div className="absolute inset-0 z-20 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-16">
              <div className="max-w-3xl">
                <div className="mb-8 flex flex-wrap items-center gap-6 border-l-[3px] border-yellow-500 pl-5">
                  <span className="text-sm font-black tracking-[0.25em] text-[#0F172A] uppercase md:text-lg">Advocate Shaikul Khan</span>
                  <span className="hidden h-1.5 w-1.5 rounded-full bg-yellow-500 md:block"></span>
                  <span className="text-xs font-bold text-[#EAB308] uppercase tracking-widest">Rajasthan High Court</span>
                </div>
                <span className="mb-6 inline-block rounded-full border border-yellow-400/40 bg-yellow-500/10 px-6 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#EAB308] backdrop-blur-md">
                  {slide.tag}
                </span>
                <h1 className="text-5xl font-black leading-[1.1] text-white md:text-[75px]">{slide.title}</h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">{slide.desc}</p>
                
                <div className="mt-10 flex flex-wrap gap-6">
                  <button className="rounded-xl bg-yellow-500 px-8 py-4 text-sm font-black uppercase tracking-wider text-[#0F172A] transition-all hover:bg-yellow-400">
                    Book Consultation
                  </button>
                  <button className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-lg hover:border-[#EAB308]">
                    WhatsApp Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-10 left-6 z-30 flex gap-3 md:left-1/2 md:-translate-x-1/2">
          {slideData.map((_, idx) => (
            <button key={idx} onClick={() => setActive(idx)} className={`h-1.5 transition-all duration-700 rounded-full ${active === idx ? "w-16 bg-yellow-500" : "w-6 bg-white/30"}`} />
          ))}
        </div>
      </section>

      {/* 2. PROFESSIONAL VIDEO SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#EAB308] font-bold uppercase tracking-widest text-sm">Visual Insights</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3 mb-6">Digital Forensics & Courtroom Strategy</h2>
            <p className="text-slate-500 leading-relaxed text-lg mb-6">
              Watch how digital evidence, server logs, and IP tracking form the backbone of modern criminal defense in cyber crime litigation.
            </p>
            <div className="flex items-center gap-6 text-sm font-bold text-[#EAB308]">
              <span>✓ High Court Representation</span>
              <span>✓ Electronic Evidence Expert</span>
            </div>
          </div>
          <div className="relative h-[320px] md:h-[400px] rounded-3xl overflow-hidden border border-yellow-500/30 shadow-[0_0_40px_rgba(234,179,8,0.15)] bg-white flex items-center justify-center">
             <img
  src="/images/2-image-web.png"
  alt="Digital Forensics & Courtroom Strategy"
  className="w-full h-full object-cover"
/>
          </div>
        </div>
      </section>

      {/* 3. INVESTIGATION PROCESS (Timeline & Flow) */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#EAB308] font-bold uppercase tracking-widest text-sm">Step-by-Step Execution</span>
          <h2 className="text-3xl md:text-5xl font-black mt-3">Cyber Crime Defence Lifecycle</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-[#EAB308] transition-all group">
              <span className="text-4xl font-black text-[#EAB308]/40 group-hover:text-[#EAB308] transition-colors">{item.step}</span>
              <h3 className="text-xl font-bold mt-4 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. KNOWLEDGE CENTRE CARDS */}
      <section className="py-24 px-6 max-w-7xl mx-auto bg-white rounded-3xl border border-slate-200 my-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <span className="text-[#EAB308] font-bold uppercase tracking-widest text-sm">Legal Repository</span>
            <h2 className="text-3xl md:text-5xl font-black mt-3">Cyber Law Knowledge Centre</h2>
          </div>
          <button className="mt-6 md:mt-0 text-[#EAB308] font-bold border-b border-yellow-400 pb-1 hover:text-yellow-300">
            Explore All Topics →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {knowledgeItems.map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-slate-200 transition-all group cursor-pointer">
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#EAB308] transition-colors">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-24 px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#EAB308] font-bold uppercase tracking-widest text-sm">Common Queries</span>
          <h2 className="text-3xl md:text-5xl font-black mt-3">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqData.map((faq, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === idx ? null : idx)} className="w-full flex justify-between items-center p-6 text-left font-bold text-lg">
                <span>{faq.q}</span>
                <span className="text-[#EAB308] text-xl">{openFaq === idx ? "−" : "+"}</span>
              </button>
              {openFaq === idx && (
                <div className="p-6 pt-0 text-slate-500 leading-relaxed border-t border-white/5">
                  {faq.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. ULTIMATE CTA SECTION */}
      <section className="py-24 px-6 text-center bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#EAB308] font-bold uppercase tracking-widest text-sm">Secure Your Defense</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] mt-3 mb-6">Need Immediate Legal Protection?</h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            Connect directly with Advocate Shaikul Khan for specialized criminal defense in cyber crime, banking frauds, and High Court litigation.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="rounded-xl bg-yellow-500 px-10 py-4 font-black uppercase text-[#0F172A] hover:bg-yellow-400 transition-all shadow-[0_0_30px_rgba(234,179,8,0.3)]">
              Book Consultation
            </button>
            <button className="rounded-xl border border-slate-200 bg-[#F8FAFC]/50 px-10 py-4 font-bold uppercase text-[#0F172A] hover:bg-yellow-500/10 transition-all">
              WhatsApp Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

