interface ProjectImagePlaceholderProps {
  label?: string;
  aspectRatio?: string; // e.g. "16/9" or "4/3"
  className?: string;
}

/**
 * Placeholder component for project screenshots.
 * To replace with a real image:
 *   1. Place the image in public/projects/<project-id>/
 *   2. Replace this component usage with:
 *      <img src="/projects/<project-id>/screenshot.png" alt="..." className="..." />
 */
export function ProjectImagePlaceholder({
  label = "Screenshot Placeholder",
  aspectRatio = "16/9",
  className = "",
}: ProjectImagePlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-lg border border-dashed border-surface-border bg-surface-secondary text-muted select-none p-2 ${className}`}
      style={{ aspectRatio }}
      role="img"
      aria-label={label}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5 sm:w-7 sm:h-7 mb-1.5 sm:mb-2 opacity-40 shrink-0"
        aria-hidden="true"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
      <span className="text-[11px] sm:text-xs font-mono opacity-50 text-center px-1 truncate max-w-full">
        {label}
      </span>
    </div>
  );
}
