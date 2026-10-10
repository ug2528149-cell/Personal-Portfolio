export type Availability = "Available" | "Busy";

export type Profile = {
  fullName: string;
  headline: string;
  biography: string;
  primarySkill: string;
  availability: Availability;
  imageUri: string | null;
};

export const initialProfile: Profile = {
  fullName: "MANZI PRINCE Peter",
  headline: "Aspiring Software Developer",
  biography:
    "I am a software development student passionate about building useful digital experiences and solving real-world problems with technology.",
  primarySkill: "React Native",
  availability: "Available",
  imageUri: null,
};