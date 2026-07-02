"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  id?: string;
  name: string;
  label: string;
  options: readonly SelectOption[];
  placeholder?: string;
  required?: boolean;
  hint?: string;
  defaultValue?: string;
};

export function Select({
  id: idProp,
  name,
  label,
  options,
  placeholder = "Select an option",
  required,
  hint,
  defaultValue = "",
}: SelectProps) {
  const autoId = useId();
  const id = idProp ?? autoId.replace(/:/g, "");
  const listId = `${id}-list`;
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const selected = options.find((o) => o.value === value);
  const display = selected?.label ?? placeholder;

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className={"form-field flex flex-col gap-[.45rem]"} ref={rootRef}>
      <label
        id={`${id}-label`}
        htmlFor={`${id}-trigger`}
        className={"text-[.72rem] font-bold uppercase tracking-[.08em] text-blue"}
      >
        {label}
      </label>
      <input type="hidden" name={name} value={value} required={required} />
      <div
        className={cn(
          "custom-select relative",
          open && "open",
        )}
      >
        <button
          type="button"
          id={`${id}-trigger`}
          className={"custom-select-trigger flex w-full items-center justify-between gap-3 rounded-xl border border-pastel-lilac/22 bg-[#faf9ff] px-[1.05rem] py-[.85rem] text-left text-[.92rem] font-medium text-text transition-[border-color,box-shadow,background] duration-200 focus-visible:border-pastel-lilac focus-visible:bg-white focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-pastel-lilac/14"}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-labelledby={`${id}-label`}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={selected ? undefined : "custom-select-placeholder text-[rgba(92,88,120,.45)]"}>
            {display}
          </span>
          <span className={"custom-select-chevron mt-[-3px] h-2 w-2 shrink-0 rotate-45 border-r-[2.5px] border-b-[2.5px] border-[#7d68e8] transition-transform duration-[250ms] ease-opal"} aria-hidden="true" />
        </button>
        <ul
          id={listId}
          className={"custom-select-options absolute top-[calc(100%+.35rem)] right-0 left-0 z-30 max-h-[min(240px,42vh)] overflow-y-auto rounded-xl border border-pastel-lilac/24 bg-[linear-gradient(180deg,#fff_0%,#faf8ff_100%)] p-[.4rem] shadow-[0_16px_40px_rgba(179,162,254,.16)]"}
          role="listbox"
          aria-labelledby={`${id}-label`}
          hidden={!open}
        >
          {!required && (
            <li
              role="option"
              aria-selected={value === ""}
              className={cn(
                "custom-select-option cursor-pointer rounded-lg px-[.85rem] py-[.72rem] text-[.9rem] text-text transition-[background,color] duration-150 hover:bg-pastel-lilac/12 hover:text-blue",
                value === "" && "selected bg-pastel-lilac/12 text-blue",
              )}
              onClick={() => {
                setValue("");
                setOpen(false);
              }}
            >
              {placeholder}
            </li>
          )}
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={value === option.value}
              className={cn(
                "custom-select-option cursor-pointer rounded-lg px-[.85rem] py-[.72rem] text-[.9rem] text-text transition-[background,color] duration-150 hover:bg-pastel-lilac/12 hover:text-blue",
                value === option.value && "selected bg-pastel-lilac/12 text-blue",
              )}
              onClick={() => {
                setValue(option.value);
                setOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      </div>
      {hint ? <span className={"field-hint mt-[-.15rem] text-[.76rem] font-normal normal-case tracking-normal text-muted"}>{hint}</span> : null}
    </div>
  );
}
