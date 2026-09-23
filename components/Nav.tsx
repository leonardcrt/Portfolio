"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/content";

export default function Nav() {
  const [active, setActive] = useState<string>("about");
  const [open, setOpen] = useState(false);

  // Souligne le lien de la section visible à l'écran
  useEffect(() => {
    // Sections sans lien propre rattachées au lien le plus proche
    const alias: Record<string, string> = {
      featured: "projects",
      capabilities: "background",
      currently: "contact",
    };
    const ids = [...navLinks.map((l) => l.id), ...Object.keys(alias)];
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          const id = visible[0].target.id;
          setActive(alias[id] ?? id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-8">
        <a href="#about" className="flex items-center gap-3 text-sm font-semibold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-md border border-ink/70 text-sm font-semibold">
            {profile.initials}
          </span>
          {profile.name}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`relative py-2 text-[15px] transition-colors ${
                active === l.id ? "text-ink" : "text-muted hover:text-ink"
              }`}
            >
              {l.label}
              <span
                className={`absolute inset-x-0 -bottom-0.5 h-px bg-accent transition-opacity ${
                  active === l.id ? "opacity-100" : "opacity-0"
                }`}
              />
            </a>
          ))}
          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-line bg-paper px-4 py-2 text-[15px] text-ink transition-colors hover:border-ink/40"
            >
              <span aria-hidden>📄</span> CV
            </a>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="rounded-md border border-line bg-paper px-3 py-2 text-sm text-ink md:hidden"
          aria-expanded={open}
          aria-label="Menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-cream px-4 pb-4 md:hidden">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={`block py-3 text-base ${active === l.id ? "text-ink" : "text-muted"}`}
            >
              {l.label}
            </a>
          ))}
          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded-md border border-line bg-paper px-4 py-2 text-base text-ink"
            >
              <span aria-hidden>📄</span> CV
            </a>
          )}
        </div>
      )}
    </header>
  );
}
