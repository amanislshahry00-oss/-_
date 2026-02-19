const moons = document.querySelectorAll(".moon.small");
const orbit = document.querySelector(".orbit");

const radius = 220; // نصف قطر القوس
const centerX = orbit.offsetWidth / 2;
const centerY = orbit.offsetHeight;

const startAngle = Math.PI;      // بداية من اليسار
const endAngle = 2 * Math.PI;    // نهاية عند اليمين

moons.forEach((moon, index) => {
  const angle = startAngle + (index / (moons.length - 1)) * (endAngle - startAngle);

  const x = centerX + radius * Math.cos(angle) - 35;
  const y = centerY + radius * Math.sin(angle) - 35;

  moon.style.left = ${x}px;
  moon.style.top = ${y}px;
});
