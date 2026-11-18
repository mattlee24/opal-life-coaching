import { AboutHero } from "@/components/hero/AboutHero";
import { DecorativeImage } from "@/components/ui/DecorativeImage";
import { OpalSep } from "@/components/ui/OpalSep";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { valueIconSrc, type AboutPage } from "@/lib/cms-types";

type AboutPageContentProps = {
  content: AboutPage;
};

/** Splits CMS text into paragraphs on blank lines (single line breaks are kept). */
function paragraphs(text: string) {
  return text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
}

export function AboutPageContent({ content }: AboutPageContentProps) {
  const { story, path } = content;
  const sections = story.sections ?? [];
  // A first section without a heading is the panel's introduction; the rest read as chapters.
  const intro = sections[0] && !sections[0].heading ? sections[0] : null;
  const chapters = intro ? sections.slice(1) : sections;

  return (
    <div className="inner-page inner-page--about">
      <AboutHero content={content.hero} />

      <div id="page-content">
        <section className={cn("about-story relative isolate overflow-clip border-t border-pastel-lilac/12 bg-white", "py-[var(--section-y)]")}>
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

            <div className={"about-story-body relative"}>
              <div className={cn("opal-panel", "about-story-sheet mx-auto")}>
                <div className={cn("opal-panel__inner", "about-story-sheet-inner")}>
                  {intro ? (
                    <div className={"about-story-intro"}>
                      <DecorativeImage src="/assets/icon-opal-heart.svg" width={30} height={30} className={"about-story-intro-icon"} />
                      {paragraphs(intro.text).map((text) => (
                        <p key={text}>{text}</p>
                      ))}
                    </div>
                  ) : null}

                  <ol className={"about-story-chapters"}>
                    {chapters.map((section, index) => (
                      <li key={section.id ?? index} className={"about-story-chapter"}>
                        <header className={"about-story-chapter-head"}>
                          <span className={"about-story-chapter-num"} aria-hidden="true">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          {section.heading ? <h3 className={"type-title"}>{section.heading}</h3> : null}
                          <span className={"about-story-rule"} aria-hidden="true" />
                        </header>
                        <div className={"about-story-chapter-text"}>
                          {paragraphs(section.text).map((text) => (
                            <p key={text} className={"type-body"}>{text}</p>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
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
      </div>
    </div>
  );
}
