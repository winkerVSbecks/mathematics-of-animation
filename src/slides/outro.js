import React from 'react';
import { Slide, SlideSet, Link, Image } from 'spectacle';

import { Text, Heading } from 'components';
import images from 'images';

export const outroSlides = (
  <SlideSet>
    <Slide>
      <Image src={images.generativeGestaltung3} className="w-75" />
      <Text fw={9} f={2} textAlign="center">
        <Link
          href="http://www.generative-gestaltung.de/2/"
          textColor="secondary"
        >
          generative-gestaltung.de
        </Link>
      </Text>
    </Slide>
    <Slide>
      <Heading
        bgColor="white"
        textColor="primary"
        fw={5}
        margin="0 0 4rem 0"
        padding="1rem"
      >
        Thank You!
      </Heading>
      <Text textSize="2.25rem">@winkerVSbecks</Text>
      <Text textSize="2.25rem">varun.ca</Text>
      <Text margin="4rem 0 0 0" textSize="2.25rem">
        <Link href="https://tiny.cc/animation-math" textColor="secondary">
          tiny.cc/animation-math
        </Link>
      </Text>
    </Slide>
    <Slide>
      <Text margin="0 0 2rem 0">Attributions</Text>
      <Text f={2}>
        +{' '}
        <Link
          href="https://commons.wikimedia.org/wiki/File:Triangle_with_notations_2.svg"
          textColor="blue"
        >
          Law Of Cosines
        </Link>{' '}
        image by David Weisman
      </Text>
      <Text f={2}>
        +{' '}
        <Link
          href="https://commons.wikimedia.org/wiki/File:Rtriangle.svg"
          textColor="blue"
        >
          Right Triangle
        </Link>{' '}
        image by A Malik
      </Text>
      <Text f={2}>
        +{' '}
        <Link href="http://www.generative-gestaltung.de/2/" textColor="blue">
          Generative Gestaltung
        </Link>
      </Text>
      <Text f={2}>
        +{' '}
        <Link
          href="https://github.com/winkerVSbecks/mathematics-of-animation"
          textColor="blue"
        >
          Slides source-code
        </Link>
      </Text>
    </Slide>
  </SlideSet>
);
