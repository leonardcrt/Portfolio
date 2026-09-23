"use client";

import { motion } from "framer-motion";
import { education, coursework, capabilities } from "@/lib/content";

export default function Background() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
        Background
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
        Education and technical breadth
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Education
          </h3>
          <div className="mt-4 space-y-6">
            {education.map((e) => (
              <div key={e.school} className="border-l-2 border-zinc-200 pl-4 dark:border-zinc-800">
                <p className="text-xs text-zinc-500">{e.date}</p>
                <p className="mt-1 font-semibold text-zinc-900 dark:text-zinc-50">
                  {e.school}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{e.degree}</p>
                {e.note && (
                  <p className="mt-1 text-xs text-zinc-500">{e.note}</p>
                )}
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Selected coursework
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {coursework.map((c) => (
              <li
                key={c}
                className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
              >
                {c}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Technical breadth
          </h3>

          <div className="mt-4 space-y-6">
            <div>
              <p className="text-xs font-medium text-zinc-500">Methods</p>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                {capabilities.methods.join(" · ")}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-500">Programming</p>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                {capabilities.programming.join(" · ")}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-500">Tools</p>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                {capabilities.systems.join(" · ")}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-zinc-500">Languages</p>
              <p className="mt-1 text-sm text-zinc-700 dark:text-zinc-300">
                {capabilities.languages.join(" · ")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
