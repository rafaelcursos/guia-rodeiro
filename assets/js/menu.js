let btnMenu = document.getElementById('btn-menu');

function abreMenu() {
    let nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMenu.addEventListener('click', abreMenu);
