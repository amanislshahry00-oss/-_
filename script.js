// نجلب كل الأقمار الصغيرة
const smallMoons = document.querySelectorAll('.moon-small');
// القمر الكبير
const bigMoon = document.querySelector('.moon-big');

// نصف قطر الدائرة حول القمر الكبير
const radius = 220;

// زوايا بداية كل قمر (بدرجات)
let angles = [0, 90, 180, 270];

function animateMoons() {
  // نحسب مركز القمر الكبير
  const rect = bigMoon.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2 - 150; // فوق القمر الكبير

  smallMoons.forEach((moon, i) => {
    // حركة بطيئة جدًا
    angles[i] += 0.02; // 🌀 أقل = أبطأ

    
    const x = centerX + Math.cos(rad) * radius - moon.offsetWidth / 2;
    const y = centerY + Math.sin(rad) * radius - moon.offsetHeight / 2;

    moon.style.left = `${x}px`;
    moon.style.top = `${y}px`;
  });

  requestAnimationFrame(animateMoons);
}

// نبدأ التحريك
animateMoons();





