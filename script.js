document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Digital Background Particle Array Engine
    const particlesContainer = document.getElementById('particlesContainer');
    const particleCount = 25;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('digital-particle');
        
        // Randomize dimensions and distributions
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        
        // Randomize fluid operational durations
        particle.style.animationDuration = `${Math.random() * 7 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
        
        particlesContainer.appendChild(particle);
    }

    // 2. Responsive Mobile Menu Toggle Operations
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // 3. Smooth IntersectionObserver Section Reveal Configuration
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const observerOptions = { threshold: 0.05, rootMargin: "0px 0px -20px 0px" };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(element => revealObserver.observe(element));
});