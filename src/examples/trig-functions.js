import React from 'react';
import { Appear } from 'spectacle';
import { Text, Heading } from 'components';
import { colours as c } from 'theme';

const O = () => <span style={{ color: c.green }}>o</span>;
const A = () => <span style={{ color: c.gold }}>a</span>;
const H = () => <span style={{ color: c.blue }}>h</span>;

export const TrigFunctions = () => (
  <React.Fragment>
    <Heading f={2}>Solving A Right Triangle</Heading>
    {/* Mnemonic */}
    <div className="flex items-start">
      <svg version="1" viewBox="40 0 346 294" className="db flex-auto">
        <defs>
          <pattern
            id="diagonalHatch"
            width="6"
            height="6"
            patternTransform="rotate(-45 0 0)"
            patternUnits="userSpaceOnUse"
            stroke="#fff"
          >
            <line x1="2" y1="0" x2="2" y2="10" />
          </pattern>
          <mask id="angle" maskUnits="userSpaceOnUse" x="0" y="0">
            <path
              d="M173.49454393 243.66412167 H49.10614704 L297.88294082 44.64198454 v199.02213713 H173.49454393z"
              fill="#fff"
            />
          </mask>
        </defs>
        <g stroke="#fff" strokeWidth="3">
          <path
            d="M173.49454393 243.66412167 H49.10614704 L297.88294082 44.64198454 v199.02213713 H173.49454393z"
            fill="none"
          />
          <path
            d="M297.88294082 228.73737362 h-14.92674804 v14.92674805 h14.92674804 z"
            fill="#fff"
          />
          <circle
            cx="49.10614704"
            cy="243.66412167"
            r="32"
            fill="#fff"
            mask="url(#angle)"
          />
        </g>
        <Appear>
          <g
            fontSize="36"
            fontStyle="italic"
            fontWeight="400"
            textAnchor="middle"
            overflow="visible"
            fontFamily="Serif"
          >
            <text x="175" y="272" fill={c.gold}>
              a
            </text>
            <text x="316" y="152" fill={c.green}>
              o
            </text>
            <text x="156" y="134" fill={c.blue}>
              h
            </text>
            <text x={49.10614704 + 60} y={243.66412167 - 10} fill="#fff">
              θ
            </text>
          </g>
        </Appear>
      </svg>
      <Text f={2}>
        <Appear>
          <span className="mb3">SOH-CAH-TOA!</span>
        </Appear>
        <br />
        <br />
        <Appear>
          <span>
            <span>
              sin(θ) = <O /> / <H />
            </span>
            <br />
            <span>
              cos(θ) = <A /> / <H />
            </span>
            <br />
            <span>
              tan(θ) = <O /> / <A />
            </span>
            <br />
            <br />
            <span>
              θ = arcTan(<O /> / <A />)<br />
              θ = arcCos(<A /> / <H />)<br />
              θ = arcSin(<O /> / <H />)<br />
            </span>
          </span>
        </Appear>
      </Text>
    </div>
  </React.Fragment>
);
