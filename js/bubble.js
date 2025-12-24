const container = document.getElementById("bubble-layer");
const bubbles = document.querySelectorAll(".bubble");

const bounds = () => container.getBoundingClientRect();

bubbles.forEach((bubble) => {
  let x = Math.random() * bounds().width;
  let y = Math.random() * bounds().height;

  // random base speed (slow → fast)
  let speed = Math.random() * 0.6 + 0.2; // 0.2 – 0.8

  let vx = (Math.random() - 0.5) * speed;
  let vy = (Math.random() - 0.5) * speed;

  const size = bubble.offsetWidth;

  function move() {
    // slight random drift (organic motion)
    vx += (Math.random() - 0.5) * 0.02;
    vy += (Math.random() - 0.5) * 0.02;

    x += vx;
    y += vy;

    // limit speed (prevent chaos)
    vx = Math.max(Math.min(vx, 1.2), -1.2);
    vy = Math.max(Math.min(vy, 1.2), -1.2);

    // soft boundary bounce
    if (x < 0 || x > bounds().width - size) vx *= -1;
    if (y < 0 || y > bounds().height - size) vy *= -1;

    bubble.style.transform = `translate(${x}px, ${y}px)`;
    requestAnimationFrame(move);
  }

  move();
});
