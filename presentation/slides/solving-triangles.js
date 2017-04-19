import React from 'react';
import {
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
import CodeSlide from 'spectacle-code-slide';
import { Chillwave, CodePen } from '../components';

import images from '../images';
import { f, s } from '../styles';

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
    <Heading textColor="tertiary">What is Tan</Heading>
  </Slide>,
  <Slide bgColor="mauve">
    <Heading textColor="tertiary">Direction</Heading>
  </Slide>,
  <Slide bgColor="mauve">
    <Heading textColor="tertiary">Pointing</Heading>
  </Slide>,
  <Slide bgColor="mauve">
    <CodePen
      name="eyes" user="winkerVSbecks" id="jmWNRO" bgColor="#c3bbff"
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
  <Slide bgColor="mauve">
    <Heading textColor="tertiary">Meta Balls</Heading>
  </Slide>,
];
