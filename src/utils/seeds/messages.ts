import { v4 as uuidv4 } from 'uuid';

export const messagesValRoom = [
    { 
        id: uuidv4(),
        location_id: 1, 
        message_index: 0, 
        next_level: false,
        output: [
            '/send*No has seleccionado la opcion correcta. Por favor, intenta de nuevo.'
        ],
        command: '/error',
    },
    { 
        id: uuidv4(),
        location_id: 1, 
        message_index: 0, 
        next_level: false,
        output: [
            '/sendAudio1',
            '/sendAudio2',
            '/insertImageVal1',
            '/sendAudio3',
            '/sendMapValRoom',
            '/send*What do you want to do?'
        ],
        command: '/start',
    },
    {
        id: uuidv4(),
        location_id: 1, 
        message_index: 0, 
        output: [
            '/send*No me puedo quedar en cama. Debería ir a ver qué necesita papá.'
        ],
        next_level: false,
        command: '/a1',
    },
    {
        id: uuidv4(),
        location_id: 1, 
        message_index: 0, 
        next_level: false,
        output: [
            '/send*¡AUCH!\nAntes de poder pensar qué querrá papá, te tropiezas con la alfombra y peleas contra la gravedad hasta terminar en la puerta y recuperar tu balance.'
        ],
        command: '/a2',
    },
    {
        id: uuidv4(),
        location_id: 1, 
        message_index: 0, 
        next_level: true,
        next_locations: 'Inside the house',
        output: [
            '/sendMapDownstairs',
            '/send*Voy a buscar a papá. Debe estar en la sala.'
        ],
        command: '/a3',
    },
    {
        id: uuidv4(),
        location_id: 1, 
        message_index: 0, 
        next_level: false,
        output: [
            '/send*No debería salir de casa todavía. ¿Dónde está papá?'
        ],
        command: '/a4',
    },
    {
        id: uuidv4(),
        location_id: 1, 
        message_index: 0, 
        next_level: false,
        output: [
            '/sendImageWorkshopEmpty'
        ],
        command: '/b1',
    },
    {
        id: uuidv4(),
        location_id: 1, 
        message_index: 0, 
        next_level: false,
        output: [
            '/sendImageKitchen'
        ],
        command: '/b2',
    },
    {
        id: uuidv4(),
        location_id: 2, 
        message_index: 1, 
        next_level: false,
        output: [
            '/sendImageWorkshopEmpty'
        ],
        command: '/b1',
    },
    {
        id: uuidv4(),
        location_id: 2, 
        message_index: 1, 
        next_level: false,
        output: [
            '/sendImageDadRoom'
        ],
        command: '/a1',
    },
    {
        id: uuidv4(),
        location_id: 2, 
        message_index: 1, 
        next_level: false,
        output: [
            '/send*No puedo regresar a mi cuarto todavia. Debo encontrar a papá.'
        ],
        command: '/a2',
    },
    {
        id: uuidv4(),
        location_id: 2, 
        message_index: 1, 
        next_level: false,
        output: [
            '/send*No debería salir de casa todavía. ¿Dónde está papá?'
        ],
        command: '/a3',
    },
    {
        id: uuidv4(),
        location_id: 2, 
        message_index: 1, 
        next_level: false,
        output: [
            '/sendImageKitchen'
        ],
        command: '/b2',
    },
    {
        id: uuidv4(),
        location_id: 2, 
        message_index: 1, 
        next_level: false,
        output: [
            '/sendMapDownstairs',
            `/send*Gracias por llegar tan rápido, Val.Tengo algo importante que encargarte.
            \nHoy es la coronación de la nueva reina, Mipha, y necesitamos llevarle un regalo de parte nuestra.
            \nEntra al taller, escoge la escultura que más te guste y llévala de inmediato a la ceremonia.`
        ],
        next_locations: 'Living Room',
        command: '/b2',
    },
    {
        id: uuidv4(),
        location_id: 5, 
        message_index: 2, 
        next_level: false,
        output: [
            '/sendImageDadRoom'
        ],
        command: '/a1',
    },
    {
        id: uuidv4(),
        location_id: 5, 
        message_index: 2, 
        next_level: false,
        output: [
            '/send*Mmmm, no necesito nada del cuarto por el momento. Mejor voy al taller por una escultura.'
        ],
        command: '/a2',
    },
    {
        id: uuidv4(),
        location_id: 5, 
        message_index: 2, 
        next_level: false,
        output: [
            '/send*No puedo salir de casa sin la escultura. Val... ¡enfócate!'
        ],
        command: '/a3',
    },
    {
        id: uuidv4(),
        location_id: 5, 
        message_index: 2, 
        next_level: false,
        output: [
            '/sendImageKitchen'
        ],
        command: '/b2',
    },
    {
        id: uuidv4(),
        location_id: 5, 
        message_index: 2, 
        next_level: false,
        output: [
            '/sendImageKitchen',
            '/send*Pero... ¿cómo me voy a quedar en la sala? ¡Voy por la escultura!'
        ],
        command: '/b3',
    },
    {
        id: uuidv4(),
        location_id: 5, 
        message_index: 2, 
        next_level: true,
        output: [
            '/sendMapWorkshop'
        ],
        next_locations: 'Carpentry Workshop',
        command: '/b1',
    },
    //3
    {
        id: uuidv4(),
        location_id: 6, 
        message_index: 3, 
        next_level: true,
        next_locations: 'Territory between Val\'s house and Mipha\'s castle',
        output: [
            '/send*Definitivamente, ¡una obra de arte! Ahora sí vámos a la coronación.',
            '/sendMapTerritory',
        ],
        command: '/b1',
    },
    {
        id: uuidv4(),
        location_id: 6, 
        message_index: 3, 
        next_level: true,
        next_locations: 'Territory between Val\'s house and Mipha\'s castle',
        output: [
            '/send*Pues no es la mejor que he visto, pero debo irme ya si quiero llegar a tiempo. ¡A la coronación!',
            '/sendMapTerritory',
        ],
        command: '/a2',
    },
    {
        id: uuidv4(),
        location_id: 6, 
        message_index: 3, 
        next_level: true,
        next_locations: 'Territory between Val\'s house and Mipha\'s castle',
        output: [
            '/send*Meh. Esto será suficiente. Mejor me doy prisa y salgo a la coronación de una vez.',
            '/sendMapTerritory',
        ],
        command: '/a3',
    },
    {
        id: uuidv4(),
        location_id: 7, 
        message_index: 4, 
        next_level: true,
        next_locations: 'Mipha\'s Castle',
        output: [
            '/send*¡Por fin! Llegue justo a tiempo.',
            '/sendImageCastle',
            '/sendAudio4',
            '/sendAudio5',
            '/sendValPanel',
            '/sendAudio6',
            '/sendVideoBackstory',
            '/send*Mipha: Como puedes ver, es imprescendible la firma de este trato y sólo tu me puedes ayudar a salvar no sólo esta nación, sino ambas. La guerra no puede continuar.',
            '/send*Mipha: si decides unirte, necesito que hagas la atestación con tu Marca de Vida y así sellar nuestro trato.  Sólo escribe: /attestation para confirmar tu decision.',
        ],
        command: '/b1',
    },
    {
        id: uuidv4(),
        location_id: 7, 
        message_index: 4, 
        next_level: true,
        next_locations: 'Mipha\'s Castle',
        output: [
            '/send*¡Por fin! Llegue justo a tiempo.',
            '/sendImageCastle',
            '/sendAudio4',
            '/sendAudio5',
            '/sendValPanel',
            '/sendAudio6',
            '/sendVideoBackstory',
            '/send*Mipha: Como puedes ver, es imprescendible la firma de este trato y sólo tu me puedes ayudar a salvar no sólo esta nación, sino ambas. La guerra no puede continuar.',
            '/send*Mipha: si decides unirte, necesito que hagas la atestación con tu Marca de Vida y así sellar nuestro trato.  Sólo escribe: /attestation para confirmar tu decision.',
        ],
        command: '/b3',
    },
    {
        id: uuidv4(),
        location_id: 8, 
        message_index: 5,
        next_level: true,
        next_locations: 'Mipha\'s Castle',
        output: [
            '/send*Gracias por tu voto de confianza Val.',
            '/send*Te voy a encargar este collar. Tiene un pendiente especial el cual sólo tu vas a poder acceder.',
            '/send*Lastimosamente, sólo pude rescatar una parte del pendiente y hay unas piezas que hacen falta para que funcione.',
            '/send*Detrás de mi hay una puerta que lleva al Bosque de Almas.',
            `/send*'Si así lo deseas, puedes entrar y obtener unas piezas perdidas en una technología za'ionica llamada World Coin. Te ayudarán en tu largo viaje, sin embargo, hay muchas más piezas por recuperar dentro de K'naan asi que te lo dejaré a tu criterio.`,
            '/send*Sólo necesitas dar la orden de lo que decidas hacer. Puedes /entrar para ir al bosque o /verMapa.'
        ],
        command: '/attestation',
    },
    {
        id: uuidv4(),
        location_id: 8, 
        message_index: 6, 
        next_level: true,
        next_locations: 'Mipha\'s Castle',
        output: [
            '/sendMapTerritory'
        ],
        command: '/verMapa',
    },
    {
        id: uuidv4(),
        location_id: 8, 
        message_index: 6, 
        next_level: false, //next_level: true,
        //next_locations: 'Forest of Souls',
        output: [
            '/send*El bosque de almas estará disponible en la próxima actualización. Por favor, selecciona otra opción.',
            //'/worldCoinSidequest'
        ],
        command: '/entrar',
    },
    {
        id: uuidv4(),
        location_id: 8, 
        message_index: 7, 
        output: [
            '/send*No puedo ir a casa ahora. Le prometí a la reina ir a buscar las piezas de este collar.... aunque sí tengo un poco de sueño... ¡no! voy a ir por las piezas. ¿A dónde voy primero?',
        ],
        command: '/a1',
    },
    {
        id: uuidv4(),
        location_id: 8, 
        message_index: 7, 
        next_level: false, //next_level: true,
        //next_locations: 'Library',  
        output: [
            //'/send*Me encanta el olor a libros de la biblioteca. Aparte queda más cerca, vamos para allá.',
            '/send*Me encanta el olor a libros de la biblioteca. Quizás pueda ir para allá mas tarde.',

        ],
        command: '/a3',
    },
    {
        id: uuidv4(),
        location_id: 8, 
        message_index: 7, 
        next_level: false, //next_level: true,
        //next_locations: 'Fountain',  
        output: [
            //'/send*Recuerdo que cerca a mi casa hay una vieja fuente abandonada. Puedo empezar a mirar ahí. Ojalá no haya nadie...',
            '/send*Recuerdo que cerca a mi casa hay una vieja fuente abandonada. Tal vez pueda ir despues allá.',
        ],
        command: '/b1',
    },
    {
        id: uuidv4(),
        location_id: 8, 
        message_index: 7, 
        next_level: false, //next_level: true,
        //next_locations: 'Fountain',  
        output: [
            '/send*Pero ¿cómo me voy a quedar en el castillo? Tengo que avanzar. Necesito ir a buscar más piezas para el pendiente...',
        ],
        command: '/b2',
    },
    {
        id: uuidv4(),
        location_id: 8, 
        message_index: 7, 
        next_level: true,
        next_locations: 'Museum',  
        output: [
            '/send*El señor del museo siempre ha sido amable. Allá voy primero.',
            '/sendImageMuseum',
            '/sendAudio7',
            '/send*Mientras pasas por pasillos y pasillos de arte e historia, te invade un sentimiento de paz imposible de ignorar.',
            `/send*Recuerdas tus primeras veces en el museo y el señor que siempre se encontraba cerca a la fuente. Tus pasos te guían hacia allá y sin darte cuenta de repente te encuentras con una de las pocas personas que te ha extendido la mano y  mostrado un lado amable en K'naan.`,
            '/send*Curador: ¡Val! ¿qué te trae por a..... ¡Oh! ese pendiente... ¡qué pieza.. qué obra de arte la que tienes! Val ... ¿eres consciente de lo que tienes puesto?',
            '/send*Val: ¿lo reconoces?',
            '/send*Curador: Val, ¿no has notado que este collar y las marcas de esta fuente coinciden? Mira más de cerca.',
            '/send*Te acercas y notas cómo el pendiente ilumina las piezas quebradas en tres colores distintos al rededor de la fuente.',
            '/sendImageFountain1',
            `/send*Usa /answer para interactuar con la fuente.` 
        ],
        command: '/a2',
    },
    {
        id: uuidv4(),
        location_id: 13, 
        message_index: 8, 
        next_level: false,
        output: [
            '/answerMuseum',
        ],
        command: '/answer',
    },
    {
        id: uuidv4(),
        location_id: 13, 
        message_index: 9, 
        next_level: true,
        next_locations: 'Mipha\'s Castle',
        output: [
            '/sendAudio8',
            '/send*Curador: ¡Espectacular! ¡Mira lo que lograste! ¡La fuente está viva de nuevo!',
            '/send*Val: Me pregunto qué dice ... ',
            '/resultMuseum',
            'Val: Es hora de volver al castillo',
            '/send*Usa /back para regresar al castillo.'
        ],
        command: '/attestation',
    },
    {
        id: uuidv4(),
        location_id: 8, 
        message_index: 10, 
        next_level: false,
        output: [
            '/sendImageMipha2',
            '/sendAudio9',
            '/collectNft',
        ],
        command: '/back',
    },
];
