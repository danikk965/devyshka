function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        themeIcon.innerText = '🌙';
    } else {
        themeIcon.innerText = '☀️';
    }

    themeIcon.classList.add('emoji-animate');
    setTimeout(() => {
        themeIcon.classList.remove('emoji-animate');
    }, 500);
}
