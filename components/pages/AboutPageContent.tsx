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
    text: "Sessions shaped around your story — never a template. We start where you are, and let the conversation find its own shape.",
    accent: "personal",
  },
  {
    icon: "/assets/icon-value-holistic.svg",
    title: "Many strands",
    text: "Coaching, intuitive guidance and gentle healing — woven in when it helps, left aside when it doesn't.",
    accent: "holistic",
  },
  {
    icon: "/assets/icon-value-pace.svg",
    title: "At your pace",
    text: "Unhurried, confidential support with no pressure to perform. There is room to pause, breathe, and begin again.",
    accent: "pace",
  },
] as const;

const pathSteps = [
  {
    step: "01",
    title: "Practical coaching",
    text: "Grounded conversations, honest reflection and tools you can use in everyday life. We slow things down enough to notice what's true — then find a next step that feels doable, not overwhelming.",
    note: "Ideal when you're stuck, undecided, or ready for clearer direction.",
    icon: "/assets/icon-value-personal.svg",
    accent: "coaching",
    tag: "Clarity",
  },
  {
    step: "02",
    title: "Intuitive guidance",
    text: "Tarot and inner wisdom woven in when it feels supportive — never forced. Sometimes a fresh perspective helps you see what your mind has been circling, so you can move with more trust.",
    note: "Offered gently, only when it deepens the conversation.",
    icon: "/assets/icon-value-holistic.svg",
    accent: "tarot",
    tag: "Perspective",
  },
  {
    step: "03",
    title: "Gentle healing",
    text: "Reiki and restful practices to help your body and mind feel safe again. There's no need to perform or explain everything — rest itself can be the work.",
    note: "A soft place to land when you've been carrying too much.",
    icon: "/assets/icon-value-pace.svg",
    accent: "reiki",
    tag: "Rest",
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
                        src="/assets/about-story-room.jpg"
                        alt="A calm session space with a wooden table, chairs and soft natural light"
                        width={480}
                        height={640}
                        className={"block aspect-[3/4] w-full rounded-[16px] bg-white object-cover object-center"}
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

        <section className={cn("about-essence relative isolate overflow-hidden border-y border-pastel-lilac/10", "py-[var(--section-y)]")}>
          <div className="about-essence-sky pointer-events-none absolute inset-0 z-0" aria-hidden="true" />

          <div className="site-wrap relative z-[1] w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]">
            <div className="about-essence-layout">
              <Reveal className="about-essence-lead">
                <p className="about-essence-kicker">What guides me</p>
                <h2>
                  Three threads,{" "}
                  <span className="font-script font-normal text-[#9580f5] leading-[1.05]">one conversation</span>
                </h2>
                <OpalSep wide className="about-essence-sep" />
                <p className="about-essence-intro">
                  The work is never one fixed method. It is a gentle weaving —
                  personal, holistic, and always at a pace that feels kind.
                </p>
              </Reveal>

              <div className="about-essence-braid" aria-label="Guiding principles">
                <span className="about-essence-braid-line" aria-hidden="true" />
                <span className="about-essence-watermark font-script" aria-hidden="true">
                  woven together
                </span>

                {essenceItems.map((item, index) => (
                  <Reveal key={item.title} delay={index * 110} variant="up" fill>
                    <article
                      className={cn(
                        "about-essence-thread",
                        `about-essence-thread--${item.accent}`,
                        `about-essence-thread--${index % 2 === 0 ? "a" : "b"}`,
                      )}
                    >
                      <span className="about-essence-thread-node" aria-hidden="true">
                        <DecorativeImage src={item.icon} width={26} height={26} />
                      </span>
                      <div className="about-essence-thread-copy">
                        <p className="about-essence-thread-index">{String(index + 1).padStart(2, "0")}</p>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={cn("about-path relative isolate overflow-hidden border-t border-pastel-lilac/12", "py-[var(--section-y)]")}>
          <div className="about-path-sky pointer-events-none absolute inset-0 z-0" aria-hidden="true" />
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

          <div className="site-wrap relative z-[2] w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]">
            <Reveal className="about-path-head mx-auto mb-[clamp(2.5rem,5vw,3.5rem)] max-w-[min(640px,100%)] text-center">
              <p className="about-path-kicker">My approach</p>
              <h2>
                How I work <span className="font-script font-normal text-[#9580f5] leading-[1.05]">with you</span>
              </h2>
              <OpalSep center wide />
              <p className="about-path-intro">
                A calm, collaborative space — practical when you need direction,
                intuitive when you need perspective, gentle when you need rest.
              </p>
            </Reveal>

            <div className="about-path-stage">
              <ul className="about-path-strands">
                {pathSteps.map((item, index) => (
                  <li key={item.step}>
                    <Reveal delay={index * 100} variant="up" fill>
                      <article className={cn("about-path-strand", `about-path-strand--${item.accent}`)}>
                        <div className="about-path-strand-top">
                          <span className="about-path-strand-icon" aria-hidden="true">
                            <DecorativeImage src={item.icon} width={28} height={28} />
                          </span>
                          <span className="about-path-strand-index" aria-hidden="true">
                            {item.step}
                          </span>
                        </div>
                        <p className="about-path-strand-tag">{item.tag}</p>
                        <h3>{item.title}</h3>
                        <p className="about-path-strand-text">{item.text}</p>
                        <p className="about-path-strand-note">{item.note}</p>
                      </article>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ClosingInvitationCta />
      </div>
    </div>
  );
}
