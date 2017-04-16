import React from 'react';
import {
  BlockQuote,
  Cite,
  Heading,
  Fit,
  Fill,
  Layout,
  Link,
  ListItem,
  List,
  Image,
  Quote,
  Slide,
  Text,
} from 'spectacle';
// import CodeSlide from 'spectacle-code-slide';

import images from './images';

export const slides = [
  <Slide key={1} bgImage={images.colouredSucculents}>
    <Heading margin="0 0 1rem 0" size={1} lineHeight={1.25} textColor="primary">
      Mathematics<br />of Animation
    </Heading>
  </Slide>,
  <Slide key={2}>
    <Layout style={{ alignItems: 'center' }}>
      <Fit>
        <Image margin="0" style={{ display: 'block' }} width={240} src={images.winkervsbecks} />
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
  <Slide key={3} bgColor="tertiary">
    <Heading size={6} textColor="primary" caps>Typography</Heading>
    <Heading size={1} textColor="secondary">Heading 1</Heading>
    <Heading size={2} textColor="secondary">Heading 2</Heading>
    <Heading size={3} textColor="secondary">Heading 3</Heading>
    <Heading size={4} textColor="secondary">Heading 4</Heading>
    <Heading size={5} textColor="secondary">Heading 5</Heading>
    <Text size={6} textColor="secondary">Standard text</Text>
  </Slide>,
  <Slide key={4} bgColor="primary" textColor="tertiary">
    <Heading size={6} textColor="secondary" caps>Standard List</Heading>
    <List>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
      <ListItem>Item 3</ListItem>
      <ListItem>Item 4</ListItem>
    </List>
  </Slide>,
  <Slide key={5} bgColor="secondary" textColor="primary">
    <BlockQuote>
      <Quote>Example Quote</Quote>
      <Cite>Author</Cite>
    </BlockQuote>
  </Slide>,
];
