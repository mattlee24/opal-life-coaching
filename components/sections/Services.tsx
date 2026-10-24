"use client";

import Link from "next/link";
import { OpalSep } from "@/components/ui/OpalSep";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { cn } from "@/lib/cn";
import { serviceHref, serviceVariant, toHomeServiceCard, type HomePage } from "@/lib/cms-types";

type ServicesProps = {
  content: HomePage["servicesSection"];
};

type SvcCard = {
  key: string;
  title: string;
  description: string;
  iconUrl: string | null;
  variant: string;
  infoHref: string;
  bookHref: string;
  tinted?: boolean;
};

/* The fourth card isn't in the CMS yet (its slug and service page don't exist), so it lives
   here with placeholder links until Energy & Spiritual Guidance gets its own page. */
const energyCard: SvcCard = {
  key: "energy-spiritual-guidance",
  title: "Energy & Spiritual Guidance",
  description:
    "Dedicated sessions for deeper spiritual exploration—including past life regression, gentle connection with spirit and higher guidance (such as loved ones or spirit guides), and practical advice on managing and protecting your daily energy.",
  iconUrl: "/assets/svc-icon-reset.png",
  variant: "e",
  infoHref: "/contact",
  bookHref: "/contact",
  tinted: true,
};

export function Services({ content }: ServicesProps) {
  const cards: SvcCard[] = [
    ...(content.cards ?? []).map((rawCard) => {
      const service = toHomeServiceCard(rawCard);
      return {
        key: service.slug,
        title: service.title,
        description: service.cardDescription,
        iconUrl: service.icon?.url ?? null,
        variant: serviceVariant(service.slug),
        infoHref: serviceHref(service.slug),
        bookHref: `/bookings#bookings-${service.slug}`,
      };
    }),
    energyCard,
  ];

  return (
    <section className={cn("services relative overflow-hidden bg-white", "py-[var(--section-y)]")} id="services">
      <div className={"site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]"}>
        <Reveal className={"services-head mx-auto mb-[clamp(3rem,6vw,4.25rem)] max-w-[min(820px,100%)] text-center"}>
          <h2 className={"type-heading mb-4"}>
            {content.title}
            <span className={"type-script mt-[.15rem]"}>{content.script}</span>
          </h2>
          <p className={"services-lead type-body mx-auto mb-6 max-w-[64ch]"}>
            {content.lead}
          </p>
          <OpalSep center wide />
        </Reveal>
        {/* Cards lead with a compact icon + title row and left-aligned copy, laid out two-by-two
            so the longer descriptions have room to breathe. */}
        <div className={"svc-grid mx-auto grid max-w-[1100px] grid-cols-1 items-stretch gap-[clamp(1.25rem,2.2vw,2rem)] max-md:max-w-[min(460px,100%)] md:grid-cols-2"}>
          {cards.map((service, index) => {
            return (
            <Reveal key={service.key} delay={index * 120} variant="up" fill>
            <article
              className={cn("svc-card relative flex h-full flex-col isolate overflow-hidden rounded-[26px] border-2 border-transparent bg-clip-padding bg-[linear-gradient(180deg,#fdfffe_0%,#f3f9f6_55%,#f8f6fc_100%)] px-[clamp(1.6rem,2.4vw,2.35rem)] pt-[clamp(1.75rem,2.6vw,2.35rem)] pb-[clamp(1.85rem,2.6vw,2.35rem)] shadow-[0_1px_0_rgba(255,255,255,.95)_inset,0_20px_54px_rgba(93,138,111,.08),0_8px_26px_rgba(179,162,254,.05)] transition-[transform,box-shadow] duration-500 ease-opal hover:-translate-y-2.5 hover:shadow-[0_1px_0_rgba(255,255,255,1)_inset,0_32px_70px_rgba(93,138,111,.13),0_14px_36px_rgba(179,162,254,.12)] motion-reduce:hover:translate-y-0", "svc-card", service.variant)}
            >
              <span className={"svc-opal-sheen pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"} aria-hidden="true" />
              <div className={"relative z-[2] mb-[1.35rem] flex items-center gap-[1.1rem] border-b border-pastel-lilac/16 pb-[1.35rem]"}>
                <div className={cn("svc-icon-halo relative flex aspect-square h-[clamp(76px,6vw,92px)] w-[clamp(76px,6vw,92px)] shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_38%,#fff_0%,rgba(244,252,248,.95)_35%,rgba(212,235,228,.75)_62%,rgba(188,228,222,.35)_82%,transparent_94%)] shadow-[0_10px_28px_rgba(93,138,111,.12),0_0_0_2px_rgba(122,171,142,.14)_inset,0_0_0_5px_rgba(255,255,255,.7)] transition-[transform,box-shadow] duration-[550ms] ease-opal", service.tinted && "bg-[radial-gradient(circle_at_50%_38%,#fff_0%,rgba(242,238,255,.95)_38%,rgba(200,232,226,.6)_68%,transparent_92%)]")}>
                  {service.iconUrl ? (
                  <SiteImage
                    src={service.iconUrl}
                    alt=""
                    width={80}
                    height={80}
                    sizes="80px"
                    className={"relative z-[1] h-auto w-[78%] object-contain [filter:saturate(1.12)_contrast(1.06)_drop-shadow(0_6px_14px_rgba(93,138,111,.18))] transition-transform duration-[550ms] ease-opal"}
                  />
                  ) : null}
                </div>
                <h3 className={"type-title m-0 transition-colors"}>{service.title}</h3>
              </div>
              <p className={"type-body relative z-[2] mb-[1.75rem] max-w-none flex-1"}>{service.description}</p>
              <div className={"svc-actions relative z-[2] mt-auto flex w-full flex-wrap items-center justify-start gap-3"}>
                <Link
                  href={service.infoHref}
                  className={cn(
                    "inline-flex items-center justify-center gap-[.45rem] px-7 py-[.85rem] rounded-[4px] text-[.72rem] font-bold tracking-[.08em] uppercase border-2 border-transparent cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none bg-pastel-lilac text-white border-pastel-lilac shadow-[0_8px_24px_rgba(179,162,254,.28)] hover:bg-[#a894fc] hover:border-[#a894fc]",
                    "normal-case tracking-[.02em] text-[.76rem] font-semibold min-w-[10.5rem] px-6 py-[.74rem] after:content-['→'] after:ml-[.35rem] after:inline-block after:transition-transform after:duration-200 after:ease-opal hover:after:translate-x-[3px]",
                  )}
                >
                  {content.cardButtonLabel}
                </Link>
                <Link
                  href={service.bookHref}
                  className={
                    "inline-flex min-w-[10.5rem] items-center justify-center rounded-[4px] border-2 border-pastel-lilac bg-transparent px-6 py-[.74rem] text-[.76rem] font-semibold tracking-[.02em] text-[#7d68e8] transition-[transform,box-shadow,background,border-color,color] duration-200 ease-opal hover:-translate-y-0.5 hover:bg-[#a894fc] hover:border-[#a894fc] hover:text-white hover:shadow-[0_12px_32px_rgba(179,162,254,.4)] motion-reduce:hover:translate-y-0"
                  }
                >
                  Book now
                </Link>
              </div>
            </article>
            </Reveal>
            );
          })}
        </div>
        <Reveal className={"services-foot mx-auto mt-[clamp(2.25rem,4vw,3rem)] max-w-[1100px] max-md:max-w-[min(460px,100%)]"}>
          <div className={"svc-card !h-auto items-center px-[clamp(1.5rem,4vw,3rem)] py-[clamp(2rem,4vw,2.75rem)] text-center hover:!translate-y-0"}>
          <span className={"svc-opal-sheen pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"} aria-hidden="true" />
          <div className={"relative z-[2]"}>
          <p className={"type-body mx-auto max-w-[42ch] !text-[1.1rem] !font-medium"}>
            {[content.footerBefore, content.footerAfter].filter(Boolean).join(" ").split(/(combination session)/i).map((part, i) =>
              /^combination session$/i.test(part) ? (
                <span key={i} className={"font-[family-name:var(--font-serif)] text-[1.25em] font-semibold capitalize leading-none tracking-[-0.01em] text-blue"}>
                  {part}
                </span>
              ) : (
                part
              ),
            )}
          </p>
          <div className={"mt-7 flex flex-wrap items-center justify-center gap-4"}>
            <Link
              href="/bookings#bookings-combined"
              className={
                "inline-flex min-w-[12rem] items-center justify-center rounded-[4px] border-2 border-pastel-lilac bg-pastel-lilac px-8 py-[.9rem] text-[.85rem] font-semibold tracking-[.02em] text-white shadow-[0_8px_24px_rgba(179,162,254,.28)] transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 hover:border-[#a894fc] hover:bg-[#a894fc] motion-reduce:hover:translate-y-0"
              }
            >
              Book a combination session
            </Link>
            <Link
              href={content.footerLink.href}
              className={
                "inline-flex min-w-[12rem] items-center justify-center rounded-[4px] border-2 border-pastel-lilac bg-white px-8 py-[.9rem] text-[.85rem] font-semibold tracking-[.02em] text-[#7d68e8] transition-[transform,box-shadow,background,border-color,color] duration-200 ease-opal hover:-translate-y-0.5 hover:border-[#a894fc] hover:bg-[#a894fc] hover:text-white hover:shadow-[0_12px_32px_rgba(179,162,254,.4)] motion-reduce:hover:translate-y-0"
              }
            >
              {content.footerLink.label.charAt(0).toUpperCase() + content.footerLink.label.slice(1)}
            </Link>
          </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
