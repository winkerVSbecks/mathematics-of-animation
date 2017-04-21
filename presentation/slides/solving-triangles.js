import React from 'react';
import {
  Heading,
  Image,
  Link,
  Slide,
} from 'spectacle';
import { CodePen } from '../components';

import images from '../images';
import { f } from '../styles';

const triangle = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fee1e1"><path d="M12 5.887l8.468 14.113h-16.936l8.468-14.113zm0-3.887l-12 20h24l-12-20z" /></svg>\')';

export const solvingTrianglesSlides = [
  <Slide bgColor="mauve">
    <div
      className="bg-center flex items-center justify-center"
      style={{ backgroundImage: `${triangle}`, height: 600, backgroundSize: '50%' }}
    >
      <Heading textColor="tertiary">SOLVING<br />TRIANGLES</Heading>
    </div>
  </Slide>,
  <Slide bgColor="mauve">
    <Heading size={5} textColor="tertiary">
      ~~Explain tan and 2 things means you can solve for the third~~
    </Heading>
  </Slide>,
  <Slide bgColor="mauve">
    <CodePen
      name="Solving Triangles for Eye Tracking"
      author={
        <a style={{ color: '#000' }} href="https://p5js.org/examples/math-arctangent.html">
          p5.js
        </a>
      }
      user="winkerVSbecks" id="jmWNRO" bgColor="#c3bbff"
      height={600}
    />
  </Slide>,
  <Slide bgColor="#000">
    <Image src={images.netmag} width={946} />
    <Link
      textColor="primary" textSize={f[6]}
      href="http://lab.hakim.se/404/netmag.html"
      style={{ display: 'block' }}
    >
      Netmag 404 Page by Hakim El Hattab
    </Link>
  </Slide>,
  <Slide bgColor="#fff">
    <CodePen
      name="Glossy Triangle" user="winkerVSbecks" id="uAIaq"
      bgColor="#fff"
      height={600}
    />
  </Slide>,
  <Slide bgColor="#fff">
    <Heading textColor="tertiary">
      ~~Insert image of glossy triangle explanation~~
    </Heading>
  </Slide>,
  <Slide bgColor="#fee1e1">
    <CodePen
      name="Meta Balls Debugging"
      author={
        <a style={{ color: '#000' }} href="http://paperjs.org/examples/meta-balls">
          Paper.js
        </a>
      }
      user="winkerVSbecks" id="Qvyppq" bgColor="#fee1e1"
      height={600}
    />
  </Slide>,
  <Slide bgColor="#fee1e1">
    <Heading size={5}>~~Insert Meta Balls explainer~~</Heading>
  </Slide>,
  <Slide bgColor="#FDFCFC">
    <Heading textColor="tertiary" textAlign="left" size={5}>Use It for Levers</Heading>
    <Image src={images.lever} width={595} />
    <Link
      textColor="secondary" textSize={f[6]}
      href="http://codepen.io/rachsmith/post/hack-physics-and-javascript-part-2-solving-triangles-profit"
      style={{ display: 'block' }}
    >
      &ldquo;Solving Triangles = Profit&rdquo; by Rachel Smith
    </Link>
  </Slide>,
];
