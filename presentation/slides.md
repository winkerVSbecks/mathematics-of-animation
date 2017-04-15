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

---

## how I felt about reading tutorials

![I know some of these words](https://media.giphy.com/media/3osxYbgtOZrFW2C81O/giphy.gif)
![I know some of these words](https://media.giphy.com/media/zXA5VEmXr7OUg/giphy.gif)

---

## I intend to share a few techniques I use a lot and mostly demystify trigonometry

- Explore a few basic mathematical concepts that you are likely to encounter when building such experiences.

- What is this, what does it let me do and how do I use it?
- Focusing on reactivity

> I decided to change all of this a year ago. I sat down and looked up all of the topics that a typical CS degree covers and then I dove in. Half way through, I decided to write a book about what I was learning.
> The Imposter’s Handbook: a compendium of my year-long quest to fill the holes in my CS knowledge.

---

## Coordinate Geometry
> Designers and illustrators think in terms of shape and images. Computers deal with code and numbers. So, to render those designs we need to convert those shapes into numbers and code.

---

### Cartesian coordinates
- point
- line
- draw basic shapes ●▲■

---

#### More Complex Shapes
- To draw ⬣ and other such shapes we need angles

---

### Polar Coordinates
- [Radians](https://mobile.twitter.com/fermatslibrary/status/832983341859209216/photo/1)
- [polar coordinates explained](http://codepen.io/winkerVSbecks/pen/ZpGzdz)
- not at origin

---

#### Generating 2D shapes & Parameterization

- Points at equal intervals === shapes!
- http://winkervsbecks.github.io/gems/

---

```js
function polygon(sides, r) {
  const t = 360 / sides;
  return range(sides).map(idx => {
    return { theta: rad(t * idx), r };
  });
}
```

---

```js
const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
let d = `M${x0},${y0} c${x1},${y1} ${x2},${y2} ${x3},${y3}`;
```

---

- Morphing shapes
  - [Morphing Colour Paths](http://codepen.io/chrisgannon/pen/NNGKeo)
  - [Hex-a-portal (RGB)](http://codepen.io/chrisgannon/pen/yOYMMP?editors=0010)

- http://varun.ca/truncation

---

#### Patterns!
- draw circles at equal intervals to get patterns
-	animate them! https://beesandbombs.tumblr.com/post/99074397309/bw-dots
- show how to draw cardioids
	+	https://ello.co/wblut/post/r3owh2ompqy3sfv52aaevq
