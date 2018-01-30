function points(count, radius, offset = 0) {
  const angle = 360 / count;
  const vertexIndices = range(count);

  return vertexIndices.map(index => {
    return {
      theta: offset + degreesToRadians(offset + angle * index),
      r: radius,
    };
  });
}

function range(count) {
  return Array.from(Array(count).keys());
}

function degreesToRadians(angleInDegrees) {
  return Math.PI * angleInDegrees / 180;
}

function toCartesian({ r, theta }) {
  return [r * Math.cos(theta), r * Math.sin(theta)];
}

export function polygon(noOfSides, circumradius, rotation) {
  return points(noOfSides, circumradius, rotation)
    .map(toCartesian)
    .join(' ');
}
