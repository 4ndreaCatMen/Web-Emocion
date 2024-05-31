function mostrarInformacion(infoId) {
    const infoText = {
        'info1': ' Aunque has experimentado dificultades en el pasado, este paisaje te invita a dejar atrás tus miedos y reconocer la bondad, calidez y armonía que puede ofrecerte el mundo.',
        'info2': 'En este momento de tu vida, anhelas experimentar la libertad en todas sus formas. Puede significar un cambio significativo, como cambiar de trabajo, emprender un viaje transformador, liberarte de relaciones tóxicas o descubrir una pasión que te motive.',
        'info3': 'Es posible que encuentres felicidad al distanciarte de todo lo que te causa malestar, ya sean personas, relaciones, ambientes, pensamientos o emociones negativas.',
        'info4': ' Tal vez solo necesites un poco más de enfoque. Si te sientes disperso o indeciso, podrías estar gastando mucha energía en tomar decisiones sin llegar a una conclusión clara.',
        'info5': 'Los rascacielos iluminados proyectan una sensación de modernidad y progreso. Este paisaje urbano puede evocar emociones de asombro por el avance humano, pero también puede transmitir una sensación de anonimato y soledad en medio de la multitud.',
        'info6': 'Las suaves curvas de las dunas de arena en el desierto pueden inspirar una sensación de serenidad y quietud. Este paisaje desértico invita a la contemplación y la introspección, sugiriendo la idea de que la belleza puede encontrarse en la simplicidad y la vastedad del entorno natural ',
        'info7': 'Descripción detallada sobre el color 7...',
        'info8': 'Descripción detallada sobre el color 8...',
        'info9': 'Descripción detallada sobre el color 9...',
        'info10': 'Descripción detallada sobre el color 10...',
        'info11': 'Descripción detallada sobre el color 11...',
        'info12': 'Descripción detallada sobre el color 12...',
        'info13': 'Descripción detallada sobre el color 13...',
        'info14': 'Descripción detallada sobre el color 14...',
        // Agrega más descripciones aquí si es necesario
    };

    document.getElementById('popup-text').innerText = infoText[infoId];
    document.getElementById('popup').style.display = 'block';
}

function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
}

