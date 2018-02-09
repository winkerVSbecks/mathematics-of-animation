import React from 'react';
import { Image, Link, Slide, SlideSet } from 'spectacle';
import { CodePen, Heading, LawOfCosines, Text } from 'components';

import images from '../images';
import { TrigFunctions, SA15Process, Metaball } from 'examples';

const triangle =
  'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#555555"><path d="M12 5.887l8.468 14.113h-16.936l8.468-14.113zm0-3.887l-12 20h24l-12-20z" /></svg>\')';

export const solvingTrianglesSlides = (
  <SlideSet>
    <Slide>
      <div
        className="bg-center flex items-center justify-center"
        style={{
          backgroundImage: `${triangle}`,
          height: 600,
          backgroundSize: '50%',
        }}
      >
        <Heading textColor="secondary" textAlign="center" fw={7} margin="0">
          SOLVING<br />TRIANGLES
        </Heading>
      </div>
    </Slide>
    <Slide>
      <Heading fw={7} margin="0">
        Find Missing{' '}
        <span role="img" aria-label="detective">
          🕵🏽‍
        </span>
        <br />Sides Or Angles
      </Heading>
    </Slide>
    <Slide margin="0" padding="0">
      <TrigFunctions />
    </Slide>
    <Slide>
      <CodePen
        name="Solving Triangles for Eye Tracking"
        author={
          <a
            style={{ color: '#fff' }}
            href="https://p5js.org/examples/math-arctangent.html"
          >
            p5.js
          </a>
        }
        user="winkerVSbecks"
        id="jmWNRO"
        color="#fff"
        bgColor="#212121"
        height={600}
      />
    </Slide>
    <Slide margin="0" padding="0">
      <div className="flex items-stretch">
        <CodePen
          className="w-50"
          user="winkerVSbecks"
          id="WMwwzV"
          height={600}
          bgColor="#212121"
          showAttr={false}
        />
        <SA15Process className="w-50" />
      </div>
    </Slide>
    <Slide bgColor="#FDFCFC">
      <Heading textColor="primary" f={1}>
        Use It for Levers
      </Heading>
      <Image src={images.lever} width={595} margin="0 0 4rem 0" />
      <Text f={3}>
        <Link
          textColor="primary"
          href="http://codepen.io/rachsmith/post/hack-physics-and-javascript-part-2-solving-triangles-profit"
          style={{ display: 'block' }}
        >
          &ldquo;Solving Triangles = Profit&rdquo; by Rachel Smith
        </Link>
      </Text>
    </Slide>
    <Slide>
      <Heading f={2}>Law Of Cosines</Heading>
      <LawOfCosines />
    </Slide>
    <Slide margin="0" padding="0" bgColor="#080327">
      <CodePen
        user="winkerVSbecks"
        id="eVZzwj"
        height={600}
        bgColor="#080327"
        showAttr={false}
      />
    </Slide>
    <Slide>
      <CodePen
        user="winkerVSbecks"
        id="aqNZKR"
        height={600}
        bgColor="#212121"
        showAttr={false}
      />
      <Link
        href="http://varun.ca/metaballs"
        textColor="secondary"
        textAlign="center"
        textSize="1.25rem"
      >
        varun.ca/metaballs
      </Link>
    </Slide>
    <Slide margin="0" padding="0">
      <Metaball className="db center overflow-hidden" style={{ height: 600 }} />
    </Slide>
  </SlideSet>
);
