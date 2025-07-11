document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Get the target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // If sidebar is open, close it after clicking a link
                const sidebarMenu = document.querySelector('.sidebar-menu');
                if (sidebarMenu.classList.contains('open')) {
                    sidebarMenu.classList.remove('open');
                    document.body.classList.remove('no-scroll'); // Re-enable scrolling
                }
            }
        });
    });

    // Hamburger Menu Functionality
    const hamburgerBtn = document.querySelector('.hamburger-menu');
    const closeBtn = document.querySelector('.sidebar-menu .close-btn');
    const sidebarMenu = document.querySelector('.sidebar-menu');

    // Open sidebar
    hamburgerBtn.addEventListener('click', () => {
        sidebarMenu.classList.add('open');
        document.body.classList.add('no-scroll'); // Prevent background scrolling
    });

    // Close sidebar
    closeBtn.addEventListener('click', () => {
        sidebarMenu.classList.remove('open');
        document.body.classList.remove('no-scroll'); // Re-enable scrolling
    });

    // Close sidebar if clicked outside (optional, but good for UX)
    // You might need a transparent overlay for this, or check click coordinates
    // For simplicity, we'll stick to close button for now.

    // Close sidebar when a link inside it is clicked (already handled in smooth scrolling)
});