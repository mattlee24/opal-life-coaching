import { SiteImageFill } from "@/components/ui/SiteImage";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function Hero() {
  return (
    <section className={"hero relative isolate flex min-h-screen min-h-dvh items-center overflow-hidden bg-[#f7faf8] box-border pt-[clamp(6.25rem,12vh,8.25rem)] pb-[clamp(2rem,4vh,3rem)]"}>
      <div className={"hero-bg absolute inset-0 overflow-hidden"} aria-hidden="true">
        <SiteImageFill
          src="/assets/hero-woodland-v3.jpg"
          alt=""
          priority
          fetchPriority="high"
          sizes="100vw"
          className={"object-cover object-[62%_52%] [filter:saturate(1.12)_contrast(1.05)_brightness(1.03)]"}
        />
      </div>
      <div className={"hero-vignette pointer-events-none absolute inset-0 z-[1]"} aria-hidden="true" />
      <div className={"hero-opal pointer-events-none absolute inset-0 z-[2]"} aria-hidden="true" />
      <div className={cn("site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]", "hero-inner relative z-[3] w-full")}>
        <div className={"hero-copy max-w-[min(540px,100%)]"}>
          <p className={"inline-flex items-center gap-2 h-11 px-[.9rem] mb-[2.35rem] text-[.86rem] font-bold tracking-[.18em] uppercase text-[#9580f5] bg-white/82 border border-pastel-lilac/22 rounded-full shadow-[0_8px_24px_rgba(179,162,254,.1)] before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gradient-to-br before:from-pastel-lilac before:to-pastel-mint before:shrink-0"}>Life coaching with Cara</p>
          <h1 className={"mb-[.12rem] max-w-full text-[clamp(2.5rem,4.6vw,4rem)] leading-[1.06] tracking-[-.03em]"}>Support for your journey.</h1>
          <span className={cn("font-script font-normal text-pastel-lilac leading-[1.1]", "block max-w-full text-[clamp(2.65rem,4.9vw,4.2rem)] leading-[1.02] whitespace-normal lg:whitespace-nowrap")}>
            Guidance for your life.
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
            Holistic life coaching, Reiki healing and tarot readings — gentle,
            personal support when you&apos;re ready to move forward.
          </p>
          <div className={"hero-btns flex flex-wrap gap-[.9rem]"}>
            <Link
              href="/bookings"
              className={cn("inline-flex items-center justify-center gap-[.45rem] px-7 py-[.85rem] rounded-[4px] text-[.72rem] font-bold tracking-[.08em] uppercase border-2 border-transparent cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none bg-pastel-lilac text-white border-pastel-lilac shadow-[0_8px_24px_rgba(179,162,254,.28)] hover:bg-[#a894fc] hover:border-[#a894fc]", "px-8 py-[.95rem] text-[.74rem] tracking-[.1em] shadow-[0_12px_36px_rgba(179,162,254,.34),0_4px_12px_rgba(179,162,254,.18)] hover:shadow-[0_16px_42px_rgba(179,162,254,.4),0_6px_16px_rgba(179,162,254,.22)]")}
            >
              Book a session
            </Link>
            <Link href="#services" className={"inline-flex items-center justify-center gap-[.45rem] px-7 py-[.85rem] rounded-[4px] text-[.72rem] font-bold tracking-[.08em] uppercase border-2 border-transparent cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none bg-transparent text-blue border-pastel-lilac hover:bg-pastel-lilac/8 text-pastel-lilac border-pastel-lilac/35 bg-white/72 backdrop-blur-[10px] shadow-[0_8px_24px_rgba(179,162,254,.08)] hover:bg-white/92 hover:text-[#a894fc] hover:border-[#a894fc]"}>
              Explore my services
            </Link>
          </div>
          <div className={"hero-trust relative mt-8 flex flex-wrap gap-x-[1.35rem] gap-y-[.55rem] border-t border-transparent pt-[1.65rem] md:gap-x-[1.35rem] md:gap-y-[.55rem] max-md:gap-x-4 max-md:gap-y-[.45rem]"} aria-label="Session details">
            <span className={"inline-flex items-center gap-[.45rem] text-[.76rem] font-semibold tracking-[.02em] text-blue max-md:text-[.72rem]"}>Chichester &amp; Eastergate</span>
            <span className={"inline-flex items-center gap-[.45rem] text-[.76rem] font-semibold tracking-[.02em] text-blue max-md:text-[.72rem]"}>In person &amp; online</span>
            <span className={"inline-flex items-center gap-[.45rem] text-[.76rem] font-semibold tracking-[.02em] text-blue max-md:text-[.72rem]"}>At your pace</span>
          </div>
        </div>
      </div>
    </section>
  );
}
