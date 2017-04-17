function polygon(sideCount, radius) {
  const theta = 360 / sideCount;
  const vertexIndices = range(sideCount);

  return vertexIndices.map((idx) => {
    return {
      theta: degreesToRadians(theta * idx),
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
