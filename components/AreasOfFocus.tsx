import { focus } from "@/lib/content";
import { Reveal, Section, SectionHeading } from "@/components/ui";

export default function AreasOfFocus() {
  return (
    <Section id="focus" tone="paper">
      <SectionHeading eyebrow={focus.eyebrow} title={focus.heading} intro={focus.intro} />

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {focus.areas.map((area, i) => (
          <Reveal key={area.title} delay={i * 0.08}>
            <div className="h-full rounded-lg border border-line bg-cream p-6">
              <p className="font-mono text-xs text-muted">0{i + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-ink">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{area.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
