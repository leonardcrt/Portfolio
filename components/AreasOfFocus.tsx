"use client";

import { motion } from "framer-motion";
import { areasOfFocus } from "@/lib/content";

export default function AreasOfFocus() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <p className="text-xs font-medium uppercase tracking-widest text-zinc-500">
        Areas of focus
      </p>
      <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
        The technical areas connecting my projects and experience.
      </h2>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {areasOfFocus.map((area, i) => (
          <motion.div
            key={area.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {area.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {area.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
