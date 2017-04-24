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
import { Sine, Translation, Scaling, Rotation } from '../../examples/oscillation-demos';

import images from '../images';
import { s, f } from '../styles';

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
  <Slide bgColor="mauve">
    <Heading textColor="tertiary" fit>Dave Whyte</Heading>
    <Heading textColor="red" fit>BEES & BOMBS</Heading>
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
  <Slide>
    <Heading textColor="tertiary" size={3}>Sine</Heading>
    <Sine />
    <CodePane
      lang="javascript"
      textSize={f[4]}
      source={`let theta = 0;
x = Math.sin(theta);

function animationLoop() {
  theta = theta + 0.15;
}`}
    />
  </Slide>,
  <Slide>
    <Heading textColor="tertiary" size={3} margin={s.b4}>Translation</Heading>
    <Translation />
    <CodePane
      lang="javascript"
      textSize={f[4]}
      source="x = xStart + 300 * Math.sin(theta);"
    />
  </Slide>,
  <Slide>
    <Heading textColor="tertiary" size={3} margin={s.b4}>Scaling</Heading>
    <Scaling />
    <CodePane
      lang="javascript"
      textSize={f[4]}
      source="scale = scaleStart + 1 * Math.sin(theta);"
    />
  </Slide>,
  <Slide>
    <Heading textColor="tertiary" size={3} margin={s.b4}>Rotation</Heading>
    <Rotation />
    <CodePane
      lang="javascript"
      textSize={f[4]}
      source={`x = originX + distance * Math.cos(theta);
y = originY + distance * Math.sin(theta);`}
    />
  </Slide>,
  <Slide bgColor="#141414">
    <div><Image src={images.swimmer} width={400} /></div>
    <Link textColor="primary" textSize={f[6]} href="https://dribbble.com/shots/3005711-Swimmer">
      Swimmer by Dave Whyte
    </Link>
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
  <Slide bgColor="#22222a" textColor="tertiary">
    <CodePen
      name="Rocket around the moon" user="Yakudoo" id="aOEeXB"
      height={600}
      bgColor="#22222a" color="#167370"
    />
  </Slide>,
];
