// نجلب كل الأقمار الصغيرة
const smallMoons = document.querySelectorAll('.moon-small');
// نجلب القمر الكبير
const bigMoon = document.querySelector('.moon-big');

// نصف قطر حركة الأقمار حول القمر الكبير
const radius = 220;

// زوايا بداية كل قمر (بدرجات)
let angles = [0, 90, 180, 270];

function animateMoons() {
  // نحسب مركز القمر الكبير
  const rect = bigMoon.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  smallMoons.forEach((moon, i) => {
    // نزيد الزاوية ببطء
    angles[i] += 0.2; // ⬅ كلما نقصت القيمة: أبطأ الدوران

    const rad = angles[i] * (Math.PI / 180);
    const x = centerX + Math.cos(rad) * radius - moon.offsetWidth / 2;
    const y = centerY + Math.sin(rad) * radius - moon.offsetHeight / 2;

    moon.style.left = `${x}px`;
    moon.style.top = `${y}px`;
  });

  requestAnimationFrame(animateMoons);
}

// نبدأ التحريك
animateMoons();











