const azkarList = [
    { text: "سبحان الله", count: 3 },
    { text: "الحمد لله", count: 3 },
    { text: "الله أكبر", count: 3 },
    { text: "لا إله إلا الله", count: 3 },
    { text: "أستغفر الله", count: 3 },
    { text: "اللهم صل على محمد", count: 3 },
    { text: "حسبي الله", count: 3 },
    { text: "اللهم اغفر لي", count: 3 }
];

const index = localStorage.getItem("currentMoon");
const zekr = azkarList[index];

const textDiv = document.getElementById("zekrText");
const btn = document.getElementById("counterBtn");

let count = 0;
textDiv.innerText = zekr.text;
btn.innerText = `0 / ${zekr.count}`;

btn.onclick = () => {
    count++;
    btn.innerText = `${count} / ${zekr.count}`;
    if (count === zekr.count) {
        localStorage.setItem("done_" + index, true);
        setTimeout(() => {
            window.location.href = "index.html";
        }, 800);
    }
};

