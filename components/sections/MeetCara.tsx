"use client";

import Link from "next/link";
import { OpalSep } from "@/components/ui/OpalSep";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { cn } from "@/lib/cn";

export function MeetCara() {
  return (
    <section className={cn("meet-cara relative isolate overflow-hidden bg-[#f3f0fa]", "py-[var(--section-y)]")} id="about">
      <div className={"meet-cara-scene pointer-events-none absolute inset-0 z-0"} aria-hidden="true" />
      <div className={cn("site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]", "meet-cara-inner relative z-[1] grid items-center gap-[clamp(2.75rem,6.5vw,6rem)] max-md:grid-cols-1 max-md:gap-11 md:grid-cols-[minmax(300px,.88fr)_minmax(340px,1.12fr)]")}>
        <Reveal variant="left" className={"meet-cara-photo relative justify-self-center w-full max-w-[min(480px,100%)] max-md:max-w-[min(380px,88vw)]"}>
          <span className={"meet-cara-glow pointer-events-none absolute inset-[6%_-8%_-6%] z-0 rounded-full"} aria-hidden="true" />
          <div className={"meet-cara-portrait relative z-[1] p-[clamp(1.1rem,2.2vw,1.65rem)]"}>
            <span className={"meet-cara-vine pointer-events-none absolute inset-0 z-[4] rounded-[30px]"} aria-hidden="true" />
            <span
              className={cn("meet-cara-sprig pointer-events-none absolute z-[5] opacity-55 [filter:drop-shadow(0_4px_12px_rgba(179,162,254,.15))]", "meet-cara-sprig--tl top-[-2%] left-[-4%] w-[min(52px,12vw)] rotate-[-12deg] max-md:left-0")}
              aria-hidden="true"
            >
              <img
                src="/assets/nature-leaf-opal.svg"
                alt=""
                className={"block h-auto w-full"}
              />
            </span>
            <span
              className={cn("meet-cara-sprig pointer-events-none absolute z-[5] opacity-55 [filter:drop-shadow(0_4px_12px_rgba(179,162,254,.15))]", "meet-cara-sprig--br right-[-5%] bottom-[2%] w-[min(64px,14vw)] rotate-[18deg] scale-x-[-1] max-md:right-0")}
              aria-hidden="true"
            >
              <img
                src="/assets/sprig-delicate.svg"
                alt=""
                className={"block h-auto w-full"}
              />
            </span>
            <div className={"meet-cara-frame relative z-[2] overflow-hidden rounded-[20px] bg-[linear-gradient(180deg,#fff_0%,#f8f6fc_100%)] p-1.5 shadow-[0_1px_0_rgba(255,255,255,.95)_inset,0_32px_72px_rgba(179,162,254,.18),0_14px_36px_rgba(28,48,163,.07)]"}>
              <span className={"meet-cara-sheen pointer-events-none absolute inset-0 z-[3] overflow-hidden rounded-[inherit]"} aria-hidden="true" />
              <SiteImage
                src="/assets/cara-tarot.png"
                alt="Cara, life coach and healer"
                width={480}
                height={600}
                sizes="(max-width: 768px) 88vw, 480px"
                className={"relative z-[1] block aspect-[4/5] w-full rounded-[15px] object-cover"}
              />
            </div>
          </div>
          <img
            src="/assets/icon-opal-heart.svg"
            alt=""
            className={"meet-cara-heart absolute top-[3%] left-0 z-[6] h-9 w-9 opacity-92 [filter:drop-shadow(0_4px_14px_rgba(179,162,254,.4))]"}
            aria-hidden="true"
          />
          <div className={"meet-cara-badge absolute right-[2%] bottom-[4%] z-[6] inline-flex max-w-[min(100%,260px)] items-center gap-[.55rem] rounded-full border border-pastel-lilac/24 bg-white/97 px-[1.05rem] py-[.6rem] pl-[.75rem] shadow-[0_12px_32px_rgba(179,162,254,.16)] backdrop-blur-[8px] max-md:right-[4%] max-md:bottom-[3%] max-md:max-w-[calc(100%-1.5rem)]"} aria-hidden="true">
            <img
              src="/assets/icon-opal-heart.svg"
              alt=""
              className={"h-[22px] w-[22px] shrink-0 [filter:drop-shadow(0_2px_6px_rgba(179,162,254,.25))]"}
            />
            <p className={"font-serif text-[clamp(.95rem,1.4vw,1.08rem)] font-semibold leading-[1.2] whitespace-nowrap text-blue max-md:whitespace-normal"}>One step at a time</p>
          </div>
        </Reveal>
        <Reveal variant="right" delay={120} className={"meet-cara-copy relative max-w-[min(580px,100%)] max-md:mx-auto max-md:text-center"}>
          <span className={"meet-cara-copy-sprig pointer-events-none absolute top-[-.25rem] right-[clamp(-1rem,-2vw,0)] w-[min(76px,16vw)] opacity-20 max-md:hidden"} aria-hidden="true">
            <img
              src="/assets/sprig-delicate.svg"
              alt=""
              className={"block h-auto w-full"}
            />
          </span>
          <p className={"text-[.68rem] font-bold tracking-[.18em] uppercase text-muted"}>Meet Cara</p>
          <h2 className={"mb-[1.1rem] text-[clamp(2.35rem,4.2vw,3.2rem)] leading-[1.04] tracking-[-.025em] text-blue"}>
            Hi, I&apos;m <span className={"font-script font-normal text-pastel-lilac leading-[1.1]"}>Cara</span>
          </h2>
          <OpalSep wide className={"w-[min(400px,100%)] mb-[1.65rem] max-md:mx-auto"} />
          <blockquote className={"meet-cara-pull relative mb-[1.35rem] border-none p-0"}>
            <p className={"font-serif text-[clamp(1.32rem,2.15vw,1.62rem)] font-medium leading-[1.58] text-blue max-w-[34ch] max-md:mx-auto"}>
              I help people who feel stuck, overwhelmed or at a crossroads to
              find clarity, confidence and a way forward.
            </p>
          </blockquote>
          <p className={"meet-cara-body mb-6 max-w-[48ch] text-[.98rem] leading-[1.85] text-muted max-md:mx-auto"}>
            My approach combines practical coaching, intuition and gentle
            support to help you create a calmer, happier life — one step at a
            time.
          </p>
          <ul className={"meet-cara-essence mb-[1.85rem] flex flex-wrap items-center gap-y-[.35rem] p-0 list-none max-md:justify-center"} aria-label="Cara's approach">
            <li className={"text-[.66rem] font-bold uppercase tracking-[.12em] text-[#9580f5] after:mx-[.7rem] after:text-[rgba(179,162,254,.4)] after:content-['·'] last:after:hidden"}>Practical coaching</li>
            <li className={"text-[.66rem] font-bold uppercase tracking-[.12em] text-[#9580f5] after:mx-[.7rem] after:text-[rgba(179,162,254,.4)] after:content-['·'] last:after:hidden"}>Intuitive guidance</li>
            <li className={"text-[.66rem] font-bold uppercase tracking-[.12em] text-[#9580f5] after:mx-[.7rem] after:text-[rgba(179,162,254,.4)] after:content-['·'] last:after:hidden"}>Gentle support</li>
          </ul>
          <div className={"meet-cara-cta flex flex-col items-start gap-[.85rem] max-md:items-center"}>
            <Link
              href="/about"
              className={cn(
                "inline-flex items-center justify-center gap-[.45rem] px-7 py-[.85rem] rounded-[4px] text-[.72rem] font-bold tracking-[.08em] uppercase border-2 border-transparent cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none bg-pastel-lilac text-white border-pastel-lilac shadow-[0_8px_24px_rgba(179,162,254,.28)] hover:bg-[#a894fc] hover:border-[#a894fc]",
                "normal-case tracking-[.02em] text-[.82rem] font-semibold px-7 py-[.88rem] after:content-['→'] after:ml-[.35rem] after:inline-block after:transition-transform after:duration-200 after:ease-opal hover:after:translate-x-[3px]",
              )}
            >
              Read more about me
            </Link>
            <p className={"meet-cara-note max-w-[36ch] text-[.82rem] leading-[1.6] text-muted max-md:mx-auto"}>
              Warm, personal sessions — online or in person.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
