import { ArrowUpRight, Mail, MapPin } from "lucide-react";

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5">
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 .1.75 2.02 3.02 1.42.1-.71.39-1.2.7-1.48-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.04-1.14 3.04-1.14.61 1.54.23 2.68.11 2.96.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.08 5.49.4.34.76 1.02.76 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="h-5 w-5">
      <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.85 0 1.55-.68 1.55-1.52V3.52c0-.84-.7-1.52-1.55-1.52ZM7.93 18.73H4.97V9.2h2.96v9.53ZM6.45 7.9a1.72 1.72 0 1 1 .02-3.44 1.72 1.72 0 0 1-.02 3.44Zm12.28 10.83h-2.96v-4.64c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.72H9.47V9.2h2.84v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 3 0 3.58 1.98 3.58 4.56v5.21Z" />
    </svg>
  );
}

export default function Contact() {
  const email = "itsaman24916@gmail.com";

  return (
    <section
      id="contact"
      className="border-t border-(--border) bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-(--accent)">
          Get in touch
        </p>

        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Let&apos;s connect.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-8 text-(--muted)">
              I&apos;m open to software development opportunities, interesting
              projects, and conversations about technology. Feel free to reach
              out.
            </p>

            <a
              href={`mailto:${email}`}
              className="mt-8 inline-flex items-center gap-3 rounded-lg border border-(--accent) bg-(--accent) px-5 py-3 font-medium text-background transition-colors hover:border-(--accent-hover) hover:bg-(--accent-hover) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)">
              <Mail size={18} aria-hidden="true" />
              Send me an email
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>

          <div className="rounded-2xl border border-(--border) bg-(--surface) p-6 text-foreground sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Contact information
            </h3>

            <a
              href={`mailto:${email}`}
              className="mt-6 flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-(--surface-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-(--border) text-(--accent)">
                <Mail size={20} aria-hidden="true" />
              </span>

              <span className="min-w-0">
                <span className="block text-sm text-(--muted)">Email</span>
                <span className="break-all text-sm font-medium text-foreground sm:text-base">
                  {email}
                </span>
              </span>
            </a>

            <div className="mt-2 flex items-center gap-4 rounded-lg p-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-(--border) text-(--accent)">
                <MapPin size={20} aria-hidden="true" />
              </span>

              <span>
                <span className="block text-sm text-(--muted)">
                  Location
                </span>
                <span className="text-sm font-medium text-foreground sm:text-base">
                  Khairthal–Tijara, Rajasthan, India
                </span>
              </span>
            </div>

            <div className="my-5 border-t border-(--border)" />

            <p className="mb-4 text-sm text-(--muted)">Find me online</p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/aman-arya-0ab02127b/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
                className="inline-flex items-center gap-2 rounded-lg border border-(--border) px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-(--accent) hover:bg-(--surface-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)">
                <LinkedInIcon />
                LinkedIn
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>

              <a
                href="https://github.com/ISaGix-16"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                className="inline-flex items-center gap-2 rounded-lg border border-(--border) px-4 py-3 text-sm font-medium text-foreground transition-colors hover:border-(--accent) hover:bg-(--surface-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)">
                <GitHubIcon />
                GitHub
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
