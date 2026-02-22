// =========================================
// Loading Screen
// =========================================

const loadingScreen = document.getElementById('loadingScreen');
let loadingHidden = false;

function hideLoadingScreen() {
    if (loadingHidden || !loadingScreen) return;
    loadingHidden = true;

    // Start the CSS opacity transition
    loadingScreen.classList.add('hidden');

    // Remove from layout AFTER the transition finishes (1.4s + small buffer)
    setTimeout(() => {
        loadingScreen.style.display = 'none';
    }, 1600);
}

// Hide on window load (all resources ready) with a short delay for smoothness
window.addEventListener('load', () => {
    setTimeout(hideLoadingScreen, 600);
});

// Hard fallback: hide after 4s no matter what
window.addEventListener('load', () => {
    setTimeout(hideLoadingScreen, 4000);
});


// =========================================
// Scroll-Driven Robot Animation
// =========================================
// Robot scales and fades (NO rotation to avoid visual bug)

function handleScrollDrivenAnimation() {
    if (!robotContainer) return;

    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    // Calculate scroll progress (0 to 1)
    const scrollProgress = Math.min(scrollY / windowHeight, 1);

    // Scale: 1 to 0.7
    const scale = 1 - (scrollProgress * 0.3);

    // Opacity: 1 to 0.2
    const opacity = 1 - (scrollProgress * 0.8);

    // Apply only scale (NO rotation)
    robotContainer.style.transform = `translate(-50%, -50%) scale(${scale})`;
    robotContainer.style.opacity = opacity;
}

// Throttled scroll handler
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleScrollDrivenAnimation();
            ticking = false;
        });
        ticking = true;
    }
});

handleScrollDrivenAnimation();
