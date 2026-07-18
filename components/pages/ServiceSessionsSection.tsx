"use client";

import Link from "next/link";
import { DecorativeImage } from "@/components/ui/DecorativeImage";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { cn } from "@/lib/cn";
import type { ServicePageData } from "@/lib/services";

type ServiceSessionsSectionProps = {
  data: ServicePageData;
};

const journeySteps = [
  {
    title: "Browse sessions",
    text: "Explore session types and pricing on the bookings page",
  },
  {
    title: "Pick a time",
    text: "Choose a slot that suits you — online or in person",
  },
  {
    title: "Or talk first",
    text: "Begin with a free discovery call if you'd like to chat before booking",
  },
];

export function ServiceSessionsSection({ data }: ServiceSessionsSectionProps) {
  return (
    <section
      className={cn(
        "service-sessions relative isolate overflow-hidden border-y border-pastel-lilac/12 bg-white py-[var(--section-y)]",
      )}
    >
      <div className="service-sessions-ambient pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
      <div className="service-sessions-orbs pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <span className="service-sessions-orb service-sessions-orb--a" />
        <span className="service-sessions-orb service-sessions-orb--b" />
      </div>

      <DecorativeImage
        src="/assets/sprig-delicate.svg"
        width={40}
        height={80}
        className="service-sessions-float service-sessions-float--tr pointer-events-none absolute z-[1] max-md:hidden"
      />
      <DecorativeImage
        src="/assets/nature-leaf-opal.svg"
        width={80}
        height={80}
        className="service-sessions-float service-sessions-float--bl pointer-events-none absolute z-[1] max-md:opacity-20"
      />

      <div className="site-wrap relative z-[2] w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]">
        <div className="service-sessions-editorial grid w-full grid-cols-1 items-start gap-[clamp(1.75rem,3.2vw,2.75rem)] md:grid-cols-[auto_minmax(0,1fr)]">
          <div
            className="service-sessions-rail max-md:order-1 flex flex-col items-center gap-4 self-stretch pt-[.45rem] max-md:mb-[.2rem] max-md:flex-row max-md:gap-4 max-md:self-auto max-md:pt-0"
            aria-hidden="true"
          >
            <span className="font-serif text-[clamp(2.5rem,4vw,3.35rem)] font-semibold leading-none tracking-[-.03em] text-[#9580f5]/40 max-md:text-[2rem]">
              03
            </span>
            <span className="min-h-[clamp(4rem,9vw,6rem)] w-px flex-1 bg-gradient-to-b from-pastel-lilac/50 via-pastel-mint/45 to-transparent max-md:h-px max-md:min-h-0 max-md:flex-1 max-md:bg-gradient-to-r" />
            <span className="text-[.62rem] font-bold tracking-[.2em] text-[#9580f5] uppercase [writing-mode:vertical-rl] rotate-180 max-md:rotate-0 max-md:[writing-mode:horizontal-tb] max-md:tracking-[.16em]">
              Next step
            </span>
          </div>

          <div className="service-sessions-body max-md:order-2 flex w-full flex-col">
            <div className="service-sessions-stage grid w-full items-center gap-[clamp(2.25rem,4.5vw,3.75rem)] max-md:grid-cols-1 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="service-sessions-path flex flex-col gap-[clamp(1.75rem,3vw,2.25rem)]">
                <Reveal className="service-sessions-head max-md:text-center">
                  <p className="service-sessions-kicker m-0 mb-4 text-[.68rem] font-bold tracking-[.18em] text-[#9580f5] uppercase">
                    Your gentle invitation
                  </p>
                  <h2 className="service-sessions-lead m-0 max-w-[16ch] font-serif text-[clamp(2.15rem,3.8vw,3rem)] font-semibold leading-[1.08] tracking-[-.03em] text-blue max-md:mx-auto">
                    Whenever you&apos;re ready,{" "}
                    <span className="font-script font-normal text-[clamp(2.45rem,4.5vw,3.45rem)] leading-[.95] text-[#9580f5]">
                      the door is open
                    </span>
                  </h2>
                  <p className="service-sessions-lead-copy m-0 mt-[clamp(1.1rem,2vw,1.45rem)] max-w-[46ch] text-[clamp(1.02rem,1.15vw,1.08rem)] leading-[1.85] text-muted max-md:mx-auto">
                    There&apos;s no rush to decide. When it feels right, you&apos;ll find session options,
                    transparent pricing and availability — or reach out first if you&apos;d rather talk
                    it through.
                  </p>
                </Reveal>

                <Reveal delay={60}>
                  <ol className="service-sessions-journey m-0 flex list-none flex-col gap-[clamp(1.15rem,2vw,1.45rem)] p-0">
                    {journeySteps.map((step, index) => (
                      <li key={step.title} className="service-sessions-step">
                        <span className="service-sessions-step-num" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="service-sessions-step-copy">
                          <strong>{step.title}</strong>
                          <p>{step.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>

                  {data.hero.trust.length > 0 ? (
                    <ul
                      className="service-sessions-signals m-0 mt-[clamp(1.35rem,2.4vw,1.75rem)] flex list-none flex-wrap gap-x-[1.25rem] gap-y-[.55rem] border-t border-pastel-lilac/16 p-0 pt-[clamp(1.1rem,2vw,1.35rem)] max-md:justify-center"
                      aria-label="Booking highlights"
                    >
                      {data.hero.trust.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="service-sessions-actions mt-[clamp(1.35rem,2.4vw,1.75rem)] flex flex-wrap items-center gap-[.9rem] max-md:justify-center">
                    <Link href="/bookings" className="service-sessions-btn service-sessions-btn--primary">
                      View bookings &amp; pricing
                    </Link>
                    <Link href="/contact" className="service-sessions-btn service-sessions-btn--ghost">
                      Ask a question first
                    </Link>
                  </div>
                </Reveal>
              </div>

              <Reveal variant="right" delay={140} className="service-sessions-portrait">
                <figure className="service-sessions-photo relative m-0 mx-auto w-full max-w-[min(420px,100%)]">
                  <span className="service-sessions-photo-glow pointer-events-none absolute inset-[-10%] z-0" aria-hidden="true" />
                  <DecorativeImage
                    src="/assets/sprig-fern.svg"
                    width={48}
                    height={96}
                    className="service-sessions-photo-sprig service-sessions-photo-sprig--tl pointer-events-none absolute z-[3]"
                  />
                  <DecorativeImage
                    src="/assets/sprig-delicate.svg"
                    width={40}
                    height={80}
                    className="service-sessions-photo-sprig service-sessions-photo-sprig--br pointer-events-none absolute z-[3]"
                  />

                  <div className="service-sessions-photo-frame relative z-[2]">
                    <span className="service-sessions-photo-vine pointer-events-none absolute inset-0 z-[4]" aria-hidden="true" />
                    <div className="service-sessions-photo-inner relative z-[2] overflow-hidden">
                      <SiteImage
                        src={data.sessionsImage ?? "/assets/cara-speaking.png"}
                        alt={data.sessionsImageAlt ?? "Cara, ready to welcome you"}
                        width={480}
                        height={600}
                        sizes="(max-width: 768px) 78vw, 420px"
                        className={cn(
                          "block aspect-[4/5] w-full object-cover",
                          data.sessionsImage ? "object-center" : "object-left",
                        )}
                      />
                    </div>
                  </div>

                  <figcaption className="service-sessions-photo-caption">
                    With warmth, whenever you&apos;re ready
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
