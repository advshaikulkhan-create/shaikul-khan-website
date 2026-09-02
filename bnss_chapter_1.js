const fs = require('fs');

const bnss_chapter_1 = {
  chapter_no: "CHAPTER I",
  chapter_heading: "PRELIMINARY",
  section_range: "BNSS Section 1 to Section 5",
  total_sections: 5,
  sections: [
    {
      section_no: "BNSS Section 1",
      title: "Short title, extent and commencement.",
      bare_text: `1. (1) This Act may be called the Bharatiya Nagarik Suraksha Sanhita, 2023.
(2) The provisions of this Sanhita, other than those relating to Chapters IX, XI and XII thereof, shall not apply-
(a) to the State of Nagaland;
(b) to the tribal areas,
but the concerned State Government may, by notification, apply such provisions or any of them to the whole or part of the State of Nagaland or such tribal areas, as the case may be, with such supplemental, incidental or consequential modifications, as may be specified in the notification.
Explanation. In this section, "tribal areas" means the territories which immediately before the 21st day of January, 1972, were included in the tribal areas of Assam, as referred to in paragraph 20 of the Sixth Schedule to the Constitution, other than those within the local limits of the municipality of Shillong.
(3) It shall come into force on such date as the Central Government may, by notification in the Official Gazette, appoint.`
    },
    {
      section_no: "BNSS Section 2",
      title: "Definitions.",
      bare_text: `2. (1) In this Sanhita, unless the context otherwise requires,-
(a) "audio-video electronic means" shall include use of any communication device for the purposes of video conferencing, recording of processes of identification, search and seizure or evidence, transmission of electronic communication and for such other purposes and by such other means as the State Government may, by rules provide;
(b) "bail" means release of a person accused of or suspected of commission of an offence from the custody of law upon certain conditions imposed by an officer or Court on execution by such person of a bond or a bail bond;
(c) "bailable offence" means an offence which is shown as bailable in the First Schedule, or which is made bailable by any other law for the time being in force; and "non-bailable offence" means any other offence;
(d) "bail bond" means an undertaking for release with surety;
(e) "bond" means a personal bond or an undertaking for release without surety;
(f) "charge" includes any head of charge when the charge contains more heads than one;
(g) "cognizable offence" means an offence for which, and "cognizable case" means a case in which, a police officer may, in accordance with the First Schedule or under any other law for the time being in force, arrest without warrant;
(h) "complaint" means any allegation made orally or in writing to a Magistrate, with a view to his taking action under this Sanhita, that some person, whether known or unknown, has committed an offence, but does not include a police report.
Explanation. A report made by a police officer in a case which discloses, after investigation, the commission of a non-cognizable offence shall be deemed to be a complaint; and the police officer by whom such report is made shall be deemed to be the complainant;
(i) "electronic communication" means the communication of any written, verbal, pictorial information or video content transmitted or transferred (whether from one person to another or from one device to another or from a person to a device or from a device to a person) by means of an electronic device including a telephone, mobile phone, or other wireless telecommunication device, or a computer, or audio-video player or camera or any other electronic device or electronic form as may be specified by notification, by the Central Government;
(j) "High Court" means,-
(i) in relation to any State, the High Court for that State;
(ii) in relation to a Union territory to which the jurisdiction of the High Court for a State has been extended by law, that High Court;
(iii) in relation to any other Union territory, the highest Court of criminal appeal for that territory other than the Supreme Court of India;
(k) "inquiry" means every inquiry, other than a trial, conducted under this Sanhita by a Magistrate or Court;
(l) "investigation" includes all the proceedings under this Sanhita for the collection of evidence conducted by a police officer or by any person (other than a Magistrate) who is authorised by a Magistrate in this behalf.
Explanation. Where any of the provisions of a special Act are inconsistent with the provisions of this Sanhita, the provisions of the special Act shall prevail;
(m) "judicial proceeding" includes any proceeding in the course of which evidence is or may be legally taken on oath;
(n) "local jurisdiction", in relation to a Court or Magistrate, means the local area within which the Court or Magistrate may exercise all or any of its or his powers under this Sanhita and such local area may comprise the whole of the State, or any part of the State, as the State Government may, by notification, specify;
(o) "non-cognizable offence" means an offence for which, and "non-cognizable case" means a case in which, a police officer has no authority to arrest without warrant;
(p) "notification" means a notification published in the Official Gazette;
(q) "offence" means any act or omission made punishable by any law for the time being in force and includes any act in respect of which a complaint may be made under section 20 of the Cattle Trespass Act, 1871;
(r) "officer in charge of a police station" includes, when the officer in charge of the police station is absent from the station-house or unable from illness or other cause to perform his duties, the police officer present at the station-house who is next in rank to such officer and is above the rank of constable or, when the State Government so directs, any other police officer so present;
(s) "place" includes a house, building, tent, vehicle and vessel;
(t) "police report" means a report forwarded by a police officer to a Magistrate under sub-section (3) of section 193;
(u) "police station" means any post or place declared generally or specially by the State Government, to be a police station, and includes any local area specified by the State Government in this behalf;
(v) "Public Prosecutor" means any person appointed under section 18, and includes any person acting under the directions of a Public Prosecutor;
(w) "sub-division" means a sub-division of a district;
(x) "summons-case" means a case relating to an offence, and not being a warrant-case;
(y) "victim" means a person who has suffered any loss or injury caused by reason of the act or omission of the accused person and includes the guardian or legal heir of such victim;
(z) "warrant-case" means a case relating to an offence punishable with death, imprisonment for life or imprisonment for a term exceeding two years.
(2) Words and expressions used herein and not defined but defined in the Information Technology Act, 2000 and the Bharatiya Nyaya Sanhita, 2023 shall have the meanings respectively assigned to them in that Act and Sanhita.`
    },
    {
      section_no: "BNSS Section 3",
      title: "Construction of references.",
      bare_text: `3. (1) Unless the context otherwise requires, any reference in any law, to a Magistrate without any qualifying words, Magistrate of the first class or a Magistrate of the second class shall, in relation to any area, be construed as a reference to a Judicial Magistrate of the first class or Judicial Magistrate of the second class, as the case may be, exercising jurisdiction in such area.
(2) Where, under any law, other than this Sanhita, the functions exercisable by a Magistrate relate to matters,-
(a) which involve the appreciation or shifting of evidence or the formulation of any decision which exposes any person to any punishment or penalty or detention in custody pending investigation, inquiry or trial or would have the effect of sending him for trial before any Court, they shall, subject to the provisions of this Sanhita, be exercisable by a Judicial Magistrate; or
(b) which are administrative or executive in nature, such as, the granting of a licence, the suspension or cancellation of a licence, sanctioning a prosecution or withdrawing from a prosecution, they shall, subject to the provisions of clause (a) be exercisable by an Executive Magistrate.`
    },
    {
      section_no: "BNSS Section 4",
      title: "Trial of offences under Bharatiya Nyaya Sanhita, 2023 and other laws.",
      bare_text: `4. (1) All offences under the Bharatiya Nyaya Sanhita, 2023 shall be investigated, inquired into, tried, and otherwise dealt with according to the provisions hereinafter contained.
(2) All offences under any other law shall be investigated, inquired into, tried, and otherwise dealt with according to the same provisions, but subject to any enactment for the time being in force regulating the manner or place of investigating, inquiring into, trying or otherwise dealing with such offences.`
    },
    {
      section_no: "BNSS Section 5",
      title: "Saving.",
      bare_text: `5. Nothing contained in this Sanhita shall, in the absence of a specific provision to the contrary, affect any special or local law for the time being in force, or any special jurisdiction or power conferred, or any special form of procedure prescribed, by any other law for the time being in force.`
    }
  ]
};

let allData = [];
const filePath = 'bnss_data.json';

if (fs.existsSync(filePath)) {
  try {
    allData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    allData = allData.filter(ch => ch.chapter_no !== "CHAPTER I");
  } catch (e) {
    allData = [];
  }
}

allData.unshift(bnss_chapter_1);
fs.writeFileSync(filePath, JSON.stringify(allData, null, 2), 'utf8');
console.log("✅ BNSS CHAPTER I (धारा 1 से 5) का Bare Act डेटा सफलतापूर्वक 'bnss_data.json' में लोड हो गया है।");
