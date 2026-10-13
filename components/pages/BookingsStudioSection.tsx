"use client";

import { CalProfileEmbed } from "@/components/pages/CalProfileEmbed";
import { OpalSep } from "@/components/ui/OpalSep";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const trustItems = ["Free discovery call", "Online or in person", "At your pace"] as const;

export function BookingsStudioSection() {
  return (
    <section
      id="bookings-grid"
      className={cn(
        "bookings-studio relative isolate overflow-hidden border-y border-pastel-lilac/12",
        "py-[var(--section-y)]",
      )}
    >
      <div className="site-wrap relative z-[2] mx-auto w-full max-w-[var(--max)] px-[var(--page-x)]">
        <Reveal className="bookings-studio-head mx-auto mb-[clamp(2.25rem,4.5vw,3rem)] max-w-[min(720px,100%)] text-center">
          <h2 className="type-heading m-0">
            Choose a time that{" "}
            <span className="type-script inline!">
              suits you
            </span>
          </h2>
          <OpalSep wide className="my-[clamp(1.15rem,2.2vw,1.5rem)] mx-auto opacity-95" />
          <p className="bookings-studio-intro type-body m-0 mx-auto max-w-[48ch]">
            Pick a service, choose a session, then book live availability in a few clicks —
            gentle, clear, and entirely at your pace.
          </p>
          <ul className="bookings-studio-trust" aria-label="Booking highlights">
            {trustItems.map((item) => (
              <li key={item} className="type-label">{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80}>
          <CalProfileEmbed />
        </Reveal>
      </div>
    </section>
  );
}
