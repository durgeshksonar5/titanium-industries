(function() {
    "use strict";

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Default Animation Settings
    const revealSettings = {
        distance: 40,
        duration: 1.0,
        ease: "power2.out",
        start: "top 85%"
    };

    /**
     * Global Section Reveal
     * Gently fades in each section as it enters the viewport
     */
    const revealSections = () => {
        const sections = document.querySelectorAll('section, .why-choose-us, .our-faqs, .our-testimonials, .our-clients, .contact-us-page');
        
        sections.forEach(section => {
            gsap.from(section, {
                scrollTrigger: {
                    trigger: section,
                    start: revealSettings.start,
                    toggleActions: "play none none none",
                    once: true
                },
                opacity: 0,
                y: revealSettings.distance,
                duration: revealSettings.duration,
                ease: revealSettings.ease
            });
        });
    };

    /**
     * Staggered Grid Reveal
     * Animates items in a grid one by one for a premium feel
     */
    const revealGridItems = () => {
        // Service Items
        if (document.querySelectorAll('.service-item').length) {
            ScrollTrigger.batch(".service-item", {
                start: revealSettings.start,
                onEnter: batch => gsap.from(batch, {
                    opacity: 0,
                    y: 30,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: revealSettings.ease,
                    overwrite: true
                }),
                once: true
            });
        }

        // Client Logos
        if (document.querySelectorAll('.client-item').length) {
            ScrollTrigger.batch(".client-item", {
                start: revealSettings.start,
                onEnter: batch => gsap.from(batch, {
                    opacity: 0,
                    scale: 0.9,
                    stagger: 0.08,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                    overwrite: true
                }),
                once: true
            });
        }

        // Gallery Items
        if (document.querySelectorAll('.gallery-item').length) {
            ScrollTrigger.batch(".gallery-item", {
                start: revealSettings.start,
                onEnter: batch => gsap.from(batch, {
                    opacity: 0,
                    y: 20,
                    stagger: 0.08,
                    duration: 0.8,
                    ease: revealSettings.ease,
                    overwrite: true
                }),
                once: true
            });
        }
    };

    /**
     * Content Block Reveal
     * Animates titles, descriptions, and buttons
     */
    const revealContent = () => {
        // Titles and Text Blocks
        const contentBlocks = document.querySelectorAll('.section-title, .about-us-content, .why-choose-us-content');
        contentBlocks.forEach(block => {
            gsap.from(block, {
                scrollTrigger: {
                    trigger: block,
                    start: revealSettings.start,
                    once: true
                },
                opacity: 0,
                y: 30,
                duration: 1.2,
                ease: revealSettings.ease
            });
        });

        // Individual Buttons
        const buttons = document.querySelectorAll('.btn-default, .header-btn');
        buttons.forEach(btn => {
            gsap.from(btn, {
                scrollTrigger: {
                    trigger: btn,
                    start: "top 90%",
                    once: true
                },
                opacity: 0,
                scale: 0.95,
                duration: 0.8,
                ease: "power1.out"
            });
        });
    };

    /**
     * Image Reveal
     * Subtle zoom and fade for images
     */
    const revealImages = () => {
        const images = document.querySelectorAll('.about-us-images img, .why-choose-image img, .service-image img');
        images.forEach(img => {
            gsap.from(img, {
                scrollTrigger: {
                    trigger: img,
                    start: revealSettings.start,
                    once: true
                },
                opacity: 0,
                scale: 1.05,
                duration: 1.5,
                ease: "power1.out"
            });
        });
    };

    // Initialize all animations on DOM Load
    window.addEventListener('load', () => {
        revealSections();
        revealGridItems();
        revealContent();
        revealImages();
        
        // Refresh ScrollTrigger to ensure correct positions
        ScrollTrigger.refresh();
    });

})();
