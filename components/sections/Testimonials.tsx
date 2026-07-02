import Link from "next/link";
import { OpalSep } from "@/components/ui/OpalSep";
import { cn } from "@/lib/cn";

const testimonials = [
  {
    theme: "Feeling calmer & clearer",
    quote:
      "I came in feeling overwhelmed and left with a real sense of calm. Cara helped me see things more clearly and find a way forward that actually felt right for me.",
    cite: "Coaching client",
    spotlight: false,
  },
  {
    theme: "Feeling understood & supported",
    quote:
      "Cara has a wonderful way of making you feel truly heard. There was no judgement — just warmth, compassion and gentle guidance exactly when I needed it.",
    cite: "Reiki client",
    spotlight: true,
  },
  {
    theme: "Gaining confidence & direction",
    quote:
      "After our sessions I felt so much more confident about the decisions I was facing. I finally had direction and the belief that I could move forward on my own terms.",
    cite: "Tarot & coaching client",
    spotlight: false,
  },
] as const;

export function Testimonials() {
  return (
    <section className={cn("testimonials relative overflow-hidden bg-white", "py-[var(--section-y)]")} id="testimonials">
      <div className={"site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]"}>
        <header className={"testimonials-head mx-auto mb-[clamp(3rem,5.5vw,4rem)] max-w-[min(760px,100%)] text-center"}>
          <p className={"text-[.68rem] font-bold tracking-[.18em] uppercase text-muted"}>Client stories</p>
          <h2 className={"mb-4 text-[clamp(2.15rem,4.2vw,3.05rem)] leading-[1.06] tracking-[-.025em] text-blue"}>
            Kind words
            <br />
            <span className={"mt-[.2rem] block text-[clamp(2.35rem,4.5vw,3.2rem)] leading-[.98] text-[#9580f5]"}>
              from those I&apos;ve supported
            </span>
          </h2>
          <p className={"mx-auto max-w-[44ch] text-[1.02rem] leading-[1.78] text-muted"}>
            Every journey is different — here&apos;s what clients often share
            after working together.
          </p>
          <OpalSep center wide />
        </header>
        <div className={"test-grid mb-10 grid items-center gap-[clamp(1rem,1.8vw,1.5rem)] max-md:mx-auto max-md:max-w-[min(460px,100%)] max-md:grid-cols-1 max-md:items-stretch md:grid-cols-[1fr_1.12fr_1fr]"}>
          {testimonials.map((item) => (
            <article
              key={item.theme}
              className={cn(
                "test-card relative flex flex-col isolate overflow-hidden rounded-[22px] border-2 border-transparent bg-clip-padding bg-[linear-gradient(180deg,#fefffe_0%,#faf8ff_55%,#f6faf7_100%)] px-[clamp(1.85rem,2.8vw,2.25rem)] pt-[clamp(2rem,3.2vw,2.5rem)] pb-[clamp(2.1rem,3.2vw,2.45rem)] shadow-[0_18px_48px_rgba(179,162,254,.07),0_8px_24px_rgba(93,138,111,.05)] transition-[transform,box-shadow] duration-[450ms] ease-opal hover:-translate-y-1.5 hover:shadow-[0_26px_60px_rgba(179,162,254,.13),0_12px_32px_rgba(93,138,111,.09)] motion-reduce:hover:translate-y-0",
                "test-card",
                item.spotlight && "test-card--spotlight -translate-y-[14px] px-[clamp(2rem,3vw,2.45rem)] pt-[clamp(2.35rem,3.6vw,2.85rem)] pb-[clamp(2.35rem,3.5vw,2.7rem)] shadow-[0_24px_58px_rgba(179,162,254,.11),0_12px_30px_rgba(93,138,111,.07)] hover:-translate-y-[18px] hover:shadow-[0_32px_72px_rgba(179,162,254,.16),0_16px_38px_rgba(93,138,111,.1)] max-md:translate-y-0 max-md:hover:-translate-y-1.5",
              )}
            >
              <div className={"test-card-top relative z-[1] mb-[1.15rem] flex w-full items-center justify-between gap-4"}>
                <span className={"test-theme inline-block rounded-full border border-pastel-lilac/18 bg-[rgba(244,240,255,.88)] px-[.68rem] py-[.32rem] text-[.6rem] font-bold uppercase tracking-[.11em] text-[#9580f5]"}>{item.theme}</span>
                <span className={"test-stars text-[.72rem] tracking-[.14em] text-pastel-lilac opacity-85"} aria-hidden="true">
                  ★★★★★
                </span>
              </div>
              <blockquote
                className={cn(
                  "relative z-[1] mb-[1.25rem] flex-1 pl-[1.25rem] pt-[1.65rem] font-serif text-[clamp(1.08rem,1.4vw,1.2rem)] italic leading-[1.72] text-text before:absolute before:top-[-.15rem] before:left-[-.05rem] before:font-serif before:text-[clamp(3rem,4.5vw,3.75rem)] before:not-italic before:leading-none before:text-[rgba(179,162,254,.22)] before:content-['“']",
                  item.spotlight && "text-[clamp(1.18rem,1.55vw,1.32rem)] leading-[1.68]",
                )}
              >
                {item.quote}
              </blockquote>
              <cite className={"relative z-[1] mt-auto flex items-center gap-[.55rem] text-[.76rem] font-semibold not-italic tracking-[.04em] text-muted before:h-0.5 before:w-[18px] before:shrink-0 before:rounded-[2px] before:bg-[linear-gradient(90deg,rgba(179,162,254,.55),rgba(188,228,222,.65))] before:content-['']"}>{item.cite}</cite>
            </article>
          ))}
        </div>
        <footer className={"testimonials-foot pt-[.35rem] text-center"}>
          <p className={"mb-[1.15rem] text-[.88rem] leading-[1.65] text-muted"}>
            Real stories from real sessions — shared with warmth and permission.
          </p>
          <Link
            href="/contact"
            className={cn(
              "inline-flex items-center justify-center gap-[.45rem] px-7 py-[.85rem] rounded-[4px] text-[.72rem] font-bold tracking-[.08em] uppercase border-2 border-transparent cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none bg-pastel-lilac text-white border-pastel-lilac shadow-[0_8px_24px_rgba(179,162,254,.28)] hover:bg-[#a894fc] hover:border-[#a894fc]",
              "normal-case tracking-[.02em] text-[.82rem] font-semibold px-7 py-[.85rem]",
            )}
          >
            Read more reviews
          </Link>
        </footer>
      </div>
    </section>
  );
}
