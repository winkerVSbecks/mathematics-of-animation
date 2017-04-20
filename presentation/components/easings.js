import React, { Component, PropTypes } from 'react';
import anime from 'animejs';

export class Easings extends Component {

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
          fill="#5a5ae6"
          d="M0,535.796875 C125.125,535.796875 268.591254,545.272645 349.050781,430.09375 C429.510308,314.914855 453.840384,158.426537 718,168.446895 L718,719.597589 L0,719.597589 L0,535.796875 Z"
        />
        <circle
          ref={(circle) => { this.circle = circle; }}
          fill="#ff485e"
          cx="0" cy="0"
          r="70"
        />
      </svg>
    );
  }
}

Easings.propTypes = {
  w: PropTypes.number,
};
