$(document).ready(function() {
    // Obtener todas las secciones y sus respectivos enlaces de navegación
    var sections = $('section');
    var navLinks = $('.navbar a');

    // Función para actualizar el enlace activo en el menú de navegación
    function updateActiveLink() {
        var scrollPosition = $(document).scrollTop();
        sections.each(function() {
            var top = $(this).offset().top - 70; // 70 es la altura del menú de navegación
            var bottom = top + $(this).outerHeight();
            if (scrollPosition >= top && scrollPosition < bottom) {
                var sectionId = $(this).attr('id');
                navLinks.removeClass('active');
                $('.navbar a[href="#' + sectionId + '"]').addClass('active');
            }
        });
    }

    // Actualizar el enlace activo al cargar la página
    updateActiveLink();

    // Actualizar el enlace activo al desplazarse por la página
    $(document).scroll(function() {
        updateActiveLink();
    });
});
