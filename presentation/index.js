import React from 'react';
import {
  BlockQuote,
  Cite,
  Deck,
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
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
// import CodeSlide from 'spectacle-code-slide';

// CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  parrot: require('../assets/parrots/hd/parrot.gif'),
  colouredSucculents: require('../assets/andrew-phillips-22549.jpg'),
  winkervsbecks: require('../assets/winkervsbecks.jpg'),
};

preloader(images);

const theme = createTheme({
  primary: 'white',
  secondary: '#2e2f30',
  tertiary: '#5a5ae6',
  quartenary: '#dcdedf',
  quinary: '#c3bbff',
  senary: '#ff485e',
}, {
  primary: '-apple-system, BlinkMacSystemFont, \'avenir next\', avenir, \'helvetica neue\', helvetica, ubuntu, roboto, noto, \'segoe ui\', arial, sans-serif',
  secondary: '-apple-system, BlinkMacSystemFont, \'avenir next\', avenir, \'helvetica neue\', helvetica, ubuntu, roboto, noto, \'segoe ui\', arial, sans-serif',
});

export const Presentation = () => (
  <Deck transition={['slide']} transitionDuration={500} theme={theme} progress="bar">
    <Slide bgImage={images.colouredSucculents}>
      <Heading margin="0 0 1rem 0" size={1} lineHeight={1.25} textColor="primary">
        Mathematics<br />of Animation
      </Heading>
    </Slide>
    <Slide>
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
    </Slide>

    <Slide bgColor="tertiary">
      <Heading size={6} textColor="primary" caps>Typography</Heading>
      <Heading size={1} textColor="secondary">Heading 1</Heading>
      <Heading size={2} textColor="secondary">Heading 2</Heading>
      <Heading size={3} textColor="secondary">Heading 3</Heading>
      <Heading size={4} textColor="secondary">Heading 4</Heading>
      <Heading size={5} textColor="secondary">Heading 5</Heading>
      <Text size={6} textColor="secondary">Standard text</Text>
    </Slide>
    <Slide bgColor="primary" textColor="tertiary">
      <Heading size={6} textColor="secondary" caps>Standard List</Heading>
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
      </List>
    </Slide>
    <Slide bgColor="secondary" textColor="primary">
      <BlockQuote>
        <Quote>Example Quote</Quote>
        <Cite>Author</Cite>
      </BlockQuote>
    </Slide>
  </Deck>
);
