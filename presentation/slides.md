## Overview

1. Coordinate systems ✅
2. Generating 2D shapes & Parameterization ✅
  + gems ✅
  + chillwave generator 🚫
  + Hex-a-Portal
  + splash ✅
3. Oscillations: moving with trigonometry ✅
  + swimmer
4. Solving triangles
  + meta balls
5. Using curves to generate paths, easings and springs
  + Bounce
  + spring
  + lerp

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

- dynamic and reactive
- difference is making a baked version vs making something that is dynamic


- Explore a few basic mathematical concepts that you are likely to encounter when building such experiences.

- What is this, what does it let me do and how do I use it?
- Focusing on reactivity

> I decided to change all of this a year ago. I sat down and looked up all of the topics that a typical CS degree covers and then I dove in. Half way through, I decided to write a book about what I was learning.
> The Imposter’s Handbook: a compendium of my year-long quest to fill the holes in my CS knowledge.

---

## Reactive Animation

Events ➡️ Discrete Changes

> A "reactive animation" is one involving discrete changes, due to events.
> By allowing programmers to express the "what" of an interactive animation, one can hope to then automate the "how" of its presentation.
> - Conal Elliot and Paul Hudak, 1997

> Discrete changes caused by any number of events

> You capture events – from a user or other parts of your site - into a single stream, and then use it to drive animations.

> Why?
> They allow you to make fun little interactions but, also use it in day to day work for creating UI animations.

> variations on the fly

---

## Coordinate Geometry
> Designers and illustrators think in terms of shape and images. Computers deal with code and numbers. So, to render those designs we need to convert those shapes into numbers and code.

---

### Cartesian coordinates
- point
- line
- draw basic shapes ◆▲■⏢

---

#### More Complex Shapes
- To draw ⬣ and other such shapes we need angles
![](images.gems)

^ You can make them in illustrator or sketch but, to generate them on the fly. But, to generate them on the fly we need to...

---

### Polar Coordinates

![insert polar coords drawing here]()

- [polar coordinates explained](http://codepen.io/winkerVSbecks/pen/ZpGzdz)

```js
x = r * cos(theta);
y = r * sin(theta);
```

---

### Polar Coordinates – moving away from the origin

- not at origin

```js
x = u + r * cos(theta);
y = v + r * sin(theta);
```

---

#### Generating 2D shapes

![insert drawing of hexagon with polar coords here]()

- Points at equal intervals === shapes!
- http://winkervsbecks.github.io/gems/

---

### Polygon Generator

```js
function polygon(sides, radius) {
  const theta = 360 / sides;

  return range(sides).map((idx) => {
    return {
      theta: degreesToRadians(theta * idx),
      r: radius,
    };
  });
}
```

---

## Parameterization
knobs and levers that control your visuals
![react-tetrahedrons](http://winkervsbecks.github.io/react-tetrahedrons)

We've reduced polygon to `sides` & `r`. You can change the values for them to do generate different kinds of polygons.

> try and find a pattern (that's the fun part). Then parameterize that pattern.

---

![insert a drawing that explain parameterization of the gems (shape, face and top)]()

---

## Hex-a-portal (RGB)

[Hex-a-portal (RGB)](http://codepen.io/chrisgannon/pen/yOYMMP)

> I love this piece by Chris Gannon
> let's Parameterize this.
- [Morphing Colour Paths](http://codepen.io/chrisgannon/pen/NNGKeo)
- http://varun.ca/truncation

---

## chillwave generator
> wavy lines are very much in fashion right now

---

## BTW Radians
[Radians](https://mobile.twitter.com/fermatslibrary/status/832983341859209216/photo/1)

```js
function rad(angle) {
  return Math.PI * angle / 180;
}
```

---

#### Patterns!
Use polar coords to generate patterns

- draw circles at equal intervals to get a pattern
-	animate them! https://68.media.tumblr.com/d93e9aaf62d79585b1420e670f438f98/tumblr_ncvwb6PBEG1r2geqjo1_500.gif
- show how to draw cardioids
	+	https://ello.co/wblut/post/r3owh2ompqy3sfv52aaevq

---

# Speaking of Animation… Let's move stuff

---

### Oscillations
- Smooth Up and Down Motion

---

## Sine wave
- [Trigonometry for Animation](https://www.spu.ac.th/sdm/files/2012/07/03-Trigonometry-for-Animation.pdf)
- [Trigonometry Collection](http://codepen.io/collection/DKgrdV/)

^ ok so… boring. This is the first thing everyone learns. Next!

^ the great thing is that you don't need to stop at 360. You can keep going and the sine wave will keep oscillating. The humblest of curves.

---

## Animating with sine wave

- [hexagonal 3d rainbow wavy lattice](http://codepen.io/towc/pen/MaVKJa)
- http://codepen.io/chrisgannon/pen/dOEGwv

---

## Dave Whyte (Bees and Bombs)

- https://68.media.tumblr.com/466561512d5b0a475c055080e8c836bd/tumblr_namn1sbIlV1r2geqjo1_500.gif
- https://68.media.tumblr.com/a2bf33f31a8373a4607058af1162848f/tumblr_neh3v3ShSV1r2geqjo1_500.gif
- https://68.media.tumblr.com/87ecefd1f57b9ef310176c74e6700f42/tumblr_nd3h9q33FH1r2geqjo1_500.gif
- https://beesandbombs.tumblr.com/image/101168751194
- https://beesandbombs.tumblr.com/image/133435807034
- https://beesandbombs.tumblr.com/image/113298696014
- https://beesandbombs.tumblr.com/image/110813152664

---

## many sine waves with slight offsets
- sine waves offset (multiple pendulum thing)
- http://codepen.io/jpolete/pen/rxNxyd?editors=0010
- [offsets](http://codepen.io/DonKarlssonSan/pen/QGzqaM)
- Bees and Bombs (Dave Whyte)
- https://dribbble.com/shots/1783699-Blocks
- https://dribbble.com/shots/1754428-Wave

---

## Swimmer

Parameterization 🤝🏽 Oscillation
👨‍❤️‍👨 💞

https://gist.github.com/anonymous/952fa668b21370709314cb6acb8f44c3

---
