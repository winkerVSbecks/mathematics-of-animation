import React from 'react';
import { Appear } from 'spectacle';
import { colours as c } from 'theme';

export const SA15Process = props => (
  <svg viewBox="200 150 400 300" fill="#fff" {...props}>
    <defs>
      <mask id="triangle" maskUnits="userSpaceOnUse" x="0" y="0">
        <path d="M400,300 L441.6,195 V300 Z" fill="#fff" />
      </mask>
    </defs>
    <g strokeWidth="3">
      <Appear>
        <path d="M400,300 L 441.6,195" fill="none" stroke={c.green} />
      </Appear>
      <Appear>
        <path d="M442.2,300.5 h-10 v-10 h10 z" fill={c.quartenary} />
      </Appear>
      <Appear>
        <circle
          cx="400"
          cy="300"
          r="16"
          stroke={c.blue}
          fill={c.blue}
          mask="url(#triangle)"
        />
      </Appear>
    </g>
    <g stroke="#fff" fill="none" strokeWidth="1.5">
      <path d="M 441.6 405 A 113 113 0 1 1 441.6 195" />
      <path d="M 441.6 195 A 113 113 0 0 1 441.6 405" />
    </g>
    <g stroke="#fff" strokeDasharray="5, 5" strokeWidth="1" fill="none">
      <path d="M287,300 H 513" />
      <path d="M441.6,405 L441.6,195" />
    </g>
    <g strokeWidth="2" stroke="#fff" fill="#212121">
      <circle cx="441.6" cy="405" r="4" />
      <circle cx="441.6" cy="195" r="4" />
      <circle cx="400" cy="300" r="4" />
    </g>
  </svg>
);
