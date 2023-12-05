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

//// video btn

document.addEventListener('DOMContentLoaded', function() {
  const playBtn = document.getElementById('playBtn');
  if (playBtn !== null) {
      playBtn.addEventListener('click', function () {
          const player = document.getElementById('ytPlayer');
          const playerHover = document.querySelector('.button-hover')
          if (player !== null) {
              player.src += '&autoplay=1';
              this.style.display = 'none';
              this.style.visibility = 'hidden';
              playerHover.style.display = 'none';
              playerHover.style.visibility = 'hidden';
          }
      });
  }
});
