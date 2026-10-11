export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  contribution: string;
  technologies: string[];
  outcome: string;
  status: ProjectStatus;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "project-one",
    title: "Personal Portfolio App",
    category: "Mobile Development",
    description:
      "A personal portfolio application designed to introduce my background, skills, education, and software projects.",
    problem:
      "A traditional CV does not demonstrate mobile interface design, application navigation, local data persistence, or practical development skills.",
    contribution:
      "I am developing the interface, reusable React Native components, navigation structure, profile editing workflow, and local persistence.",
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "AsyncStorage",
    ],
    outcome:
      "The intended outcome is an independently installable Android application that presents my portfolio and works offline.",
    status: "In Progress",
    featured: true,
  },
  {
    id: "project-two",
    title: "Your Actual Student Project",
    category: "Software Development",
    description:
      "Replace this description with a concise explanation of a real application, website, or programming project you have worked on.",
    problem:
      "Explain the specific problem your project was designed to solve and who would benefit from the solution.",
    contribution:
      "Describe the parts you personally designed, implemented, tested, or documented. Be specific about your own contribution.",
    technologies: [
      "Replace with your actual technology",
      "Another actual technology",
    ],
    outcome:
      "Describe the actual result, current status, or what you learned. Do not claim deployment or success that has not occurred.",
    status: "In Progress",
    featured: false,
  },
];

export default projects;