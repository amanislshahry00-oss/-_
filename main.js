// تفاعل أزرار الأقسام
const buttons = document.querySelectorAll('.sectionBtn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.getAttribute('data-section');
       
        const adhkar = {
  morning: "أذكار الصباح: سبحان الله وبحمده، سبحان الله العظيم...",
  evening: "أذكار المساء: أعوذ بكلمات الله التامات من شر ما خلق...",
  sleep: "أذكار النوم: باسمك اللهم أحيا وأموت...",
  travel: "أذكار السفر: سبحان الذي سخر لنا هذا وما كنا له مقرنين..."
};
    });
});

