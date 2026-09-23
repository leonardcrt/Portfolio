import { currently, profile } from "@/lib/content";
import { ButtonLink, Reveal, Section, SectionHeading } from "@/components/ui";

export default function Currently() {
  return (
    <Section id="currently" tone="cream">
      <SectionHeading eyebrow={currently.eyebrow} title={currently.heading} />
      <Reveal>
        {currently.lines.map((l) => (
          <p key={l} className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {l}
          </p>
        ))}
        <div className="mt-8 flex flex-wrap gap-3">
          {profile.cvUrl && (
            <ButtonLink href={profile.cvUrl} external>
              View CV <span aria-hidden>↗</span>
            </ButtonLink>
          )}
          <ButtonLink href="#contact">Contact</ButtonLink>
          {profile.linkedin && (
            <ButtonLink href={profile.linkedin} external>
              LinkedIn <span aria-hidden>↗</span>
            </ButtonLink>
          )}
          {profile.github && (
            <ButtonLink href={profile.github} external>
              GitHub <span aria-hidden>↗</span>
            </ButtonLink>
          )}
        </div>
      </Reveal>
    </Section>
  );
}
