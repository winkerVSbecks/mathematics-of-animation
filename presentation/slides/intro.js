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
        <Heading size={3} textColor="tertiary" textAlign="left">Varun Vachhar</Heading>
        <Text textAlign="left" lineHeight={1.25}>@winkerVSbecks</Text>
        <Text textAlign="left" lineHeight={1}>
          <Link textColor="secondary" href="http://varun.ca">varun.ca</Link>
        </Text>
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="primary" textColor="secondary">
    <Heading size={5} textColor="tertiary" textAlign="left">
      Overview
    </Heading>
    <List>
      <ListItem>Coordinate Geometry</ListItem>
      <ListItem>Generating 2D shapes & Parameterization</ListItem>
      <ListItem>Oscillations: moving with trigonometry</ListItem>
      <ListItem>Solving triangles</ListItem>
      <ListItem>Curves, easings and springs</ListItem>
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
  <Slide align="center center">
    <Image width={640} src={images.someWords} />
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
