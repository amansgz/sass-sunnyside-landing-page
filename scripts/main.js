const btn_hamburguer = document.getElementById('btn-hamburguer');
const svg_hamburguer = document.querySelector('.svg-hamburguer');
const nav_Menu = document.querySelector('.navMenu');


btn_hamburguer.addEventListener('click', () => {
    svg_hamburguer.classList.toggle('is-active');
    nav_Menu.classList.toggle('is-active');
});

document.addEventListener("click", (e) => {
    if (!e.target.matches(".navMenu a")) return false;

    svg_hamburguer.classList.remove('is-active');
    nav_Menu.classList.remove('is-active');
});
