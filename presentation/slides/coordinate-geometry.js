import React from 'react';
import {
  Appear,
  Heading,
  Image,
  Link,
  Slide,
} from 'spectacle';

import { CodePen } from '../components';
import { Hexagon } from '../../examples/hexagon';
import images from '../images';
import { s, f } from '../styles';

export const coordinateGeometrySlides = [
  <Slide bgColor="pink" textColor="tertiary">
    <Image height="8rem" margin={s.r4} src={images.ruler25} />
    <Heading style={{ display: 'inline' }}>Coordinate Geometry</Heading>
  </Slide>,
  <Slide bgColor="#fefef2">
    <Image src={images.cartesian} width="100%" />
  </Slide>,
  <Slide bgColor="primary">
    <Image width={400} src={images.manypolygons} />
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
  <Slide bgColor="pink">
    <svg xmlns="http://www.w3.org/2000/svg" height="600px" viewBox="-2 0 28 24">
      <path fill="#2e2f30" d="M18,2 L24,12.5 L18,23 H6 L0,12.5 L6,2Z" stroke="none" />
      <g fill="none" stroke="#ff485e" strokeWidth="0.25">
        <Appear><circle cx="24" cy="12.5" r="0.5" /></Appear>
        <Appear><circle cx="18" cy="2" r="0.5" /></Appear>
        <Appear><circle cx="6" cy="2" r="0.5" /></Appear>
        <Appear>
          <g>
            <circle cx="6" cy="23" r="0.5" />
            <circle cx="0" cy="12.5" r="0.5" />
            <circle cx="18" cy="23" r="0.5" />
          </g>
        </Appear>
      </g>
    </svg>
  </Slide>,
  <Slide bgColor="#fefef2">
    <Image src={images.polar} width="100%" />
  </Slide>,
  <Slide>
    <CodePen
      height={600}
      name="Hexagon with Polar Coordinates" user="winkerVSbecks" id="ZpGzdz" bgColor="#fff" color="#89C2EF"
    />
  </Slide>,
  <Slide bgColor="#fefef2">
    <Heading size={6} textColor="secondary" margin="0">
      angle = 360° / number of sides
    </Heading>
    <Image src={images.octagon} width="100%" />
  </Slide>,
  <Slide>
    <Hexagon />
  </Slide>,
];
