import React from 'react';
import {
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
import { CodePen, Embed } from '../components';

import images from '../images';
import { f, s } from '../styles';

export const easingSlides = [
  <Slide bgColor="mauve">
    <Heading textColor="tertiary">Easings</Heading>
    <Image src="https://storage.googleapis.com/material-design/publish/material_v_11/assets/0BybB4JO78tNpRlY1eHJ4LTh4ZjQ/01-duration-and-easing.png" />
  </Slide>,
  <Slide bgColor="mauve">
    <CodePane
      lang="javascript"
      source={`
function noEasing (t, b, c, d) {
  return c * t / d + b;
}
// @t is the current time (or position) of the tween. This can be seconds or frames, steps, seconds, ms, whatever – as long as the unit is the same as is used for the total time [3].
// @b is the beginning value of the property.
// @c is the change between the beginning and destination value of the // property.
// @d is the total time of the tween.
      `}
    />
    <Link
      textColor="seondary" textSize={f[6]}
      href="http://upshots.org/actionscript/jsas-understanding-easing"
      style={{ display: 'block' }}
    >
      Understanding Easing (Explaining Penner’s equations)
    </Link>
  </Slide>,
  <Slide bgColor="mauve">
    <Heading size={6} textColor="secondary">Lerping</Heading>
    <CodePane
      lang="javascript"
      source={`
function lerp(start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;

  return {
    x: start.x + dx * 0.1,
    y: start.y + dy * 0.1,
  };
}
      `}
    />
  </Slide>,
];
