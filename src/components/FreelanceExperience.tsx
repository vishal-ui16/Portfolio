import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { experiences } from "../data/experience";

export function FreelanceExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScroll = () => {
    if (!containerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    const firstCard = containerRef.current.firstElementChild as HTMLElement | null;
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 24; // 24px = gap-6
      const idx = Math.min(
        experiences.length - 1,
        Math.max(0, Math.round(scrollLeft / cardWidth))
      );
      setCurrentIndex(idx);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = containerRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (!containerRef.current) return;
    const firstCard = containerRef.current.firstElementChild as HTMLElement | null;
    const cardWidth = firstCard ? firstCard.offsetWidth + 24 : 340;

    containerRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    if (!containerRef.current) return;
    const cards = containerRef.current.children;
    if (cards[index]) {
      (cards[index] as HTMLElement).scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-accent font-mono text-xs tracking-wider uppercase mb-3">
                Work History
              </p>
              <h2
                id="experience-heading"
                className="text-3xl sm:text-4xl font-bold text-text-primary mb-4"
              >
                Freelance Experience
              </h2>
              <p className="text-muted max-w-xl leading-relaxed text-sm">
                Practical client projects and freelance work. Slide horizontally to explore more projects.
              </p>
            </div>

            {/* Slider Navigation Controls */}
            <div className="flex items-center gap-3 self-start md:self-auto">
              <span className="text-xs font-mono text-muted mr-2">
                <span className="text-accent">{String(currentIndex + 1).padStart(2, "0")}</span> / {String(experiences.length).padStart(2, "0")}
              </span>

              <button
                type="button"
                onClick={() => handleScroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous experience slide"
                className="p-2.5 rounded-lg border border-surface-border bg-surface-secondary text-muted hover:text-accent hover:border-accent/40 disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <ChevronLeft size={18} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => handleScroll("right")}
                disabled={!canScrollRight}
                aria-label="Next experience slide"
                className="p-2.5 rounded-lg border border-surface-border bg-surface-secondary text-muted hover:text-accent hover:border-accent/40 disabled:opacity-30 disabled:pointer-events-none transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Scrollable Cards Track */}
        <div
          ref={containerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 -mx-4 px-4 sm:-mx-6 sm:px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          tabIndex={0}
          role="region"
          aria-label="Freelance experiences carousel"
        >
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className="shrink-0 w-[88vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start flex flex-col"
            >
              <article
                className="flex flex-col h-full bg-surface-secondary border border-surface-border rounded-lg p-5 sm:p-6 hover:border-accent/30 transition-all duration-200"
                aria-labelledby={`exp-title-${exp.id}`}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-accent/60 font-mono text-xs">{exp.period}</span>
                  <span className="text-muted/40 font-mono text-xs">#{String(i + 1).padStart(2, "0")}</span>
                </div>

                <div className="mb-4">
                  <h3
                    id={`exp-title-${exp.id}`}
                    className={`font-semibold mb-1 ${
                      exp.title.startsWith("[") ? "font-mono text-muted/50 text-sm" : "text-text-primary text-base"
                    }`}
                  >
                    {exp.title}
                  </h3>
                  <p className="text-muted text-xs">{exp.client}</p>
                </div>

                <p
                  className={`text-sm leading-relaxed flex-1 mb-5 ${
                    exp.summary.startsWith("[") ? "font-mono text-muted/40" : "text-muted"
                  }`}
                >
                  {exp.summary}
                </p>

                {/* Skills developed */}
                <div>
                  <p className="text-xs font-mono text-muted/50 uppercase tracking-wider mb-2">
                    Skills developed
                  </p>
                  <ul className="flex flex-wrap gap-1.5" role="list" aria-label="Skills developed">
                    {exp.skillsDeveloped.map((skill, si) => (
                      <li
                        key={si}
                        className={`px-2 py-0.5 rounded text-xs border ${
                          skill.startsWith("[")
                            ? "border-surface-border text-muted/30 font-mono"
                            : "border-surface-border text-muted"
                        }`}
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          ))}
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-6" aria-hidden="true">
          {experiences.map((_, i) => (
            <button
              key={i}
              type="button"
              tabIndex={-1}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-6 bg-accent" : "w-1.5 bg-surface-border hover:bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Context note */}
        <AnimatedSection className="mt-12" delay={0.2}>
          <div className="border border-surface-border/50 rounded-lg p-5 bg-surface-secondary/20 max-w-2xl">
            <p className="text-muted/70 text-sm leading-relaxed">
              <span className="text-muted font-medium">Note:</span> Client details have been kept
              confidential where appropriate. More experience entries can easily be added to{" "}
              <code className="text-accent/60 font-mono text-xs">src/data/experience.ts</code>.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
