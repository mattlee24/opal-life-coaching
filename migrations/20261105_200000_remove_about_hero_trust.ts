import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "about_page_hero_trust" CASCADE;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "about_page_hero_trust" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  ALTER TABLE "about_page_hero_trust" ADD CONSTRAINT "about_page_hero_trust_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "about_page_hero_trust_order_idx" ON "about_page_hero_trust" USING btree ("_order");
  CREATE INDEX "about_page_hero_trust_parent_id_idx" ON "about_page_hero_trust" USING btree ("_parent_id");`)
}
