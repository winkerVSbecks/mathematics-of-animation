import React from 'react';
import {
  BlockQuote,
  Cite,
  CodePane,
  Heading,
  Image,
  Fit,
  Fill,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import { Chillwave, CodePen } from '../components';

import images from '../images';
import { f, s } from '../styles';

export const oscillationsSlides = [
  <Slide bgColor="pink" textColor="tertiary">
    <Chillwave clr="#5a5ae6" size={3} />
    <Heading
      textColor="tertiary"
    >
      Waves &<br />Oscillations
    </Heading>
  </Slide>,
  <Slide bgColor="#440015" textColor="tertiary">
    <CodePen
      name="Sine" user="HunorMarton" id="ggQGqQ"
      themeId="29124" bgColor="#440015" color="#ff0050"
    />
  </Slide>,
  <Slide>
    <Heading fit textColor="red">Dave Whyte (Bees and Bombs)</Heading>
  </Slide>,
  <Slide bgColor="pink">
    <Heading fit textColor="red">Parameterization 💞 Oscillation</Heading>
  </Slide>,
  <Slide bgColor="pink">
    <Heading fit textColor="red">Swimmer</Heading>
  </Slide>,
];
