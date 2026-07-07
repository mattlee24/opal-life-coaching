import Link from "next/link";
import { DecorativeImage } from "@/components/ui/DecorativeImage";
import { cn } from "@/lib/cn";

export function AboutHero() {
  return (
    <section className={"about-hero relative isolate flex min-h-[max(100svh,820px)] items-center overflow-hidden bg-[linear-gradient(168deg,#fcfbff_0%,#f8f6fc_38%,#f3f0fa_72%,#f6faf7_100%)] box-border pt-[calc(var(--header-height)+clamp(2rem,5vh,3.25rem))] pb-[clamp(4rem,7vh,5.5rem)]"}>
      <div className={"about-hero-atmosphere pointer-events-none absolute inset-0 z-0 overflow-hidden"} aria-hidden="true">
        <div className={"about-hero-mesh absolute inset-0"} />
        <div className={cn("about-hero-nature absolute inset-0", "about-hero-nature--meet")} />
        <div className={cn("about-hero-nature absolute inset-0", "about-hero-nature--faqs")} />
        <div className={"about-hero-orbs absolute inset-0"}>
          <span className={cn("about-hero-orb absolute rounded-full opacity-55 blur-[72px] animate-[about-hero-orb-drift_20s_ease-in-out_infinite_alternate] motion-reduce:animate-none", "about-hero-orb--a top-[-6%] right-[8%] h-[min(380px,44vw)] w-[min(380px,44vw)] bg-[radial-gradient(circle,rgba(179,162,254,.24),transparent_72%)]")} />
          <span className={cn("about-hero-orb absolute rounded-full opacity-55 blur-[72px] animate-[about-hero-orb-drift_20s_ease-in-out_infinite_alternate] motion-reduce:animate-none", "about-hero-orb--b bottom-[-4%] left-[-2%] h-[min(300px,36vw)] w-[min(300px,36vw)] bg-[radial-gradient(circle,rgba(188,228,222,.2),transparent_74%)] [animation-delay:-7s]")} />
          <span className={cn("about-hero-orb absolute rounded-full opacity-55 blur-[72px] animate-[about-hero-orb-drift_20s_ease-in-out_infinite_alternate] motion-reduce:animate-none", "about-hero-orb--c top-[42%] left-[38%] h-[min(220px,28vw)] w-[min(220px,28vw)] bg-[radial-gradient(circle,rgba(122,171,142,.14),transparent_70%)] [animation-delay:-12s]")} />
        </div>
        <div className={"about-hero-arc absolute top-1/2 right-[-8%] h-[min(720px,78vw)] w-[min(720px,78vw)] -translate-y-1/2 rounded-full border border-pastel-lilac/12 bg-[radial-gradient(circle_at_42%_50%,rgba(255,255,255,.35)_0%,transparent_58%)] opacity-85 max-md:right-[-30%] max-md:opacity-50"} />
      </div>

      <div className={cn("site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]", "about-hero-inner relative z-[2] grid w-full items-center gap-[clamp(2rem,5vw,4rem)] max-md:grid-cols-1 max-md:gap-11 md:grid-cols-[minmax(280px,.92fr)_minmax(300px,1.08fr)]")}>
        <div className={"about-hero-copy relative z-[2] max-w-[min(540px,100%)] max-md:max-w-full"}>
          <p className={"inline-flex items-center gap-2 h-11 px-[.9rem] mb-[2.35rem] text-[.86rem] font-bold tracking-[.18em] uppercase text-[#9580f5] bg-white/82 border border-pastel-lilac/22 rounded-full shadow-[0_8px_24px_rgba(179,162,254,.1)] before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gradient-to-br before:from-pastel-lilac before:to-pastel-mint before:shrink-0"}>About Cara</p>
          <h1>
            <span className={"about-hero-line block mb-[.08rem] text-[clamp(2.3rem,4.4vw,3.7rem)] leading-[1.05] tracking-[-.035em] max-md:text-[clamp(2rem,7.5vw,2.95rem)]"}>A calm space to</span>
            <span className={cn("font-script font-normal text-pastel-lilac leading-[1.1]", "about-hero-script block mt-[.05rem] text-[clamp(2.75rem,6.4vw,5.35rem)] leading-[.95] text-[#9580f5] [text-shadow:0_18px_48px_rgba(179,162,254,.18)] max-md:text-[clamp(2.5rem,11vw,3.85rem)]")}>
              be heard
            </span>
          </h1>
          <div className={"hero-divider my-[1.75rem] flex w-[min(440px,100%)] items-center gap-4"} aria-hidden="true">
            <span className={"hero-divider-line h-[2px] min-w-14 flex-1 rounded-[2px] bg-[linear-gradient(90deg,rgba(179,162,254,0)_0%,rgba(179,162,254,.6)_18%,rgba(188,228,222,.75)_100%)]"} />
            <span className={"hero-divider-heart h-[30px] w-[30px] shrink-0 [filter:drop-shadow(0_4px_14px_rgba(179,162,254,.38))]"}>
              <DecorativeImage
                src="/assets/icon-opal-heart.svg"
                width={30}
                height={30}
                className={"block h-full w-full"}
              />
            </span>
            <span className={"hero-divider-line h-[2px] min-w-14 flex-1 rounded-[2px] bg-[linear-gradient(90deg,rgba(188,228,222,.75)_0%,rgba(179,162,254,.6)_82%,rgba(179,162,254,0)_100%)]"} />
          </div>
          <p className={"hero-lead mb-[2.25rem] max-w-[34ch] text-[clamp(1.02rem,1.35vw,1.12rem)] leading-[1.88] text-muted"}>
            I help people who feel stuck, overwhelmed or at a crossroads find
            clarity and confidence — with warmth, intuition and absolutely no
            judgement.
          </p>
          <div className={cn("hero-btns flex flex-wrap gap-[.9rem]", "about-hero-btns")}>
            <Link href="/bookings" className={cn("inline-flex items-center justify-center gap-[.45rem] px-7 py-[.85rem] rounded-[4px] text-[.72rem] font-bold tracking-[.08em] uppercase border-2 border-transparent cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none bg-pastel-lilac text-white border-pastel-lilac shadow-[0_8px_24px_rgba(179,162,254,.28)] hover:bg-[#a894fc] hover:border-[#a894fc]", "px-8 py-[.95rem] text-[.74rem] tracking-[.1em] shadow-[0_12px_36px_rgba(179,162,254,.34),0_4px_12px_rgba(179,162,254,.18)] hover:shadow-[0_16px_42px_rgba(179,162,254,.4),0_6px_16px_rgba(179,162,254,.22)]")}>
              Book a session
            </Link>
            <Link href="#page-content" className={"inline-flex items-center justify-center gap-[.45rem] px-7 py-[.85rem] rounded-[4px] text-[.72rem] font-bold tracking-[.08em] uppercase border-2 border-transparent cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none bg-transparent text-blue border-pastel-lilac hover:bg-pastel-lilac/8 text-pastel-lilac border-pastel-lilac/32 bg-white/82 backdrop-blur-[10px] shadow-[0_8px_24px_rgba(179,162,254,.08)] hover:bg-white/92 hover:text-[#a894fc] hover:border-[#a894fc]"}>
              Read my story
            </Link>
          </div>
          <div className={cn("hero-trust relative mt-8 flex flex-wrap gap-x-[1.35rem] gap-y-[.55rem] border-t border-transparent pt-[1.65rem] md:gap-x-[1.35rem] md:gap-y-[.55rem] max-md:gap-x-4 max-md:gap-y-[.45rem]", "about-hero-trust")} aria-label="At a glance">
            <span className={"inline-flex items-center gap-[.45rem] text-[.76rem] font-semibold tracking-[.02em] text-blue max-md:text-[.72rem]"}>West Sussex</span>
            <span className={"inline-flex items-center gap-[.45rem] text-[.76rem] font-semibold tracking-[.02em] text-blue max-md:text-[.72rem]"}>In person &amp; online</span>
            <span className={"inline-flex items-center gap-[.45rem] text-[.76rem] font-semibold tracking-[.02em] text-blue max-md:text-[.72rem]"}>At your pace</span>
          </div>
        </div>

        <div className={"about-hero-stage relative flex min-h-[clamp(360px,44vw,520px)] items-center justify-center max-md:order-[-1] max-md:min-h-[clamp(300px,72vw,400px)]"}>
          <div className={"about-hero-orbit-wrap pointer-events-none absolute inset-0 flex items-center justify-center"} aria-hidden="true">
            <span className={cn("about-hero-orbit absolute rounded-full border border-pastel-lilac/18", "about-hero-orbit--outer aspect-square w-[min(520px,96%)] animate-[about-hero-orbit-spin_32s_linear_infinite] motion-reduce:animate-none max-md:w-[min(420px,94%)]")} />
            <span className={cn("about-hero-orbit absolute rounded-full border border-pastel-lilac/18", "about-hero-orbit--mid aspect-square w-[min(440px,82%)] animate-[about-hero-orbit-spin_24s_linear_infinite_reverse] border-pastel-mint/28 motion-reduce:animate-none max-md:w-[min(360px,80%)]")} />
            <span className={cn("about-hero-orbit absolute rounded-full border border-pastel-lilac/18", "about-hero-orbit--inner aspect-square w-[min(360px,68%)] animate-[about-hero-orbit-spin_18s_linear_infinite] border-dashed border-nature-sage/22 opacity-75 motion-reduce:animate-none max-md:w-[min(300px,66%)]")} />
            <span className={cn("about-hero-orbit-dot absolute h-2 w-2 rounded-full bg-[linear-gradient(135deg,#B3A2FE,#bce4de)] shadow-[0_0_16px_rgba(179,162,254,.45)]", "about-hero-orbit-dot--a top-[14%] right-[22%] animate-[about-hero-dot-pulse_3.2s_ease-in-out_infinite] motion-reduce:animate-none")} />
            <span className={cn("about-hero-orbit-dot absolute h-2 w-2 rounded-full bg-[linear-gradient(135deg,#B3A2FE,#bce4de)] shadow-[0_0_16px_rgba(179,162,254,.45)]", "about-hero-orbit-dot--b bottom-[18%] left-[20%] animate-[about-hero-dot-pulse_3.2s_ease-in-out_1.1s_infinite] motion-reduce:animate-none")} />
          </div>

          <span
            className={cn("about-hero-float pointer-events-none absolute z-[4] opacity-50 [filter:drop-shadow(0_6px_16px_rgba(179,162,254,.12))] animate-[about-hero-float_7s_ease-in-out_infinite_alternate] motion-reduce:animate-none", "about-hero-float--tl top-[6%] left-[4%] w-[min(56px,12vw)]")}
            aria-hidden="true"
          >
            <DecorativeImage src="/assets/sprig-fern.svg" width={48} height={96} />
          </span>
          <span
            className={cn("about-hero-float pointer-events-none absolute z-[4] opacity-50 [filter:drop-shadow(0_6px_16px_rgba(179,162,254,.12))] animate-[about-hero-float_7s_ease-in-out_infinite_alternate] motion-reduce:animate-none", "about-hero-float--br right-[2%] bottom-[10%] w-[min(48px,10vw)]")}
            aria-hidden="true"
          >
            <DecorativeImage src="/assets/nature-leaf-opal.svg" width={80} height={80} />
          </span>
          <span
            className={cn("about-hero-float pointer-events-none absolute z-[4] opacity-50 [filter:drop-shadow(0_6px_16px_rgba(179,162,254,.12))] animate-[about-hero-float_7s_ease-in-out_infinite_alternate] motion-reduce:animate-none", "about-hero-float--tr top-[18%] right-[8%] w-[min(42px,9vw)]")}
            aria-hidden="true"
          >
            <DecorativeImage src="/assets/sprig-delicate.svg" width={40} height={80} />
          </span>

          <div className={"about-hero-photo relative z-[3] mx-auto w-full max-w-[min(500px,92%)] max-md:max-w-[min(420px,88vw)]"}>
            <span className={"about-hero-glow pointer-events-none absolute inset-[2%_-10%_-8%] z-0 rounded-full"} aria-hidden="true" />
            <div className={"about-hero-portrait relative z-[1] p-[clamp(1rem,2vw,1.5rem)]"}>
              <span className={"about-hero-vine pointer-events-none absolute inset-0 z-[4] rounded-[30px]"} aria-hidden="true" />
              <div className={"about-hero-frame relative z-[2] overflow-hidden rounded-[20px] bg-[linear-gradient(180deg,#fff_0%,#f8f6fc_100%)] p-[7px] shadow-[0_2px_0_rgba(255,255,255,.95)_inset,0_36px_88px_rgba(179,162,254,.22),0_16px_40px_rgba(28,48,163,.1)] rotate-[-1.5deg] transition-transform duration-[600ms] ease-opal hover:rotate-0 hover:-translate-y-1 motion-reduce:hover:translate-y-0"}>
                <span className={"about-hero-sheen pointer-events-none absolute inset-0 z-[3] overflow-hidden rounded-[inherit]"} aria-hidden="true" />
                <img
                  src="/assets/cara-reading.png"
                  alt="Cara in conversation during a coaching session"
                  width={640}
                  height={480}
                  className={"relative z-[1] block aspect-[5/4] w-full rounded-[14px] object-cover object-[center_26%]"}
                />
              </div>
            </div>
            <div className={"about-hero-badge absolute right-[-2%] bottom-[6%] z-[6] inline-flex max-w-[calc(100%-1rem)] items-center gap-[.55rem] rounded-full border border-pastel-lilac/24 bg-white/97 px-[1.05rem] py-[.62rem] pl-[.75rem] shadow-[0_12px_32px_rgba(179,162,254,.16)] backdrop-blur-[10px] max-md:right-1/2 max-md:bottom-[4%] max-md:translate-x-1/2"} aria-hidden="true">
              <img
                src="/assets/icon-opal-heart.svg"
                alt=""
                className={"h-5 w-5 shrink-0"}
              />
              <p className={"font-serif text-[clamp(.88rem,1.3vw,1.02rem)] font-semibold leading-[1.2] whitespace-nowrap text-blue max-md:text-center max-md:whitespace-normal"}>Warm, personal &amp; unhurried</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
