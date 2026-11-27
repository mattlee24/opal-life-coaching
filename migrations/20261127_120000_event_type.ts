import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db }: MigrateUpArgs): Promise<void> {
  // Additive only: events get a type (existing rows become "workshop").
  await db.execute(sql`
   DO $$ BEGIN
    CREATE TYPE "public"."enum_events_type" AS ENUM('workshop', 'live-session', 'pamper-event', 'readings', 'other');
   EXCEPTION
    WHEN duplicate_object THEN null;
   END $$;
  ALTER TABLE "events" ADD COLUMN IF NOT EXISTS "type" "enum_events_type" DEFAULT 'workshop' NOT NULL;`)
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "events" DROP COLUMN IF EXISTS "type";
  DROP TYPE IF EXISTS "public"."enum_events_type";`)
}
