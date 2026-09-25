import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_services_slug" AS ENUM('coaching', 'tarot', 'reiki');
  CREATE TYPE "public"."enum_services_hero_tone" AS ENUM('lavender', 'sage', 'opal');
  CREATE TYPE "public"."enum_home_page_values_icon" AS ENUM('pace', 'personal', 'holistic');
  CREATE TYPE "public"."enum_about_page_essence_items_icon" AS ENUM('pace', 'personal', 'holistic');
  CREATE TYPE "public"."enum_about_page_essence_items_accent" AS ENUM('personal', 'holistic', 'pace');
  CREATE TYPE "public"."enum_about_page_path_steps_icon" AS ENUM('pace', 'personal', 'holistic');
  CREATE TYPE "public"."enum_about_page_path_steps_accent" AS ENUM('coaching', 'tarot', 'reiki');
  CREATE TABLE "services_hero_trust" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "services_benefits" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "services_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"price" varchar NOT NULL,
  	"duration" varchar NOT NULL,
  	"format" varchar NOT NULL,
  	"description" varchar
  );
  
  CREATE TABLE "services_expectations" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "services_faqs" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL
  );
  
  CREATE TABLE "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"title" varchar NOT NULL,
  	"slug" "enum_services_slug" NOT NULL,
  	"short_name" varchar NOT NULL,
  	"tag" varchar NOT NULL,
  	"icon_id" integer NOT NULL,
  	"card_description" varchar NOT NULL,
  	"nav_short" varchar NOT NULL,
  	"hero_eyebrow" varchar NOT NULL,
  	"hero_title" varchar NOT NULL,
  	"hero_script" varchar NOT NULL,
  	"hero_description" varchar NOT NULL,
  	"hero_tone" "enum_services_hero_tone" DEFAULT 'lavender',
  	"intro" varchar NOT NULL,
  	"pull_quote" varchar NOT NULL,
  	"overview_title" varchar NOT NULL,
  	"overview_script" varchar NOT NULL,
  	"overview_subline" varchar NOT NULL,
  	"sessions_image_id" integer,
  	"seo_title" varchar NOT NULL,
  	"seo_description" varchar NOT NULL,
  	"booking_label" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "testimonials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"theme" varchar NOT NULL,
  	"quote" varchar NOT NULL,
  	"cite" varchar NOT NULL,
  	"spotlight" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "faqs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"_order" varchar,
  	"question" varchar NOT NULL,
  	"answer" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"alt" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric
  );
  
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"reset_password_requested_at" timestamp(3) with time zone,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"testimonials_id" integer,
  	"faqs_id" integer,
  	"media_id" integer,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "home_page_hero_trust" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "home_page_values" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_home_page_values_icon" NOT NULL,
  	"title" varchar NOT NULL,
  	"description" varchar NOT NULL
  );
  
  CREATE TABLE "home_page_meet_cara_essence" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "home_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_eyebrow" varchar NOT NULL,
  	"hero_title" varchar NOT NULL,
  	"hero_script" varchar NOT NULL,
  	"hero_lead" varchar NOT NULL,
  	"hero_primary_cta_label" varchar NOT NULL,
  	"hero_primary_cta_href" varchar NOT NULL,
  	"hero_secondary_cta_label" varchar NOT NULL,
  	"hero_secondary_cta_href" varchar NOT NULL,
  	"hero_background_image_id" integer NOT NULL,
  	"services_section_eyebrow" varchar NOT NULL,
  	"services_section_title" varchar NOT NULL,
  	"services_section_script" varchar NOT NULL,
  	"services_section_lead" varchar NOT NULL,
  	"services_section_card_button_label" varchar NOT NULL,
  	"services_section_footer_before" varchar NOT NULL,
  	"services_section_footer_after" varchar,
  	"services_section_footer_link_label" varchar NOT NULL,
  	"services_section_footer_link_href" varchar NOT NULL,
  	"meet_cara_eyebrow" varchar NOT NULL,
  	"meet_cara_greeting" varchar NOT NULL,
  	"meet_cara_name" varchar NOT NULL,
  	"meet_cara_quote" varchar NOT NULL,
  	"meet_cara_body" varchar NOT NULL,
  	"meet_cara_cta_label" varchar NOT NULL,
  	"meet_cara_cta_href" varchar NOT NULL,
  	"meet_cara_note" varchar NOT NULL,
  	"meet_cara_badge" varchar NOT NULL,
  	"meet_cara_portrait_id" integer NOT NULL,
  	"testimonials_section_eyebrow" varchar NOT NULL,
  	"testimonials_section_title" varchar NOT NULL,
  	"testimonials_section_script" varchar NOT NULL,
  	"testimonials_section_lead" varchar NOT NULL,
  	"testimonials_section_footer_text" varchar NOT NULL,
  	"testimonials_section_cta_label" varchar NOT NULL,
  	"testimonials_section_cta_href" varchar NOT NULL,
  	"seo_title" varchar NOT NULL,
  	"seo_description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "about_page_hero_trust" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "about_page_story_facts" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "about_page_essence_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_about_page_essence_items_icon" NOT NULL,
  	"accent" "enum_about_page_essence_items_accent" NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "about_page_path_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"icon" "enum_about_page_path_steps_icon" NOT NULL,
  	"accent" "enum_about_page_path_steps_accent" NOT NULL,
  	"tag" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL,
  	"note" varchar NOT NULL
  );
  
  CREATE TABLE "about_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_eyebrow" varchar NOT NULL,
  	"hero_title" varchar NOT NULL,
  	"hero_script" varchar NOT NULL,
  	"hero_lead" varchar NOT NULL,
  	"hero_primary_cta_label" varchar NOT NULL,
  	"hero_primary_cta_href" varchar NOT NULL,
  	"hero_secondary_cta_label" varchar NOT NULL,
  	"hero_secondary_cta_href" varchar NOT NULL,
  	"hero_badge" varchar NOT NULL,
  	"hero_portrait_id" integer NOT NULL,
  	"story_eyebrow" varchar NOT NULL,
  	"story_title" varchar NOT NULL,
  	"story_script" varchar NOT NULL,
  	"story_sub" varchar NOT NULL,
  	"story_lead" varchar NOT NULL,
  	"story_detail" varchar NOT NULL,
  	"story_image_id" integer NOT NULL,
  	"story_caption" varchar NOT NULL,
  	"essence_kicker" varchar NOT NULL,
  	"essence_title" varchar NOT NULL,
  	"essence_script" varchar NOT NULL,
  	"essence_intro" varchar NOT NULL,
  	"essence_watermark" varchar,
  	"path_kicker" varchar NOT NULL,
  	"path_title" varchar NOT NULL,
  	"path_script" varchar NOT NULL,
  	"path_intro" varchar NOT NULL,
  	"seo_title" varchar NOT NULL,
  	"seo_description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "contact_page_contact_trust" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "contact_page_form_service_options" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar NOT NULL,
  	"value" varchar NOT NULL
  );
  
  CREATE TABLE "contact_page" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"contact_eyebrow" varchar NOT NULL,
  	"contact_title" varchar NOT NULL,
  	"contact_script" varchar NOT NULL,
  	"contact_lead" varchar NOT NULL,
  	"contact_email_label" varchar NOT NULL,
  	"contact_email_note" varchar NOT NULL,
  	"contact_social_label" varchar NOT NULL,
  	"contact_location_title" varchar NOT NULL,
  	"contact_location_text" varchar NOT NULL,
  	"form_title" varchar NOT NULL,
  	"form_note" varchar NOT NULL,
  	"form_promise" varchar NOT NULL,
  	"form_name_label" varchar NOT NULL,
  	"form_name_placeholder" varchar,
  	"form_email_label" varchar NOT NULL,
  	"form_email_placeholder" varchar,
  	"form_email_hint" varchar,
  	"form_service_label" varchar NOT NULL,
  	"form_service_placeholder" varchar NOT NULL,
  	"form_message_label" varchar NOT NULL,
  	"form_submit_label" varchar NOT NULL,
  	"form_message_placeholder" varchar,
  	"faqs_section_eyebrow" varchar NOT NULL,
  	"faqs_section_title" varchar NOT NULL,
  	"faqs_section_lead" varchar NOT NULL,
  	"seo_title" varchar NOT NULL,
  	"seo_description" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "service_page_sections_sessions_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "service_page_sections" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"hero_primary_cta_label" varchar NOT NULL,
  	"hero_primary_cta_href" varchar NOT NULL,
  	"hero_secondary_cta_label" varchar NOT NULL,
  	"hero_secondary_cta_href" varchar NOT NULL,
  	"overview_caption_script" varchar NOT NULL,
  	"overview_caption_note" varchar NOT NULL,
  	"benefits_kicker" varchar NOT NULL,
  	"benefits_title" varchar NOT NULL,
  	"benefits_script" varchar NOT NULL,
  	"benefits_sub" varchar NOT NULL,
  	"sessions_kicker" varchar NOT NULL,
  	"sessions_title" varchar NOT NULL,
  	"sessions_script" varchar NOT NULL,
  	"sessions_lead" varchar NOT NULL,
  	"sessions_primary_cta_label" varchar NOT NULL,
  	"sessions_primary_cta_href" varchar NOT NULL,
  	"sessions_secondary_cta_label" varchar NOT NULL,
  	"sessions_secondary_cta_href" varchar NOT NULL,
  	"sessions_caption" varchar NOT NULL,
  	"sessions_fallback_image_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "closing_cta_assurances" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar NOT NULL
  );
  
  CREATE TABLE "closing_cta" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"eyebrow" varchar NOT NULL,
  	"title" varchar NOT NULL,
  	"script" varchar NOT NULL,
  	"lead" varchar NOT NULL,
  	"card_title" varchar NOT NULL,
  	"card_text" varchar NOT NULL,
  	"primary_cta_label" varchar NOT NULL,
  	"primary_cta_href" varchar NOT NULL,
  	"secondary_cta_label" varchar NOT NULL,
  	"secondary_cta_href" varchar NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
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
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"tagline" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"location" varchar NOT NULL,
  	"social_facebook" varchar,
  	"social_instagram" varchar,
  	"seo_description" varchar NOT NULL,
  	"seo_image_id" integer NOT NULL,
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  ALTER TABLE "services_hero_trust" ADD CONSTRAINT "services_hero_trust_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_benefits" ADD CONSTRAINT "services_benefits_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_sessions" ADD CONSTRAINT "services_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_expectations" ADD CONSTRAINT "services_expectations_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_faqs" ADD CONSTRAINT "services_faqs_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_icon_id_media_id_fk" FOREIGN KEY ("icon_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_sessions_image_id_media_id_fk" FOREIGN KEY ("sessions_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_faqs_fk" FOREIGN KEY ("faqs_id") REFERENCES "public"."faqs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_hero_trust" ADD CONSTRAINT "home_page_hero_trust_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_values" ADD CONSTRAINT "home_page_values_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page_meet_cara_essence" ADD CONSTRAINT "home_page_meet_cara_essence_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_hero_background_image_id_media_id_fk" FOREIGN KEY ("hero_background_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_page" ADD CONSTRAINT "home_page_meet_cara_portrait_id_media_id_fk" FOREIGN KEY ("meet_cara_portrait_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_page_hero_trust" ADD CONSTRAINT "about_page_hero_trust_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_story_facts" ADD CONSTRAINT "about_page_story_facts_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_essence_items" ADD CONSTRAINT "about_page_essence_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page_path_steps" ADD CONSTRAINT "about_page_path_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."about_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "about_page" ADD CONSTRAINT "about_page_hero_portrait_id_media_id_fk" FOREIGN KEY ("hero_portrait_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "about_page" ADD CONSTRAINT "about_page_story_image_id_media_id_fk" FOREIGN KEY ("story_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "contact_page_contact_trust" ADD CONSTRAINT "contact_page_contact_trust_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_page_form_service_options" ADD CONSTRAINT "contact_page_form_service_options_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_page"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "service_page_sections_sessions_steps" ADD CONSTRAINT "service_page_sections_sessions_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."service_page_sections"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "service_page_sections" ADD CONSTRAINT "service_page_sections_sessions_fallback_image_id_media_id_fk" FOREIGN KEY ("sessions_fallback_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "closing_cta_assurances" ADD CONSTRAINT "closing_cta_assurances_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."closing_cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_header_links_before_services" ADD CONSTRAINT "navigation_header_links_before_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_header_links_after_services" ADD CONSTRAINT "navigation_header_links_after_services_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_footer_explore_links" ADD CONSTRAINT "navigation_footer_explore_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "navigation_footer_location_lines" ADD CONSTRAINT "navigation_footer_location_lines_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings" ADD CONSTRAINT "site_settings_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "services_hero_trust_order_idx" ON "services_hero_trust" USING btree ("_order");
  CREATE INDEX "services_hero_trust_parent_id_idx" ON "services_hero_trust" USING btree ("_parent_id");
  CREATE INDEX "services_benefits_order_idx" ON "services_benefits" USING btree ("_order");
  CREATE INDEX "services_benefits_parent_id_idx" ON "services_benefits" USING btree ("_parent_id");
  CREATE INDEX "services_sessions_order_idx" ON "services_sessions" USING btree ("_order");
  CREATE INDEX "services_sessions_parent_id_idx" ON "services_sessions" USING btree ("_parent_id");
  CREATE INDEX "services_expectations_order_idx" ON "services_expectations" USING btree ("_order");
  CREATE INDEX "services_expectations_parent_id_idx" ON "services_expectations" USING btree ("_parent_id");
  CREATE INDEX "services_faqs_order_idx" ON "services_faqs" USING btree ("_order");
  CREATE INDEX "services_faqs_parent_id_idx" ON "services_faqs" USING btree ("_parent_id");
  CREATE INDEX "services__order_idx" ON "services" USING btree ("_order");
  CREATE UNIQUE INDEX "services_slug_idx" ON "services" USING btree ("slug");
  CREATE INDEX "services_icon_idx" ON "services" USING btree ("icon_id");
  CREATE INDEX "services_sessions_image_idx" ON "services" USING btree ("sessions_image_id");
  CREATE INDEX "services_updated_at_idx" ON "services" USING btree ("updated_at");
  CREATE INDEX "services_created_at_idx" ON "services" USING btree ("created_at");
  CREATE INDEX "testimonials__order_idx" ON "testimonials" USING btree ("_order");
  CREATE INDEX "testimonials_updated_at_idx" ON "testimonials" USING btree ("updated_at");
  CREATE INDEX "testimonials_created_at_idx" ON "testimonials" USING btree ("created_at");
  CREATE INDEX "faqs__order_idx" ON "faqs" USING btree ("_order");
  CREATE INDEX "faqs_updated_at_idx" ON "faqs" USING btree ("updated_at");
  CREATE INDEX "faqs_created_at_idx" ON "faqs" USING btree ("created_at");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_services_id_idx" ON "payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");
  CREATE INDEX "payload_locked_documents_rels_faqs_id_idx" ON "payload_locked_documents_rels" USING btree ("faqs_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "home_page_hero_trust_order_idx" ON "home_page_hero_trust" USING btree ("_order");
  CREATE INDEX "home_page_hero_trust_parent_id_idx" ON "home_page_hero_trust" USING btree ("_parent_id");
  CREATE INDEX "home_page_values_order_idx" ON "home_page_values" USING btree ("_order");
  CREATE INDEX "home_page_values_parent_id_idx" ON "home_page_values" USING btree ("_parent_id");
  CREATE INDEX "home_page_meet_cara_essence_order_idx" ON "home_page_meet_cara_essence" USING btree ("_order");
  CREATE INDEX "home_page_meet_cara_essence_parent_id_idx" ON "home_page_meet_cara_essence" USING btree ("_parent_id");
  CREATE INDEX "home_page_hero_hero_background_image_idx" ON "home_page" USING btree ("hero_background_image_id");
  CREATE INDEX "home_page_meet_cara_meet_cara_portrait_idx" ON "home_page" USING btree ("meet_cara_portrait_id");
  CREATE INDEX "about_page_hero_trust_order_idx" ON "about_page_hero_trust" USING btree ("_order");
  CREATE INDEX "about_page_hero_trust_parent_id_idx" ON "about_page_hero_trust" USING btree ("_parent_id");
  CREATE INDEX "about_page_story_facts_order_idx" ON "about_page_story_facts" USING btree ("_order");
  CREATE INDEX "about_page_story_facts_parent_id_idx" ON "about_page_story_facts" USING btree ("_parent_id");
  CREATE INDEX "about_page_essence_items_order_idx" ON "about_page_essence_items" USING btree ("_order");
  CREATE INDEX "about_page_essence_items_parent_id_idx" ON "about_page_essence_items" USING btree ("_parent_id");
  CREATE INDEX "about_page_path_steps_order_idx" ON "about_page_path_steps" USING btree ("_order");
  CREATE INDEX "about_page_path_steps_parent_id_idx" ON "about_page_path_steps" USING btree ("_parent_id");
  CREATE INDEX "about_page_hero_hero_portrait_idx" ON "about_page" USING btree ("hero_portrait_id");
  CREATE INDEX "about_page_story_story_image_idx" ON "about_page" USING btree ("story_image_id");
  CREATE INDEX "contact_page_contact_trust_order_idx" ON "contact_page_contact_trust" USING btree ("_order");
  CREATE INDEX "contact_page_contact_trust_parent_id_idx" ON "contact_page_contact_trust" USING btree ("_parent_id");
  CREATE INDEX "contact_page_form_service_options_order_idx" ON "contact_page_form_service_options" USING btree ("_order");
  CREATE INDEX "contact_page_form_service_options_parent_id_idx" ON "contact_page_form_service_options" USING btree ("_parent_id");
  CREATE INDEX "service_page_sections_sessions_steps_order_idx" ON "service_page_sections_sessions_steps" USING btree ("_order");
  CREATE INDEX "service_page_sections_sessions_steps_parent_id_idx" ON "service_page_sections_sessions_steps" USING btree ("_parent_id");
  CREATE INDEX "service_page_sections_sessions_sessions_fallback_image_idx" ON "service_page_sections" USING btree ("sessions_fallback_image_id");
  CREATE INDEX "closing_cta_assurances_order_idx" ON "closing_cta_assurances" USING btree ("_order");
  CREATE INDEX "closing_cta_assurances_parent_id_idx" ON "closing_cta_assurances" USING btree ("_parent_id");
  CREATE INDEX "navigation_header_links_before_services_order_idx" ON "navigation_header_links_before_services" USING btree ("_order");
  CREATE INDEX "navigation_header_links_before_services_parent_id_idx" ON "navigation_header_links_before_services" USING btree ("_parent_id");
  CREATE INDEX "navigation_header_links_after_services_order_idx" ON "navigation_header_links_after_services" USING btree ("_order");
  CREATE INDEX "navigation_header_links_after_services_parent_id_idx" ON "navigation_header_links_after_services" USING btree ("_parent_id");
  CREATE INDEX "navigation_footer_explore_links_order_idx" ON "navigation_footer_explore_links" USING btree ("_order");
  CREATE INDEX "navigation_footer_explore_links_parent_id_idx" ON "navigation_footer_explore_links" USING btree ("_parent_id");
  CREATE INDEX "navigation_footer_location_lines_order_idx" ON "navigation_footer_location_lines" USING btree ("_order");
  CREATE INDEX "navigation_footer_location_lines_parent_id_idx" ON "navigation_footer_location_lines" USING btree ("_parent_id");
  CREATE INDEX "site_settings_seo_seo_image_idx" ON "site_settings" USING btree ("seo_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "services_hero_trust" CASCADE;
  DROP TABLE "services_benefits" CASCADE;
  DROP TABLE "services_sessions" CASCADE;
  DROP TABLE "services_expectations" CASCADE;
  DROP TABLE "services_faqs" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "testimonials" CASCADE;
  DROP TABLE "faqs" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "home_page_hero_trust" CASCADE;
  DROP TABLE "home_page_values" CASCADE;
  DROP TABLE "home_page_meet_cara_essence" CASCADE;
  DROP TABLE "home_page" CASCADE;
  DROP TABLE "about_page_hero_trust" CASCADE;
  DROP TABLE "about_page_story_facts" CASCADE;
  DROP TABLE "about_page_essence_items" CASCADE;
  DROP TABLE "about_page_path_steps" CASCADE;
  DROP TABLE "about_page" CASCADE;
  DROP TABLE "contact_page_contact_trust" CASCADE;
  DROP TABLE "contact_page_form_service_options" CASCADE;
  DROP TABLE "contact_page" CASCADE;
  DROP TABLE "service_page_sections_sessions_steps" CASCADE;
  DROP TABLE "service_page_sections" CASCADE;
  DROP TABLE "closing_cta_assurances" CASCADE;
  DROP TABLE "closing_cta" CASCADE;
  DROP TABLE "navigation_header_links_before_services" CASCADE;
  DROP TABLE "navigation_header_links_after_services" CASCADE;
  DROP TABLE "navigation_footer_explore_links" CASCADE;
  DROP TABLE "navigation_footer_location_lines" CASCADE;
  DROP TABLE "navigation" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TYPE "public"."enum_services_slug";
  DROP TYPE "public"."enum_services_hero_tone";
  DROP TYPE "public"."enum_home_page_values_icon";
  DROP TYPE "public"."enum_about_page_essence_items_icon";
  DROP TYPE "public"."enum_about_page_essence_items_accent";
  DROP TYPE "public"."enum_about_page_path_steps_icon";
  DROP TYPE "public"."enum_about_page_path_steps_accent";`)
}
