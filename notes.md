# Mathematics of animation

## Overview

1. Coordinate systems
2. Generating and manipulating 2D shapes
3. Locating, moving and rotating objects with trigonometry
4. Using curves to generate paths, easings and springs
5. Vectors

---

## Intro

- how did they do that?!
- my journey of learning
- all the math from high-school and sophomore college is used in animation

- Many of us have gone from building websites and working with the DOM to creating graphical visualization and animations. These are two very different domains. When dealing with geometry and animations we need to learn some new programming concepts and deal with a lot of math.

- Explore a few basic mathematical concepts that you are likely to encounter when building such experiences.

- What is this, what does it let me do and how do I use it?
- Focusing on reactivity

> I decided to change all of this a year ago. I sat down and looked up all of the topics that a typical CS degree covers and then I dove in. Half way through, I decided to write a book about what I was learning.
> The Imposter’s Handbook: a compendium of my year-long quest to fill the holes in my CS knowledge.


![](https://media.giphy.com/media/3osxYbgtOZrFW2C81O/giphy.gif)
![I know some of these words](https://media.giphy.com/media/zXA5VEmXr7OUg/giphy.gif)

---

## Coordinate Geometry
> artists and designers think in terms of shape and images. Computers deal with code and numbers.

### Cartesian coordinates
- point
- line
- draw basic shapes ●▲■

#### More Complex Shapes
- To draw ⬣ and other such shapes we need angles

### Polar Coordinates
- [Radians](https://mobile.twitter.com/fermatslibrary/status/832983341859209216/photo/1)
- [polar coordinates explained](http://codepen.io/winkerVSbecks/pen/ZpGzdz)
- not at origin

#### Generating 2D shapes & Parameterization

- Points at equal intervals === shapes!
- http://winkervsbecks.github.io/gems/

```js
export default function polygon(sides, r) {
  const t = 360 / sides;
  return range(sides).map(idx => {
    return { theta: rad(t * idx), r };
  });
}
```

<!-- ```js
// this code dynamically generates a <path> element
// and assigns the string to the d attribute.
const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
// here I'm using variables in place of values to
// control the points of the curve
let d = `M${x0},${y0} c${x1},${y1} ${x2},${y2} ${x3},${y3}`;
path.setAttribute('d', d); 
``` -->

- Morphing shapes
  - [Morphing Colour Paths](http://codepen.io/chrisgannon/pen/NNGKeo)
  - [Hex-a-portal (RGB)](http://codepen.io/chrisgannon/pen/yOYMMP?editors=0010)

- http://varun.ca/truncation

#### Patterns!
- draw circles at equal intervals to get patterns
-	animate them! https://beesandbombs.tumblr.com/post/99074397309/bw-dots
- show how to draw cardioids
	+	https://ello.co/wblut/post/r3owh2ompqy3sfv52aaevq

---

## A brief intro to `sin`, `cos`, `tan`
- [Trigonometry for Animation](https://www.spu.ac.th/sdm/files/2012/07/03-Trigonometry-for-Animation.pdf)
- [Trigonometry Collection](http://codepen.io/collection/DKgrdV/)

---

### Oscillations

- Smooth Up and Down Motion
- Sine wave
  - http://codepen.io/jpolete/pen/rxNxyd?editors=0010
  - [hexagonal 3d rainbow wavy lattice](http://codepen.io/towc/pen/MaVKJa)
	- sine waves offset (multiple pendulum thing)
    - http://codepen.io/DonKarlssonSan/pen/QGzqaM
- Bees and Bombs (Dave Whyte)
  - https://dribbble.com/shots/1783699-Blocks
  - https://dribbble.com/shots/1754428-Wave
  - [Swimmer](https://cdn.dribbble.com/users/583436/screenshots/3005711/swim.gif)
    - points oscillating with a sine wave
    - add some offset
    - http://codepen.io/brainsandspace/pen/rrwPjJ
- [Sine Language](http://codepen.io/chrisgannon/pen/dOEGwv)

---

## Solving Triangles
(Generating and manipulating 2D shapes)

- [A visualisation of trigonometric functions](https://twitter.com/fermatslibrary/status/847433345256624128)
- `tan`, triangles and calculating sides
- https://p5js.org/examples/math-arctangent.html

- direction
  - pong
  - http://codepen.io/davidkpiano/pen/866627963d1ea2a5ce1b6d9db5faeaec http://winkervsbecks.github.io/a-triangle-everyday/glossy-triangle/
  - http://winkervsbecks.github.io/fermat-point/

-  pointing
	- [Vue-controlled Wall-E](http://codepen.io/sdras/pen/YZBGNp)
	- [Fraction Fingerprints](https://codepen.io/jasesmith/pen/EZWONY)
	- http://codepen.io/rachsmith/post/hack-physics-and-javascript-part-2-solving-triangles-profit
	- Follow and Reach examples from p5js

- https://p5js.org/examples/math-distance-2d.html
- http://paperjs.org/examples/meta-balls

---

## Using curves to generate paths, easings and springs
- bounce: https://inventwithpython.com/blogstatic/trig_bounce.py
- http://varun.ca/chillwave
- Bounce
- cubic bezier easing
- circle wave: https://idyll-lang.github.io/idyll-d3-component/
- randomly move stuff around (perlin)
- spring
	+ http://winkervsbecks.github.io/hookes-law
	+ Springy line with SVG

[SASS Mixin for Generating a Custom Easing Function  ](http://codepen.io/winkerVSbecks/pen/Cihkr)

http://codepen.io/rachsmith/post/animation-tip-lerp
```js
function lerp(start, end) {
  const dx = end.x - start.x;
  const dy = end.y - start.y;

  return {
    x: start.x + dx * 0.1,
    y: start.y + dy * 0.1,
  };
}
```

---

## Locating, moving and rotating objects with trigonometry

- translation: xEnd = xStart + c [addition]
- scaling: xEnd = 2 * xStart [multiplication]
- rotation: xEnd = cosθ * xStart + sinθ * xStart [trignometry]
	+ [Rocket around the moon](http://codepen.io/Yakudoo/pen/aOEeXB)

- pressed[translation]: http://codepen.io/winkerVSbecks/pen/PZEvQd
- touchID[locating]: http://codepen.io/winkerVSbecks/full/vGojNb/

difference is making a baked version vs making something that is dynamic

---

http://www.patatap.com/

point -> cartesian coords -> line
	-> angle -> radians
	-> sin, cos, tan
		-> polar coords
		-> easing
		-> lerp
		-> vectors

* go through basic math needed to make shape
		* polar coords
		* cartesian coors
		* trigonometry
		* 3d in 2d
		* handles
		* arcs
		* drawing a circle
	* path
	* Dynamically create SVG
	* make it reactive
	* xvg

---

- Vectors
- Forces
- lerp
- lighting (gems) and shadow (▲ with shadow)
- coordinate systems (shapes, splash)
- generating and manipulating 2D shapes
- curves, circle, wave (chill, mars beacon, all of the internet)
- springs and easings
- trigonometry (fermat point, glossy ▲)
- vector fields
- [Trigonometry in Animation by Emma Gunderson on Prezi](https://prezi.com/mlvioaq4jxrx/trigonometry-in-animation/)
- [Math Gifs - Album on Imgur](http://imgur.com/a/VTMUq#0)

splash is a good example of why to use polar coordinate system

---

## Summary
- find
- parameterize
- animate
- lerp transitions
