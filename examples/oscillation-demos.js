import React, { Component } from 'react';

let timerSine;
let timerTranslation;
let timerScaling;
let timerRotation;

export class Sine extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0 };
  }

  componentDidMount() {
    let theta = 0;
    const draw = () => {
      theta += 0.01;
      this.setState({ x: Math.sin(theta) });
    };

    timerSine = setInterval(() => {
      requestAnimationFrame(draw);
    }, 17);
  }

  componentWillUnmount() {
    clearInterval(timerSine);
  }

  render() {
    return (
      <div className="h4 flex items-center justify-center  ba b--black-80 code ttu tracked f1">
        { this.state.x.toFixed(2) }
      </div>
    );
  }
}

// eslint-disable-next-line
export class Translation extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0 };
  }

  componentDidMount() {
    let theta = 0;
    const draw = () => {
      theta += 0.01;
      this.setState({ x: Math.sin(theta) * 300 });
    };

    timerTranslation = setInterval(() => {
      requestAnimationFrame(draw);
    }, 17);
  }

  componentWillUnmount() {
    clearInterval(timerTranslation);
  }

  render() {
    return (
      <div className="h4 flex items-center justify-center  ba b--black-80">
        <div
          style={{ transform: `translate3d(${this.state.x}px, 0, 0)`, backgroundColor: '#ff485e' }}
          className="br-100 w3 h3"
        />
      </div>
    );
  }
}

// eslint-disable-next-line
export class Scaling extends Component {
  constructor(props) {
    super(props);
    this.state = { scale: 0 };
  }

  componentDidMount() {
    let theta = 0;
    const draw = () => {
      theta += 0.01;
      this.setState({ scale: Math.sin(theta) * 1 });
    };

    timerScaling = setInterval(() => {
      requestAnimationFrame(draw);
    }, 17);
  }

  componentWillUnmount() {
    clearInterval(timerScaling);
  }

  render() {
    const { scale } = this.state;

    return (
      <div className="h4 flex items-center justify-center  ba b--black-80">
        <div
          style={{ transform: `scale(${scale}, ${scale})`, backgroundColor: '#ff485e' }}
          className="br-100 w3 h3"
        />
      </div>
    );
  }
}

// eslint-disable-next-line
export class Rotation extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }

  componentDidMount() {
    let theta = 0;
    const draw = () => {
      theta += 0.02;
      this.setState({
        x: 100 * Math.cos(theta),
        y: 100 * Math.sin(theta),
      });
    };

    timerRotation = setInterval(() => {
      requestAnimationFrame(draw);
    }, 17);
  }

  componentWillUnmount() {
    clearInterval(timerRotation);
  }

  render() {
    const { x, y } = this.state;
    return (
      <div className="h5 flex items-center justify-center  ba b--black-80">
        <div
          style={{
            transformOrigin: 'center center',
            transform: `translate3d(${x}px, ${y}px, 0)`,
            backgroundColor: '#ff485e',
          }}
          className="br-100 w2 h2"
        />
        <div className="w1 h1 br-100 bg-black absolute" />
      </div>
    );
  }
}
