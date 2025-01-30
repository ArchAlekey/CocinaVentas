let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".carousel-slide");
    const totalSlides = slides.length;
    
    currentIndex += step;
    
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const offset = -currentIndex * 300; // Ancho de cada imagen
    document.querySelector(".carrusel").style.transform = `translateX(${offset}px)`;
}

// Cambio automático cada 3 segundos
setInterval(() => moveSlide(1), 2500);
