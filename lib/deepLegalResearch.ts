export type LegalAct = "BNS" | "BNSS" | "BSA";

export interface LegacyMapping {
  act: string;
  section: string;
  source: "user-supplied" | "verified";
}

export interface DeepLegalResearch {
  act: LegalAct;
  section: string;
  title: string;
  category?: string;
  provision?: string;
  ingredients?: string[];
  punishment?: string;
  proceduralRequirements?: string[];
  evidenceIssues?: string[];
  digitalEvidenceIssues?: string[];
  defenceIssues?: string[];
  crossExaminationIssues?: string[];
  bailIssues?: string[];
  caseLaw?: string[];
  legacyMapping?: LegacyMapping[];
  tags?: string[];
  sources?: string[];
}

export const deepLegalResearchData: DeepLegalResearch[] = [
  {
    act: "BNS",
    section: "318(4)",
    title: "Cheating and dishonestly inducing delivery of property",
    category: "Offences Against Property",
    provision: "Whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any person, or to make, alter or destroy the whole or any part of a valuable security, or anything which is signed or sealed, and which is capable of being converted into a valuable security, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    ingredients: [
      "Cheating must be established.",
      "There must be fraudulent or dishonest inducement.",
      "The inducement must operate upon the person deceived.",
      "Resulting in delivery of property or creation/alteration of valuable security.",
      "Dishonest intention / mens rea existing at the inception of the transaction.",
      "Deception and resulting act established through admissible legal evidence."
    ],
    punishment: "Imprisonment of either description up to 7 years, and mandatory fine.",
    proceduralRequirements: [
      "Cognizable offence.",
      "Non-bailable category.",
      "Triable by Magistrate of the First Class.",
      "Compounding governed by BNSS §359(2) with permission of the Court."
    ],
    evidenceIssues: [
      "Proof of initial fraudulent representation or deception.",
      "Proof connecting the inducement directly with delivery of property.",
      "Proof of bank, ledger, and transaction records.",
      "Distinction between criminal deception and mere civil breach of contract."
    ],
    digitalEvidenceIssues: [
      "Bank transaction statements and payment gateway API trails.",
      "Electronic communications (Email, WhatsApp, SMS).",
      "Attribution of mobile device and IP address to the accused.",
      "Mandatory Section 63 BSA certificate for electronic outputs."
    ],
    defenceIssues: [
      "Dispute is purely civil in character arising from contractual non-performance.",
      "No dishonest intention existed at the inception of the deal.",
      "Accused is a third-party account holder (mule) with no role in deception.",
      "Failure of prosecution to establish device or transaction attribution."
    ],
    crossExaminationIssues: [
      "Exact date, time, and manner of the alleged initial inducement.",
      "Evidence establishing criminal intent at inception vs subsequent delay.",
      "Attribution of bank account and phone number to the accused.",
      "Compliance with BSA §63 certificate for digital printouts."
    ],
    bailIssues: [
      "Offence carries maximum 7 years punishment (Satender Antil guidelines apply).",
      "Entire prosecution case rests on documentary/digital records already seized.",
      "Absence of necessity for custodial interrogation."
    ],
    legacyMapping: [{ act: "IPC", section: "420", source: "user-supplied" }],
    tags: ["bns", "bns 318(4)", "cheating", "ipc 420", "bank fraud", "bsa 63"],
    sources: ["official-statute", "procedural", "evidence", "user-supplied"]
  },
  {
    act: "BSA",
    section: "63",
    title: "Admissibility of electronic records",
    category: "Evidence / Electronic Records",
    provision: "Information contained in an electronic record which is printed on paper, stored, recorded or copied in optical or magnetic media or semiconductor memory is treated as a computer output and is admissible in proceedings subject to strict statutory conditions and certification.",
    ingredients: [
      "Electronic record falls within statutory concept of computer output.",
      "Computer/device used regularly in ordinary course of activities.",
      "Device operating properly during the material period.",
      "Mandatory Certificate signed by authorized officer in charge."
    ],
    punishment: "Not applicable (Rule of Evidence). Secondary electronic evidence is inadmissible without Certificate.",
    proceduralRequirements: [
      "Production of Section 63 Certificate at the time of tendering electronic evidence.",
      "Identification of source device and hash value.",
      "Signatory must be competent person in charge of device management."
    ],
    evidenceIssues: [
      "Secondary electronic evidence without Certificate is completely inadmissible.",
      "Oral evidence cannot substitute the missing statutory certificate."
    ],
    digitalEvidenceIssues: [
      "Server logs, CCTV footage, WhatsApp database exports, CDR/IPDR dumps.",
      "Cryptographic hash integrity (SHA-256) and chain of custody."
    ],
    defenceIssues: [
      "Defective certificate missing device operating particulars.",
      "Certificate signed by someone with no direct technical control.",
      "Break in chain of custody prior to forensic extraction."
    ],
    crossExaminationIssues: [
      "Who physically extracted the electronic file?",
      "What device hash was generated at the exact time of extraction?",
      "How was device shielded from remote data alteration?"
    ],
    bailIssues: ["Prosecution rests entirely on uncertified, inadmissible digital copies."],
    legacyMapping: [{ act: "IEA", section: "65B", source: "user-supplied" }],
    tags: ["bsa", "bsa 63", "section 65b", "electronic evidence", "digital certificate"],
    sources: ["official-statute", "evidence", "user-supplied"]
  },
  {
    act: "BNSS",
    section: "359",
    title: "Compounding of offences",
    category: "Criminal Procedure",
    provision: "Statutory framework specifying compoundable criminal offences without court permission under Sub-section (1), and with permission of the Court under Sub-section (2). Composition results in statutory acquittal.",
    ingredients: [
      "Offence must be listed in statutory tables under Section 359.",
      "Person compounding must be the victim/person cheated specified in table.",
      "Leave/Permission of the Court where required under Section 359(2)."
    ],
    punishment: "Procedural relief. Composition operates as a complete acquittal under Section 359(8).",
    proceduralRequirements: [
      "Filing formal joint compromise petition before trial court.",
      "Verification of voluntariness and identity of victim."
    ],
    evidenceIssues: ["Proof of settlement deed and satisfaction of claims."],
    digitalEvidenceIssues: ["Payment receipt through banking channels for restitution."],
    defenceIssues: [
      "Offence falls squarely within compoundable schedule with court leave.",
      "Parties reached amicable settlement; continuation of trial is abuse of process."
    ],
    crossExaminationIssues: ["Confirm voluntariness of settlement with complainant."],
    bailIssues: ["Settlement between parties strongly favors immediate bail/discharge."],
    legacyMapping: [{ act: "CrPC", section: "320", source: "user-supplied" }],
    tags: ["bnss", "bnss 359", "crpc 320", "compounding", "compromise", "acquittal"],
    sources: ["official-statute", "procedural", "user-supplied"]
  }
];
