"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/content";
import { Reveal, Section, SectionHeading, Tag } from "@/components/ui";

export default function Projects() {
  const [index, setIndex] = useState(0);
  const count = projects.length;
  const project = projects[index];

  const go = (delta: number) => setIndex((i) => (i + delta + count) % count);

  return (
    <Section id="projects" tone="paper">
      <SectionHeading eyebrow="Projects" title="Selected projects" />

      {/* Onglets : un clic affiche le projet correspondant */}
      <Reveal className="mt-10">
        <div className="flex flex-wrap gap-2" role="tablist">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => setIndex(i)}
              className={`rounded-md border px-4 py-2 text-sm transition-colors ${
                i === index
                  ? "border-accent bg-accent text-white"
                  : "border-line bg-cream text-muted hover:text-ink"
              }`}
            >
              <span className="mr-2 font-mono text-xs opacity-70">
                {String(i + 1).padStart(2, "0")}
              </span>
              {p.title}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal className="mt-6">
        <div className="overflow-hidden rounded-lg border border-line bg-cream">
          <AnimatePresence mode="wait">
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]"
            >
              <figure className="border-b border-line bg-paper lg:border-b-0 lg:border-r">
                <div className="relative aspect-[3/2] w-full">
                  <Image
                    src={project.image}
                    alt={project.imageCaption}
                    fill
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-4 py-3 font-mono text-xs italic text-muted">
                  {project.imageCaption}
                </figcaption>
              </figure>

              <div className="flex flex-col p-6 sm:p-8">
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
                  <span className="mr-2 text-accent">{String(index + 1).padStart(2, "0")}</span>
                  {project.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {project.description}
                </p>

                <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="font-mono text-xs text-muted">Role</dt>
                    <dd className="mt-1 text-ink">{project.role}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-xs text-muted">Date</dt>
                    <dd className="mt-1 text-ink">{project.date}</dd>
                  </div>
                  {project.recognition && (
                    <div className="col-span-2">
                      <dt className="font-mono text-xs text-muted">Recognition</dt>
                      <dd className="mt-1 text-ink">{project.recognition}</dd>
                    </div>
                  )}
                </dl>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tools.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="flex items-center justify-between border-t border-line bg-paper px-4 py-3 sm:px-6">
            <p className="font-mono text-xs text-muted" aria-live="polite">
              {index + 1} / {count}
              <span className="sr-only">
                {" "}
                Project {index + 1} of {count}: {project.title}
              </span>
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous project"
                className="h-10 w-10 rounded-md border border-line bg-paper text-ink transition-colors hover:border-ink/40"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next project"
                className="h-10 w-10 rounded-md border border-line bg-paper text-ink transition-colors hover:border-ink/40"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
