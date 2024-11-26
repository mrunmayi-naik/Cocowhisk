const slider = document.querySelector('.reviews-slider');
let scrollAmount = 0;

function updateScrollMax() {
    return slider.scrollWidth - slider.clientWidth;
}

function autoSlide() {
    scrollAmount += 300;

    // Recalculate scrollMax for responsive behavior
    const scrollMax = updateScrollMax();

    if (scrollAmount >= scrollMax) {
        scrollAmount = 0;
    }

    slider.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

setInterval(autoSlide, 2000);

// Update scrollMax when the window resizes
window.addEventListener('resize', () => {
    scrollAmount = 0; // Reset to beginning on resize
    slider.scrollTo({ left: scrollAmount });
});