document.addEventListener("DOMContentLoaded", (e) => {
  const world_map = document.getElementById("world_map");

  const el = Panzoom(world_map, { contain: 'outside' });

  el.pan(10, 10);
  el.zoom(2, { animate: true });

  // Panning and pinch zooming are bound automatically (unless disablePan is true).
  // There are several available methods for zooming
  // that can be bound on button clicks or mousewheel.
  world_map.parentElement.addEventListener('wheel', el.zoomWithWheel);
  world_map.parentElement.addEventListener('mousemove', () => {
    var matrix = $panzoom.panzoom("getMatrix");

    var calc_x = x * Math.round((1 / matrix[0]));
    var calc_y = y * Math.round(1 / matrix[3]);

    return {
      x: calc_x,
      y: calc_y
    };
  });

  function getCanvasCoords(x, y) {
  }
});