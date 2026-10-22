import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span className="hero-status-dot" aria-hidden="true" />
            SOFTWARE DEVELOPER · FULL-STACK DEVELOPMENT
          </p>

          <h1 id="hero-heading" className="hero-title">
            Hi, I&apos;m Aman Arya.
            <br />
            <span>I build</span>
            <br />
            web experiences.
          </h1>

          <p className="hero-description">
            An IIT Hyderabad graduate passionate about software development and
            building practical web applications with React, Next.js, and modern
            backend technologies.
          </p>

          <div className="hero-actions">
            <Link href="#projects" className="hero-button-primary">
              Explore My Projects
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>

            <Link href="#contact" className="hero-button-secondary">
              Let&apos;s Connect
            </Link>
          </div>

          <a href="#about" className="hero-scroll">
            <ArrowDown size={16} aria-hidden="true" />
            <span>Scroll to explore</span>
          </a>
        </div>

        <div className="hero-decoration" aria-hidden="true">
          <div className="hero-decoration-inner">
            <span className="hero-decoration-bracket">{"<"}</span>
            <span className="hero-decoration-slash">/</span>
            <span className="hero-decoration-bracket">{">"}</span>
          </div>
          <div className="hero-decoration-caption">
            BUILD · CREATE · IMPROVE
          </div>
        </div>
      </div>
    </section>
  );
}
