import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { profile } from "../data/profile";

function isPlaceholder(val: string) {
  return !val || val.startsWith("[");
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="border-t border-surface-border py-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div className="text-center sm:text-left">
            <p className="text-text-primary font-semibold text-sm">Vishal Chandel</p>
            <p className="text-muted text-xs mt-1">Computer Science Portfolio</p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-4" aria-label="Social links">
            {!isPlaceholder(profile.github) && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                aria-label="GitHub profile (opens in new tab)"
                id="footer-github"
              >
                <GithubIcon size={16} aria-hidden="true" />
              </a>
            )}
            {!isPlaceholder(profile.linkedin) && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                aria-label="LinkedIn profile (opens in new tab)"
                id="footer-linkedin"
              >
                <LinkedinIcon size={16} aria-hidden="true" />
              </a>
            )}
            {!isPlaceholder(profile.email) && (
              <a
                href={`mailto:${profile.email}`}
                className="p-2 text-muted hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                aria-label="Send email"
                id="footer-email"
              >
                <Mail size={16} aria-hidden="true" />
              </a>
            )}
            {Boolean(profile.phone && !isPlaceholder(profile.phone)) && (
              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="p-2 text-muted hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                aria-label="Call phone"
                id="footer-phone"
              >
                <Phone size={16} aria-hidden="true" />
              </a>
            )}
          </div>

          {/* Right */}
          <p className="text-muted text-xs">
            &copy; {currentYear} Vishal Chandel
          </p>
        </div>
      </div>
    </footer>
  );
}
