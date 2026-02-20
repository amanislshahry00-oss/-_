const hour = new Date().getHours();
const body = document.body;
const bigBody = document.getElementById("bigBody");
const modeTitle = document.getElementById("modeTitle");

if (hour >= 5 && hour < 17) {
    body.classList.add("day");
    bigBody.style.background = "orange";
    modeTitle.innerText = "الوضع النهاري";

    document.getElementById("one").innerText = "أذكار الصباح";
    document.getElementById("two").innerText = "الضحى";
    document.getElementById("three").innerText = "الاستيقاظ";

} else {
    body.classList.add("night");
    bigBody.style.background = "#ccc";
    modeTitle.innerText = "الوضع الليلي";

    document.getElementById("one").innerText = "أذكار المساء";
    document.getElementById("two").innerText = "قيام الليل";
    document.getElementById("three").innerText = "قبل النوم";
}

function openSection(id) {

    let key;

    if (body.classList.contains("day")) {
        key = id === "one" ? "morning" :
              id === "two" ? "duha" : "wake";
    } else {
        key = id === "one" ? "evening" :
              id === "two" ? "night" : "sleep";
    }

    document.getElementById("mainScreen").classList.add("hidden");
    document.getElementById("azkarScreen").classList.remove("hidden");

    const container = document.getElementById("azkarContainer");
    container.innerHTML = "";

    azkarData[key].forEach(item => {

        let count = 0;

        const div = document.createElement("div");
        const btn = document.createElement("button");

        div.innerText = item.text;
        btn.innerText = `0 / ${item.count}`;

        btn.onclick = () => {
            count++;
            btn.innerText = `${count} / ${item.count}`;

            if (count === item.count) {
                btn.disabled = true;
            }
        };

        container.appendChild(div);
        container.appendChild(btn);
    });
}

