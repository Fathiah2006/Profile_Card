document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const close = document.getElementById("close");

    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });

    close.addEventListener("click", function() {
        navMenu.classList.remove("active");
    });
});
