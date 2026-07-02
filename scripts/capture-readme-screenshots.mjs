import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../docs/screenshots");
const baseUrl = process.env.SCREENSHOT_BASE_URL ?? "http://localhost:3000";

async function waitForHeroAnimations(page) {
  await page.waitForLoadState("networkidle");
  await page.waitForFunction(() => document.fonts.ready);
  await page.waitForTimeout(1600);
}

async function scrollAndSettle(page) {
  const height = await page.evaluate(() => document.body.scrollHeight);
  const steps = 8;
  for (let i = 1; i <= steps; i += 1) {
    await page.evaluate(
      (y) => window.scrollTo({ top: y, behavior: "instant" }),
      Math.floor((height / steps) * i),
    );
    await page.waitForTimeout(350);
  }
  await page.waitForTimeout(1200);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(400);
}

async function capture() {
  await mkdir(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });
  await waitForHeroAnimations(page);
  await page.screenshot({
    path: path.join(outDir, "homepage-hero.jpg"),
    type: "jpeg",
    quality: 88,
    fullPage: false,
  });

  await page.goto(`${baseUrl}/about`, { waitUntil: "domcontentloaded" });
  await waitForHeroAnimations(page);
  await scrollAndSettle(page);
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
  await page.waitForTimeout(600);
  await page.screenshot({
    path: path.join(outDir, "about-cara.jpg"),
    type: "jpeg",
    quality: 88,
    fullPage: false,
  });

  await browser.close();
  console.log("Screenshots saved to", outDir);
}

capture().catch((error) => {
  console.error(error);
  process.exit(1);
});
