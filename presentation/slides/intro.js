import React from 'react';
import {
  Heading,
  Fit,
  Fill,
  Layout,
  Link,
  ListItem,
  List,
  Image,
  Slide,
  Text,
} from 'spectacle';

import images from '../images';
import { s, f } from '../styles';

export const introSlides = [
  <Slide bgImage={images.colouredSucculents}>
    <Heading margin="0 0 1rem 0" size={1} lineHeight={1.25} textColor="primary">
      Mathematics<br />of Animation
    </Heading>
  </Slide>,
  <Slide>
    <Layout style={{ alignItems: 'center' }}>
      <Fit>
        <Image
          margin="0" style={{ display: 'block' }}
          width={240} src={images.winkervsbecks}
        />
      </Fit>
      <Fill>
        <Heading size={2} textColor="tertiary" textAlign="left">
          Varun Vachhar
        </Heading>
        <Text
          className="fw6"
          textColor="secondary" textSize={f[4]} textAlign="left"
        >
          Developer at Rangle.io
        </Text>
        <Text
          className="fw6"
          textColor="gray" textSize={f[4]} textAlign="left"
        >
          @winkerVSbecks
        </Text>
        <Text
          className="fw6"
          textSize={f[4]} textAlign="left"
        >
          <Link textColor="gray" href="http://varun.ca">
            varun.ca
          </Link>
        </Text>
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <Heading size={5} textColor="tertiary" textAlign="left">
      Overview
    </Heading>
    <List>
      <ListItem margin={s.b3}>Coordinate Geometry</ListItem>
      <ListItem margin={s.b3}>Generating 2D shapes & Parameterization</ListItem>
      <ListItem margin={s.b3}>Oscillations: moving with trigonometry</ListItem>
      <ListItem margin={s.b3}>Solving triangles</ListItem>
      <ListItem margin={s.b3}>Curves, easings and springs</ListItem>
    </List>
  </Slide>,
  <Slide align="center center" bgColor="pink">
    <Image width={400} src={images.card} />
    <Link
      textColor="tertiary" textSize={f[6]}
      href="http://codepen.io/ph1p/pen/BpRWWM"
      style={{ display: 'block' }}
    >
      2017 Card by Phil
    </Link>
  </Slide>,
  <Slide bgColor="secondary" align="center center">
    {/* <Image width={640} src={images.someWords} /> */}
    <Image width={640} src="https://i.giphy.com/ErHMDXYMfGH96.gif" />
  </Slide>,
  <Slide align="center center">
    <Heading textColor="tertiary" fit size={1} margin={s.b4}>
      Reactive Animations
    </Heading>
    <Text textColor="secondary">Events ➡️ Discrete Changes</Text>
  </Slide>,
  <Slide align="center center">
    <Heading textColor="tertiary" size={5} margin={s.b4}>
      Reactive Animations
    </Heading>
    <Layout style={{ alignItems: 'center' }}>
      <Fit><Image width={400} src={images.shadow} /></Fit>
      <Fit>
        <Image margin={s.r3} width={240} src={images.chrome} />
      </Fit>
      <Fill><Image width="100%" src={images.uber} /></Fill>
    </Layout>
  </Slide>,
];
