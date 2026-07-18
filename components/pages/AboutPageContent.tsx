import Link from "next/link";
import { AboutHero } from "@/components/hero/AboutHero";
import { ClosingInvitationCta } from "@/components/pages/ClosingInvitationCta";
import { DecorativeImage } from "@/components/ui/DecorativeImage";
import { OpalSep } from "@/components/ui/OpalSep";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const essenceItems = [
  {
    icon: "/assets/icon-value-personal.svg",
    title: "Entirely personal",
    text: "Sessions shaped around your story — never a template.",
    vine: "vine-panel--card",
  },
  {
    icon: "/assets/icon-value-holistic.svg",
    title: "Many strands",
    text: "Coaching, intuitive guidance and gentle healing — woven in when it helps.",
    vine: "vine-panel--content",
  },
  {
    icon: "/assets/icon-value-pace.svg",
    title: "At your pace",
    text: "Unhurried, confidential support with no pressure to perform.",
    vine: "vine-panel--slim",
  },
] as const;

const pathSteps = [
  {
    step: "01",
    title: "Practical coaching",
    text: "Grounded conversations, honest reflection and tools you can use in everyday life.",
    icon: "/assets/svc-icon-coaching.png",
    accent: "coaching",
  },
  {
    step: "02",
    title: "Intuitive guidance",
    text: "Tarot and inner wisdom woven in when it feels supportive — never forced.",
    icon: "/assets/svc-icon-tarot.png",
    accent: "tarot",
  },
  {
    step: "03",
    title: "Gentle healing",
    text: "Reiki and restful practices to help your body and mind feel safe again.",
    icon: "/assets/svc-icon-reiki.png",
    accent: "reiki",
  },
] as const;

export function AboutPageContent() {
  return (
    <div className="inner-page inner-page--about">
      <AboutHero />

      <div id="page-content">
        <section className={cn("about-story relative isolate overflow-hidden border-t border-pastel-lilac/12 bg-white", "py-[var(--section-y)]")}>
          <div
            className={cn("about-story-scene pointer-events-none absolute inset-0 z-0", "about-story-scene--meet")}
            aria-hidden="true"
          />
          <div
            className={cn("about-story-scene pointer-events-none absolute inset-0 z-0", "about-story-scene--faqs")}
            aria-hidden="true"
          />
          <div className={"about-story-ambient pointer-events-none absolute inset-0 z-[1]"} aria-hidden="true" />
          <div className={cn("site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]", "about-story-inner relative z-[2] w-full")}>
            <header className={"about-story-head mb-[clamp(2.25rem,4.5vw,3rem)] text-center"}>
              <p className={"inline-flex items-center justify-center h-[34px] px-[.85rem] text-[.68rem] font-bold tracking-[.18em] uppercase leading-none text-[#9580f5] mb-4 bg-white/55 border border-pastel-lilac/20 rounded-full box-border"}>My story</p>
              <h2 className={"text-[clamp(2.05rem,4vw,2.85rem)] leading-[1.08]"}>
                Warmth, intuition &amp; <span className={"font-script font-normal text-pastel-lilac leading-[1.1]"}>real life</span>
              </h2>
              <OpalSep center wide />
              <p className={"about-story-sub mt-[clamp(1.35rem,2.5vw,1.75rem)] mx-auto max-w-[min(44ch,100%)] text-center font-serif text-[clamp(1.2rem,2vw,1.45rem)] font-medium leading-[1.62] text-muted"}>
                I&apos;m not here to fix you. You&apos;re not broken.
                I&apos;m here to walk beside you while you find your footing
                again.
              </p>
            </header>

            <div className={"about-story-body relative mt-[clamp(3.75rem,7.5vw,5.75rem)] pt-[clamp(2.5rem,4.5vw,3.5rem)] max-md:mt-[clamp(3rem,6vw,4.5rem)] max-md:pt-[clamp(2rem,4vw,2.75rem)]"}>
              <div className={cn("opal-panel", "about-story-sheet rounded-[28px] p-[clamp(2.25rem,4vw,3.25rem)] max-md:p-[clamp(1.75rem,4vw,2.25rem)] max-w-[1200px] mx-auto")}>
                <div className={cn("opal-panel__inner", "about-story-sheet-inner grid items-center gap-[clamp(2rem,4.5vw,3.5rem)] max-md:grid-cols-1 max-md:gap-9 md:grid-cols-[minmax(300px,1.08fr)_minmax(260px,.92fr)]")}>
                  <div className={"about-story-copy relative z-[1] flex flex-col"}>
                    <p className={"about-story-lead max-w-[46ch] font-serif text-[clamp(1.28rem,2.05vw,1.55rem)] font-medium leading-[1.72] text-blue first-letter:float-left first-letter:mr-[.12em] first-letter:mt-[.04em] first-letter:text-[3.05em] first-letter:font-semibold first-letter:leading-[.76] first-letter:text-[#9580f5]"}>
                      I came to this work after navigating my own seasons of
                      change — the kind that leave you questioning everything and
                      wondering if you&apos;re the only one who feels this way.
                      That experience taught me how much difference it makes when
                      someone meets you with genuine warmth, not judgement.
                    </p>
                    <div className={"about-story-rule my-[clamp(1.35rem,2.4vw,1.75rem)] h-0.5 w-[min(120px,36%)] rounded-[2px] bg-[linear-gradient(90deg,rgba(179,162,254,.55)_0%,rgba(188,228,222,.7)_50%,rgba(179,162,254,.35)_100%)] max-md:w-[min(100px,40%)]"} aria-hidden="true" />
                    <p className={"about-story-detail max-w-[46ch] text-[clamp(1rem,1.12vw,1.05rem)] leading-[1.92] text-muted"}>
                      Based in West Sussex, I offer sessions in Chichester and
                      Eastergate, as well as online coaching and tarot for
                      clients further afield. Everything is unhurried,
                      confidential and tailored to you.
                    </p>
                    <div className={"about-story-facts mt-[clamp(1.5rem,2.8vw,2rem)] flex flex-wrap gap-x-[1.25rem] gap-y-2 border-t border-pastel-lilac/12 pt-[clamp(1.35rem,2.5vw,1.65rem)]"} aria-label="Session details">
                      <span className={"inline-flex items-center gap-[.45rem] text-[.74rem] font-bold uppercase tracking-[.05em] text-blue"}>West Sussex</span>
                      <span className={"inline-flex items-center gap-[.45rem] text-[.74rem] font-bold uppercase tracking-[.05em] text-blue"}>In person &amp; online</span>
                      <span className={"inline-flex items-center gap-[.45rem] text-[.74rem] font-bold uppercase tracking-[.05em] text-blue"}>At your pace</span>
                    </div>
                  </div>

                  <figure className={"about-story-visual relative z-[1] justify-self-end w-full max-w-[min(420px,100%)] max-md:order-[-1] max-md:justify-self-center max-md:max-w-[min(380px,100%)]"}>
                    <span className={"about-story-visual-glow pointer-events-none absolute inset-[2%_-10%_-6%] rounded-full"} aria-hidden="true" />
                    <span
                      className={cn("about-story-visual-sprig pointer-events-none absolute z-[3] opacity-42 [filter:drop-shadow(0_4px_12px_rgba(179,162,254,.1))]", "about-story-visual-sprig--tl top-[-4%] left-[-8%] w-[min(56px,12vw)] rotate-[-14deg]")}
                      aria-hidden="true"
                    >
                      <DecorativeImage src="/assets/sprig-fern.svg" width={48} height={96} />
                    </span>
                    <span
                      className={cn("about-story-visual-sprig pointer-events-none absolute z-[3] opacity-42 [filter:drop-shadow(0_4px_12px_rgba(179,162,254,.1))]", "about-story-visual-sprig--br right-[-10%] bottom-[8%] w-[min(50px,10vw)] rotate-[16deg]")}
                      aria-hidden="true"
                    >
                      <DecorativeImage src="/assets/nature-leaf-opal.svg" width={80} height={80} />
                    </span>
                    <div className={"about-story-portrait relative z-[2] overflow-hidden rounded-[22px] bg-[linear-gradient(155deg,rgba(188,228,222,.5)_0%,rgba(179,162,254,.38)_50%,rgba(168,201,176,.45)_100%)] p-1.5 shadow-[0_24px_64px_rgba(179,162,254,.14),0_10px_28px_rgba(28,48,163,.07)] rotate-[-1.5deg] transition-transform duration-[550ms] ease-opal hover:rotate-0 hover:-translate-y-1 motion-reduce:hover:translate-y-0"}>
                      <img
                        src="/assets/cara-speaking.png"
                        alt="Cara speaking warmly with a client"
                        width={480}
                        height={560}
                        className={"block aspect-[3/4] w-full rounded-[16px] bg-white object-cover object-left scale-[1.14]"}
                      />
                    </div>
                    <figcaption className={"about-story-tag absolute left-1/2 bottom-[5%] z-[4] max-w-[calc(100%-1.5rem)] -translate-x-1/2 rounded-full border border-pastel-lilac/20 bg-white/95 px-[1.05rem] py-[.58rem] text-center font-serif text-[clamp(.9rem,1.15vw,1rem)] font-semibold leading-[1.2] whitespace-nowrap text-blue shadow-[0_10px_28px_rgba(179,162,254,.12)] backdrop-blur-[8px] max-md:whitespace-normal"}>
                      Real conversations, real support
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={cn("about-essence relative isolate overflow-hidden border-y border-pastel-lilac/10 bg-[linear-gradient(180deg,#f3f0fa_0%,#faf8ff_52%,#f6faf7_100%)]", "py-[var(--section-y)]")}>
          <div className={"site-wrap w-full max-w-[1200px] mx-auto px-[var(--page-x)]"}>
            <header className={"about-essence-head mb-[clamp(2.5rem,5vw,3.5rem)] text-center"}>
              <p className={"inline-flex items-center justify-center h-[34px] px-[.85rem] text-[.68rem] font-bold tracking-[.18em] uppercase leading-none text-[#9580f5] mb-4 bg-white/55 border border-pastel-lilac/20 rounded-full box-border"}>What guides me</p>
              <h2>
                Three threads, <span className={"font-script font-normal text-pastel-lilac leading-[1.1]"}>one conversation</span>
              </h2>
              <OpalSep center wide />
            </header>
            <div className={"about-essence-grid grid w-full items-stretch gap-[clamp(1.35rem,2.2vw,1.85rem)] max-md:max-w-[min(380px,100%)] max-md:mx-auto max-md:grid-cols-1 max-md:gap-[1.35rem] md:grid-cols-3"}>
              {essenceItems.map((item, index) => (
                <article
                  key={item.title}
                  className={cn(
                    "about-essence-card",
                    "vine-panel",
                    item.vine,
                    index === 1 && "-translate-y-3 max-md:translate-y-0",
                  )}
                >
                  <div className={cn("vine-panel__inner", "items-center justify-center gap-[.65rem] text-center relative pt-[.25rem]")}>
                    <span className={"about-essence-thread absolute top-[clamp(.75rem,1.4vw,1rem)] right-[clamp(.75rem,1.4vw,1rem)] font-serif text-[clamp(1.25rem,1.85vw,1.45rem)] font-semibold leading-none text-nature-sage/35"} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className={"about-essence-sprig pointer-events-none absolute top-[clamp(.65rem,1.2vw,.85rem)] left-[clamp(.65rem,1.2vw,.85rem)] w-[min(36px,8vw)] opacity-42 [filter:drop-shadow(0_3px_10px_rgba(179,162,254,.1))]"} aria-hidden="true">
                      <DecorativeImage src="/assets/nature-leaf-opal.svg" width={80} height={80} />
                    </span>
                    <div className={"about-essence-icon relative mb-[.35rem] flex h-[76px] w-[76px] items-center justify-center"}>
                      <span
                        className={cn(
                          "about-essence-icon-halo absolute inset-[2px] rounded-full shadow-[0_0_0_1px_rgba(179,162,254,.1),0_10px_26px_rgba(179,162,254,.1)]",
                          index === 0 &&
                            "bg-[radial-gradient(circle_at_50%_38%,#fff_0%,rgba(232,248,242,.95)_40%,rgba(188,228,222,.55)_70%,transparent_92%)]",
                          index === 1 &&
                            "bg-[radial-gradient(circle_at_50%_38%,#fff_0%,rgba(240,235,255,.95)_38%,rgba(212,235,228,.5)_68%,transparent_92%)]",
                          index === 2 &&
                            "bg-[radial-gradient(circle_at_50%_38%,#fff_0%,rgba(235,242,255,.95)_38%,rgba(212,235,228,.55)_68%,transparent_92%)]",
                        )}
                        aria-hidden="true"
                      />
                      <img
                        src={item.icon}
                        alt=""
                        width={40}
                        height={40}
                        className={"relative z-[1] h-auto w-[42px] [filter:drop-shadow(0_2px_8px_rgba(179,162,254,.12))]"}
                      />
                    </div>
                    <h3 className={"font-serif text-[clamp(1.35rem,2vw,1.55rem)] leading-[1.12] text-blue"}>{item.title}</h3>
                    <p className={"max-w-[26ch] text-[.9rem] leading-[1.72] text-muted"}>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={cn("about-path relative isolate overflow-hidden border-t border-pastel-lilac/12", "py-[var(--section-y)]")}>
          <div className="about-path-sky pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
          <div className="about-path-shapes pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
            <span className="about-path-shape about-path-shape--ring" />
            <span className="about-path-shape about-path-shape--ring-sm" />
            <span className="about-path-shape about-path-shape--blob" />
            <span className="about-path-shape about-path-shape--arc" />
            <span className="about-path-shape about-path-shape--diamond" />
          </div>
          <div className="about-path-orbs pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
            <span className="about-path-orb about-path-orb--a" />
            <span className="about-path-orb about-path-orb--b" />
            <span className="about-path-orb about-path-orb--c" />
          </div>
          <div className="about-path-ambient pointer-events-none absolute inset-0 z-0" aria-hidden="true" />

          <DecorativeImage
            src="/assets/sprig-delicate.svg"
            width={40}
            height={80}
            className="about-path-float about-path-float--tl pointer-events-none absolute z-[1] max-md:hidden"
          />
          <DecorativeImage
            src="/assets/sprig-fern.svg"
            width={48}
            height={96}
            className="about-path-float about-path-float--br pointer-events-none absolute z-[1] max-md:opacity-20"
          />

          <div className={"site-wrap relative z-[2] w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]"}>
            <Reveal className={"about-path-head mx-auto mb-[clamp(2.75rem,5.5vw,3.85rem)] max-w-[min(640px,100%)] text-center"}>
              <p className={"about-path-kicker"}>My approach</p>
              <h2>
                How I work <span className={"font-script font-normal text-[#9580f5] leading-[1.05]"}>with you</span>
              </h2>
              <OpalSep center wide />
              <p className={"about-path-intro"}>
                A calm, collaborative space — practical when you need direction,
                intuitive when you need perspective, gentle when you need rest.
              </p>
            </Reveal>

            <ol className={"about-path-flow"}>
              {pathSteps.map((item, index) => (
                <li
                  key={item.step}
                  className={cn(
                    "about-path-row",
                    index % 2 === 0 ? "about-path-row--left" : "about-path-row--right",
                    `about-path-row--${item.accent}`,
                  )}
                >
                  <div className="about-path-node" aria-hidden="true">
                    <span className="about-path-node-glow" />
                    <span className="about-path-node-ring" />
                    <span className="about-path-node-num">{item.step}</span>
                  </div>
                  <Reveal delay={index * 140} variant="up" className="about-path-card-wrap" fill>
                    <span className="about-path-card-stem" aria-hidden="true" />
                    <article className={cn("about-path-card", "opal-panel")}>
                      <div className={cn("opal-panel__inner", "about-path-card-inner")}>
                        <div className="about-path-card-icon" aria-hidden="true">
                          <span className="about-path-card-icon-halo" />
                          <DecorativeImage src={item.icon} width={30} height={30} className="relative z-[1]" />
                        </div>
                        <h3>{item.title}</h3>
                        <span className="about-path-card-rule" aria-hidden="true" />
                        <p>{item.text}</p>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <ClosingInvitationCta />
      </div>
    </div>
  );
}
