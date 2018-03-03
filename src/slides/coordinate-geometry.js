import React from 'react';
import { Image, Link, Slide, SlideSet } from 'spectacle';
import { Heading, Embed, Text } from 'components';
import {
  Hexagon,
  CartesianCoordSystem,
  PolarCoordinateSystem,
  PolarPolygon,
  PolarPattern,
  SplashExample,
  HexAPortal,
  polygonGenerator,
} from 'examples';
import images from '../images';

export const coordinateGeometrySlides = (
  <SlideSet>
    <Slide>
      <div className="flex items-center">
        <Image height="8rem" src={images.ruler25} />
        <Heading margin="0 0 0 2rem" className="flex-auto" lh="solid">
          Coordinate<br />Systems
        </Heading>
      </div>
    </Slide>
    <Slide bgColor="secondary">
      <CartesianCoordSystem className="db mb4 mw6 center" />
      <Heading textColor="primary" f={2} textAlign="center">
        Cartesian Coordinate System (x, y)
      </Heading>
    </Slide>
    <Slide bgColor="secondary">
      <PolarCoordinateSystem className="db mb4 mw6 center" />
      <Heading textColor="primary" f={2} textAlign="center">
        Polar Coordinate System (r, θ)
      </Heading>
    </Slide>
    <Slide bgColor="primary">
      <Heading size={5}>Generate & Animate Patterns</Heading>
      <SplashExample />
    </Slide>
    <Slide bgColor="secondary">
      <PolarPattern className="db mb4 mw6 center" />
    </Slide>
    <Slide bgColor="secondary" margin="0" padding="0">
      <div className="mh0 flex flex-wrap justify-center">
        <img
          alt="bubbles 2"
          style={{ width: '24rem', height: '18rem' }}
          className="pa1 ba b--moon-gray br2 mr3 mb3"
          src={images.bubbles2}
        />
        <img
          alt="spiral dots"
          style={{ width: '24rem', height: '18rem' }}
          className="pa1 ba b--moon-gray br2 mb3"
          src={images.spiraldots}
        />
        <img
          alt="spins"
          style={{ width: '24rem', height: '18rem' }}
          className="pa1 ba b--moon-gray br2 mr3"
          src={images.spins}
        />
        <img
          alt="spiral big"
          style={{ width: '24rem', height: '18rem' }}
          className="pa1 ba b--moon-gray br2"
          src={images.spiralbig}
        />
      </div>
      <Heading textColor="primary" f={3} textAlign="center" margin="2rem 0 0 0">
        Bees & Bombs Polar Patterns
      </Heading>
    </Slide>
    {/* <Slide bgColor="secondary">
      <Heading textColor="primary" f={3}>
        POLYGONS
      </Heading>
      <PolarPolygon className="db mb4 mw6 center" />
      <Heading textColor="primary" f={2}>
        angle = 360° / number of sides<br />
      </Heading>
    </Slide> */}
    <Slide bgColor="secondary" margin="0">
      <Heading textColor="primary" f={3} margin="0 0 1rem 0">
        POLYGONS
      </Heading>
      <Hexagon className="center" style={{ maxWidth: '60rem' }} />
      <Heading textColor="primary" f={3} margin="1rem 0 0 0">
        angle = 360° / number of sides<br />
      </Heading>
    </Slide>
    {polygonGenerator}
    <Slide bgColor="#000">
      <HexAPortal />
    </Slide>
    <Slide bgColor="#FE664D" textColor="secondary">
      <Embed
        url="//winkervsbecks.github.io/gems"
        fallback={images.gemsDemo}
        bgColor="#FE664D"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h4"
        style={{ backgroundColor: '#FE664D' }}
      />
      <Text f={5} textAlign="center">
        <Link href="http://winkervsbecks.github.io/gems/" textColor="primary">
          winkervsbecks.github.io/gems
        </Link>
      </Text>
    </Slide>
    <Slide margin="0" padding="0">
      <div className="flex items-end">
        <div className="mr6">
          <Image
            className="br2 db shadow-5"
            margin="0 auto 2rem"
            width={500}
            src={images.paths}
          />
          <Link href="https://medium.com/google-developers/playing-with-paths-3fbc679a6f77">
            <Text textColor="secondary" textAlign="center" fw={4} f={5}>
              Playing with Paths by Nick Butcher
            </Text>
          </Link>
        </div>
        <div>
          <Image
            className="br2 db shadow-5"
            margin="0 auto 2rem"
            width={500}
            src={images.topography}
          />
          <Link href="https://tympanus.net/codrops/2018/01/24/gradient-topography-animation/">
            <Text textColor="secondary" textAlign="center" fw={4} f={5}>
              Gradient Topography Animation by Codrops
            </Text>
          </Link>
        </div>
      </div>
    </Slide>
  </SlideSet>
);
