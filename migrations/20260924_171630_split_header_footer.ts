import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "header_links_before_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "header_links_after_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"services_label" varchar NOT NULL,
  	"book_cta_label" varchar NOT NULL,
  	"book_cta_href" varchar NOT NULL,
  	"mobile_contact_cta_label" varchar NOT NULL,
  	"mobile_contact_cta_href" varchar NOT NULL,
  	"dropdown_eyebrow" varchar NOT NULL,
  	"dropdown_script" varchar NOT NULL,
  	"dropdown_lead" varchar NOT NULL,
  	"dropdown_cta_label" varchar NOT NULL,
  	"dropdown_cta_href" varchar NOT NULL,
  	"dropdown_footnote" varchar NOT NULL,
  	"dropdown_footnote_link_label" varchar NOT NULL,
  	"dropdown_footnote_link_href" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_explore_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "footer_location_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"script" varchar NOT NULL,
  	"calm_text" varchar NOT NULL,
  	"blurb" varchar NOT NULL,
  	"brand_script" varchar NOT NULL,
  	"explore_heading" varchar NOT NULL,
  	"contact_heading" varchar NOT NULL,
  	"cta_label" varchar NOT NULL,
  	"cta_href" varchar NOT NULL,
  	"bottom_link_label" varchar NOT NULL,
  	"bottom_link_href" varchar NOT NULL,
  	"copyright_name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  -- Carry existing content over from the old combined "navigation" global.
  INSERT INTO "header" ("id", "services_label", "book_cta_label", "book_cta_href", "mobile_contact_cta_label", "mobile_contact_cta_href", "dropdown_eyebrow", "dropdown_script", "dropdown_lead", "dropdown_cta_label", "dropdown_cta_href", "dropdown_footnote", "dropdown_footnote_link_label", "dropdown_footnote_link_href", "updated_at", "created_at")
    SELECT "id", "header_services_label", "header_book_cta_label", "header_book_cta_href", "header_mobile_contact_cta_label", "header_mobile_contact_cta_href", "header_dropdown_eyebrow", "header_dropdown_script", "header_dropdown_lead", "header_dropdown_cta_label", "header_dropdown_cta_href", "header_dropdown_footnote", "header_dropdown_footnote_link_label", "header_dropdown_footnote_link_href", "updated_at", "created_at" FROM "navigation";
  INSERT INTO "header_links_before_services" ("_order", "_parent_id", "id", "label", "href")
    SELECT "_order", "_parent_id", "id", "label", "href" FROM "navigation_header_links_before_services";
  INSERT INTO "header_links_after_services" ("_order", "_parent_id", "id", "label", "href")
    SELECT "_order", "_parent_id", "id", "label", "href" FROM "navigation_header_links_after_services";
  INSERT INTO "footer" ("id", "title", "script", "calm_text", "blurb", "brand_script", "explore_heading", "contact_heading", "cta_label", "cta_href", "bottom_link_label", "bottom_link_href", "copyright_name", "updated_at", "created_at")
    SELECT "id", "footer_title", "footer_script", "footer_calm_text", "footer_blurb", "footer_brand_script", "footer_explore_heading", "footer_contact_heading", "footer_cta_label", "footer_cta_href", "footer_bottom_link_label", "footer_bottom_link_href", "footer_copyright_name", "updated_at", "created_at" FROM "navigation";
  INSERT INTO "footer_explore_links" ("_order", "_parent_id", "id", "label", "href")
    SELECT "_order", "_parent_id", "id", "label", "href" FROM "navigation_footer_explore_links";
  INSERT INTO "footer_location_lines" ("_order", "_parent_id", "id", "text")
    SELECT "_order", "_parent_id", "id", "text" FROM "navigation_footer_location_lines";
  SELECT setval(pg_get_serial_sequence('"header"', 'id'), COALESCE((SELECT MAX("id") FROM "header"), 0) + 1, false);
  SELECT setval(pg_get_serial_sequence('"footer"', 'id'), COALESCE((SELECT MAX("id") FROM "footer"), 0) + 1, false);

  DROP TABLE "navigation_header_links_before_services" CASCADE;
  DROP TABLE "navigation_header_links_after_services" CASCADE;
  DROP TABLE "navigation_footer_explore_links" CASCADE;
  DROP TABLE "navigation_footer_location_lines" CASCADE;
  DROP TABLE "navigation" CASCADE;
  ALTER TABLE "header_links_before_services" ADD CONSTRAINT "header_links_before_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_links_after_services" ADD CONSTRAINT "header_links_after_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_explore_links" ADD CONSTRAINT "footer_explore_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_location_lines" ADD CONSTRAINT "footer_location_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "header_links_before_services_order_idx" ON "header_links_before_services" USING btree ("_order");
  CREATE INDEX "header_links_before_services_parent_id_idx" ON "header_links_before_services" USING btree ("_parent_id");
  CREATE INDEX "header_links_after_services_order_idx" ON "header_links_after_services" USING btree ("_order");
  CREATE INDEX "header_links_after_services_parent_id_idx" ON "header_links_after_services" USING btree ("_parent_id");
  CREATE INDEX "footer_explore_links_order_idx" ON "footer_explore_links" USING btree ("_order");
  CREATE INDEX "footer_explore_links_parent_id_idx" ON "footer_explore_links" USING btree ("_parent_id");
  CREATE INDEX "footer_location_lines_order_idx" ON "footer_location_lines" USING btree ("_order");
  CREATE INDEX "footer_location_lines_parent_id_idx" ON "footer_location_lines" USING btree ("_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "navigation_header_links_before_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "navigation_header_links_after_services" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "navigation_footer_explore_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"href" varchar NOT NULL
  );
  
  CREATE TABLE "navigation_footer_location_lines" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "navigation" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"header_services_label" varchar NOT NULL,
  	"header_book_cta_label" varchar NOT NULL,
  	"header_book_cta_href" varchar NOT NULL,
  	"header_mobile_contact_cta_label" varchar NOT NULL,
  	"header_mobile_contact_cta_href" varchar NOT NULL,
  	"header_dropdown_eyebrow" varchar NOT NULL,
  	"header_dropdown_script" varchar NOT NULL,
  	"header_dropdown_lead" varchar NOT NULL,
  	"header_dropdown_cta_label" varchar NOT NULL,
  	"header_dropdown_cta_href" varchar NOT NULL,
  	"header_dropdown_footnote" varchar NOT NULL,
  	"header_dropdown_footnote_link_label" varchar NOT NULL,
  	"header_dropdown_footnote_link_href" varchar NOT NULL,
  	"footer_title" varchar NOT NULL,
  	"footer_script" varchar NOT NULL,
  	"footer_calm_text" varchar NOT NULL,
  	"footer_blurb" varchar NOT NULL,
  	"footer_brand_script" varchar NOT NULL,
  	"footer_explore_heading" varchar NOT NULL,
  	"footer_contact_heading" varchar NOT NULL,
  	"footer_cta_label" varchar NOT NULL,
  	"footer_cta_href" varchar NOT NULL,
  	"footer_bottom_link_label" varchar NOT NULL,
  	"footer_bottom_link_href" varchar NOT NULL,
  	"footer_copyright_name" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  DROP TABLE "header_links_before_services" CASCADE;
  DROP TABLE "header_links_after_services" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "footer_explore_links" CASCADE;
  DROP TABLE "footer_location_lines" CASCADE;
  DROP TABLE "footer" CASCADE;
  ALTER TABLE "navigation_header_links_before_services" ADD CONSTRAINT "navigation_header_links_before_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_header_links_after_services" ADD CONSTRAINT "navigation_header_links_after_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_footer_explore_links" ADD CONSTRAINT "navigation_footer_explore_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_footer_location_lines" ADD CONSTRAINT "navigation_footer_location_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "navigation_header_links_before_services_order_idx" ON "navigation_header_links_before_services" USING btree ("_order");
  CREATE INDEX "navigation_header_links_before_services_parent_id_idx" ON "navigation_header_links_before_services" USING btree ("_parent_id");
  CREATE INDEX "navigation_header_links_after_services_order_idx" ON "navigation_header_links_after_services" USING btree ("_order");
  CREATE INDEX "navigation_header_links_after_services_parent_id_idx" ON "navigation_header_links_after_services" USING btree ("_parent_id");
  CREATE INDEX "navigation_footer_explore_links_order_idx" ON "navigation_footer_explore_links" USING btree ("_order");
  CREATE INDEX "navigation_footer_explore_links_parent_id_idx" ON "navigation_footer_explore_links" USING btree ("_parent_id");
  CREATE INDEX "navigation_footer_location_lines_order_idx" ON "navigation_footer_location_lines" USING btree ("_order");
  CREATE INDEX "navigation_footer_location_lines_parent_id_idx" ON "navigation_footer_location_lines" USING btree ("_parent_id");`)
}
