document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll(".page-section");

    // Simple Hash Router
    function router() {
        let hash = window.location.hash || "#home";
        
        // Hide all sections
        sections.forEach(sec => sec.classList.remove("active"));
        
        // Remove active class from links
        navLinks.forEach(link => link.classList.remove("active"));
        
        // Show current section
        const targetSection = document.querySelector(hash);
        if (targetSection) {
            targetSection.classList.add("active");
            window.scrollTo(0, 0);
        } else {
            // Fallback to home
            document.querySelector("#home").classList.add("active");
            hash = "#home";
        }
        
        // Set active link
        navLinks.forEach(link => {
            if (link.getAttribute("href") === hash) {
                link.classList.add("active");
            }
        });
    }

    // Listen to hash changes
    window.addEventListener("hashchange", router);
    
    // Initial load
    router();
});
