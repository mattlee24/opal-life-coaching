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
    <section className={"hero relative isolate flex min-h-[max(100svh,800px)] items-center overflow-hidden bg-[#f7faf8] box-border pt-[calc(var(--header-height)+clamp(2rem,5vh,3.25rem))] pb-[clamp(2.75rem,5.5vh,4.25rem)] max-md:block max-md:min-h-0 max-md:pt-[calc(var(--hero-photo-h)-2.5rem)] max-md:pb-[clamp(3.5rem,10vw,4.5rem)] max-md:[--hero-photo-h:min(54svh,460px)]"}>
      {/* Mobile: the photo is a band across the top that fades into the page, and the copy sits on the
          plain background beneath it. Desktop keeps the copy over the faded left side of the photo. */}
      <div className={"hero-bg absolute inset-0 overflow-hidden max-md:bottom-auto max-md:h-[var(--hero-photo-h)] max-md:[mask-image:linear-gradient(180deg,#000_58%,transparent_100%)] max-md:[-webkit-mask-image:linear-gradient(180deg,#000_58%,transparent_100%)]"} aria-hidden="true">
        {backgroundSrc ? (
          <SiteImageFill
            src={backgroundSrc}
            alt=""
            priority
            fetchPriority="high"
            sizes="100vw"
            className={"object-cover object-[62%_52%] max-md:object-[76%_42%] [filter:saturate(1.12)_contrast(1.05)_brightness(1.03)]"}
          />
        ) : null}
      </div>
      <div className={"hero-vignette pointer-events-none absolute inset-0 z-[1] max-md:hidden"} aria-hidden="true" />
      <div className={"hero-opal pointer-events-none absolute inset-0 z-[2] max-md:bottom-auto max-md:h-[var(--hero-photo-h)]"} aria-hidden="true" />
      <div className={cn("site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]", "hero-inner relative z-[3] w-full")}>
        <div className={"hero-copy max-w-[min(540px,100%)]"}>
          <h1 className={"type-display max-w-full"}>
            {content.title}
            <span className={"type-script mt-[.35rem] max-w-full max-md:[-webkit-text-stroke:0.5px_currentColor] max-sm:text-[.95em] lg:whitespace-nowrap"}>{content.script}</span>
          </h1>
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
          <p className={"hero-lead type-body mb-[2.25rem] max-w-[34ch]"}>
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
              <span key={item} className={"type-label inline-flex items-center gap-[.45rem]"}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
