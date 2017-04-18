import React, { PropTypes } from 'react';

export const CodePen = ({
  name, user, id,
  height = 400,
  bgColor = '#fff', color = '#000',
}) => (
  <div style={{ backgroundColor: bgColor }}>
    <iframe
      height={height}
      scrolling="no"
      title={name}
      src={
        `//codepen.io/${user}/embed/${id}/?height=${height}&theme-id=29124&default-tab=result&embed-version=2`
      }
      frameBorder="no"
      allowTransparency="true"
      allowFullScreen="true"
      style={{
        width: '100%',
        border: 'none',
        backgroundColor: bgColor,
      }}
    >
      See the Pen
      <a href={`http://codepen.io/${user}/pen/${id}`}>{ name }</a>
      by <a href={`http://codepen.io/${user}`}>@{user}</a>
      on <a href="http://codepen.io">CodePen</a>.
    </iframe>
    <p style={{ color }} className="f6">
      <a style={{ color }} href={`http://codepen.io/${user}/pen/${id}`}>{ name }</a> by <a style={{ color }} href={`http://codepen.io/${user}`}>@{user}</a>
    </p>
  </div>
);

CodePen.propTypes = {
  name: PropTypes.string,
  user: PropTypes.string,
  id: PropTypes.string,
  height: PropTypes.number,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};
