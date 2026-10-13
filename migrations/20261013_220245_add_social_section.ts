import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Columns are added nullable, filled with the starting copy, then made required —
  // adding NOT NULL columns straight away would fail on the existing home_page row.
  await db.execute(sql`
   ALTER TABLE "home_page" ADD COLUMN "social_section_eyebrow" varchar;
  ALTER TABLE "home_page" ADD COLUMN "social_section_title" varchar;
  ALTER TABLE "home_page" ADD COLUMN "social_section_script" varchar;
  ALTER TABLE "home_page" ADD COLUMN "social_section_lead" varchar;
  ALTER TABLE "home_page" ADD COLUMN "social_section_body" varchar;
  ALTER TABLE "home_page" ADD COLUMN "social_section_follow_label" varchar;
  ALTER TABLE "home_page" ADD COLUMN "social_section_facebook_caption" varchar;
  ALTER TABLE "home_page" ADD COLUMN "social_section_instagram_caption" varchar;
  ALTER TABLE "home_page" ADD COLUMN "social_section_youtube_caption" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "social_youtube" varchar;

  UPDATE "home_page" SET
    "social_section_eyebrow" = 'Stay connected',
    "social_section_title" = 'Free Tips, Guidance',
    "social_section_script" = '& Inspiration',
    "social_section_lead" = 'I regularly share free tips, guidance and inspiration to help you slow down, reconnect with yourself and navigate everyday challenges.',
    "social_section_body" = 'Follow me on Facebook and Instagram for Relax & Reset sessions, intuitive card readings and practical coaching tips.',
    "social_section_follow_label" = 'Follow',
    "social_section_facebook_caption" = 'Opal Life Coaching',
    "social_section_instagram_caption" = '@opal_life_coaching';

  UPDATE "site_settings" SET "social_facebook" = 'https://www.facebook.com/share/18Fe2wwWNP/'
    WHERE "social_facebook" IS NULL OR "social_facebook" = '';
  UPDATE "site_settings" SET "social_instagram" = 'https://www.instagram.com/opal_life_coaching'
    WHERE "social_instagram" IS NULL OR "social_instagram" = '';

  ALTER TABLE "home_page" ALTER COLUMN "social_section_eyebrow" SET NOT NULL;
  ALTER TABLE "home_page" ALTER COLUMN "social_section_title" SET NOT NULL;
  ALTER TABLE "home_page" ALTER COLUMN "social_section_script" SET NOT NULL;
  ALTER TABLE "home_page" ALTER COLUMN "social_section_lead" SET NOT NULL;
  ALTER TABLE "home_page" ALTER COLUMN "social_section_body" SET NOT NULL;
  ALTER TABLE "home_page" ALTER COLUMN "social_section_follow_label" SET NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_page" DROP COLUMN "social_section_eyebrow";
  ALTER TABLE "home_page" DROP COLUMN "social_section_title";
  ALTER TABLE "home_page" DROP COLUMN "social_section_script";
  ALTER TABLE "home_page" DROP COLUMN "social_section_lead";
  ALTER TABLE "home_page" DROP COLUMN "social_section_body";
  ALTER TABLE "home_page" DROP COLUMN "social_section_follow_label";
  ALTER TABLE "home_page" DROP COLUMN "social_section_facebook_caption";
  ALTER TABLE "home_page" DROP COLUMN "social_section_instagram_caption";
  ALTER TABLE "home_page" DROP COLUMN "social_section_youtube_caption";
  ALTER TABLE "site_settings" DROP COLUMN "social_youtube";`)
}
