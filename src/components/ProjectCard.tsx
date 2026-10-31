import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import type { Project } from "../data/projects";

function isPlaceholderUrl(url: string | undefined) {
  return !url || url.startsWith("[");
}

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
}

export function ProjectCard({ project, index, onClick }: ProjectCardProps) {
  const isNamePlaceholder = project.name.startsWith("[");

  return (
    <article
      className="group relative flex flex-col bg-surface-secondary border border-surface-border rounded-lg p-6 hover:border-accent/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 cursor-pointer focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-1 focus-within:ring-offset-bg"
      onClick={() => onClick(project)}
    >
      {/* Project number & status */}
      <div className="flex items-center justify-between mb-3">
        <p className="text-accent/40 font-mono text-xs">
          {String(index + 1).padStart(2, "0")}
        </p>
        {project.status === "Live" && (
          <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            LIVE
          </span>
        )}
      </div>

      {/* Title */}
      <h3
        className={`text-base font-semibold mb-2 transition-colors duration-200 group-hover:text-accent ${
          isNamePlaceholder ? "font-mono text-muted/50" : "text-text-primary"
        }`}
      >
        {project.name}
      </h3>

      {/* Category */}
      <p className="text-muted/60 text-xs mb-3">{project.category}</p>

      {/* Short description */}
      <p
        className={`text-sm leading-relaxed mb-4 flex-1 ${
          project.shortDescription.startsWith("[")
            ? "font-mono text-muted/40"
            : "text-muted"
        }`}
      >
        {project.shortDescription}
      </p>

      {/* Tech chips */}
      {project.technologies.length > 0 && (
        <div
          className="flex flex-wrap gap-1.5 mb-5"
          role="list"
          aria-label="Technologies"
        >
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              role="listitem"
              className={`px-2 py-0.5 rounded text-xs border ${
                tech.startsWith("[")
                  ? "border-surface-border text-muted/30 font-mono"
                  : "border-surface-border text-muted"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {/* Action buttons */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-auto pt-2">
        {/* Main expand button — always visible */}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onClick(project); }}
          className="text-xs text-muted hover:text-text-primary transition-colors duration-200 underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded cursor-pointer"
          aria-label={`View details for ${project.name}`}
          id={`project-card-detail-${project.id}`}
        >
          View Details
        </button>

        <span className="text-surface-border hidden xs:inline" aria-hidden="true">·</span>

        {/* GitHub button */}
        <a
          href={isPlaceholderUrl(project.githubUrl) ? undefined : project.githubUrl}
          target={isPlaceholderUrl(project.githubUrl) ? undefined : "_blank"}
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          aria-label={
            isPlaceholderUrl(project.githubUrl)
              ? "GitHub URL not yet added"
              : `View ${project.name} on GitHub (opens in new tab)`
          }
          aria-disabled={isPlaceholderUrl(project.githubUrl)}
          id={`project-card-github-${project.id}`}
          className={`flex items-center gap-1.5 text-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded ${
            isPlaceholderUrl(project.githubUrl)
              ? "text-muted/30 cursor-not-allowed pointer-events-none font-mono"
              : "text-muted hover:text-accent"
          }`}
        >
          <GithubIcon size={13} aria-hidden="true" />
          {isPlaceholderUrl(project.githubUrl) ? "No URL yet" : "GitHub"}
        </a>

        {/* Live demo button — only rendered if URL exists */}
        {!isPlaceholderUrl(project.liveUrl) && (
          <>
            <span className="text-surface-border" aria-hidden="true">·</span>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`View live demo of ${project.name} (opens in new tab)`}
              id={`project-card-live-${project.id}`}
              className="flex items-center gap-1.5 text-xs text-muted hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              <ExternalLink size={13} aria-hidden="true" />
              Live
            </a>
          </>
        )}
      </div>
    </article>
  );
}
