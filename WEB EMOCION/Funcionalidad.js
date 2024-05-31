    // Función para detectar el desplazamiento hacia arriba
    function handleScroll() {
        var lastScrollTop = 0;
        var footer = document.querySelector('footer');

        window.addEventListener('scroll', function() {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                
                footer.style.transform = 'translateY(0)';
            } else {
                
                footer.style.transform = 'translateY(100%)';
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });
    }

    // Llamamos a la función al cargar la página
    window.onload = function() {
        handleScroll();
    };

    document.addEventListener('DOMContentLoaded', function() {
        var publicarBtn = document.getElementById('publicarBtn');
    
        publicarBtn.addEventListener('click', function(event) {
            event.preventDefault(); 
    
            // Mostrar el alert
            alert('¡Blog publicado!');
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        var reservarPlazaButtons = document.querySelectorAll('.btn-reservar-plaza');

        reservarPlazaButtons.forEach(function(button) {
            button.addEventListener('click', function(event) {
                event.preventDefault(); 

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

document.addEventListener("DOMContentLoaded", function() {
    
    var abrirFormulario = document.getElementById("abrirFormulario");

    
    var formularioPreguntas = document.getElementById("formularioPreguntas");

    
    abrirFormulario.addEventListener("click", function(event) {
        event.preventDefault(); 
        formularioPreguntas.style.display = "block"; // Mostrar el formulario
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); 

        alert("¡Formulario enviado con éxito!");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var abrirFormulario = document.getElementById("abrirFormulario");
    var formularioPreguntas = document.getElementById("formularioPreguntas");
    var cancelarFormulario = document.getElementById("cancelarFormulario");



    abrirFormulario.addEventListener("click", function(event) {
        event.preventDefault(); 
        formularioPreguntas.style.display = "block"; 
    });

    cancelarFormulario.addEventListener("click", function(event) {
        event.preventDefault(); 
        formularioPreguntas.style.display = "none"; 
    });
});


function mostrarPopup() {
    var popupComunidad = document.getElementById("popupComunidad");
    popupComunidad.style.display = "block";
}


function cerrarPopup() {
    var popupComunidad = document.getElementById("popupComunidad");
    popupComunidad.style.display = "none";
}

