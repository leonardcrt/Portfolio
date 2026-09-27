"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { education, experience, profile, type EducationEntry } from "@/lib/content";
import { Reveal, Section, SectionHeading, Tag } from "@/components/ui";

function EducationItem({ entry }: { entry: EducationEntry }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className="rounded-lg border border-line bg-paper p-6">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h4 className="text-base font-semibold text-ink">{entry.school}</h4>
        <p className="shrink-0 font-mono text-xs text-muted">{entry.date}</p>
      </div>
      <p className="mt-2 text-sm text-ink">{entry.degree}</p>
      <p className="mt-1 text-sm text-muted">
        {entry.location}
        {entry.status && (
          <span className="ml-2 rounded-md bg-accent-soft px-2 py-0.5 text-xs text-accent">
            {entry.status}
          </span>
        )}
      </p>
      {entry.note && <p className="mt-2 text-sm text-muted">{entry.note}</p>}

      {entry.activities && (
        <div className="mt-5">
          <h5 className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
            {entry.activitiesTitle}
          </h5>
          <div className="mt-2 flex flex-wrap gap-2">
            {entry.activities.map((a) => (
              <Tag key={a}>{a}</Tag>
            ))}
          </div>
        </div>
      )}

      {entry.courses && (
        <div className="mt-5">
          <h5 className="font-mono text-xs uppercase tracking-[0.12em] text-muted">
            {entry.coursesTitle}
          </h5>
          <ul className="mt-2 divide-y divide-line">
            {entry.courses.map((c) => (
              <li key={c.name} className="flex justify-between gap-4 py-2 text-sm">
                <span className="text-ink">{c.name}</span>
                {c.grade && <span className="shrink-0 font-mono text-muted">{c.grade}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {entry.gradingNote && <p className="mt-3 text-xs text-muted">{entry.gradingNote}</p>}

      {entry.fullCoursework && (
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setShowAll((s) => !s)}
            aria-expanded={showAll}
            className="text-sm font-medium text-accent underline-offset-4 hover:underline"
          >
            {showAll ? `Hide ${entry.fullCourseworkTitle ?? "full coursework"}` : `See ${entry.fullCourseworkTitle ?? "all relevant coursework"}`}{" "}
            <span aria-hidden>{showAll ? "↑" : "↓"}</span>
          </button>
          <AnimatePresence initial={false}>
            {showAll && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 sm:grid-cols-2">
                  {entry.fullCoursework.map((c) => (
                    <li key={c} className="text-sm text-muted">
                      {c}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

export default function Background() {
  return (
    <Section id="background" tone="cream">
      <SectionHeading
        eyebrow="Background"
        title="Education and experience"
        intro="Two separate tracks: academic education, and professional, teaching, and leadership experience."
      />

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Reveal>
          <h3 className="text-xl font-semibold text-ink">Education</h3>
          <div className="mt-5 space-y-5">
            {education.map((e) => (
              <EducationItem key={e.school} entry={e} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h3 className="text-xl font-semibold text-ink">Experience</h3>
          <ol className="mt-5 space-y-5">
            {experience.map((x) => (
              <li key={`${x.org}-${x.role}`} className="rounded-lg border border-line bg-paper p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="text-base font-semibold text-ink">{x.org}</h4>
                  <p className="shrink-0 font-mono text-xs text-muted">{x.date}</p>
                </div>
                <p className="mt-2 text-sm text-ink">{x.role}</p>
                <p className="mt-2">
                  <span className="rounded-md bg-accent-soft px-2 py-0.5 text-xs text-accent">
                    {x.tag}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{x.description}</p>
              </li>
            ))}
          </ol>

          {profile.cvUrl && (
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-medium text-accent underline-offset-4 hover:underline"
            >
              View full CV ↗
            </a>
          )}
        </Reveal>
      </div>
    </Section>
  );
}
