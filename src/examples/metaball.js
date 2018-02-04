import React from 'react';
import { colours as c } from 'theme';

export const Metaball = props => (
  <svg
    viewBox="350 425 400 400"
    preserveAspectRatio="xMidYMid slice"
    {...props}
  >
    <defs>
      <mask id="triangle" maskUnits="objectBoundingBox" x="0" y="0">
        <path d="M487.5,600 L577,562 L630,600 Z" fill="#fff" />
      </mask>
    </defs>
    <g stroke="#fff" fill="none" strokeWidth="2" mask="url(#triangle)">
      <circle cx="487.5" cy="600" r="24" />
      <circle cx="630" cy="600" r="24" />
    </g>
    <g strokeWidth="2" fill="none" stroke="#aaa">
      <circle cx="487.5" cy="600" r="96" />
      <circle cx="630" cy="600" r="64" />
    </g>
    <g strokeWidth="2">
      <line x1="630" y1="600" x2="487.5" y2="600" stroke={c.blue} />
      <line x1="487.5" y1="600" x2="577" y2="562" stroke={c.green} />
      <line x1="577" y1="562" x2="630" y2="600" stroke={c.green} />
      <g fill={c.primary} stroke="#fff">
        <circle cx="487.5" cy="600" r="4" />
        <circle cx="630" cy="600" r="4" />
        <circle cx="577" cy="562" r="4" />
      </g>
    </g>
    <g fontSize="20" fontFamily="Roboto Mono" fill="#fff">
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
