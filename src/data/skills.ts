// ============================================================
// skills.ts — Edit this file to update your skills
// Replace the [PLACEHOLDER] values with your actual skills
// ============================================================

export interface SkillCategory {
  id: string;
  label: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    label: "Programming",
    skills: [
      "[ADD LANGUAGE]",
      "[ADD LANGUAGE]",
      "[ADD LANGUAGE]",
    ],
  },
  {
    id: "web",
    label: "Web Development",
    skills: [
      "[ADD TECHNOLOGY]",
      "[ADD TECHNOLOGY]",
      "[ADD TECHNOLOGY]",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    skills: [
      "[ADD DATABASE]",
      "[ADD DATABASE]",
    ],
  },
  {
    id: "tools",
    label: "Development Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "[ADD TOOL]",
    ],
  },
  {
    id: "areas",
    label: "Areas of Interest",
    skills: [
      "Cybersecurity",
      "Cloud Computing",
      "Software Development",
      "Web Applications",
      "E-commerce",
    ],
  },
];

export const learningGoals = [
  {
    id: "software",
    title: "Advanced Software Development",
    description:
      "Developing a stronger understanding of software architecture, design patterns and large-scale application development.",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Building a proper foundation in security principles, threat analysis and secure development practices.",
  },
  {
    id: "databases",
    title: "Database Systems",
    description:
      "Going deeper into database design, query optimisation and understanding how data is managed at scale.",
  },
  {
    id: "systemdesign",
    title: "System Design",
    description:
      "Understanding how to think about scalability, reliability and the architecture of larger software systems.",
  },
  {
    id: "cloud",
    title: "Cloud Technologies",
    description:
      "Learning how modern applications are deployed and managed in cloud environments.",
  },
  {
    id: "engineering",
    title: "Software Engineering",
    description:
      "Developing rigorous practices around testing, version control, documentation and maintainable code.",
  },
];
