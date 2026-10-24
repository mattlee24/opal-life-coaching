import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_page" ADD COLUMN "social_section_email_title" varchar;
  ALTER TABLE "home_page" ADD COLUMN "social_section_email_caption" varchar;
  ALTER TABLE "home_page" ADD COLUMN "social_section_email_button_label" varchar;
  ALTER TABLE "site_settings" ADD COLUMN "social_email_list" varchar;

  UPDATE "home_page" SET
    "social_section_email_title" = 'Join my email list',
    "social_section_email_caption" = 'For occasional future updates and news.',
    "social_section_email_button_label" = 'Join';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_page" DROP COLUMN "social_section_email_title";
  ALTER TABLE "home_page" DROP COLUMN "social_section_email_caption";
  ALTER TABLE "home_page" DROP COLUMN "social_section_email_button_label";
  ALTER TABLE "site_settings" DROP COLUMN "social_email_list";`)
}
