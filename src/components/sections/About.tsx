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
              in Mechanical &amp; Aerospace Engineering.
            </p>

            <p>
              My interest lies in building modern web applications with
              technologies such as JavaScript, React, Next.js, and Node.js. I
              enjoy turning ideas into functional products and writing code that
              is clean, maintainable, and easy to understand.
            </p>

            <p>
              My projects include Quorilo, a blogging platform; SplitE, an
              expense-splitting application; and MediBridge, a healthcare
              application. Through these projects, I&apos;ve been developing my
              skills in frontend development, backend integration, and
              full-stack application development.
            </p>

            <p>
              I&apos;m looking to apply my technical skills to meaningful
              software development work, learn from experienced developers, and
              continue growing as an engineer.
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
