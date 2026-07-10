"use client";

import { CalProfileEmbed } from "@/components/pages/CalProfileEmbed";
import { OpalSep } from "@/components/ui/OpalSep";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

export function BookingsStudioSection() {
  return (
    <section
      id="bookings-grid"
      className={cn(
        "bookings-studio py-[var(--section-y)]",
        "border-y border-pastel-lilac/10 bg-[linear-gradient(180deg,#fcfbff_0%,#faf8ff_42%,#f8f6fc_100%)]",
      )}
    >
      <div className="site-wrap mx-auto w-full max-w-[var(--max)] px-[var(--page-x)]">
        <Reveal className="bookings-studio-head mx-auto mb-[clamp(2rem,4vw,2.75rem)] max-w-[min(720px,100%)] text-center">
          <p className="mb-4 inline-flex h-[34px] items-center justify-center rounded-full border border-pastel-lilac/20 bg-white/72 px-[.85rem] text-[.68rem] font-bold tracking-[.18em] text-[#9580f5] uppercase">
            Book your session
          </p>
          <h2 className="m-0 font-serif text-[clamp(2rem,3.8vw,2.85rem)] leading-[1.08] tracking-[-.03em] text-blue">
            Choose a time that{" "}
            <span className="font-script font-normal text-[clamp(2.35rem,4.5vw,3.15rem)] leading-[.95] text-[#9580f5]">
              suits you
            </span>
          </h2>
          <OpalSep wide className="my-[clamp(1.15rem,2.2vw,1.5rem)] mx-auto opacity-95" />
          <p className="m-0 text-[clamp(1rem,1.1vw,1.06rem)] leading-[1.85] text-muted">
            Browse sessions by service below — choose one to see live availability and book
            in a few clicks. Use{" "}
            <em className="font-medium not-italic text-blue">Back to all sessions</em> to
            return to the grid.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <CalProfileEmbed />
        </Reveal>
      </div>
    </section>
  );
}
