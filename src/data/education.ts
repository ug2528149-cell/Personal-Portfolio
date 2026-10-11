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
    qualification: "Your Actual Degree or Programme",
    period: "2024 – Present",
    description: "Describe your current studies, relevant coursework, and knowledge gained. Replace this example with your actual academic details.",
    status: "In Progress",
    title: undefined
  },
  {
    id: "education-2",
    institution: "Your Previous School or Institution",
    qualification: "Your Previous Qualification",
    period: "2021 – 2024",
    description: "Add a concise summary of your previous education or training and any relevant achievements.",
    status: "Completed",
    title: undefined
  },
];

export default educationData;