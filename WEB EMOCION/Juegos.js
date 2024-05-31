function mostrarInformacion(infoId) {
    const infoText = {
        'info1': ' Aunque has experimentado dificultades en el pasado, este paisaje te invita a dejar atrás tus miedos y reconocer la bondad, calidez y armonía que puede ofrecerte el mundo.',
        'info2': 'En este momento de tu vida, anhelas experimentar la libertad en todas sus formas. Puede significar un cambio significativo, como cambiar de trabajo, emprender un viaje transformador, liberarte de relaciones tóxicas o descubrir una pasión que te motive.',
        'info3': 'Es posible que encuentres felicidad al distanciarte de todo lo que te causa malestar, ya sean personas, relaciones, ambientes, pensamientos o emociones negativas.',
        'info4': ' Tal vez solo necesites un poco más de enfoque. Si te sientes disperso o indeciso, podrías estar gastando mucha energía en tomar decisiones sin llegar a una conclusión clara.',
        'info5': 'Los rascacielos iluminados proyectan una sensación de modernidad y progreso. Este paisaje urbano puede evocar emociones de asombro por el avance humano, pero también puede transmitir una sensación de anonimato y soledad en medio de la multitud.',
        'info6': 'Las suaves curvas de las dunas de arena en el desierto pueden inspirar una sensación de serenidad y quietud. Este paisaje desértico invita a la contemplación y la introspección, sugiriendo la idea de que la belleza puede encontrarse en la simplicidad y la vastedad del entorno natural ',
        'info7': 'Este color evoca una sensación de fuerza, energía y excitación. Su audaz presencia inspira valentía y determinación, mientras que su calidez reconfortante te envuelve en un abrazo emocional. El rojo es el color de la pasión desenfrenada, la energía inagotable y la valentía sin límites',
        'info8': 'Este color encarna la vitalidad, la creatividad y la alegría de vivir. Su brillo cálido y acogedor te invita a explorar nuevas experiencias y te llena de entusiasmo. El naranja es el color de la creatividad desbordante, la alegría contagiosa y el optimismo radiante.',
        'info9': 'El color del sol y la felicidad. Evoca una sensación de optimismo, claridad mental y alegría pura. Su brillo soleado infunde cada momento con una sensación de luz y calidez. El amarillo es el color de la alegría desbordante, la vitalidad renovada y la claridad mental.',
        'info10': 'El color de la claridad y la serenidad. Este tono luminoso evoca una sensación de frescura, pureza y tranquilidad. Su presencia calmante y luminosa te envuelve en un aura de paz y armonía. El blanco es el color de la pureza esencial, la claridad mental y la paz interior.',
        'info11': 'El color de la naturaleza y la renovación. Evoca una sensación de crecimiento, frescura y equilibrio. Su tono refrescante y calmante te conecta con la tierra y te llena de vitalidad. El verde es el color de la renovación constante, el equilibrio armonioso y la conexión con la naturaleza.',
        'info12': 'Evoca una sensación de paz, confianza y estabilidad. Su tono refrescante y tranquilizador te invita a encontrar la calma en medio del caos. El azul es el color de la serenidad profunda, la confianza tranquila y la estabilidad emocional.',
        'info13': 'Evoca una sensación de misterio, inspiración y transformación. Su tono enigmático y profundo te lleva a explorar los rincones más oscuros de tu mente y alma. El violeta es el color de la imaginación desbordante, la espiritualidad profunda y la transformación interior.',
        'info14': 'El color de la misteriosa profundidad. Evoca una sensación de poder, autoridad y misterio. Su tono oscuro y enigmático te envuelve en un aura de intriga y fascinación. El negro es el color de la elegancia atemporal, la autoridad innegable y el misterio cautivador.',
        // Agrega más descripciones aquí si es necesario
    };

    document.getElementById('popup-text').innerText = infoText[infoId];
    document.getElementById('popup').style.display = 'block';
}

function cerrarPopup() {
    document.getElementById('popup').style.display = 'none';
}

