function updateTimestamp() {
            const timestampElement = document.getElementById('timestamp');
            const currentTime = Date.now();
            timestampElement.textContent = currentTime;
        }

        updateTimestamp();

        setInterval(updateTimestamp, 1000);

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");
    const close = document.getElementById("close");

    hamburger.addEventListener("click", function() {
        navMenu.classList.add("active"); 
        hamburger.style.display = "none"; 
        close.style.display = "block"; 
    });

    close.addEventListener("click", function() {
        navMenu.classList.remove("active"); 
        hamburger.style.display = "block"; 
        close.style.display = "none"; 
    });
});



  