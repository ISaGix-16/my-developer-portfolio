export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  image?: string;
  number: string;
  category: string;
}

export const projects: Project[] = [
  {
    number: "01",
    title: "Quorilo",
    category: "Blogging Platform",
    description:
      "A full-stack blogging platform with authentication, protected routes, and post create, publish, edit, and delete workflows, using Appwrite for auth, database, and storage. Includes a TinyMCE rich-text editor with image uploads, DOMPurify-sanitized article HTML, and Redux Toolkit state management.",
    technologies: [
      "React",
      "Vite",
      "React Router",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Hook Form",
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
    category: "AI Expense Splitting",
    description:
      "An AI-powered expense-splitting app with equal, percentage, and exact splits, groups, balances, and settlements. Uses Clerk authentication with Convex real-time reactive queries, a Recharts spending dashboard, Gemini API spending insights, and automated email reminders through Inngest and Resend.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Convex",
      "Clerk",
      "Recharts",
      "Google Gemini API",
      "Inngest",
      "Resend",
    ],
    image: "/images/projects/splite.png",
    liveUrl: "https://splite-coral.vercel.app/",
    githubUrl: "https://github.com/ISaGix-16/SplitE",
  },
  {
    number: "03",
    title: "MediBridge",
    category: "Doctor Appointments",
    description:
      "A doctor-appointment platform with patient and doctor onboarding, doctor discovery by specialty, and availability-based booking. Includes video consultations through the Vonage Video API, a credit-based system with Clerk plans, and doctor and admin dashboards for verification and payouts, with data modeled in Prisma and PostgreSQL.",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Vonage Video API",
    ],
    image: "/images/projects/medibridge.png",
    liveUrl: "https://medi-bridge-steel-iota.vercel.app/",
    githubUrl: "https://github.com/ISaGix-16/MediBridge",
  },
  {
    number: "04",
    title: "Vizo",
    category: "REST API",
    description:
      "A modular REST API for a video platform, with JWT access and refresh-token authentication (bcrypt hashing, HTTP-only cookies, token rotation), Mongoose schemas for users, videos, comments, likes, playlists, tweets, and subscriptions, Multer and Cloudinary file uploads, and MongoDB aggregation pipelines for channel profiles, subscriber counts, and watch history.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Cloudinary",
    ],
    githubUrl: "https://github.com/ISaGix-16/Vizo",
  },
];
