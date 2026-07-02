"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { OpalSep } from "@/components/ui/OpalSep";
import { cn } from "@/lib/cn";
import type { BookingService } from "@/lib/services";

const CAL_USERNAME = process.env.NEXT_PUBLIC_CAL_USERNAME ?? "";

type BookingsStudioSectionProps = {
  services: BookingService[];
};

function CalEmbedFrame({ service }: { service: BookingService }) {
  if (CAL_USERNAME) {
    const embedUrl = `https://cal.com/${CAL_USERNAME}/${service.calSlug}?embed=true&theme=light&layout=month_view`;

    return (
      <iframe
        src={embedUrl}
        title={`Book ${service.label}`}
        className="bookings-studio-iframe"
        loading="lazy"
        allow="payment"
      />
    );
  }

  return (
    <div className="bookings-cal-placeholder" aria-hidden="true">
      <div className="bookings-cal-placeholder__chrome">
        <span className="bookings-cal-placeholder__dot" />
        <span className="bookings-cal-placeholder__dot" />
        <span className="bookings-cal-placeholder__dot" />
        <span className="bookings-cal-placeholder__url">cal.com · {service.calSlug}</span>
      </div>
      <div className="bookings-cal-placeholder__body">
        <div className="bookings-cal-placeholder__calendar">
          <p className="bookings-cal-placeholder__label">Select a date</p>
          <div className="bookings-cal-placeholder__month">Availability preview</div>
          <div className="bookings-cal-placeholder__grid">
            {Array.from({ length: 35 }, (_, index) => (
              <span
                key={index}
                className={cn(
                  "bookings-cal-placeholder__day",
                  index % 6 === 0 && "is-active",
                )}
              />
            ))}
          </div>
        </div>
        <div className="bookings-cal-placeholder__slots">
          <p className="bookings-cal-placeholder__label">Available times</p>
          <div className="bookings-cal-placeholder__slot-list">
            {["09:30", "11:00", "14:00", "16:30"].map((time) => (
              <span key={time} className="bookings-cal-placeholder__slot">
                {time}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="bookings-cal-placeholder__note">
        Cal.com embed loads here once <code>NEXT_PUBLIC_CAL_USERNAME</code> is configured.
      </p>
    </div>
  );
}

export function BookingsStudioSection({ services }: BookingsStudioSectionProps) {
  const [activeSlug, setActiveSlug] = useState(services[0]?.slug ?? "coaching");

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && services.some((service) => service.slug === hash)) {
      setActiveSlug(hash);
    }
  }, [services]);

  const activeService =
    services.find((service) => service.slug === activeSlug) ?? services[0];

  if (!activeService) return null;

  const selectService = (slug: string) => {
    setActiveSlug(slug);
    window.history.replaceState(null, "", `#${slug}`);
  };

  return (
    <section
      id="bookings-grid"
      className={cn(
        "bookings-studio py-[var(--section-y)]",
        "border-y border-pastel-lilac/10 bg-[linear-gradient(180deg,#fcfbff_0%,#faf8ff_42%,#f8f6fc_100%)]",
      )}
    >
      <div className="site-wrap mx-auto w-full max-w-[var(--max)] px-[var(--page-x)]">
        <header className="bookings-studio-head mx-auto mb-[clamp(2rem,4vw,2.75rem)] max-w-[min(720px,100%)] text-center">
          <p className="mb-4 inline-flex h-[34px] items-center justify-center rounded-full border border-pastel-lilac/20 bg-white/72 px-[.85rem] text-[.68rem] font-bold tracking-[.18em] text-[#9580f5] uppercase">
            Book your session
          </p>
          <h2 className="m-0 font-serif text-[clamp(2rem,3.8vw,2.85rem)] leading-[1.08] tracking-[-.03em] text-blue">
            Pick a service,{" "}
            <span className="font-script font-normal text-[clamp(2.35rem,4.5vw,3.15rem)] leading-[.95] text-[#9580f5]">
              choose your time
            </span>
          </h2>
          <OpalSep wide className="my-[clamp(1.15rem,2.2vw,1.5rem)] mx-auto opacity-95" />
          <p className="m-0 text-[clamp(1rem,1.1vw,1.06rem)] leading-[1.85] text-muted">
            Select a service to view live availability. Each calendar opens in place
            below — online or in person, at a pace that suits you.
          </p>
        </header>

        <div
          className="bookings-studio-tabs mb-[clamp(1.35rem,2.4vw,1.75rem)] flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Booking services"
        >
          {services.map((service) => {
            const isActive = service.slug === activeSlug;

            return (
              <button
                key={service.slug}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`booking-panel-${service.slug}`}
                id={`booking-tab-${service.slug}`}
                onClick={() => selectService(service.slug)}
                className={cn(
                  "bookings-studio-tab",
                  isActive && "bookings-studio-tab--active",
                  `bookings-studio-tab--${service.variant}`,
                )}
              >
                <img src={service.icon} alt="" className="bookings-studio-tab__icon" />
                <span className="bookings-studio-tab__copy">
                  <span className="bookings-studio-tab__tag">{service.tag}</span>
                  <span className="bookings-studio-tab__label">{service.label}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div
          id={`booking-panel-${activeService.slug}`}
          role="tabpanel"
          aria-labelledby={`booking-tab-${activeService.slug}`}
          className="bookings-studio-panel opal-panel overflow-hidden rounded-[24px] p-[clamp(1.15rem,2.2vw,1.5rem)] md:p-[clamp(1.35rem,2.4vw,1.75rem)]"
        >
          <div className="opal-panel__inner bookings-studio-layout grid items-start gap-[clamp(1.35rem,2.4vw,1.85rem)] lg:grid-cols-[minmax(280px,.82fr)_minmax(0,1.18fr)]">
            <aside className="bookings-studio-sidebar flex flex-col gap-[clamp(1.1rem,2vw,1.45rem)]">
              <div className="bookings-studio-service-head flex items-start gap-3.5">
                <span
                  className={cn(
                    "bookings-studio-service-icon",
                    `bookings-studio-service-icon--${activeService.variant}`,
                  )}
                >
                  <img src={activeService.icon} alt="" />
                </span>
                <div>
                  <p className="m-0 text-[.62rem] font-bold tracking-[.16em] text-[#9580f5] uppercase">
                    {activeService.tag}
                  </p>
                  <h3 className="mt-1 mb-0 font-serif text-[clamp(1.45rem,2vw,1.7rem)] leading-[1.12] text-blue">
                    {activeService.label}
                  </h3>
                </div>
              </div>

              <p className="m-0 text-[.92rem] leading-[1.78] text-muted">
                {activeService.summary}
              </p>

              <ul className="bookings-studio-sessions m-0 flex list-none flex-col gap-2 p-0">
                {activeService.sessions.map((session) => (
                  <li key={session.name} className="bookings-studio-session">
                    <div className="bookings-studio-session__top">
                      <span className="bookings-studio-session__name">{session.name}</span>
                      <span className="bookings-studio-session__price">{session.price}</span>
                    </div>
                    <p className="bookings-studio-session__meta">
                      {session.duration} · {session.format}
                    </p>
                  </li>
                ))}
              </ul>

              {activeService.trust.length > 0 ? (
                <ul className="m-0 flex list-none flex-wrap gap-x-4 gap-y-2 border-t border-pastel-lilac/12 p-0 pt-4">
                  {activeService.trust.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 text-[.76rem] font-semibold text-blue before:h-1.5 before:w-1.5 before:rounded-full before:bg-[linear-gradient(135deg,#B3A2FE,#bce4de)] before:content-['']"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="flex flex-wrap gap-3 pt-1">
                <Link href={activeService.href} className="service-overview-btn service-overview-btn--ghost">
                  About this service
                </Link>
                <Link
                  href={`/contact?service=${activeService.slug}`}
                  className="text-[.82rem] font-semibold text-blue underline decoration-pastel-lilac/45 underline-offset-[.2em] transition-colors hover:text-[#152570]"
                >
                  Enquire instead
                </Link>
              </div>
            </aside>

            <div className="bookings-studio-embed min-w-0">
              <div className="bookings-studio-embed-header mb-3 flex flex-wrap items-center justify-between gap-3">
                <p className="m-0 font-serif text-[clamp(1.15rem,1.6vw,1.3rem)] font-semibold text-blue">
                  Live availability
                </p>
                <span className="inline-flex items-center rounded-full border border-pastel-lilac/20 bg-white/85 px-3 py-1 text-[.62rem] font-bold tracking-[.12em] text-[#9580f5] uppercase">
                  Powered by Cal.com
                </span>
              </div>
              <div className="bookings-studio-embed-frame overflow-hidden rounded-[18px] border border-pastel-lilac/16 bg-white shadow-[inset_0_1px_0_rgba(255,255,255,.95),0_12px_36px_rgba(179,162,254,.08)]">
                <CalEmbedFrame service={activeService} />
              </div>
            </div>
          </div>
        </div>

        <ul
          className="bookings-studio-reassurance mx-auto mt-[clamp(1.75rem,3vw,2.25rem)] flex max-w-[min(720px,100%)] list-none flex-wrap justify-center gap-x-6 gap-y-2 p-0 text-[.78rem] font-semibold text-blue"
          aria-label="Booking reassurance"
        >
          <li className="inline-flex items-center gap-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[linear-gradient(135deg,#B3A2FE,#bce4de)] before:content-['']">
            Reply within 24 hours
          </li>
          <li className="inline-flex items-center gap-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[linear-gradient(135deg,#B3A2FE,#bce4de)] before:content-['']">
            Free discovery call for coaching
          </li>
          <li className="inline-flex items-center gap-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-[linear-gradient(135deg,#B3A2FE,#bce4de)] before:content-['']">
            Secure online booking
          </li>
        </ul>
      </div>
    </section>
  );
}
