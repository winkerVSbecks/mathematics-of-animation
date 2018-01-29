import React from 'react';
import { SlideSet } from 'spectacle';
import { oscillationsSlides } from './oscillations';
import { solvingTrianglesSlides } from './solving-triangles';
import { outroSlides } from './outro';

const slides = [
  ...oscillationsSlides,
  ...solvingTrianglesSlides,
  ...outroSlides,
];

export default (
  <SlideSet hasSlideChildren>{React.Children.toArray(slides)}</SlideSet>
);

export { introSlides } from './intro';
export { coordinateGeometrySlides } from './coordinate-geometry';
export { parameterizationSlides } from './parameterization';
