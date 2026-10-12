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
    title: "Prince Portfolio App",
    category: "Mobile Development",
    description:
      "This portfolio application is designed to introduce my background, skills, education, and software projects.",
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
    title: "AfriHomes Campus",
    category: "Software Development",
    description:
      "This is to make life of Campus students easier, the project was to sort the issue all students whether the local ones or international ones all face.",
    problem:
      "Since am a student too, I found out that getting rental houses for students was really hard so I organised a group and we built the project AfriHomes Campus for students to easily access rentals wherever they might be.",
    contribution:
      "I the member of AfriHomes Campus team, I surveyed for the houses that are vacant to take their pictures and be part of the experimentals. I also designed the Chatbot that could translate into Kinyarwanda and English language for both international and home students.",
    technologies: [
      "Paying the domains to host it on Google",
      "Website and Camera",
    ],
    outcome:
      "TYes, the project is good but not yet spread to the whole society so that can be used and trusted by the house owners.",
    status: "In Progress",
    featured: false,
  },
];

export default projects;