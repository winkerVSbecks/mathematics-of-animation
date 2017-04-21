import React from 'react';
import {
  CodePane,
  Heading,
  Slide,
  Text,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import { CodePen, Easings, BezierCurve } from '../components';

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
      note: 'change_in_property * [Some Value] + start_value',
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
