"use client";

import { DecorativeImage } from "@/components/ui/DecorativeImage";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import {
  mediaUrl,
  serviceVariant,
  textList,
  type Service,
  type ServicePageSection,
} from "@/lib/cms-types";

type ServiceOverviewSectionProps = {
  data: Service;
  sections: ServicePageSection;
};

export function ServiceOverviewSection({ data, sections }: ServiceOverviewSectionProps) {
  const variant = serviceVariant(data.slug);
  const trust = textList(data.hero.trust);
  const iconSrc = mediaUrl(data.icon);

  return (
    <section
      className={cn(
        "service-overview relative isolate overflow-hidden border-t border-pastel-lilac/10 bg-white py-[var(--section-y)]",
        `service-overview--${variant}`,
      )}
    >
      <div className="service-overview-scene pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div className="service-overview-mist pointer-events-none absolute inset-0 z-0" aria-hidden="true" />

      <DecorativeImage
        src="/assets/sprig-fern.svg"
        width={48}
        height={96}
        className="service-overview-float service-overview-float--tl pointer-events-none absolute z-[1] max-md:opacity-20"
      />
      <DecorativeImage
        src="/assets/nature-leaf-opal.svg"
        width={80}
        height={80}
        className="service-overview-float service-overview-float--br pointer-events-none absolute z-[1] max-md:opacity-20"
      />
      <DecorativeImage
        src="/assets/sprig-delicate.svg"
        width={40}
        height={80}
        className="service-overview-float service-overview-float--tr pointer-events-none absolute z-[1] max-md:hidden"
      />

      <div className="site-wrap service-overview-inner relative z-[2] w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]">
        <div className="service-overview-grid grid w-full grid-cols-1 items-center gap-[clamp(2.75rem,5.5vw,5rem)] md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <Reveal variant="left" className="service-overview-copy">
            <div className="service-overview-editorial grid grid-cols-[auto_1fr] items-start gap-[clamp(1.5rem,3vw,2.5rem)] max-md:grid-cols-1 max-md:gap-[1.35rem]">
              <div
                className="service-overview-rail flex flex-col items-center gap-4 pt-[.45rem] max-md:mb-[.2rem] max-md:flex-row max-md:gap-4 max-md:pt-0"
                aria-hidden="true"
              >
                <span className="service-overview-rail-num font-serif text-[clamp(2.5rem,4vw,3.35rem)] font-semibold leading-none tracking-[-.03em] text-[#9580f5]/40 max-md:text-[2rem]">
                  01
                </span>
                <span className="service-overview-rail-line min-h-[clamp(4rem,9vw,6rem)] w-px flex-1 bg-gradient-to-b from-pastel-lilac/50 via-pastel-mint/45 to-transparent max-md:h-px max-md:min-h-0 max-md:flex-1 max-md:bg-gradient-to-r" />
              </div>

              <div className="service-overview-body flex flex-col gap-[clamp(1.25rem,2.4vw,1.75rem)]">
                <h2 className="service-overview-lead type-heading m-0 max-w-[18ch] max-md:mx-auto max-md:max-w-[min(540px,100%)] max-md:text-center">
                  {data.overview.title}{" "}
                  <span className="service-overview-lead-script type-script inline!">
                    {data.overview.script}
                  </span>
                </h2>

                <p className="service-overview-subline type-body m-0 max-w-[34ch] max-md:mx-auto max-md:max-w-[min(480px,100%)] max-md:text-center">
                  {data.overview.subline}
                </p>

                <div className="service-overview-intro relative isolate max-w-[52ch] max-md:mx-auto max-md:max-w-[min(540px,100%)]">
                  <p className="type-body relative z-[1] m-0 max-md:text-center">
                    {data.intro}
                  </p>
                </div>

                {trust.length > 0 ? (
                  <ul
                    className="service-overview-signals m-0 flex list-none flex-wrap gap-x-[1.25rem] gap-y-[.6rem] border-t border-pastel-lilac/14 p-0 pt-[clamp(1.1rem,2vw,1.4rem)] max-md:justify-center"
                    aria-label="Session highlights"
                  >
                    {trust.map((item) => (
                      <li key={item} className="type-label">{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </Reveal>

          <Reveal
            variant="right"
            delay={120}
            className={cn("service-overview-aside", `service-overview-aside--${variant}`)}
            aria-label="Service highlight"
          >
            <figure className="service-overview-pull relative mx-auto w-full max-w-[min(440px,100%)]">
              <span className="service-overview-pull-glow pointer-events-none absolute inset-[-12%] z-0" aria-hidden="true" />

              <DecorativeImage
                src="/assets/sprig-delicate.svg"
                width={40}
                height={80}
                className="service-overview-pull-sprig service-overview-pull-sprig--l pointer-events-none absolute z-[1]"
              />
              <DecorativeImage
                src="/assets/sprig-fern.svg"
                width={48}
                height={96}
                className="service-overview-pull-sprig service-overview-pull-sprig--r pointer-events-none absolute z-[1]"
              />

              <div className="service-overview-pull-inner relative z-[2] flex flex-col items-center text-center">
                {iconSrc ? (
                  <DecorativeImage
                    src={iconSrc}
                    width={400}
                    height={266}
                    className="service-overview-pull-icon"
                  />
                ) : null}
                <blockquote className="service-overview-quote">
                  <span className="service-overview-quote-mark" aria-hidden="true">
                    &ldquo;
                  </span>
                  <p className="type-body">{data.pullQuote}</p>
                </blockquote>

                <figcaption className="service-overview-pull-caption">
                  <span className="service-overview-pull-script type-label">{sections.overview.captionScript}</span>
                  <span className="service-overview-pull-note type-body">
                    {sections.overview.captionNote}
                  </span>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
