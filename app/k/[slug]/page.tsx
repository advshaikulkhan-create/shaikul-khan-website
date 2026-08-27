import React from 'react';
import { deepLegalResearchData } from '@/lib/deepLegalResearch'; // पाथ अपनी फ़ाइल के अनुसार जांचें

export default async function TopicDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // URL के slug से मैचिंग डेटा निकालें
  const topic = deepLegalResearchData.find((item) => {
    const actSectionSlug = `${item.act.toLowerCase()}-${item.section.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
    const categorySlug = item.category?.toLowerCase().replace(/[^a-z0-9]/g, '-');
    return actSectionSlug === slug.toLowerCase() || categorySlug === slug.toLowerCase();
  });

  if (!topic) {
    return (
      <div className="p-8 text-white bg-slate-900 min-h-screen">
        <h1 className="text-xl font-bold">Data Not Found</h1>
        <p className="text-gray-400 mt-2">No matching statutory data found for: {slug}</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0b132b] text-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto mb-8">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
          {topic.act} — Section {topic.section}
        </span>
        <h1 className="text-2xl md:text-3xl font-bold mt-2 text-slate-100">{topic.title}</h1>
        {topic.category && <p className="text-slate-400 text-sm mt-1">{topic.category}</p>}
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 01 Provision */}
        <div className="bg-[#1c2541] p-4 rounded-lg border border-slate-700">
          <span className="text-amber-400 text-xs font-mono">01</span>
          <h3 className="text-base font-bold text-slate-200 mt-1 mb-2">Provision</h3>
          <p className="text-sm text-slate-300">{topic.provision || "Statutory provision text as enacted."}</p>
        </div>

        {/* 02 Ingredients */}
        <div className="bg-[#1c2541] p-4 rounded-lg border border-slate-700">
          <span className="text-amber-400 text-xs font-mono">02</span>
          <h3 className="text-base font-bold text-slate-200 mt-1 mb-2">Ingredients</h3>
          {topic.ingredients && topic.ingredients.length > 0 ? (
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
              {topic.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-400">No specific constituent elements listed.</p>
          )}
        </div>

        {/* 03 Evidence */}
        <div className="bg-[#1c2541] p-4 rounded-lg border border-slate-700">
          <span className="text-amber-400 text-xs font-mono">03</span>
          <h3 className="text-base font-bold text-slate-200 mt-1 mb-2">Evidence Issues</h3>
          {topic.evidenceIssues || topic.digitalEvidenceIssues ? (
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
              {[...(topic.evidenceIssues || []), ...(topic.digitalEvidenceIssues || [])].map((ev, i) => (
                <li key={i}>{ev}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-400">Governed by standard BSA rules.</p>
          )}
        </div>

        {/* 04 Procedure */}
        <div className="bg-[#1c2541] p-4 rounded-lg border border-slate-700">
          <span className="text-amber-400 text-xs font-mono">04</span>
          <h3 className="text-base font-bold text-slate-200 mt-1 mb-2">Procedure</h3>
          {topic.proceduralRequirements && topic.proceduralRequirements.length > 0 ? (
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
              {topic.proceduralRequirements.map((proc, i) => (
                <li key={i}>{proc}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-400">Standard BNSS procedural safeguards apply.</p>
          )}
        </div>

        {/* 05 Cross-Exam */}
        <div className="bg-[#1c2541] p-4 rounded-lg border border-slate-700">
          <span className="text-amber-400 text-xs font-mono">05</span>
          <h3 className="text-base font-bold text-slate-200 mt-1 mb-2">Cross-Examination</h3>
          {topic.crossExaminationIssues && topic.crossExaminationIssues.length > 0 ? (
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
              {topic.crossExaminationIssues.map((ce, i) => (
                <li key={i}>{ce}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-400">General credibility and omissions cross-examination.</p>
          )}
        </div>

        {/* 06 Defence Strategy */}
        <div className="bg-[#1c2541] p-4 rounded-lg border border-slate-700">
          <span className="text-amber-400 text-xs font-mono">06</span>
          <h3 className="text-base font-bold text-slate-200 mt-1 mb-2">Defence Strategy</h3>
          {topic.defenceIssues && topic.defenceIssues.length > 0 ? (
            <ul className="list-disc list-inside text-sm text-slate-300 space-y-1">
              {topic.defenceIssues.map((def, i) => (
                <li key={i}>{def}</li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-400">Substantive statutory defences apply.</p>
          )}
        </div>
      </div>
    </div>
  );
}
