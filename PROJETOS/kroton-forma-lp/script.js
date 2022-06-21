// FUNCAO PARA TROCAR BACKGROUND HEADER

function scrollHeader() {
    const headerscroll = document.getElementById('header')
    if(this.scrollY >= 100) {
        headerscroll.classList.add ('scroll-header')
    } else { 
        headerscroll.classList.remove('scroll-header')
    };
}

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    nav.classList.toggle("active");
} );



window.addEventListener('scroll', scrollHeader); 

window.addEventListener('scroll', scrollImg);