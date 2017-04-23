import React, { Component } from 'react';

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

const sides = vertices =>
  vertices.map(({ theta, r }) => [
    50 + (r * Math.cos(theta)),
    50 + (r * Math.sin(theta)),
  ]).join(' ');

export class PolygonParameterization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideCount: 3,
      radius: 40,
    };
  }

  update = (prop, value) => {
    this.setState({ [prop]: Number(value) });
  };

  render() {
    const { sideCount, radius } = this.state;

    return (
      <div>
        <svg viewBox="0 0 100 100" height="400" fill="none" className="mb4">
          <path d="M50,0 L50,100" stroke="#fde6e0" strokeWidth="0.5" />
          <path d="M0,50 L100,50" stroke="#fde6e0" strokeWidth="0.5" />
          <circle id="circle" cx="50" cy="50" r={radius} stroke="#89c2ef" strokeWidth="0.5" />
          <polygon
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="#f79c82"
            points={sides(polygon(sideCount, radius))}
          />
        </svg>
        <div className="code medium-gray f4 mb4">
          Angle = 360 / { sideCount } = { 360 / sideCount }°
        </div>
        <div className="flex mb4">
          <label htmlFor="sideCount" className="f5 ttu tracked b w5 tr dib mr3 medium-gray">
            Number of Sides <span className="gray">({ sideCount })</span>
          </label>
          <input
            name="sideCount" type="range" className="input-range flex-auto"
            min="3" max="16" step="1"
            value={sideCount}
            onChange={e => this.update('sideCount', e.target.value)}
          />
        </div>
        <div className="flex">
          <label htmlFor="radius" className="f5 ttu tracked b w5 tr dib mr3 medium-gray">
            Radius <span className="gray">({ radius })</span>
          </label>
          <input
            name="radius" type="range" className="input-range flex-auto"
            min="10" max="48" step="1"
            value={radius}
            onChange={e => this.update('radius', e.target.value)}
          />
        </div>
      </div>
    );
  }
}
