"use client";

import { useState } from "react";
import { OpalSep } from "@/components/ui/OpalSep";
import { FaqItem } from "@/components/ui/FaqItem";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import type { ContactPage, Faq } from "@/lib/cms-types";

type FaqsProps = {
  content: ContactPage["faqsSection"];
  faqs: Faq[];
};

export function Faqs({ content, faqs }: FaqsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={cn("faqs relative isolate overflow-hidden bg-white", "py-[var(--section-y)]")} id="faqs">
      <div className={"faqs-scene pointer-events-none absolute inset-0 z-0"} aria-hidden="true" />
      <div className={"site-wrap w-full max-w-[var(--max)] mx-auto px-[var(--page-x)]"}>
        <Reveal className={"faqs-head mx-auto mb-[clamp(2.5rem,5vw,3.25rem)] max-w-[640px] text-center"}>
          <p className={"text-[.68rem] font-bold tracking-[.18em] uppercase text-muted"}>{content.eyebrow}</p>
          <h2 className={"mb-4 text-[clamp(2rem,3.8vw,2.75rem)] leading-[1.08] tracking-[-.02em] text-blue"}>{content.title}</h2>
          <p className={"mx-auto text-base leading-[1.75] text-muted"}>
            {content.lead}
          </p>
          <OpalSep center wide />
        </Reveal>
        <Reveal delay={80}>
          <div className={"faq-list mx-auto flex max-w-[700px] flex-col"}>
            {faqs.map((faq, index) => (
              <FaqItem
                key={faq.id}
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
