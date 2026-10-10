import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_page" DROP COLUMN "hero_eyebrow";
   ALTER TABLE "contact_page" DROP COLUMN "contact_eyebrow";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "home_page" ADD COLUMN "hero_eyebrow" varchar NOT NULL DEFAULT '';
   ALTER TABLE "contact_page" ADD COLUMN "contact_eyebrow" varchar NOT NULL DEFAULT '';`)
}
