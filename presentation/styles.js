import createTheme from 'spectacle/lib/themes/default';

require('normalize.css');
require('./tachyons.css');
require('./index.css');
require('spectacle/lib/themes/default/index.css');

const systemSans = '-apple-system, BlinkMacSystemFont, \'avenir next\', avenir, \'helvetica neue\', helvetica, ubuntu, roboto, noto, \'segoe ui\', arial, sans-serif';

export const theme = createTheme({
  primary: 'white',
  secondary: '#2e2f30',
  tertiary: '#5a5ae6',
  quartenary: '#dcdedf',
  gray: '#8b8e8f',
  mauve: '#c3bbff',
  red: '#ff485e',
  pink: '#fee1e1',
  yellow: '#e5e059',
}, {
  primary: systemSans,
  secondary: systemSans,
});

export const f = {
  1: '6rem',
  2: '5rem',
  3: '3rem',
  4: '2.25rem',
  5: '1.5rem',
  6: '1.25rem',
  7: '1rem',
  8: '0.875rem',
};

export const lh = {
  solid: 1,
  title: 1.25,
  copy: 1.5,
};

export const s = {
  center: '0 auto',
  a0: '0',
  a1: '0.25rem',
  a2: '0.5rem',
  a3: '1rem',
  a4: '2rem',
  a5: '4rem',
  a6: '8rem',
  a7: '16rem',
  l0: '0 0 0 0',
  l1: '0 0 0 .25rem',
  l2: '0 0 0 .5rem',
  l3: '0 0 0 1rem',
  l4: '0 0 0 2rem',
  l5: '0 0 0 4rem',
  l6: '0 0 0 8rem',
  l7: '0 0 0 16rem',
  r0: '0 0 0 0',
  r1: '0 0.25rem 0 0',
  r2: '0 0.5rem 0 0',
  r3: '0 1rem 0 0',
  r4: '0 2rem 0 0',
  r5: '0 4rem 0 0',
  r6: '0 8rem 0 0',
  r7: '0 16rem 0 0',
  b0: '0 0 0 0',
  b1: '0 0 0.25rem 0',
  b2: '0 0 0.5rem 0',
  b3: '0 0 1rem 0',
  b4: '0 0 2rem 0',
  b5: '0 0 4rem 0',
  b6: '0 0 8rem 0',
  b7: '0 0 16rem 0',
  t0: '0 0 0 0',
  t1: '0.25rem 0 0 0',
  t2: '0.5rem 0 0 0',
  t3: '1rem 0 0 0',
  t4: '2rem 0 0 0',
  t5: '4rem 0 0 0',
  t6: '8rem 0 0 0',
  t7: '16rem 0 0 0',
  v0: '0 0',
  v1: '0.25rem 0',
  v2: '0.5rem 0',
  v3: '1rem 0',
  v4: '2rem 0',
  v5: '4rem 0',
  v6: '8rem 0',
  v7: '16rem 0',
  h0: '0 0',
  h1: '0 0.25rem',
  h2: '0 0.5rem',
  h3: '0 1rem',
  h4: '0 2rem',
  h5: '0 4rem',
  h6: '0 8rem',
  h7: '0 16rem',
};
