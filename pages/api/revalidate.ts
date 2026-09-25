import { timingSafeEqual } from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";
import { publicRoutes, REVALIDATE_HEADER, revalidateToken } from "@/lib/revalidation";

/**
 * On-demand ISR for the Pages Router. Called by Payload hooks after content
 * changes (App Router `revalidatePath` does not refresh Pages Router pages).
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const expected = revalidateToken();
  const provided = req.headers[REVALIDATE_HEADER];
  if (
    !expected ||
    typeof provided !== "string" ||
    provided.length !== expected.length ||
    !timingSafeEqual(Buffer.from(provided), Buffer.from(expected))
  ) {
    return res.status(401).json({ message: "Invalid token" });
  }

  const revalidated: string[] = [];
  const failed: string[] = [];
  await Promise.all(
    publicRoutes.map(async (path) => {
      try {
        await res.revalidate(path);
        revalidated.push(path);
      } catch {
        failed.push(path);
      }
    }),
  );

  return res.status(failed.length ? 207 : 200).json({ revalidated, failed });
}
