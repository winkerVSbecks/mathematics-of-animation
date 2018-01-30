import React from 'react';
import { Deck } from 'spectacle';
import 'tachyons';

import createTheme from 'spectacle/lib/themes/default';
import {
  introSlides,
  coordinateGeometrySlides,
  parameterizationSlides,
  outroSlides,
} from './slides';

const theme = createTheme(
  {
    primary: '#212121',
    secondary: 'white',
    tertiary: 'white',
    quartenary: '#F2F2F2',
    gold: '#FFC400',
    yellow: '#FFEB3B',
    pink: '#FF7EAB',
    blue: '#36C3FF',
    darkBlue: '#2175FF',
    darkPink: '#D83C74',
    green: '#00E676',
    lightGreen: '#B2FF59',
  },
  {
    primary: "'Roboto Mono', Consolas, monaco, monospace",
    secondary: "'Roboto Mono', Consolas, monaco, monospace",
  },
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={[]}
        progress="bar"
        transitionDuration={500}
        theme={theme}
      >
        {introSlides}
        {coordinateGeometrySlides}
        {outroSlides}
      </Deck>
    );
  }
}
