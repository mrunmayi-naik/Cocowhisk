const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// const slider = document.querySelector('.reviews-slider');
// let scrollAmount = 0;
// let scrollMax = slider.scrollWidth - slider.clientWidth; // Maximum scrollable width

// function autoSlide() {
//   // Scroll 300px to the right every 2 seconds
//   scrollAmount += 300;
  
//   // If the scroll reaches the end, reset to the beginning
//   if (scrollAmount >= scrollMax) {
//     scrollAmount = 0;
//   }
  
//   slider.scrollTo({
//     left: scrollAmount,
//     behavior: 'smooth'
//   });
// }

// Auto slide every 2 seconds
// setInterval(autoSlide, 2000);



document.addEventListener("DOMContentLoaded", function() {
        const backgroundSection = document.querySelector('.background-image'); // Select the background section

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    backgroundSection.classList.add('visible'); // Add the visible class when in view
                    observer.unobserve(entry.target); // Stop observing once it's visible
                }
            });
        }, {
            threshold: 0.1 // Adjust this value to change when the animation triggers
        });

        observer.observe(backgroundSection); // Start observing the background section
});

function toggleMenu() {
  document.querySelector('.navbar').classList.toggle('active');
}
