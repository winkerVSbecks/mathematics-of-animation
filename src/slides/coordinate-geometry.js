import React from 'react';
import { Image, Link, Slide, SlideSet } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import { CodePen, Heading, Embed } from 'components';
import {
  Hexagon,
  CartesianCoordSystem,
  PolarCoordinateSystem,
  PolarPolygon,
  PolarPattern,
  SplashExample,
  PolygonParameterization,
  HexAPortal,
} from 'examples';
import images from '../images';

export const coordinateGeometrySlides = (
  <SlideSet>
    <Slide>
      <div className="flex items-center">
        <Image height="8rem" src={images.ruler25} />
        <Heading margin="0 0 0 2rem" className="flex-auto" lh="solid">
          Coordinate<br />Geometry
        </Heading>
      </div>
    </Slide>
    <Slide bgColor="secondary">
      <CartesianCoordSystem className="db mb4 mw6 center" />
      <Heading textColor="primary" f={2} textAlign="center">
        Cartesian Coordinate System
      </Heading>
    </Slide>
    <Slide bgColor="secondary">
      <PolarCoordinateSystem className="db mb4 mw6 center" />
      <Heading textColor="primary" f={2} textAlign="center">
        Polar Coordinate System
      </Heading>
    </Slide>
    <Slide bgColor="secondary">
      <PolarPolygon className="db mb4 mw6 center" />
      <Heading textColor="primary" f={3}>
        POLYGONS
      </Heading>
      <Heading textColor="primary" f={2}>
        angle = 360° / number of sides<br />
      </Heading>
    </Slide>
    <Slide bgColor="secondary">
      <Hexagon className="center" />
    </Slide>
    <CodeSlide
      transition={['scale']}
      lang="js"
      // eslint-disable-next-line
      code={require('!raw-loader!../code/polygon.js')}
      ranges={[
        { loc: [0, 0], title: 'Polygon Generator' },
        { loc: [0, 1], note: 'Number of sides & radius (to control the size)' },
        { loc: [1, 2], note: 'Calculate the angle' },
        {
          loc: [2, 3],
          note: 'Generate a placeholder list for the vertices of the polygon',
        },
        { loc: [12, 15], note: '[0, 1, 2, ... count]' },
        { loc: [4, 10], note: 'Loop over this list to generate each vertex' },
        {
          loc: [5, 9],
          note: (
            <span>
              x = radius * cos(theta)<br />y = radius * sin(theta)
            </span>
          ),
        },
        { loc: [6, 7], note: 'angle needs to be in radians' },
        { loc: [16, 19] },
      ]}
    />
    <Slide bgColor="#000">
      <HexAPortal />
    </Slide>
    <Slide bgColor="#FE664D" textColor="secondary">
      <Embed
        url="//winkervsbecks.github.io/gems"
        fallback={images.gemsDemo}
        bgColor="#FE664D"
      />
    </Slide>
    <Slide bgColor="primary">
      <Heading size={5}>
        Use polar coordinates for locations to generate patterns
      </Heading>
      <SplashExample />
    </Slide>
    <Slide bgColor="secondary">
      <PolarPattern className="db mb4 mw6 center" />
    </Slide>
    <Slide bgColor="secondary">
      <Heading textColor="primary" f={2}>
        Bees & Bombs Polar Patterns
      </Heading>
      <div className="mh0 flex flex-wrap">
        <img
          style={{ width: '13.5rem', height: '10.125rem' }}
          className="pa1 ba b--moon-gray br2 mr3"
          src={images.bubbles2}
        />
        <img
          style={{ width: '13.5rem', height: '10.125rem' }}
          className="pa1 ba b--moon-gray br2 mr3"
          src={images.spiraldots}
        />
        <img
          style={{ width: '13.5rem', height: '10.125rem' }}
          className="pa1 ba b--moon-gray br2 mr3"
          src={images.spins}
        />
        <img
          style={{ width: '13.5rem', height: '10.125rem' }}
          className="pa1 ba b--moon-gray br2"
          src={images.spiralbig}
        />
      </div>
    </Slide>
  </SlideSet>
);
