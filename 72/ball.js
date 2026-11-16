const canvas = document.querySelector("#theCanvas");
const context = canvas.getContext("2d");
const form = document.querySelector("#ballForm");
const radiusInput = document.querySelector("#radiusInput");
const colorInput = document.querySelector("#colorInput");


  const balls = [];

function sizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", sizeCanvas);
sizeCanvas();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const radius = Number(radiusInput.value);
  const color = colorInput.value;

  if (!Number.isFinite(radius) || radius < 1) {
    return;
  }

  balls.push({
    x: radius,
    y: radius,
    dx: 1,
    dy: 2,
    radius,
    color
  });
});

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  for (const ball of balls) {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.x <= ball.radius || ball.x >= canvas.width - ball.radius) {
      ball.dx *= -1;
    }

    if (ball.y <= ball.radius || ball.y >= canvas.height - ball.radius) {
      ball.dy *= -1;
    }

    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    context.fillStyle = ball.color;
    context.fill();
  }

  requestAnimationFrame(animate);
}

animate();