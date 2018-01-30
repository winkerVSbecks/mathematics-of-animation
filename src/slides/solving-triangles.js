import React from 'react';
import { Appear, Fill, Image, Layout, Link, Slide, SlideSet } from 'spectacle';
import { CodePen, Heading, Text } from 'components';

import images from '../images';
import { RightAngledTriangle } from 'examples/right-angled-triangle';
import { SolvingRightAngledTriangle } from 'examples/solving-right-angled-triangle';
import { Trigonometry } from 'examples/trigonometry';

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
        <Heading textColor="tertiary">
          SOLVING<br />TRIANGLES
        </Heading>
      </div>
    </Slide>
    <Slide bgColor="mauve">
      <div
        className="bg-center flex items-center justify-center"
        style={{
          backgroundImage: `${triangle}`,
          height: 600,
          backgroundSize: '50%',
        }}
      >
        <Heading size={3} textColor="tertiary">
          finding missing sides or angles
        </Heading>
      </div>
    </Slide>
    <Slide bgColor="mauve">
      <Heading size={4} textColor="tertiary">
        Right Angled Triangle
      </Heading>
      <RightAngledTriangle />
    </Slide>
    <Slide bgColor="mauve">
      <Heading size={4} textColor="tertiary">
        Solving a Right Angled Triangle
      </Heading>
      <SolvingRightAngledTriangle />
    </Slide>
    <Slide bgColor="mauve">
      <Heading size={4} className="fw8">
        SOH CAH TOA!
      </Heading>
      <Layout>
        <Fill>
          <Trigonometry />
        </Fill>
        <Fill>
          <Text>sin(θ) = O / H</Text>
          <Text>cos(θ) = A / H</Text>
          <Text>tan(θ) = O / A</Text>
          <Appear>
            <Text>θ = arcTan(O / A)</Text>
          </Appear>
        </Fill>
      </Layout>
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
    <Slide bgColor="#000">
      <Image src={images.netmag} width={946} />
      <Link
        textColor="primary"
        href="http://lab.hakim.se/404/netmag.html"
        style={{ display: 'block' }}
      >
        Netmag 404 Page by Hakim El Hattab
      </Link>
    </Slide>
    <Slide bgColor="#fff">
      <CodePen
        name="The Glossy Triangle"
        user="winkerVSbecks"
        id="uAIaq"
        bgColor="#fff"
        height={600}
      />
    </Slide>
    <Slide bgColor="#fff">
      <CodePen
        name="The Glossy Triangle Debug"
        user="winkerVSbecks"
        id="QvELaB"
        bgColor="#fff"
        height={600}
      />
    </Slide>
    <Slide bgColor="#fee1e1">
      <CodePen
        name="Meta Balls Debugging"
        author={
          <a
            style={{ color: '#000' }}
            href="http://paperjs.org/examples/meta-balls"
          >
            Paper.js
          </a>
        }
        user="winkerVSbecks"
        id="Qvyppq"
        bgColor="#fee1e1"
        height={600}
      />
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
  </SlideSet>
);
