import React from 'react';
import PropTypes from 'prop-types';

export const Embed = ({ url, fallback, bgColor = '#000' }) => (
  <iframe
    title="embedded example"
    className="w-100 vh-75 bn bn"
    style={{ backgroundColor: bgColor }}
    scrolling="no"
    src={url}
    frameBorder="no"
  >
    <img alt="fallback" src={fallback} className="w-100" />
  </iframe>
);

Embed.propTypes = {
  url: PropTypes.string,
  fallback: PropTypes.string,
  bgColor: PropTypes.string,
};
