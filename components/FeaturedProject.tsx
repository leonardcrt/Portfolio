import { featured } from "@/lib/content";
import Media from "@/components/Media";
import { ButtonLink, Eyebrow, Reveal, Section, Tag } from "@/components/ui";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((s) => (
        <li key={s} className="flex gap-3 text-sm leading-relaxed text-muted">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {s}
        </li>
      ))}
    </ul>
  );
}

export default function FeaturedProject() {
  return (
    <Section id="featured" tone="cream">
      <Reveal>
        <Eyebrow>{featured.eyebrow}</Eyebrow>
        <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          {featured.title}
        </h2>
        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
          {featured.meta.map((m, i) => (
            <span key={m}>
              {i > 0 && <span className="mr-3 text-line">|</span>}
              {m}
            </span>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
          {featured.description}
        </p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.45fr_1fr] lg:items-start">
        <Reveal>
          <figure className="overflow-hidden rounded-lg border border-line bg-paper">
            <div className="relative aspect-[3/2] w-full">
              <Media
                video={featured.video}
                image={featured.poster}
                alt={featured.mediaCaption}
                sizes="(max-width: 1024px) 100vw, 640px"
              />
            </div>
            <figcaption className="border-t border-line px-4 py-3 font-mono text-xs italic text-muted">
              {featured.mediaCaption}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {featured.stats.map((s, i) => (
              <div
                key={s.value}
                className={
                  featured.stats.length % 2 === 1 && i === featured.stats.length - 1
                    ? "rounded-lg border border-line bg-paper p-5 sm:col-span-2"
                    : "rounded-lg border border-line bg-paper p-5"
                }
              >
                <dt className="text-2xl font-semibold tracking-tight text-accent">{s.value}</dt>
                <dd className="mt-2 text-sm leading-snug text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Reveal>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
            {featured.builtTitle}
          </h3>
          <BulletList items={featured.built} />
        </Reveal>
        <Reveal delay={0.1}>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
            {featured.learnedTitle}
          </h3>
          <BulletList items={featured.learned} />
        </Reveal>
      </div>

      <Reveal className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {featured.tools.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        {featured.link && (
          <ButtonLink href={featured.link.url} variant="solid" external>
            {featured.link.label} <span aria-hidden>↗</span>
          </ButtonLink>
        )}
      </Reveal>
    </Section>
  );
}
