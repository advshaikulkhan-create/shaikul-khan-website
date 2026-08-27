export type ActType = "BNS" | "BNSS" | "BSA";

export type LegalResearch = {
  act: ActType;
  section: string;
  title: string;

  chapter?: string;

  // Your supplied mapping/reference material
  legacyMapping?: {
    act: "IPC" | "CrPC" | "IEA";
    section: string;
    source: "user-supplied";
  };

  category?: string;

  provision?: string;

  ingredients?: string[];

  punishment?: string;

  proceduralIssues?: string[];

  evidenceIssues?: string[];

  digitalEvidenceIssues?: string[];

  defenceIssues?: string[];

  crossExaminationIssues?: string[];

  caseLaw?: string[];

  tags?: string[];
};

/*
|--------------------------------------------------------------------------
| BNS — CORE RESEARCH DATA
|--------------------------------------------------------------------------
|
| IMPORTANT:
| The legacyMapping values below are entered as supplied in the material
| provided for this project. They are kept separately from legal analysis.
|
*/

export const bnsResearch: LegalResearch[] = [
  {
    act: "BNS",
    section: "3(5)",
    title: "General explanations — common intention",
    category: "General Principles",
    legacyMapping: {
      act: "IPC",
      section: "34",
      source: "user-supplied",
    },
    tags: ["common intention", "joint liability", "IPC 34"],
  },

  {
    act: "BNS",
    section: "61",
    title: "Criminal conspiracy",
    category: "Abetment, Criminal Conspiracy and Attempt",
    legacyMapping: {
      act: "IPC",
      section: "120B",
      source: "user-supplied",
    },
    tags: ["conspiracy", "agreement", "120B"],
  },

  {
    act: "BNS",
    section: "62",
    title: "Attempt",
    category: "Abetment, Criminal Conspiracy and Attempt",
    legacyMapping: {
      act: "IPC",
      section: "511",
      source: "user-supplied",
    },
    tags: ["attempt", "preparation", "511"],
  },

  {
    act: "BNS",
    section: "318(4)",
    title: "Cheating — aggravated form",
    category: "Offences Against Property",
    legacyMapping: {
      act: "IPC",
      section: "420",
      source: "user-supplied",
    },
    tags: ["cheating", "dishonest inducement", "420", "cyber fraud"],
  },

  {
    act: "BNS",
    section: "316(2)",
    title: "Criminal breach of trust",
    category: "Offences Against Property",
    legacyMapping: {
      act: "IPC",
      section: "406",
      source: "user-supplied",
    },
    tags: ["criminal breach of trust", "406"],
  },

  {
    act: "BNS",
    section: "316(5)",
    title: "Criminal breach of trust — aggravated category",
    category: "Offences Against Property",
    legacyMapping: {
      act: "IPC",
      section: "409",
      source: "user-supplied",
    },
    tags: ["criminal breach of trust", "409"],
  },

  {
    act: "BNS",
    section: "319(2)",
    title: "Cheating by personation",
    category: "Offences Against Property",
    legacyMapping: {
      act: "IPC",
      section: "419",
      source: "user-supplied",
    },
    tags: ["personation", "419", "online impersonation"],
  },

  {
    act: "BNS",
    section: "336(3)",
    title: "Forgery",
    category: "Forgery and False Documents",
    legacyMapping: {
      act: "IPC",
      section: "467",
      source: "user-supplied",
    },
    tags: ["forgery", "467", "electronic document"],
  },

  {
    act: "BNS",
    section: "336(4)",
    title: "Forgery for purpose of cheating",
    category: "Forgery and False Documents",
    legacyMapping: {
      act: "IPC",
      section: "468",
      source: "user-supplied",
    },
    tags: ["forgery", "cheating", "468"],
  },

  {
    act: "BNS",
    section: "340(2)",
    title: "Using forged document or electronic record",
    category: "Forgery and False Documents",
    legacyMapping: {
      act: "IPC",
      section: "471",
      source: "user-supplied",
    },
    tags: ["forged document", "electronic record", "471"],
  },

  {
    act: "BNS",
    section: "303(2)",
    title: "Theft",
    category: "Offences Against Property",
    legacyMapping: {
      act: "IPC",
      section: "379",
      source: "user-supplied",
    },
    tags: ["theft", "379"],
  },

  {
    act: "BNS",
    section: "309(4)",
    title: "Robbery",
    category: "Robbery and Dacoity",
    legacyMapping: {
      act: "IPC",
      section: "392",
      source: "user-supplied",
    },
    tags: ["robbery", "392"],
  },

  {
    act: "BNS",
    section: "310(2)",
    title: "Dacoity",
    category: "Robbery and Dacoity",
    legacyMapping: {
      act: "IPC",
      section: "395",
      source: "user-supplied",
    },
    tags: ["dacoity", "395"],
  },

  {
    act: "BNS",
    section: "317(2)",
    title: "Dishonestly receiving stolen property",
    category: "Offences Against Property",
    legacyMapping: {
      act: "IPC",
      section: "411",
      source: "user-supplied",
    },
    tags: ["stolen property", "411"],
  },

  {
    act: "BNS",
    section: "189(2)",
    title: "Unlawful assembly",
    category: "Offences Against Public Tranquillity",
    legacyMapping: {
      act: "IPC",
      section: "143",
      source: "user-supplied",
    },
    tags: ["unlawful assembly", "143"],
  },

  {
    act: "BNS",
    section: "189(4)",
    title: "Unlawful assembly",
    category: "Offences Against Public Tranquillity",
    legacyMapping: {
      act: "IPC",
      section: "144",
      source: "user-supplied",
    },
    tags: ["unlawful assembly", "144"],
  },

  {
    act: "BNS",
    section: "190",
    title: "Common object liability",
    category: "Offences Against Public Tranquillity",
    legacyMapping: {
      act: "IPC",
      section: "149",
      source: "user-supplied",
    },
    tags: ["common object", "149"],
  },

  {
    act: "BNS",
    section: "229",
    title: "Giving false evidence",
    category: "False Evidence",
    legacyMapping: {
      act: "IPC",
      section: "194",
      source: "user-supplied",
    },
    tags: ["false evidence", "194"],
  },

  {
    act: "BNS",
    section: "230",
    title: "False evidence",
    category: "False Evidence",
    legacyMapping: {
      act: "IPC",
      section: "195",
      source: "user-supplied",
    },
    tags: ["false evidence", "195"],
  },

  {
    act: "BNS",
    section: "231",
    title: "False evidence",
    category: "False Evidence",
    legacyMapping: {
      act: "IPC",
      section: "196",
      source: "user-supplied",
    },
    tags: ["false evidence", "196"],
  },

  {
    act: "BNS",
    section: "232",
    title: "False evidence",
    category: "False Evidence",
    legacyMapping: {
      act: "IPC",
      section: "195A",
      source: "user-supplied",
    },
    tags: ["false evidence", "195A"],
  },

  {
    act: "BNS",
    section: "316(2)",
    title: "Criminal breach of trust",
    category: "Criminal Breach of Trust",
    legacyMapping: {
      act: "IPC",
      section: "406",
      source: "user-supplied",
    },
    tags: ["406", "trust", "property"],
  },

  {
    act: "BNS",
    section: "308(2)",
    title: "Extortion",
    category: "Extortion",
    legacyMapping: {
      act: "IPC",
      section: "384",
      source: "user-supplied",
    },
    tags: ["extortion", "384"],
  },

  {
    act: "BNS",
    section: "309(4)",
    title: "Robbery",
    category: "Robbery",
    legacyMapping: {
      act: "IPC",
      section: "392",
      source: "user-supplied",
    },
    tags: ["robbery", "392"],
  },

  {
    act: "BNS",
    section: "310(2)",
    title: "Dacoity",
    category: "Dacoity",
    legacyMapping: {
      act: "IPC",
      section: "395",
      source: "user-supplied",
    },
    tags: ["dacoity", "395"],
  },

  {
    act: "BNS",
    section: "317(2)",
    title: "Receiving stolen property",
    category: "Stolen Property",
    legacyMapping: {
      act: "IPC",
      section: "411",
      source: "user-supplied",
    },
    tags: ["stolen property", "411"],
  },

  {
    act: "BNS",
    section: "319(2)",
    title: "Cheating by personation",
    category: "Cheating",
    legacyMapping: {
      act: "IPC",
      section: "419",
      source: "user-supplied",
    },
    tags: ["419", "personation"],
  },

  {
    act: "BNS",
    section: "318(4)",
    title: "Cheating and dishonest inducement",
    category: "Cheating",
    legacyMapping: {
      act: "IPC",
      section: "420",
      source: "user-supplied",
    },
    tags: ["420", "cheating", "cyber fraud"],
  },
];


/*
|--------------------------------------------------------------------------
| BNSS — PROCEDURAL RESEARCH INDEX
|--------------------------------------------------------------------------
*/

export const bnssResearch: LegalResearch[] = [
  {
    act: "BNSS",
    section: "1",
    title: "Short title, extent and commencement",
    category: "Preliminary",
    legacyMapping: {
      act: "CrPC",
      section: "1",
      source: "user-supplied",
    },
    tags: ["commencement", "application"],
  },

  {
    act: "BNSS",
    section: "2",
    title: "Definitions",
    category: "Preliminary",
    tags: ["definitions", "interpretation"],
  },

  {
    act: "BNSS",
    section: "35",
    title: "When police may arrest without warrant",
    category: "Arrest",
    tags: ["arrest", "police power", "safeguards"],
  },

  {
    act: "BNSS",
    section: "36",
    title: "Procedure of arrest and duties of officer making arrest",
    category: "Arrest",
    tags: ["arrest", "procedure", "police duty"],
  },

  {
    act: "BNSS",
    section: "43",
    title: "Arrest how made",
    category: "Arrest",
    tags: ["arrest", "procedure"],
  },

  {
    act: "BNSS",
    section: "47",
    title: "Person arrested to be informed of grounds of arrest and right to bail",
    category: "Arrest",
    tags: ["grounds of arrest", "bail", "rights"],
  },

  {
    act: "BNSS",
    section: "48",
    title: "Obligation of person making arrest to inform relative or friend",
    category: "Arrest",
    tags: ["arrest", "relative", "safeguard"],
  },

  {
    act: "BNSS",
    section: "94",
    title: "Summons to produce document or other thing",
    category: "Production of Things",
    tags: ["document", "digital device", "production"],
  },

  {
    act: "BNSS",
    section: "105",
    title: "Recording of search and seizure through audio-video electronic means",
    category: "Search & Seizure",
    tags: [
      "search",
      "seizure",
      "audio-video",
      "electronic recording",
      "e-Sakshya",
    ],
  },

  {
    act: "BNSS",
    section: "106",
    title: "Power of police officer to seize certain property",
    category: "Investigation",
    tags: ["seizure", "property", "investigation"],
  },

  {
    act: "BNSS",
    section: "173",
    title: "Information in cognizable cases",
    category: "FIR",
    tags: ["FIR", "cognizable offence", "information"],
  },

  {
    act: "BNSS",
    section: "187",
    title: "Procedure when investigation cannot be completed in twenty-four hours",
    category: "Remand",
    tags: ["remand", "custody", "investigation"],
  },

  {
    act: "BNSS",
    section: "193",
    title: "Report of police officer on completion of investigation",
    category: "Charge-sheet",
    tags: ["charge-sheet", "final report", "investigation"],
  },

  {
    act: "BNSS",
    section: "480",
    title: "When bail may be taken in cases of non-bailable offence",
    category: "Bail",
    tags: ["bail", "non-bailable offence"],
  },

  {
    act: "BNSS",
    section: "482",
    title: "Direction for grant of bail to person apprehending arrest",
    category: "Anticipatory Bail",
    tags: ["anticipatory bail", "pre-arrest protection"],
  },
];


/*
|--------------------------------------------------------------------------
| BSA — EVIDENCE RESEARCH INDEX
|--------------------------------------------------------------------------
*/

export const bsaResearch: LegalResearch[] = [
  {
    act: "BSA",
    section: "2",
    title: "Definitions",
    category: "Preliminary",
    tags: ["definitions", "evidence"],
  },

  {
    act: "BSA",
    section: "3",
    title: "Evidence",
    category: "Basic Principles",
    tags: ["evidence", "proof"],
  },

  {
    act: "BSA",
    section: "4",
    title: "Relevancy of facts forming part of same transaction",
    category: "Relevancy",
    tags: ["relevancy", "same transaction"],
  },

  {
    act: "BSA",
    section: "55",
    title: "Proof of contents of documents",
    category: "Documentary Evidence",
    tags: ["documents", "proof", "contents"],
  },

  {
    act: "BSA",
    section: "56",
    title: "Primary evidence",
    category: "Documentary Evidence",
    tags: ["primary evidence", "document"],
  },

  {
    act: "BSA",
    section: "57",
    title: "Secondary evidence",
    category: "Documentary Evidence",
    tags: ["secondary evidence", "document"],
  },

  {
    act: "BSA",
    section: "61",
    title: "Electronic or digital record",
    category: "Electronic Evidence",
    tags: ["electronic evidence", "digital record"],
  },

  {
    act: "BSA",
    section: "62",
    title: "Special provisions as to evidence relating to electronic record",
    category: "Electronic Evidence",
    tags: ["electronic record", "digital evidence"],
  },

  {
    act: "BSA",
    section: "63",
    title: "Admissibility of electronic records",
    category: "Electronic Evidence",
    tags: [
      "electronic evidence",
      "admissibility",
      "certificate",
      "digital evidence",
    ],
  },

  {
    act: "BSA",
    section: "104",
    title: "Burden of proof",
    category: "Burden of Proof",
    tags: ["burden", "proof"],
  },

  {
    act: "BSA",
    section: "106",
    title: "Burden of proving fact especially within knowledge",
    category: "Burden of Proof",
    tags: ["burden", "special knowledge"],
  },

  {
    act: "BSA",
    section: "142",
    title: "Examination of witnesses",
    category: "Witnesses",
    tags: ["witness", "examination", "cross-examination"],
  },

  {
    act: "BSA",
    section: "143",
    title: "Order of production and examination of witnesses",
    category: "Witnesses",
    tags: ["witness", "examination"],
  },
];


/*
|--------------------------------------------------------------------------
| MASTER INDEX
|--------------------------------------------------------------------------
*/

export const legalResearchData: LegalResearch[] = [
  ...bnsResearch,
  ...bnssResearch,
  ...bsaResearch,
];


/*
|--------------------------------------------------------------------------
| SEARCH
|--------------------------------------------------------------------------
*/

export function searchLegalResearch(query: string): LegalResearch[] {
  const q = query.trim().toLowerCase();

  if (!q) return legalResearchData;

  return legalResearchData.filter((item) => {
    const searchable = [
      item.act,
      item.section,
      item.title,
      item.category,
      item.provision,
      item.legacyMapping?.act,
      item.legacyMapping?.section,
      ...(item.tags ?? []),
      ...(item.ingredients ?? []),
      ...(item.defenceIssues ?? []),
      ...(item.evidenceIssues ?? []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    return searchable.includes(q);
  });
}
