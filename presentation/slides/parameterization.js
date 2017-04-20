import React from 'react';
import {
  BlockQuote,
  Heading,
  Image,
  Quote,
  Slide,
  Text,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import images from '../images';
import { f, s } from '../styles';
import { Embed, CodePen } from '../components';
import { SplashExample } from '../../examples/splash';
import { PolygonParameterization } from '../../examples/polygon-parameterization';
import { HexAPortal } from '../../examples/hex-a-portal';

export const parameterizationSlides = [
  <Slide bgColor="pink" textColor="tertiary">
    <Image height="6rem" margin={s.r3} src={images.toggle} />
    <Image height="6rem" margin={s.r3} src={images.knob} />
    <Image height="6rem" margin="0" src={images.slider} />
    <Heading>Parameterization</Heading>
  </Slide>,
  <Slide bgColor="secondary">
    <Heading size={4} textColor="pink" textAlign="left" margin={s.b4}>
      Parameterization
    </Heading>
    <BlockQuote margin={s.b5}>
      <Quote textSize={f[3]} style={{ lineHeight: 1.5 }}>
        Defining the parameters or variables necessary to generate a geometric object.
      </Quote>
    </BlockQuote>
    <Text textColor="primary" textAlign="left">
      Coordinates of each vertex ➡️ Shape
    </Text>
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <PolygonParameterization />
    {/* <Text>~~insert codePen that explains parameterization of regular polygons~~</Text>
    <Text>parameterization could be 5 points but, we can make it easier
    use number sides + radius</Text> */}
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
  <Slide bgColor="#000">
    <HexAPortal />
  </Slide>,
  <Slide bgColor="primary">
    <Image src={images.gemsExplain} width="100%" />
  </Slide>,
  <Slide bgColor="#FE664D" textColor="secondary">
    <Embed
      url="//winkervsbecks.github.io/gems"
      fallback={images.gemsDemo}
    />
  </Slide>,
  <Slide bgColor="secondary">
    <Heading size={6} textColor="primary">Generate Patterns</Heading>
    <SplashExample />
  </Slide>,
  <Slide bgColor="#fefff7">
    <Image src={images.splashExplain} width="75%" />
  </Slide>,
];
