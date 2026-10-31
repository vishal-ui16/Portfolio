import { AnimatedSection } from "./AnimatedSection";
import { education, educationFootnote } from "../data/education";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-24 bg-surface-secondary/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-accent font-mono text-xs tracking-wider uppercase mb-3">
            Background
          </p>
          <h2
            id="education-heading"
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-16"
          >
            Education
          </h2>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-surface-border"
            aria-hidden="true"
          />

          <ol className="space-y-10" aria-label="Education timeline">
            {education.map((entry, i) => (
              <AnimatedSection key={entry.year} delay={i * 0.1}>
                <li className="relative pl-12 sm:pl-16">
                  {/* Dot */}
                  <span
                    className="absolute left-2.5 sm:left-4 top-1.5 w-3 h-3 rounded-full border-2 border-accent bg-bg"
                    aria-hidden="true"
                  />

                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-2">
                    <span className="font-mono text-accent text-sm font-medium">
                      {entry.year}
                    </span>
                    <h3 className="text-text-primary font-semibold text-base">
                      {entry.label}
                    </h3>
                  </div>

                  {entry.sublabel && (
                    <p className="text-muted text-sm mb-2">{entry.sublabel}</p>
                  )}

                  {entry.note && (
                    <p className="text-muted/70 text-sm leading-relaxed max-w-xl">
                      {entry.note}
                    </p>
                  )}
                </li>
              </AnimatedSection>
            ))}
          </ol>
        </div>

        {/* Footnote */}
        <AnimatedSection className="mt-16" delay={0.4}>
          <div className="border-l-2 border-accent/40 pl-5 max-w-2xl">
            <p className="text-muted/80 text-sm leading-relaxed italic">
              {educationFootnote}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
