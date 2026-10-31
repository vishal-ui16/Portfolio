import { useEffect, useCallback } from "react";
import { X, ExternalLink } from "lucide-react";
import { GithubIcon } from "./Icons";
import { ProjectImagePlaceholder } from "./ProjectImagePlaceholder";
import type { Project } from "../data/projects";

function isPlaceholderUrl(url: string | undefined) {
  return !url || url.startsWith("[");
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (!project) return;
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, handleKeyDown]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center p-3 sm:p-6 md:p-8 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-3xl bg-bg border border-surface-border rounded-xl shadow-2xl my-3 sm:my-8">
        {/* Header */}
        <div className="flex items-start justify-between p-4 sm:p-6 border-b border-surface-border gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-accent font-mono text-xs uppercase tracking-wider mb-1">
              {project.category}
            </p>
            <h2
              id="modal-title"
              className={`text-lg sm:text-xl font-bold truncate ${
                project.name.startsWith("[") ? "font-mono text-muted/50" : "text-text-primary"
              }`}
            >
              {project.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-muted hover:text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded shrink-0 cursor-pointer"
            aria-label="Close project details"
            id="modal-close"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        <div className="p-4 sm:p-6 space-y-6 sm:space-y-8">
          {/* Screenshot */}
          {project.images[0] ? (
            <img
              src={`/projects/${project.id}/${project.images[0]}`}
              alt={`${project.name} preview`}
              className="rounded-lg border border-surface-border w-full"
            />
          ) : (
            <ProjectImagePlaceholder
              label={`${project.name} — Preview`}
              aspectRatio="16/9"
              className="w-full"
            />
          )}

          {/* Overview */}
          <div>
            <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
              Overview
            </h3>
            <p className={`text-sm leading-relaxed ${
              project.overview.startsWith("[") ? "font-mono text-muted/40" : "text-muted"
            }`}>
              {project.overview}
            </p>
          </div>

          {/* Role */}
          <div>
            <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
              My Role
            </h3>
            <p className={`text-sm leading-relaxed ${
              project.role.startsWith("[") ? "font-mono text-muted/40" : "text-muted"
            }`}>
              {project.role}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  role="listitem"
                  className={`px-3 py-1 rounded text-xs border ${
                    tech.startsWith("[")
                      ? "border-surface-border text-muted/40 font-mono"
                      : "border-accent/30 text-accent/80 bg-accent/5"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
              Key Features
            </h3>
            <ul className="space-y-2" aria-label="Features">
              {project.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-accent mt-0.5" aria-hidden="true">▸</span>
                  <span className={f.startsWith("[") ? "font-mono text-muted/40" : "text-muted"}>
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* What I learned */}
          <div>
            <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
              What I Learned
            </h3>
            <ul className="space-y-2" aria-label="Learning outcomes">
              {project.learned.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="text-accent mt-0.5" aria-hidden="true">▸</span>
                  <span className={item.startsWith("[") ? "font-mono text-muted/40" : "text-muted"}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2 border-t border-surface-border">
            <a
              href={isPlaceholderUrl(project.githubUrl) ? undefined : project.githubUrl}
              target={isPlaceholderUrl(project.githubUrl) ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={
                isPlaceholderUrl(project.githubUrl)
                  ? "GitHub URL not yet added"
                  : `View ${project.name} on GitHub`
              }
              aria-disabled={isPlaceholderUrl(project.githubUrl)}
              id={`modal-github-${project.id}`}
              className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded text-sm border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent w-full sm:w-auto ${
                isPlaceholderUrl(project.githubUrl)
                  ? "border-surface-border text-muted/40 font-mono cursor-not-allowed pointer-events-none"
                  : "border-surface-border text-text-primary hover:border-accent hover:text-accent"
              }`}
            >
              <GithubIcon size={14} aria-hidden="true" />
              {isPlaceholderUrl(project.githubUrl) ? "[GITHUB_URL]" : "View on GitHub"}
            </a>

            {!isPlaceholderUrl(project.liveUrl) && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.name}`}
                id={`modal-live-${project.id}`}
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded text-sm border border-accent/50 text-accent hover:bg-accent hover:text-bg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent w-full sm:w-auto"
              >
                <ExternalLink size={14} aria-hidden="true" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
