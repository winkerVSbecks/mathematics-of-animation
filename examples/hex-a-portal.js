import React, { Component } from 'react';
import { TweenMax, TimelineMax, Linear } from 'gsap';

const degreesToRadians = angle => (Math.PI * angle) / 180;

const range = count => Array.from(Array(count).keys());

function polygon(sideCount, radius) {
  const theta = 360 / sideCount;
  const vertexIndices = range(sideCount);

  return vertexIndices.map(idx => ({
    theta: degreesToRadians(theta * idx),
    r: radius,
  }));
}

const pathDef = vertices =>
  `M${vertices.map(({ theta, r }) => [
    300 + (r * Math.cos(theta)),
    300 + (r * Math.sin(theta)),
  ]).join('L')}Z`;

export class HexAPortal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideCount: 6,
      radius: 140,
    };
  }

  componentDidMount() {
    const ease = Linear.easeNone;
    const tl = new TimelineMax({
      repeat: -1,
      onUpdate: () => {
        TweenMax.to([
          this.chaser1,
          this.chaser2,
          this.chaser3,
          this.chaser4,
          this.chaser5,
        ], 1, {
          strokeDashoffset: '-=450',
        });
      },
    });

    tl.to(this.canvas, 2, {
      rotation: -360,
      transformOrigin: '50% 50%',
      ease,
    });

    tl.timeScale(1);
  }

  update = (prop, value) => {
    this.setState({ [prop]: Number(value) });
  };

  render() {
    const { sideCount, radius } = this.state;

    return (
      <div>
        <svg
          ref={(canvas) => { this.canvas = canvas; }}
          viewBox="0 0 600 600" height="400" fill="none" className="mb4"
        >
          <defs>
            <filter id="glow" y="-50%" height="200%">
              <feGaussianBlur stdDeviation="12 1" result="coloredBlur" />
              <feGaussianBlur stdDeviation="12 1" result="coloredBlur" />
              <feGaussianBlur stdDeviation="12 1" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <path
              id="hexPath"
              d={pathDef(polygon(sideCount, radius))}
              fill="none"
              strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
              strokeMiterlimit="10" strokeDasharray="112"
            />
          </defs>
          <g filter="url(#glow)" >
            <use
              xlinkHref="#hexPath"
              ref={(p) => { this.chaser1 = p; }}
              stroke="#FFFFFF" strokeDashoffset="10100"
            />
            <use
              xlinkHref="#hexPath"
              ref={(p) => { this.chaser2 = p; }}
              stroke="#0000FF" strokeDashoffset="10060"
            />
            <use
              xlinkHref="#hexPath"
              ref={(p) => { this.chaser3 = p; }}
              stroke="#00FF00" strokeDashoffset="10040"
            />
            <use
              xlinkHref="#hexPath"
              ref={(p) => { this.chaser4 = p; }}
              stroke="#FF0000" strokeDashoffset="10020"
            />
            <use
              xlinkHref="#hexPath"
              ref={(p) => { this.chaser5 = p; }}
              stroke="#1d1d1d" strokeDashoffset="10000"
            />
          </g>
        </svg>
        <div className="flex mb4">
          <label htmlFor="sideCount" className="f5 ttu tracked b w5 tr dib mr3 white">
            Number of Sides <span className="gray">({ sideCount })</span>
          </label>
          <input
            name="sideCount" type="range" className="input-range-rv flex-auto white"
            min="3" max="16" step="1"
            value={sideCount}
            onChange={e => this.update('sideCount', e.target.value)}
          />
        </div>
        <div className="flex mb4">
          <label htmlFor="radius" className="f5 ttu tracked b w5 tr dib mr3 white">
            Radius <span className="gray">({ radius })</span>
          </label>
          <input
            name="radius" type="range" className="input-range-rv flex-auto white"
            min="100" max="300" step="1"
            value={radius}
            onChange={e => this.update('radius', e.target.value)}
          />
        </div>
        <div className="white f5">
          Based on <a className="white" href="http://codepen.io/chrisgannon/pen/yOYMMP">Hex-a-portal (RGB)</a> by <a className="white" href="https://gannon.tv/">Chris Gannon</a>
        </div>
      </div>
    );
  }
}
