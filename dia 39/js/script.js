function ParallaxEffect() {
    const parrallaxBg = document.querySelector('.parallax-bg');
    const elementoFlotante = document.querySelector('.parallax-elemento-flotante');
    
    window.addEventListener('scroll', () => {
        let scrollPos = window.scrollY;
        console.log(scrollPos);

        // Mover el fondo
        parrallaxBg.style.transform = `translateY(${scrollPos * 0.3}px)`;
        
        if (elementoFlotante) {
            let rotation = scrollPos * 0.05; // Rotación pequeña
            // El transform es mejor para el rendimiento que cambiar 'top'
            elementoFlotante.style.transform = `translateY(-${scrollPos * 0.6}px) rotate(${rotation}deg)`;
        }
    });
}

// Comprobar si el usuario tiene activada la preferencia de "Reducir Movimiento"
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // No aplicar efectos de parallax si el usuario tiene activada esta opción
    console.log("Se aplica la reducción de movimiento.");
} else {
    // Aplicar efectos de parallax
    console.log("Se aplica el parallax.");
    ParallaxEffect();
}
