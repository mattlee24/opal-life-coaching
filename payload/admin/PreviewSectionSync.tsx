"use client";

import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

/**
 * Keeps the Live Preview pane in step with the form: when an editor clicks into a
 * field (or switches tab), the preview scrolls to that section of the page.
 *
 * Maps the first part of each field's path (Payload renders inputs with
 * id="field-<path>", e.g. field-meetCara__quote) to a section name understood by
 * lib/useLivePreviewProps.ts on the site.
 */
const sectionMaps: { match: RegExp; sections: Record<string, string> }[] = [
  {
    match: /^\/admin\/globals\/home-page/,
    sections: {
      hero: "hero",
      values: "values",
      servicesSection: "services",
      meetCara: "meet-cara",
      testimonialsSection: "testimonials",
    },
  },
  {
    match: /^\/admin\/globals\/about-page/,
    sections: { hero: "about-hero", story: "story", essence: "essence", path: "path" },
  },
  {
    match: /^\/admin\/globals\/contact-page/,
    sections: { contact: "contact", form: "contact-form", faqsSection: "faqs" },
  },
  {
    match: /^\/admin\/globals\/service-page-sections/,
    sections: { hero: "hero", overview: "overview", benefits: "benefits", sessions: "sessions" },
  },
  {
    match: /^\/admin\/collections\/services\/[^/]+/,
    sections: {
      title: "hero",
      shortName: "hero",
      tag: "hero",
      icon: "hero",
      cardDescription: "hero",
      navShort: "hero",
      hero: "hero",
      intro: "overview",
      pullQuote: "overview",
      overview: "overview",
      benefits: "benefits",
      sessionsImage: "sessions",
    },
  },
];

function fieldRoot(el: Element | null): string | null {
  const field = el?.closest('[id^="field-"]');
  return field ? field.id.slice("field-".length).split("__")[0] : null;
}

export function PreviewSectionSync({ children }: { children?: ReactNode }) {
  const pathname = usePathname() ?? "";

  useEffect(() => {
    const sections = sectionMaps.find((entry) => entry.match.test(pathname))?.sections;
    if (!sections) return;

    let current: string | null = null;

    const send = (section: string) => {
      const iframe = document.getElementById("live-preview-iframe") as HTMLIFrameElement | null;
      if (!iframe?.contentWindow || !iframe.src) return;
      iframe.contentWindow.postMessage(
        { type: "opal-preview-section", section },
        new URL(iframe.src, window.location.href).origin,
      );
    };

    const select = (root: string | null) => {
      const section = root ? sections[root] : undefined;
      if (!section || section === current) return;
      current = section;
      send(section);
    };

    const onFocusIn = (event: FocusEvent) => select(fieldRoot(event.target as Element));

    // Switching tab doesn't focus a field, so look at the first field in the new tab.
    const onClick = (event: MouseEvent) => {
      if (!(event.target as Element).closest?.(".tabs-field__tab-button")) return;
      window.setTimeout(() => {
        select(fieldRoot(document.querySelector('.tabs-field__content-wrap [id^="field-"]')));
      }, 60);
    };

    // When the preview (re)loads it reports "ready" — send the current section again.
    const onMessage = (event: MessageEvent) => {
      if (event.data?.type === "payload-live-preview" && event.data.ready && current) {
        window.setTimeout(() => current && send(current), 400);
      }
    };

    document.addEventListener("focusin", onFocusIn);
    document.addEventListener("click", onClick);
    window.addEventListener("message", onMessage);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      document.removeEventListener("click", onClick);
      window.removeEventListener("message", onMessage);
    };
  }, [pathname]);

  return <>{children}</>;
}
