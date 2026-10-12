import { ReactNode } from "react";

export type Education = {
  title: ReactNode;
  id: string;
  institution: string;
  qualification: string;
  period: string;
  description: string;
  status: "Completed" | "In Progress";
};

export const educationData: Education[] = [
  {
    id: "education-1",
    institution: "INES – Ruhengeri",
    qualification: "Bachelor's Degree",
    period: "2024 – Present",
    description: "I am particularly a software engineering/developer student, I particularly love learning advanced Programming languages like JavaScript and Python, but I hope to involve in cloud computing if not Cybersecurity.",
    status: "In Progress",
    title: undefined
  },
  {
    id: "education-2",
    institution: "GYM",
    qualification: "Certificate",
    period: "2025 – 2026",
    description: "This was one of the greatest moment I enjoyed at Campus. It took a full year which was an intense one of learning JavaScript Fundamentals, React, TypeScript, Website Cloning, Touch typing to mention but a few",
    status: "Completed",
    title: undefined
  },
];

export default educationData;