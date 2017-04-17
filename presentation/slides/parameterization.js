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

import images from '../images';
import { s } from '../styles';

export const parameterizationSlides = [
  <Slide bgColor="primary" textColor="secondary">
    <Text>Insert image of shapes being measured</Text>
  </Slide>,
  <Slide bgColor="pink" textColor="tertiary">
    <Image height="6rem" margin={s.r3} src={images.toggle} />
    <Image height="6rem" margin={s.r3} src={images.knob} />
    <Image height="6rem" margin="0" src={images.slider} />
    <Heading>
      Parameterization
    </Heading>
  </Slide>,
];
