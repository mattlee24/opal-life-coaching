"use client";

import { useEffect, useRef } from "react";
import { OpalSep } from "@/components/ui/OpalSep";
import { cn } from "@/lib/cn";

const faqs = [
  {
    question: "What happens in a first session?",
    answer:
      "We'll start with a relaxed conversation about where you are and what you're hoping for. There's no pressure — it's simply a chance to get to know each other and explore whether my approach feels like the right fit for you.",
  },
  {
    question: "How do I know which service is right for me?",
    answer:
      "Not sure whether coaching, Reiki, tarot or a blend is best? That's completely normal. We can talk it through together and I'll help you find an approach that feels supportive and right for where you are now.",
  },
  {
    question: "Do you offer online sessions?",
    answer:
      "Yes — many of my coaching and tarot sessions are available online, so you can access support from wherever feels most comfortable. Reiki sessions are typically in person.",
  },
  {
    question: "Where are in-person sessions held?",
    answer:
      "I offer in-person sessions in Chichester and Eastergate, West Sussex — in a calm, private space designed to help you feel at ease from the moment you arrive.",
  },
  {
    question: "How do I book a session?",
    answer:
      "Simply get in touch via the form above, email me directly, or send a message on social media. I'll respond within 24 hours and we can find a time that works for you.",
  },
] as const;

export function Faqs() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const items = list.querySelectorAll<HTMLDetailsElement>(".faq-item");
    const handlers: Array<{ item: HTMLDetailsElement; handler: () => void }> =
      [];

    items.forEach((item) => {
      const handler = () => {
        if (item.open) {
          items.forEach((other) => {
            if (other !== item) other.open = false;
          });
        }
      };
      item.addEventListener("toggle", handler);
      handlers.push({ item, handler });
    });

    return () => {
      handlers.forEach(({ item, handler }) => {
        item.removeEventListener("toggle", handler);
      });
    };
  }, []);

  return (
    <section className={cn("faqs relative isolate overflow-hidden bg-white", "py-[var(--section-y)]")} id="faqs">
      <div className={"faqs-scene pointer-events-none absolute inset-0 z-0"} aria-hidden="true" />
      <div className={"site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]"}>
        <header className={"faqs-head mx-auto mb-[clamp(2.5rem,5vw,3.25rem)] max-w-[640px] text-center"}>
          <p className={"text-[.68rem] font-bold tracking-[.18em] uppercase text-muted"}>FAQs</p>
          <h2 className={"mb-4 text-[clamp(2rem,3.8vw,2.75rem)] leading-[1.08] tracking-[-.02em] text-blue"}>Questions you might have</h2>
          <p className={"mx-auto text-base leading-[1.75] text-muted"}>
            Gentle, honest answers — so you know what to expect before reaching
            out.
          </p>
          <OpalSep center wide />
        </header>
        <div className={"faq-list mx-auto flex max-w-[700px] flex-col"} ref={listRef}>
          {faqs.map((faq, index) => (
            <div key={faq.question}>
              {index > 0 && <div className={"faq-divider h-px border-none bg-[linear-gradient(90deg,transparent,rgba(179,162,254,.38)_18%,rgba(188,228,222,.42)_50%,rgba(179,162,254,.38)_82%,transparent)]"} aria-hidden="true" />}
              <details className={cn("faq-item relative", "faq-item")}>
                <summary className={"flex cursor-pointer list-none items-center justify-between gap-5 py-[1.35rem] font-serif text-[clamp(1.12rem,1.65vw,1.28rem)] font-semibold leading-[1.35] text-blue transition-colors hover:text-[#152570]"}>
                  <span className={"faq-q flex-1 text-left"}>{faq.question}</span>
                  <span className={"faq-chevron flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-pastel-lilac/10 transition-colors"} aria-hidden="true" />
                </summary>
                <p className={"text-[.92rem] leading-[1.85] text-muted pr-8 pb-[1.35rem] max-w-[58ch] max-md:pr-0"}>{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
