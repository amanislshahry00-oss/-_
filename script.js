const smallMoons = document.querySelectorAll('.moon-small');
const bigMoon = document.querySelector('.moon-big');

const radius = 220;  // نصف قطر الدائرة
const count = smallMoons.length;

// الزوايا المبدئية موزعة بالتساوي
let angles = [];
for (let i = 0; i < count; i++) {
  angles.push((2 * Math.PI / count) * i);
}

const speed = 0.002;  // سرعة الدوران بطيئة

function animateMoons() {
  const rect = bigMoon.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  smallMoons.forEach((moon, i) => {
    angles[i] += speed;

    const x = centerX + Math.cos(angles[i]) * radius - moon.offsetWidth / 2;
    const y = centerY + Math.sin(angles[i]) * radius - moon.offsetHeight / 2;

    moon.style.left = `${x}px`;
    moon.style.top = `${y}px`;

    // تحكم بالظهور فوق أو تحت القمر الكبير
    if (Math.sin(angles[i]) > 0) {
      moon.style.zIndex = 20;  // أمام القمر الكبير
    } else {
      moon.style.zIndex = 0;   // خلف القمر الكبير
    }

    // تغيير الحجم لإحساس بالعمق
    const scale = 0.7 + 0.3 * (Math.sin(angles[i]) + 1) / 2;
    moon.style.transform = `scale(${scale})`;
  });

  requestAnimationFrame(animateMoons);
}

animateMoons();













