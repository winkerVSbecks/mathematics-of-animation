import React from 'react';
import {
  BlockQuote,
  Cite,
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

import images from '../images';
import { s, f } from '../styles';

export const coordinateGeometrySlides = [
  <Slide className="contain" bgColor="primary">
    <Image src={images.measure} width="100%" />
  </Slide>,
  <Slide bgColor="pink" textColor="tertiary">
    <Image height="8rem" margin={s.r4} src={images.ruler25} />
    <Heading style={{ display: 'inline' }}>Coordinate Geometry</Heading>
  </Slide>,
  <Slide className="contain" bgColor="primary">
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
  <Slide className="contain" bgColor="primary">
    <Image src={images.polar} width="100%" />
  </Slide>,
  // <Slide bgColor="pink" textColor="secondary">
  //   <Text>Insert offset-polar demo</Text>
  //   <CodePane
  //     lang="js"
  //     source={require('raw-loader!../code/offset-polar.js')}
  //   />
  // </Slide>,
];
