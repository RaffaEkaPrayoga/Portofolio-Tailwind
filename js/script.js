// Select the hamburger button and nav menu
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector(".nav-menu");

// Toggle nav menu on hamburger button click
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("translate-x-full");
});

// Close nav menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        // Only close the menu if it's currently open (for smaller screens)
        if (navMenu.classList.contains("translate-x-full") === false) {
            hamburger.classList.remove("hamburger-active");
            navMenu.classList.add("translate-x-full");
        }
    });
});
