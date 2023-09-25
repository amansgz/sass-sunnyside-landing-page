const btn_hamburger = document.getElementById('btn-hamburger');
const svg_hamburger = document.querySelector('.svg-hamburger');
const nav_Menu = document.querySelector('.nav__menu');


btn_hamburger.addEventListener('click', () => {
    svg_hamburger.classList.toggle('is-active');
    nav_Menu.classList.toggle('is-active');
});

document.addEventListener("click", (e) => {
    if (!e.target.matches(".nav__menu a")) return false;

    svg_hamburger.classList.remove('is-active');
    nav_Menu.classList.remove('is-active');
});
