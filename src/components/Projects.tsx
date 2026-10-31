import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { githubProjects } from "../data/projects";
import type { Project } from "../data/projects";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="projects"
        aria-labelledby="projects-heading"
        className="py-24 bg-surface-secondary/30"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-accent font-mono text-xs tracking-wider uppercase mb-3">
              Development Work
            </p>
            <h2
              id="projects-heading"
              className="text-3xl sm:text-4xl font-bold text-text-primary mb-4"
            >
              Selected Projects
            </h2>
            <p className="text-muted max-w-xl mb-12 leading-relaxed text-sm">
              Recent development work available through GitHub. Click any card to see project details.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {githubProjects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.08}>
                <ProjectCard
                  project={project}
                  index={i}
                  onClick={setSelectedProject}
                />
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-10" delay={0.3}>
            <p className="text-xs font-mono text-muted/50 text-center">
              Update{" "}
              <code className="text-accent/60">src/data/projects.ts</code>{" "}
              to replace placeholder project cards with your actual repositories
            </p>
          </AnimatedSection>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
