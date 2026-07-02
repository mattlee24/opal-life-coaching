"use client";

import { Reveal } from "@/components/ui/Reveal";

const values = [
  {
    icon: "/assets/icon-value-pace.svg",
    title: "At your pace",
    description:
      "No pressure, no rush — we move forward only when you feel ready.",
  },
  {
    icon: "/assets/icon-value-personal.svg",
    title: "Entirely personal",
    description:
      "Every session is tailored to you — your story, your goals, your path.",
  },
  {
    icon: "/assets/icon-value-holistic.svg",
    title: "Holistic care",
    description:
      "Coaching, Reiki and tarot woven together for mind, body and spirit.",
  },
] as const;

export function Values() {
  return (
    <section className={"values relative isolate overflow-hidden border-y border-pastel-lilac/10 bg-[linear-gradient(180deg,#fcfbff_0%,#faf8ff_42%,#f8f6fc_100%)] py-[clamp(2.75rem,5vh,3.75rem)]"}>
      <div className={"values-ambient pointer-events-none absolute inset-0"} aria-hidden="true" />
      <div className={"site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]"}>
        <div className={"values-strip mx-auto flex max-w-[min(1180px,100%)] items-stretch max-[900px]:max-w-[min(480px,100%)] max-[900px]:flex-col"}>
          {values.flatMap((value, index) => {
            const item = (
              <Reveal
                key={value.title}
                delay={index * 90}
                variant="up"
                fill
                className={"value-item flex flex-1 items-center gap-[1.35rem] px-[clamp(1.5rem,2.5vw,2rem)] py-[clamp(1rem,2vw,1.35rem)] min-w-0 max-[900px]:gap-[1.1rem] max-[900px]:px-0 max-[900px]:py-[1.1rem]"}
              >
                <div className={"value-icon relative h-[76px] w-[76px] shrink-0 flex items-center justify-center"}>
                  <span className={"value-icon-halo absolute inset-[2px] rounded-full bg-[radial-gradient(circle_at_50%_38%,rgba(255,255,255,.95)_0%,rgba(244,252,248,.85)_42%,rgba(212,235,228,.55)_68%,transparent_90%)] shadow-[0_0_0_1px_rgba(179,162,254,.1),0_8px_22px_rgba(179,162,254,.08)]"} aria-hidden="true" />
                  <img src={value.icon} alt="" className={"relative z-[1] h-[50px] w-[50px] [filter:drop-shadow(0_2px_8px_rgba(179,162,254,.12))]"} />
                </div>
                <div className={"value-text min-w-0"}>
                  <h3 className={"mb-[.38rem] text-[clamp(1.48rem,2.15vw,1.82rem)] leading-[1.12] tracking-[-.015em] text-[#9b88eb]"}>{value.title}</h3>
                  <p className={"text-[.91rem] leading-[1.62] text-blue"}>{value.description}</p>
                </div>
              </Reveal>
            );

            if (index === 0) return [item];
            return [
              <div
                key={`sep-${value.title}`}
                className={"value-sep my-[clamp(.5rem,1.5vh,.85rem)] w-px shrink-0 self-stretch bg-[linear-gradient(180deg,transparent,rgba(188,228,222,.55)_12%,rgba(179,162,254,.45)_50%,rgba(188,228,222,.55)_88%,transparent)] max-[900px]:mx-0 max-[900px]:my-[.2rem] max-[900px]:h-px max-[900px]:w-full max-[900px]:bg-[linear-gradient(90deg,transparent,rgba(188,228,222,.55)_12%,rgba(179,162,254,.45)_50%,rgba(188,228,222,.55)_88%,transparent)]"}
                aria-hidden="true"
              />,
              item,
            ];
          })}
        </div>
      </div>
    </section>
  );
}
