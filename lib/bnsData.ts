/**
 * OFFICIAL STATUTORY LAYER — BHARATIYA NYAYA SANHITA, 2023
 * Act No.: 45 of 2023 (Gazette of India / India Code)
 * Enactment Date: 25 December 2023
 * Commencement Date: 1 July 2024 (Except Section 106(2) kept in abeyance)
 * Verification Level: 🟢 VERIFIED — OFFICIAL STATUTE
 */

export interface BnsChapter {
  chapterNumber: string;
  title: string;
  sectionRange: string;
}

export interface BnsStatutorySection {
  section: string;
  title: string;
  chapterNumber: string;
  chapterTitle: string;
  officialText: string;
  punishmentText: string;
  commencementStatus: "In Force (01.07.2024)" | "Kept in Abeyance (Sec. 106(2))";
  sourceReference: string;
}

export const bnsActOverview = {
  actTitle: "Bharatiya Nyaya Sanhita, 2023",
  actNumber: "Act No. 45 of 2023",
  enactmentDate: "25 December 2023",
  commencementDate: "1 July 2024",
  abeyanceNote: "Section 106(2) regarding hit-and-run has been kept in abeyance by Central Government notification.",
  totalChapters: 20,
  totalSections: 358,
  sourceUrl: "https://www.indiacode.nic.in"
};

export const bnsChapters: BnsChapter[] = [
  { chapterNumber: "Chapter I", title: "Preliminary", sectionRange: "§ 1 – § 3" },
  { chapterNumber: "Chapter II", title: "Of Punishments", sectionRange: "§ 4 – § 13" },
  { chapterNumber: "Chapter III", title: "General Exceptions", sectionRange: "§ 14 – § 44" },
  { chapterNumber: "Chapter IV", title: "Of Abetment, Criminal Conspiracy and Attempt", sectionRange: "§ 45 – § 62" },
  { chapterNumber: "Chapter V", title: "Of Offences Against Women and Children", sectionRange: "§ 63 – § 99" },
  { chapterNumber: "Chapter VI", title: "Of Offences Affecting the Human Body", sectionRange: "§ 100 – § 146" },
  { chapterNumber: "Chapter VII", title: "Of Offences Against the State", sectionRange: "§ 147 – § 158" },
  { chapterNumber: "Chapter VIII", title: "Of Offences Relating to the Army, Navy and Air Force", sectionRange: "§ 159 – § 168" },
  { chapterNumber: "Chapter IX", title: "Of Offences Relating to Elections", sectionRange: "§ 169 – § 177" },
  { chapterNumber: "Chapter X", title: "Of Offences Relating to Coin, Currency-Notes, Bank-Notes, and Government Stamps", sectionRange: "§ 178 – § 188" },
  { chapterNumber: "Chapter XI", title: "Of Offences Against the Public Tranquillity", sectionRange: "§ 189 – § 197" },
  { chapterNumber: "Chapter XII", title: "Of Offences by or Relating to Public Servants", sectionRange: "§ 198 – § 205" },
  { chapterNumber: "Chapter XIII", title: "Of Contempts of the Lawful Authority of Public Servants", sectionRange: "§ 206 – § 226" },
  { chapterNumber: "Chapter XIV", title: "Of False Evidence and Offences Against Public Justice", sectionRange: "§ 227 – § 269" },
  { chapterNumber: "Chapter XV", title: "Of Offences Affecting the Public Health, Safety, Convenience, Decency and Morals", sectionRange: "§ 270 – § 297" },
  { chapterNumber: "Chapter XVI", title: "Of Offences Relating to Religion", sectionRange: "§ 298 – § 302" },
  { chapterNumber: "Chapter XVII", title: "Of Offences Against Property", sectionRange: "§ 303 – § 334" },
  { chapterNumber: "Chapter XVIII", title: "Of Offences Relating to Documents and to Property Marks", sectionRange: "§ 335 – § 350" },
  { chapterNumber: "Chapter XIX", title: "Of Criminal Intimidation, Insult, Annoyance, Defamation, etc.", sectionRange: "§ 351 – § 357" },
  { chapterNumber: "Chapter XX", title: "Repeal and Savings", sectionRange: "§ 358" }
];

export const bnsStatutoryDatabase: BnsStatutorySection[] = [
  {
    section: "3(5)",
    title: "Joint criminal liability (Acts done by several persons in furtherance of common intention)",
    chapterNumber: "Chapter I",
    chapterTitle: "Preliminary",
    officialText: "When a criminal act is done by several persons in furtherance of the common intention of all, each of such persons is liable for that act in the same manner as if it were done by him alone.",
    punishmentText: "Liable for the act in the same manner as if done by him alone.",
    commencementStatus: "In Force (01.07.2024)",
    sourceReference: "BNS 2023, Act 45 of 2023, S. 3(5)"
  },
  {
    section: "61",
    title: "Criminal conspiracy",
    chapterNumber: "Chapter IV",
    chapterTitle: "Of Abetment, Criminal Conspiracy and Attempt",
    officialText: "When two or more persons agree to do, or cause to be done an illegal act, or an act which is not illegal by illegal means, such an agreement is designated a criminal conspiracy: Provided that no agreement except an agreement to commit an offence shall amount to a criminal conspiracy unless some act besides the agreement is done by one or more parties to such agreement in pursuance thereof.",
    punishmentText: "Punished in the same manner as if he had abetted such offence.",
    commencementStatus: "In Force (01.07.2024)",
    sourceReference: "BNS 2023, Act 45 of 2023, S. 61"
  },
  {
    section: "62",
    title: "Punishment for attempting to commit offences",
    chapterNumber: "Chapter IV",
    chapterTitle: "Of Abetment, Criminal Conspiracy and Attempt",
    officialText: "Whoever attempts to commit an offence punishable by this Sanhita with imprisonment or fine or with both, and in such attempt does any act towards the commission of the offence, shall, where no express provision is made by this Sanhita for the punishment of such attempt, be punished with imprisonment of any description provided for the offence, for a term which may extend to one-half of the longest term of imprisonment provided for that offence, or with such fine as is provided for the offence, or with both.",
    punishmentText: "Imprisonment extending to one-half of the longest term provided for that offence, or fine, or both.",
    commencementStatus: "In Force (01.07.2024)",
    sourceReference: "BNS 2023, Act 45 of 2023, S. 62"
  },
  {
    section: "316(2)",
    title: "Criminal breach of trust",
    chapterNumber: "Chapter XVII",
    chapterTitle: "Of Offences Against Property",
    officialText: "Whoever commits criminal breach of trust shall be punished with imprisonment of either description for a term which may extend to five years, or with fine, or with both.",
    punishmentText: "Imprisonment of either description for a term which may extend to five years, or with fine, or with both.",
    commencementStatus: "In Force (01.07.2024)",
    sourceReference: "BNS 2023, Act 45 of 2023, S. 316(2)"
  },
  {
    section: "318(4)",
    title: "Cheating and dishonestly inducing delivery of property",
    chapterNumber: "Chapter XVII",
    chapterTitle: "Of Offences Against Property",
    officialText: "Whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any person, or to make, alter or destroy the whole or any part of a valuable security, or anything which is signed or sealed, and which is capable of being converted into a valuable security, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    punishmentText: "Imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    commencementStatus: "In Force (01.07.2024)",
    sourceReference: "BNS 2023, Act 45 of 2023, S. 318(4)"
  },
  {
    section: "319(2)",
    title: "Cheating by personation",
    chapterNumber: "Chapter XVII",
    chapterTitle: "Of Offences Against Property",
    officialText: "Whoever cheats by personation shall be punished with imprisonment of either description for a term which may extend to five years, or with fine, or with both.",
    punishmentText: "Imprisonment of either description for a term which may extend to five years, or with fine, or with both.",
    commencementStatus: "In Force (01.07.2024)",
    sourceReference: "BNS 2023, Act 45 of 2023, S. 319(2)"
  },
  {
    section: "336(3)",
    title: "Forgery of valuable security, will, etc.",
    chapterNumber: "Chapter XVIII",
    chapterTitle: "Of Offences Relating to Documents and to Property Marks",
    officialText: "Whoever commits forgery of a document purporting to be a valuable security or a will, or an authority to adopt a son, or which purports to give authority to any person to make or transfer any valuable security, or to receive the principal, interest or dividends thereon, or to receive or deliver any money, movable property, or valuable security, or any document purporting to be an acquittance or receipt acknowledging the payment of money, or an acquittance or receipt for the delivery of any movable property or valuable security, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    punishmentText: "Imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    commencementStatus: "In Force (01.07.2024)",
    sourceReference: "BNS 2023, Act 45 of 2023, S. 336(3)"
  },
  {
    section: "336(4)",
    title: "Forgery for purpose of cheating",
    chapterNumber: "Chapter XVIII",
    chapterTitle: "Of Offences Relating to Documents and to Property Marks",
    officialText: "Whoever commits forgery, intending that the document or electronic record forged shall be used for the purpose of cheating, shall be punished with imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    punishmentText: "Imprisonment of either description for a term which may extend to seven years, and shall also be liable to fine.",
    commencementStatus: "In Force (01.07.2024)",
    sourceReference: "BNS 2023, Act 45 of 2023, S. 336(4)"
  },
  {
    section: "340(2)",
    title: "Using as genuine a forged document or electronic record",
    chapterNumber: "Chapter XVIII",
    chapterTitle: "Of Offences Relating to Documents and to Property Marks",
    officialText: "Whoever fraudulently or dishonestly uses as genuine any document or electronic record which he knows or has reason to believe to be a forged document or electronic record, shall be punished in the same manner as if he had forged such document or electronic record.",
    punishmentText: "Punished in the same manner as if he had forged such document or electronic record.",
    commencementStatus: "In Force (01.07.2024)",
    sourceReference: "BNS 2023, Act 45 of 2023, S. 340(2)"
  }
];
