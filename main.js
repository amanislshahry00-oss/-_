// نصوص الأذكار مفصلة (يمكن توسعتها)
const adhkar = {
  morning: `أذكار الصباح:
  - سبحان الله وبحمده سبحان الله العظيم
  - لا إله إلا الله وحده لا شريك له له الملك وله الحمد وهو على كل شيء قدير
  - ... (أذكار إضافية)`,
  
  evening: `أذكار المساء:
  - أعوذ بكلمات الله التامات من شر ما خلق
  - اللهم بك أمسينا وبك أصبحنا
  - ... (أذكار إضافية)`,
  
  sleep: `أذكار النوم:
  - باسمك اللهم أموت وأحيا
  - أعوذ بك من شر نفسي ومن شر كل دابة أنت آخذ بناصيتها
  - ... (أذكار إضافية)`,
  
  travel: `أذكار السفر:
  - سبحان الذي سخر لنا هذا وما كنا له مقرنين
  - الحمد لله الذي هدى لنا هذا وما كنا لنهتدي لولا أن هدانا الله
  - ... (أذكار إضافية)`
};

// التبديل بين الأوضاع (ليل/نهار)
const toggleThemeBtn = document.getElementById('toggleTheme');
toggleThemeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  // تغيير أيقونة الزر
  if (document.body.classList.contains('light-theme')) {
    toggleThemeBtn.textContent = '☀️';
  } else {
    toggleThemeBtn.textContent = '🌙';
  }
});

// عرض النصوص وتفعيل الأزرار
const contentDiv = document.getElementById('content');
const buttons = document.querySelectorAll('.sectionBtn');

function setActiveButton(activeBtn) {
  buttons.forEach(btn => btn.classList.remove('active'));
  activeBtn.classList.add('active');
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const section = btn.getAttribute('data-section');
    contentDiv.textContent = adhkar[section] || "لا يوجد ذكر لهذا القسم";
    setActiveButton(btn);
    contentDiv.focus();
  });
});

// عند تحميل الصفحة، عرض أذكار الصباح تلقائيًا
window.addEventListener('DOMContentLoaded', () => {
  const defaultBtn = document.querySelector('.sectionBtn[data-section="morning"]');
  if (defaultBtn) defaultBtn.click();
});
