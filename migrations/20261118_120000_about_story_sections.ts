import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

/**
 * About page rework (Cara's notes, 17/11/2026):
 * - story "lead"/"detail"/"facts"/"image"/"caption", the "essence" tab and path "intro" are no longer
 *   in the config. Their columns/tables are left in place (made nullable) so the code still on `main`
 *   keeps working against this shared database; drop them in a later cleanup once main has caught up.
 * - new "story.sections" array (optional heading + text) filled with the copy Cara emailed.
 * - hero secondary button becomes "Get in touch" -> /contact.
 * - the *** markers Cara used for paragraph breaks become blank lines.
 */

const sections: { heading: string | null; text: string }[] = [
  {
    heading: null,
    text: `It’s important to me to be accessible to anyone that wants to work with me. So I offer face to face sessions in Eastergate, Chichester but also by phone, video and online messaging. That way I can also offer a broad price range to suit everyone’s personal circumstances.`,
  },
  {
    heading: 'My Personal Story',
    text: [
      `Although I was always driven to understand myself and the meaning of life, I didn't start to get answers until I suffered from a bout of depression in my early 30s. I thought I was unwell, and as a generally cheerful person, it was a shock to find out how deeply unhappy I was.`,
      `My nan, who I was very close to, had recently died, and soon after I felt a very strong urge to have my first tarot reading. It absolutely blew me away, and she repeated the guidance I had been receiving in my psychology appointments.`,
      `That’s where my personal development journey began, alongside classes at the shop, the professional help I got, and a lot of self-learning, I completely changed my whole life over the following years. I ended up in a much healthier new relationship, found myself, worked through deep patterns and learnt how to spot them and work on them myself as they come up.`,
      `After my daughter was born and we were homebound during lockdown, I started offering online tarot readings and confirmed I had the skills to help others. As I had previously qualified as a Reiki healer I also offered that and my business was born.`,
      `After a while I wanted to evolve how I helped others by offering grounded, practical advice as an extension of the tarot, and for people who aren't into the spiritual side of things but still want to benefit from my expertise, so I added in the coaching.`,
      `I ran ‘Follow Your Path with Cara Hunter’ as a successful part-time business in Australia, where we lived for 7 years, giving me the core skills and experience. Now we've relocated back to England and my daughter is at school, I've rebranded and am currently evolving the business into a full-time profession.`,
    ].join('\n\n'),
  },
  {
    heading: 'My Professional Journey',
    text: [
      `Before starting my business, my career took a few varied paths. I started out in IT, moved into accountancy, then spent 20 years in sales and business development—including working as a business development manager and in estate agency.`,
      `Being in the corporate world for two decades taught me a tremendous amount about business, workplace dynamics, and doing sales with absolute integrity (far away from the pushy, hard-selling tactics I always hated).`,
      `I always had a strong desire to help people so I started up and ran my successful foot health business which came to an end when we relocated to Australia.`,
      `I'm extremely self-motivated, resilient, and good at coming up with creative solutions to problems. Because of that background — combined with working through a wide variety of my own life challenges — I love working with professionals to help them navigate office politics, build confidence, get promotions, find fulfillment, and even bring intuition into how they run their careers and businesses.`,
    ].join('\n\n'),
  },
  {
    heading: 'My Core Philosophy',
    text: [
      `At the heart of everything I do is the belief that we are souls having a human experience, and we are here to grow and learn. I believe that everything we experience in life is a reflection of where we are at, and every challenge we face is showing us how we can grow, learn, and make our lives better.`,
      `Alongside the practical work, I have always been deeply fascinated by the spiritual side of life, including the afterlife and what happens beyond this world. While none of us have all the answers, my own experiences have shown me there is so much more to life than what we can see. Opening up to that bigger picture is a huge part of how I understand the world, and it underpins the safe, open-minded space I hold for my clients.`,
    ].join('\n\n'),
  },
]

export async function up({ db }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "about_page_story_sections" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading" varchar,
  	"text" varchar NOT NULL
  );
  ALTER TABLE "about_page_story_sections" DROP CONSTRAINT IF EXISTS "about_page_story_sections_parent_id_fk";
  ALTER TABLE "about_page_story_sections" ADD CONSTRAINT "about_page_story_sections_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX IF NOT EXISTS "about_page_story_sections_order_idx" ON "about_page_story_sections" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "about_page_story_sections_parent_id_idx" ON "about_page_story_sections" USING btree ("_parent_id");

  ALTER TABLE "about_page" ALTER COLUMN "story_lead" DROP NOT NULL;
  ALTER TABLE "about_page" ALTER COLUMN "story_detail" DROP NOT NULL;
  ALTER TABLE "about_page" ALTER COLUMN "story_image_id" DROP NOT NULL;
  ALTER TABLE "about_page" ALTER COLUMN "story_caption" DROP NOT NULL;
  ALTER TABLE "about_page" ALTER COLUMN "essence_title" DROP NOT NULL;
  ALTER TABLE "about_page" ALTER COLUMN "essence_script" DROP NOT NULL;
  ALTER TABLE "about_page" ALTER COLUMN "essence_intro" DROP NOT NULL;
  ALTER TABLE "about_page" ALTER COLUMN "path_intro" DROP NOT NULL;

  UPDATE "about_page" SET
    "hero_secondary_cta_label" = 'Get in touch',
    "hero_secondary_cta_href" = '/contact',
    "story_sub" = btrim(regexp_replace("story_sub", '\\s*\\*{3}\\s*', E'\n\n', 'g'));`)

  const existing = await db.execute(sql`SELECT count(*)::int AS n FROM "about_page_story_sections"`)
  if (Number((existing.rows[0] as { n: number }).n) > 0) return

  for (const [order, section] of sections.entries()) {
    await db.execute(sql`
      INSERT INTO "about_page_story_sections" ("_order", "_parent_id", "id", "heading", "text")
      SELECT ${order + 1}, "id", substr(md5(random()::text || clock_timestamp()::text), 1, 24), ${section.heading}, ${section.text}
      FROM "about_page"`)
  }
}

export async function down({ db }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE IF EXISTS "about_page_story_sections" CASCADE;
  UPDATE "about_page" SET
    "hero_secondary_cta_label" = 'Read my story',
    "hero_secondary_cta_href" = '#page-content';`)
}
