import React from 'react';
import { Deck } from 'spectacle';
import { slides } from './slides';
import { theme } from './styles';

export const Presentation = () => (
  <Deck transition={['zoom', 'fade', 'slide']} transitionDuration={500} theme={theme} progress="bar">
    { React.Children.toArray(slides) }
  </Deck>
);
