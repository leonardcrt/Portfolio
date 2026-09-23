"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-32 sm:px-10 md:grid-cols-2 md:pt-40">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-widest text-zinc-500">
          {profile.schools}
        </p>

        <h1 className="text-5xl font-semibold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-50">
          {profile.name}
        </h1>

        <p className="mt-4 text-xl font-medium text-zinc-700 dark:text-zinc-300">
          {profile.tagline}
        </p>

        <p className="mt-5 max-w-lg text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {profile.intro}
        </p>

        <div className="mt-6 border-l-2 border-zinc-900 pl-4 text-sm text-zinc-700 dark:border-zinc-100 dark:text-zinc-300">
          {profile.availability}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            Explore my work →
          </a>
          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-800 transition hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-200"
            >
              View CV ↗
            </a>
          )}
          <a
            href="#contact"
            className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-800 transition hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-200"
          >
            Contact
          </a>
        </div>

        <p className="mt-8 text-xs text-zinc-500">{profile.location}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900"
      >
        <Image
          src={profile.photoUrl}
          alt={`Portrait of ${profile.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 480px"
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
