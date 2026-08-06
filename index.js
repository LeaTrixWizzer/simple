// ОБЪЯВЛЕНИЕ КОНСТАНТ

const searchOpenButton = document.querySelector("#search-button");
const searchCloseButton = document.querySelector(".search-button-close");
const searchForm = document.querySelector(".link-form");

const menuOpenButton = document.querySelector(".header__menu-open");
const menuCloseButton = document.querySelector(".header__menu-close");
const menu = document.querySelector(".header__nav");

// ФУНКЦИЯ ОТКРЫТИЕ ФОРМЫ ПОИСКА

function openForm() {
  searchForm.classList.add("link-form-display");

  setTimeout(() => {
    searchForm.classList.add("link-form-show");
  }, 100);
}

// ФУНКЦИЯ ЗАКРЫТИЕ ФОРМЫ ПОИСКА

function closeForm() {
  searchForm.classList.remove("link-form-display");

  setTimeout(() => {
    searchForm.classList.remove("link-form-show");
  }, 300);
}

// ФУНКЦИЯ ОТКРЫТИЕ НАВИГАЦИОННОГО МЕНЮ

function openMenu() {
  menu.style.display = "flex";
  menuOpenButton.style.display = "none";
  menuCloseButton.style.display = "block";
}

// ФУНКЦИЯ ЗАКРЫТИЕ НАВИГАЦИОННОГО МЕНЮ

function closeMenu() {
  menu.style.display = "none";
  menuOpenButton.style.display = "block";
  menuCloseButton.style.display = "none";
}

// ОБРАБОТЧИК КЛИКОВ

searchOpenButton.addEventListener("click", openForm);
searchCloseButton.addEventListener("click", closeForm);
menuOpenButton.addEventListener("click", openMenu);
menuCloseButton.addEventListener("click", closeMenu);
