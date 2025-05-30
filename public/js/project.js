const toggleBtn = document.querySelector('.toggle-upcoming');
const sidebar = document.querySelector('.upcoming-sidebar');
const closeBtn = document.querySelector('.close-sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});

if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    sidebar.classList.add('hidden');
  });
}

// Background canvas setup
const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();

let particles = [];

for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 1,
    speedX: (Math.random() * 0.5) - 0.25,
    speedY: (Math.random() * 0.5) - 0.25,
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#00bfff';

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

window.addEventListener('resize', () => {
  resizeCanvas();
});
