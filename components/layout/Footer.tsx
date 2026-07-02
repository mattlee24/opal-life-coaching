"use client";

import Link from "next/link";
import { OpalSep } from "@/components/ui/OpalSep";
import { Reveal } from "@/components/ui/Reveal";
import { SiteImage } from "@/components/ui/SiteImage";
import { SocialLink, hasSocialLinks } from "@/components/ui/SocialLink";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Cara" },
  { href: "/bookings", label: "Bookings" },
  { href: "/coaching", label: "Coaching" },
  { href: "/tarot", label: "Tarot" },
  { href: "/reiki", label: "Reiki" },
  { href: "/contact", label: "Contact" },
  { href: "/#faqs", label: "FAQs" },
] as const;

export function Footer() {
  return (
    <footer className={"site-footer relative isolate overflow-hidden bg-[linear-gradient(180deg,#f3f0fa_0%,#ebe4f9_42%,#e6def5_100%)] text-blue"}>
      <div className={"footer-ambient pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_100%,rgba(179,162,254,.06),transparent_72%)]"} aria-hidden="true" />
      <div className={"footer-nature pointer-events-none absolute inset-0 z-0 overflow-hidden"} aria-hidden="true">
        <img
          src="/assets/sprig-fern.svg"
          alt=""
          className={"footer-sprig absolute bottom-[clamp(5rem,12vh,8rem)] right-[clamp(.5rem,3vw,2.5rem)] w-[clamp(58px,6.5vw,84px)] scale-x-[-1] opacity-22 [filter:drop-shadow(0_6px_16px_rgba(179,162,254,.1))] max-lg:opacity-14"}
        />
      </div>
      <Reveal className={"footer-calm relative z-[2] px-0 pt-[clamp(5.5rem,11vw,7.5rem)] pb-[clamp(2.25rem,4.5vw,3rem)] text-center"}>
        <div className={cn("site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]", "footer-calm-inner relative mx-auto max-w-[580px] px-2")}>
          <h2 className={"mb-[.75rem] text-[clamp(2.15rem,4.2vw,3.05rem)] leading-[1.06] tracking-[-.025em] text-blue"}>
            You&apos;re welcome here
            <br />
            <span className={"font-script font-normal mt-[.2rem] block text-[clamp(2.05rem,4.2vw,2.75rem)] leading-[1.05] text-[#9580f5] [text-shadow:0_0_40px_rgba(255,255,255,.65)]"}>
              Take a breath. You&apos;re in the right place.
            </span>
          </h2>
          <p className={"mx-auto mb-[1.85rem] max-w-[44ch] text-[clamp(1rem,1.4vw,1.08rem)] leading-[1.82] text-muted"}>
            There&apos;s no rush here — whenever you feel ready, I&apos;m here
            to support you.
          </p>
          <OpalSep center wide />
        </div>
      </Reveal>
      <div className={cn("site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]", "footer-main relative z-[2] pb-[clamp(1.5rem,3vw,2rem)]")}>
        <div className={"footer-grid grid justify-items-center gap-[clamp(2rem,4vw,3.5rem)] py-[clamp(2.35rem,4.5vw,3rem)] pb-[clamp(1rem,2vw,1.25rem)] max-lg:grid-cols-1 max-lg:gap-4 md:grid-cols-[1.15fr_1fr_1fr]"}>
          <div className={"footer-brand flex w-[min(100%,34ch)] flex-col items-start text-left"}>
            <Link className={"footer-logo-wrap relative mb-[1.2rem] inline-block rounded-full bg-[linear-gradient(145deg,rgba(179,162,254,.45),rgba(188,228,222,.38)_50%,rgba(179,162,254,.35))] p-1 shadow-[0_10px_28px_rgba(179,162,254,.16)]"} href="/">
              <SiteImage
                src="/assets/logo-mark.png"
                alt="Opal Life Coaching"
                width={76}
                height={76}
                sizes="76px"
                className={"h-[76px] w-[76px] rounded-full bg-white object-cover shadow-[0_6px_20px_rgba(179,162,254,.14)]"}
              />
            </Link>
            <p className={"mb-[.65rem] text-[.9rem] leading-[1.72] text-muted"}>
              Holistic life coaching, Reiki healing and tarot readings — gentle,
              personal support for your journey.
            </p>
            <span className={"font-script font-normal mt-[.2rem] block text-[1.42rem] leading-[1.2] text-[#9580f5]"}>
              Everything is personal. Everything is at your pace.
            </span>
          </div>
          <nav className={"footer-col flex w-[min(100%,280px)] flex-col items-start text-left"} aria-label="Footer navigation">
            <h4 className={"relative mb-[1.15rem] pb-[.65rem] font-serif text-[1.3rem] font-semibold text-blue after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-9 after:rounded-[2px] after:bg-[linear-gradient(90deg,rgba(179,162,254,.7),rgba(188,228,222,.75))] after:content-['']"}>Explore</h4>
            <div className={"footer-links flex w-full flex-col items-start gap-2 md:block md:columns-2 md:[column-gap:1.75rem]"}>
              {footerLinks.map(({ href, label }) => (
                <Link key={href} href={href} className={"block break-inside-avoid py-[.2rem] text-[.88rem] text-muted transition-[color,transform] duration-200 ease-opal hover:translate-x-[3px] hover:text-blue"}>
                  {label}
                </Link>
              ))}
            </div>
          </nav>
          <div className={"footer-col flex w-[min(100%,280px)] flex-col items-start text-left"}>
            <h4 className={"relative mb-[1.15rem] pb-[.65rem] font-serif text-[1.3rem] font-semibold text-blue after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-9 after:rounded-[2px] after:bg-[linear-gradient(90deg,rgba(179,162,254,.7),rgba(188,228,222,.75))] after:content-['']"}>Get in touch</h4>
            <p className={"mb-[.6rem] text-[.88rem] leading-[1.65] text-muted"}>
              <a href={`mailto:${site.email}`} className={"border-b border-pastel-lilac/35 text-blue transition-[border-color,color] hover:border-[#9580f5]"}>
                {site.email}
              </a>
            </p>
            <p className={"mb-[.6rem] text-[.88rem] leading-[1.65] text-muted"}>Chichester &amp; Eastergate</p>
            <p className={"mb-[.6rem] text-[.88rem] leading-[1.65] text-muted"}>West Sussex</p>
            {hasSocialLinks() ? (
            <div className={"footer-social mt-[1.15rem] flex justify-start gap-[.7rem]"}>
              <SocialLink
                network="facebook"
                showLabel={false}
                className={"inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-pastel-lilac/22 bg-white/72 shadow-[0_6px_18px_rgba(179,162,254,.08)] transition-[background,border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-pastel-lilac/40 hover:bg-white hover:shadow-[0_10px_24px_rgba(179,162,254,.16)] motion-reduce:hover:translate-y-0"}
              />
              <SocialLink
                network="instagram"
                showLabel={false}
                className={"inline-flex h-[42px] w-[42px] items-center justify-center rounded-full border border-pastel-lilac/22 bg-white/72 shadow-[0_6px_18px_rgba(179,162,254,.08)] transition-[background,border-color,transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-pastel-lilac/40 hover:bg-white hover:shadow-[0_10px_24px_rgba(179,162,254,.16)] motion-reduce:hover:translate-y-0"}
              />
            </div>
            ) : null}
          </div>
        </div>
        <div className={"footer-cta px-0 py-[clamp(1.85rem,3.5vw,2.65rem)] text-center"}>
          <Link
            href="/bookings"
            className={cn(
              "inline-flex items-center justify-center gap-[.45rem] px-7 py-[.85rem] rounded-[4px] text-[.72rem] font-bold tracking-[.08em] uppercase border-2 border-transparent cursor-pointer transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 disabled:opacity-55 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:shadow-none bg-pastel-lilac text-white border-pastel-lilac shadow-[0_8px_24px_rgba(179,162,254,.28)] hover:bg-[#a894fc] hover:border-[#a894fc]",
              "normal-case tracking-[.02em] text-[.84rem] font-semibold px-[2.35rem] py-4 shadow-[0_12px_32px_rgba(179,162,254,.28)] hover:shadow-[0_16px_38px_rgba(179,162,254,.34)]",
            )}
          >
            Start your journey
          </Link>
        </div>
      </div>
      <div className={"footer-bar border-t border-pastel-lilac/18 bg-[linear-gradient(180deg,rgba(235,228,249,.92),#e0d6f2)] py-[1.2rem]"}>
        <div
          className={cn(
            "site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]",
            "flex flex-wrap items-center justify-between gap-3 text-[.78rem] text-muted max-md:flex-col max-md:text-center",
          )}
        >
          <span>© 2026 Opal Life Coaching. All rights reserved.</span>
          <span>
            <Link href="/bookings">Book a session</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
