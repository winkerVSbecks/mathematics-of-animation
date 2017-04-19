import React from 'react';
import {
  CodePane,
  Heading,
  Image,
  Link,
  Slide,
} from 'spectacle';
import { Chillwave, CodePen } from '../components';
import { WavesWithOffset } from '../../examples/waves-with-offset';

import images from '../images';
import { f } from '../styles';

export const oscillationsSlides = [
  <Slide bgColor="pink" textColor="tertiary">
    <Chillwave clr="#5a5ae6" size={3} />
    <Heading
      textColor="tertiary"
    >
      Waves &<br />Oscillations
    </Heading>
  </Slide>,
  <Slide bgColor="#440015" textColor="tertiary">
    <CodePen
      name="Sine" user="HunorMarton" id="ggQGqQ"
      themeId="29124" bgColor="#440015" color="#ff0050"
    />
  </Slide>,
  <Slide>
    <Image
      className="br2 db shadow-5"
      alt="hexagon"
      src={images.hexagon}
      width={500}
    />
  </Slide>,
  <Slide>
    <Heading fit textColor="red">Dave Whyte (bees & bombs)</Heading>
  </Slide>,
  <Slide className="flex">
    <div className="flex-auto flex flex-wrap" style={{ height: 600 }}>
      <div
        className="w-25 cover"
        style={{ background: `url(${images.cubewave}) center` }}
      />
      <div
        className="w-25 cover"
        style={{ background: `url(${images.boxes}) center` }}
      />
      <div
        className="w-25 cover"
        style={{ background: `url(${images.out}) center` }}
      />
      <div
        className="w-25 cover"
        style={{ background: `url(${images.waveD}) center` }}
      />
      <div
        className="w-25 cover"
        style={{ background: `url(${images.bouncers}) center` }}
      />
      <div
        className="w-25 cover"
        style={{ background: `url(${images.dotLineWave}) center` }}
      />
      <div
        className="w-25 cover"
        style={{ background: `url(${images.blob}) center` }}
      />
      <div
        className="w-25 cover"
        style={{ background: `url(${images.weaves}) center` }}
      />
    </div>
  </Slide>,
  <Slide bgColor="tertiary">
    <Heading fit textColor="primary">Sine Waves with Offsets</Heading>
    <WavesWithOffset />
    <Link
      textColor="primary" textSize={f[6]}
      href="http://codepen.io/DonKarlssonSan/pen/QGzqaM?editors=1100"
    >
      🍴 of Johan Karlsson's CodePen
    </Link>
  </Slide>,
  <Slide bgColor="#2d2d2d">
    <CodePane
      lang="javascript"
      source={`
        // translation
        x = xStart + 2 * sin(θ);

        // scaling
        width = widthStart + 5 * sin(θ);

        // rotation
        x = originX + radius * cos(θ);
        y = originY + radius * sin(θ);

        // Example: [Rocket around the moon](http://codepen.io/Yakudoo/pen/aOEeXB)
      `}
    />
  </Slide>,
  <Slide bgColor="#141414">
    <Image src={images.swimmer} width={400} />
  </Slide>,
  <Slide bgColor="pink">
    <Heading fit textColor="red">Parameterization 💞 Oscillation</Heading>
  </Slide>,
  <Slide bgColor="pink">
    <Heading fit textColor="red">Explain swimmer</Heading>
  </Slide>,
];
