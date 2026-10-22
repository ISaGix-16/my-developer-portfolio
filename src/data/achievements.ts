export interface Achievement {
  title: string;
  organization: string;
  description: string;
  category: "Certification" | "Achievement";
}

export const achievements: Achievement[] = [
  {
    title: "Introduction to Programming",
    organization: "Course",
    description:
      "Completed coursework covering introductory programming concepts.",
    category: "Achievement",
  },
];
