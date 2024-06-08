// preloader 
const fadeOut = () => {
    const loader = document.querySelector(".preloader");
    loader.classList.remove("preloader");
}
window.addEventListener("load", fadeOut);



window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});


let menu = document.querySelector("#nav-toggle");
let navbar = document.querySelector("#nav-menu");

menu.onclick = () => {
    menu.classList.toggle("show-icon");
    navbar.classList.toggle("show-menu");
};

window.onscroll = () => {
    menu.classList.remove("show-icon");
    navbar.classList.remove("show-menu");
}




// review section 

var swiper = new Swiper(".ReviewSlide", {
    slidesPerView: 1,
    grabCuror: true,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1050: {
            slidesPerView: 3,
        },
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,

    },
});


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 300,
})



sr.reveal(`.scroll-top, .footer-row`)
sr.reveal(`.about-img `, {
    delay: 800,
    scale: .5
})

const srt = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2500,
    delay: 300,
})

srt.reveal(`.box-1`)
// sr.reveal(`.box-1 `,{origin : 'left'})
// sr.reveal(`.box-2 `,{origin : 'right'})

// ScrollReveal().reveal('.content');


function downloadPDF() {
    var pdfUrl = "E-Brochure/Exponair.pdf";

    var link = document.createElement('a');
    link.href = pdfUrl;

    link.setAttribute('download', 'filename.pdf');

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}

document.getElementById('downloadButton').addEventListener('click', downloadPDF);