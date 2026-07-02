"use client";

import { OpalSep } from "@/components/ui/OpalSep";
import { Reveal } from "@/components/ui/Reveal";
import { Select } from "@/components/ui/Select";
import { SocialLink, hasSocialLinks } from "@/components/ui/SocialLink";
import { cn } from "@/lib/cn";
import { contactServiceOptions, site } from "@/lib/site";

type ContactProps = {
  offsetHeader?: boolean;
};

export function Contact({ offsetHeader }: ContactProps) {
  return (
    <section
      className={cn(
        "contact-section relative isolate overflow-hidden border-y border-pastel-lilac/10 bg-[linear-gradient(180deg,#fcfbff_0%,#faf8ff_48%,#f8f6fc_100%)]",
        offsetHeader
          ? "pb-[var(--section-y)] pt-[var(--page-offset)]"
          : "py-[var(--section-y)]",
      )}
      id="contact"
    >
      <div className={"contact-ambient pointer-events-none absolute inset-0"} aria-hidden="true" />
      <div className={cn("site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]", "contact-grid grid items-stretch gap-[clamp(2.5rem,5vw,4.5rem)] lg:grid-cols-[minmax(280px,.95fr)_minmax(320px,1.05fr)] max-lg:grid-cols-1 max-lg:gap-10")}>
        <Reveal variant="left" className={"contact-intro flex flex-col max-lg:text-center"}>
          <div className={"contact-intro-panel relative flex flex-1 flex-col p-0"}>
            <header className={"contact-intro-head relative mb-[.15rem]"}>
              <p className={"inline-flex items-center gap-2 h-11 px-[.9rem] mb-4 text-[.86rem] font-bold tracking-[.18em] uppercase text-[#9580f5] bg-white/82 border border-pastel-lilac/22 rounded-full shadow-[0_8px_24px_rgba(179,162,254,.1)] before:content-[''] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gradient-to-br before:from-pastel-lilac before:to-pastel-mint before:shrink-0 max-lg:mx-auto"}>Next steps</p>
              <h2 className={"mb-[.4rem] text-[clamp(2.25rem,4.4vw,3.1rem)] leading-[1.04] tracking-[-.03em] text-blue"}>
                Ready to take
                <br />
                <span className={"mt-[.12rem] block text-[clamp(2.5rem,4.8vw,3.35rem)] leading-[.98] text-[#9580f5]"}>the next step?</span>
              </h2>
              <OpalSep wide className={"my-[1.25rem] mb-[1.5rem] w-[min(440px,100%)] max-lg:mx-auto"} />
            </header>
            <p className={"contact-lead mb-[2.35rem] max-w-[38ch] text-[clamp(1.02rem,1.45vw,1.1rem)] leading-[1.85] text-muted max-lg:mx-auto"}>
              I&apos;d love to support you on your journey. Get in touch or book
              a session today.
            </p>
            <div className={"contact-channels flex flex-col gap-[clamp(1.85rem,3.5vw,2.35rem)] max-lg:mx-auto max-lg:w-[min(480px,100%)] max-lg:items-center max-lg:text-center"}>
              <a className={"contact-email flex max-w-[36ch] flex-col gap-[.55rem]"} href={`mailto:${site.email}`}>
                <span className={"contact-email-label text-[.66rem] font-bold uppercase tracking-[.16em] text-[#9580f5]"}>Email me directly</span>
                <span className={"contact-email-address font-serif text-[clamp(1.2rem,1.65vw,1.42rem)] font-semibold leading-[1.3] tracking-[.01em] text-blue transition-colors hover:text-[#152570]"}>{site.email}</span>
                <span className={"contact-email-note text-[.86rem] leading-[1.6] text-muted"}>
                  The simplest way to start — I&apos;ll reply personally.
                </span>
              </a>
              {hasSocialLinks() ? (
              <div className={"contact-social-group flex flex-col gap-[.85rem]"}>
                <span className={"contact-social-label text-[.66rem] font-bold uppercase tracking-[.16em] text-[#9580f5]"}>Or find me on social</span>
                <div className={"contact-social flex flex-wrap gap-[.65rem] max-lg:justify-center"}>
                  <SocialLink
                    network="facebook"
                    showLabel
                    className={"contact-social-link inline-flex items-center gap-[.6rem] rounded-full border border-pastel-lilac/16 bg-white/50 px-[1.15rem] py-[.62rem] pl-[.85rem] transition-[background,border-color,transform] duration-[250ms] ease-opal hover:-translate-y-px hover:border-pastel-lilac/32 hover:bg-white/88 motion-reduce:hover:translate-y-0"}
                  />
                  <SocialLink
                    network="instagram"
                    showLabel
                    className={"contact-social-link inline-flex items-center gap-[.6rem] rounded-full border border-pastel-lilac/16 bg-white/50 px-[1.15rem] py-[.62rem] pl-[.85rem] transition-[background,border-color,transform] duration-[250ms] ease-opal hover:-translate-y-px hover:border-pastel-lilac/32 hover:bg-white/88 motion-reduce:hover:translate-y-0"}
                  />
                </div>
              </div>
              ) : null}
              <p className={"contact-location flex max-w-[34ch] items-start gap-[.8rem] text-[.92rem] leading-[1.68] text-muted max-lg:justify-center"}>
                <img
                  src="/assets/icon-contact-location.svg"
                  alt=""
                  aria-hidden="true"
                  className={"mt-[.12rem] h-5 w-5 shrink-0 opacity-82"}
                />
                <span>
                  <strong className={"mb-[.2rem] block text-[.68rem] font-bold uppercase tracking-[.12em] text-blue"}>In person</strong>
                  Sessions in Chichester &amp; Eastergate, West Sussex
                </span>
              </p>
            </div>
            <div className={"contact-trust relative mt-[clamp(1.75rem,3vw,2.25rem)] flex flex-wrap gap-x-[1.35rem] gap-y-[.55rem] pt-[1.6rem] max-lg:justify-center"} aria-label="Contact reassurance">
              <span className={"inline-flex items-center gap-[.45rem] text-[.76rem] font-semibold tracking-[.02em] text-blue"}>Reply within 24 hours</span>
              <span className={"inline-flex items-center gap-[.45rem] text-[.76rem] font-semibold tracking-[.02em] text-blue"}>In person &amp; online</span>
              <span className={"inline-flex items-center gap-[.45rem] text-[.76rem] font-semibold tracking-[.02em] text-blue"}>West Sussex</span>
            </div>
          </div>
        </Reveal>
        <Reveal variant="right" delay={120} className={"contact-form-wrap relative isolate overflow-hidden rounded-[24px] border-2 border-transparent bg-clip-padding bg-[linear-gradient(180deg,#fefffe_0%,#faf8ff_55%,#f6faf7_100%)] px-[clamp(3.1rem,5.25vw,3.85rem)] py-[clamp(3.35rem,5.75vw,4.25rem)] shadow-[0_28px_72px_rgba(179,162,254,.12),0_14px_36px_rgba(93,138,111,.08)]"} id="contact-form">
          <form
            className={"contact-form relative z-[1] flex flex-col gap-[1.15rem]"}
            action={`mailto:${site.email}`}
            method="post"
            encType="text/plain"
          >
            <h3 className={"font-serif text-[clamp(1.55rem,2.2vw,1.85rem)] leading-[1.15] text-blue"}>I&apos;d love to hear from you</h3>
            <p className={"form-note text-[.9rem] leading-[1.7] text-muted"}>
              Share as much or as little as you like — there&apos;s no pressure,
              and every message is met with warmth and care.
            </p>
            <p className={"form-promise mt-[-.25rem] inline-flex items-center gap-[.45rem] text-[.78rem] font-semibold text-[#9580f5]"}>
              I&apos;ll reply personally within 24 hours
            </p>
            <div className={"form-field flex flex-col gap-[.45rem]"}>
              <label htmlFor="cf-name" className={"text-[.72rem] font-bold uppercase tracking-[.08em] text-blue"}>
                Your name
              </label>
              <input
                type="text"
                id="cf-name"
                name="name"
                required
                autoComplete="name"
                placeholder="How should I address you?"
                className={"w-full rounded-xl border border-pastel-lilac/22 bg-[#faf9ff] px-[1.05rem] py-[.85rem] text-[.92rem] text-text transition-[border-color,box-shadow,background] duration-200 placeholder:text-[rgba(92,88,120,.45)] focus:border-pastel-lilac focus:bg-white focus:outline-none focus:ring-[3px] focus:ring-pastel-lilac/14"}
              />
            </div>
            <div className={"form-field flex flex-col gap-[.45rem]"}>
              <label htmlFor="cf-email" className={"text-[.72rem] font-bold uppercase tracking-[.08em] text-blue"}>
                Your email
              </label>
              <input
                type="email"
                id="cf-email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@email.com"
                className={"w-full rounded-xl border border-pastel-lilac/22 bg-[#faf9ff] px-[1.05rem] py-[.85rem] text-[.92rem] text-text transition-[border-color,box-shadow,background] duration-200 placeholder:text-[rgba(92,88,120,.45)] focus:border-pastel-lilac focus:bg-white focus:outline-none focus:ring-[3px] focus:ring-pastel-lilac/14"}
              />
              <span className={"field-hint mt-[-.15rem] text-[.76rem] font-normal normal-case tracking-normal text-muted"}>
                I&apos;ll use this to reply to you directly
              </span>
            </div>
            <Select
              id="cf-service"
              name="service"
              label="What are you interested in?"
              options={contactServiceOptions}
              placeholder="Select an option"
            />
            <div className={"form-field flex flex-col gap-[.45rem]"}>
              <label htmlFor="cf-message" className={"text-[.72rem] font-bold uppercase tracking-[.08em] text-blue"}>
                Your message
              </label>
              <textarea
                id="cf-message"
                name="message"
                required
                placeholder="Tell me a little about where you are and what kind of support you're looking for…"
                className={cn("w-full rounded-xl border border-pastel-lilac/22 bg-[#faf9ff] px-[1.05rem] py-[.85rem] text-[.92rem] text-text transition-[border-color,box-shadow,background] duration-200 placeholder:text-[rgba(92,88,120,.45)] focus:border-pastel-lilac focus:bg-white focus:outline-none focus:ring-[3px] focus:ring-pastel-lilac/14", "min-h-[140px] resize-y")}
              />
            </div>
            <button
              type="submit"
              className={cn(
                "inline-flex items-center justify-center gap-[.45rem] px-7 py-[.85rem] rounded-[4px] text-[.72rem] font-bold tracking-[.08em] uppercase border-2 border-transparent cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none bg-pastel-lilac text-white border-pastel-lilac shadow-[0_8px_24px_rgba(179,162,254,.28)] hover:bg-[#a894fc] hover:border-[#a894fc]",
                "self-stretch mt-2 px-7 py-4 text-center text-[.85rem] font-semibold normal-case tracking-[.02em]",
              )}
            >
              Send my message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
