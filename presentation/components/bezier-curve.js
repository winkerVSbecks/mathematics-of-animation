import React, { Component, PropTypes } from 'react';
import anime from 'animejs';

export class BezierCurve extends Component {

  componentDidMount() {
    const path = anime.path(this.motionPath);
    anime({
      targets: [this.glow, this.circle],
      translateX: path('x'),
      translateY: path('y'),
      easing: 'easeInOutCubic',
      direction: 'alternate',
      duration: 2000,
      loop: true,
    });
  }

  render() {
    const { w } = this.props;

    return (
      <svg
        width={w}
        viewBox="0 0 718 720"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={(motionPath) => { this.motionPath = motionPath; }}
          fill="none"
          d="M0,535.796875 C125.125,535.796875 268.591254,545.272645 349.050781,430.09375 C429.510308,314.914855 453.840384,158.426537 718,168.446895"
        />
        <rect fill="#c3bbff" x="0" y="0" width="718" height="720" />
        <circle
          ref={(glow) => { this.glow = glow; }}
          fill="rgba(255, 72, 94, 0.5)"
          cx="0" cy="0"
          r="140"
        />
        <path
          id="path"
          fill="none"
          strokeWidth="20"
          stroke="#5a5ae6"
          d="M0,535.796875 C125.125,535.796875 268.591254,545.272645 349.050781,430.09375 C429.510308,314.914855 453.840384,158.426537 718,168.446895"
        />
        <g x="0" y="0" ref={(circle) => { this.circle = circle; }}>
          <circle
            fill="#ff485e"
            cx="0" cy="0"
            r="70"
          />
          <text x="0" y="0" fontWeight="600" fontSize="20" textAnchor="middle" fill="#fff">
            <tspan x="0" y="-15">Current</tspan>
            <tspan x="0" y="15">Value</tspan>
          </text>
        </g>
        <text x="10" y="590" fontWeight="600" fill="#2e2f30">
          Start Value
        </text>
        <text x="708" y="120" fontWeight="600" fill="#2e2f30" textAnchor="end">
          End Value
        </text>
      </svg>
    );
  }
}

BezierCurve.propTypes = {
  w: PropTypes.number,
};
