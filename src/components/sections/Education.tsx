import { GraduationCap, School } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="section education-section"
      aria-labelledby="education-heading">
      <div className="container">
        <div className="education-header">
          <p className="section-eyebrow">MY ACADEMIC BACKGROUND</p>

          <h2 id="education-heading" className="section-heading">
            Education
          </h2>

          <p className="section-description">
            The academic foundation behind my engineering and software
            development journey.
          </p>
        </div>

        {/* Bachelor's Degree */}
        <article className="education-card">
          <div className="education-icon" aria-hidden="true">
            <GraduationCap size={27} />
          </div>

          <div className="education-content">
            <p className="education-label">BACHELOR&apos;S DEGREE</p>

            <h3 className="education-degree">
              B.Tech in Mechanical &amp; Aerospace Engineering
            </h3>

            <p className="education-institution">
              Indian Institute of Technology Hyderabad
            </p>

            <p className="education-description">
              An engineering background that provided a foundation in analytical
              thinking, problem-solving, and technical fundamentals.
            </p>

            <div className="education-score">
              <span className="education-score-value">7.49</span>
              <span className="education-score-label">CGPA</span>
            </div>
          </div>
        </article>

        {/* School Education */}
        <div className="school-education-grid">
          {/* Class XII */}
          <article className="education-card school-education-card">
            <div className="education-icon" aria-hidden="true">
              <School size={25} />
            </div>

            <div className="education-content">
              <p className="education-label">CLASS XII · 2021</p>

              <h3 className="education-degree">Senior Secondary Education</h3>

              <p className="education-institution">
                Axis Academy Sr. Sec. School, Bibirani, Alwar
              </p>

              <p className="education-description">
                Board: Rajasthan Board of Secondary Education (RBSE)
              </p>

              <p className="education-score">
                <span className="education-score-value">99.40%</span>
                <span className="education-score-label">Final Score</span>
              </p>
            </div>
          </article>

          {/* Class X */}
          <article className="education-card school-education-card">
            <div className="education-icon" aria-hidden="true">
              <School size={25} />
            </div>

            <div className="education-content">
              <p className="education-label">CLASS X · 2019</p>

              <h3 className="education-degree">Secondary Education</h3>

              <p className="education-institution">
                Axis Academy Sr. Sec. School, Bibirani, Alwar
              </p>

              <p className="education-description">
                Board: Rajasthan Board of Secondary Education (RBSE)
              </p>

              <p className="education-score">
                <span className="education-score-value">91.33%</span>
                <span className="education-score-label">Final Score</span>
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
