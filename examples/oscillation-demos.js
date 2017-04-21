import React, { Component } from 'react';

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

    (function animloop() {
      requestAnimationFrame(animloop);
      draw();
    }());
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

    (function animloop() {
      requestAnimationFrame(animloop);
      draw();
    }());
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

    (function animloop() {
      requestAnimationFrame(animloop);
      draw();
    }());
  }

  render() {
    const { x, y } = this.state;
    return (
      <div className="h5 flex items-center justify-center  ba b--black-80">
        <div
          style={{ transform: `translate3d(${x}px, ${y}px, 0)`, backgroundColor: '#ff485e' }}
          className="br-100 w2 h2"
        />
      </div>
    );
  }
}
