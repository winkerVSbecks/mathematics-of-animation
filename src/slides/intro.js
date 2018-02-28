import React from 'react';
import { SlideSet, Slide } from 'spectacle';

import { Heading, Text } from 'components';
import images from 'images';

export const introSlides = (
  <SlideSet>
    <Slide>
      <Heading f="headline" margin="0">
        Mathematics of<br />Animation 📐✏️
      </Heading>
    </Slide>
    <Slide>
      <Heading margin="0 0 1rem 0">
        Varun Vachhar{' '}
        <span role="img" aria-label="wave">
          👋🏽
        </span>
      </Heading>

      <Text f={2} margin="0 0 1rem 0">
        Tech Lead at League
      </Text>
      <Text f={2} margin="0" fw={4}>
        @winkerVSbecks
      </Text>
    </Slide>
    <Slide bgColor="secondary" margin="0" padding="0">
      <div className="mh0 flex flex-wrap justify-center">
        <img
          alt="pizza theorem"
          style={{ width: '16rem', height: '12rem' }}
          className="pa1 ba b--moon-gray br2 mb3 mr3"
          src={images.pizzaTheorem}
        />
        <img
          alt="reactive O"
          style={{ width: '16rem', height: '12rem' }}
          className="pa1 ba b--moon-gray br2 mb3 mr3"
          src={images.reactiveO}
        />
        <img
          alt="Touch ID"
          style={{ width: '16rem', height: '12rem' }}
          className="pa1 ba b--moon-gray br2 mb3"
          src={images.touchId}
        />

        <img
          alt="napoleon theorem"
          style={{ width: '16rem', height: '12rem' }}
          className="pa1 ba b--moon-gray br2 mb3 mr3"
          src={images.napoleonTheorem}
        />
        <img
          alt="chillwave"
          style={{ width: '16rem', height: '12rem' }}
          className="pa1 ba b--moon-gray br2 mb3 mr3"
          src={images.triangleninja}
        />
        <img
          alt="Triangle Ninja"
          style={{ width: '16rem', height: '12rem' }}
          className="pa1 ba b--moon-gray br2 mb3"
          src={images.truncation}
        />

        <img
          alt="The Core"
          style={{ width: '16rem', height: '12rem' }}
          className="pa1 ba b--moon-gray br2 mr3"
          src={images.core}
        />
        <img
          alt="truncation"
          style={{ width: '16rem', height: '12rem' }}
          className="pa1 ba b--moon-gray br2 mr3"
          src={images.chillwave}
        />
        <img
          alt="OAM"
          style={{ width: '16rem', height: '12rem' }}
          className="pa1 ba b--moon-gray br2"
          src={images.oam}
        />
      </div>
    </Slide>
    <Slide>
      <Text margin="0 0 1rem 0">+ Polar Coordinates</Text>
      <Text margin="0 0 1rem 0">+ Oscillations</Text>
      <Text margin="0 0 1rem 0">+ Solving Triangles</Text>
    </Slide>
  </SlideSet>
);
