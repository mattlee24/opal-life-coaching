#!/usr/bin/env node
/**
 * Create Cal.com event types from scripts/cal-events-from-fresha.json
 *
 * Usage:
 *   CAL_API_KEY=cal_live_xxx node scripts/setup-cal-events.mjs
 *   CAL_API_KEY=cal_live_xxx node scripts/setup-cal-events.mjs --dry-run
 *
 * Get an API key: Cal.com → Settings → Developer → API Keys
 */

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dryRun = process.argv.includes("--dry-run");
const apiKey = process.env.CAL_API_KEY;

const IN_PERSON_ADDRESS =
  "Opal Life Coaching, Farrenden Way, Eastergate, West Sussex, England";

function locationFor(type) {
  if (type === "inPerson") {
    return [{ type: "address", address: IN_PERSON_ADDRESS, public: true }];
  }
  return [{ type: "integration", integration: "cal-video" }];
}

function buildDescription(event) {
  const parts = [event.description];
  if (event.priceGbp != null) parts.push(`Price: £${event.priceGbp}`);
  if (event.note) parts.push(event.note);
  return parts.join("\n\n");
}

async function listExistingSlugs() {
  const res = await fetch("https://api.cal.com/v2/event-types", {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "cal-api-version": "2024-06-14",
    },
  });
  if (!res.ok) {
    throw new Error(`Failed to list event types (${res.status}): ${await res.text()}`);
  }
  const data = await res.json();
  const items = data?.data ?? data?.eventTypes ?? [];
  return new Set(items.map((item) => item.slug).filter(Boolean));
}

async function createEvent(event) {
  const body = {
    title: event.title,
    slug: event.slug,
    lengthInMinutes: event.lengthInMinutes,
    description: buildDescription(event),
    locations: locationFor(event.location),
  };

  if (dryRun) {
    console.log("[dry-run] would create:", body.title, `(${event.slug}, ${event.lengthInMinutes}m)`);
    return { dryRun: true, slug: event.slug };
  }

  const res = await fetch("https://api.cal.com/v2/event-types", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "cal-api-version": "2024-06-14",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  if (!res.ok) {
    throw new Error(`Failed to create "${event.title}" (${res.status}): ${text}`);
  }

  const parsed = JSON.parse(text);
  const created = parsed?.data ?? parsed;
  console.log("✓ Created:", event.title, "→", created.slug ?? event.slug);
  return created;
}

async function main() {
  if (!apiKey && !dryRun) {
    console.error(
      "Missing CAL_API_KEY.\n\n" +
        "1. Open https://app.cal.com/settings/developer\n" +
        "2. Create an API key\n" +
        "3. Run: CAL_API_KEY=cal_live_xxx node scripts/setup-cal-events.mjs\n\n" +
        "Or preview without creating: node scripts/setup-cal-events.mjs --dry-run",
    );
    process.exit(1);
  }

  const events = JSON.parse(
    readFileSync(join(__dirname, "cal-events-from-fresha.json"), "utf8"),
  );

  console.log(`Loaded ${events.length} event types from Fresha catalog.`);

  const existing = apiKey && !dryRun ? await listExistingSlugs() : new Set();
  let created = 0;
  let skipped = 0;

  for (const event of events) {
    if (existing.has(event.slug)) {
      console.log("– Skipped (exists):", event.title);
      skipped += 1;
      continue;
    }
    await createEvent(event);
    created += 1;
  }

  console.log(`\nDone. Created ${created}, skipped ${skipped}.`);
  if (dryRun) console.log("Re-run without --dry-run and CAL_API_KEY to create in Cal.com.");
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
