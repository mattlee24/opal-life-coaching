"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  calBookingCategories,
  calBookingEvents,
  groupCalBookingEventsByCategory,
  type CalBookingCategoryId,
  type CalBookingEvent,
} from "@/lib/cal-booking-events";
import { cn } from "@/lib/cn";

const CAL_USERNAME = process.env.NEXT_PUBLIC_CAL_USERNAME ?? "";

type FilterId = "all" | CalBookingCategoryId;

const calUiConfig = {
  theme: "light" as const,
  cssVarsPerTheme: {
    light: {
      "cal-brand": "#9580f5",
      "cal-brand-emphasis": "#7d68e8",
      "cal-brand-text": "#ffffff",
      "cal-brand-subtle": "#b3a2fe",
      "cal-brand-accent": "#ffffff",
      "cal-text-emphasis": "#1c30a3",
      "cal-text": "#2a2840",
      "cal-text-muted": "#5c5878",
      "cal-border-booker": "transparent",
      "cal-border-default": "rgba(179, 162, 254, 0.12)",
      "cal-border-subtle": "rgba(188, 228, 222, 0.25)",
      "cal-bg": "transparent",
      "cal-bg-subtle": "#faf8ff",
      "cal-bg-emphasis": "#ffffff",
      "cal-bg-muted": "#f6faf7",
      radius: "14px",
      "radius-lg": "18px",
    },
    dark: {
      "cal-brand": "#9580f5",
      "cal-brand-emphasis": "#7d68e8",
      "cal-brand-text": "#ffffff",
      "cal-brand-subtle": "#b3a2fe",
      "cal-brand-accent": "#ffffff",
      "cal-text-emphasis": "#e8e6f5",
      "cal-text": "#f7f8fc",
      "cal-text-muted": "#b8b4c8",
      "cal-border-booker": "transparent",
      "cal-border-default": "rgba(179, 162, 254, 0.2)",
      "cal-border-subtle": "rgba(188, 228, 222, 0.2)",
      "cal-bg": "transparent",
      "cal-bg-subtle": "#221f38",
      "cal-bg-emphasis": "#2a2840",
      "cal-bg-muted": "#2a2840",
      radius: "14px",
      "radius-lg": "18px",
    },
  },
};

function formatLabel(event: CalBookingEvent) {
  return event.location === "inPerson" ? "In person" : "Online";
}

function getDisplayTitle(event: CalBookingEvent, categoryLabel: string) {
  return event.title
    .replace(new RegExp(`^${categoryLabel}\\s*[—–-]\\s*`, "i"), "")
    .replace(/\s*\(\d+\s*min\)\s*$/i, "")
    .trim();
}

function CalBookingCard({
  event,
  categoryId,
  categoryLabel,
  onSelect,
}: {
  event: CalBookingEvent;
  categoryId: CalBookingCategoryId;
  categoryLabel: string;
  onSelect: (slug: string) => void;
}) {
  const displayTitle = getDisplayTitle(event, categoryLabel);
  const isInPerson = event.location === "inPerson";

  return (
    <button
      type="button"
      onClick={() => onSelect(event.slug)}
      className={cn("bookings-cal-card group text-left", `bookings-cal-card--${categoryId}`)}
    >
      <span className="bookings-cal-card__glow" aria-hidden="true" />
      <span className="bookings-cal-card__ribbon" aria-hidden="true" />

      <span className="bookings-cal-card__header">
        <span className={cn("bookings-cal-card__mark", isInPerson && "bookings-cal-card__mark--place")}>
          <span aria-hidden="true">{isInPerson ? "◎" : "◌"}</span>
          {formatLabel(event)}
        </span>
        <span className="bookings-cal-card__price">
          <span className="bookings-cal-card__price-currency">£</span>
          {event.priceGbp}
        </span>
      </span>

      <span className="bookings-cal-card__name">{displayTitle}</span>
      <p className="bookings-cal-card__desc">{event.description}</p>

      <span className="bookings-cal-card__chips">
        <span className="bookings-cal-card__chip">{event.lengthInMinutes} minutes</span>
        {event.note ? <span className="bookings-cal-card__chip bookings-cal-card__chip--note">Flexible</span> : null}
      </span>

      <span className="bookings-cal-card__cta">
        Book this session
        <span aria-hidden="true">→</span>
      </span>
    </button>
  );
}

function CalProfileEmbed() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [embedKey, setEmbedKey] = useState(0);
  const [filter, setFilter] = useState<FilterId>("all");

  const selectedEvent = calBookingEvents.find((event) => event.slug === selectedSlug);
  const grouped = useMemo(() => groupCalBookingEventsByCategory(), []);
  const visibleGroups = useMemo(
    () =>
      grouped.filter(
        (group) =>
          group.events.length > 0 && (filter === "all" || group.id === filter),
      ),
    [filter, grouped],
  );

  const backToGrid = useCallback(() => {
    setSelectedSlug(null);
    setEmbedKey((key) => key + 1);
  }, []);

  const selectEvent = useCallback((slug: string) => {
    setSelectedSlug(slug);
    setEmbedKey((key) => key + 1);
  }, []);

  useEffect(() => {
    if (!CAL_USERNAME || !selectedSlug) return;

    void (async () => {
      const cal = await getCalApi();
      cal("ui", calUiConfig);
    })();
  }, [embedKey, selectedSlug]);

  if (!CAL_USERNAME) {
    return (
      <div
        className="bookings-cal-unconfigured rounded-[20px] border border-dashed border-pastel-lilac/35 bg-white/72 px-6 py-12 text-center"
        role="status"
      >
        <p className="m-0 text-[.92rem] leading-[1.75] text-muted">
          Live booking will appear here once{" "}
          <code className="text-[#9580f5]">NEXT_PUBLIC_CAL_USERNAME</code> is configured.
        </p>
      </div>
    );
  }

  return (
    <div className="vine-panel bookings-cal-vine">
      <div className="vine-panel__inner bookings-cal-vine__inner">
        {selectedSlug && selectedEvent ? (
          <>
            <div className="bookings-cal-toolbar">
              <button type="button" onClick={backToGrid} className="bookings-cal-back">
                <span aria-hidden="true">←</span>
                Back to all sessions
              </button>
            </div>

            <div className="bookings-cal-selected-head">
              <div className="bookings-cal-selected-head__copy">
                <p className="bookings-cal-selected-head__eyebrow">Your session</p>
                <h3 className="bookings-cal-selected-head__title">{selectedEvent.title}</h3>
                <p className="bookings-cal-selected-head__meta">
                  {selectedEvent.lengthInMinutes} min · {formatLabel(selectedEvent)}
                </p>
              </div>
              <span className="bookings-cal-selected-head__price">£{selectedEvent.priceGbp}</span>
            </div>

            <div className="bookings-cal-embed-host">
              <Cal
                key={`${embedKey}-${selectedSlug}`}
                calLink={`${CAL_USERNAME}/${selectedSlug}`}
                config={{ theme: "light", layout: "month_view" }}
                style={{ width: "100%", minHeight: "min(720px, 75vh)", overflow: "auto" }}
              />
            </div>
          </>
        ) : (
          <div className="bookings-cal-grid-wrap">
            <div className="bookings-cal-filters" role="tablist" aria-label="Filter by service">
              <button
                type="button"
                role="tab"
                aria-selected={filter === "all"}
                className={cn(
                  "bookings-cal-filter",
                  filter === "all" && "bookings-cal-filter--active",
                )}
                onClick={() => setFilter("all")}
              >
                <span className="bookings-cal-filter__dot" aria-hidden="true" />
                All sessions
              </button>
              {calBookingCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === category.id}
                  className={cn(
                    "bookings-cal-filter",
                    `bookings-cal-filter--${category.id}`,
                    filter === category.id && "bookings-cal-filter--active",
                  )}
                  onClick={() => setFilter(category.id)}
                >
                  {category.icon ? (
                    <span className="bookings-cal-filter__halo" aria-hidden="true">
                      <Image
                        src={category.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="bookings-cal-filter__icon"
                      />
                    </span>
                  ) : (
                    <span className="bookings-cal-filter__dot" aria-hidden="true" />
                  )}
                  {category.label}
                </button>
              ))}
            </div>

            {visibleGroups.map((group) => (
              <section
                key={group.id}
                className={cn("bookings-cal-group", `bookings-cal-group--${group.id}`)}
              >
                <div className="bookings-cal-group__head">
                  {group.icon ? (
                    <span className="bookings-cal-group__icon" aria-hidden="true">
                      <Image src={group.icon} alt="" width={40} height={40} />
                    </span>
                  ) : (
                    <span className="bookings-cal-group__icon bookings-cal-group__icon--plain" aria-hidden="true">
                      ✦
                    </span>
                  )}
                  <div className="bookings-cal-group__titles">
                    <h3 className="bookings-cal-group__title">{group.label}</h3>
                    {group.blurb ? (
                      <p className="bookings-cal-group__blurb">{group.blurb}</p>
                    ) : null}
                    <p className="bookings-cal-group__count">
                      {group.events.length} session{group.events.length === 1 ? "" : "s"} to choose from
                    </p>
                  </div>
                  <span className="bookings-cal-group__rule" aria-hidden="true" />
                </div>
                <div className="bookings-cal-grid">
                  {group.events.map((event) => (
                    <CalBookingCard
                      key={event.slug}
                      event={event}
                      categoryId={group.id}
                      categoryLabel={group.label}
                      onSelect={selectEvent}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export { CalProfileEmbed };
