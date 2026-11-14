import Link from "next/link";
import { OpalSep } from "@/components/ui/OpalSep";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import type { Event, HomePage } from "@/lib/cms-types";

type UpcomingEventsProps = {
  content: HomePage["eventsSection"];
  events: Event[];
};

const ukDate = (options: Intl.DateTimeFormatOptions) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: "Europe/London", ...options });
const dayFormat = ukDate({ day: "numeric" });
const monthFormat = ukDate({ month: "short" });
const longFormat = ukDate({ weekday: "long", day: "numeric", month: "long", year: "numeric" });

/** Contact page link with the event pre-filled in the form's message. */
function enquireHref(event: Event) {
  const when = longFormat.format(new Date(event.date));
  const query = new URLSearchParams({ event: `${event.title} (${when})` });
  return `/contact?${query.toString()}#contact-form`;
}

export function UpcomingEvents({ content, events }: UpcomingEventsProps) {
  if (!events.length) return null;

  return (
    <section
      className={"upcoming-events relative isolate overflow-hidden bg-[linear-gradient(180deg,#f7faf8_0%,#fcfbff_100%)] py-[clamp(3.5rem,7vw,5.5rem)]"}
      id="events"
      aria-labelledby="events-heading"
    >
      <div
        className={"pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_50%_60%_at_12%_18%,rgba(179,162,254,.16),transparent_68%),radial-gradient(ellipse_46%_58%_at_90%_82%,rgba(188,228,222,.26),transparent_66%)]"}
        aria-hidden="true"
      />
      <div className={"site-wrap relative z-[1] mx-auto w-full max-w-[var(--max)] px-[var(--page-x)]"}>
        <Reveal className={"mx-auto mb-[clamp(2.25rem,4.5vw,3rem)] max-w-[640px] text-center"}>
          <h2 id="events-heading" className={"type-heading mb-4"}>
            {content.title}
            <span className={"type-script mt-[.12rem] block"}>{content.script}</span>
          </h2>
          <OpalSep center wide />
          {content.lead ? <p className={"type-body mx-auto mt-5 max-w-[52ch]"}>{content.lead}</p> : null}
        </Reveal>
        <ul
          className={cn(
            "mx-auto grid gap-[clamp(1.25rem,2.5vw,1.75rem)]",
            events.length === 1 ? "max-w-[560px]" : "max-w-[1040px] md:grid-cols-2",
          )}
        >
          {events.map((event, index) => {
            const date = new Date(event.date);
            const details = [event.time, event.location].filter(Boolean).join(" · ");
            return (
              <li key={event.id} className={"flex"}>
              <Reveal delay={index * 90} fill className={"flex w-full"}>
                <article
                  className={
                    "flex w-full gap-[clamp(1.1rem,2.5vw,1.6rem)] rounded-[22px] border border-pastel-lilac/18 bg-white/88 p-[clamp(1.4rem,3vw,2rem)] shadow-[0_22px_56px_rgba(179,162,254,.12),0_10px_28px_rgba(93,138,111,.07)] backdrop-blur-[6px] max-sm:flex-col"
                  }
                >
                  <time
                    dateTime={event.date.slice(0, 10)}
                    className={
                      "flex h-[5.25rem] w-[5.25rem] shrink-0 flex-col items-center justify-center rounded-[18px] bg-[linear-gradient(150deg,#b3a2fe_0%,#a894fc_55%,#9fd8cf_140%)] text-white shadow-[0_12px_28px_rgba(179,162,254,.34)]"
                    }
                  >
                    <span className={"text-[1.9rem] font-bold leading-none"}>{dayFormat.format(date)}</span>
                    <span className={"mt-[.3rem] text-[.72rem] font-bold uppercase tracking-[.14em]"}>{monthFormat.format(date)}</span>
                  </time>
                  <div className={"flex min-w-0 flex-1 flex-col"}>
                    <h3 className={"type-title mb-[.35rem]"}>{event.title}</h3>
                    <p className={"type-label mb-[.85rem] text-blue!"}>
                      {longFormat.format(date)}
                      {details ? <span className={"block normal-case tracking-normal opacity-80"}>{details}</span> : null}
                    </p>
                    <p className={"type-body mb-[1.35rem] whitespace-pre-line"}>{event.description}</p>
                    <Link
                      href={enquireHref(event)}
                      aria-label={`${content.buttonLabel}: ${event.title}`}
                      className={
                        "mt-auto inline-flex items-center justify-center self-start rounded-[4px] border-2 border-pastel-lilac bg-pastel-lilac px-7 py-[.85rem] text-[.72rem] font-bold uppercase tracking-[.1em] text-white shadow-[0_8px_24px_rgba(179,162,254,.28)] transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 hover:border-[#a894fc] hover:bg-[#a894fc] motion-reduce:hover:translate-y-0"
                      }
                    >
                      {content.buttonLabel}
                    </Link>
                  </div>
                </article>
              </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
