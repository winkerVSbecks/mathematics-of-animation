import React from 'react';
import {
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
  <Slide bgColor="#fefff7">
    <Image src={images.measure} width="100%" />
  </Slide>,
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
  <Slide bgColor="#fefef2">
    <Heading size={5}>~~Explain challenges to making these shapes with cartesian coords~~</Heading>
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
    <Image src={images.octagon} width="100%" />
  </Slide>,
  <Slide>
    <Hexagon />
  </Slide>,
];
