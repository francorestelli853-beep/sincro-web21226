// =========================================
// Spline 3D Robot Loader
// =========================================

/**
 * INSTRUCCIONES PARA USAR:
 * 
 * 1. Ve a https://spline.design
 * 2. Crea o importa tu robot 3D
 * 3. Exporta el proyecto y copia la URL del scene
 * 4. Pega la URL en la variable SPLINE_SCENE_URL abajo
 * 
 * Ejemplo de URL:
 * https://prod.spline.design/abc123xyz/scene.splinecode
 */

const SPLINE_SCENE_URL = 'YOUR_SPLINE_SCENE_URL_HERE';

// Elementos del DOM
const canvas = document.getElementById('spline-canvas');
const loader = document.getElementById('spline-loader');
const fallback = document.getElementById('robot-fallback');

// Configuración
const LOAD_TIMEOUT = 10000; // 10 segundos timeout
let splineApp = null;

/**
 * Inicializa la escena de Spline
 */
async function initSpline() {
    // Verificar si se configuró la URL
    if (SPLINE_SCENE_URL === 'YOUR_SPLINE_SCENE_URL_HERE') {
        console.warn('⚠️ Spline scene URL not configured. Using fallback robot.');
        showFallback();
        return;
    }

    try {
        // Importar Spline Application
        const { Application } = await import('https://unpkg.com/@splinetool/runtime@1.0.0/build/runtime.js');

        // Crear aplicación Spline
        splineApp = new Application(canvas);

        // Timeout de seguridad
        const timeoutId = setTimeout(() => {
            console.warn('⏱️ Spline loading timeout. Using fallback.');
            showFallback();
        }, LOAD_TIMEOUT);

        // Cargar escena
        await splineApp.load(SPLINE_SCENE_URL);

        clearTimeout(timeoutId);

        // Ocultar loader y mostrar canvas
        hideLoader();
        canvas.classList.add('loaded');

        console.log('✅ Spline scene loaded successfully!');

        // Configurar interacciones
        setupSplineInteractions();

    } catch (error) {
        console.error('❌ Error loading Spline scene:', error);
        showFallback();
    }
}

/**
 * Configura interacciones con la escena Spline
 */
function setupSplineInteractions() {
    if (!splineApp) return;

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        // Enviar eventos a Spline si es necesario
        // splineApp.emitEvent('mousemove', { x: mouseX, y: mouseY });
    });

    // Scroll tracking
    window.addEventListener('scroll', () => {
        const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

        // Enviar progreso de scroll a Spline
        // splineApp.emitEvent('scroll', scrollProgress);
    });
}

/**
 * Oculta el loader
 */
function hideLoader() {
    loader.classList.add('hidden');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
}

/**
 * Muestra el fallback (robot placeholder)
 */
function showFallback() {
    hideLoader();
    canvas.style.display = 'none';
    fallback.style.display = 'flex';

    // Reiniciar animaciones del fallback
    const robotCircle = fallback.querySelector('.robot-circle');
    const robotGlow = fallback.querySelector('.robot-glow');

    if (robotCircle && robotGlow) {
        // Las animaciones CSS se activarán automáticamente
        console.log('🔄 Using fallback robot with animations');
    }
}

/**
 * Inicializar cuando el DOM esté listo
 */
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSpline);
} else {
    initSpline();
}

/**
 * Exportar para uso externo si es necesario
 */
window.SplineLoader = {
    app: () => splineApp,
    reload: initSpline,
    showFallback: showFallback
};
