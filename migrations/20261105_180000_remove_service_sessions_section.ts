import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "service_page_sections_sessions_steps" CASCADE;
  ALTER TABLE "service_page_sections" DROP CONSTRAINT "service_page_sections_sessions_fallback_image_id_media_id_fk";
  ALTER TABLE "services" DROP CONSTRAINT "services_sessions_image_id_media_id_fk";
  DROP INDEX "service_page_sections_sessions_sessions_fallback_image_idx";
  DROP INDEX "services_sessions_image_idx";
  ALTER TABLE "service_page_sections" DROP COLUMN "sessions_kicker";
  ALTER TABLE "service_page_sections" DROP COLUMN "sessions_title";
  ALTER TABLE "service_page_sections" DROP COLUMN "sessions_script";
  ALTER TABLE "service_page_sections" DROP COLUMN "sessions_lead";
  ALTER TABLE "service_page_sections" DROP COLUMN "sessions_primary_cta_label";
  ALTER TABLE "service_page_sections" DROP COLUMN "sessions_primary_cta_href";
  ALTER TABLE "service_page_sections" DROP COLUMN "sessions_secondary_cta_label";
  ALTER TABLE "service_page_sections" DROP COLUMN "sessions_secondary_cta_href";
  ALTER TABLE "service_page_sections" DROP COLUMN "sessions_caption";
  ALTER TABLE "service_page_sections" DROP COLUMN "sessions_fallback_image_id";
  ALTER TABLE "services" DROP COLUMN "sessions_image_id";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "service_page_sections_sessions_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL
  );
  ALTER TABLE "service_page_sections" ADD COLUMN "sessions_kicker" varchar;
  ALTER TABLE "service_page_sections" ADD COLUMN "sessions_title" varchar DEFAULT '' NOT NULL;
  ALTER TABLE "service_page_sections" ADD COLUMN "sessions_script" varchar DEFAULT '' NOT NULL;
  ALTER TABLE "service_page_sections" ADD COLUMN "sessions_lead" varchar DEFAULT '' NOT NULL;
  ALTER TABLE "service_page_sections" ADD COLUMN "sessions_primary_cta_label" varchar DEFAULT '' NOT NULL;
  ALTER TABLE "service_page_sections" ADD COLUMN "sessions_primary_cta_href" varchar DEFAULT '' NOT NULL;
  ALTER TABLE "service_page_sections" ADD COLUMN "sessions_secondary_cta_label" varchar DEFAULT '' NOT NULL;
  ALTER TABLE "service_page_sections" ADD COLUMN "sessions_secondary_cta_href" varchar DEFAULT '' NOT NULL;
  ALTER TABLE "service_page_sections" ADD COLUMN "sessions_caption" varchar DEFAULT '' NOT NULL;
  ALTER TABLE "service_page_sections" ADD COLUMN "sessions_fallback_image_id" integer;
  ALTER TABLE "services" ADD COLUMN "sessions_image_id" integer;
  ALTER TABLE "service_page_sections_sessions_steps" ADD CONSTRAINT "service_page_sections_sessions_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."service_page_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "service_page_sections" ADD CONSTRAINT "service_page_sections_sessions_fallback_image_id_media_id_fk" FOREIGN KEY ("sessions_fallback_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_sessions_image_id_media_id_fk" FOREIGN KEY ("sessions_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "service_page_sections_sessions_steps_order_idx" ON "service_page_sections_sessions_steps" USING btree ("_order");
  CREATE INDEX "service_page_sections_sessions_steps_parent_id_idx" ON "service_page_sections_sessions_steps" USING btree ("_parent_id");
  CREATE INDEX "service_page_sections_sessions_sessions_fallback_image_idx" ON "service_page_sections" USING btree ("sessions_fallback_image_id");
  CREATE INDEX "services_sessions_image_idx" ON "services" USING btree ("sessions_image_id");`)
}
