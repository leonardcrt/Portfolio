"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/content";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
        Projects
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
        Selected projects
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className="flex flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950"
          >
            {project.image ? (
              <div className="relative aspect-video w-full bg-zinc-100 dark:bg-zinc-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex aspect-video w-full items-center justify-center bg-zinc-100 text-xs text-zinc-400 dark:bg-zinc-900">
                {project.category}
              </div>
            )}

            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                {project.category}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {project.title}
              </h3>

              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-zinc-500">
                {project.role && <span>{project.role}</span>}
                {project.date && <span>{project.date}</span>}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {project.description}
              </p>

              {project.tools.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
