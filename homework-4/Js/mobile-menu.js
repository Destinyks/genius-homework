document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-btn-open');
    const menuClose = document.querySelector('.menu-btn-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu__nav a');

    menuToggle.addEventListener('click', function() {
        mobileMenu.classList.add('is-open');
    });

    menuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('is-open');
    });

    // Закрытие меню при нажатии на ссылку
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('is-open');
        });
    });
});