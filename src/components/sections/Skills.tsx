const skillGroups = [
  {
    title: "Programming Languages",
    description: "Programming and problem-solving fundamentals.",
    skills: ["C++", "JavaScript", "TypeScript", "Data Structures & Algorithms"],
  },
  {
    title: "Frontend Development",
    description: "Building modern, responsive web interfaces.",
    skills: [
      "HTML",
      "CSS",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "React Router",
      "React Hook Form",
    ],
  },
  {
    title: "Backend Development",
    description: "Developing application logic and backend services.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Middleware",
    ],
  },
  {
    title: "Databases & Backend Services",
    description: "Data modeling, database access, and backend platforms.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Mongoose",
      "Prisma",
      "Convex",
      "Supabase",
      "Appwrite",
    ],
  },
  {
    title: "State & Authentication",
    description: "Application state and user authentication.",
    skills: ["Redux Toolkit", "Clerk"],
  },
  {
    title: "Developer Tools",
    description: "Version control and development workflows.",
    skills: ["Git", "GitHub", "Vercel"],
  },
  {
    title: "APIs & Services",
    description: "Third-party APIs and services integrated into my projects.",
    skills: ["Google Gemini API", "Vonage Video API", "Cloudinary", "Inngest", "Resend"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section skills-section"
      aria-labelledby="skills-heading">
      <div className="container">
        <div className="skills-header">
          <p className="section-eyebrow">WHAT I WORK WITH</p>

          <h2 id="skills-heading" className="section-heading">
            Technical Skills
          </h2>

          <p className="section-description">
            Languages, frameworks, and tools I&apos;ve used to build web
            applications and solve software development problems.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3 className="skill-card-title">{group.title}</h3>

              <p className="skill-card-description">{group.description}</p>

              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li className="skill-tag" key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
