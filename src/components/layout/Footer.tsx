import Link from "next/link";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="#home" className="footer-logo">
              aman<span>.</span>
            </Link>

            <p className="footer-tagline">Building useful things with code.</p>
          </div>

          <nav className="footer-navigation" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href} className="footer-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="footer-social-links">
            <a
              href="https://github.com/ISaGix-16"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-github"
              aria-label="Visit GitHub profile">
              GitHub <span aria-hidden="true">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/aman-arya-0ab02127b/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-github"
              aria-label="Visit LinkedIn profile">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Aman Arya. All rights reserved.</p>

          <a href="#home" className="footer-back-to-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
