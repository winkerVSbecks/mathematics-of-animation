import React from 'react';
import CodeSlide from 'spectacle-code-slide';

const code = `
function polygonVertices(count, radius, rotation = 0) {
  const angle = 360 / count;
  const vertexIndices = range(count);

  return vertexIndices.map(index => {
    return {
      theta: degToRag(rotation + angle * index),
      radius: radius,
    };
  });
}

function range(count) {
  return Array.from(Array(count).keys());
}

function degToRag(angleInDegrees) {
  return Math.PI * angleInDegrees / 180;
}

function toCartesian({ radius, theta }) {
  return [
    radius * Math.cos(theta),
    radius * Math.sin(theta),
  ];
}

function polygon(noOfSides, circumradius, rotation) {
  return points(noOfSides, circumradius, rotation)
    .map(toCartesian)
    .join(' ');
}

polygonEl.setAttribute('points', polygon(5, 64));

`.trim();

export const polygonGenerator = (
  <CodeSlide
    transition={['scale']}
    lang="js"
    textSize="1.75rem"
    style={{ lineHeight: 1.5 }}
    code={code}
    ranges={[
      { loc: [0, 0], title: 'Polygon Generator' },
      { loc: [0, 1], note: 'Number of sides & radius (to control the size)' },
      { loc: [1, 2], note: 'Calculate the angle' },
      {
        loc: [2, 3],
        note: 'Generate a placeholder list for the vertices of the polygon',
      },
      { loc: [12, 15], note: '[0, 1, 2, ... count]' },
      { loc: [4, 10], note: 'Loop over this list to generate each vertex' },
      {
        loc: [5, 9],
        note: (
          <span>
            x = radius * cos(theta)<br />y = radius * sin(theta)
          </span>
        ),
      },
      // { loc: [6, 7], note: 'angle needs to be in radians' },
      // { loc: [16, 19] },
      // { loc: [0, 11] },
      // { loc: [27, 32], note: 'SVG Polygon' },
      // { loc: [28, 29], note: 'a list of polar-coordinates' },
      // { loc: [29, 30], note: 'polar ➡️ cartesian coordinates' },
      // {
      //   loc: [20, 26],
      //   note: (
      //     <span>
      //       x = radius * cos(theta)<br />y = radius * sin(theta)
      //     </span>
      //   ),
      // },
      // { loc: [30, 31], note: 'to string attribute' },
      // { loc: [33, 34], note: 'to string attribute' },
    ]}
  />
);
