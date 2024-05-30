// Función para detectar el desplazamiento hacia arriba
function handleScroll() {
    var lastScrollTop = 0;
    var footer = document.querySelector('footer');

    window.addEventListener('scroll', function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // El usuario está desplazándose hacia abajo, mostramos el footer
            footer.style.transform = 'translateY(0)';
        } else {
            // El usuario está desplazándose hacia arriba, ocultamos el footer
            footer.style.transform = 'translateY(100%)';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para tratar con desplazamiento hacia arriba extremo
    });
}

// Llamamos a la función al cargar la página
window.onload = function() {
    handleScroll();
};

