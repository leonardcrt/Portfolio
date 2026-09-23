import Image from "next/image";
import { featured } from "@/lib/content";
import { Eyebrow, Reveal, Section } from "@/components/ui";

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

      <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1fr]">
        <Reveal className="space-y-10">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
              {featured.scopeTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {featured.scope.map((s) => (
                <li key={s} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-ink">
              {featured.contributionsTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {featured.contributions.map((c) => (
                <li key={c} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="space-y-6">
          <figure className="overflow-hidden rounded-lg border border-line bg-paper">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={featured.image}
                alt={featured.imageCaption}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-left-top"
              />
            </div>
            <figcaption className="border-t border-line px-4 py-3 font-mono text-xs text-muted">
              {featured.imageCaption}
            </figcaption>
          </figure>

          <div className="rounded-lg border border-line bg-paper p-5">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
              {featured.pipelineLabel}
            </p>
            <p className="mt-1 text-sm font-semibold text-ink">Pipeline</p>
            <ol className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {featured.pipeline.map((step, i) => (
                <li
                  key={step}
                  className="relative rounded-md border border-line bg-cream px-3 py-2.5"
                >
                  <span className="font-mono text-[11px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="block text-sm text-ink">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
