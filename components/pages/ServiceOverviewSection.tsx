import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ServicePageData } from "@/lib/services";

type ServiceOverviewSectionProps = {
  data: ServicePageData;
};

export function ServiceOverviewSection({ data }: ServiceOverviewSectionProps) {
  return (
    <section
      className={cn(
        "service-overview relative isolate overflow-hidden border-t border-pastel-lilac/12 py-[var(--section-y)]",
        `service-overview--${data.variant}`,
      )}
    >
      <div className="service-overview-scene pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="service-overview-ambient pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="site-wrap service-overview-inner relative z-[2] w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]">
        <div className="service-overview-grid grid w-full grid-cols-1 items-center gap-[clamp(2.75rem,5vw,4.5rem)] md:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <div className="service-overview-copy">
            <div className="service-overview-editorial grid grid-cols-[auto_1fr] items-start gap-[clamp(1.75rem,3.2vw,2.75rem)] max-md:grid-cols-1 max-md:gap-[1.65rem]">
              <div
                className="service-overview-rail flex flex-col items-center gap-4 pt-[.45rem] max-md:mb-[.35rem] max-md:flex-row max-md:gap-4 max-md:pt-0"
                aria-hidden="true"
              >
                <span className="service-overview-rail-num font-serif text-[clamp(2.5rem,4vw,3.35rem)] font-semibold leading-none tracking-[-.03em] text-[#9580f5]/40 max-md:text-[2rem]">
                  01
                </span>
                <span className="service-overview-rail-line min-h-[clamp(3.5rem,8vw,5.5rem)] w-px flex-1 bg-gradient-to-b from-pastel-lilac/50 via-pastel-mint/40 to-pastel-lilac/10 max-md:h-px max-md:min-h-0 max-md:flex-1 max-md:bg-gradient-to-r" />
                <span className="service-overview-rail-label text-[.62rem] font-bold tracking-[.2em] text-[#9580f5] uppercase [writing-mode:vertical-rl] rotate-180 max-md:rotate-0 max-md:[writing-mode:horizontal-tb] max-md:tracking-[.16em]">
                  Overview
                </span>
              </div>

              <div className="service-overview-body flex flex-col gap-[clamp(1.35rem,2.6vw,1.95rem)]">
                <h2 className="service-overview-lead m-0 max-w-[22ch] font-serif text-[clamp(1.85rem,3.2vw,2.55rem)] font-semibold leading-[1.22] tracking-[-.022em] text-blue max-md:mx-auto max-md:max-w-[min(540px,100%)] max-md:text-center">
                  {data.overview.subline}
                </h2>

                <div className="service-overview-title-strip inline-flex max-w-[min(100%,36ch)] flex-wrap items-baseline gap-x-[.55em] gap-y-[.35em] rounded-r-[18px] border-l-[3px] border-pastel-lilac/48 bg-[linear-gradient(90deg,rgba(255,255,255,.92),rgba(252,251,255,.5))] px-5 py-3.5 shadow-[0_10px_32px_rgba(179,162,254,.09)] max-md:mx-auto max-md:max-w-[min(540px,100%)] max-md:justify-center max-md:rounded-b-[18px] max-md:rounded-t-none max-md:border-t-[3px] max-md:border-l-0 max-md:px-[1.15rem] max-md:pt-4 max-md:pb-[1.15rem]">
                  <span className="service-overview-title-serif font-serif text-[clamp(1.18rem,1.85vw,1.38rem)] font-semibold leading-[1.15] text-blue">
                    {data.overview.title}
                  </span>
                  <span className="service-overview-title-script font-script text-[clamp(1.62rem,2.75vw,2.12rem)] leading-[1.02] text-[#9580f5]">
                    {data.overview.script}
                  </span>
                </div>

                <div className="service-overview-intro-panel relative isolate rounded-[20px] border border-pastel-lilac/16 bg-white/78 p-[clamp(1.5rem,2.8vw,2rem)] shadow-[0_14px_40px_rgba(179,162,254,.08)] backdrop-blur-[10px] max-md:mx-auto max-md:max-w-[min(540px,100%)]">
                  <span className="service-overview-intro-glow pointer-events-none absolute top-[-20%] right-[-8%] h-[min(220px,55%)] w-[min(220px,55%)] rounded-full bg-[radial-gradient(circle,rgba(188,228,222,.18),transparent_70%)]" aria-hidden="true" />
                  <p className="relative z-[1] m-0 max-w-[52ch] text-[clamp(1rem,1.1vw,1.06rem)] leading-[1.92] text-muted max-md:mx-auto max-md:max-w-none max-md:text-center">
                    {data.intro}
                  </p>
                </div>

                {data.hero.trust.length > 0 ? (
                  <ul
                    className="service-overview-signals m-0 flex list-none flex-wrap gap-x-[1.35rem] gap-y-[.65rem] border-t border-pastel-lilac/12 p-0 pt-[clamp(1.15rem,2vw,1.45rem)] max-md:justify-center"
                    aria-label="Session highlights"
                  >
                    {data.hero.trust.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>

          <aside className="service-overview-aside" aria-label="Service highlight">
            <div
              className={cn(
                "service-overview-card opal-panel",
                `service-overview-card--${data.variant}`,
              )}
            >
              <div className="service-overview-card__sheen" aria-hidden="true" />
              <div className="service-overview-card__inner opal-panel__inner">
                <img
                  src="/assets/sprig-fern.svg"
                  alt=""
                  className="service-overview-card__sprig service-overview-card__sprig--tl"
                  aria-hidden="true"
                />
                <img
                  src="/assets/nature-leaf-opal.svg"
                  alt=""
                  className="service-overview-card__sprig service-overview-card__sprig--br"
                  aria-hidden="true"
                />

                <div className="service-overview-icon-stage">
                  <span className="service-overview-icon-halo" aria-hidden="true">
                    <img src={data.icon} alt="" />
                  </span>
                  <span className="service-overview-icon-tag">{data.tag}</span>
                </div>

                <blockquote className="service-overview-quote">
                  <span className="service-overview-quote-mark" aria-hidden="true">
                    &ldquo;
                  </span>
                  <p>{data.pullQuote}</p>
                </blockquote>

                <p className="service-overview-card-note">
                  With Cara — warm, confidential, and entirely personal.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
