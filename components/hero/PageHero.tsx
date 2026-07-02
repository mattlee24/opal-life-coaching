import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type PageHeroCta = {
  href: string;
  label: string;
};

export type PageHeroTone = "lavender" | "sage" | "opal";

export type PageHeroProps = {
  eyebrow: string;
  title: string;
  script: string;
  lead: string;
  trust?: string[];
  primaryCta?: PageHeroCta;
  secondaryCta?: PageHeroCta;
  visual?: ReactNode;
  tone?: PageHeroTone;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  script,
  lead,
  trust = [],
  primaryCta,
  secondaryCta,
  visual,
  tone = "lavender",
  className = "",
}: PageHeroProps) {
  const split = Boolean(visual);

  return (
    <section
      className={cn(
        "page-hero relative isolate flex min-h-screen min-h-dvh items-center overflow-hidden box-border border-b border-pastel-lilac/10 pt-[clamp(6.25rem,12vh,8.25rem)] pb-[clamp(3.5rem,7vh,4.5rem)] bg-[linear-gradient(180deg,#fcfbff_0%,#faf8ff_48%,#f5f2fc_100%)]",
        tone === "sage"
          ? "page-hero--sage bg-[linear-gradient(180deg,#f8fcfa_0%,#f6faf7_48%,#f0f7f4_100%)]"
          : tone === "opal"
            ? "page-hero--opal bg-[linear-gradient(180deg,#fcfbff_0%,#f8f6fc_52%,#f3f0fa_100%)]"
            : "page-hero--lavender bg-[linear-gradient(180deg,#fcfbff_0%,#faf8ff_50%,#f3f0fa_100%)]",
        className,
      )}
    >
      <div className={"page-hero-scene pointer-events-none absolute inset-0 z-0"} aria-hidden="true" />
      <div className={"page-hero-ambient pointer-events-none absolute inset-0 z-[1]"} aria-hidden="true" />
      <div className={"page-hero-orbs pointer-events-none absolute inset-0 z-[1] overflow-hidden"} aria-hidden="true">
        <span className={cn("page-hero-orb absolute rounded-full opacity-55 blur-[70px] animate-[page-hero-orb-drift_18s_ease-in-out_infinite_alternate] motion-reduce:animate-none", "page-hero-orb--a top-[-8%] right-[-6%] h-[min(340px,42vw)] w-[min(340px,42vw)] bg-[radial-gradient(circle,rgba(179,162,254,.22),transparent_72%)]")} />
        <span className={cn("page-hero-orb absolute rounded-full opacity-55 blur-[70px] animate-[page-hero-orb-drift_18s_ease-in-out_infinite_alternate] motion-reduce:animate-none", "page-hero-orb--b bottom-[-6%] left-[-4%] h-[min(280px,36vw)] w-[min(280px,36vw)] bg-[radial-gradient(circle,rgba(188,228,222,.18),transparent_74%)] [animation-delay:-6s]")} />
        <span className={cn("page-hero-orb absolute rounded-full opacity-55 blur-[70px] animate-[page-hero-orb-drift_18s_ease-in-out_infinite_alternate] motion-reduce:animate-none", "page-hero-orb--c top-[38%] right-[18%] h-[min(200px,28vw)] w-[min(200px,28vw)] bg-[radial-gradient(circle,rgba(162,191,254,.14),transparent_70%)] [animation-delay:-11s]")} />
      </div>
      <div className={"page-hero-shimmer pointer-events-none absolute top-0 right-0 left-0 z-[2] h-px bg-[linear-gradient(90deg,transparent,rgba(179,162,254,.32)_20%,rgba(188,228,222,.42)_50%,rgba(179,162,254,.32)_80%,transparent)]"} aria-hidden="true" />

      <div
        className={cn(
          "site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]",
          "page-hero-inner relative z-[3] w-full",
          split ? "page-hero--split grid items-center gap-[clamp(2.5rem,5vw,4.5rem)] md:grid-cols-[minmax(300px,1fr)_minmax(280px,.92fr)] max-md:grid-cols-1 max-md:gap-8" : "page-hero--centered mx-auto flex max-w-[min(760px,100%)] flex-col items-center text-center",
        )}
      >
        <div
          className={cn(
            "hero-copy max-w-[min(540px,100%)]",
            "page-hero-copy max-w-[min(540px,100%)]",
            !split && "page-hero--centered flex w-full max-w-full flex-col items-center mx-auto",
          )}
        >
          <p className={"inline-flex items-center gap-2 h-11 px-[.9rem] mb-[2.35rem] text-[.86rem] font-bold tracking-[.18em] uppercase text-[#9580f5] bg-white/82 border border-pastel-lilac/22 rounded-full shadow-[0_8px_24px_rgba(179,162,254,.1)] before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gradient-to-br before:from-pastel-lilac before:to-pastel-mint before:shrink-0"}>{eyebrow}</p>
          <h1 className={"mb-[.12rem] max-w-full text-[clamp(2.5rem,4.6vw,4rem)] leading-[1.06] tracking-[-.03em]"}>{title}</h1>
          <span className={cn("font-script font-normal text-pastel-lilac leading-[1.1]", "block max-w-full text-[clamp(2.65rem,4.9vw,4.2rem)] leading-[1.02] whitespace-normal lg:whitespace-nowrap")}>{script}</span>
          <div
            className={cn("hero-divider my-[1.75rem] flex w-[min(440px,100%)] items-center gap-4", !split && "mx-auto")}
            aria-hidden="true"
          >
            <span className={"hero-divider-line h-[2px] min-w-14 flex-1 rounded-[2px] bg-[linear-gradient(90deg,rgba(179,162,254,0)_0%,rgba(179,162,254,.6)_18%,rgba(188,228,222,.75)_100%)]"} />
            <span className={"hero-divider-heart h-[30px] w-[30px] shrink-0 [filter:drop-shadow(0_4px_14px_rgba(179,162,254,.38))]"}>
              <img
                src="/assets/icon-opal-heart.svg"
                alt=""
                className={"block h-full w-full"}
              />
            </span>
            <span className={"hero-divider-line h-[2px] min-w-14 flex-1 rounded-[2px] bg-[linear-gradient(90deg,rgba(188,228,222,.75)_0%,rgba(179,162,254,.6)_82%,rgba(179,162,254,0)_100%)]"} />
          </div>
          <p className={cn("hero-lead mb-[2.25rem] max-w-[34ch] text-[clamp(1.02rem,1.35vw,1.12rem)] leading-[1.88] text-muted", !split && "mx-auto max-w-[min(42ch,100%)] text-center")}>
            {lead}
          </p>
          {(primaryCta || secondaryCta) && (
            <div
              className={cn(
                "hero-btns flex flex-wrap gap-[.9rem]",
                !split && "justify-center w-full",
              )}
            >
              {primaryCta ? (
                <Link href={primaryCta.href} className={cn("inline-flex items-center justify-center gap-[.45rem] px-7 py-[.85rem] rounded-[4px] text-[.72rem] font-bold tracking-[.08em] uppercase border-2 border-transparent cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none bg-pastel-lilac text-white border-pastel-lilac shadow-[0_8px_24px_rgba(179,162,254,.28)] hover:bg-[#a894fc] hover:border-[#a894fc]", "px-8 py-[.95rem] text-[.74rem] tracking-[.1em] shadow-[0_12px_36px_rgba(179,162,254,.34),0_4px_12px_rgba(179,162,254,.18)] hover:shadow-[0_16px_42px_rgba(179,162,254,.4),0_6px_16px_rgba(179,162,254,.22)]")}>
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link href={secondaryCta.href} className={"inline-flex items-center justify-center gap-[.45rem] px-7 py-[.85rem] rounded-[4px] text-[.72rem] font-bold tracking-[.08em] uppercase border-2 border-transparent cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none bg-transparent text-blue border-pastel-lilac hover:bg-pastel-lilac/8 bg-white/88 backdrop-blur-[10px]"}>
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          )}
          {trust.length > 0 ? (
            <div
              className={cn(
                "hero-trust relative mt-8 flex flex-wrap gap-x-[1.35rem] gap-y-[.55rem] border-t border-transparent pt-[1.65rem] md:gap-x-[1.35rem] md:gap-y-[.55rem] max-md:gap-x-4 max-md:gap-y-[.45rem]",
                !split && "justify-center w-full",
              )}
              aria-label="Highlights"
            >
              {trust.map((item) => (
                <span key={item} className={"inline-flex items-center gap-[.45rem] text-[.76rem] font-semibold tracking-[.02em] text-blue max-md:text-[.72rem]"}>
                  {item}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        {visual ? <div className={"page-hero-visual relative z-[3] flex min-h-[clamp(320px,38vw,460px)] items-center justify-center max-md:order-2 max-md:min-h-[clamp(360px,96vw,440px)]"}>{visual}</div> : null}
      </div>
    </section>
  );
}
