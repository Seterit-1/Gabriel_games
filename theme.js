/* ═══════════════════════════════════════
   ULTRAKILL SITE — УПРАВЛЕНИЕ ТЕМОЙ
   Подключается во всех страницах
═══════════════════════════════════════ */

/* Метки тем для отображения */
var THEME_LABELS = {
    dark:    'DARK // ORIGINAL',
    v1:      'V1 // MACHINE // BLUE',
    v2:      'V2 // MIRROR // RED',
    gabriel: 'GABRIEL // JUDGE // GOLD'
};

/* Применить тему */
function setTheme(t) {
    document.body.setAttribute('data-theme', t);

    /* Обновить активную кнопку в панели тем (если есть) */
    document.querySelectorAll('.tp-btn').forEach(function(btn) {
        btn.classList.toggle('active', btn.dataset.tv === t);
    });

    /* Обновить метку текущей темы (если есть) */
    var lbl = document.getElementById('tpCurrent');
    if (lbl) lbl.textContent = 'АКТИВНА: ' + (THEME_LABELS[t] || t.toUpperCase());

    /* Сохранить в localStorage */
    try { localStorage.setItem('uk_theme', t); } catch(e) {}
}

/* Загрузить тему при старте страницы */
(function() {
    try {
        var saved = localStorage.getItem('uk_theme');
        if (saved && THEME_LABELS[saved]) {
            setTheme(saved);
        }
    } catch(e) {}
})();
