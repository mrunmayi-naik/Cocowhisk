const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});




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


// // Show the search input when the search icon is clicked
// function toggleSearchInput() {
//     const searchInput = document.querySelector('.search-input');
//     searchInput.style.display = searchInput.style.display === 'block' ? 'none' : 'block';
// }

// // Event listener for the search icon click
// document.querySelector('.search-button').addEventListener('click', toggleSearchInput);