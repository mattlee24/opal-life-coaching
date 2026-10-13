import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

// Section eyebrows/kickers (and About → My approach step tags) are no longer shown on the site.
// The columns are kept, made optional, rather than dropped so the live site keeps working until
// this release is deployed — safe to drop in a later migration. The social section's eyebrow was
// only added in this release, so it can go straight away.
export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "home_page" DROP COLUMN "social_section_eyebrow";
  ALTER TABLE "services" ALTER COLUMN "hero_eyebrow" DROP NOT NULL;
  ALTER TABLE "home_page" ALTER COLUMN "services_section_eyebrow" DROP NOT NULL;
  ALTER TABLE "home_page" ALTER COLUMN "testimonials_section_eyebrow" DROP NOT NULL;
  ALTER TABLE "about_page_path_steps" ALTER COLUMN "tag" DROP NOT NULL;
  ALTER TABLE "about_page" ALTER COLUMN "hero_eyebrow" DROP NOT NULL;
  ALTER TABLE "about_page" ALTER COLUMN "story_eyebrow" DROP NOT NULL;
  ALTER TABLE "about_page" ALTER COLUMN "essence_kicker" DROP NOT NULL;
  ALTER TABLE "about_page" ALTER COLUMN "path_kicker" DROP NOT NULL;
  ALTER TABLE "contact_page" ALTER COLUMN "faqs_section_eyebrow" DROP NOT NULL;
  ALTER TABLE "closing_cta" ALTER COLUMN "eyebrow" DROP NOT NULL;
  ALTER TABLE "service_page_sections" ALTER COLUMN "benefits_kicker" DROP NOT NULL;
  ALTER TABLE "service_page_sections" ALTER COLUMN "sessions_kicker" DROP NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
  ALTER TABLE "home_page" ADD COLUMN "social_section_eyebrow" varchar NOT NULL DEFAULT 'Stay connected';
  UPDATE "services" SET "hero_eyebrow" = '' WHERE "hero_eyebrow" IS NULL;
  ALTER TABLE "services" ALTER COLUMN "hero_eyebrow" SET NOT NULL;
  UPDATE "home_page" SET "services_section_eyebrow" = '' WHERE "services_section_eyebrow" IS NULL;
  ALTER TABLE "home_page" ALTER COLUMN "services_section_eyebrow" SET NOT NULL;
  UPDATE "home_page" SET "testimonials_section_eyebrow" = '' WHERE "testimonials_section_eyebrow" IS NULL;
  ALTER TABLE "home_page" ALTER COLUMN "testimonials_section_eyebrow" SET NOT NULL;
  UPDATE "about_page_path_steps" SET "tag" = '' WHERE "tag" IS NULL;
  ALTER TABLE "about_page_path_steps" ALTER COLUMN "tag" SET NOT NULL;
  UPDATE "about_page" SET "hero_eyebrow" = '' WHERE "hero_eyebrow" IS NULL;
  ALTER TABLE "about_page" ALTER COLUMN "hero_eyebrow" SET NOT NULL;
  UPDATE "about_page" SET "story_eyebrow" = '' WHERE "story_eyebrow" IS NULL;
  ALTER TABLE "about_page" ALTER COLUMN "story_eyebrow" SET NOT NULL;
  UPDATE "about_page" SET "essence_kicker" = '' WHERE "essence_kicker" IS NULL;
  ALTER TABLE "about_page" ALTER COLUMN "essence_kicker" SET NOT NULL;
  UPDATE "about_page" SET "path_kicker" = '' WHERE "path_kicker" IS NULL;
  ALTER TABLE "about_page" ALTER COLUMN "path_kicker" SET NOT NULL;
  UPDATE "contact_page" SET "faqs_section_eyebrow" = '' WHERE "faqs_section_eyebrow" IS NULL;
  ALTER TABLE "contact_page" ALTER COLUMN "faqs_section_eyebrow" SET NOT NULL;
  UPDATE "closing_cta" SET "eyebrow" = '' WHERE "eyebrow" IS NULL;
  ALTER TABLE "closing_cta" ALTER COLUMN "eyebrow" SET NOT NULL;
  UPDATE "service_page_sections" SET "benefits_kicker" = '' WHERE "benefits_kicker" IS NULL;
  ALTER TABLE "service_page_sections" ALTER COLUMN "benefits_kicker" SET NOT NULL;
  UPDATE "service_page_sections" SET "sessions_kicker" = '' WHERE "sessions_kicker" IS NULL;
  ALTER TABLE "service_page_sections" ALTER COLUMN "sessions_kicker" SET NOT NULL;`)
}
