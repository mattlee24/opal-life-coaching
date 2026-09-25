/**
 * Seeds Payload with the site's original content.
 *
 *   yarn seed          – fills in anything that is still empty (safe to re-run)
 *   yarn seed --force  – overwrites globals and seeded documents with the original copy
 */
import path from "path";
import { getPayload, type GlobalSlug, type Payload } from "payload";
import { fileURLToPath } from "url";
import config from "../../payload.config";
import * as data from "./data";

const dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(dirname, "../../public/assets");
const force = process.argv.includes("--force");
const context = { disableRevalidate: true };

async function seedMedia(payload: Payload) {
  const ids = new Map<string, number>();
  for (const { file, alt } of data.mediaFiles) {
    const existing = await payload.find({
      collection: "media",
      where: { filename: { equals: file } },
      limit: 1,
      depth: 0,
    });
    if (existing.docs[0]) {
      ids.set(file, existing.docs[0].id);
      continue;
    }
    const doc = await payload.create({
      collection: "media",
      data: { alt },
      filePath: path.join(assetsDir, file),
      context,
    });
    payload.logger.info(`Uploaded ${file}`);
    ids.set(file, doc.id);
  }
  return ids;
}

/** Replace `{ media: "file.jpg" }` placeholders with uploaded Media ids. */
function resolveMedia<T>(value: T, ids: Map<string, number>): T {
  if (Array.isArray(value)) return value.map((item) => resolveMedia(item, ids)) as T;
  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;
    if (typeof record.media === "string" && Object.keys(record).length === 1) {
      const id = ids.get(record.media);
      if (!id) throw new Error(`Missing media for ${record.media}`);
      return id as T;
    }
    return Object.fromEntries(
      Object.entries(record).map(([key, entry]) => [key, resolveMedia(entry, ids)]),
    ) as T;
  }
  return value;
}

async function upsert<C extends "services" | "testimonials" | "faqs">(
  payload: Payload,
  collection: C,
  key: string,
  docs: Record<string, unknown>[],
) {
  for (const doc of docs) {
    const existing = await payload.find({
      collection,
      where: { [key]: { equals: doc[key] } },
      limit: 1,
      depth: 0,
    });
    const current = existing.docs[0];
    if (current && !force) continue;
    if (current) {
      await payload.update({ collection, id: current.id, data: doc as never, context });
    } else {
      await payload.create({ collection, data: doc as never, context });
    }
    payload.logger.info(`Seeded ${collection}: ${String(doc[key])}`);
  }
}

/** A global counts as empty until one of its fields holds a real value. */
function hasContent(doc: Record<string, unknown>): boolean {
  const ignored = new Set(["id", "globalType", "createdAt", "updatedAt"]);
  const check = (value: unknown): boolean => {
    if (typeof value === "string") return value.length > 0;
    if (typeof value === "number") return true;
    if (Array.isArray(value)) return value.length > 0;
    if (value && typeof value === "object") return Object.values(value).some(check);
    return false;
  };
  return Object.entries(doc).some(([key, value]) => !ignored.has(key) && check(value));
}

async function seedGlobals(payload: Payload, ids: Map<string, number>) {
  for (const [slug, globalData] of Object.entries(data.globals)) {
    const existing = await payload.findGlobal({ slug: slug as GlobalSlug, depth: 0 });
    if (!force && hasContent(existing as unknown as Record<string, unknown>)) {
      payload.logger.info(`Skipped global ${slug} (already has content)`);
      continue;
    }
    await payload.updateGlobal({
      slug: slug as GlobalSlug,
      data: resolveMedia(globalData, ids) as never,
      context,
    });
    payload.logger.info(`Seeded global ${slug}`);
  }
}

async function seed() {
  const payload = await getPayload({ config });
  payload.logger.info(`Seeding content${force ? " (force)" : ""}…`);

  const ids = await seedMedia(payload);
  await upsert(payload, "services", "slug", resolveMedia(data.services, ids));
  await upsert(payload, "testimonials", "theme", data.testimonials);
  await upsert(payload, "faqs", "question", data.faqs);
  await seedGlobals(payload, ids);

  payload.logger.info("Seed complete.");
}

await seed();
process.exit(0);
