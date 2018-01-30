import { mapProps } from 'recompose';

const typeScale = {
  headline: '6rem',
  'sub-headline': '5rem',
  1: '3rem',
  2: '2.25rem',
  3: '1.5rem',
  4: '1.25rem',
  5: '1rem',
  6: '0.875rem',
  7: '0.75rem',
};

const lineHeights = {
  solid: 1,
  title: 1.25,
  copy: 1.5,
};

export default mapProps(({ f, lh, fw, ...props }) => ({
  textSize: typeScale[f],
  style: {
    fontWeight: fw * 100,
    lineHeight: lineHeights[lh] ? lineHeights[lh] : lh,
  },
  ...props,
}));
