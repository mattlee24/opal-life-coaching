import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_home_page_services_section_cards_slug" AS ENUM('coaching', 'tarot', 'reiki');
  CREATE TABLE "home_page_services_section_cards" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"slug" "enum_home_page_services_section_cards_slug" NOT NULL,
  	"title" varchar NOT NULL,
  	"tag" varchar NOT NULL,
  	"icon_id" integer NOT NULL,
  	"card_description" varchar NOT NULL
  );

  ALTER TABLE "home_page_services_section_cards" ADD CONSTRAINT "home_page_services_section_cards_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page_services_section_cards" ADD CONSTRAINT "home_page_services_section_cards_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "home_page_services_section_cards_order_idx" ON "home_page_services_section_cards" USING btree ("_order");
  CREATE INDEX "home_page_services_section_cards_parent_id_idx" ON "home_page_services_section_cards" USING btree ("_parent_id");
  CREATE INDEX "home_page_services_section_cards_icon_idx" ON "home_page_services_section_cards" USING btree ("icon_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "home_page_services_section_cards" CASCADE;
  DROP TYPE "public"."enum_home_page_services_section_cards_slug";`)
}
