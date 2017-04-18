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

import images from '../images';
import { f, s } from '../styles';
import { Embed } from '../components';
import { SplashExample } from '../../examples/splash';

export const parameterizationSlides = [
  <Slide bgColor="pink" textColor="tertiary">
    <Image height="6rem" margin={s.r3} src={images.toggle} />
    <Image height="6rem" margin={s.r3} src={images.knob} />
    <Image height="6rem" margin="0" src={images.slider} />
    <Heading>Parameterization</Heading>
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <Text>insert codePen that explains parameterization of regular polygons</Text>
  </Slide>,
  <CodeSlide
    transition={['scale']}
    textSize={f[4]}
    lang="js"
    code={require('raw-loader!../code/polygon.js')}
    ranges={[
      { loc: [0, 0], title: 'Polygon Generator' },
      { loc: [0, 1], note: 'Number of sides & radius (to control the size)' },
      { loc: [1, 2], note: 'Calculate the angle' },
      { loc: [2, 3], note: 'Generate a placeholder list for the vertices of the polygon' },
      { loc: [12, 15], note: '[0, 1, 2, ... count]' },
      { loc: [4, 10], note: 'Loop over this list to generate each vertex' },
      { loc: [5, 9], note: 'x = radius * cos(theta) & y = radius * sin(theta)' },
      { loc: [6, 7], note: 'angle needs to be in radians' },
      { loc: [16, 19] },
    ]}
  />,
  <Slide bgColor="primary" textColor="secondary">
    <Text>insert demo of polygon generator</Text>
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <Text>insert Hex-a-portal</Text>
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <Text>insert a drawing that explain parameterization of the gems (shape, face and top)</Text>
  </Slide>,
  <Slide bgColor="#FE664D" textColor="secondary">
    <Embed
      url="http://winkervsbecks.github.io/gems"
      fallback={images.gemsDemo}
    />
  </Slide>,
  <Slide bgColor="secondary">
    <Heading size={3} textColor="primary">Patterns</Heading>
    <SplashExample />
  </Slide>,
];
