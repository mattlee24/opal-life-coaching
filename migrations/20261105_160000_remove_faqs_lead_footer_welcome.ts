import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contact_page" DROP COLUMN "faqs_section_lead";
  ALTER TABLE "footer" DROP COLUMN "title";
  ALTER TABLE "footer" DROP COLUMN "script";
  ALTER TABLE "footer" DROP COLUMN "calm_text";
  ALTER TABLE "footer" DROP COLUMN "bottom_link_label";
  ALTER TABLE "footer" DROP COLUMN "bottom_link_href";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contact_page" ADD COLUMN "faqs_section_lead" varchar NOT NULL DEFAULT '';
  ALTER TABLE "footer" ADD COLUMN "title" varchar NOT NULL DEFAULT '';
  ALTER TABLE "footer" ADD COLUMN "script" varchar NOT NULL DEFAULT '';
  ALTER TABLE "footer" ADD COLUMN "calm_text" varchar NOT NULL DEFAULT '';
  ALTER TABLE "footer" ADD COLUMN "bottom_link_label" varchar NOT NULL DEFAULT '';
  ALTER TABLE "footer" ADD COLUMN "bottom_link_href" varchar NOT NULL DEFAULT '';`)
}
