import { AnimatedSection } from "./AnimatedSection";
import { profile } from "../data/profile";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left: heading block */}
            <div className="lg:col-span-4">
              <p className="text-accent font-mono text-xs tracking-wider uppercase mb-3">
                About
              </p>
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight"
              >
                A bit about me
              </h2>
              <div className="mt-6 w-12 h-px bg-accent" aria-hidden="true" />

              {/* Small detail card */}
              <div className="mt-8 p-4 bg-surface-secondary border border-surface-border rounded-lg">
                <p className="text-xs font-mono text-muted uppercase tracking-wider mb-3">
                  Current focus
                </p>
                <ul className="space-y-2 text-sm text-muted">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5" aria-hidden="true">▸</span>
                    Creator of IGMART (igmartstore.vercel.app)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5" aria-hidden="true">▸</span>
                    Freelance projects
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5" aria-hidden="true">▸</span>
                    Preparing for BSc CS
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: prose */}
            <div className="lg:col-span-8 space-y-5">
              {profile.about.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-muted leading-relaxed text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
