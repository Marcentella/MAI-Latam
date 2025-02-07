// Seleccionar elementos del carrusel
const carouselInner = document.querySelector('.carousel-inner');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
let autoplayInterval;

// Función para mostrar la imagen actual
function showCurrentImage() {
    const offset = -currentIndex * 100;
    carouselInner.style.transform = `translateX(${offset}%)`;
}

// Función para avanzar al siguiente slide
function nextSlide() {
    if (currentIndex < carouselItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volver al inicio
    }
    showCurrentImage();
}

// Función para retroceder al slide anterior
function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = carouselItems.length - 1; // Ir al final
    }
    showCurrentImage();
}

// Evento para el botón "Anterior"
prevButton.addEventListener('click', () => {
    prevSlide();
    resetAutoplay(); // Reiniciar el autoplay al interactuar manualmente
});

// Evento para el botón "Siguiente"
nextButton.addEventListener('click', () => {
    nextSlide();
    resetAutoplay(); // Reiniciar el autoplay al interactuar manualmente
});

// Función para iniciar el autoplay
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        nextSlide();
    }, 3000); // Cambia de slide cada 3 segundos (ajusta el tiempo según necesites)
}

// Función para reiniciar el autoplay
function resetAutoplay() {
    clearInterval(autoplayInterval); // Detener el autoplay actual
    startAutoplay(); // Reiniciar el autoplay
}

// Iniciar el autoplay al cargar la página
startAutoplay();

// Pausar el autoplay cuando el mouse está sobre el carrusel
carouselInner.addEventListener('mouseenter', () => {
    clearInterval(autoplayInterval);
});

// Reanudar el autoplay cuando el mouse sale del carrusel
carouselInner.addEventListener('mouseleave', () => {
    startAutoplay();
});