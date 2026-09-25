import type {
  CollectionAfterChangeHook,
  CollectionAfterDeleteHook,
  GlobalAfterChangeHook,
  PayloadRequest,
  RequestContext,
} from "payload";
import { REVALIDATE_ENDPOINT, REVALIDATE_HEADER, revalidateToken } from "../../lib/revalidation";
import { siteOrigin } from "../utils/siteOrigin";

async function callRevalidateEndpoint(req: PayloadRequest) {
  const origin = siteOrigin(req);
  const token = revalidateToken();
  if (!origin || !token) {
    req.payload.logger.warn("Skipped page revalidation: site URL or PAYLOAD_SECRET unavailable");
    return;
  }

  const headers: Record<string, string> = { [REVALIDATE_HEADER]: token };
  // Lets the call through Vercel Deployment Protection on preview deployments.
  if (process.env.VERCEL_AUTOMATION_BYPASS_SECRET) {
    headers["x-vercel-protection-bypass"] = process.env.VERCEL_AUTOMATION_BYPASS_SECRET;
  }

  try {
    const response = await fetch(`${origin}${REVALIDATE_ENDPOINT}`, {
      method: "POST",
      headers,
      signal: AbortSignal.timeout(20_000),
    });
    if (!response.ok) {
      req.payload.logger.warn(`Page revalidation responded ${response.status}: ${await response.text()}`);
      return;
    }
    req.payload.logger.info("Revalidated public pages after content change");
  } catch (error) {
    req.payload.logger.warn(`Page revalidation failed: ${(error as Error).message}`);
  }
}

/**
 * Regenerate every public page after a content change. Pages Router ISR can only
 * be refreshed from a Pages API route (`res.revalidate`), so this calls
 * pages/api/revalidate.ts on the same deployment.
 *
 * Hooks run inside Payload's database transaction, so the call is deferred with
 * Next's `after()` until the admin request has finished and the change is
 * committed — otherwise the regenerated pages would still show the old content.
 */
async function revalidateSite(req: PayloadRequest, context: RequestContext) {
  if (context.disableRevalidate) return;

  try {
    // Loaded lazily: payload.config is also imported by Pages Router getStaticProps.
    const { after } = await import("next/server");
    after(() => callRevalidateEndpoint(req));
  } catch {
    // Outside a Next.js request (e.g. CLI scripts) there is no `after`; run now.
    await callRevalidateEndpoint(req);
  }
}

export const revalidateCollectionAfterChange: CollectionAfterChangeHook = async ({ doc, req, context }) => {
  await revalidateSite(req, context);
  return doc;
};

export const revalidateCollectionAfterDelete: CollectionAfterDeleteHook = async ({ doc, req, context }) => {
  await revalidateSite(req, context);
  return doc;
};

export const revalidateGlobalAfterChange: GlobalAfterChangeHook = async ({ doc, req, context }) => {
  await revalidateSite(req, context);
  return doc;
};

export const revalidateCollectionHooks = {
  afterChange: [revalidateCollectionAfterChange],
  afterDelete: [revalidateCollectionAfterDelete],
};

export const revalidateGlobalHooks = {
  afterChange: [revalidateGlobalAfterChange],
};
