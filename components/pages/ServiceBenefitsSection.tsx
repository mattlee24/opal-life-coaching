"use client";

import { OpalSep } from "@/components/ui/OpalSep";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import type { ServicePageData } from "@/lib/services";

type ServiceBenefitsSectionProps = {
  data: ServicePageData;
};

export function ServiceBenefitsSection({ data }: ServiceBenefitsSectionProps) {
  return (
    <section
      className={cn(
        "service-benefits relative isolate overflow-hidden border-y border-pastel-lilac/12 py-[var(--section-y)]",
        "bg-[linear-gradient(180deg,#ebe6f8_0%,#f3f0fa_40%,#f6f2fc_100%)]",
        `service-benefits--${data.variant}`,
      )}
    >
      <div className="meet-cara-scene pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(180deg,rgba(235,230,248,.2)_0%,rgba(243,240,250,.06)_42%,rgba(246,242,252,.16)_100%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_12%,rgba(255,255,255,.38),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="site-wrap relative z-[1] w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]">
        <div className="service-benefits-editorial grid w-full grid-cols-1 items-start gap-[clamp(1.75rem,3.2vw,2.75rem)] md:grid-cols-[minmax(0,1fr)_auto] md:gap-[clamp(1.75rem,3.2vw,2.75rem)]">
          <Reveal className="service-benefits-body max-md:order-2 flex w-full flex-col gap-[clamp(1.5rem,2.8vw,2rem)]">
            <header className="service-benefits-head m-0 max-md:text-center">
              <h2 className="m-0 font-serif text-[clamp(1.85rem,3.2vw,2.45rem)] font-semibold leading-[1.12] tracking-[-.02em] text-blue">
                What you can{" "}
                <span className="font-script font-normal text-[#9580f5]">expect</span>
              </h2>
              <OpalSep wide className="mt-[1.1rem] max-md:mx-auto" />
            </header>

            <div className="service-benefits-pillars grid w-full grid-cols-1 items-stretch gap-4 md:grid-cols-3 md:gap-[clamp(1.15rem,2.2vw,1.75rem)]">
              {data.benefits.map((benefit, index) => (
                <Reveal key={benefit.title} delay={index * 110} variant="up" fill>
                <article
                  className={cn(
                    "service-benefits-pillar vine-panel vine-panel--pillar group relative isolate h-full min-h-0 overflow-hidden rounded-[18px]",
                    "border-2 border-transparent bg-clip-padding",
                    "bg-[linear-gradient(180deg,#fefffe_0%,#faf8ff_55%,#f6faf7_100%)]",
                    "p-[clamp(1.35rem,2.4vw,1.75rem)] px-[clamp(1.1rem,2vw,1.45rem)]",
                    "shadow-[0_10px_28px_rgba(179,162,254,.07)]",
                    "transition-[transform,box-shadow] duration-[350ms] ease-opal",
                    "hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(179,162,254,.11)]",
                    "motion-reduce:hover:translate-y-0",
                  )}
                >
                  <span
                    className="service-benefits-pillar-frame pointer-events-none absolute inset-0 z-[2] rounded-[18px] opacity-[.9]"
                    style={{
                      backgroundImage: "url('/assets/benefit-pillar-vine-frame.svg')",
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className="pointer-events-none absolute top-0 left-0 z-[3] h-[clamp(3.25rem,5.5vw,3.85rem)] w-[clamp(3.25rem,5.5vw,3.85rem)] bg-[url('/assets/benefit-vine-corner.svg')] bg-contain bg-no-repeat opacity-[.96] [filter:drop-shadow(0_3px_10px_rgba(122,171,142,.22))]"
                    aria-hidden="true"
                  />
                  <span
                    className="pointer-events-none absolute top-0 right-0 z-[3] h-[clamp(3.25rem,5.5vw,3.85rem)] w-[clamp(3.25rem,5.5vw,3.85rem)] scale-x-[-1] bg-[url('/assets/benefit-vine-corner.svg')] bg-contain bg-no-repeat opacity-[.96] [filter:drop-shadow(0_3px_10px_rgba(122,171,142,.22))]"
                    aria-hidden="true"
                  />
                  <span
                    className="pointer-events-none absolute bottom-0 left-0 z-[3] h-[clamp(3.25rem,5.5vw,3.85rem)] w-[clamp(3.25rem,5.5vw,3.85rem)] scale-y-[-1] bg-[url('/assets/benefit-vine-corner.svg')] bg-contain bg-no-repeat opacity-[.96] [filter:drop-shadow(0_3px_10px_rgba(122,171,142,.22))]"
                    aria-hidden="true"
                  />
                  <span
                    className="pointer-events-none absolute right-0 bottom-0 z-[3] h-[clamp(3.25rem,5.5vw,3.85rem)] w-[clamp(3.25rem,5.5vw,3.85rem)] scale-[-1] bg-[url('/assets/benefit-vine-corner.svg')] bg-contain bg-no-repeat opacity-[.96] [filter:drop-shadow(0_3px_10px_rgba(122,171,142,.22))]"
                    aria-hidden="true"
                  />
                  <div className="vine-panel__inner relative z-[1] flex h-full flex-col gap-3">
                    <span
                      className="font-serif text-[clamp(1.75rem,2.5vw,2.15rem)] font-semibold leading-none tracking-[-.02em] text-[#9580f5]/40"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="m-0 font-serif text-[clamp(1.22rem,1.75vw,1.38rem)] font-semibold leading-[1.18] text-blue">
                      {benefit.title}
                    </h3>
                    <span
                      className="h-0.5 w-[min(72px,40%)] rounded-[2px] bg-[linear-gradient(90deg,rgba(179,162,254,.55),rgba(188,228,222,.75),rgba(179,162,254,.2))] max-md:mx-auto"
                      aria-hidden="true"
                    />
                    <p className="m-0 flex-1 text-[clamp(.9rem,.98vw,.96rem)] leading-[1.8] text-muted max-md:text-center">
                      {benefit.text}
                    </p>
                  </div>
                </article>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <div
            className="service-benefits-rail max-md:order-1 flex flex-col items-center gap-4 self-stretch pt-[.45rem] max-md:mb-[.35rem] max-md:flex-row max-md:gap-4 max-md:self-auto max-md:pt-0"
            aria-hidden="true"
          >
            <span className="service-benefits-rail-label text-[.62rem] font-bold tracking-[.2em] text-[#9580f5] uppercase [writing-mode:vertical-rl] max-md:order-3 max-md:rotate-0 max-md:[writing-mode:horizontal-tb] max-md:tracking-[.16em]">
              How it helps
            </span>
            <span className="service-benefits-rail-line min-h-[clamp(3.5rem,8vw,5.5rem)] w-px flex-1 bg-gradient-to-b from-pastel-lilac/50 via-pastel-mint/40 to-pastel-lilac/10 max-md:order-2 max-md:h-px max-md:min-h-0 max-md:flex-1 max-md:bg-gradient-to-r" />
            <span className="service-benefits-rail-num font-serif text-[clamp(2.5rem,4vw,3.35rem)] font-semibold leading-none tracking-[-.03em] text-[#9580f5]/40 max-md:order-1 max-md:text-[2rem]">
              02
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
