import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import Name from "@/components/playful/Name";
import ThemeToggle from "@/components/playful/ThemeToggle";
import BlogButton from "@/components/playful/BlogButton";
import { links, experience, projects } from "@/data/content";

function SectionNumber({ n }: { n: string }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-faint">
      <span>{n}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

function Squiggle() {
  return (
    <svg className="mt-1 h-2 w-16" viewBox="0 0 64 8" aria-hidden>
      <path className="squiggle" d="M2 5 q6 -5 12 0 t12 0 t12 0 t12 0 t12 0" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* sticky top bar */}
      <header className="fixed left-0 top-0 z-50 w-full border-b border-line bg-background/40 px-5 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-xl items-center gap-2">
          <Link href="/" className="hover-wiggle inline-block select-none">
            n.b.
          </Link>
          <span className="ml-auto" />
          <ThemeToggle />
        </div>
      </header>

      <main className="mx-auto max-w-xl space-y-16 px-5 pb-20 pt-32">
        {/* 01 — intro */}
        <section className="reveal">
          <SectionNumber n="01" />
          <h1 className="sr-only">Naman Biyani</h1>
          <Name />
          <p className="mt-6">
            hey! i&apos;m naman. i study{" "}
            <span className="font-serif italic text-[1.1em]">computer science</span> @ the
            university of waterloo. currently improving product recommendations
            as an mle intern @ shopify.
          </p>
          <p className="mt-4 text-muted">
            <a className="link" href={links.github} target="_blank" rel="noopener noreferrer">
              github
            </a>{" "}
            ⋅{" "}
            <a className="link" href={links.linkedin} target="_blank" rel="noopener noreferrer">
              linkedin
            </a>{" "}
            ⋅{" "}
            <a className="link" href={links.twitter} target="_blank" rel="noopener noreferrer">
              x
            </a>{" "}
            ⋅{" "}
            <a className="link" href={links.goodreads} target="_blank" rel="noopener noreferrer">
              goodreads
            </a>{" "}
            ⋅{" "}
            <a className="link" href={links.webring} target="_blank" rel="noopener noreferrer">
              se-webring
            </a>
          </p>
        </section>

        {/* 02 — experience */}
        <section className="reveal" style={{ animationDelay: "0.1s" }}>
          <SectionNumber n="02" />
          <h2 className="text-lg">
            places i&apos;ve worked
            <Squiggle />
          </h2>
          <ul className="mt-6 space-y-6">
            {experience.map((job, idx) => (
              <li
                key={idx}
                className="group transition-transform duration-300 ease-out hover:translate-x-1"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span>{job.company.toLowerCase()}</span>
                  <span className="shrink-0 text-muted">{job.role.toLowerCase()}</span>
                </div>
                <p className="mt-1 text-muted">{job.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 03 — projects */}
        <section className="reveal" style={{ animationDelay: "0.2s" }}>
          <SectionNumber n="03" />
          <h2 className="text-lg">
            things i&apos;ve built
            <Squiggle />
          </h2>
          <ul className="mt-6 space-y-8">
            {projects.map((project, idx) => (
              <li key={idx}>
                <div className="flex items-baseline justify-between gap-4">
                  <a
                    className="link group"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.name.toLowerCase()}{" "}
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <span className="shrink-0 text-muted">{project.context.toLowerCase()}</span>
                </div>
                <p className="mt-1 text-muted">{project.description}</p>
                {project.notes.length > 0 && (
                  <ul className="mt-2 space-y-0.5">
                    {project.notes.map((note, noteIdx) => (
                      <li key={noteIdx} className="text-faint">
                        ★{" "}
                        {note.href ? (
                          <a
                            className="link"
                            href={note.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {note.text.toLowerCase()}
                          </a>
                        ) : (
                          note.text.toLowerCase()
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* 04 — blog */}
        <section className="reveal" style={{ animationDelay: "0.3s" }}>
          <SectionNumber n="04" />
          <h2 className="text-lg">
            sometimes i write
            <Squiggle />
          </h2>
          <p className="mt-4 text-muted">or at least, i&apos;m about to start.</p>
          <div className="mt-4">
            <BlogButton />
          </div>
        </section>

        {/* 05 — say hi */}
        <section className="reveal" style={{ animationDelay: "0.4s" }}>
          <SectionNumber n="05" />
          <h2 className="text-lg">
            please say hi!
            <Squiggle />
          </h2>
          <p className="mt-4 text-muted">
            i love hearing from people — about anything. books, side quests, why
            my takes are wrong.
          </p>
          <p className="mt-4">
            <a className="link" href={links.email}>
              nbiyani [at] uwaterloo [dot] ca
            </a>
          </p>
        </section>

        <footer className="border-t border-line pt-6 text-center text-faint">
          <p>
            made with <span className="text-accent">♥</span> by naman biyani ⋅ 2026
          </p>
        </footer>
        <Analytics />
      </main>
    </div>
  );
}
