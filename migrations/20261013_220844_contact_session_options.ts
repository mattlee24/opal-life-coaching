import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_contact_page_contact_session_options_icon" AS ENUM('online', 'location', 'message');
  CREATE TABLE "contact_page_contact_session_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_contact_page_contact_session_options_icon" DEFAULT 'online' NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar
  );
  
  ALTER TABLE "contact_page_contact_session_options" ADD CONSTRAINT "contact_page_contact_session_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "contact_page_contact_session_options_order_idx" ON "contact_page_contact_session_options" USING btree ("_order");
  CREATE INDEX "contact_page_contact_session_options_parent_id_idx" ON "contact_page_contact_session_options" USING btree ("_parent_id");
  -- The old single-location columns are left in place (now optional) rather than dropped, so the
  -- live site keeps working until this release is deployed. Safe to drop in a later migration.
  ALTER TABLE "contact_page" ALTER COLUMN "contact_location_title" DROP NOT NULL;
  ALTER TABLE "contact_page" ALTER COLUMN "contact_location_text" DROP NOT NULL;

  INSERT INTO "contact_page_contact_session_options" ("_order", "_parent_id", "id", "icon", "title", "text")
  SELECT v."order", cp."id", substr(md5(random()::text), 1, 24), v."icon"::"enum_contact_page_contact_session_options_icon", v."title", v."text"
  FROM (SELECT "id" FROM "contact_page" ORDER BY "id" LIMIT 1) cp
  CROSS JOIN (VALUES
    (1, 'online', 'Online, Phone & Message', 'Video, phone or message sessions from wherever you are'),
    (2, 'location', 'In Person – Chichester', 'Sessions in Chichester, West Sussex')
  ) AS v("order", "icon", "title", "text");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "contact_page_contact_session_options" CASCADE;
  UPDATE "contact_page" SET "contact_location_title" = COALESCE("contact_location_title", 'In person'),
    "contact_location_text" = COALESCE("contact_location_text", 'Sessions in Chichester, West Sussex');
  ALTER TABLE "contact_page" ALTER COLUMN "contact_location_title" SET NOT NULL;
  ALTER TABLE "contact_page" ALTER COLUMN "contact_location_text" SET NOT NULL;
  DROP TYPE "public"."enum_contact_page_contact_session_options_icon";`)
}
