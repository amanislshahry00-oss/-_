function openPage(type) {
    localStorage.setItem("type", type);
    window.location.href = "azkar.html";
}

const azkarData = {
    masaa: {
        title: "أذكار المساء",
        list: [
            "سبحان الله",
            "الحمدلله",
            "الله أكبر"
        ]
    },
    qiyam: {
        title: "قيام الليل",
        list: [
            "اللهم اغفر لي",
            "اللهم اهدني"
        ]
    },
    sleep: {
        title: "قبل النوم",
        list: [
            "باسمك اللهم أموت وأحيا",
            "آية الكرسي"
        ]
    }
};

if (document.getElementById("azkarContainer")) {

    const type = localStorage.getItem("type");
    const data = azkarData[type];
    if (!data) return;
    document.getElementById("pageTitle").innerText = data.title;

    const container = document.getElementById("azkarContainer");

   


data.list.forEach(zikr => {

    let count = 0;

    const box = document.createElement("div");
    box.className = "zikr-box";

    const text = document.createElement("p");
    text.innerText = zikr;

    const btn = document.createElement("button");
    btn.className = "counter-btn";
    btn.innerText = "0 / 3";

    btn.onclick = function () {
        if (count < 3) {
            count++;
            btn.innerText = count + " / 3";
        }

        if (count === 3) {
            btn.innerText = "✔";
            btn.classList.add("done");
            btn.disabled = true;

            completedCount++;

            // إذا كل الأذكار خلصت
            if (completedCount === data.list.length) {
                setTimeout(() => {
                    window.location.href = "index.html";
                }, 1000); // يرجع بعد ثانية
            }
        }
    };

    box.appendChild(text);
    box.appendChild(btn);
    container.appendChild(box);
});
}


















