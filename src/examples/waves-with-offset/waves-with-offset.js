import React, { Component } from 'react';
import { CodePane } from 'components';

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
      <div className="flex items-stretch mb4" onClick={this.next}>
        <div
          className="pointer flex-auto mr5"
          style={{ height: 400, backgroundColor: '#fff' }}
        >
          <div className="ball bounceY">0</div>
          <div style={styleTwo} className="ball bounceY">
            .2
          </div>
          <div style={styleThree} className="ball bounceY">
            .4
          </div>
          <div style={styleFour} className="ball bounceY">
            .6
          </div>
          <div style={styleLayer1} className="ball bounceY">
            .8
          </div>
          <div style={styleLayer1} className="ball bounceY">
            1
          </div>
          <div style={styleLayer1} className="ball bounceY">
            1.2
          </div>
          <div style={styleLayer1} className="ball bounceY">
            1.4
          </div>
          <div style={styleLayer1} className="ball bounceY">
            1.6
          </div>
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
        <div className="w-30">
          <CodePane
            fill
            style={{ height: '100%', background: '#2d2d2d', padding: '1rem' }}
            f={4}
            source={`let angles = [
  0,
  0.2,
  0.4,
  0.6,
  ...
];

function anLoop() {
  angles.forEach(
    a => a += 0.1
  );
}`}
          />
        </div>
      </div>
    );
  }
}

// <ul className="list pl0 tl f3">
//   <li className="mb4 black code">
//     let angle1 = 0;<br />angle1 += 0.1
//   </li>
//   <li className="mb4 black code" style={styleTwo}>
//     let angle2 = 0.4;<br />angle2 += 0.1
//   </li>
//   <li className="mb4 black code" style={styleThree}>
//     let angle3 = 0.8;<br />angle3 += 0.1
//   </li>
//   <li className="black code" style={styleFour}>
//     ...
//   </li>
// </ul>
