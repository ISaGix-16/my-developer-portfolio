export interface Achievement {
  title: string;
  organization: string;
  description: string;
  category: "Certification" | "Achievement";
}

export const achievements: Achievement[] = [
  {
    title: "1,000+ Coding Problems Solved",
    organization: "LeetCode, GeeksforGeeks & Code360",
    description:
      "Solved over 1,000 data structures and algorithms problems across LeetCode, GeeksforGeeks, and Code360, mainly in C++.",
    category: "Achievement",
  },
  {
    title: "Full Stack Developer Bootcamp – Master Frontend to Backend",
    organization: "GeeksforGeeks",
    description:
      "Completed GeeksforGeeks' full-stack web development bootcamp, from frontend to backend.",
    category: "Certification",
  },
  {
    title: "Introduction to Programming",
    organization: "IIT Hyderabad",
    description:
      "Completed the Introduction to Programming course as part of my B.Tech at IIT Hyderabad.",
    category: "Achievement",
  },
];
