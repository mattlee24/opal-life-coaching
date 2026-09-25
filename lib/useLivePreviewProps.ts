import { isLivePreviewEvent, mergeData, ready } from "@payloadcms/live-preview";
import { useEffect, useRef, useState } from "react";
import { toSummary, type LayoutData, type Service } from "@/lib/cms-types";
import {
  LIVE_PREVIEW_PARAM,
  PREVIEW_SECTION_MESSAGE,
  previewSectionSelectors,
} from "@/lib/live-preview-shared";

type Doc = Record<string, unknown> & { id?: number | string };
type PageProps = Record<string, unknown> & { layout?: LayoutData };

/** Where each global lives in a page's props. */
const globalProp: Record<string, string> = {
  "home-page": "home",
  "about-page": "about",
  "contact-page": "contact",
  "service-page-sections": "sections",
  "closing-cta": "closingCta",
};

function replaceById<T extends Doc>(list: unknown, doc: T): T[] | undefined {
  if (!Array.isArray(list)) return undefined;
  return list.map((item: T) => (item.id === doc.id ? doc : item));
}

/** The document the admin is editing, as currently shown on the page. */
function currentDoc(props: PageProps, slug: string, isGlobal: boolean, previewId: string | null): Doc | null {
  if (isGlobal) {
    if (slug === "header") return (props.layout?.navigation.header as unknown as Doc) ?? null;
    if (slug === "footer") return (props.layout?.navigation.footer as unknown as Doc) ?? null;
    if (slug === "site-settings") return (props.layout?.settings as unknown as Doc) ?? null;
    return (props[globalProp[slug]] as Doc) ?? null;
  }
  if (slug === "services") return (props.service as Doc) ?? null;
  const list = props[slug] as Doc[] | undefined;
  return list?.find((item) => String(item.id) === previewId) ?? null;
}

/** Put an updated document back into the page props. */
function applyDoc(props: PageProps, slug: string, isGlobal: boolean, doc: Doc): PageProps {
  const layout = props.layout;
  if (isGlobal) {
    if ((slug === "header" || slug === "footer") && layout) {
      return { ...props, layout: { ...layout, navigation: { ...layout.navigation, [slug]: doc } } };
    }
    if (slug === "site-settings" && layout) return { ...props, layout: { ...layout, settings: doc as never } };
    return globalProp[slug] ? { ...props, [globalProp[slug]]: doc } : props;
  }
  if (slug === "services") {
    const service = doc as unknown as Service;
    return {
      ...props,
      service: doc,
      layout: layout && {
        ...layout,
        services: layout.services.map((item) => (item.id === service.id ? toSummary(service) : item)),
      },
    };
  }
  const list = replaceById(props[slug], doc);
  return list ? { ...props, [slug]: list } : props;
}

/** Scroll the preview to the section being edited and give it a soft highlight. */
function showSection(section: string) {
  const selector = previewSectionSelectors[section];
  const el = selector ? document.querySelector<HTMLElement>(selector) : null;
  if (!el) return;
  const isTop = el.getBoundingClientRect().top + window.scrollY < 200;
  const header = document.getElementById("hd")?.offsetHeight ?? 0;
  const top = isTop ? 0 : el.getBoundingClientRect().top + window.scrollY - Math.min(header, 96);
  window.scrollTo({ top, behavior: "smooth" });
  el.animate(
    [
      { boxShadow: "inset 0 0 0 0 rgba(149, 128, 245, 0)" },
      { boxShadow: "inset 0 0 0 4px rgba(149, 128, 245, 0.55)", offset: 0.25 },
      { boxShadow: "inset 0 0 0 0 rgba(149, 128, 245, 0)" },
    ],
    { duration: 1600, easing: "ease-out" },
  );
}

/**
 * Inside Payload's Live Preview pane, merges the editor's unsaved changes into
 * the page props as they type. Does nothing on the public site.
 */
export function useLivePreviewProps<P extends PageProps>(pageProps: P): P {
  const [state, setState] = useState({ source: pageProps, props: pageProps });
  let current = state;
  // New page (navigation or fresh static props): start again from the server data.
  if (state.source !== pageProps) {
    current = { source: pageProps, props: pageProps };
    setState(current);
  }
  const liveProps = current.props;

  // The message handler needs the latest props without re-subscribing.
  const latest = useRef(liveProps);
  useEffect(() => {
    latest.current = liveProps;
  }, [liveProps]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (!params.has(LIVE_PREVIEW_PARAM)) return;

    const serverURL = window.location.origin;
    const previewId = params.get("previewId");

    const onMessage = async (event: MessageEvent) => {
      if (event.origin === serverURL && event.data?.type === PREVIEW_SECTION_MESSAGE) {
        showSection(String(event.data.section));
        return;
      }
      if (!isLivePreviewEvent(event, serverURL)) return;
      const { collectionSlug, globalSlug, data, locale } = event.data;
      const slug = globalSlug ?? collectionSlug;
      if (!slug) return;
      const isGlobal = Boolean(globalSlug);

      const initialData = currentDoc(latest.current, slug, isGlobal, previewId);
      if (!initialData) return;

      try {
        const merged = (await mergeData({
          collectionSlug,
          globalSlug,
          depth: 1,
          incomingData: data,
          initialData,
          locale,
          serverURL,
        })) as Doc;
        setState((prev) => ({ ...prev, props: applyDoc(prev.props, slug, isGlobal, merged) as P }));
      } catch {
        // Ignore transient errors while the editor is mid-change.
      }
    };

    window.addEventListener("message", onMessage);
    ready({ serverURL });
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return liveProps;
}
