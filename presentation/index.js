import React from 'react';
import createTheme from 'spectacle/lib/themes/default';
import { Deck } from 'spectacle';
import { slides } from './slides';

require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const theme = createTheme({
  primary: 'white',
  secondary: '#2e2f30',
  tertiary: '#5a5ae6',
  quartenary: '#dcdedf',
  quinary: '#c3bbff',
  senary: '#ff485e',
}, {
  primary: '-apple-system, BlinkMacSystemFont, \'avenir next\', avenir, \'helvetica neue\', helvetica, ubuntu, roboto, noto, \'segoe ui\', arial, sans-serif',
  secondary: '-apple-system, BlinkMacSystemFont, \'avenir next\', avenir, \'helvetica neue\', helvetica, ubuntu, roboto, noto, \'segoe ui\', arial, sans-serif',
});

export const Presentation = () => (
  <Deck transition={['slide']} transitionDuration={500} theme={theme} progress="bar">
    { slides }
  </Deck>
);
