import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "service_page_sections" DROP COLUMN "overview_caption_script";
  ALTER TABLE "service_page_sections" DROP COLUMN "overview_caption_note";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "service_page_sections" ADD COLUMN "overview_caption_script" varchar DEFAULT '' NOT NULL;
  ALTER TABLE "service_page_sections" ADD COLUMN "overview_caption_note" varchar DEFAULT '' NOT NULL;`)
}
