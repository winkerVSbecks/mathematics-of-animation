import React, { PropTypes } from 'react';

export const Embed = ({ url, fallback }) => (
  <iframe
    className="w-100 vh-75 bn bg-black bn"
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
};
