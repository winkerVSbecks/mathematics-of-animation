import React, { Component } from 'react';

function ease(currentTime, startValue, delta, duration) {
  const t = currentTime / duration;
  const step = Math.sin(-13.0 * (t + 1.0) * (Math.PI / 2)) * (2.0 ** (-10.0 * t));

  return startValue + (delta * (1 + step));

  /**
   * The more verbose and configurable
   * version of elastic easing
   */
  // let s = 1.70158;
  // let p = 0;
  // let a = c;
  //
  // if (t === 0) { return b; }
  // if ((t /= d) === 1) { return b + c; }
  //
  // if (!p) p = d * 0.3;
  //
  // if (a < Math.abs(c)) {
  //   a = c; s = p / 4;
  // } else {
  //   s = p / ((2 * Math.PI) * Math.asin(c / a));
  // }
  //
  // // eslint-disable-next-line
  // return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p ) + c + b;
}

export class Bounce extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0 };
  }

  componentDidMount() {
    let time = 0;

    const draw = () => {
      if (time > 1) {
        time = 0;
      } else {
        time += 0.01;
      }

      this.setState({ x: ease(time, 32, 500, 1) });
    };

    (function animloop() {
      requestAnimationFrame(animloop);
      draw();
    }());
  }

  render() {
    return (
      <div className="h4 flex items-center ba b--black-80">
        <div
          style={{ transform: `translate3d(${this.state.x}px, 0, 0)`, backgroundColor: '#ff485e' }}
          className="br-100 w3 h3"
        />
      </div>
    );
  }
}
