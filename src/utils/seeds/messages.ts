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
        next_level: true,
        output: [
            '/sendMapWorkshop'
        ],
        next_locations: 'Carpentry Workshop',
        command: '/b1',
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
    }
];
