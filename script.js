const hour = new Date().getHours();
const sky = document.querySelector(".sky");

if (hour >= 5 && hour < 17) {
  sky.classList.add("day");
} else {
  sky.classList.add("night");
}

function openCategory(name) {
  alert("فتحت قسم: " + name);
}
