import React from 'react';

/**
 * Original image by David Weisman
 * https://en.wikipedia.org/wiki/User:Dweisman
 * https://upload.wikimedia.org/wikipedia/commons/4/49/Triangle_with_notations_2.svg
 */
export const LawOfCosines = () => (
  <div className="mw7 center">
    <svg viewBox="0 0 200 120" fill="#fff" className="mv4 w-75">
      <g transform="translate(0 56)" id="layer1">
        <path
          d="m 135.00001,-26.000001 c -8.42111,6.54719 -19.25704,3.972525 -24.08076,-4.04787"
          id="path2295"
          fill="none"
          stroke="#FFC400"
          overflow="visible"
        />
        <path
          d="m 160.00001,49.000011 c 0,-10.000006 4,-16.000007 12,-20.000007"
          id="path2297"
          fill="none"
          stroke="#FFC400"
          overflow="visible"
        />
        <path
          d="m 28.863272,38.201966 c 2.015855,2.858477 3.200792,6.345021 3.200792,10.108545 0,0.22821 -0.0039,0.45739 -0.01268,0.68365"
          id="path2299"
          fill="none"
          stroke="#FFC400"
          overflow="visible"
        />
        <path
          d="m 14.999999,49.000001 c 56.666667,0 113.333341,0 170.000011,0 L 125,-41.000003 z"
          id="polygon2301"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          overflow="visible"
        />
        <text
          x="68"
          y="-1"
          id="text3115"
          fontSize="24"
          fontWeight="400"
          letterSpacing="0"
          wordSpacing="0"
          fill="#00E676"
          overflow="visible"
          fontFamily="Serif"
        >
          <tspan
            x="68"
            y="-1"
            id="tspan3117"
            fontSize="14"
            fontStyle="italic"
            textAnchor="middle"
          >
            b
          </tspan>
        </text>
        <text
          x="160"
          y="-1"
          id="text3115-9"
          style={{
            textAlign: 'center',
            lineHeight: '125%',
            InkscapeFontSpecification: 'Serif',
          }}
          fontSize="24"
          fontWeight="400"
          letterSpacing="0"
          wordSpacing="0"
          textAnchor="middle"
          fill="#00E676"
          overflow="visible"
          fontFamily="Serif"
        >
          <tspan
            x="160"
            y="-1"
            id="tspan3117-4"
            fontSize="14"
            fontStyle="italic"
          >
            a
          </tspan>
        </text>
        <text
          x="100"
          y="59"
          id="text3115-8"
          fontSize="24"
          fontWeight="400"
          letterSpacing="0"
          wordSpacing="0"
          fill="#00E676"
          overflow="visible"
          fontFamily="Serif"
        >
          <tspan
            x="100"
            y="59"
            id="tspan3117-8"
            fontSize="14"
            fontStyle="italic"
            textAnchor="middle"
          >
            c
          </tspan>
        </text>
        <text
          x="40"
          y="44"
          id="text3929"
          fontSize="24"
          fontWeight="400"
          letterSpacing="0"
          wordSpacing="0"
          fill="#FFEB3B"
          overflow="visible"
          fontFamily="sans-serif"
        >
          <tspan
            x="40"
            y="44"
            id="tspan3931"
            style={{ textAlign: 'center' }}
            fontSize="14"
            textAnchor="middle"
          >
            u
          </tspan>
        </text>
        <text
          x="155"
          y="39"
          id="text3929-2"
          fontSize="24"
          fontWeight="400"
          letterSpacing="0"
          wordSpacing="0"
          fill="#FFEB3B"
          overflow="visible"
          fontFamily="sans-serif"
        >
          <tspan
            x="155"
            y="39"
            id="tspan3931-4"
            style={{ textAlign: 'center' }}
            fontSize="14"
            textAnchor="middle"
          >
            v
          </tspan>
        </text>
        <text
          x="120"
          y="-11"
          id="text3929-5"
          fontSize="24"
          fontWeight="400"
          letterSpacing="0"
          wordSpacing="0"
          fill="#FFEB3B"
          overflow="visible"
          fontFamily="sans-serif"
        >
          <tspan
            x="120"
            y="-11"
            id="tspan3931-5"
            style={{ textAlign: 'center' }}
            fontSize="14"
            textAnchor="middle"
          >
            w
          </tspan>
        </text>
      </g>
    </svg>
    <p>
      <math>
        c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> - 2 a b cos(w)
      </math>
    </p>
  </div>
);
