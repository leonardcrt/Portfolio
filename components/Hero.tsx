"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/lib/content";
import { ButtonLink } from "@/components/ui";

export default function Hero() {
  return (
    <section id="about" className="bg-cream">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 pb-20 pt-28 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:pb-24 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            {profile.eyebrow}
          </p>

          <h1 className="mt-5 text-5xl font-semibold tracking-tight text-ink sm:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-5 text-xl font-medium text-ink sm:text-2xl">{profile.tagline}</p>

          {profile.intro.map((p) => (
            <p key={p} className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {p}
            </p>
          ))}

          <p className="mt-7 border-l-2 border-ink/70 pl-4 text-sm text-ink sm:text-base">
            {profile.availability}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#featured" variant="solid">
              Explore my work <span aria-hidden>→</span>
            </ButtonLink>
            {profile.cvUrl && (
              <ButtonLink href={profile.cvUrl} external>
                View CV <span aria-hidden>↗</span>
              </ButtonLink>
            )}
            <ButtonLink href="#contact">Contact</ButtonLink>
          </div>

          <p className="mt-8 font-mono text-sm text-muted">{profile.location}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-line bg-paper shadow-sm"
        >
          <Image
            src={profile.photoUrl}
            alt={profile.photoAlt}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover object-[60%_40%]"
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>
      </div>
    </section>
  );
}
