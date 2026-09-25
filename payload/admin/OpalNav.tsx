import type { Payload } from "payload";
import { getNavSections } from "./navItems";
import { OpalNavClient } from "./OpalNavClient";

/**
 * Curated admin sidebar (replaces Payload's default groups, which are hidden with
 * `admin.group: false`). Server part: looks up the service pages to link to.
 */
export async function OpalNav({ payload }: { payload: Payload }) {
  const sections = await getNavSections(payload);
  return <OpalNavClient sections={sections} />;
}
