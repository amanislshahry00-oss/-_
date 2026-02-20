// الوضع صباح/ليل تلقائي
const hour = new Date().getHours();
const body = document.body;
const modeTitle = document.getElementById("modeTitle");

if (hour >= 5 && hour < 17) {
    body.classList.add("day");
    modeTitle.innerText = "رحلة أذكار الصباح";
} else {
    body.classList.add("night");
    modeTitle.innerText = "رحلة أذكار المساء";
}

// الأقمار
const moons = document.querySelectorAll(".moon");

moons.forEach((moon, index) => {
    if (localStorage.getItem("done_" + index)) {
        moon.classList.add("done");
    }
    moon.onclick = () => {
        localStorage.setItem("currentMoon", index);
        window.location.href = "azkar.html";
    };
});
