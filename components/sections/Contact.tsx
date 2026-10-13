"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { OpalSep } from "@/components/ui/OpalSep";
import { Reveal } from "@/components/ui/Reveal";
import { Select } from "@/components/ui/Select";
import { SocialLink, useHasSocialLinks } from "@/components/ui/SocialLink";
import { useSiteSettings } from "@/components/layout/LayoutDataContext";
import { cn } from "@/lib/cn";
import { textList, type ContactPage } from "@/lib/cms-types";

type SessionIcon = NonNullable<ContactPage["contact"]["sessionOptions"]>[number]["icon"];

const sessionIcons: Record<SessionIcon, ReactNode> = {
  online: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
    </>
  ),
  location: (
    <>
      <path d="M12 21s7-5.6 7-10.5a7 7 0 10-14 0C5 15.4 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </>
  ),
  message: <path d="M4 5h16v11H9l-5 4V5z" />,
};

type ContactProps = {
  content: ContactPage;
  offsetHeader?: boolean;
};

export function Contact({ content, offsetHeader }: ContactProps) {
  const { email } = useSiteSettings();
  const showSocial = useHasSocialLinks();
  const intro = content.contact;
  const form = content.form;
  const trust = textList(intro.trust);
  const sessionOptions = intro.sessionOptions ?? [];
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
              <h2 className={"type-heading mb-[.4rem]"}>
                {intro.title}
                <span className={"type-script mt-[.12rem] block"}>{intro.script}</span>
              </h2>
              <OpalSep wide className={"my-[1.25rem] mb-[1.5rem] w-[min(440px,100%)] max-lg:mx-auto"} />
            </header>
            <p className={"contact-lead type-body mb-[2.35rem] max-w-[38ch] max-lg:mx-auto"}>
              {intro.lead}
            </p>
            <div className={"contact-channels flex flex-col gap-[clamp(1.85rem,3.5vw,2.35rem)] max-lg:mx-auto max-lg:w-[min(480px,100%)] max-lg:items-center max-lg:text-center"}>
              <a className={"contact-email flex max-w-[36ch] flex-col gap-[.3rem]"} href={`mailto:${email}`}>
                <span className={"contact-email-label type-title"}>{intro.emailLabel}</span>
                <span className={"contact-email-address type-body text-blue! underline decoration-pastel-lilac/50 underline-offset-4 transition-colors hover:text-[#152570]!"}>{email}</span>
                <span className={"contact-email-note type-body"}>
                  {intro.emailNote}
                </span>
              </a>
              {showSocial ? (
              <div className={"contact-social-group flex flex-col gap-[.85rem]"}>
                <span className={"contact-social-label type-title"}>{intro.socialLabel}</span>
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
                  <SocialLink
                    network="youtube"
                    showLabel
                    className={"contact-social-link inline-flex items-center gap-[.6rem] rounded-full border border-pastel-lilac/16 bg-white/50 px-[1.15rem] py-[.62rem] pl-[.85rem] transition-[background,border-color,transform] duration-[250ms] ease-opal hover:-translate-y-px hover:border-pastel-lilac/32 hover:bg-white/88 motion-reduce:hover:translate-y-0"}
                  />
                </div>
              </div>
              ) : null}
              {sessionOptions.map((option) => (
                <p key={option.id ?? option.title} className={"contact-location type-body flex max-w-[34ch] items-start gap-[.8rem] max-lg:justify-center"}>
                  <svg
                    aria-hidden="true"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9580f5"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={"mt-[.3rem] h-5 w-5 shrink-0"}
                  >
                    {sessionIcons[option.icon]}
                  </svg>
                  <span>
                    <strong className={"type-title mb-[.2rem] block"}>{option.title}</strong>
                    {option.text}
                  </span>
                </p>
              ))}
            </div>
            <div className={"contact-trust relative mt-[clamp(1.75rem,3vw,2.25rem)] flex flex-wrap gap-x-[1.35rem] gap-y-[.55rem] pt-[1.6rem] max-lg:justify-center"} aria-label="Contact reassurance">
              {trust.map((item) => (
                <span key={item} className={"type-body inline-flex items-center gap-[.45rem]"}>{item}</span>
              ))}
            </div>
            <Link
              href="/bookings"
              className={"mt-[1.75rem] inline-flex items-center justify-center self-start rounded-[4px] border-2 border-pastel-lilac bg-pastel-lilac px-8 py-[.95rem] text-[.74rem] font-bold uppercase tracking-[.1em] text-white shadow-[0_12px_36px_rgba(179,162,254,.34),0_4px_12px_rgba(179,162,254,.18)] transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 hover:border-[#a894fc] hover:bg-[#a894fc] hover:shadow-[0_16px_42px_rgba(179,162,254,.4),0_6px_16px_rgba(179,162,254,.22)] motion-reduce:hover:translate-y-0 max-lg:self-center"}
            >
              Book now
            </Link>
          </div>
        </Reveal>
        <Reveal variant="right" delay={120} className={"contact-form-wrap relative isolate overflow-hidden rounded-[24px] border-2 border-transparent bg-clip-padding bg-[linear-gradient(180deg,#fefffe_0%,#faf8ff_55%,#f6faf7_100%)] px-[clamp(3.1rem,5.25vw,3.85rem)] py-[clamp(3.35rem,5.75vw,4.25rem)] shadow-[0_28px_72px_rgba(179,162,254,.12),0_14px_36px_rgba(93,138,111,.08)]"} id="contact-form">
          <form
            className={"contact-form relative z-[1] flex flex-col gap-[1.15rem]"}
            action={`mailto:${email}`}
            method="post"
            encType="text/plain"
          >
            <h3 className={"type-title"}>{form.title}</h3>
            <p className={"form-note type-body"}>
              {form.note}
            </p>
            <p className={"form-promise type-body mt-[-.25rem] inline-flex items-center gap-[.45rem] text-[#9580f5]!"}>
              {form.promise}
            </p>
            <div className={"form-field flex flex-col gap-[.45rem]"}>
              <label htmlFor="cf-name" className={"type-label text-blue!"}>
                {form.nameLabel}
              </label>
              <input
                type="text"
                id="cf-name"
                name="name"
                required
                autoComplete="name"
                placeholder={form.namePlaceholder ?? undefined}
                className={"w-full rounded-xl border border-pastel-lilac/22 bg-[#faf9ff] px-[1.05rem] py-[.85rem] text-[.92rem] text-text transition-[border-color,box-shadow,background] duration-200 placeholder:text-[rgba(92,88,120,.45)] focus:border-pastel-lilac focus:bg-white focus:outline-none focus:ring-[3px] focus:ring-pastel-lilac/14"}
              />
            </div>
            <div className={"form-field flex flex-col gap-[.45rem]"}>
              <label htmlFor="cf-email" className={"type-label text-blue!"}>
                {form.emailLabel}
              </label>
              <input
                type="email"
                id="cf-email"
                name="email"
                required
                autoComplete="email"
                placeholder={form.emailPlaceholder ?? undefined}
                className={"w-full rounded-xl border border-pastel-lilac/22 bg-[#faf9ff] px-[1.05rem] py-[.85rem] text-[.92rem] text-text transition-[border-color,box-shadow,background] duration-200 placeholder:text-[rgba(92,88,120,.45)] focus:border-pastel-lilac focus:bg-white focus:outline-none focus:ring-[3px] focus:ring-pastel-lilac/14"}
              />
              {form.emailHint ? (
                <span className={"field-hint type-body mt-[-.15rem]"}>
                  {form.emailHint}
                </span>
              ) : null}
            </div>
            <Select
              id="cf-service"
              name="service"
              label={form.serviceLabel}
              options={form.serviceOptions ?? []}
              placeholder={form.servicePlaceholder}
            />
            <div className={"form-field flex flex-col gap-[.45rem]"}>
              <label htmlFor="cf-message" className={"type-label text-blue!"}>
                {form.messageLabel}
              </label>
              <textarea
                id="cf-message"
                name="message"
                required
                placeholder={form.messagePlaceholder ?? undefined}
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
              {form.submitLabel}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
