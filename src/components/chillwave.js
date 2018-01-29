import React from 'react';
import PropTypes from 'prop-types';

export const Chillwave = ({ clr, size = 1 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80 * size}
    height={60 * size}
    viewBox="5 0 80 60"
  >
    <path
      id="wave"
      fill="none"
      stroke={clr}
      strokeWidth="6"
      strokeLinecap="round"
      d="M 0 37.5 c 7.684299348848887 0 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15 s 7.172012725592294 15 15 15 s 7.172012725592294 -15 15 -15"
    />
  </svg>
);

Chillwave.propTypes = {
  clr: PropTypes.string,
  size: PropTypes.number,
};
