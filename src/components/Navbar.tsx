import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "./Icons";
import { profile } from "../data/profile";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isPlaceholder = profile.github.startsWith("[");

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/95 backdrop-blur-sm border-b border-surface-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="font-semibold text-text-primary tracking-tight hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          aria-label="Vishal Chandel — back to top"
        >
          <span className="text-accent font-mono">VC</span>
          <span className="ml-2 text-sm text-muted hidden sm:inline">Vishal Chandel</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-3 py-2 text-sm text-muted hover:text-text-primary transition-colors duration-200 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* GitHub CTA */}
        <div className="hidden md:flex items-center gap-3">
          {isPlaceholder ? (
            <span className="flex items-center gap-2 px-3 py-1.5 text-sm border border-surface-border rounded text-muted font-mono cursor-not-allowed opacity-60">
              <GithubIcon size={14} aria-hidden="true" />
              [GITHUB_PROFILE_URL]
            </span>
          ) : (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 text-sm border border-surface-border rounded text-text-primary hover:border-accent hover:text-accent transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="View GitHub profile (opens in new tab)"
            >
              <GithubIcon size={14} aria-hidden="true" />
              GitHub
            </a>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden p-2 text-muted hover:text-text-primary transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`md:hidden fixed inset-0 top-16 bg-bg/98 backdrop-blur-md z-40 overflow-y-auto transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="px-6 py-6 pb-16 flex flex-col gap-1 min-h-[calc(100vh-4rem)]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="py-3 text-base sm:text-lg text-muted hover:text-text-primary border-b border-surface-border/50 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded active:bg-surface-secondary/40"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-6 pt-2">
            {isPlaceholder ? (
              <span className="flex items-center gap-2 py-2 text-xs sm:text-sm text-muted font-mono opacity-60">
                <GithubIcon size={14} aria-hidden="true" />
                [GITHUB_PROFILE_URL]
              </span>
            ) : (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2 text-sm text-muted hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              >
                <GithubIcon size={16} aria-hidden="true" />
                View GitHub
              </a>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
