import { GithubIcon } from "./Icons";
import { AnimatedSection } from "./AnimatedSection";
import { profile } from "../data/profile";

export function GithubNote() {
  const isPlaceholder = profile.github.startsWith("[");

  return (
    <section
      aria-labelledby="github-note-heading"
      className="py-16 bg-surface-secondary/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-surface-border mb-5">
              <GithubIcon size={18} className="text-muted" aria-hidden="true" />
            </div>

            <h2
              id="github-note-heading"
              className="text-lg font-semibold text-text-primary mb-4"
            >
              A Note on My Project History
            </h2>

            <p className="text-muted text-sm leading-relaxed mb-6">
              My recent projects are documented through GitHub so that my development work can be
              viewed directly. Some earlier freelance projects were created using Gamma and are no
              longer easily accessible, so this portfolio focuses on work that I can currently
              demonstrate and explain.
            </p>

            {isPlaceholder ? (
              <span className="inline-flex items-center gap-2 px-4 py-2 border border-surface-border rounded text-sm text-muted/40 font-mono cursor-not-allowed">
                <GithubIcon size={14} aria-hidden="true" />
                [GITHUB_PROFILE_URL]
              </span>
            ) : (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-surface-border rounded text-sm text-text-primary hover:border-accent hover:text-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="View GitHub profile (opens in new tab)"
                id="github-note-link"
              >
                <GithubIcon size={14} aria-hidden="true" />
                View GitHub Profile
              </a>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
