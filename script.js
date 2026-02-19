const smallMoons = document.querySelectorAll('.moon-small');
const bigMoon = document.querySelector('.moon-big');

const radiusX = 220; // عرض القوس
const radiusY = 120; // ارتفاع القوس، نصف دائرة

let angles = [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2];

function animateMoons() {
  const rect = bigMoon.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  smallMoons.forEach((moon, i) => {
    angles[i] += 0.02; // سرعة الدوران

    // حساب إحداثيات نصف دائرة مائلة
    const x = centerX + Math.cos(angles[i]) * radiusX - moon.offsetWidth / 2;
    const y = centerY - Math.sin(angles[i]) * radiusY - moon.offsetHeight / 2;

    moon.style.left = `${x}px`;
    moon.style.top = `${y}px`;

    // تغيير الظهور أمام أو خلف القمر الكبير
    if (Math.sin(angles[i]) > 0) {
      moon.style.zIndex = 2; // أمام القمر الكبير
    } else {
      moon.style.zIndex = 0; // خلف القمر الكبير
    }

    // تغيير الحجم لإحساس بالعمق
    const scale = 0.7 + 0.3 * (Math.sin(angles[i]) + 1) / 2;
    moon.style.transform = `scale(${scale})`;
  });










