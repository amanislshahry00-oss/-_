const smallMoons = document.querySelectorAll('.moon-small');
const bigMoon = document.querySelector('.moon-big');

const radius = 220;

// زاوية البداية لكل قمر (بالراديان)
let angles = [Math.PI * 0.2, Math.PI * 0.4, Math.PI * 0.6, Math.PI * 0.8];

// حدود القوس (من 30° إلى 150°)
const minAngle = Math.PI * 0.2; 
const maxAngle = Math.PI * 0.8;

// اتجاه الحركة (رايح أو جاي)
let directions = [1, 1, 1, 1];

function animateMoons() {
  const rect = bigMoon.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2 - 150;

  smallMoons.forEach((moon, i) => {

    // نحرك الزاوية
    angles[i] += 0.01 * directions[i];

    // إذا وصل لنهاية القوس يعكس الاتجاه
    if (angles[i] >= maxAngle || angles[i] <= minAngle) {
      directions[i] *= -1;
    }

    const x = centerX + Math.cos(angles[i]) * radius - moon.offsetWidth / 2;
    const y = centerY + Math.sin(angles[i]) * radius - moon.offsetHeight / 2;

    moon.style.left = `${x}px`;
    moon.style.top = `${y}px`;
  });

  requestAnimationFrame(animateMoons);
}

animateMoons();







