import React from 'react';
import { Heading as SHeading } from 'spectacle';
import { compose, defaultProps } from 'recompose';
import withType from './with-type';

export const Heading = compose(
  defaultProps({
    lh: 'title',
    margin: '0 0 2rem 0',
    size: 3,
    textColor: 'secondary',
    textAlign: 'left',
  }),
  withType,
)(SHeading);
