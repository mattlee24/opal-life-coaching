"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import {
  calBookingEvents,
  groupCalBookingEventsByCategory,
  type CalBookingEvent,
} from "@/lib/cal-booking-events";

const CAL_USERNAME = process.env.NEXT_PUBLIC_CAL_USERNAME ?? "";

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

function CalBookingCard({
  event,
  onSelect,
}: {
  event: CalBookingEvent;
  onSelect: (slug: string) => void;
}) {
  const shortTitle = event.title.replace(/^[^:]+:\s*/, "");

  return (
    <button
      type="button"
      onClick={() => onSelect(event.slug)}
      className="bookings-cal-card group text-left"
    >
      <span className="bookings-cal-card__top">
        <span className="bookings-cal-card__name">{shortTitle}</span>
        <span className="bookings-cal-card__price">£{event.priceGbp}</span>
      </span>
      <p className="bookings-cal-card__desc">{event.description}</p>
      <span className="bookings-cal-card__meta">
        <span>{event.lengthInMinutes} min</span>
        <span aria-hidden="true">·</span>
        <span>{formatLabel(event)}</span>
      </span>
    </button>
  );
}

function CalProfileEmbed() {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [embedKey, setEmbedKey] = useState(0);

  const selectedEvent = calBookingEvents.find((event) => event.slug === selectedSlug);
  const grouped = groupCalBookingEventsByCategory();

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
              <h3 className="bookings-cal-selected-head__title">{selectedEvent.title}</h3>
              <p className="bookings-cal-selected-head__meta">
                {selectedEvent.lengthInMinutes} min · {formatLabel(selectedEvent)} · £
                {selectedEvent.priceGbp}
              </p>
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
            {grouped.map((group) =>
              group.events.length === 0 ? null : (
                <section key={group.id} className="bookings-cal-group">
                  <div className="bookings-cal-group__head">
                    {group.icon ? (
                      <span className="bookings-cal-group__icon" aria-hidden="true">
                        <Image src={group.icon} alt="" width={36} height={36} />
                      </span>
                    ) : null}
                    <h3 className="bookings-cal-group__title">{group.label}</h3>
                  </div>
                  <div className="bookings-cal-grid">
                    {group.events.map((event) => (
                      <CalBookingCard key={event.slug} event={event} onSelect={selectEvent} />
                    ))}
                  </div>
                </section>
              ),
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export { CalProfileEmbed };
