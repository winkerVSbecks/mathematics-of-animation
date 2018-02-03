import React from 'react';
import { SlideSet, Slide } from 'spectacle';

import { Heading, Text } from 'components';

export const introSlides = (
  <SlideSet>
    <Slide>
      <Heading f="headline" margin="0 0 12rem 0">
        Mathematics of<br />Animation 📐✏️
      </Heading>

      <Text f={2} margin="0 0 1rem 0" fw={7}>
        Varun Vachhar
      </Text>
      <Text f={3} margin="0 0 1rem 0">
        Tech Lead at League Inc.
      </Text>
      <Text f={3} margin="0" fw={4}>
        @winkerVSbecks
      </Text>
    </Slide>
    <Slide>
      <Text>Math is basically coding with poorly named variables</Text>
    </Slide>
  </SlideSet>
);

/* <Slide align="center center" bgColor="pink">
      <Heading
        textColor="secondary"
        size={4}
        className="flex items-center justify-center"
      >
        <Image width="1em" src={images.codepen} />CodePen
      </Heading>
      <Image width={400} src={images.card} />
      <Link
        textColor="tertiary"
        href="http://codepen.io/ph1p/pen/BpRWWM"
        style={{ display: 'block' }}
      >
        2017 Card by Phil
      </Link>
    </Slide>
    <Slide bgColor="#000" align="center center">
      <Image height="600" src={images.sorcery} />
    </Slide>
    <Slide bgColor="pink" align="center center">
      <Heading textColor="red">✨MATH✨</Heading>
    </Slide>
    <Slide align="center center">
      <Heading textColor="tertiary" size={6}>
        Reactive Animations
      </Heading>
      <Text textColor="secondary">Events ➡️ Discrete Changes</Text>
      <Layout style={{ alignItems: 'center' }}>
        <Fit>
          <Image width={400} src={images.shadow} />
        </Fit>
        <Fit>
          <Image width={240} src={images.chrome} />
        </Fit>
        <Fill>
          <Image width="100%" src={images.uber} />
        </Fill>
      </Layout>
    </Slide> */

// <Slide>
//   <Layout style={{ alignItems: 'center' }}>
//     <Fit>
//       <Image
//         margin="0" style={{ display: 'block' }}
//         width={240} src={images.winkervsbecks}
//       />
//     </Fit>
//     <Fill>
//       <Heading size={2} textColor="tertiary" textAlign="left">
//         Varun Vachhar
//       </Heading>
//       <Text
//         className="fw6"
//         textColor="secondary" textSize={f[4]} textAlign="left"
//       >
//         Developer at Rangle.io
//       </Text>
//       <Text
//         className="fw6"
//         textColor="gray" textSize={f[4]} textAlign="left"
//       >
//         @winkerVSbecks
//       </Text>
//       <Text
//         className="fw6"
//         textSize={f[4]} textAlign="left"
//       >
//         <Link textColor="gray" href="http://varun.ca">
//           varun.ca
//         </Link>
//       </Text>
//     </Fill>
//   </Layout>
// </Slide>
