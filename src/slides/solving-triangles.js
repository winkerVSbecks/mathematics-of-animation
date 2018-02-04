import React from 'react';
import { Image, Link, Slide, SlideSet } from 'spectacle';
import { CodePen, Heading, LawOfCosines } from 'components';

import images from '../images';
import { TrigFunctions, SA15Process, Metaball } from 'examples';

const triangle =
  'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fee1e1"><path d="M12 5.887l8.468 14.113h-16.936l8.468-14.113zm0-3.887l-12 20h24l-12-20z" /></svg>\')';

export const solvingTrianglesSlides = (
  <SlideSet>
    <Slide bgColor="mauve">
      <div
        className="bg-center flex items-center justify-center"
        style={{
          backgroundImage: `${triangle}`,
          height: 600,
          backgroundSize: '50%',
        }}
      >
        <Heading textColor="purple" textAlign="center" fw={7} margin="0">
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
      <Heading f={2}>SOH-CAH-TOA!</Heading>
      {/* Mnemonic */}
      <TrigFunctions />
    </Slide>
    <Slide bgColor="mauve">
      <CodePen
        name="Solving Triangles for Eye Tracking"
        author={
          <a
            style={{ color: '#000' }}
            href="https://p5js.org/examples/math-arctangent.html"
          >
            p5.js
          </a>
        }
        user="winkerVSbecks"
        id="jmWNRO"
        bgColor="#c3bbff"
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
      <Heading textColor="tertiary" textAlign="left" size={5}>
        Use It for Levers
      </Heading>
      <Image src={images.lever} width={595} />
      <Link
        textColor="secondary"
        href="http://codepen.io/rachsmith/post/hack-physics-and-javascript-part-2-solving-triangles-profit"
        style={{ display: 'block' }}
      >
        &ldquo;Solving Triangles = Profit&rdquo; by Rachel Smith
      </Link>
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
      <Metaball className="center mw7" />
    </Slide>
  </SlideSet>
);
