"use client";

import { cn } from "@/lib/cn";

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  showDivider?: boolean;
};

export function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
  showDivider = false,
}: FaqItemProps) {
  return (
    <div className={cn("faq-item relative", isOpen && "faq-item--open")}>
      {showDivider ? (
        <div
          className="faq-divider h-px border-none bg-[linear-gradient(90deg,transparent,rgba(179,162,254,.38)_18%,rgba(188,228,222,.42)_50%,rgba(179,162,254,.38)_82%,transparent)]"
          aria-hidden="true"
        />
      ) : null}
      <h3 className="m-0">
        <button
          type="button"
          className="faq-trigger flex w-full cursor-pointer list-none items-center justify-between gap-5 border-0 bg-transparent py-[1.35rem] text-left font-serif text-[clamp(1.12rem,1.65vw,1.28rem)] font-semibold leading-[1.35] text-blue transition-colors hover:text-[#152570]"
          aria-expanded={isOpen}
          onClick={onToggle}
        >
          <span className="faq-q flex-1 text-left">{question}</span>
          <span
            className="faq-chevron flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-pastel-lilac/10 transition-[background,transform] duration-300 ease-opal"
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        className={cn("faq-panel", isOpen && "faq-panel--open")}
        aria-hidden={!isOpen}
      >
        <div className="faq-panel__inner">
          <p className="m-0 max-w-[58ch] pr-8 pb-[1.35rem] text-[.92rem] leading-[1.85] text-muted max-md:pr-0">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
