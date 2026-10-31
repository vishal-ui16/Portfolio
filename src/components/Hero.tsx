import { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { GithubIcon } from "./Icons";
import { profile } from "../data/profile";

const codeLines = [
  { text: "const developer = {", color: "text-text-primary" },
  { text: '  name: "Vishal Chandel",', color: "text-green-400" },
  { text: '  focus: "Computer Science",', color: "text-green-400" },
  { text: "  learning: [", color: "text-text-primary" },
  { text: '    "Software Development",', color: "text-accent" },
  { text: '    "Cybersecurity",', color: "text-accent" },
  { text: '    "System Design",', color: "text-accent" },
  { text: "  ],", color: "text-text-primary" },
  { text: '  status: "Building & learning",', color: "text-green-400" },
  { text: "};", color: "text-text-primary" },
];

export function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const isPlaceholder = profile.github.startsWith("[");

  useEffect(() => {
    if (visibleLines >= codeLines.length) return;
    const timer = setTimeout(() => {
      setVisibleLines((v) => v + 1);
    }, 120);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  const scrollToProjects = () => {
    const el = document.querySelector("#projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="min-h-screen flex items-center pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div>
            <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">
              Computer Science Portfolio
            </p>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-4">
              Vishal <span className="text-accent">Chandel</span>
            </h1>

            <p className="text-muted text-base sm:text-xl mb-6 leading-relaxed">
              Computer Science Student · Developer · Builder
            </p>

            <p className="text-muted/80 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10 max-w-prose">
              {profile.bio}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
              <button
                type="button"
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-6 py-3 bg-accent text-bg font-semibold rounded text-sm hover:bg-accent/90 transition-all duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg text-center cursor-pointer"
                id="hero-view-projects"
              >
                View Projects
              </button>

              {isPlaceholder ? (
                <span className="flex items-center justify-center gap-2 px-6 py-3 border border-surface-border rounded text-sm text-muted font-mono opacity-60 cursor-not-allowed w-full sm:w-auto">
                  <GithubIcon size={16} aria-hidden="true" />
                  [GITHUB_PROFILE_URL]
                </span>
              ) : (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-surface-border rounded text-sm text-text-primary hover:border-accent hover:text-accent transition-all duration-200 hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg w-full sm:w-auto"
                  aria-label="View GitHub profile (opens in new tab)"
                  id="hero-github"
                >
                  <GithubIcon size={16} aria-hidden="true" />
                  GitHub
                </a>
              )}
            </div>
          </div>

          {/* Right: code block */}
          <div className="hidden lg:block">
            <div
              className="bg-surface-secondary border border-surface-border rounded-lg overflow-hidden"
              aria-hidden="true"
            >
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-surface-border">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-muted font-mono">developer.ts</span>
              </div>

              {/* Code lines */}
              <div className="p-5 font-mono text-sm leading-7">
                <div className="text-muted text-xs mb-2">// about me</div>
                {codeLines.map((line, i) => (
                  <div
                    key={i}
                    className={`transition-opacity duration-300 ${
                      i < visibleLines ? "opacity-100" : "opacity-0"
                    } ${line.color}`}
                  >
                    <span className="text-surface-border/60 select-none mr-4 text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {line.text}
                  </div>
                ))}
                {visibleLines >= codeLines.length && (
                  <span className="inline-block w-2 h-5 bg-accent animate-pulse ml-8" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            type="button"
            onClick={() => {
              const el = document.querySelector("#about");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-muted hover:text-accent transition-colors duration-200 animate-bounce focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={20} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
