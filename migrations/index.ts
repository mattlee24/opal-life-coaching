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
    name: '20261024_101831_add_email_list'
  },
];
