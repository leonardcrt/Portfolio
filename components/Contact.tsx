"use client";

import { useState } from "react";
import { contact, profile } from "@/lib/content";
import { DocIcon } from "@/components/Media";
import { ButtonLink, Reveal, Section, SectionHeading } from "@/components/ui";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <>
      <Section id="contact" tone="paper">
        <SectionHeading eyebrow={contact.eyebrow} title={contact.heading} intro={contact.subtext} />

        <Reveal>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-stretch overflow-hidden rounded-md border border-line bg-cream">
              <a
                href={`mailto:${profile.email}`}
                className="px-5 py-3 font-mono text-sm text-ink hover:text-accent"
              >
                {profile.email}
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="border-l border-line bg-paper px-4 text-sm text-ink transition-colors hover:bg-cream"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              {profile.linkedin && (
                <ButtonLink href={profile.linkedin} external>
                  LinkedIn <span aria-hidden>↗</span>
                </ButtonLink>
              )}
              {profile.github && (
                <ButtonLink href={profile.github} external>
                  GitHub <span aria-hidden>↗</span>
                </ButtonLink>
              )}
              {profile.cvUrl && (
                <ButtonLink href={profile.cvUrl} external>
                  <DocIcon /> CV
                </ButtonLink>
              )}
            </div>
          </div>
          <p className="mt-6 font-mono text-sm text-muted">{profile.location}</p>
        </Reveal>
      </Section>

      <footer className="border-t border-line bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {profile.name}
            <span className="mx-2">·</span>
            {profile.location}
          </p>
          <a href="#about" className="hover:text-ink">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
