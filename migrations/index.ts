import * as migration_20260924_131331_initial from './20260924_131331_initial';
import * as migration_20260924_171630_split_header_footer from './20260924_171630_split_header_footer';

export const migrations = [
  {
    up: migration_20260924_131331_initial.up,
    down: migration_20260924_131331_initial.down,
    name: '20260924_131331_initial',
  },
  {
    up: migration_20260924_171630_split_header_footer.up,
    down: migration_20260924_171630_split_header_footer.down,
    name: '20260924_171630_split_header_footer'
  },
];
