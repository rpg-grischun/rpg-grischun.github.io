// import * as pz from "/assets/js/panzoom.min.js";
// console.log(panzoom);
document.addEventListener("DOMContentLoaded", (e) => {
  const world_map = document.getElementById("world_map");

  const el = Panzoom(world_map, { contain: 'outside' });

  el.pan(10, 10)
  el.zoom(2, { animate: true })

  // Panning and pinch zooming are bound automatically (unless disablePan is true).
  // There are several available methods for zooming
  // that can be bound on button clicks or mousewheel.
  world_map.parentElement.addEventListener('wheel', el.zoomWithWheel)
});