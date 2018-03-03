export const sineSnippets = `function animationLoop() {
  theta = theta + 0.01;  // radians
  value = Math.sin(theta);
}`;

export const translationSnippets = `function animationLoop() {
  theta = theta + 0.02;
  x = xStart + 300 * Math.sin(theta);
}`;

export const scalingSnippets = `let theta = 0;
function animationLoop() {
  theta = theta + 0.02; // radians
  scale = scaleStart * Math.sin(theta);
}`;

export const rotationSnippets = `function animationLoop() {
  theta = theta - 0.02;
  x = centreX + radius * Math.cos(theta);
  y = centreY + radius * Math.sin(theta);
}`;
