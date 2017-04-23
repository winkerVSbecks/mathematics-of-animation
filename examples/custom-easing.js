import React, { Component } from 'react';

let timerId;

function transform(t) {
  const g = 6;

  if (t < 0.5) {
    // eslint-disable-next-line
    return 0.5 * Math.pow(2 * t, g)
  }
  // eslint-disable-next-line
  return 1 - (0.5 * Math.pow(2 * (1 - t), g));
}

function ease(currentTime, startValue, delta, duration) {
  const t = currentTime / duration;
  return startValue + (transform(t) * delta);
}

export class CustomEasing extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0 };
  }

  componentDidMount() {
    let time = 0;
    let forward = true;

    const draw = () => {
      if (time > 2 || time < 0) { forward = !forward; }

      if (forward) {
        time += 0.015;
      } else {
        time -= 0.015;
      }

      this.setState({ x: ease(time, 32, 700, 2) });
    };

    timerId = setInterval(() => {
      requestAnimationFrame(draw);
    }, 17);
  }

  componentWillUnmount() {
    clearInterval(timerId);
  }

  render() {
    return (
      <div className="h4 flex items-center  ba b--black-80">
        <div
          style={{ transform: `translate3d(${this.state.x}px, 0, 0)`, backgroundColor: '#ff485e' }}
          className="br-100 w3 h3"
        />
      </div>
    );
  }
}
