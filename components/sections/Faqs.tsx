"use client";

import { useState } from "react";
import { OpalSep } from "@/components/ui/OpalSep";
import { FaqItem } from "@/components/ui/FaqItem";
import { Reveal } from "@/components/ui/Reveal";
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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={cn("faqs relative isolate overflow-hidden bg-white", "py-[var(--section-y)]")} id="faqs">
      <div className={"faqs-scene pointer-events-none absolute inset-0 z-0"} aria-hidden="true" />
      <div className={"site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]"}>
        <Reveal className={"faqs-head mx-auto mb-[clamp(2.5rem,5vw,3.25rem)] max-w-[640px] text-center"}>
          <p className={"text-[.68rem] font-bold tracking-[.18em] uppercase text-muted"}>FAQs</p>
          <h2 className={"mb-4 text-[clamp(2rem,3.8vw,2.75rem)] leading-[1.08] tracking-[-.02em] text-blue"}>Questions you might have</h2>
          <p className={"mx-auto text-base leading-[1.75] text-muted"}>
            Gentle, honest answers — so you know what to expect before reaching
            out.
          </p>
          <OpalSep center wide />
        </Reveal>
        <Reveal delay={80}>
          <div className={"faq-list mx-auto flex max-w-[700px] flex-col"}>
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                showDivider={index > 0}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex((current) => (current === index ? null : index))
                }
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
