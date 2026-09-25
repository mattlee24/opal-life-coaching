"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const GRID = "/admin/collections/media/grid";
const LIST = "/admin/collections/media";

/** Grid / List switch shown on both media views. */
export function MediaViewToggle() {
  const pathname = usePathname() ?? "";
  const isGrid = pathname.startsWith(GRID);

  return (
    <div className="opal-view-toggle" role="group" aria-label="Photo view">
      <Link href={GRID} className={`opal-view-toggle__btn${isGrid ? " is-active" : ""}`} aria-pressed={isGrid}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
          <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
          <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
          <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
          <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
        </svg>
        Grid
      </Link>
      <Link href={LIST} className={`opal-view-toggle__btn${isGrid ? "" : " is-active"}`} aria-pressed={!isGrid}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" />
        </svg>
        List
      </Link>
    </div>
  );
}
