import { Text as SText } from 'spectacle';
import { compose, defaultProps } from 'recompose';
import withType from './with-type';

export const Text = compose(
  defaultProps({
    lh: 'copy',
    textColor: 'secondary',
    textAlign: 'left',
    fw: 5,
  }),
  withType,
)(SText);
