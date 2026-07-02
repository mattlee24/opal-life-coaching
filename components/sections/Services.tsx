"use client";

import Link from "next/link";
import { OpalSep } from "@/components/ui/OpalSep";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { cn } from "@/lib/cn";

const services = [
  {
    variant: "c",
    tag: "Clarity",
    title: "Life Coaching",
    description:
      "Clarify goals, navigate transitions, and build lasting confidence in the life you're creating.",
    icon: "/assets/svc-icon-coaching.png",
    href: "/coaching",
  },
  {
    variant: "t",
    tag: "Reflection",
    title: "Tarot Readings",
    description:
      "Thoughtful, intuitive readings offering fresh perspective and space for deep reflection.",
    icon: "/assets/svc-icon-tarot.png",
    href: "/tarot",
  },
  {
    variant: "r",
    tag: "Balance",
    title: "Reiki Healing",
    description:
      "Release tension, restore balance, and invite profound peace through gentle energy healing.",
    icon: "/assets/svc-icon-reiki.png",
    href: "/reiki",
  },
] as const;

export function Services() {
  return (
    <section className={cn("services relative overflow-hidden bg-white", "py-[var(--section-y)]")} id="services">
      <div className={"site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]"}>
        <Reveal className={"services-head mx-auto mb-[clamp(3rem,6vw,4.25rem)] max-w-[min(820px,100%)] text-center"}>
          <p className={"text-[.68rem] font-bold tracking-[.18em] uppercase text-muted"}>Services</p>
          <h2 className={"mb-[.85rem] text-[clamp(2.2rem,4.3vw,3.2rem)] leading-[1.06] tracking-[-.025em] text-blue"}>
            Find the support
            <br />
            <span className={"mt-[.18rem] block text-[clamp(2.4rem,4.6vw,3.3rem)] leading-[.98] text-[#9580f5]"}>
              that&apos;s right for you
            </span>
          </h2>
          <p className={"services-lead mx-auto mb-[1.35rem] max-w-[54ch] text-[clamp(1rem,1.45vw,1.1rem)] leading-[1.82] text-muted"}>
            Whether you&apos;re seeking clarity, calm, or a fresh perspective —
            each offering is gentle, personal, and shaped entirely around you.
            Take your time exploring what resonates.
          </p>
          <div className={"services-keys mb-6 flex flex-wrap justify-center gap-x-[.65rem] gap-y-2"} aria-hidden="true">
            <span className={cn("rounded-full border px-[.72rem] py-[.32rem] text-[.62rem] font-bold uppercase tracking-[.12em]", "border-[#a2bffe]/28 bg-[rgba(232,240,255,.55)] text-[#5f4fd4]")}>
              Coaching
            </span>
            <span className={cn("rounded-full border px-[.72rem] py-[.32rem] text-[.62rem] font-bold uppercase tracking-[.12em]", "border-pastel-lilac/28 bg-[rgba(244,240,255,.6)] text-[#7d68e8]")}>
              Tarot
            </span>
            <span className={cn("rounded-full border px-[.72rem] py-[.32rem] text-[.62rem] font-bold uppercase tracking-[.12em]", "border-pastel-mint/35 bg-[rgba(236,248,245,.65)] text-[#4a8f7a]")}>
              Reiki
            </span>
          </div>
          <OpalSep center wide />
        </Reveal>
        <div className={"svc-grid grid items-stretch gap-[clamp(1.15rem,2vw,1.85rem)] max-md:mx-auto max-md:max-w-[min(380px,100%)] max-md:grid-cols-1 max-md:gap-7 md:grid-cols-2 xl:grid-cols-3"}>
          {services.map((service, index) => (
            <Reveal key={service.href} delay={index * 120} variant="up" fill>
            <article
              className={cn("svc-card relative flex h-full flex-col isolate overflow-hidden rounded-[26px] border-2 border-transparent bg-clip-padding bg-[linear-gradient(180deg,#fdfffe_0%,#f3f9f6_55%,#f8f6fc_100%)] pb-[2.35rem] shadow-[0_1px_0_rgba(255,255,255,.95)_inset,0_20px_54px_rgba(93,138,111,.08),0_8px_26px_rgba(179,162,254,.05)] transition-[transform,box-shadow] duration-500 ease-opal hover:-translate-y-2.5 hover:shadow-[0_1px_0_rgba(255,255,255,1)_inset,0_32px_70px_rgba(93,138,111,.13),0_14px_36px_rgba(179,162,254,.12)] motion-reduce:hover:translate-y-0", "svc-card", service.variant)}
            >
              <span className={"svc-opal-sheen pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"} aria-hidden="true" />
              <div className={"svc-icon-hero relative z-[2] flex min-h-[clamp(200px,21vw,240px)] items-center justify-center px-4 pt-8 pb-[1.65rem] max-md:min-h-[195px] lg:min-h-[200px] xl:min-h-[230px] xl:pt-10"}>
                <div className={"svc-icon-halo relative flex aspect-square w-[min(176px,76%)] items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_38%,#fff_0%,rgba(244,252,248,.95)_35%,rgba(212,235,228,.75)_62%,rgba(188,228,222,.35)_82%,transparent_94%)] shadow-[0_14px_44px_rgba(93,138,111,.13),0_0_0_2px_rgba(122,171,142,.14)_inset,0_0_0_6px_rgba(255,255,255,.7)] transition-[transform,box-shadow] duration-[550ms] ease-opal max-md:w-[min(176px,74%)] lg:w-[min(172px,76%)] xl:w-[188px]"}>
                  <SiteImage
                    src={service.icon}
                    alt=""
                    width={148}
                    height={148}
                    sizes="(max-width: 768px) 74vw, 156px"
                    className={"relative z-[1] h-auto w-[min(146px,82%)] object-contain [filter:saturate(1.12)_contrast(1.06)_drop-shadow(0_10px_22px_rgba(93,138,111,.18))] transition-transform duration-[550ms] ease-opal lg:w-[min(142px,82%)] xl:w-[156px]"}
                  />
                </div>
              </div>
              <div className={"svc-divider relative z-[2] mx-auto mb-[.25rem] h-px w-[min(100px,42%)] bg-[linear-gradient(90deg,transparent,rgba(179,162,254,.38)_20%,rgba(188,228,222,.45)_50%,rgba(179,162,254,.38)_80%,transparent)]"} aria-hidden="true" />
              <div className={"svc-card-body relative z-[2] flex min-h-0 flex-1 flex-col items-center px-[1.65rem] pt-[.65rem] text-center"}>
                <span
                  className={cn(
                    "svc-tag mb-[.75rem] inline-block rounded-full px-[.65rem] py-[.28rem] text-[.6rem] font-bold uppercase tracking-[.13em]",
                    service.variant === "c" && "border border-[#a2bffe]/25 bg-[rgba(232,240,255,.7)] text-[#5f4fd4]",
                    service.variant === "t" && "border border-pastel-lilac/22 bg-[rgba(244,240,255,.75)] text-[#7d68e8]",
                    service.variant === "r" && "border border-pastel-mint/32 bg-[rgba(236,248,245,.8)] text-[#4a8f7a]",
                  )}
                >
                  {service.tag}
                </span>
                <h3 className={"text-[clamp(1.58rem,2.2vw,1.95rem)] leading-[1.1] tracking-[-.015em] text-blue transition-colors"}>{service.title}</h3>
                <p className={"mb-[1.55rem] max-w-[28ch] flex-1 text-[.9rem] leading-[1.76] text-muted"}>{service.description}</p>
                <div className={"svc-actions mt-auto flex w-full justify-center"}>
                  <Link
                    href={service.href}
                    className={cn(
                      "inline-flex items-center justify-center gap-[.45rem] px-7 py-[.85rem] rounded-[4px] text-[.72rem] font-bold tracking-[.08em] uppercase border-2 border-transparent cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none bg-pastel-lilac text-white border-pastel-lilac shadow-[0_8px_24px_rgba(179,162,254,.28)] hover:bg-[#a894fc] hover:border-[#a894fc]",
                      "px-5 py-[.7rem] text-[.65rem]",
                      "w-full max-w-[188px] normal-case tracking-[.02em] text-[.76rem] font-semibold px-5 py-[.74rem] after:content-['→'] after:ml-[.35rem] after:inline-block after:transition-transform after:duration-200 after:ease-opal hover:after:translate-x-[3px]",
                    )}
                  >
                    Find out more
                  </Link>
                </div>
              </div>
            </article>
            </Reveal>
          ))}
        </div>
        <Reveal className={"services-foot mx-auto mt-[clamp(2.25rem,4vw,3rem)] max-w-[42ch] text-center"}>
          <p className={"text-[.9rem] leading-[1.7] text-muted"}>
            Not sure where to start? Every path can be blended —{" "}
            <Link href="#contact" className={"font-semibold text-blue border-b border-pastel-lilac/35 transition-[border-color,color] hover:border-[#9580f5] hover:text-[#152570]"}>
              get in touch
            </Link>{" "}
            and we&apos;ll find what fits.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
