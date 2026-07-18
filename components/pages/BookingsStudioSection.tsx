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
          <p className="bookings-studio-kicker">Book your session</p>
          <h2 className="m-0 font-serif text-[clamp(2.15rem,4vw,3rem)] leading-[1.06] tracking-[-.03em] text-blue">
            Choose a time that{" "}
            <span className="font-script font-normal text-[clamp(2.5rem,4.8vw,3.45rem)] leading-[.95] text-[#9580f5]">
              suits you
            </span>
          </h2>
          <OpalSep wide className="my-[clamp(1.15rem,2.2vw,1.5rem)] mx-auto opacity-95" />
          <p className="bookings-studio-intro m-0 mx-auto max-w-[48ch] text-[clamp(1rem,1.1vw,1.06rem)] leading-[1.85] text-muted">
            Pick a service, choose a session, then book live availability in a few clicks —
            gentle, clear, and entirely at your pace.
          </p>
          <ul className="bookings-studio-trust" aria-label="Booking highlights">
            {trustItems.map((item) => (
              <li key={item}>{item}</li>
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
