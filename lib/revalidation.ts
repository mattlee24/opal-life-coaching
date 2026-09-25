import { createHash } from "crypto";

/**
 * Every public route. Header, footer and site settings appear on all of them,
 * so any content change refreshes the whole (small) site.
 */
export const publicRoutes = [
  "/",
  "/about",
  "/contact",
  "/coaching",
  "/tarot",
  "/reiki",
  "/bookings",
  "/404",
] as const;

export const REVALIDATE_ENDPOINT = "/api/revalidate";
export const REVALIDATE_HEADER = "x-revalidate-token";

/** Token derived from PAYLOAD_SECRET so no extra environment variable is needed. */
export function revalidateToken() {
  const secret = process.env.PAYLOAD_SECRET;
  if (!secret) return null;
  return createHash("sha256").update(`${secret}:revalidate`).digest("hex");
}
