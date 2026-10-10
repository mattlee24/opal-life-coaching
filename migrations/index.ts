import * as migration_20260924_131331_initial from './20260924_131331_initial';
import * as migration_20260924_171630_split_header_footer from './20260924_171630_split_header_footer';
import * as migration_20260925_115211_add_home_services_cards from './20260925_115211_add_home_services_cards';
import * as migration_20261010_145848_remove_meet_cara_quote from './20261010_145848_remove_meet_cara_quote';
import * as migration_20261010_150001_remove_meet_cara_eyebrow from './20261010_150001_remove_meet_cara_eyebrow';

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
    name: '20261010_150001_remove_meet_cara_eyebrow'
  },
];
