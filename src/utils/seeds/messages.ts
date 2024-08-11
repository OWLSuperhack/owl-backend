import { v4 as uuidv4 } from 'uuid';
import { config } from '../../config/config';

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
            `/send*La noche era lluviosa y fría como cualquier otra noche de invierno en K'naan.`,
            '/send*Nos encontramos en un segundo piso de una casa campesina y acogedora donde el silencio no deja escapar sonido alguno; excepto por lo que parecen ser protestas de alguien incómodo mientras duerme.',
            '/send*No se encuentra bien.',
            '/send*Gira y patea cobijas como si estuviera viviendo en una realidad alterna (no muy placentera)  carente de un vínculo con su cuerpo y de este mundo.',
            '/send*Val despierta en un estado de agitación y no logra distinguir aún si lo que acaba de vivir era un recuerdo o una pesadilla.',
            '/send*Despejando su mente, ya todo cobra sentido otra vez.',
            '/send*Respira profundo.',
            '/send*Cuenta cuatro segundos al inhalar y otros cuatro al exhalar. ',
            '/send*Sientes como tu corazón lentamente baja de revoluciones y tu olfato percibe el inconfundible olor a lluvia levantando tierra con el golpe de cada gota.',
            '/send*Eso es lo último que necesitabas para volver a habitar tu cuerpo y te das cuenta que TÚ, así es.. TÚ eres Val.',
            '/sendImageVal1',
            '/sendAudio3',
            '/send*Tu atención se atrae al sonido de la voz de tu papá como tratando de sintonizar una estación de radio que no sea ruido blanco. Desde el primer piso oyes la voz de Papá llamándote.',
            '/sendMapValRoom',
            '/send*¿Qué quieres hacer?'
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
    //1
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
        next_level: true,
        output: [
            '/sendMapDownstairs',
            `/send*Gracias por llegar tan rápido, Val.Tengo algo importante que encargarte.
            \nHoy es la coronación de la nueva reina, Mipha, y necesitamos llevarle un regalo de parte nuestra.
            \nEntra al taller, escoge la escultura que más te guste y llévala de inmediato a la ceremonia.`
        ],
        next_locations: 'Living Room',
        command: '/b3',
    },
    //2
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
        command: '/a1',
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
    //4 ...
    {
        id: uuidv4(),
        location_id: 7, 
        message_index: 4, 
        next_level: false,
        output: [
            '/send*No puedo quedarme en casa ahora. Debo llevar la escultua',
        ],
        command: '/a1',
    },
    {
        id: uuidv4(),
        location_id: 7, 
        message_index: 4, 
        next_level: false,
        output: [
            '/send*El museo es un lugar tranquilo. Tal vez pueda ir allá despues.',
 
        ],
        command: '/a2',
    },
    {
        id: uuidv4(),
        location_id: 7, 
        message_index: 4, 
        next_level: false,
        output: [
            '/send*Me encanta el olor a libros de la biblioteca. Quizás pueda ir para allá mas tarde.',

        ],
        command: '/a3',
    },
    {
        id: uuidv4(),
        location_id: 7, 
        message_index: 4, 
        next_level: false,
        output: [
            '/send*Recuerdo que cerca a mi casa hay una vieja fuente abandonada. Tal vez pueda ir despues allá.',
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
            '/send*Estás entrando por la puerta principal del castillo y surgen recuerdos de cuando tu eras el objetivo de cada chiste en el colegio.',
            `/send*No es fácil ser diferente en un mundo tan hostil como el de k'naan`,
            '/send*Tu respiración se agita al ver tantas personas. Sabes que aunque tengas bien puesta tu cubrimenta, no debes dejar mostrar tu Marca de Vida. Es lo que ha hecho que todos te miren, señalen y rían como lo han hecho todos estos años.',
            '/send*Sigues los pasos de quienes traen regalos para la reina y empiezas a dejarte llevar y deslumbrar con cada decor, juego de luces y piezas de arte a tu alrededor.',
            '/send*Por eso no lo viste.',
            '/sendAudio5',
            '/send*No viste al niño corriendo cuando pisó tu manto y te dejó sin forma de esconderte.',
            '/sendImageValPanel',
            '/send*Todo va pasando muy rápido',
            '/send*Se acelera tu corazón.',
            '/send*Ya sabes que te vieron y, como si no fuera suficiente, estás a plena luz de la luna enfatizando aún más las marcas que recorren por tu cuerpo.',
            '/send*En un cerrar y abrir de ojos te rodea, incluso, el grupo élite de protección de la corona ¡y te cubre la cabeza entera!',
            '/send*Has vivido con racismo toda tu vida pero esta es la primera vez que sientes un desprecio tan público y el hecho de tener tu Marca de Vida en la piel ¡no te hace un peligro para la sociedad! Es absurdo y te llenas de ira pero, en el fondo, es difícil ignorar el miedo.',
            '/send*El sonido de las persona va disminuyendo rápidamente y tus pasos tropiezan tratando de seguirles el ritmo sin poder ver nada.',
            '/send*Varios tramos de escalera despues y terminas con tus rodillas sobre un piso frio por un tiempo. Cuando te descubren la cabeza, ves a la reina recien coranada, en frente tuyo .',
            '/sendVideoBackstory',
            '/send*Mipha: Como puedes ver, es imprescendible la firma de este trato y sólo tu me puedes ayudar a salvar no sólo esta nación, sino ambas. La guerra no puede continuar.',
            '/send*Mipha: si decides unirte, necesito que hagas la atestación con tu Marca de Vida y así sellar nuestro trato.  Sólo escribe: /attestation para confirmar tu decision.',
        ],
        command: '/b2',
    },
    //5
    {
        id: uuidv4(),
        location_id: 8, 
        message_index: 5,
        next_level: true,
        next_locations: 'Mipha\'s Castle',
        output: [
            '/submitAttestation',
            '/send*Gracias por tu voto de confianza Val.',
            '/send*Te voy a encargar este collar. Tiene un pendiente especial el cual sólo tu vas a poder acceder.',
            '/send*Lastimosamente, sólo pude rescatar una parte del pendiente y hay unas piezas que hacen falta para que funcione.',
            '/send*Detrás de mi hay una puerta que lleva al Bosque de Almas.',
            `/send*Si así lo deseas, puedes entrar y obtener unas piezas perdidas en una technología za'ionica llamada World Coin. Te ayudarán en tu largo viaje, sin embargo, hay muchas más piezas por recuperar dentro de K'naan asi que te lo dejaré a tu criterio.`,
            '/send*Sólo necesitas dar la orden de lo que decidas hacer. Puedes /entrar para ir al bosque o /verMapa.'
        ],
        command: '/attestation',
    },
    //6
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
        next_level: false,
        output: [
            '/sendAudio10',
            `/processStartWorldcoin`,
        ],
        command: '/entrar',
    },
    //7
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
        next_level: false,
        output: [
            '/send*Me encanta el olor a libros de la biblioteca. Quizás pueda ir para allá mas tarde.',

        ],
        command: '/a3',
    },
    {
        id: uuidv4(),
        location_id: 8, 
        message_index: 7, 
        next_level: false,
        output: [
            '/send*Recuerdo que cerca a mi casa hay una vieja fuente abandonada. Tal vez pueda ir despues allá.',
        ],
        command: '/b1',
    },
    {
        id: uuidv4(),
        location_id: 8, 
        message_index: 7, 
        next_level: false,
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
            '/sendImageFountainQuest',
            `/send*Usa /answer para interactuar con la fuente.` 
        ],
        command: '/a2',
    },
    //8
    //9
    {
        id: uuidv4(),
        location_id: 13, 
        message_index: 9, 
        next_level: true,
        next_locations: 'Mipha\'s Castle',
        output: [
            '/submitAttestation',
            '/sendAudio8',
            '/send*Curador: ¡Espectacular! ¡Mira lo que lograste! ¡La fuente está viva de nuevo!',
            '/sendImageFountain',
            '/send*Val: Me pregunto qué dice ... ',
            '/resultMuseum',
            '/send*Val: Es hora de volver al castillo',
            '/send*Usa /back para regresar al castillo.'
        ],
        command: '/attestation',
    },
    {
        id: uuidv4(),
        location_id: 8, 
        message_index: 10, 
        next_level: true,
        next_locations: 'Mipha\'s Castle',
        output: [
            '/sendImageMipha2',
            '/sendAudio9',
            '/submitAttestation',
        ],
        command: '/back',
    },
];
