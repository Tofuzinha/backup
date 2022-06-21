const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul a');
const header = document.querySelector('.header.container');

// abrir e fechar o botao do menu mobile
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

//Trocar a cor da barra do menu usando o scroll 
document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if(scroll_position > 100) {
        header.style.backgroundColor = "#0e0e21";
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

// fechar o menu mobile quando selecionar algo
menu_item.forEach(item => {
    item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
    });
});