import React from 'react';
import { Appear } from 'spectacle';
import { colours as c } from 'theme';

export const Metaball = props => (
  <svg
    viewBox="350 500 400 300"
    preserveAspectRatio="xMidYMid slice"
    {...props}
  >
    <defs>
      <mask id="triangle" maskUnits="objectBoundingBox" x="0" y="0">
        <path d="M487.5,600 L577,562 L630,600 Z" fill="#fff" />
      </mask>
      <filter x="-0.125" y="0" width="1.25" height="1.1" id="solid">
        <feFlood floodColor={c.primary} />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g strokeWidth="2" fill="none" stroke="#777">
      <circle cx="487.5" cy="600" r="96" />
      <circle cx="630" cy="600" r="64" />
      <path d="M 550.0420165674227,672.8319721254356 C 576.3822584064638,650.2131717083602 584.8359534116471,650.9112015088498 606.3426708140336,659.4670562226416 A 64 64 0 1 0 606.3426708140336,540.5329437773584 C 584.8359534116471,549.0887984911502 576.3822584064638,549.7868282916398 550.0420165674227,527.1680278745644" />
    </g>
    <Appear>
      <g>
        <g stroke="#fff" fill="none" strokeWidth="2" mask="url(#triangle)">
          <circle cx="487.5" cy="600" r="24" />
          <circle cx="630" cy="600" r="24" />
        </g>
        <g strokeWidth="2">
          <line x1="630" y1="600" x2="487.5" y2="600" stroke="#fff" />
          <line x1="487.5" y1="600" x2="577" y2="562" stroke="#fff" />
          <line x1="577" y1="562" x2="630" y2="600" stroke="#fff" />
          <g fill={c.primary} stroke="#fff">
            <circle cx="487.5" cy="600" r="4" />
            <circle cx="630" cy="600" r="4" />
            <circle cx="577" cy="562" r="4" />
          </g>
        </g>
      </g>
    </Appear>
    <g fontSize="14" fontFamily="Roboto Mono" fill="#fff">
      <Appear>
        <g fill={c.darkPink} fontSize="12">
          <text x="525" y="595">
            u1
          </text>
          <text x="588" y="595">
            u2
          </text>
        </g>
      </Appear>
      <Appear>
        <g fill={c.green}>
          <text x="470" y="575">
            radius1
          </text>
          <text x="610" y="578">
            radius2
          </text>
        </g>
      </Appear>
      <Appear>
        <text
          x="560"
          y="620"
          filter="url(#solid)"
          fill={c.blue}
          textAnchor="middle"
        >
          distance (d)
        </text>
      </Appear>
      <Appear>
        <foreignObject width="355" height="50" x="370" y="720">
          <pre xmlns="http://www.w3.org/1999/xhtml" class="tl lh-title">
            {`u1 = Math.acos(
  (radius1 ** 2 + d ** 2 - radius2 ** 2) /
    (2 * radius1 * d)
);`}
          </pre>
        </foreignObject>
      </Appear>
    </g>
  </svg>
);
