import React from 'react';
import { Appear, Image, Link, Slide, SlideSet } from 'spectacle';
import CodeSlide from 'spectacle-code-slide';

import {
  CodePen,
  CartesianCoordSystem,
  PolarCoordinateSystem,
  PolarPolygon,
  Heading,
  Embed,
} from 'components';
import { Hexagon } from 'examples/hexagon';
import { SplashExample } from 'examples/splash';
import { PolygonParameterization } from 'examples/polygon-parameterization';
import { HexAPortal } from 'examples/hex-a-portal';
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
    <Slide bgColor="primary" textColor="secondary">
      <Image className="br2 db shadow-5" width={400} src={images.gems} />
      <Link textColor="secondary" href="http://varun.ca">
        Rarities 2.0 by Rogie 👑
      </Link>
    </Slide>
    <Slide bgColor="#fdfef6">
      <Image src={images.gemsExplain} width="100%" />
    </Slide>
    <Slide bgColor="#FE664D" textColor="secondary">
      <Embed url="//winkervsbecks.github.io/gems" fallback={images.gemsDemo} />
    </Slide>
    <Slide bgColor="secondary">
      <Heading size={5} textColor="primary">
        Use polar coordinates for locations to generate patterns
      </Heading>
      <SplashExample />
    </Slide>
    <Slide bgColor="#fefff7">
      <Image src={images.splashExplain} width="75%" />
    </Slide>
  </SlideSet>
);

// <Slide>
// <CodePen
//   height={600}
//   name="Hexagon with Polar Coordinates"
//   user="winkerVSbecks"
//   id="ZpGzdz"
//   bgColor="#fff"
//   color="#89C2EF"
// />
// </Slide>
// <Slide bgColor="#FEFEFE">
// <Image width={400} src={images.manypolygons} />
// </Slide>
// <Slide bgColor="primary" textColor="secondary">
// <Image className="br2 db shadow-5" width={400} src={images.gems} />
// <Link textColor="secondary" href="http://varun.ca">
//   Rarities 2.0 by Rogie 👑
// </Link>
// </Slide>
// <Slide bgColor="pink">
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   height="600px"
//   viewBox="-2 0 28 24"
// >
//   <path
//     fill="#2e2f30"
//     d="M18,2 L24,12.5 L18,23 H6 L0,12.5 L6,2Z"
//     stroke="none"
//   />
//   <g fill="none" stroke="#ff485e" strokeWidth="0.25">
//     <Appear>
//       <circle cx="24" cy="12.5" r="0.5" />
//     </Appear>
//     <Appear>
//       <circle cx="18" cy="2" r="0.5" />
//     </Appear>
//     <Appear>
//       <circle cx="6" cy="2" r="0.5" />
//     </Appear>
//     <Appear>
//       <g>
//         <circle cx="6" cy="23" r="0.5" />
//         <circle cx="0" cy="12.5" r="0.5" />
//         <circle cx="18" cy="23" r="0.5" />
//       </g>
//     </Appear>
//   </g>
// </svg>
// </Slide>
// <Slide bgColor="#fefef2">
// <Image src={images.polar} width="100%" />
// </Slide>
