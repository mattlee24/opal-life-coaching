import { createContext, useContext, type ReactNode } from "react";
import type { LayoutData } from "@/lib/cms-types";

const LayoutDataContext = createContext<LayoutData | null>(null);

type LayoutDataProviderProps = {
  value: LayoutData;
  children: ReactNode;
};

export function LayoutDataProvider({ value, children }: LayoutDataProviderProps) {
  return <LayoutDataContext.Provider value={value}>{children}</LayoutDataContext.Provider>;
}

/** Shared CMS data (site settings, navigation, service summaries) loaded by every page. */
export function useLayoutData(): LayoutData {
  const value = useContext(LayoutDataContext);
  if (!value) {
    throw new Error("useLayoutData must be used on a page whose getStaticProps returns `layout`.");
  }
  return value;
}

export function useSiteSettings() {
  return useLayoutData().settings;
}
