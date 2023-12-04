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

const headerLanguages = document.querySelector(".header__languages");
const headerLanguagesHead = headerLanguages.querySelector(".header__languages__head");
const headerLanguagesBody = headerLanguages.querySelector(".header__languages__body");

headerLanguagesHead.addEventListener("click", () => {
  const isActive = headerLanguagesHead.classList.toggle("header__languages__head_active");
    
  if (isActive) {
    headerLanguagesBody.classList.add("header__languages__body_active");
  } else {
    headerLanguagesBody.classList.remove("header__languages__body_active");
  }
});

function changeCurrency(currency) {
    document.getElementById('selectedCurrency').textContent = currency;
}