"use client";

import { DecorativeImage } from "@/components/ui/DecorativeImage";
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
        `service-benefits--${data.variant}`,
      )}
    >
      <div className="service-benefits-sky pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div className="service-benefits-shapes pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <span className="service-benefits-shape service-benefits-shape--ring" />
        <span className="service-benefits-shape service-benefits-shape--ring-sm" />
        <span className="service-benefits-shape service-benefits-shape--blob" />
        <span className="service-benefits-shape service-benefits-shape--arc" />
        <span className="service-benefits-shape service-benefits-shape--petal" />
        <span className="service-benefits-shape service-benefits-shape--diamond" />
      </div>
      <div className="service-benefits-ambient pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div className="service-benefits-orbs pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <span className="service-benefits-orb service-benefits-orb--a" />
        <span className="service-benefits-orb service-benefits-orb--b" />
        <span className="service-benefits-orb service-benefits-orb--c" />
      </div>

      <DecorativeImage
        src="/assets/sprig-delicate.svg"
        width={40}
        height={80}
        className="service-benefits-float service-benefits-float--tl pointer-events-none absolute z-[1] max-md:hidden"
      />
      <DecorativeImage
        src="/assets/sprig-fern.svg"
        width={48}
        height={96}
        className="service-benefits-float service-benefits-float--br pointer-events-none absolute z-[1] max-md:opacity-20"
      />

      <div className="site-wrap relative z-[2] w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]">
        <div className="service-benefits-editorial grid w-full grid-cols-1 items-start gap-[clamp(1.75rem,3.2vw,2.75rem)] md:grid-cols-[minmax(0,1fr)_auto]">
          <div className="service-benefits-body max-md:order-2 flex w-full flex-col gap-[clamp(1.85rem,3.4vw,2.55rem)]">
            <Reveal className="service-benefits-head m-0 max-md:text-center">
              <p className="service-benefits-kicker m-0 mb-4 text-[.68rem] font-bold tracking-[.18em] text-[#9580f5] uppercase">
                How it helps
              </p>
              <h2 className="m-0 font-serif text-[clamp(2.15rem,3.8vw,3rem)] font-semibold leading-[1.08] tracking-[-.028em] text-blue">
                What you can{" "}
                <span className="font-script font-normal text-[clamp(2.5rem,4.4vw,3.45rem)] leading-[.95] text-[#9580f5]">
                  expect
                </span>
              </h2>
              <p className="service-benefits-sub m-0 mt-[.85rem] max-w-[38ch] text-[clamp(.95rem,1.05vw,1.02rem)] leading-[1.7] text-[var(--muted)] max-md:mx-auto">
                Three things people often feel after working together — soft, steady, and entirely at your pace.
              </p>
              <OpalSep wide className="mt-[1.15rem] max-md:mx-auto" />
            </Reveal>

            <div className="service-benefits-garden relative">
              <span className="service-benefits-garden-glow pointer-events-none absolute inset-[-4%] z-0" aria-hidden="true" />
              <span className="service-benefits-trellis pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />
              <span className="service-benefits-ground-vine pointer-events-none absolute z-[1]" aria-hidden="true" />

              <div className="service-benefits-pillars relative z-[2] grid w-full grid-cols-1 items-stretch gap-[clamp(1.25rem,2.4vw,1.65rem)] md:grid-cols-3 md:gap-[clamp(1.25rem,2.4vw,1.85rem)]">
                {data.benefits.map((benefit, index) => (
                  <Reveal key={benefit.title} delay={index * 140} variant="up" fill>
                    <article
                      className={cn(
                        "service-benefits-pillar group relative isolate h-full",
                        index === 1 && "service-benefits-pillar--lift",
                      )}
                    >
                      <span className="service-benefits-pillar-glow pointer-events-none absolute inset-[-12%] z-0" aria-hidden="true" />

                      <div className="service-benefits-pillar-card relative z-[1] flex h-full flex-col">
                        <img
                          src="/assets/benefit-pillar-wreath.svg?v=4"
                          alt=""
                          aria-hidden="true"
                          className="service-benefits-pillar-wreath pointer-events-none absolute inset-0 z-[3] h-full w-full"
                          draggable={false}
                        />
                        <span className="service-benefits-pillar-sheen pointer-events-none absolute inset-0 z-[4]" aria-hidden="true" />

                        <div className="service-benefits-pillar-inner relative z-[5] flex h-full flex-col">
                          <span className="service-benefits-pillar-num" aria-hidden="true">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3>{benefit.title}</h3>
                          <span className="service-benefits-pillar-rule" aria-hidden="true" />
                          <p>{benefit.text}</p>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <div
            className="service-benefits-rail max-md:order-1 flex flex-col items-center gap-4 self-stretch pt-[.45rem] max-md:mb-[.2rem] max-md:flex-row max-md:gap-4 max-md:self-auto max-md:pt-0"
            aria-hidden="true"
          >
            <span className="service-benefits-rail-num font-serif text-[clamp(2.5rem,4vw,3.35rem)] font-semibold leading-none tracking-[-.03em] text-[#9580f5]/40 max-md:text-[2rem]">
              02
            </span>
            <span className="service-benefits-rail-line min-h-[clamp(4rem,9vw,6rem)] w-px flex-1 bg-gradient-to-b from-pastel-lilac/50 via-pastel-mint/40 to-transparent max-md:h-px max-md:min-h-0 max-md:flex-1 max-md:bg-gradient-to-r" />
            <span className="service-benefits-rail-label text-[.62rem] font-bold tracking-[.2em] text-[#9580f5] uppercase [writing-mode:vertical-rl] rotate-180 max-md:rotate-0 max-md:[writing-mode:horizontal-tb] max-md:tracking-[.16em]">
              How it helps
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
