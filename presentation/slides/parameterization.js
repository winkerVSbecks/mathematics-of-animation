import React from 'react';
import {
  Appear,
  BlockQuote,
  Heading,
  Image,
  Link,
  Quote,
  Slide,
  Text,
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import images from '../images';
import { f, s } from '../styles';
import { Embed } from '../components';
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
  <Slide bgColor="#fefef2">
    <Heading size={6} textColor="secondary" margin="0">
      angle = 360 / <span className="bb b--green bw3">number of sides</span>
    </Heading>
    <div style={{ backgroundImage: `url(${images.octagon})`, height: 500 }} className="contain bg-center">
      <Appear>
        <div>
          <div
            className="dib ba b--red bw2 br-100 absolute"
            style={{ top: '48.5%', left: '52%', width: 40, height: 40 }}
          />
        </div>
      </Appear>
    </div>
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <PolygonParameterization />
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
  <Slide bgColor="primary" textColor="secondary">
    <Image
      className="br2 db shadow-5"
      width={400}
      src={images.gems}
    />
    <Link
      textSize={f[6]}
      textColor="secondary"
      href="http://varun.ca"
    >
      Rarities 2.0 by Rogie 👑
    </Link>
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
    <Heading size={5} textColor="primary">
      Use polar coordinates for locations to generate patterns
    </Heading>
    <SplashExample />
  </Slide>,
  <Slide bgColor="#fefff7">
    <Image src={images.splashExplain} width="75%" />
  </Slide>,
];
