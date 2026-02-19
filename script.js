const smallMoons = document.querySelectorAll('.moon-small');
const bigMoon = document.querySelector('.moon-big');

const radius = 220;
let angles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];

function animateMoons() {
  const rect = bigMoon.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  smallMoons.forEach((moon, i) => {
    angles[i] += 0.02; // سرعة الدوران

    // حساب الإحداثيات
    const x = centerX + Math.cos(angles[i]) * radius - moon.offsetWidth / 2;
    const y = centerY + Math.sin(angles[i]) * (radius / 2) - moon.offsetHeight / 2;

    moon.style.left = `${x}px`;
    moon.style.top = `${y}px`;

    // تغيير الظهور كأن القمر يمر خلف الكبير
    if (Math.sin(angles[i]) > 0) {
      moon.style.zIndex = 1; // أمام القمر الكبير
    } else {
      moon.style.zIndex = -1; // خلف القمر الكبير
    }

    // اختيارياً: تصغير الحجم لما يكون بعيد لزيادة الإحساس بالعمق
    const scale = 0.7 + 0.3 * (Math.sin(angles[i]) + 1) / 2;
    moon.style.transform = `scale(${scale})`;
  });

  requestAnimationFrame(animateMoons);
}

animateMoons();








