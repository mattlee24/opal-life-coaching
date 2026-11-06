import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "contact_page_contact_trust" CASCADE;
  ALTER TABLE "contact_page" DROP COLUMN "form_promise";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "contact_page_contact_trust" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  ALTER TABLE "contact_page" ADD COLUMN "form_promise" varchar NOT NULL DEFAULT '';
  ALTER TABLE "contact_page_contact_trust" ADD CONSTRAINT "contact_page_contact_trust_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "contact_page_contact_trust_order_idx" ON "contact_page_contact_trust" USING btree ("_order");
  CREATE INDEX "contact_page_contact_trust_parent_id_idx" ON "contact_page_contact_trust" USING btree ("_parent_id");`)
}
