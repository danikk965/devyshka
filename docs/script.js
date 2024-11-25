function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        themeIcon.innerText = 'рџЊ™';
    } else {
        themeIcon.innerText = 'вЂпёЏ';
    }

    themeIcon.classList.add('emoji-animate');
    setTimeout(() => {
        themeIcon.classList.remove('emoji-animate');
    }, 500);
}
