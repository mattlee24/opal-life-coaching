import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Additive only: a new "events" table plus the home page "Upcoming events" heading.
  // Heading columns are added nullable, filled with starting copy, then made required.
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "events" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"date" timestamp(3) with time zone NOT NULL,
  	"time" varchar,
  	"location" varchar,
  	"description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  CREATE INDEX IF NOT EXISTS "events_updated_at_idx" ON "events" USING btree ("updated_at");
  CREATE INDEX IF NOT EXISTS "events_created_at_idx" ON "events" USING btree ("created_at");

  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "events_id" integer;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX IF NOT EXISTS "payload_locked_documents_rels_events_id_idx" ON "payload_locked_documents_rels" USING btree ("events_id");

  ALTER TABLE "home_page" ADD COLUMN IF NOT EXISTS "events_section_title" varchar;
  ALTER TABLE "home_page" ADD COLUMN IF NOT EXISTS "events_section_script" varchar;
  ALTER TABLE "home_page" ADD COLUMN IF NOT EXISTS "events_section_lead" varchar;
  ALTER TABLE "home_page" ADD COLUMN IF NOT EXISTS "events_section_button_label" varchar;

  UPDATE "home_page" SET
    "events_section_title" = COALESCE("events_section_title", 'Upcoming'),
    "events_section_script" = COALESCE("events_section_script", 'Events'),
    "events_section_lead" = COALESCE("events_section_lead", 'Come and see me in person — mini readings, pamper events and workshops. Places are limited, so get in touch to save yours.'),
    "events_section_button_label" = COALESCE("events_section_button_label", 'Enquire now');

  ALTER TABLE "home_page" ALTER COLUMN "events_section_title" SET NOT NULL;
  ALTER TABLE "home_page" ALTER COLUMN "events_section_script" SET NOT NULL;
  ALTER TABLE "home_page" ALTER COLUMN "events_section_button_label" SET NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT IF EXISTS "payload_locked_documents_rels_events_fk";
  DROP INDEX IF EXISTS "payload_locked_documents_rels_events_id_idx";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN IF EXISTS "events_id";
  DROP TABLE IF EXISTS "events" CASCADE;
  ALTER TABLE "home_page" DROP COLUMN IF EXISTS "events_section_title";
  ALTER TABLE "home_page" DROP COLUMN IF EXISTS "events_section_script";
  ALTER TABLE "home_page" DROP COLUMN IF EXISTS "events_section_lead";
  ALTER TABLE "home_page" DROP COLUMN IF EXISTS "events_section_button_label";`)
}
