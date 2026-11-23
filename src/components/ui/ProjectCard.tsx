import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      {project.image ? (
        <div className="project-image-wrapper">
          <Image
            src={project.image}
            alt={`${project.title} application screenshot`}
            width={1280}
            height={800}
            className="project-image"
            sizes="(max-width: 768px) 100vw, (max-width: 1120px) 50vw, 540px"
          />
        </div>
      ) : null}

      <div className="project-card-body">
        <div className="project-card-top">
          <span className="project-number">{project.number}</span>

          <span className="project-category">{project.category}</span>
        </div>

        <div className="project-card-content">
          <h3 className="project-title">{project.title}</h3>

          <p className="project-description">{project.description}</p>

          <ul
            className="project-technologies"
            aria-label={`${project.title} technologies`}>
            {project.technologies.map((technology) => (
              <li key={technology} className="project-technology">
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <div className="project-card-footer">
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link project-link-primary">
              Live Demo
              <ExternalLink size={16} aria-hidden="true" />
            </Link>
          ) : null}

          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={
                project.liveUrl
                  ? "project-link"
                  : "project-link project-link-primary"
              }>
              Source Code
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
