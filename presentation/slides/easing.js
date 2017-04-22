import React from 'react';
import {
  CodePane,
  Heading,
  Slide,
  Text,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import { CodePen, Easings, BezierCurve } from '../components';
import { CustomEasing } from '../../examples/custom-easing';

import { f, s } from '../styles';

export const easingSlides = [
  <Slide bgColor="pink">
    <Heading margin={s.b3} size={6} textColor="tertiary">
      Easings
    </Heading>
    <Easings w={600} />
  </Slide>,
  <CodeSlide
    transition={['scale']}
    textSize={f[5]}
    lang="js"
    code={`function noEasing(currentTime, startValue, delta, duration) {
  return delta * currentTime / duration + startValue;
}`}
    ranges={[{
      loc: [0, 3],
      title: 'Penner’s Equations',
    }, {
      loc: [0, 1],
      title: 'Current Time',
      note: 'In seconds or frames or whatever – as long you use the same unit as the total time.',
    }, {
      loc: [0, 1],
      title: 'Start Value',
      note: 'The start value of the property you are animating.',
    }, {
      loc: [0, 1],
      title: 'Delta',
      note: 'The change between the start and end value.',
    }, {
      loc: [0, 1],
      title: 'Duration',
      note: 'The total duration of the tween/animation/transition',
    }, {
      loc: [1, 2],
      title: 'Transform',
      note: 'start_value + delta * [some_multiplier]',
    }]}
  />,
    // <Link
    //   textColor="seondary" textSize={f[6]}
    //   href="http://upshots.org/actionscript/jsas-understanding-easing"
    //   style={{ display: 'block' }}
    // >
    //   Understanding Easing (Explaining Penner’s equations)
    // </Link>
  <Slide bgColor="pink">
    <Heading margin={s.b3} size={6} textColor="tertiary">
      Bezier Curves
    </Heading>
    <BezierCurve w={600} />
  </Slide>,
  <Slide>
    <Heading size={6} textColor="tertiary">
      Custom Easing
    </Heading>
    <CodePane
      textSize="1.25rem"
      lang="javascript"
      source={`function transform(t) {
  const g = 4;

  if (t < 0.5) {
    return 0.5 * Math.pow(2 * t, g)
  }
  return 1 - (0.5 * Math.pow(2 * (1 - t), g));
}

function ease(currentTime, startValue, delta, duration) {
  const t = currentTime / duration;
  return startValue + (transform(t) * delta);
}`}
    />
    <CustomEasing />
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
