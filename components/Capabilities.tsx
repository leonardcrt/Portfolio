import { capabilities } from "@/lib/content";
import { Reveal, Section, SectionHeading } from "@/components/ui";

export default function Capabilities() {
  return (
    <Section id="capabilities" tone="paper">
      <SectionHeading
        eyebrow={capabilities.eyebrow}
        title={capabilities.heading}
        intro={capabilities.intro}
      />

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {capabilities.groups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.06}>
            <div className="h-full rounded-lg border border-line bg-cream p-6">
              <h3 className="text-base font-semibold text-ink">{g.title}</h3>
              <ul className="mt-4 space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mt-8 text-sm text-muted">
          <span className="font-mono text-xs uppercase tracking-[0.12em]">Languages</span>
          <span className="mx-3 text-line">|</span>
          {capabilities.languages}
        </p>
      </Reveal>
    </Section>
  );
}
