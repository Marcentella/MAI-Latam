// Get a reference to the navbar container
const navBarContainer = document.getElementById('nav-ctn');

// Add a scroll event listener
window.addEventListener('scroll', function () {
    // Check if the user has scrolled down
    if (window.scrollY > 0) {
        // Add the scrolled class
        navBarContainer.classList.add('scrolled-nav');
    } else {
        // Remove t he scrolled class
        navBarContainer.classList.remove('scrolled-nav');
    }
});