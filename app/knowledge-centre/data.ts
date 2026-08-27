type Item = {
  code: string;
  title: string;
  description: string;
};

type Section = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  items: Item[];
};

export const sections: Section[] = [
  {
    id: "core-criminal-law",
    eyebrow: "01 · CORE CRIMINAL LAW",
    title: "The criminal law foundation.",
    description:
      "Primary criminal statutes and their legacy counterparts, organised for section-wise research, interpretation and defence analysis.",
    items: [
      {
        code: "BNS",
        title: "Bharatiya Nyaya Sanhita, 2023",
        description:
          "Offences, ingredients, general exceptions, punishments and substantive criminal liability.",
      },
      {
        code: "BNSS",
        title: "Bharatiya Nagarik Suraksha Sanhita, 2023",
        description:
          "Criminal procedure from FIR and investigation through arrest, search, remand, bail, trial and related proceedings.",
      },
      {
        code: "BSA",
        title: "Bharatiya Sakshya Adhiniyam, 2023",
        description:
          "Relevancy, proof, documentary evidence, electronic records, admissibility and examination of witnesses.",
      },
      {
        code: "IPC",
        title: "Indian Penal Code, 1860 — Legacy",
        description:
          "Legacy substantive criminal law for matters governed by the previous statutory regime.",
      },
      {
        code: "CrPC",
        title: "Code of Criminal Procedure, 1973 — Legacy",
        description:
          "Legacy procedural framework for cases to which the previous regime continues to apply.",
      },
      {
        code: "IEA",
        title: "Indian Evidence Act, 1872 — Legacy",
        description:
          "Legacy law of evidence, including electronic-evidence issues arising under the previous regime.",
      },
    ],
  },

  {
    id: "special-laws",
    eyebrow: "02 · SPECIAL CRIMINAL LAWS",
    title: "Special statutes. Different rules.",
    description:
      "Special criminal legislation where offence structure, procedure, presumptions, jurisdiction or evidentiary questions require dedicated analysis.",
    items: [
      {
        code: "IT",
        title: "Information Technology Act, 2000",
        description:
          "Electronic records, electronic signatures, cyber offences, intermediary framework and technology-related statutory provisions.",
      },
      {
        code: "NDPS",
        title: "NDPS Act, 1985",
        description:
          "Narcotic and psychotropic offences, search and seizure, statutory safeguards, presumptions, bail and procedure.",
      },
      {
        code: "ARMS",
        title: "Arms Act, 1959",
        description:
          "Arms and ammunition offences, possession, licensing, search, seizure and statutory liability.",
      },
      {
        code: "POCSO",
        title: "POCSO Act, 2012",
        description:
          "Child sexual offences, aggravated offences, reporting, investigation, Special Courts and child-sensitive procedure.",
      },
      {
        code: "JJ",
        title: "Juvenile Justice Act, 2015",
        description:
          "Children in conflict with law, Juvenile Justice Boards, inquiry, rehabilitation and child-friendly adjudication.",
      },
      {
        code: "MMDR",
        title: "MMDR Act, 1957",
        description:
          "Mining and mineral regulation, unlawful extraction, statutory offences and connected criminal proceedings.",
      },
    ],
  },

  {
    id: "cyber-digital",
    eyebrow: "03 · CYBER & DIGITAL LITIGATION",
    title: "Where criminal law meets digital evidence.",
    description:
      "A dedicated research system for the technical and evidentiary questions that arise in modern cyber-crime litigation.",
    items: [
      {
        code: "E-EVIDENCE",
        title: "Electronic Evidence",
        description:
          "Electronic records, admissibility, authenticity, integrity, source and the evidentiary chain.",
      },
      {
        code: "MOBILE",
        title: "Mobile Evidence",
        description:
          "Device acquisition, extraction, application data, identifiers, preservation and forensic examination.",
      },
      {
        code: "WHATSAPP",
        title: "WhatsApp Evidence",
        description:
          "Chats, media, exports, device data, metadata, attribution and evidentiary challenges.",
      },
      {
        code: "CDR-IP",
        title: "CDR / IP Logs",
        description:
          "Call-detail records, subscriber information, IP data, timestamps, attribution and analytical limitations.",
      },
      {
        code: "METADATA",
        title: "Metadata",
        description:
          "Creation, modification, transmission and contextual information embedded in digital records.",
      },
      {
        code: "HASH",
        title: "Hash Value",
        description:
          "Integrity verification of digital material and the role of cryptographic hashes in forensic handling.",
      },
      {
        code: "CHAIN",
        title: "Chain of Custody",
        description:
          "Documentation of acquisition, handling, transfer, storage, examination and production of digital evidence.",
      },
      {
        code: "FSL",
        title: "FSL & Forensic Examination",
        description:
          "Forensic laboratory processes, reports, examination scope and the relationship between technical findings and proof.",
      },
      {
        code: "E-SAKSHYA",
        title: "e-Sakshya",
        description:
          "Digitalisation of evidence-related processes and its relevance to modern criminal investigation and trial.",
      },
      {
        code: "NCRP",
        title: "National Cyber Crime Reporting Portal",
        description:
          "Cyber-crime reporting, complaint workflow, tracking, suspect identifiers and the investigation ecosystem.",
      },
      {
        code: "1930",
        title: "Cyber Fraud Helpline — 1930",
        description:
          "Immediate reporting mechanism for financial cyber fraud and its connection with the cyber-fraud response system.",
      },
      {
        code: "CFCFRMS",
        title: "CFCFRMS",
        description:
          "Citizen Financial Cyber Fraud Reporting and Management System and the coordinated financial-fraud response architecture.",
      },
      {
        code: "BANK",
        title: "Bank / Debit Freeze",
        description:
          "Cyber-fraud-linked account restrictions, transaction tracing, notices, representations and de-freezing litigation.",
      },
    ],
  },

  {
    id: "procedure-defence",
    eyebrow: "04 · CRIMINAL PROCEDURE & DEFENCE",
    title: "From FIR to trial.",
    description:
      "The procedural pathway of a criminal case, organised around the decisions and defence opportunities that arise at each stage.",
    items: [
      {
        code: "FIR",
        title: "FIR",
        description:
          "Registration, contents, territorial issues, allegations, investigation triggers and defence analysis.",
      },
      {
        code: "ARREST",
        title: "Arrest",
        description:
          "Arrest powers, safeguards, grounds, documentation, production before court and defence strategy.",
      },
      {
        code: "SEARCH",
        title: "Search & Seizure",
        description:
          "Search authority, procedural safeguards, seizure documentation, digital devices and evidentiary integrity.",
      },
      {
        code: "REMAND",
        title: "Remand",
        description:
          "Custody, judicial oversight, investigation requirements and defence objections at the remand stage.",
      },
      {
        code: "BAIL",
        title: "Bail",
        description:
          "Regular bail principles, statutory framework, custody factors and defence strategy.",
      },
      {
        code: "DEFAULT",
        title: "Default Bail",
        description:
          "Statutory custody periods, filing of charge-sheet and the procedural basis of an indefeasible right where applicable.",
      },
      {
        code: "ANTICIPATORY",
        title: "Anticipatory Bail",
        description:
          "Pre-arrest protection, conditions, custodial interrogation issues and defence strategy.",
      },
      {
        code: "CHARGESHEET",
        title: "Charge-sheet",
        description:
          "Investigation completion, documents, accused/evidence mapping and defence scrutiny.",
      },
      {
        code: "COGNIZANCE",
        title: "Cognizance",
        description:
          "Judicial application of mind, taking cognizance, process and challenges to procedural legality.",
      },
      {
        code: "TRIAL",
        title: "Trial",
        description:
          "Framing of charge, prosecution evidence, cross-examination, defence evidence, arguments and judgment.",
      },
    ],
  },
];

const allItems = sections.flatMap((section) => section.items);

