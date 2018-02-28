import React from 'react';
import { css } from 'emotion';

const textStyle = css`
  font-family: 'Roboto Mono', monospace;
  font-size: 20px;
  fill: #ff0050;
  stroke: #ff0050;
  stroke-width: 1px;
`;

const svgStyle = css`
  stroke: #c1003d;
  fill: transparent;
  stroke-width: 8px;
`;

const greyStyle = css`
  stroke: #60001e;
  fill: transparent;
  stroke-width: 3px;
`;

/**
 * https://codepen.io/HunorMarton/pen/ggQGqQ?editors=1010
 * By Hunor Marton Borbely
 */
export class Sinus extends React.Component {
  constructor() {
    super();

    this.state = {
      degree: 0,
    };
  }

  componentDidMount() {
    this.loop = setInterval(this._tick.bind(this), 30);
  }

  _tick() {
    if (this.state.degree < 360) {
      this.setState({ degree: this.state.degree + 1 });
    } else {
      this.setState({ degree: 0 });
    }
  }

  componentWillUnmount() {
    clearInterval(this.loop);
  }

  render() {
    return <SinusDraw degree={this.state.degree} />;
  }
}

const SinusDraw = ({ degree }) => (
  <div
    className="flex items-center justify-center w-100 h-100"
    style={{ backgroundColor: '#440015' }}
  >
    <svg
      width="940"
      height="240"
      className={svgStyle}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(20 20)">
        <text className={textStyle} x="0" y="100">
          sin(
        </text>

        <line
          className={greyStyle}
          x1={Math.cos(degree / 180 * Math.PI) * 100 + 100 + 110}
          y1={-Math.sin(degree / 180 * Math.PI) * 100 + 100}
          x2={degree + 460}
          y2={-Math.sin(degree / 180 * Math.PI) * 100 + 100}
        />

        <g transform="translate(110 0)">
          <line className={greyStyle} x1="100" y1="100" x2="200" y2="100" />

          <circle className={greyStyle} cx="100" cy="100" r="100" />
          <path
            d={
              'M 130 100 A 30 30 0 ' +
              (degree <= 180 ? '0' : '1') +
              ' 0' +
              (Math.cos(degree / 180 * Math.PI) * 30 + 100) +
              ' ' +
              (-Math.sin(degree / 180 * Math.PI) * 30 + 100)
            }
          />
          <line
            className={greyStyle}
            x1="100"
            y1="100"
            x2={Math.cos(degree / 180 * Math.PI) * 100 + 100}
            y2={-Math.sin(degree / 180 * Math.PI) * 100 + 100}
          />
          <text
            className={textStyle}
            x={Math.cos(degree / 180 * Math.PI) * 100 + 100 + 10}
            y={-Math.sin(degree / 180 * Math.PI) * 100 + 100}
          >
            {degree}°
          </text>
        </g>

        <text className={textStyle} x="370" y="100">
          ) =
        </text>

        <g transform="translate(460 0)">
          <line className={greyStyle} x1="0" y1="100" x2="360" y2="100" />

          <polyline
            className={greyStyle}
            points={Array.from({ length: 360 }, (value, key) => {
              return key + ' ' + (-Math.sin(key / 180 * Math.PI) * 100 + 100);
            })}
          />
          <polyline
            points={Array.from({ length: degree }, (value, key) => {
              return key + ' ' + (-Math.sin(key / 180 * Math.PI) * 100 + 100);
            })}
          />
          <text
            className={textStyle}
            x={degree + 10}
            y={-Math.sin(degree / 180 * Math.PI) * 100 + 100}
          >
            {parseFloat(Math.sin(degree / 180 * Math.PI)).toFixed(4)}
          </text>
        </g>
      </g>
    </svg>
  </div>
);
