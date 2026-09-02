import React, { useState } from 'react';

const bsaData = {
  title: "Bharatiya Sakshya Adhiniyam, 2023",
  subtitle: "An Act to consolidate and to provide for general rules and principles of evidence for fair trial.",
  totalChapters: 12,
  totalSections: 170,
  chapters: [
    {
      id: "CHAPTER I",
      title: "Preliminary",
      sectionRange: "BSA Section 1 to Section 2 • 2 sections in this chapter",
      sections: [
        {
          num: "BSA Section 1",
          title: "Short title, application and commencement",
          bareActText: `1. (1) This Act may be called the Bharatiya Sakshya Adhiniyam, 2023.
(2) It applies to all judicial proceedings in or before any Court, including Courts-martial, but not to affidavits presented to any Court or officer, nor to proceedings before an arbitrator.
(3) It shall come into force on such date as the Central Government may, by notification in the Official Gazette, appoint.`
        },
        {
          num: "BSA Section 2",
          title: "Definitions",
          bareActText: `2. (1) In this Adhiniyam, unless the context otherwise requires,—
(a) "Court" includes all Judges and Magistrates, and all persons, except arbitrators, legally authorised to take evidence;
(b) "conclusive proof" means when one fact is declared by this Adhiniyam to be conclusive proof of another, the Court shall, on proof of the one fact, regard the other as proved, and shall not allow evidence to be given for the purpose of disproving it;
(c) "disproved" in relation to a fact, means when, after considering the matters before it, the Court either believes that it does not exist, or considers its non-existence so probable that a prudent man ought, under the circumstances of the particular case, to act upon the supposition that it does not exist;
(d) "document" means any matter expressed or described or otherwise recorded upon any substance by means of letters, figures or marks or any other means or by more than one of those means, intended to be used, or which may be used, for the purpose of recording that matter and includes electronic and digital records.
Illustrations.
(i) A writing is a document.
(ii) Words printed, lithographed or photographed are documents.
(iii) A map or plan is a document.
(iv) An inscription on a metal plate or stone is a document.
(v) A caricature is a document.
(vi) An electronic record on emails, server logs, documents on computers, laptop or smartphone, messages, websites, locational evidence and voice mail messages stored on digital devices are documents;
(e) "evidence" means and includes—
(i) all statements including statements given electronically which the Court permits or requires to be made before it by witnesses in relation to matters of fact under inquiry and such statements are called oral evidence;
(ii) all documents including electronic or digital records produced for the inspection of the Court and such documents are called documentary evidence;
(f) "fact" means and includes—
(i) any thing, state of things, or relation of things, capable of being perceived by the senses;
(ii) any mental condition of which any person is conscious.
Illustrations.
(i) That there are certain objects arranged in a certain order in a certain place, is a fact.
(ii) That a person heard or saw something, is a fact.
(iii) That a person said certain words, is a fact.
(iv) That a person holds a certain opinion, has a certain intention, acts in good faith, or fraudulently, or uses a particular word in a particular sense, or is or was at a specified time conscious of a particular sensation, is a fact;
(g) "facts in issue" means and includes any fact from which, either by itself or in connection with other facts, the existence, non-existence, nature or extent of any right, liability or disability, asserted or denied in any suit or proceeding, necessarily follows.
Explanation.—Whenever, under the provisions of the law for the time being in force relating to civil procedure, any Court records an issue of fact, the fact to be asserted or denied in the answer to such issue is a fact in issue.
Illustrations.
A is accused of the murder of B. At his trial, the following facts may be in issue:—
(i) That A caused B's death.
(ii) That A intended to cause B's death.
(iii) That A had received grave and sudden provocation from B.
(iv) That A, at the time of doing the act which caused B's death, was, by reason of unsoundness of mind, incapable of knowing its nature;
(h) "may presume". Whenever it is provided by this Adhiniyam that the Court may presume a fact, it may either regard such fact as proved, unless and until it is disproved or may call for proof of it;
(i) "not proved". A fact is said to be not proved when it is neither proved nor disproved;
(j) "proved". A fact is said to be proved when, after considering the matters before it, the Court either believes it to exist, or considers its existence so probable that a prudent man ought, under the circumstances of the particular case, to act upon the supposition that it exists;
(k) "relevant". A fact is said to be relevant to another when it is connected with the other in any of the ways referred to in the provisions of this Adhiniyam relating to the relevancy of facts;
(l) "shall presume". Whenever it is directed by this Adhiniyam that the Court shall presume a fact, it shall regard such fact as proved, unless and until it is disproved.
(2) Words and expressions used herein and not defined but defined in the Information Technology Act, 2000, the Bharatiya Nagarik Suraksha Sanhita, 2023 and the Bharatiya Nyaya Sanhita, 2023 shall have the same meanings as assigned to them in the said Act and Sanhitas.`
        }
      ]
    },
    {
      id: "CHAPTER II",
      title: "Relevancy of Facts",
      sectionRange: "BSA Section 3 to Section 50 • 48 sections in this chapter",
      sections: [
        {
          num: "BSA Section 3",
          title: "Evidence may be given of facts in issue and relevant facts",
          bareActText: `3. Evidence may be given in any suit or proceeding of the existence or non-existence of every fact in issue and of such other facts as are hereinafter declared to be relevant, and of no others.
Explanation.—This section shall not enable any person to give evidence of a fact which he is disentitled to prove by any provision of the law for the time being in force relating to civil procedure.
Illustrations.
(a) A is tried for the murder of B by beating him with a club with the intention of causing his death.
At A's trial the following facts are in issue:—
A's beating B with the club;
A's causing B's death by such beating;
A's intention to cause B's death.
(b) A suitor does not bring with him, and have in readiness for production at the first hearing of the case, a bond on which he relies. This section does not enable him to produce the bond or prove its contents at a subsequent stage of the proceedings, otherwise than in accordance with the conditions prescribed by the Code of Civil Procedure, 1908.`
        },
        {
          num: "BSA Section 4",
          title: "Relevancy of facts forming part of same transaction",
          bareActText: `4. Facts which, though not in issue, are so connected with a fact in issue or a relevant fact as to form part of the same transaction, are relevant, whether they occurred at the same time and place or at different times and places.
Illustrations.
(a) A is accused of the murder of B by beating him. Whatever was said or done by A or B or the bystanders at the beating, or so shortly before or after it as to form part of the transaction, is a relevant fact.
(b) A is accused of waging war against the Government of India by taking part in an armed insurrection in which property is destroyed, troops are attacked and jails are broken open. The occurrence of these facts is relevant, as forming part of the general transaction, though A may not have been present at all of them.
(c) A sues B for a libel contained in a letter forming part of a correspondence. Letters between the parties relating to the subject out of which the libel arose, and forming part of the correspondence in which it is contained, are relevant facts, though they do not contain the libel itself.
(d) The question is, whether certain goods ordered from B were delivered to A. The goods were delivered to several intermediate persons successively. Each delivery is a relevant fact.`
        },
        {
          num: "BSA Section 5",
          title: "Facts which are occasion, cause or effect of facts in issue or relevant facts",
          bareActText: `5. Facts which are the occasion, cause or effect, immediate or otherwise, of relevant facts, or facts in issue, or which constitute the state of things under which they happened, or which afforded an opportunity for their occurrence or transaction, are relevant.
Illustrations.
(a) The question is, whether A robbed B. The facts that, shortly before the robbery, B went to a fair with money in his possession, and that he showed it, or mentioned the fact that he had it, to third persons, are relevant.
(b) The question is, whether A murdered B. Marks on the ground, produced by a struggle at or near the place where the murder was committed, are relevant facts.
(c) The question is, whether A poisoned B. The state of B's health before the symptoms ascribed to poison, and habits of B, known to A, which afforded an opportunity for the administration of poison, are relevant facts.`
        }
      ]
    }
  ]
};

export default function BsaCard() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (key) => {
    setOpenSection(openSection === key ? null : key);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-gray-50 min-h-screen text-gray-800 font-sans">
      <a href="/knowledge-centre" className="text-emerald-700 text-xs font-semibold mb-3 inline-block hover:underline">
        ← Back to Knowledge Centre
      </a>

      {/* Main Law Header Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
        <span className="text-emerald-700 text-[10px] font-bold tracking-widest uppercase">BSA</span>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-1 mb-2">
          {bsaData.title}
        </h1>
        <p className="text-xs md:text-sm text-gray-600 mb-4 leading-relaxed">
          {bsaData.subtitle}
        </p>
        <div className="flex gap-2">
          <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
            {bsaData.totalChapters} Chapters
          </span>
          <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
            {bsaData.totalSections} Sections
          </span>
        </div>
      </div>

      {/* Chapter Wise Layout */}
      {bsaData.chapters.map((ch, chIdx) => (
        <div key={chIdx} className="bg-white border border-gray-200 rounded-2xl p-5 mb-5 shadow-sm">
          <span className="text-emerald-700 text-[10px] font-bold tracking-wider uppercase">
            {ch.id}
          </span>
          <h2 className="text-xl font-bold text-gray-900 mt-0.5">
            {ch.title}
          </h2>
          <p className="text-xs text-gray-500 mb-4">
            {ch.sectionRange}
          </p>

          <div className="space-y-2.5">
            {ch.sections.map((sec, secIdx) => {
              const itemKey = `${chIdx}-${secIdx}`;
              const isOpen = openSection === itemKey;
              return (
                <div key={secIdx} className="border border-gray-100 rounded-xl overflow-hidden bg-white">
                  <button
                    onClick={() => toggleSection(itemKey)}
                    className="w-full flex items-center justify-between p-3.5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="bg-emerald-50 text-emerald-800 text-[11px] font-semibold px-2.5 py-1 rounded border border-emerald-100 whitespace-nowrap">
                        {sec.num}
                      </span>
                      <span className="text-xs font-semibold text-gray-800">
                        {sec.title}
                      </span>
                    </div>
                    <span className="text-gray-400 text-base font-light ml-2">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-4 text-xs text-gray-700 border-t border-gray-100 bg-gray-50/60 leading-relaxed font-mono whitespace-pre-wrap">
                      {sec.bareActText}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
