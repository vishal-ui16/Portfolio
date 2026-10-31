import { ExternalLink, Globe, ShieldCheck } from "lucide-react";
import { GithubIcon } from "./Icons";
import { AnimatedSection } from "./AnimatedSection";
import { featuredProject } from "../data/projects";

function isPlaceholderUrl(url: string | undefined) {
  return !url || url.startsWith("[");
}

export function GameBoost() {
  const project = featuredProject;

  const secondaryScreenshots = [
    { key: 1, file: project.images[1] || "clash-of-clans.jpg", label: "Clash of Clans Catalog" },
    { key: 2, file: project.images[2] || "pokemon-go.png", label: "Pokémon GO Listings" },
    { key: 3, file: project.images[3] || "free-fire.png", label: "Free Fire Accounts" },
  ];

  return (
    <section
      id="featured-project"
      aria-labelledby="featured-project-heading"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <p className="text-accent font-mono text-xs tracking-wider uppercase">
              Featured Project
            </p>
            {project.status === "Ongoing Production" ? (
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true" />
                Ongoing Production · In Development
              </span>
            ) : project.status === "Live" ? (
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                Live on Vercel
              </span>
            ) : (
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-medium">
                <ShieldCheck size={11} aria-hidden="true" />
                {project.status}
              </span>
            )}
          </div>
          <h2
            id="featured-project-heading"
            className="text-3xl sm:text-4xl font-bold text-text-primary mb-2"
          >
            {project.name}
          </h2>
          <p className="text-muted text-sm mb-12">{project.category}</p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: content */}
          <div className="space-y-8">

            {/* Overview */}
            <AnimatedSection delay={0.1}>
              <div>
                <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                  01 · Overview
                </h3>
                <p className="text-muted leading-relaxed text-sm sm:text-base">{project.overview}</p>
              </div>
            </AnimatedSection>

            {/* Role */}
            <AnimatedSection delay={0.15}>
              <div>
                <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                  02 · My Role
                </h3>
                <p className="text-muted leading-relaxed text-sm sm:text-base">{project.role}</p>
              </div>
            </AnimatedSection>

            {/* Features */}
            <AnimatedSection delay={0.2}>
              <div>
                <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                  03 · Key Features & Architecture
                </h3>
                <ul className="space-y-2.5" aria-label="Project features">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-muted text-sm">
                      <span className="text-accent mt-0.5 font-bold" aria-hidden="true">▸</span>
                      <span className={feature.startsWith("[") ? "font-mono text-muted/50 break-words" : "break-words leading-relaxed"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Technologies */}
            <AnimatedSection delay={0.25}>
              <div>
                <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                  04 · Technologies & Stack
                </h3>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      role="listitem"
                      className={`px-3 py-1 rounded text-xs border ${
                        tech.startsWith("[")
                          ? "border-surface-border text-muted/40 font-mono"
                          : "border-accent/30 text-accent/90 bg-accent/5 font-medium"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* What I learned */}
            <AnimatedSection delay={0.3}>
              <div>
                <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                  05 · Engineering Takeaways
                </h3>
                <ul className="space-y-2.5" aria-label="Learning outcomes">
                  {project.learned.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-muted text-sm">
                      <span className="text-accent mt-0.5 font-bold" aria-hidden="true">▸</span>
                      <span className={item.startsWith("[") ? "font-mono text-muted/50 break-words" : "break-words leading-relaxed"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Links */}
            <AnimatedSection delay={0.35}>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2">
                <a
                  href={project.liveUrl || "https://igmartstore.vercel.app"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit IGMART live preview (opens in new tab)"
                  id="igmart-live"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-accent text-bg hover:bg-accent/90 transition-all duration-200 shadow-md shadow-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent w-full sm:w-auto"
                >
                  <Globe size={16} aria-hidden="true" />
                  Visit Live Preview (igmartstore.vercel.app)
                  <ExternalLink size={14} aria-hidden="true" className="ml-1" />
                </a>

                <a
                  href={isPlaceholderUrl(project.githubUrl) ? undefined : project.githubUrl}
                  target={isPlaceholderUrl(project.githubUrl) ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={
                    isPlaceholderUrl(project.githubUrl)
                      ? "GitHub repository link pending"
                      : "View IGMART on GitHub (opens in new tab)"
                  }
                  aria-disabled={isPlaceholderUrl(project.githubUrl)}
                  id="igmart-github"
                  className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent w-full sm:w-auto ${
                    isPlaceholderUrl(project.githubUrl)
                      ? "border-surface-border text-muted/40 font-mono cursor-not-allowed pointer-events-none"
                      : "border-surface-border text-text-primary hover:border-accent hover:text-accent"
                  }`}
                >
                  <GithubIcon size={14} aria-hidden="true" />
                  {isPlaceholderUrl(project.githubUrl) ? "[GITHUB_URL]" : "GitHub Repo"}
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Right: screenshots */}
          <AnimatedSection delay={0.2}>
            <div className="space-y-4">
              {/* Main preview */}
              <div className="group relative rounded-xl overflow-hidden border border-surface-border bg-surface-secondary">
                <img
                  src={`/projects/igmart/${project.images[0] || "hero-space.png"}`}
                  alt="IGMART live store homepage hero"
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-bg via-bg/60 to-transparent p-4 flex items-center justify-between">
                  <span className="text-xs font-mono text-text-primary font-medium">
                    IGMART — Gaming Account Marketplace
                  </span>
                  <a
                    href="https://igmartstore.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-accent hover:underline flex items-center gap-1"
                  >
                    igmartstore.vercel.app
                    <ExternalLink size={11} aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Secondary screenshots row */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                {secondaryScreenshots.map(({ key, file, label }) => (
                  <div
                    key={key}
                    className="group relative rounded-lg overflow-hidden border border-surface-border bg-surface-secondary"
                  >
                    <img
                      src={`/projects/igmart/${file}`}
                      alt={`IGMART — ${label}`}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-1.5 sm:p-2">
                      <span className="text-[10px] sm:text-xs font-mono text-white/90 truncate w-full">
                        {label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-xs text-muted/60 font-mono pt-1">
                <span>Ongoing production preview</span>
                <span className="text-accent/70">Next.js · Vercel</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
