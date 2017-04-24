function polygon(sideCount, radius) {
  const theta = 360 / sideCount;
  const vertexIndices = range(sideCount);

  return vertexIndices.map((index) => {
    return {
      theta: degreesToRadians(theta * index),
      r: radius,
    };
  });
}

function range(count) {
  return Array.from(Array(count).keys());
}

function degreesToRadians(angleInDegrees) {
  return (Math.PI * angleInDegrees) / 180;
}
