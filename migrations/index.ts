import * as migration_20260924_131331_initial from './20260924_131331_initial';
import * as migration_20260924_171630_split_header_footer from './20260924_171630_split_header_footer';
import * as migration_20260925_101437_add_media_folders from './20260925_101437_add_media_folders';
import * as migration_20260925_115211_add_home_services_cards from './20260925_115211_add_home_services_cards';
import * as migration_20261010_145848_remove_meet_cara_quote from './20261010_145848_remove_meet_cara_quote';
import * as migration_20261010_150001_remove_meet_cara_eyebrow from './20261010_150001_remove_meet_cara_eyebrow';
import * as migration_20261011_100000_remove_hero_and_contact_eyebrow from './20261011_100000_remove_hero_and_contact_eyebrow';
import * as migration_20261013_220245_add_social_section from './20261013_220245_add_social_section';
import * as migration_20261013_220844_contact_session_options from './20261013_220844_contact_session_options';
import * as migration_20261013_221804_remove_eyebrows from './20261013_221804_remove_eyebrows';
import * as migration_20261024_101831_add_email_list from './20261024_101831_add_email_list';
import * as migration_20261105_130355_remove_testimonials from './20261105_130355_remove_testimonials';
import * as migration_20261105_140000_add_phone from './20261105_140000_add_phone';
import * as migration_20261105_150000_remove_contact_trust_promise from './20261105_150000_remove_contact_trust_promise';
import * as migration_20261105_160000_remove_faqs_lead_footer_welcome from './20261105_160000_remove_faqs_lead_footer_welcome';

import * as migration_20261105_170000_add_overview_quote from './20261105_170000_add_overview_quote';
import * as migration_20261105_180000_remove_service_sessions_section from './20261105_180000_remove_service_sessions_section';
import * as migration_20261105_190000_remove_overview_caption from './20261105_190000_remove_overview_caption';
import * as migration_20261105_200000_remove_about_hero_trust from './20261105_200000_remove_about_hero_trust';

export const migrations = [
  {
    up: migration_20260924_131331_initial.up,
    down: migration_20260924_131331_initial.down,
    name: '20260924_131331_initial',
  },
  {
    up: migration_20260924_171630_split_header_footer.up,
    down: migration_20260924_171630_split_header_footer.down,
    name: '20260924_171630_split_header_footer',
  },
  {
    up: migration_20260925_101437_add_media_folders.up,
    down: migration_20260925_101437_add_media_folders.down,
    name: '20260925_101437_add_media_folders',
  },
  {
    up: migration_20260925_115211_add_home_services_cards.up,
    down: migration_20260925_115211_add_home_services_cards.down,
    name: '20260925_115211_add_home_services_cards',
  },
  {
    up: migration_20261010_145848_remove_meet_cara_quote.up,
    down: migration_20261010_145848_remove_meet_cara_quote.down,
    name: '20261010_145848_remove_meet_cara_quote',
  },
  {
    up: migration_20261010_150001_remove_meet_cara_eyebrow.up,
    down: migration_20261010_150001_remove_meet_cara_eyebrow.down,
    name: '20261010_150001_remove_meet_cara_eyebrow',
  },
  {
    up: migration_20261011_100000_remove_hero_and_contact_eyebrow.up,
    down: migration_20261011_100000_remove_hero_and_contact_eyebrow.down,
    name: '20261011_100000_remove_hero_and_contact_eyebrow',
  },
  {
    up: migration_20261013_220245_add_social_section.up,
    down: migration_20261013_220245_add_social_section.down,
    name: '20261013_220245_add_social_section',
  },
  {
    up: migration_20261013_220844_contact_session_options.up,
    down: migration_20261013_220844_contact_session_options.down,
    name: '20261013_220844_contact_session_options',
  },
  {
    up: migration_20261013_221804_remove_eyebrows.up,
    down: migration_20261013_221804_remove_eyebrows.down,
    name: '20261013_221804_remove_eyebrows',
  },
  {
    up: migration_20261024_101831_add_email_list.up,
    down: migration_20261024_101831_add_email_list.down,
    name: '20261024_101831_add_email_list',
  },
  {
    up: migration_20261105_130355_remove_testimonials.up,
    down: migration_20261105_130355_remove_testimonials.down,
    name: '20261105_130355_remove_testimonials'
  },
  {
    up: migration_20261105_140000_add_phone.up,
    down: migration_20261105_140000_add_phone.down,
    name: '20261105_140000_add_phone',
  },
  {
    up: migration_20261105_150000_remove_contact_trust_promise.up,
    down: migration_20261105_150000_remove_contact_trust_promise.down,
    name: '20261105_150000_remove_contact_trust_promise',
  },
  {
    up: migration_20261105_160000_remove_faqs_lead_footer_welcome.up,
    down: migration_20261105_160000_remove_faqs_lead_footer_welcome.down,
    name: '20261105_160000_remove_faqs_lead_footer_welcome',
  },
  {
    up: migration_20261105_170000_add_overview_quote.up,
    down: migration_20261105_170000_add_overview_quote.down,
    name: '20261105_170000_add_overview_quote',
  },
  {
    up: migration_20261105_180000_remove_service_sessions_section.up,
    down: migration_20261105_180000_remove_service_sessions_section.down,
    name: '20261105_180000_remove_service_sessions_section',
  },
  {
    up: migration_20261105_190000_remove_overview_caption.up,
    down: migration_20261105_190000_remove_overview_caption.down,
    name: '20261105_190000_remove_overview_caption',
  },
  {
    up: migration_20261105_200000_remove_about_hero_trust.up,
    down: migration_20261105_200000_remove_about_hero_trust.down,
    name: '20261105_200000_remove_about_hero_trust',
  },
];
