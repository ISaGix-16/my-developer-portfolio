export default function About() {
  return (
    <section
      id="about"
      className="section about-section"
      aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          <div className="about-heading-wrapper">
            <p className="section-eyebrow">GET TO KNOW ME</p>

            <h2 id="about-heading" className="section-heading">
              About Me
            </h2>
          </div>

          <div className="about-content">
            <p className="about-intro">
              I&apos;m Aman Arya, a software developer and graduate of the
              Indian Institute of Technology Hyderabad, where I earned my B.Tech
              in Mechanical &amp; Aerospace Engineering and moved into software
              by building things.
            </p>

            <p>
              I build full-stack web applications with React, Next.js,
              TypeScript, and Node.js, backed by PostgreSQL, MongoDB, and
              modern backend platforms. I&apos;ve also solved 1,000+ problems
              on LeetCode, GeeksforGeeks, and Code360, which keeps my
              problem-solving and C++ fundamentals sharp.
            </p>

            <p>
              I&apos;ve shipped Quorilo, a blogging platform; SplitE, an
              AI-powered expense-splitting app; and MediBridge, a doctor
              appointment platform with video consultations. I&apos;ve also
              built a video-platform REST API with Express, MongoDB, and JWT
              authentication to strengthen my backend skills.
            </p>

            <p>
              I&apos;m looking for an SDE, full-stack, or frontend role where I
              can ship real features, learn from experienced engineers, and
              keep growing.
            </p>

            <a href="#projects" className="about-link">
              Explore my projects
              <span aria-hidden="true"> ↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
