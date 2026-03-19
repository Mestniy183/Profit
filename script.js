const burger = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.header__box');
burger.addEventListener('click', function () {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');

    if(mobileMenu.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
})

const mobileLinks = document.querySelectorAll('.header__link');
mobileLinks.forEach(link => {
    link.addEventListener('click', function () {
        burger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    })
})