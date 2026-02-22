// =========================================
// Minimalist Interactions - Apple/Tesla Style
// =========================================

document.addEventListener('DOMContentLoaded', () => {

    // Smooth Scroll Enhancement
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // =========================================
    // 3D Robot Mouse Tracking (Look-at Effect)
    // =========================================

    const robotContainer = document.getElementById('robot-container');
    const robotCircle = document.querySelector('.robot-circle');
    const robotGlow = document.querySelector('.robot-glow');

    if (robotContainer && robotCircle) {
        let mouseX = 0;
        let mouseY = 0;
        let currentX = 0;
        let currentY = 0;
        let scrollRotation = 0;

        document.addEventListener('mousemove', (e) => {
            const rect = robotContainer.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Calculate relative position (-1 to 1)
            mouseX = (e.clientX - centerX) / (rect.width / 2);
            mouseY = (e.clientY - centerY) / (rect.height / 2);

            // Limit range
            mouseX = Math.max(-1, Math.min(1, mouseX));
            mouseY = Math.max(-1, Math.min(1, mouseY));
        });

        // Smooth animation loop
        function animateRobot() {
            // Smooth interpolation
            currentX += (mouseX - currentX) * 0.08;
            currentY += (mouseY - currentY) * 0.08;

            // Apply rotation (limited to ±20 degrees) + scroll rotation
            const rotateX = currentY * -20;
            const rotateY = currentX * 20;

            robotCircle.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                rotateZ(${scrollRotation}deg)
                scale(${1 + Math.abs(currentX) * 0.05})
            `;

            requestAnimationFrame(animateRobot);
        }

        animateRobot();
    }

    // =========================================
    // Scroll-Driven Robot Rotation & Parallax
    // =========================================

    let lastScrollY = 0;

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const scrollProgress = scrollY / (document.documentElement.scrollHeight - window.innerHeight);

        // Robot rotation based on scroll (2 full rotations)
        if (robotCircle) {
            scrollRotation = scrollProgress * 720;
        }

        // Hero parallax effect
        const hero = document.getElementById('hero');
        if (hero) {
            const heroTitle = hero.querySelector('.hero-title');
            const heroSubtitle = hero.querySelector('p');
            if (heroTitle) {
                const offset = scrollY * 0.5;
                heroTitle.style.transform = `translateY(${offset}px)`;
                heroTitle.style.opacity = 1 - (scrollY / window.innerHeight) * 1.5;
            }
            if (heroSubtitle) {
                const offset = scrollY * 0.3;
                heroSubtitle.style.transform = `translateY(${offset}px)`;
                heroSubtitle.style.opacity = 1 - (scrollY / window.innerHeight) * 1.2;
            }
        }

        lastScrollY = scrollY;
    });

    // =========================================
    // Intersection Observer for Scroll Reveals
    // =========================================

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe service cards
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(40px)';
        card.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe detailed service cards — adds .visible class on viewport entry
    // so the glass effect renders correctly (only on fully opaque elements)
    const detailedObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                detailedObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.service-card-detailed').forEach(card => {
        detailedObserver.observe(card);
    });

    // =========================================
    // Navbar Scroll Effect
    // =========================================

    const nav = document.querySelector('nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        if (currentScroll > 100) {
            nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
        } else {
            nav.style.boxShadow = 'none';
        }

        lastScroll = currentScroll;
    });


    // =========================================
    // Service Card Parallax on Scroll
    // =========================================

    window.addEventListener('scroll', () => {
        const cards = document.querySelectorAll('.service-card');
        cards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;

            if (scrollProgress > 0 && scrollProgress < 1) {
                const offset = (index % 2 === 0 ? 1 : -1) * scrollProgress * 20;
                card.style.transform = `translateY(${offset}px)`;
            }
        });
    });

    // =========================================
    // Enhanced Robot Glow Effect
    // =========================================

    if (robotGlow) {
        let glowPhase = 0;

        function animateGlow() {
            glowPhase += 0.015;
            const scale = 1 + Math.sin(glowPhase) * 0.15;
            const opacity = 0.7 + Math.sin(glowPhase) * 0.3;

            robotGlow.style.transform = `translate(-50%, -50%) scale(${scale})`;
            robotGlow.style.opacity = opacity;

            requestAnimationFrame(animateGlow);
        }

        animateGlow();
    }

    // =========================================
    // Console Easter Egg
    // =========================================

    console.log('%c✨ Sincro AI', 'font-size: 24px; font-weight: 300; color: #1d1d1f;');
    console.log('%cSincronizamos tu empresa con el futuro', 'font-size: 14px; color: #86868b;');
    console.log('%c🤖 ¿Interesado en trabajar con nosotros? Escríbenos!', 'font-size: 12px; color: #06c;');

});

// =========================================
// Performance Optimization
// =========================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions if needed
// (Currently using requestAnimationFrame which is already optimized)
