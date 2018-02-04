import React from 'react';

export const Metaball = props => (
  <svg
    viewBox="350 425 400 400"
    preserveaspectratio="xMidYMid slice"
    {...props}
  >
    <g strokeWidth="4" fill="none" stroke="#aaa">
      <circle id="js-circle1" cx="487.5" cy="600" r="96" />
      <circle id="js-circle2" cx="630" cy="600" r="64" />
    </g>
    <g id="js-debug" strokeWidth="4">
      <g stroke="#A463F2">
        <line x1="630" y1="600" x2="487.5" y2="600" />
        <line x1="487.5" y1="600" x2="577" y2="562" />
        <line x1="577" y1="562" x2="630" y2="600" />
      </g>
      <g fill="#fff" stroke="#FF41B4">
        <circle cx="487.5" cy="600" r="4" />
        <circle cx="630" cy="600" r="4" />
        <circle cx="577" cy="562" r="4" />
      </g>
    </g>
    <g fontSize="20">
      <text x="450" y="575">
        radius1
      </text>
      <text x="575" y="620">
        d
      </text>
      <text x="625" y="575">
        radius2
      </text>
      <text x="525" y="595" fontSize="15">
        u1
      </text>
      <text x="590" y="595" fontSize="15">
        u2
      </text>
    </g>
  </svg>
);
