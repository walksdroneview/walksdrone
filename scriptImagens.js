const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = i === index ? 1 : 0;
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide); // Exibe o primeiro slide

let intervalId = setInterval(nextSlide, 3000); // Muda o slide a cada 3 segundos

slider.addEventListener('mouseenter', () => {
    clearInterval(intervalId); // Para o intervalo ao passar o mouse
});

slider.addEventListener('mouseleave', () => {
    intervalId = setInterval(nextSlide, 3000); // Reinicia o intervalo ao remover o mouse
});