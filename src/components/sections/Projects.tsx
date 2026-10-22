import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section projects-section"
      aria-labelledby="projects-heading">
      <div className="container">
        <div className="projects-header">
          <div>
            <p className="section-eyebrow">WHAT I&apos;VE BUILT</p>

            <h2 id="projects-heading" className="section-heading">
              Featured Projects
            </h2>

            <p className="section-description">
              A selection of applications I&apos;ve built while exploring modern
              web development and full-stack engineering.
            </p>
          </div>

          <Link
            href="https://github.com/ISaGix-16"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-github-link">
            More on GitHub
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
