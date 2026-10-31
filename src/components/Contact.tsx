import { Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { AnimatedSection } from "./AnimatedSection";
import { profile } from "../data/profile";

function isPlaceholder(val: string) {
  return val.startsWith("[");
}

interface ContactLinkProps {
  href: string;
  label: string;
  display: string;
  icon: React.ReactNode;
  id: string;
  external?: boolean;
}

function ContactLink({ href, label, display, icon, id, external }: ContactLinkProps) {
  const placeholder = isPlaceholder(display);

  if (placeholder) {
    return (
      <div className="flex items-center gap-4 py-3.5 sm:py-4 border-b border-surface-border/50 min-w-0">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-surface-border text-muted shrink-0">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-muted/50 uppercase tracking-wider mb-0.5">{label}</p>
          <span className="font-mono text-muted/40 text-xs sm:text-sm break-all">{display}</span>
        </div>
      </div>
    );
  }

  return (
    <a
      href={href}
      id={id}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={`${label}: ${display}${external ? " (opens in new tab)" : ""}`}
      className="flex items-center gap-4 py-3.5 sm:py-4 border-b border-surface-border/50 group hover:border-accent/30 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded min-w-0"
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-lg border border-surface-border text-muted group-hover:border-accent/40 group-hover:text-accent transition-all duration-200 shrink-0">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-muted/50 uppercase tracking-wider mb-0.5">{label}</p>
        <span className="text-text-primary text-sm group-hover:text-accent transition-colors duration-200 break-all sm:break-normal">
          {display}
        </span>
      </div>
    </a>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <p className="text-accent font-mono text-xs tracking-wider uppercase mb-3">
                Get in Touch
              </p>
              <h2
                id="contact-heading"
                className="text-3xl sm:text-4xl font-bold text-text-primary mb-4"
              >
                Contact
              </h2>
              <p className="text-muted leading-relaxed max-w-sm">
                Feel free to reach out directly via email or phone regarding opportunities, projects, or questions.
              </p>
            </div>

            {/* Right: contact links */}
            <div>
              <ContactLink
                id="contact-email"
                href={`mailto:${profile.email}`}
                label="Email"
                display={profile.email}
                icon={<Mail size={16} aria-hidden="true" />}
              />
              <ContactLink
                id="contact-phone"
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                label="Phone"
                display={profile.phone}
                icon={<Phone size={16} aria-hidden="true" />}
              />
              <ContactLink
                id="contact-github"
                href={profile.github}
                label="GitHub"
                display={profile.github}
                icon={<GithubIcon size={16} aria-hidden="true" />}
                external
              />
              <ContactLink
                id="contact-linkedin"
                href={profile.linkedin}
                label="LinkedIn"
                display={profile.linkedin}
                icon={<LinkedinIcon size={16} aria-hidden="true" />}
                external
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
