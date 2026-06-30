/**
 * Widget Pilot Wealth Tool - UI Layout Effects Engine
 * File: script.js
 */

// Initialize layout animations immediately without blocking app.js DOM threads
(function initLayoutEngine() {
    const cards = document.querySelectorAll('.feature-card');
    
    // Safety check: skip compiling if layout targets don't exist on the active viewport page
    if (cards.length === 0) return;

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        // Apply default structural rendering positions natively
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        revealOnScroll.observe(card);
    });
})();
