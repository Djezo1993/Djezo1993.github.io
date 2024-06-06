document.addEventListener('scroll', function() {
    const logoDefault = document.querySelector('.logo-default');
    const logoScroll = document.querySelector('.logo-scroll');

    if (window.scrollY > 50) {
        logoDefault.style.display = 'none';
        logoScroll.style.display = 'block';
    } else {
        logoDefault.style.display = 'block';
        logoScroll.style.display = 'none';
    }
});
