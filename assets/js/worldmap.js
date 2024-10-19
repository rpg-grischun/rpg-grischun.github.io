
const { panzoom } = require('https://cdn.jsdelivr.net/gh/cmorillas/panzoom/src/panzoom.js');
document.addEventListener("DOMContentLoaded", (e) => {
  panzoom('#world_map', { bound: 'none' });
});