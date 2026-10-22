import { Award, Trophy } from "lucide-react";
import { achievements } from "@/data/achievements";

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section achievements-section"
      aria-labelledby="achievements-heading">
      <div className="container">
        <div className="achievements-header">
          <p className="section-eyebrow">LEARNING &amp; GROWTH</p>

          <h2 id="achievements-heading" className="section-heading">
            Certifications &amp; Achievements
          </h2>

          <p className="section-description">
            A record of learning milestones and accomplishments along my
            technical journey.
          </p>
        </div>

        <div className="achievements-list">
          {achievements.map((achievement) => {
            const Icon =
              achievement.category === "Certification" ? Award : Trophy;

            return (
              <article key={achievement.title} className="achievement-card">
                <div className="achievement-icon" aria-hidden="true">
                  <Icon size={24} />
                </div>

                <div className="achievement-content">
                  <span className="achievement-category">
                    {achievement.category}
                  </span>

                  <h3 className="achievement-title">{achievement.title}</h3>

                  <p className="achievement-organization">
                    {achievement.organization}
                  </p>

                  <p className="achievement-description">
                    {achievement.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
