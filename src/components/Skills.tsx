import { AnimatedSection } from "./AnimatedSection";
import { skillCategories } from "../data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-accent font-mono text-xs tracking-wider uppercase mb-3">
            Capabilities
          </p>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-4"
          >
            Technical Skills
          </h2>
          <p className="text-muted max-w-xl mb-12 leading-relaxed text-sm">
            Skills I've developed through my diploma, personal projects and freelance work.
            Update <code className="text-accent/60 font-mono">src/data/skills.ts</code> to
            replace the placeholders with your actual skills.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <AnimatedSection key={category.id} delay={i * 0.08}>
              <div
                className="bg-surface-secondary border border-surface-border rounded-lg p-6 hover:border-accent/20 transition-all duration-200 h-full"
              >
                <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-4">
                  {category.label}
                </h3>
                <ul
                  className="flex flex-wrap gap-2"
                  role="list"
                  aria-label={`${category.label} skills`}
                >
                  {category.skills.map((skill, si) => (
                    <li
                      key={si}
                      className={`px-3 py-1.5 rounded text-xs border transition-colors duration-200 ${
                        skill.startsWith("[")
                          ? "border-surface-border text-muted/40 font-mono"
                          : "border-surface-border text-muted hover:border-accent/40 hover:text-text-primary"
                      }`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
