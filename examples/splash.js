import React, { Component } from 'react';
import { TweenMax } from 'gsap';

/**
 * Crest
 */
class Crest extends Component {
  componentDidMount() {
    const { count, center, circleSize, offset, radius, delay } = this.props;
    const offsetToC = offsetTo(center);
    const theta = 2 * Math.PI / count;
    const delta = offset ? theta / 2 : 0;

    Array(count).fill().forEach((_, idx) => {
      const start = getLocation(theta, delta, idx, radius, offsetToC);
      const end = getLocation(theta, delta, idx, radius * 0.5, offsetToC);

      TweenMax.fromTo(this.refs[idx], 1, {
        attr: { r: circleSize, cx: start.x, cy: start.y },
      }, {
        attr: { r: circleSize / 8, cx: end.x, cy: end.y },
        ease: Sine.easeInOut,
        delay,
        yoyo: true,
        repeat: -1,
      });
    });
  }

  render() {
    const { count, circleSize, radius, center, offset, fill } = this.props;
    const theta = 2 * Math.PI / count;
    const delta = offset ? theta / 2 : 0;
    const nodes = Array(count).fill();

    return (
      <g>
        { getCircles(theta, delta, radius, circleSize, fill, center, nodes) }
      </g>
    );
  }
}

Crest.propTypes = {
  count: React.PropTypes.number.isRequired,
  circleSize: React.PropTypes.number.isRequired,
  center: React.PropTypes.object.isRequired,
  fill: React.PropTypes.string.isRequired,
  offset: React.PropTypes.bool.isRequired,
};

function getCircles(theta, delta, radius, circleR, fill, center, nodes) {
  const offsetToC = offsetTo(center);

  return nodes.map((_, idx) => {
    const l = getLocation(theta, delta, idx, radius, offsetToC);
    return (
      <circle key={idx}
        ref={idx}
        cx={l.x} cy={l.y}
        r={circleR}
        fill={fill}
        strokeWidth={circleR * 0.2} />
    );
  });
}

function getLocation(theta, delta, idx, r, offsetToC) {
  return polarToCartesian(delta + (theta * idx), r, offsetToC);
}

function polarToCartesian(theta, r, offsetToC) {
  const x = r * Math.cos(theta);
  const y = r * Math.sin(theta);
  return offsetToC({ x, y });
}

function offsetTo(center) {
  return function offsetToC({ x, y }) {
    return {
      x: center.x + x,
      y: center.y - y,
    };
  };
}

/**
 * Canvas
 */
class Nucleus extends Component {
  componentDidMount() {
    const { r } = this.props;

    TweenMax.fromTo(this.refs.circle, 1, {
      attr: { r: r },
    }, {
      attr: { r: r / 8 },
      ease: Sine.easeInOut,
      yoyo: true,
      repeat: -1,
    });
  }

  render() {
    const { x, y, r, fill } = this.props;

    return (
      <circle
        ref="circle"
        cx={x} cy={y}
        r={r}
        fill={fill}
      />
    );
  }
}

Nucleus.propTypes = {
  x: React.PropTypes.number.isRequired,
  y: React.PropTypes.number.isRequired,
  r: React.PropTypes.number.isRequired,
  fill: React.PropTypes.string.isRequired,
};

/**
 * Canvas
 */
function Canvas({ w, h, children, bgColor = 'transparent' }) {
  const viewBox = [0, 0, w, h].join(' ');
  const styles = {
    display: 'block',
    backgroundColor: bgColor,
    maxWidth: '400px',
    width: '100%',
    margin: '0 auto',
  };

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      style={styles}
    >
      { children }
    </svg>
  );
}

Canvas.propTypes = {
  h: React.PropTypes.number.isRequired,
  w: React.PropTypes.number.isRequired,
  children: React.PropTypes.node,
  bgColor: React.PropTypes.string,
};

/**
 * App
 */
const s = 200;
const center = { x: s / 2, y: s / 2 };
const circleColor = '#fff';
const circleSize = 3;
const amp = 12;
const crests = [
  { count: 8, offset: false },
  { count: 16, offset: false },
  { count: 16, offset: true },
  { count: 16, offset: false },
  { count: 16, offset: true },
  { count: 16, offset: false },
];

export class SplashExample extends Component {
  render() {
    return (
      <Canvas w={s} h={s}>

        <Nucleus
          x={center.x} y={center.y}
          r={circleSize}
          fill={circleColor}
        />

        {
          crests.map(({ count, offset }, idx) => (
            <Crest
              key={idx}
              count={count}
              circleSize={circleSize}
              radius={amp + (amp * idx)}
              center={center}
              offset={offset}
              delay={(0.8 * (idx + 1)) / crests.length}
              fill={circleColor}
            />
          ))
        }

      </Canvas>
    );
  }
}
