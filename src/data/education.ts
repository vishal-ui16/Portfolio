// ============================================================
// education.ts — Edit this file to update your education timeline
// ============================================================

export interface EducationEntry {
  year: string;
  label: string;
  sublabel?: string;
  note?: string;
}

export const education: EducationEntry[] = [
  {
    year: "2020",
    label: "Class 10",
    sublabel: "Secondary School Certificate",
  },
  {
    year: "2022",
    label: "Class 12 / Senior Secondary",
    sublabel: "Higher Secondary Certificate",
  },
  {
    year: "2022 – 2023",
    label: "Diploma in Computer Science",
    sublabel: "One-Year Diploma Programme",
    note: "Introduced me to programming fundamentals, computing concepts and practical application development.",
  },
  {
    year: "Current",
    label: "Preparing for BSc Computer Science",
    sublabel: "Undergraduate Study",
    note: "Actively preparing to apply for a two-year BSc Computer Science degree to deepen my theoretical and practical knowledge.",
  },
];

export const educationFootnote =
  "My academic foundation introduced me to computing, while my independent projects and freelance work have helped me apply that knowledge in practical situations.";
