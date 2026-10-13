import { AboutHero } from "@/components/hero/AboutHero";
import { ClosingInvitationCta } from "@/components/pages/ClosingInvitationCta";
import { DecorativeImage } from "@/components/ui/DecorativeImage";
import { OpalSep } from "@/components/ui/OpalSep";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { asMedia, textList, valueIconSrc, type AboutPage, type ClosingCta } from "@/lib/cms-types";

type AboutPageContentProps = {
  content: AboutPage;
  closingCta: ClosingCta;
};

export function AboutPageContent({ content, closingCta }: AboutPageContentProps) {
  const { story, essence, path } = content;
  const storyImage = asMedia(story.image);

  return (
    <div className="inner-page inner-page--about">
      <AboutHero content={content.hero} />

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
              <h2 className={"type-heading"}>
                {story.title} <span className={"type-script inline!"}>{story.script}</span>
              </h2>
              <OpalSep center wide />
              <p className={"type-body about-story-sub mt-[clamp(1.35rem,2.5vw,1.75rem)] mx-auto max-w-[min(44ch,100%)] text-center"}>
                {story.sub}
              </p>
            </header>

            <div className={"about-story-body relative mt-[clamp(3.75rem,7.5vw,5.75rem)] pt-[clamp(2.5rem,4.5vw,3.5rem)] max-md:mt-[clamp(3rem,6vw,4.5rem)] max-md:pt-[clamp(2rem,4vw,2.75rem)]"}>
              <div className={cn("opal-panel", "about-story-sheet rounded-[28px] p-[clamp(2.25rem,4vw,3.25rem)] max-md:p-[clamp(1.75rem,4vw,2.25rem)] max-w-[1200px] mx-auto")}>
                <div className={cn("opal-panel__inner", "about-story-sheet-inner grid items-center gap-[clamp(2rem,4.5vw,3.5rem)] max-md:grid-cols-1 max-md:gap-9 md:grid-cols-[minmax(300px,1.08fr)_minmax(260px,.92fr)]")}>
                  <div className={"about-story-copy relative z-[1] flex flex-col"}>
                    <p className={"type-body about-story-lead max-w-[46ch]"}>
                      {story.lead}
                    </p>
                    <div className={"about-story-rule my-[clamp(1.35rem,2.4vw,1.75rem)] h-0.5 w-[min(120px,36%)] rounded-[2px] bg-[linear-gradient(90deg,rgba(179,162,254,.55)_0%,rgba(188,228,222,.7)_50%,rgba(179,162,254,.35)_100%)] max-md:w-[min(100px,40%)]"} aria-hidden="true" />
                    <p className={"type-body about-story-detail max-w-[46ch]"}>
                      {story.detail}
                    </p>
                    <div className={"about-story-facts mt-[clamp(1.5rem,2.8vw,2rem)] flex flex-wrap gap-x-[1.25rem] gap-y-2 border-t border-pastel-lilac/12 pt-[clamp(1.35rem,2.5vw,1.65rem)]"} aria-label="Session details">
                      {textList(story.facts).map((item) => (
                        <span key={item} className={"type-label inline-flex items-center gap-[.45rem]"}>{item}</span>
                      ))}
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
                      {storyImage?.url ? (
                        <img
                          src={storyImage.url}
                          alt={storyImage.alt}
                          width={storyImage.width ?? 480}
                          height={storyImage.height ?? 640}
                          className={"block aspect-[3/4] w-full rounded-[16px] bg-white object-cover object-center"}
                        />
                      ) : null}
                    </div>
                    <figcaption className={"type-label about-story-tag absolute left-1/2 bottom-[5%] z-[4] max-w-[calc(100%-1.5rem)] -translate-x-1/2 rounded-full border border-pastel-lilac/20 bg-white/95 px-[1.05rem] py-[.58rem] text-center whitespace-nowrap shadow-[0_10px_28px_rgba(179,162,254,.12)] backdrop-blur-[8px] max-md:whitespace-normal"}>
                      {story.caption}
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
                <h2 className="type-heading">
                  {essence.title}{" "}
                  <span className="type-script inline!">{essence.script}</span>
                </h2>
                <OpalSep wide className="about-essence-sep" />
                <p className="about-essence-intro type-body">
                  {essence.intro}
                </p>
              </Reveal>

              <div className="about-essence-braid" aria-label="Guiding principles">
                <span className="about-essence-braid-line" aria-hidden="true" />
                {essence.watermark ? (
                  <span className="about-essence-watermark font-script" aria-hidden="true">
                    {essence.watermark}
                  </span>
                ) : null}

                {(essence.items ?? []).map((item, index) => (
                  <Reveal key={item.id ?? item.title} delay={index * 110} variant="up" fill>
                    <article
                      className={cn(
                        "about-essence-thread",
                        `about-essence-thread--${item.accent}`,
                        `about-essence-thread--${index % 2 === 0 ? "a" : "b"}`,
                      )}
                    >
                      <span className="about-essence-thread-node" aria-hidden="true">
                        <DecorativeImage src={valueIconSrc[item.icon]} width={26} height={26} />
                      </span>
                      <div className="about-essence-thread-copy">
                        <h3 className="type-title">{item.title}</h3>
                        <p className="type-body">{item.text}</p>
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
              <h2 className="type-heading">
                {path.title} <span className="type-script inline!">{path.script}</span>
              </h2>
              <OpalSep center wide />
              <p className="about-path-intro type-body">
                {path.intro}
              </p>
            </Reveal>

            <div className="about-path-stage">
              <ul className="about-path-strands">
                {(path.steps ?? []).map((item, index) => (
                  <li key={item.id ?? item.title}>
                    <Reveal delay={index * 100} variant="up" fill>
                      <article className={cn("about-path-strand", `about-path-strand--${item.accent}`)}>
                        <div className="about-path-strand-top">
                          <span className="about-path-strand-icon" aria-hidden="true">
                            <DecorativeImage src={valueIconSrc[item.icon]} width={28} height={28} />
                          </span>
                        </div>
                        <h3 className="type-title">{item.title}</h3>
                        <p className="about-path-strand-text type-body">{item.text}</p>
                        <p className="about-path-strand-note type-body">{item.note}</p>
                      </article>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <ClosingInvitationCta content={closingCta} />
      </div>
    </div>
  );
}
