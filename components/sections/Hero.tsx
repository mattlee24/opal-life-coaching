import { SiteImageFill } from "@/components/ui/SiteImage";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { mediaUrl, textList, type HomePage } from "@/lib/cms-types";

type HeroProps = {
  content: HomePage["hero"];
};

export function Hero({ content }: HeroProps) {
  const backgroundSrc = mediaUrl(content.backgroundImage);
  const trust = textList(content.trust);

  return (
    <section className={"hero relative isolate flex min-h-[max(100svh,800px)] items-center overflow-hidden bg-[#f7faf8] box-border pt-[calc(var(--header-height)+clamp(2rem,5vh,3.25rem))] pb-[clamp(2.75rem,5.5vh,4.25rem)]"}>
      <div className={"hero-bg absolute inset-0 overflow-hidden"} aria-hidden="true">
        {backgroundSrc ? (
          <SiteImageFill
            src={backgroundSrc}
            alt=""
            priority
            fetchPriority="high"
            sizes="100vw"
            className={"object-cover object-[62%_52%] [filter:saturate(1.12)_contrast(1.05)_brightness(1.03)]"}
          />
        ) : null}
      </div>
      <div className={"hero-vignette pointer-events-none absolute inset-0 z-[1]"} aria-hidden="true" />
      <div className={"hero-opal pointer-events-none absolute inset-0 z-[2]"} aria-hidden="true" />
      <div className={cn("site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]", "hero-inner relative z-[3] w-full")}>
        <div className={"hero-copy max-w-[min(540px,100%)]"}>
          <h1 className={"mb-[.9rem] max-w-full text-[clamp(2.3rem,3.9vw,3.5rem)] max-md:text-[clamp(2rem,7vw,2.55rem)] leading-[1.08] tracking-[-.03em]"}>{content.title}</h1>
          <span className={cn("font-script font-normal text-pastel-lilac leading-[1.1]", "block max-w-full text-[clamp(2.45rem,4.2vw,3.75rem)] max-md:text-[clamp(2.2rem,8vw,2.85rem)] max-md:[-webkit-text-stroke:0.5px_currentColor] leading-[1.05] whitespace-normal lg:whitespace-nowrap")}>
            {content.script}
          </span>
          <div className={"hero-divider my-[1.75rem] flex w-[min(440px,100%)] items-center gap-4"} aria-hidden="true">
            <span className={"hero-divider-line h-[2px] min-w-14 flex-1 rounded-[2px] bg-[linear-gradient(90deg,rgba(179,162,254,0)_0%,rgba(179,162,254,.6)_18%,rgba(188,228,222,.75)_100%)]"} />
            <span className={"hero-divider-heart h-[30px] w-[30px] shrink-0 [filter:drop-shadow(0_4px_14px_rgba(179,162,254,.38))]"}>
              <img
                src="/assets/icon-opal-heart.svg"
                alt=""
                width={30}
                height={30}
                className={"block h-full w-full"}
              />
            </span>
            <span className={"hero-divider-line h-[2px] min-w-14 flex-1 rounded-[2px] bg-[linear-gradient(90deg,rgba(188,228,222,.75)_0%,rgba(179,162,254,.6)_82%,rgba(179,162,254,0)_100%)]"} />
          </div>
          <p className={"hero-lead mb-[2.25rem] max-w-[34ch] text-[clamp(1.02rem,1.35vw,1.12rem)] leading-[1.88] text-muted"}>
            {content.lead}
          </p>
          <div className={"hero-btns flex flex-wrap gap-[.9rem]"}>
            <Link
              href={content.primaryCta.href}
              className={cn("inline-flex items-center justify-center gap-[.45rem] px-7 py-[.85rem] rounded-[4px] text-[.72rem] font-bold tracking-[.08em] uppercase border-2 border-transparent cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none bg-pastel-lilac text-white border-pastel-lilac shadow-[0_8px_24px_rgba(179,162,254,.28)] hover:bg-[#a894fc] hover:border-[#a894fc]", "px-8 py-[.95rem] text-[.74rem] tracking-[.1em] shadow-[0_12px_36px_rgba(179,162,254,.34),0_4px_12px_rgba(179,162,254,.18)] hover:shadow-[0_16px_42px_rgba(179,162,254,.4),0_6px_16px_rgba(179,162,254,.22)]")}
            >
              {content.primaryCta.label}
            </Link>
            <Link href={content.secondaryCta.href} className={"inline-flex items-center justify-center gap-[.45rem] px-8 py-[.95rem] rounded-[4px] text-[.74rem] font-bold tracking-[.1em] uppercase border-2 cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none bg-white/92 text-[#a894fc] border-[#a894fc] backdrop-blur-[10px] shadow-[0_8px_24px_rgba(179,162,254,.08)] hover:bg-[#a894fc] hover:text-white hover:shadow-[0_12px_32px_rgba(179,162,254,.4)]"}>
              {content.secondaryCta.label}
            </Link>
          </div>
          <div className={"hero-trust relative mt-8 flex flex-wrap gap-x-[1.35rem] gap-y-[.55rem] border-t border-transparent pt-[1.65rem] md:gap-x-[1.35rem] md:gap-y-[.55rem] max-md:gap-x-4 max-md:gap-y-[.45rem]"} aria-label="Session details">
            {trust.map((item) => (
              <span key={item} className={"inline-flex items-center gap-[.45rem] text-[.88rem] font-semibold tracking-[.02em] text-blue max-md:text-[.8rem]"}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
