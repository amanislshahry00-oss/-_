// تفاعل أزرار الأقسام
const buttons = document.querySelectorAll('.sectionBtn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.getAttribute('data-section');
        alert('تم اختيار قسم: ' + section);
        // هنا يمكن إضافة فتح صفحة القسم أو تحميل الأذكار
    });
});
