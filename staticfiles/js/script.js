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


document.addEventListener("DOMContentLoaded", function () {
    const whatsappCard = document.getElementById("whatsapp-ctn");

    whatsappCard.addEventListener("click", function () {
        window.open("https://wa.me/56966289563?text=Hola,%20quiero%20más%20información", "_blank");
    });

    // Prevent double navigation if the <a> is clicked directly
    const link = whatsappCard.querySelector("a");
    link.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const whatsappCard = document.getElementById("correo-ctn");

    whatsappCard.addEventListener("click", function () {
        window.location.href = "mailto:info@mai-latam.com?subject=Consulta&body=Hola,%20quisiera%20más%20información.";
    });

    const link = whatsappCard.querySelector("a");
    if (link) {
        link.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const phoneCard = document.getElementById("telef-ctn");

    phoneCard.addEventListener("click", function () {
        window.location.href = "tel:+56722971716";
    });

    const link = phoneCard.querySelector("a");
    if (link) {
        link.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    }
});
