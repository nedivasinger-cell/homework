const picture = document.querySelector('.picture'); // or #picture if that's the actual id

let offset = { x: 0, y: 0 };
let draggee = null;

window.addEventListener('mousedown', (e) => {
  const target = e.target.closest('.picture');

  if (!target) return;

  draggee = target;
  offset = {
    x: e.clientX - draggee.offsetLeft,
    y: e.clientY - draggee.offsetTop
  };

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
});

function handleMouseMove(e) {
  if (!draggee) return;

  draggee.style.left = `${e.clientX - offset.x}px`;
  draggee.style.top = `${e.clientY - offset.y}px`;
}

function handleMouseUp() {
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('mouseup', handleMouseUp);
  draggee = null;
}