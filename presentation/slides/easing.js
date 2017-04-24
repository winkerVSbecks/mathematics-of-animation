import React from 'react';
import {
  CodePane,
  Code,
  Heading,
  Slide,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import { Easings, BezierCurve, CodePen } from '../components';
import { CustomEasing } from '../../examples/custom-easing';
import { Bounce } from '../../examples/bounce';

import { f, s, lh } from '../styles';

export const easingSlides = [
  <Slide bgColor="pink">
    <Heading margin={s.b3} size={6} textColor="tertiary">
      Easings
    </Heading>
    <Easings w={600} />
  </Slide>,
  <Slide bgColor="secondary">
    <Heading size={6} lineHeight={lh.title} textColor="primary">
      An easing function drives the relationship between time and the animation's progress.
    </Heading>
  </Slide>,
  <Slide bgColor="pink" padding="0">
    <Code>cubic-bezier(h1x, h1y, h2x, h2y)</Code>
    <BezierCurve w={500} />
  </Slide>,
  <CodeSlide
    transition={['scale']}
    textSize={f[5]}
    lang="js"
    code={`function easing(currentTime, startValue, delta, duration) {
  return delta * currentTime / duration + startValue;
}`}
    ranges={[{
      loc: [0, 3],
      title: (
        <span>Penner’s Equations<br /><span className="white f2 ttu tracked">robertpenner.com/easing</span></span>
      ),
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
  <Slide padding="0">
    <Heading size={6} textColor="tertiary" margin={s.b3}>
      Custom Easing
    </Heading>
    <CodePane
      textSize="1.25rem"
      lang="javascript"
      source={`// From: http://patakk.tumblr.com/post/88602945835/heres-a-simple-function-you-can-use-for-easing
function transform(t) {
  const g = 6;
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
    <Heading size={6} textColor="tertiary" margin={s.b4}>Bounce</Heading>
    <CodePane
      textSize="1.25rem"
      lang="javascript"
      source={`// From: https://github.com/mattdesl/eases/blob/4eb8bc4c7ea4ed98b075c899cb5867461de4330a/elastic-out.js
function ease(currentTime, startValue, delta, duration) {
  const t = currentTime / duration;
  const step = Math.sin(-13.0 * (t + 1.0) * (Math.PI / 2)) * (2 ** (-10 * t));

  return startValue + (delta * (1 + step));
}`}
    />
    <Bounce />
  </Slide>,
  <Slide bgColor="#361D48">
    <CodePen
      height={600}
      name="The Core" user="winkerVSbecks" id="lkqGo"
      bgColor="#361D48" color="#FC3D5B"
    />
  </Slide>,
];
