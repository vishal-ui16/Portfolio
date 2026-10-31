import { AnimatedSection } from "./AnimatedSection";
import { learningGoals } from "../data/skills";
import { profile } from "../data/profile";

export function LearningGoals() {
  return (
    <section
      aria-labelledby="learning-heading"
      className="py-24 bg-surface-secondary/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-accent font-mono text-xs tracking-wider uppercase mb-3">
            Looking Ahead
          </p>
          <h2
            id="learning-heading"
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-4"
          >
            What I Want to Develop Next
          </h2>
          <p className="text-muted max-w-xl mb-12 leading-relaxed text-sm">
            These are areas I want to develop further through undergraduate study and continued
            independent work — not things I'm claiming expertise in already.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {learningGoals.map((goal, i) => (
            <AnimatedSection key={goal.id} delay={i * 0.08}>
              <div className="bg-surface-secondary border border-surface-border rounded-lg p-5 hover:border-accent/30 transition-all duration-200 h-full">
                <h3 className="text-text-primary font-semibold text-sm mb-2">
                  {goal.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {goal.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Career direction */}
        <AnimatedSection className="mt-16" delay={0.3}>
          <div className="border border-surface-border rounded-lg p-8 bg-surface-secondary/20 max-w-3xl">
            <p className="text-accent font-mono text-xs uppercase tracking-wider mb-3">
              My Direction
            </p>
            <p className="text-muted leading-relaxed">{profile.careerDirection}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
