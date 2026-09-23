"use client";

import { profile } from "@/lib/content";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#background", label: "Background" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("");

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/70 bg-zinc-50/80 backdrop-blur dark:border-zinc-800/70 dark:bg-black/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <a href="#about" className="flex items-center gap-2 text-sm font-medium text-zinc-900 dark:text-zinc-50">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-zinc-300 text-xs font-semibold dark:border-zinc-700">
            {initials}
          </span>
          {profile.name}
        </a>

        <div className="hidden items-center gap-6 text-sm text-zinc-600 sm:flex dark:text-zinc-400">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-zinc-900 dark:hover:text-zinc-50">
              {l.label}
            </a>
          ))}
        </div>

        {profile.cvUrl && (
          <a
            href={profile.cvUrl}
            className="rounded-full border border-zinc-300 px-4 py-2 text-xs font-medium text-zinc-800 dark:border-zinc-700 dark:text-zinc-200"
          >
            CV
          </a>
        )}
      </nav>
    </header>
  );
}
