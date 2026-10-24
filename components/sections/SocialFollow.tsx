"use client";

import { OpalSep } from "@/components/ui/OpalSep";
import { Reveal } from "@/components/ui/Reveal";
import { DecorativeImage } from "@/components/ui/DecorativeImage";
import { socialMeta, type SocialNetwork } from "@/components/ui/SocialLink";
import { useSiteSettings } from "@/components/layout/LayoutDataContext";
import { cn } from "@/lib/cn";
import type { HomePage } from "@/lib/cms-types";

type SocialFollowProps = {
  content: HomePage["socialSection"];
};

const networks: SocialNetwork[] = ["facebook", "instagram", "youtube"];

export function SocialFollow({ content }: SocialFollowProps) {
  const { social } = useSiteSettings();
  const captions: Record<SocialNetwork, string | null | undefined> = {
    facebook: content.facebookCaption,
    instagram: content.instagramCaption,
    youtube: content.youtubeCaption,
  };
  const cards: { key: string; href: string; label: string; caption?: string | null; icon: string; button: string; aria: string }[] =
    networks.flatMap((network) => {
      const href = social?.[network];
      const meta = socialMeta[network];
      return href
        ? [{ key: network, href, label: meta.label, caption: captions[network], icon: meta.icon, button: content.followLabel, aria: `${content.followLabel} on ${meta.label}` }]
        : [];
    });
  {
    const label = content.emailTitle || "Join my email list";
    cards.push({
      key: "email",
      // Until a sign-up URL is set in Site settings, point at the contact form.
      href: social?.emailList || "#contact",
      label,
      caption: content.emailCaption ?? "For occasional future updates and news.",
      icon: "/assets/icon-social-email.svg",
      button: content.emailButtonLabel || "Join",
      aria: label,
    });
  }

  // Nothing to follow until a link is set in Site settings.
  if (!cards.length) return null;

  return (
    <section
      className={cn(
        "social-follow relative isolate overflow-hidden bg-[linear-gradient(180deg,#f6faf7_0%,#fcfbff_100%)]",
        "py-[var(--section-y)]",
      )}
      id="follow"
    >
      <div
        className={"pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_48%_62%_at_8%_22%,rgba(188,228,222,.28),transparent_68%),radial-gradient(ellipse_44%_58%_at_94%_78%,rgba(179,162,254,.16),transparent_66%)]"}
        aria-hidden="true"
      />
      <span
        className={"pointer-events-none absolute top-[8%] right-[clamp(.5rem,4vw,3.5rem)] z-0 w-[min(88px,18vw)] rotate-[14deg] opacity-25 max-md:hidden"}
        aria-hidden="true"
      >
        <DecorativeImage src="/assets/sprig-fern.svg" width={48} height={96} className={"block h-auto w-full"} />
      </span>
      <div
        className={cn(
          "site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]",
          "relative z-[1] grid items-center gap-[clamp(2.75rem,6vw,5.5rem)] max-md:grid-cols-1 max-md:gap-10 md:grid-cols-[minmax(320px,1.1fr)_minmax(300px,.9fr)]",
        )}
      >
        <Reveal variant="left" className={"max-w-[min(560px,100%)] max-md:mx-auto max-md:text-center"}>
          <h2 className={"type-heading mb-[1.1rem]"}>
            {content.title}
            <span className={"type-script mt-[.15rem]"}>{content.script}</span>
          </h2>
          <OpalSep wide className={"mb-[1.5rem] w-[min(400px,100%)] max-md:mx-auto"} />
          <p className={"type-body mb-[1.15rem] max-w-[44ch] max-md:mx-auto"}>{content.lead}</p>
          <p className={"type-body max-w-[44ch] max-md:mx-auto"}>
            {content.body}
          </p>
        </Reveal>
        <Reveal variant="right" delay={120} className={"relative flex w-full max-w-[min(440px,100%)] flex-col gap-[clamp(.85rem,1.6vw,1.1rem)] justify-self-center"}>
          <span
            className={"pointer-events-none absolute inset-[-14%_-10%] -z-10 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(179,162,254,.22),rgba(188,228,222,.14)_45%,transparent_72%)] blur-[28px]"}
            aria-hidden="true"
          />
          {cards.map((card) => (
            <a
              key={card.key}
              href={card.href}
              {...(card.href.startsWith("#") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
              aria-label={card.aria}
              className={
                "group relative flex items-center gap-4 max-sm:gap-3 rounded-[22px] border border-pastel-lilac/16 bg-[linear-gradient(180deg,#fefffe_0%,#faf8ff_55%,#f6faf7_100%)] px-[clamp(1rem,2.4vw,1.4rem)] py-[clamp(1rem,2vw,1.2rem)] shadow-[0_18px_44px_rgba(179,162,254,.1),0_8px_22px_rgba(93,138,111,.06)] transition-[transform,box-shadow,border-color] duration-[350ms] ease-opal hover:-translate-y-1 hover:border-pastel-lilac/32 hover:shadow-[0_24px_56px_rgba(179,162,254,.16),0_12px_28px_rgba(93,138,111,.08)] motion-reduce:hover:translate-y-0"
              }
            >
              <span
                className={"flex h-14 w-14 max-sm:h-12 max-sm:w-12 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_38%,#fff_0%,rgba(244,240,255,.95)_45%,rgba(212,235,228,.7)_100%)] shadow-[0_8px_22px_rgba(179,162,254,.16),0_0_0_1px_rgba(179,162,254,.14)_inset]"}
                aria-hidden="true"
              >
                <img src={card.icon} alt="" width={26} height={26} className={"block h-[26px] w-[26px]"} />
              </span>
              <span className={"flex min-w-0 flex-1 flex-col text-left"}>
                <span className={"type-title"}>{card.label}</span>
                {card.caption ? (
                  <span className={cn("type-body", card.key === "email" ? "leading-snug" : "truncate")}>{card.caption}</span>
                ) : null}
              </span>
              <span
                className={
                  "inline-flex shrink-0 items-center gap-[.35rem] rounded-full bg-pastel-lilac px-4 max-sm:px-[.85rem] py-[.55rem] text-[.74rem] font-semibold tracking-[.02em] text-white shadow-[0_8px_20px_rgba(179,162,254,.3)] transition-[background] duration-200 group-hover:bg-[#a894fc] after:inline-block after:transition-transform after:duration-200 after:ease-opal after:content-['→'] group-hover:after:translate-x-[3px]"
                }
                aria-hidden="true"
              >
                {card.button}
              </span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
