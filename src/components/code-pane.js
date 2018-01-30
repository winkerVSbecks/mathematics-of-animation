import { CodePane as SCodePane } from 'spectacle';
import { compose, defaultProps } from 'recompose';
import withType from './with-type';

export const CodePane = compose(
  defaultProps({ f: 2, lang: 'javascript' }),
  withType,
)(SCodePane);
