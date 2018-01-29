import React from 'react';
import {
  Heading,
  Fill,
  Layout,
  Link,
  ListItem,
  List,
  Slide,
  Text,
} from 'spectacle';

import images from '../images';
import { s, f } from '../styles';

export const outroSlides = [
  <Slide bgColor="#f1ebed" bgImage={images.cactus}>
    <Heading size={1} textColor="tertiary" textAlign="left">
      Thank You!
    </Heading>
    <Layout>
      <Fill>
        <Text
          className="fw6"
          margin={s.t4}
          textAlign="left"
          textColor="secondary"
        >
          Varun Vachhar
        </Text>
        <Link href="http://twitter.com/winkervsbecks">
          <Text
            margin={s.t2}
            textColor="gray" textAlign="left" textSize={f[5]}
            className="fw6"
          >
            @winkerVSbecks
          </Text>
        </Link>
        <Link href="http://varun.ca">
          <Text
            margin={s.t2}
            textColor="gray" textAlign="left" textSize={f[5]}
            className="fw6"
          >
            varun.ca
          </Text>
        </Link>
        <Text
          margin={s.t5}
          textColor="secondary"
          textAlign="left" textSize={f[5]}
          className="fw6"
        >
          Slides: <Link href="https://goo.gl/w6FYTC" textColor="tertiary">goo.gl/w6FYTC</Link>
        </Text>
      </Fill>
    </Layout>
  </Slide>,
  <Slide>
    <Heading textColor="tertiary" size={5} textAlign="left">
      Icons and Images from
    </Heading>
    <List>
      <ListItem>
        <Link
          textColor="secondary"
          href="http://iconmonstr.com"
        >
          iconmonstr.com (Alexander Kahlkopf)
        </Link>
      </ListItem>
      <ListItem>
        <Link
          textColor="secondary"
          href="https://unsplash.com/@andrewjohnp"
        >
          Andrew Phillips
        </Link>
      </ListItem>
      <ListItem>
        <Link
          textColor="secondary"
          href="https://unsplash.com/@anniespratt"
        >
          Annie Spratt
        </Link>
      </ListItem>
    </List>
  </Slide>,
];
