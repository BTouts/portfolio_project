document.addEventListener('DOMContentLoaded', function() {
    console.log("Website loaded!");

    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example: Toggle visibility of project cards on the projects page
