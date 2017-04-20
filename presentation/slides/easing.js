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
import { CodePen, Embed, Easings } from '../components';

import images from '../images';
import { f, s } from '../styles';

export const easingSlides = [
  <Slide bgColor="pink">
    <Heading margin={s.b3} size={6} textColor="tertiary">
      Easings
    </Heading>
    <Easings w={600} />
  </Slide>,
  <Slide>
    <Heading size={6} textColor="secondary">Penner’s Equations</Heading>
    <CodePane
      textSize="1.6rem"
      lang="javascript"
      source={`/**
 * @t: Current time/position of the tween
 *     This can be seconds or frames, steps, seconds, ms,
 *     whatever – as long as the unit is the same
 *     as is used for the total time.
 * @b: Beginning value of the property.
 * @c: Change between the beginning and destination value
 *     of the property.
 * @d: Total time of the tween.
 */
function noEasing(t, b, c, d) {
  return c * t / d + b;
}`}
    />
    <Link
      textColor="seondary" textSize={f[6]}
      href="http://upshots.org/actionscript/jsas-understanding-easing"
      style={{ display: 'block' }}
    >
      Understanding Easing (Explaining Penner’s equations)
    </Link>
  </Slide>,
  <Slide>
    <Text>The time variable goes from 0 to 1 and g adjusts the amount of easing.</Text>
    <CodePane
      textSize="1.6rem"
      lang="javascript"
      source={`let x = 300 * ease(time, g);

function ease(p, g){
  if (p < 0.5) {
    return 0.5 * Math.pow(2 * p, g);
  } else {
    return 1 - 0.5 * Math.pow(2 * (1 - p), g);
  }
}`}
    />
  </Slide>,
  <Slide>
    <Heading size={6} textColor="secondary">Lerping</Heading>
    <CodePane
      textSize="1.6rem"
      lang="javascript"
      source={`function lerp(start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;

  return {
    x: start.x + dx * 0.1,
    y: start.y + dy * 0.1,
  };
}`}
    />
  </Slide>,
  <Slide>
    <Heading size={5}>~~Lerping demo~~</Heading>
  </Slide>,
];
