import React from 'react';
import { Slide, SlideSet, Link } from 'spectacle';

import { Text, Heading } from 'components';
import images from 'images';

export const outroSlides = (
  <SlideSet>
    <Slide bgImage={images.generativeGestaltung3} margin="0">
      <Heading fw={9} margin="24rem 0 0 0">
        <Link href="http://www.generative-gestaltung.de/2/" textColor="#0fe976">
          Generative<br />Gestaltung
        </Link>
      </Heading>
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
      <Text textSize="3rem" className="fw9">
        Varun Vachhar
      </Text>
      <Text textSize="2.25rem">@winkerVSbecks</Text>
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
    </Slide>
  </SlideSet>
);
