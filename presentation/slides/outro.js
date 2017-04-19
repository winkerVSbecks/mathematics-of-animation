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

export const outroSlides = [
  <Slide bgColor="mauve">
    <Heading textColor="tertiary">Summary</Heading>
  </Slide>,
  <Slide>
    <Heading size={1} textColor="tertiary" fit>
      Thank You!
    </Heading>
    <Layout>
      <Fit style={{ display: 'flex', alignItems: 'center', paddingTop: '1em' }}>
        <Image src={images.winkervsbecks} margin={s.r3} height={128} />
      </Fit>
      <Fill>
        <Text
          margin={s.t4}
          textAlign="left"
          textColor="secondary"
        >
          Varun Vachhar
        </Text>
        <Link href="http://twitter.com/winkervsbecks">
          <Text margin={s.t2} textColor="gray" textAlign="left" textSize={f[5]}>
            @winkerVSbecks
          </Text>
        </Link>
        <Link href="http://varun.ca">
          <Text margin={s.t2} textColor="gray" textAlign="left" textSize={f[5]}>
            varun.ca
          </Text>
        </Link>
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="mauve">
    <Heading textColor="tertiary">Attributions</Heading>
  </Slide>,
];
