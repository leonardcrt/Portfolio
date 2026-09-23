"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

// Section pleine largeur avec fond crème ou blanc et séparateur fin
export function Section({
  id,
  tone,
  children,
}: {
  id?: string;
  tone: "cream" | "paper";
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`border-t border-line ${tone === "cream" ? "bg-cream" : "bg-paper"}`}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-8 sm:py-24">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">{children}</p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <Reveal>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}

// Apparition douce au défilement
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-paper px-2.5 py-1 text-xs text-ink/80">
      {children}
    </span>
  );
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors";

export function ButtonLink({
  href,
  children,
  variant = "outline",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
}) {
  const style =
    variant === "solid"
      ? "bg-accent text-white hover:bg-[#1a2c47]"
      : "border border-line bg-paper text-ink hover:border-ink/40";
  return (
    <a
      href={href}
      className={`${base} ${style}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
