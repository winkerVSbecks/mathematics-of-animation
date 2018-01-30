import React, { Component } from 'react';

require('./balls.css');

export class WavesWithOffset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCount: 0,
    };
  }

  next = () => {
    if (this.state.activeCount === 6) {
      this.setState({ activeCount: 0 });
    } else {
      this.setState({ activeCount: this.state.activeCount + 1 });
    }
  };

  render() {
    const { activeCount: c } = this.state;
    const styleTwo = c > 0 ? { opacity: 1 } : { opacity: 0 };
    const styleThree = c > 1 ? { opacity: 1 } : { opacity: 0 };
    const styleFour = c > 2 ? { opacity: 1 } : { opacity: 0 };
    const styleLayer1 = c > 3 ? { opacity: 1 } : { opacity: 0 };
    const styleLayer2 = c > 4 ? { opacity: 1 } : { opacity: 0 };
    const styleLayer3 = c > 5 ? { opacity: 1 } : { opacity: 0 };

    return (
      <div className="flex items-center mb4">
        <div
          className="pointer flex-auto"
          style={{ height: 400 }}
          onClick={this.next}
        >
          <div className="ball bounceY" />
          <div style={styleTwo} className="ball bounceY" />
          <div style={styleThree} className="ball bounceY" />
          <div style={styleFour} className="ball bounceY" />
          <div style={styleLayer1} className="ball bounceY" />
          <div style={styleLayer1} className="ball bounceY" />
          <div style={styleLayer1} className="ball bounceY" />
          <div style={styleLayer1} className="ball bounceY" />
          <div style={styleLayer1} className="ball bounceY" />
          <div style={styleLayer2} className="ball bounceY" />
          <div style={styleLayer2} className="ball bounceY" />
          <div style={styleLayer2} className="ball bounceY" />
          <div style={styleLayer2} className="ball bounceY" />
          <div style={styleLayer2} className="ball bounceY" />
          <div style={styleLayer2} className="ball bounceY" />
          <div style={styleLayer2} className="ball bounceY" />
          <div style={styleLayer2} className="ball bounceY" />
          <div style={styleLayer2} className="ball bounceY" />
          <div style={styleLayer2} className="ball bounceY" />
          <div style={styleLayer3} className="ball bounceY" />
          <div style={styleLayer3} className="ball bounceY" />
          <div style={styleLayer3} className="ball bounceY" />
          <div style={styleLayer3} className="ball bounceY" />
          <div style={styleLayer3} className="ball bounceY" />
          <div style={styleLayer3} className="ball bounceY" />
          <div style={styleLayer3} className="ball bounceY" />
          <div style={styleLayer3} className="ball bounceY" />
          <div style={styleLayer3} className="ball bounceY" />
          <div style={styleLayer3} className="ball bounceY" />
          <div style={styleLayer3} className="ball bounceY" />
        </div>
        <ul className="list pl0 tl f3">
          <li className="mb3 white code">
            let angle1 = 0;<br />angle1 += 0.1
          </li>
          <li className="mb3 white code" style={styleTwo}>
            let angle2 = 0.4;<br />angle2 += 0.1
          </li>
          <li className="mb3 white code" style={styleThree}>
            let angle3 = 0.8;<br />angle3 += 0.1
          </li>
          <li className="mb3 white code" style={styleFour}>
            ...
          </li>
        </ul>
      </div>
    );
  }
}
