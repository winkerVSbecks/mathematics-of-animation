import React from 'react';
import { Appear } from 'spectacle';

export const SolvingTriangles = () => (
  <svg viewBox="0 0 140 120" height="600" fill="none">
    <Appear>
      <g><rect x="77.5" y="77.5" width="10" height="10" fill="#ff485e" stroke="none" /></g>
    </Appear>
    <Appear>
      <g><path
        d="M 30 90 A 20 20 0 0 0 24.14213562373095 75.85786437626905 L 10 90 L 30 90"
        fill="#fee1e1"
      /><path
        d="M 75.85786437626905 24.14213562373095 A 20 20 0 0 0 90 30 L 90 10 L 75.85786437626905 24.14213562373095"
        fill="#fee1e1"
      /></g>
    </Appear>
    <path d="M10,90 L90,90 L90,10 Z" stroke="#5a5ae6" strokeWidth="5" />
    <Appear>
      <g><text x="100" y="55" fontSize="12" fill="#2e2f30" textAnchor="middle" fontWeight="600">O</text></g>
    </Appear>
    <Appear>
      <g><text x="50" y="105" fontSize="12" fill="#2e2f30" textAnchor="middle" fontWeight="600">A</text></g>
    </Appear>
    <Appear>
      <g><text x="40" y="45" fontSize="12" fill="#2e2f30" textAnchor="middle" fontWeight="600">H</text></g>
    </Appear>
  </svg>
);
