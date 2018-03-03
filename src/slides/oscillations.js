import React from 'react';
import { Image, Link, Slide, SlideSet } from 'spectacle';
import { Chillwave, CodePane, CodePen, Heading, Text } from 'components';
import {
  WavesWithOffset,
  Sine,
  Translation,
  Scaling,
  Rotation,
  sineSnippets,
  translationSnippets,
  scalingSnippets,
  rotationSnippets,
  Sinus,
} from 'examples';

import images from '../images';

export const oscillationsSlides = (
  <SlideSet>
    <Slide>
      <Chillwave clr="#fff" size={3} />
      <Heading textAlign="center">
        Waves &<br />Oscillations
      </Heading>
    </Slide>
    <Slide bgColor="#440015" textColor="tertiary">
      <Sinus />
      <p style={{ color: '#ff0050' }} className="mt4 f5">
        <a
          style={{ color: '#ff0050' }}
          href="http://codepen.io/HunorMarton/pen/ggQGqQ"
        >
          Sine
        </a>{' '}
        by{' '}
        <a style={{ color: '#ff0050' }} href="http://codepen.io/HunorMarton">
          @HunorMarton
        </a>
      </p>
    </Slide>
    <Slide margin="0">
      <Heading textColor="secondary" f={2} margin="0 0 2rem 0">
        Dave Whyte{' '}
        <small className="dib bg-white ph2 fw8" style={{ color: '#212121' }}>
          Bees & Bombs
        </small>
      </Heading>
      <div className="flex">
        <div className="flex-auto flex flex-wrap" style={{ height: 550 }}>
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
            style={{ background: `url(${images.weaves}) center` }}
          />
          <div
            className="w-25 cover"
            style={{ background: `url(${images.blob}) center` }}
          />
        </div>
      </div>
    </Slide>
    <Slide>
      <Heading textColor="tertiary" size={3}>
        Scaling
      </Heading>
      <Scaling />
      <CodePane source={scalingSnippets} />
    </Slide>
    <Slide>
      <Heading textColor="tertiary" size={3}>
        Translation
      </Heading>
      <Translation />
      <CodePane source={translationSnippets} />
    </Slide>
    <Slide>
      <Heading textColor="tertiary" size={3}>
        Rotation
      </Heading>
      <Rotation />
      <CodePane source={rotationSnippets} />
    </Slide>
    <Slide bgColor="#22222a" textColor="tertiary">
      <CodePen
        name="Rocket around the moon"
        user="Yakudoo"
        id="aOEeXB"
        height={600}
        bgColor="#22222a"
        color="#167370"
      />
    </Slide>
    <Slide bgColor="#141414">
      <div>
        <Image src={images.swimmer} width={400} />
      </div>
      <Link
        textColor="secondary"
        href="https://dribbble.com/shots/3005711-Swimmer"
      >
        Swimmer by Dave Whyte
      </Link>
    </Slide>
    <Slide bgColor="secondary" margin="0" padding="0">
      <Heading textColor="primary" f={1} fw={7}>
        Sine Waves with Offsets
      </Heading>
      <WavesWithOffset />
      <Link href="http://codepen.io/DonKarlssonSan/pen/QGzqaM?editors=1100">
        <Text f={5} textAlign="center" textColor="primary" fw={4}>
          <span role="img" aria-label="fork">
            based on CodePen
          </span>{' '}
          by Johan Karlsson's
        </Text>
      </Link>
    </Slide>
  </SlideSet>
);
