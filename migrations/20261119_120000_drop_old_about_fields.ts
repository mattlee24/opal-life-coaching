import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * Cleanup after 20261118_120000_about_story_sections, now that main runs the new About page:
 * drops the story lead/detail/image/caption/facts, the whole "What guides me" (essence) tab
 * and path intro, which that migration only made nullable.
 *
 * `down` recreates the columns/tables (nullable, empty) so the schema matches again; the old
 * copy itself is not restored.
 */
export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE IF EXISTS "about_page_story_facts" CASCADE;
  DROP TABLE IF EXISTS "about_page_essence_items" CASCADE;
  DROP TYPE IF EXISTS "public"."enum_about_page_essence_items_icon";
  DROP TYPE IF EXISTS "public"."enum_about_page_essence_items_accent";

  ALTER TABLE "about_page" DROP CONSTRAINT IF EXISTS "about_page_story_image_id_media_id_fk";
  DROP INDEX IF EXISTS "about_page_story_story_image_idx";
  ALTER TABLE "about_page"
    DROP COLUMN IF EXISTS "story_lead",
    DROP COLUMN IF EXISTS "story_detail",
    DROP COLUMN IF EXISTS "story_image_id",
    DROP COLUMN IF EXISTS "story_caption",
    DROP COLUMN IF EXISTS "essence_kicker",
    DROP COLUMN IF EXISTS "essence_title",
    DROP COLUMN IF EXISTS "essence_script",
    DROP COLUMN IF EXISTS "essence_intro",
    DROP COLUMN IF EXISTS "essence_watermark",
    DROP COLUMN IF EXISTS "path_intro";`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "about_page"
    ADD COLUMN IF NOT EXISTS "story_lead" varchar,
    ADD COLUMN IF NOT EXISTS "story_detail" varchar,
    ADD COLUMN IF NOT EXISTS "story_image_id" integer,
    ADD COLUMN IF NOT EXISTS "story_caption" varchar,
    ADD COLUMN IF NOT EXISTS "essence_kicker" varchar,
    ADD COLUMN IF NOT EXISTS "essence_title" varchar,
    ADD COLUMN IF NOT EXISTS "essence_script" varchar,
    ADD COLUMN IF NOT EXISTS "essence_intro" varchar,
    ADD COLUMN IF NOT EXISTS "essence_watermark" varchar,
    ADD COLUMN IF NOT EXISTS "path_intro" varchar;
  ALTER TABLE "about_page" ADD CONSTRAINT "about_page_story_image_id_media_id_fk" FOREIGN KEY ("story_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX IF NOT EXISTS "about_page_story_story_image_idx" ON "about_page" USING btree ("story_image_id");

  CREATE TYPE "public"."enum_about_page_essence_items_icon" AS ENUM('pace', 'personal', 'holistic');
  CREATE TYPE "public"."enum_about_page_essence_items_accent" AS ENUM('personal', 'holistic', 'pace');
  CREATE TABLE IF NOT EXISTS "about_page_story_facts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  CREATE TABLE IF NOT EXISTS "about_page_essence_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_about_page_essence_items_icon" NOT NULL,
  	"accent" "enum_about_page_essence_items_accent" NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL
  );
  ALTER TABLE "about_page_story_facts" ADD CONSTRAINT "about_page_story_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_essence_items" ADD CONSTRAINT "about_page_essence_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX IF NOT EXISTS "about_page_story_facts_order_idx" ON "about_page_story_facts" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "about_page_story_facts_parent_id_idx" ON "about_page_story_facts" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "about_page_essence_items_order_idx" ON "about_page_essence_items" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "about_page_essence_items_parent_id_idx" ON "about_page_essence_items" USING btree ("_parent_id");`)
}
