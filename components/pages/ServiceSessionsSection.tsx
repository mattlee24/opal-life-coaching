"use client";

import Link from "next/link";
import { OpalSep } from "@/components/ui/OpalSep";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import type { ServicePageData } from "@/lib/services";

type ServiceSessionsSectionProps = {
  data: ServicePageData;
};

const journeySteps = [
  "Explore session types and pricing on the bookings page",
  "Choose a time that suits you — online or in person",
  "Begin with a free discovery call if you'd like to talk first",
];

export function ServiceSessionsSection({ data }: ServiceSessionsSectionProps) {
  return (
    <section className={cn("service-sessions py-[var(--section-y)]", "section-white border-t border-pastel-lilac/12 bg-white")}>
      <div className="site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]">
        <div className="service-sessions-editorial grid w-full grid-cols-1 items-start gap-[clamp(1.75rem,3.2vw,2.75rem)] md:grid-cols-[auto_minmax(0,1fr)] md:gap-[clamp(1.75rem,3.2vw,2.75rem)]">
          <div
            className="service-sessions-rail max-md:order-1 flex flex-col items-center gap-4 self-stretch pt-[.45rem] max-md:mb-[.35rem] max-md:flex-row max-md:gap-4 max-md:self-auto max-md:pt-0"
            aria-hidden="true"
          >
            <span className="font-serif text-[clamp(2.5rem,4vw,3.35rem)] font-semibold leading-none tracking-[-.03em] text-[#9580f5]/40 max-md:text-[2rem]">
              03
            </span>
            <span className="min-h-[clamp(3.5rem,8vw,5.5rem)] w-px flex-1 bg-gradient-to-b from-pastel-lilac/50 via-pastel-mint/40 to-pastel-lilac/10 max-md:h-px max-md:min-h-0 max-md:flex-1 max-md:bg-gradient-to-r" />
            <span className="text-[.62rem] font-bold tracking-[.2em] text-[#9580f5] uppercase [writing-mode:vertical-rl] rotate-180 max-md:rotate-0 max-md:[writing-mode:horizontal-tb] max-md:tracking-[.16em]">
              Next step
            </span>
          </div>

          <Reveal className="service-sessions-body max-md:order-2 flex w-full flex-col gap-[clamp(1.35rem,2.6vw,1.95rem)]">
            <h2 className="service-sessions-lead m-0 max-w-[20ch] font-serif text-[clamp(1.85rem,3.2vw,2.55rem)] font-semibold leading-[1.22] tracking-[-.022em] text-blue max-md:mx-auto max-md:max-w-[min(540px,100%)] max-md:text-center">
              Whenever you&apos;re ready, the door is open.
            </h2>

            <div className="service-sessions-title-strip inline-flex max-w-[min(100%,34ch)] flex-wrap items-baseline gap-x-[.55em] gap-y-[.35em] rounded-r-[18px] border-l-[3px] border-pastel-lilac/48 bg-[linear-gradient(90deg,rgba(255,255,255,.92),rgba(252,251,255,.5))] px-5 py-3.5 shadow-[0_10px_32px_rgba(179,162,254,.09)] max-md:mx-auto max-md:max-w-[min(540px,100%)] max-md:justify-center max-md:rounded-b-[18px] max-md:rounded-t-none max-md:border-t-[3px] max-md:border-l-0 max-md:px-[1.15rem] max-md:pt-4 max-md:pb-[1.15rem]">
              <span className="font-serif text-[clamp(1.18rem,1.85vw,1.38rem)] font-semibold leading-[1.15] text-blue">
                Your gentle
              </span>
              <span className="font-script text-[clamp(1.62rem,2.75vw,2.12rem)] leading-[1.02] text-[#9580f5]">
                invitation
              </span>
            </div>

            <div
              className={cn(
                "service-sessions-invite opal-panel group relative isolate overflow-hidden rounded-[22px]",
                "w-full max-w-[min(1080px,100%)]",
                "p-[clamp(1.35rem,2.4vw,1.85rem)] md:p-[clamp(1.55rem,2.6vw,2.1rem)]",
                "transition-[transform,box-shadow] duration-[450ms] ease-opal",
                "hover:-translate-y-0.5 motion-reduce:hover:translate-y-0",
              )}
            >
              <div className="service-overview-card__sheen pointer-events-none absolute inset-0 z-[1]" aria-hidden="true" />

              <div className="opal-panel__inner relative z-[2] grid items-center gap-[clamp(1.25rem,2.4vw,1.85rem)] max-md:grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto]">
                <div className="service-sessions-invite-copy flex flex-col gap-[clamp(1rem,1.8vw,1.35rem)] max-md:order-2">
                  <p className="m-0 max-w-[52ch] text-[clamp(1rem,1.08vw,1.05rem)] leading-[1.9] text-muted max-md:mx-auto max-md:max-w-none max-md:text-center">
                    There&apos;s no rush to decide. When it feels right, you&apos;ll find session options,
                    transparent pricing and availability on the bookings page — or you can reach out
                    first if you&apos;d rather talk it through.
                  </p>

                  <OpalSep wide className="opacity-90 max-md:mx-auto" />

                  <ol className="service-sessions-journey m-0 flex list-none flex-col gap-[clamp(.85rem,1.5vw,1.1rem)] p-0 max-md:mx-auto max-md:max-w-[min(480px,100%)]">
                    {journeySteps.map((step, index) => (
                      <li
                        key={step}
                        className="grid grid-cols-[auto_1fr] items-start gap-[.85rem] text-[clamp(.92rem,1vw,.98rem)] leading-[1.78] text-muted max-md:text-center max-md:grid-cols-1 max-md:gap-2"
                      >
                        <span
                          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-pastel-lilac/22 bg-white/90 font-serif text-[.78rem] font-semibold text-[#9580f5] shadow-[0_6px_16px_rgba(179,162,254,.1)] max-md:mx-auto"
                          aria-hidden="true"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="pt-[.15rem] max-md:pt-0">{step}</span>
                      </li>
                    ))}
                  </ol>

                  {data.hero.trust.length > 0 ? (
                    <ul
                      className="m-0 flex list-none flex-wrap gap-x-[1.25rem] gap-y-[.55rem] border-t border-pastel-lilac/12 p-0 pt-[clamp(1.1rem,2vw,1.35rem)] max-md:justify-center"
                      aria-label="Booking highlights"
                    >
                      {data.hero.trust.map((item) => (
                        <li
                          key={item}
                          className="inline-flex items-center gap-2 text-[.78rem] font-semibold tracking-[.02em] text-blue before:h-1.5 before:w-1.5 before:shrink-0 before:rounded-full before:bg-[linear-gradient(135deg,#B3A2FE,#bce4de)] before:content-['']"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="flex flex-wrap items-center gap-[.85rem] pt-[clamp(.25rem,1vw,.5rem)] max-md:justify-center">
                    <Link href="/bookings" className="service-overview-btn service-overview-btn--primary">
                      View bookings &amp; pricing
                    </Link>
                    <Link href="/contact" className="service-overview-btn service-overview-btn--ghost">
                      Ask a question first
                    </Link>
                  </div>
                </div>

                <figure className="service-sessions-invite-photo relative m-0 w-[min(320px,32vw)] shrink-0 justify-self-center max-md:order-1 max-md:w-[min(300px,78vw)] md:justify-self-end">
                  <span
                    className="pointer-events-none absolute inset-[4%_-10%_-8%] rounded-full bg-[radial-gradient(circle,rgba(188,228,222,.22),transparent_72%)]"
                    aria-hidden="true"
                  />
                  <img
                    src="/assets/sprig-fern.svg"
                    alt=""
                    className="pointer-events-none absolute top-[2%] left-[-6%] z-[3] w-[min(44px,11vw)] opacity-40 [filter:drop-shadow(0_4px_12px_rgba(179,162,254,.1))]"
                    aria-hidden="true"
                  />
                  <div className="relative z-[2] rotate-[1.5deg] overflow-hidden rounded-[20px] bg-[linear-gradient(155deg,rgba(188,228,222,.5)_0%,rgba(179,162,254,.38)_50%,rgba(168,201,176,.45)_100%)] p-1.5 shadow-[0_24px_64px_rgba(179,162,254,.14),0_10px_28px_rgba(28,48,163,.07)] transition-transform duration-[550ms] ease-opal group-hover:rotate-0">
                    <img
                      src="/assets/cara-speaking.png"
                      alt="Cara, ready to welcome you"
                      width={480}
                      height={560}
                      className="block aspect-[3/4] w-full rounded-[15px] bg-white object-cover object-left"
                    />
                  </div>
                  <figcaption className="absolute bottom-[6%] left-1/2 z-[4] max-w-[calc(100%-1.5rem)] -translate-x-1/2 rounded-full border border-pastel-lilac/20 bg-white/95 px-[1rem] py-[.52rem] text-center font-serif text-[clamp(.84rem,1vw,.95rem)] font-semibold leading-[1.2] whitespace-nowrap text-blue shadow-[0_10px_28px_rgba(179,162,254,.12)] backdrop-blur-[8px] max-md:whitespace-normal">
                    With warmth, whenever you&apos;re ready
                  </figcaption>
                </figure>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
