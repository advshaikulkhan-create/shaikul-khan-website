'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

interface MappingItem {
  ipcSec: string;
  bnsSec: string;
  title: string;
  nature: string;
}

const fullTransitionData: MappingItem[] = [
  { ipcSec: "34", bnsSec: "3(5)", title: "Common Intention / Joint Liability", nature: "Direct Equivalent" },
  { ipcSec: "120B", bnsSec: "61", title: "Criminal Conspiracy", nature: "Consolidated Section" },
  { ipcSec: "141-149", bnsSec: "189-197", title: "Unlawful Assembly & Rioting", nature: "Restructured Chapter" },
  { ipcSec: "153A", bnsSec: "196", title: "Promoting Enmity Between Groups", nature: "Substantive Retained" },
  { ipcSec: "191-193", bnsSec: "227-229", title: "Giving / Fabricating False Evidence (Perjury)", nature: "Direct Equivalent" },
  { ipcSec: "302", bnsSec: "103(1)", title: "Murder (Punishment)", nature: "Direct Equivalent" },
  { ipcSec: "304", bnsSec: "105", title: "Culpable Homicide not amounting to Murder", nature: "Direct Equivalent" },
  { ipcSec: "304A", bnsSec: "106(1)", title: "Causing Death by Negligence", nature: "Sec 106(2) in Abeyance" },
  { ipcSec: "304B", bnsSec: "80", title: "Dowry Death", nature: "Moved to Women Chapter" },
  { ipcSec: "307", bnsSec: "109", title: "Attempt to Murder", nature: "Direct Equivalent" },
  { ipcSec: "323", bnsSec: "115(2)", title: "Voluntarily Causing Hurt", nature: "Direct Equivalent" },
  { ipcSec: "325", bnsSec: "117(2)", title: "Voluntarily Causing Grievous Hurt", nature: "Direct Equivalent" },
  { ipcSec: "354", bnsSec: "74", title: "Assault / Criminal Force to Woman with Intent to Outrage Modesty", nature: "Direct Equivalent" },
  { ipcSec: "354D", bnsSec: "78", title: "Stalking", nature: "Direct Equivalent" },
  { ipcSec: "363", bnsSec: "137(2)", title: "Kidnapping", nature: "Direct Equivalent" },
  { ipcSec: "376", bnsSec: "64", title: "Rape (Punishment)", nature: "Direct Equivalent" },
  { ipcSec: "376D", bnsSec: "70(1)", title: "Gang Rape", nature: "Direct Equivalent" },
  { ipcSec: "378/379", bnsSec: "303(1)/(2)", title: "Theft", nature: "Community service added for petty theft" },
  { ipcSec: "383/384", bnsSec: "308(1)/(2)", title: "Extortion", nature: "Direct Equivalent" },
  { ipcSec: "390/392", bnsSec: "309(1)/(4)", title: "Robbery", nature: "Direct Equivalent" },
  { ipcSec: "391/395", bnsSec: "310(1)/(2)", title: "Dacoity", nature: "Direct Equivalent" },
  { ipcSec: "405/406", bnsSec: "316(1)/(2)", title: "Criminal Breach of Trust (CBT)", nature: "Punishment enhanced to 5 yrs" },
  { ipcSec: "415/417", bnsSec: "318(1)/(2)", title: "Cheating (Simple)", nature: "Direct Equivalent" },
  { ipcSec: "419", bnsSec: "319(2)", title: "Cheating by Personation", nature: "Punishment enhanced to 5 yrs" },
  { ipcSec: "420", bnsSec: "318(4)", title: "Cheating and Dishonestly Inducing Delivery of Property", nature: "Direct Equivalent" },
  { ipcSec: "463/465", bnsSec: "336(1)/(2)", title: "Forgery", nature: "Restructured Clauses" },
  { ipcSec: "467", bnsSec: "336(3)", title: "Forgery of Valuable Security or Will", nature: "Direct Equivalent" },
  { ipcSec: "468", bnsSec: "336(4)", title: "Forgery for Purpose of Cheating", nature: "Direct Equivalent" },
  { ipcSec: "471", bnsSec: "340(2)", title: "Using Forged Document / Electronic Record as Genuine", nature: "Explicit digital scope" },
  { ipcSec: "498A", bnsSec: "85 & 86", title: "Cruelty by Husband or Relatives of Husband", nature: "Sub-divided into two sections" },
  { ipcSec: "499/500", bnsSec: "356", title: "Defamation", nature: "Community service added" },
  { ipcSec: "506", bnsSec: "351(2)", title: "Criminal Intimidation", nature: "Direct Equivalent" },
  { ipcSec: "509", bnsSec: "79", title: "Word, Gesture or Act Intended to Insult Modesty of a Woman", nature: "Direct Equivalent" },
  { ipcSec: "511", bnsSec: "62", title: "Attempt to Commit Offences", nature: "Standardized Formula" }
];

export default function CompleteMappingPage() {
  const params = useParams();
  const [search, setSearch] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'ipc' | 'bns'>('all');

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return fullTransitionData;
    return fullTransitionData.filter(
      (m) =>
        m.ipcSec.toLowerCase().includes(q) ||
        m.bnsSec.toLowerCase().includes(q) ||
        m.title.toLowerCase().includes(q) ||
        m.nature.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <main className="min-h-screen bg-[#F5F5F7] text-slate-900 font-sans pb-28">
      {/* HEADER */}
      <section className="border-b border-slate-200 bg-white px-5 py-8 sm:px-8 sm:py-12">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/knowledge-centre/bns"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#B08A00] hover:underline"
          >
            ← Back to BNS Master Hub
          </Link>

          <div className="mt-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="rounded bg-[#B08A00]/10 px-2.5 py-1 text-xs font-bold text-[#B08A00] uppercase tracking-wider">
                Full Statutory Concordance
              </span>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                IPC ⇄ BNS Complete Mapping Table
              </h1>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl">
                Comprehensive statutory transition concordance connecting Indian Penal Code (1860) sections to Bharatiya Nyaya Sanhita (2023).
              </p>
            </div>

            {/* SEARCH INPUT */}
            <div className="w-full md:w-80">
              <input
                type="text"
                placeholder="Search IPC (e.g. 420) or BNS (e.g. 318)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:border-[#B08A00] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#B08A00]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TABLE DATA CONTAINER */}
      <section className="mx-auto max-w-6xl px-5 pt-8 sm:px-8">
        <div className="flex items-center justify-between pb-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
          <span>Total Mapped Provisions: {filtered.length}</span>
          <span>Source: Verified Statutory Concordance</span>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50/80 text-xs uppercase font-semibold text-slate-600">
                <tr>
                  <th className="px-6 py-4">Legacy (IPC 1860)</th>
                  <th className="px-6 py-4">New Statute (BNS 2023)</th>
                  <th className="px-6 py-4">Subject Matter / Offence</th>
                  <th className="px-6 py-4">Statutory Transition Nature</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-6 py-4 font-mono font-bold text-blue-700">
                      IPC Sec. {item.ipcSec}
                    </td>
                    <td className="px-6 py-4 font-mono font-bold text-[#B08A00]">
                      BNS § {item.bnsSec}
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-900">
                      {item.title}
                    </td>
                    <td className="px-6 py-4 text-xs text-slate-600">
                      <span className="inline-flex rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-700 border border-slate-200">
                        {item.nature}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
