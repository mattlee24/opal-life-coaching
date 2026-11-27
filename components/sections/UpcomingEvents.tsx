import Link from "next/link";
import { DecorativeImage } from "@/components/ui/DecorativeImage";
import { OpalSep } from "@/components/ui/OpalSep";
import { Reveal } from "@/components/ui/Reveal";
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

const typeLabels: Record<Event["type"], string> = {
  workshop: "Workshop",
  "live-session": "Live session",
  "pamper-event": "Pamper event",
  readings: "Readings",
  other: "Event",
};

/** Contact page link that carries the event's details into the enquiry form. */
function enquireHref(event: Event) {
  const query = new URLSearchParams({
    event: event.title,
    type: event.type,
    when: longFormat.format(new Date(event.date)),
  });
  if (event.time) query.set("time", event.time);
  if (event.location) query.set("location", event.location);
  return `/contact?${query.toString()}#contact-form`;
}

export function UpcomingEvents({ content, events }: UpcomingEventsProps) {
  if (!events.length) return null;

  return (
    <section
      className={"upcoming-events relative isolate overflow-hidden bg-[#f3f0fa] py-[clamp(3.5rem,7vw,5.5rem)]"}
      id="events"
      aria-labelledby="events-heading"
    >
      <div className={"upcoming-events-scene pointer-events-none absolute inset-0 z-0"} aria-hidden="true" />
      <DecorativeImage
        src="/assets/sprig-fern.svg"
        width={48}
        height={96}
        className={"upcoming-events-float upcoming-events-float--tl pointer-events-none absolute z-0"}
      />
      <DecorativeImage
        src="/assets/nature-leaf-opal.svg"
        width={80}
        height={80}
        className={"upcoming-events-float upcoming-events-float--br pointer-events-none absolute z-0"}
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
        <Reveal
          className={
            "relative mx-auto max-w-[860px] rounded-[22px] bg-[linear-gradient(180deg,rgba(255,255,255,.94)_0%,rgba(250,248,255,.92)_55%,rgba(246,250,247,.92)_100%)] px-[clamp(1.25rem,3.6vw,2.75rem)] py-[clamp(.75rem,2vw,1.25rem)] shadow-[0_22px_56px_rgba(179,162,254,.12),0_10px_28px_rgba(93,138,111,.07)] backdrop-blur-[6px]"
          }
        >
          <span className={"vine-frame"} aria-hidden="true" />
          <ul className={"relative z-[1] divide-y divide-pastel-lilac/20"}>
            {events.map((event) => {
              const date = new Date(event.date);
              const details = [event.time, event.location].filter(Boolean).join(" · ");
              return (
                <li key={event.id} className={"flex gap-[clamp(1rem,2.5vw,1.5rem)] py-[clamp(1.4rem,3vw,1.9rem)] max-sm:flex-col"}>
                  <time
                    dateTime={event.date.slice(0, 10)}
                    className={
                      "flex h-[4.75rem] w-[4.75rem] shrink-0 flex-col items-center justify-center rounded-[16px] bg-[linear-gradient(150deg,#b3a2fe_0%,#a894fc_55%,#9fd8cf_140%)] text-white shadow-[0_12px_28px_rgba(179,162,254,.34)]"
                    }
                  >
                    <span className={"text-[1.7rem] font-bold leading-none"}>{dayFormat.format(date)}</span>
                    <span className={"mt-[.3rem] text-[.7rem] font-bold uppercase tracking-[.14em]"}>{monthFormat.format(date)}</span>
                  </time>
                  <div className={"flex min-w-0 flex-1 flex-col"}>
                    <span className={"type-label mb-[.3rem] text-pastel-lilac!"}>{typeLabels[event.type]}</span>
                    <h3 className={"type-title mb-[.35rem]"}>{event.title}</h3>
                    <p className={"type-label mb-[.75rem] text-blue!"}>
                      {longFormat.format(date)}
                      {details ? <span className={"block normal-case tracking-normal opacity-80"}>{details}</span> : null}
                    </p>
                    <p className={"type-body mb-[1.15rem] whitespace-pre-line"}>{event.description}</p>
                    <Link
                      href={enquireHref(event)}
                      aria-label={`${content.buttonLabel}: ${event.title}`}
                      className={
                        "inline-flex items-center justify-center self-start rounded-[4px] border-2 border-pastel-lilac bg-pastel-lilac px-7 py-[.85rem] text-[.72rem] font-bold uppercase tracking-[.1em] text-white shadow-[0_8px_24px_rgba(179,162,254,.28)] transition-[transform,box-shadow,background,border-color] duration-200 ease-opal hover:-translate-y-0.5 hover:border-[#a894fc] hover:bg-[#a894fc] motion-reduce:hover:translate-y-0"
                      }
                    >
                      {content.buttonLabel}
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
