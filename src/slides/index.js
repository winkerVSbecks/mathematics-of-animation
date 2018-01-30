import React from 'react';
import { SlideSet } from 'spectacle';
import { oscillationsSlides } from './oscillations';
import { solvingTrianglesSlides } from './solving-triangles';

const slides = [...oscillationsSlides, ...solvingTrianglesSlides];

export { introSlides } from './intro';
export { coordinateGeometrySlides } from './coordinate-geometry';
export { parameterizationSlides } from './parameterization';
export { outroSlides } from './outro';
