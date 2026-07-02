import Link from "next/link";
import { cn } from "@/lib/cn";

export function ClosingInvitationCta() {
  return (
    <section className={cn("about-close relative isolate overflow-hidden border-t border-pastel-lilac/12 bg-[#f3f0fa]", "py-[var(--section-y)]")}>
      <div className={"about-close-atmosphere pointer-events-none absolute inset-0 z-0 overflow-hidden"} aria-hidden="true">
        <div className={cn("about-close-scene absolute inset-0", "about-close-scene--meet")} />
        <div className={cn("about-close-scene absolute inset-0", "about-close-scene--faqs")} />
        <div className={"about-close-veil absolute inset-0"} />
        <div className={"about-close-mesh absolute inset-0"} />
        <div className={"about-close-orbs absolute inset-0"}>
          <span className={cn("about-close-orb absolute rounded-full opacity-50 blur-[68px] animate-[about-close-orb-drift_18s_ease-in-out_infinite_alternate] motion-reduce:animate-none", "about-close-orb--a top-[-8%] right-[14%] h-[min(340px,40vw)] w-[min(340px,40vw)] bg-[radial-gradient(circle,rgba(179,162,254,.22),transparent_72%)]")} />
          <span className={cn("about-close-orb absolute rounded-full opacity-50 blur-[68px] animate-[about-close-orb-drift_18s_ease-in-out_infinite_alternate] motion-reduce:animate-none", "about-close-orb--b bottom-[-6%] left-[6%] h-[min(280px,34vw)] w-[min(280px,34vw)] bg-[radial-gradient(circle,rgba(188,228,222,.18),transparent_74%)] [animation-delay:-6s]")} />
        </div>
        <div className={"about-close-ring absolute left-[-12%] bottom-[-28%] h-[min(560px,72vw)] w-[min(560px,72vw)] rounded-full border border-pastel-lilac/10 bg-[radial-gradient(circle_at_58%_42%,rgba(255,255,255,.28)_0%,transparent_58%)] opacity-75"} />
      </div>

      <div className={cn("site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]", "about-close-inner relative z-[2] grid w-full items-center gap-[clamp(2.5rem,5vw,4.5rem)] max-md:grid-cols-1 max-md:gap-9 md:grid-cols-[minmax(280px,1.05fr)_minmax(280px,.95fr)]")}>
        <div className={"about-close-copy max-w-[min(520px,100%)] max-md:mx-auto max-md:max-w-full max-md:text-center"}>
          <p className={"inline-flex items-center justify-center h-[34px] px-[.85rem] text-[.68rem] font-bold tracking-[.18em] uppercase leading-none text-[#9580f5] mb-4 bg-white/55 border border-pastel-lilac/20 rounded-full box-border"}>Take the first step</p>
          <h2>
            <span className={"about-close-line block text-[clamp(2.15rem,4.2vw,3.15rem)] leading-[1.04] tracking-[-.03em]"}>I&apos;d love to meet you</span>
            <span className={cn("font-script font-normal text-pastel-lilac leading-[1.1]", "about-close-script block mt-[.12rem] text-[clamp(2.5rem,5.5vw,4rem)] leading-[.94] text-[#9580f5] [text-shadow:0_14px_40px_rgba(179,162,254,.16)]")}>
              whenever you&apos;re ready
            </span>
          </h2>
          <div className={cn("hero-divider my-[1.75rem] flex w-[min(440px,100%)] items-center gap-4", "about-close-divider my-[clamp(1.25rem,2.4vh,1.65rem)] mb-[clamp(1.35rem,2.6vh,1.75rem)] w-[min(380px,100%)] max-md:mx-auto")} aria-hidden="true">
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
          <p className={"about-close-lead max-w-[38ch] text-[clamp(1rem,1.2vw,1.06rem)] leading-[1.88] text-muted max-md:mx-auto"}>
            Book a free discovery call, explore a service, or simply send a
            message. There&apos;s no pressure to have it all figured out.
          </p>
          <ul className={"about-close-assurances mt-[clamp(1.5rem,2.8vh,1.85rem)] flex flex-wrap gap-x-[1.25rem] gap-y-[.55rem] border-t border-pastel-lilac/14 pt-[clamp(1.15rem,2vh,1.35rem)] list-none max-md:justify-center"} aria-label="What to expect">
            <li className={"inline-flex items-center gap-[.45rem] text-[.76rem] font-semibold tracking-[.02em] text-blue"}>Free discovery call</li>
            <li className={"inline-flex items-center gap-[.45rem] text-[.76rem] font-semibold tracking-[.02em] text-blue"}>No pressure</li>
            <li className={"inline-flex items-center gap-[.45rem] text-[.76rem] font-semibold tracking-[.02em] text-blue"}>At your pace</li>
          </ul>
        </div>

        <div className={"about-close-stage relative flex min-h-[clamp(320px,36vw,420px)] items-center justify-center max-md:order-[-1] max-md:min-h-[clamp(280px,62vw,340px)]"}>
          <div className={"about-close-orbit pointer-events-none absolute inset-0 flex items-center justify-center"} aria-hidden="true">
            <span
              className={cn(
                "about-close-orbit-ring absolute rounded-full border border-pastel-lilac/16",
                "about-close-orbit-ring--outer aspect-square w-[min(380px,88%)] animate-[about-close-orbit-spin_28s_linear_infinite] motion-reduce:animate-none",
              )}
            />
            <span
              className={cn(
                "about-close-orbit-ring absolute rounded-full border border-pastel-lilac/16",
                "about-close-orbit-ring--inner aspect-square w-[min(300px,72%)] animate-[about-close-orbit-spin_20s_linear_infinite_reverse] border-dashed border-pastel-mint/24 opacity-80 motion-reduce:animate-none",
              )}
            />
            <span className={"about-close-orbit-dot absolute top-[12%] right-[24%] h-[7px] w-[7px] rounded-full bg-[linear-gradient(135deg,#B3A2FE,#bce4de)] shadow-[0_0_14px_rgba(179,162,254,.4)] animate-[about-close-dot-pulse_3s_ease-in-out_infinite] motion-reduce:animate-none"} />
          </div>
          <div className={"vine-panel relative isolate overflow-hidden rounded-[24px] border-2 border-transparent bg-clip-padding bg-[linear-gradient(180deg,#fefffe_0%,#faf8ff_55%,#f6faf7_100%)] px-[var(--vine-pad-x)] py-[var(--vine-pad-y)] shadow-[0_28px_72px_rgba(179,162,254,.12),0_14px_36px_rgba(93,138,111,.08)] about-close-card w-full max-w-[min(380px,100%)] rounded-[24px] px-[clamp(1.75rem,3vw,2.25rem)] py-[clamp(2rem,3.5vw,2.65rem)] transition-[transform,box-shadow] duration-[450ms] ease-opal hover:-translate-y-1.5 hover:shadow-[0_32px_80px_rgba(179,162,254,.14),0_16px_40px_rgba(93,138,111,.1)] motion-reduce:hover:translate-y-0"}>
            <div className={cn("vine-panel__inner relative z-[1] flex h-full flex-col gap-[.35rem]", "about-close-card-inner items-center gap-[.65rem] text-center")}>
              <span className={"about-close-card-icon mb-[.15rem] flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_50%_38%,#fff_0%,rgba(244,240,255,.95)_42%,rgba(212,235,228,.5)_72%,transparent_92%)] shadow-[0_0_0_1px_rgba(179,162,254,.12),0_8px_22px_rgba(179,162,254,.1)]"} aria-hidden="true">
                <img
                  src="/assets/icon-opal-heart.svg"
                  alt=""
                  width={28}
                  height={28}
                  className={"h-[26px] w-[26px] [filter:drop-shadow(0_3px_10px_rgba(179,162,254,.28))]"}
                />
              </span>
              <p className={"font-serif text-[clamp(1.45rem,2.2vw,1.65rem)] font-semibold leading-[1.15] text-blue"}>Your invitation</p>
              <p className={"max-w-[28ch] text-[.9rem] leading-[1.72] text-muted"}>
                Start with a conversation — we&apos;ll figure out together
                what feels right for you.
              </p>
              <div className={"about-close-btns mt-[.55rem] flex w-full flex-col gap-3"}>
                <Link
                  href="/bookings"
                  className={cn(
                    "inline-flex items-center justify-center gap-[.45rem] px-7 py-[.85rem] rounded-[4px] text-[.72rem] font-bold tracking-[.08em] uppercase border-2 border-transparent cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none bg-pastel-lilac text-white border-pastel-lilac shadow-[0_8px_24px_rgba(179,162,254,.28)] hover:bg-[#a894fc] hover:border-[#a894fc]",
                    "w-full normal-case tracking-[.02em] text-[.82rem] font-semibold",
                  )}
                >
                  Book a session
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "inline-flex items-center justify-center gap-[.45rem] px-7 py-[.85rem] rounded-[4px] text-[.72rem] font-bold tracking-[.08em] uppercase border-2 border-transparent cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none bg-transparent text-blue border-pastel-lilac hover:bg-pastel-lilac/8",
                    "w-full normal-case tracking-[.02em] text-[.82rem] font-semibold bg-white/78 backdrop-blur-[8px]",
                  )}
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
