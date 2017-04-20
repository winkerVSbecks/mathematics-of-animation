import React, { Component } from 'react';
import anime from 'animejs';

// <!-- var red = '#f79c82';
// var lightRed = '#fde6e0';
// var grey = '#8a90a4';
// var blue = '#89c2ef';
// var green = '#95d9ad';
// var lightGrey = '#969cae';

const rad = angle => (Math.PI * angle) / 180;

const point = (o, r, theta) =>
  [o[0] + (r * Math.cos(theta)), o[1] + (r * Math.sin(theta))];

const side = (o, r, theta1, theta2) => (
  `M${point(o, r, rad(theta1))} L ${point(o, r, rad(theta2))}`
);

const angleIndicator = (o, r, theta) => (
  `${point(o, 0, 0)} ${point(o, r, rad(theta))}`
);

export class Hexagon extends Component {
  componentDidMount() {
    anime({
      targets: [
        this.side1, this.side2, this.side3, this.side4,
        this.side5, this.side6, this.side7, this.side8,
      ],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutQuad',
      duration: 1500,
      delay: (el, i) => (i + 1) * 1500,
      loop: true,
    });

    anime({
      targets: this.line,
      points: [{
        value: angleIndicator([50, 50], 45, -45),
      }, {
        value: angleIndicator([50, 50], 45, -90),
      }, {
        value: angleIndicator([50, 50], 45, -135),
      }, {
        value: angleIndicator([50, 50], 45, -180),
      }, {
        value: angleIndicator([50, 50], 45, -225),
      }, {
        value: angleIndicator([50, 50], 45, -270),
      }, {
        value: angleIndicator([50, 50], 45, -315),
      }, {
        value: angleIndicator([50, 50], 45, -360),
      }],
      easing: 'easeInOutQuad',
      duration: 12000,
      delay: 1500,
      loop: true,
    });

    const angle = { value: 0 };

    anime({
      targets: angle,
      value: [
        { value: 45 }, { value: 90 }, { value: 135 }, { value: 180 },
        { value: 225 }, { value: 270 }, { value: 315 }, { value: 360 },
      ],
      easing: 'easeInOutQuad',
      duration: 12000,
      delay: 1500,
      loop: true,
      update: () => {
        const t = parseInt(angle.value, 10);
        this.angle.textContent = `θ = ${t}°`;
        this.coords.textContent = `(x, y) = (r * cos(${t}°), r * sin(${t}°))`;
      },
    });
  }

  render() {
    const r = 40;
    const o = [50, 50];

    return (
      <svg viewBox="0 0 100 100" height="600" fill="none">
        <path d="M50,0 L50,100" stroke="#fde6e0" strokeWidth="0.5" />
        <path d="M0,50 L100,50" stroke="#fde6e0" strokeWidth="0.5" />
        <circle id="circle" cx="50" cy="50" r={r} stroke="#89c2ef" />
        <polygon
          ref={(line) => { this.line = line; }}
          strokeWidth="0.5"
          stroke="#95d9ad"
          points={angleIndicator([50, 50], 45, 0)}
        />
        <text
          ref={(angle) => { this.angle = angle; }}
          x="55" y="58"
          fontFamily="monospace"
          fontSize="6"
          fill="#8a90a4"
        />
        <g stroke="#f79c82" strokeLinecap="round">
          <path
            ref={(side1) => { this.side1 = side1; }}
            d={side(o, r, 0, -45)}
          />
          <path
            ref={(side2) => { this.side2 = side2; }}
            d={side(o, r, -45, -90)}
          />
          <path
            ref={(side3) => { this.side3 = side3; }}
            d={side(o, r, -90, -135)}
          />
          <path
            ref={(side4) => { this.side4 = side4; }}
            d={side(o, r, -135, -180)}
          />
          <path
            ref={(side5) => { this.side5 = side5; }}
            d={side(o, r, -180, -225)}
          />
          <path
            ref={(side6) => { this.side6 = side6; }}
            d={side(o, r, -225, -270)}
          />
          <path
            ref={(side7) => { this.side7 = side7; }}
            d={side(o, r, -270, -315)}
          />
          <path
            ref={(side8) => { this.side8 = side8; }}
            d={side(o, r, -315, -360)}
          />
        </g>
        <rect x="0" y="76" fill="#fff" width="100" height="6" />
        <text
          ref={(coords) => { this.coords = coords; }}
          textAnchor="middle"
          x="50" y="80"
          fontFamily="monospace"
          fontSize="4"
          fill="#8a90a4"
        />
      </svg>
    );
  }
}
