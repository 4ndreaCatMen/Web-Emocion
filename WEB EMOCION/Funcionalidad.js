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

    document.addEventListener('DOMContentLoaded', function() {
        var publicarBtn = document.getElementById('publicarBtn');
    
        publicarBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Evitar que el formulario se envíe
    
            // Mostrar el alert
            alert('¡Blog publicado!');
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        var reservarPlazaButtons = document.querySelectorAll('.btn-reservar-plaza');

        reservarPlazaButtons.forEach(function(button) {
            button.addEventListener('click', function(event) {
                event.preventDefault(); // Evita que el enlace se siga normalmente

                // Muestra el mensaje de confirmación
                alert('Plaza reservada con éxito.');

            });
        });
    });

    // Función para mostrar la imagen
function mostrarImagen() {
    document.getElementById('imagenPopup').style.display = 'block';
}

// Función para cerrar la imagen
function cerrarImagen() {
    document.getElementById('imagenPopup').style.display = 'none';
}
