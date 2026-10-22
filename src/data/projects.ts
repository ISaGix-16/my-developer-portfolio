export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  image: string;
  number: string;
  category: string;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "Quorilo",
    category: "Blogging Platform",
    description:
      "A full-stack blogging platform with user authentication, a rich-text editor, featured-image uploads, and post creation, editing, and browsing. Built with React, Redux Toolkit, and Appwrite.",
    technologies: [
      "React",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Redux Toolkit",
      "Appwrite",
      "TinyMCE",
    ],
    image: "/images/projects/quorilo.png",
    liveUrl: "https://quorilo.vercel.app/",
    githubUrl: "https://github.com/ISaGix-16/Quorilo",
  },
  {
    number: "02",
    title: "SplitE",
    category: "Expense Management",
    description:
      "A full-stack expense-sharing application for managing shared expenses, organizing groups and contacts, and tracking settlements. Built with Next.js, Convex, and Clerk.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Convex",
      "Clerk",
      "Inngest",
      "Google Generative AI",
    ],
    image: "/images/projects/splite.png",
    liveUrl: "https://splite-coral.vercel.app/",
    githubUrl: "https://github.com/ISaGix-16/SplitE",
  },
  {
    number: "03",
    title: "MediBridge",
    category: "Healthcare Application",
    description:
      "A healthcare application for discovering doctors and managing appointment workflows, with doctor availability and verification-related functionality. Built with Next.js, Prisma, and PostgreSQL.",
    technologies: [
      "Next.js",
      "React",
      "JavaScript",
      "Prisma",
      "PostgreSQL",
      "Clerk",
    ],
    image: "/images/projects/medibridge.png",
    liveUrl: "https://medi-bridge-steel-iota.vercel.app/",
    githubUrl: "https://github.com/ISaGix-16/MediBridge",
  },
];
