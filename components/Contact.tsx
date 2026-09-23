"use client";

import { motion } from "framer-motion";
import { profile, contact } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl bg-zinc-900 px-8 py-16 text-center dark:bg-zinc-100 sm:px-16"
      >
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl dark:text-zinc-900">
          {contact.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-zinc-300 dark:text-zinc-600">
          {contact.subtext}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {profile.email && (
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
            >
              {profile.email}
            </a>
          )}
          {profile.linkedin && (
            <a
              href={profile.linkedin}
              className="rounded-full border border-zinc-600 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-400 dark:border-zinc-400 dark:text-zinc-900"
            >
              LinkedIn
            </a>
          )}
          {profile.github && (
            <a
              href={profile.github}
              className="rounded-full border border-zinc-600 px-6 py-3 text-sm font-medium text-white transition hover:border-zinc-400 dark:border-zinc-400 dark:text-zinc-900"
            >
              GitHub
            </a>
          )}
        </div>

        <p className="mt-8 text-xs text-zinc-400 dark:text-zinc-500">
          {profile.location}
        </p>
      </motion.div>

      <footer className="mt-10 flex flex-col items-center justify-between gap-2 text-xs text-zinc-500 sm:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>{profile.location}</p>
      </footer>
    </section>
  );
}
