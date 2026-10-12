export type SkillLevel =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export type Skill = {
  id: string;
  name: string;
  category: string;
  description: string;
  level?: SkillLevel;
};

export const skills: Skill[] = [
  {
    id: "skill-1",
    name: "TypeScript",
    category: "Programming",
    description:
      "Writing structured JavaScript applications with static types.",
    level: "Beginner",
  },
  {
    id: "skill-2",
    name: "React Native",
    category: "Mobile Development",
    description:
      "Building mobile interfaces with reusable components and hooks.",
    level: "Intermediate",
  },
  {
    id: "skill-3",
    name: "Expo",
    category: "Mobile Development",
    description:
      "Developing, testing, and preparing React Native applications for release.",
    level: "Intermediate",
  },
  {
    id: "skill-4",
    name: "Git & GitHub",
    category: "Development Tools",
    description:
      "Tracking source-code changes and managing project repositories.",
    level: "Advanced",
  },
  {
    id: "skill-5",
    name: "UI/UX Design",
    category: "Design",
    description:
      "Planning readable layouts, consistent visual styles, and intuitive user flows.",
    level: "Beginner",
  },
  {
    id: "skill-6",
    name: "Problem Solving",
    category: "Professional Skills",
    description:
      "Breaking development tasks into manageable steps and investigating errors.",
    level: "Beginner",
  },
];

export default skills;