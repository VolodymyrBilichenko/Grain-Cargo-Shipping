// header menu

const headerMenu = document.querySelector('.header__menu__head');
const headerMenuBody = document.querySelector('.header__menu__body');
const headerMenuClose = document.querySelector('.header__close');

headerMenu.addEventListener('click', () => {
    headerMenu.classList.add('header__menu__head_active');
    headerMenuBody.classList.add('header__menu__body_active');
});

headerMenuClose.addEventListener('click', () => {
    headerMenu.classList.remove('header__menu__head_active');
    headerMenuBody.classList.remove('header__menu__body_active');
});


//languages

