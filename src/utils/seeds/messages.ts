import { v4 as uuidv4 } from 'uuid';
import { MessageAttributes } from "../../db/models/message.model";

export const messagesValRoom = [
    { 
        id: uuidv4(),
        location_id: 1, 
        message_index: 0, 
        message_text: 'What do you want to do?',
        next_level: false,
        output: ['/sendAudio1', '/sendAudio2', '/insertImageVal1', '/sendAudio3', '/sendMapValRoom'],
        command: '/start',
    },
    {
        id: uuidv4(),
        location_id: 1, 
        message_index: 0, 
        message_text: "No me puedo quedar en cama. Debería ir a ver qué necesita papá.",
        next_level: false,
        command: '/a1',
    },
    {
        id: uuidv4(),
        location_id: 1, 
        message_index: 0, 
        message_text: "¡AUCH!\nAntes de poder pensar qué querrá papá, te tropiezas con la alfombra y peleas contra la gravedad hasta terminar en la puerta y recuperar tu balance.",
        next_level: false,
        command: '/a2',
    },
    {
        id: uuidv4(),
        location_id: 1, 
        message_index: 0, 
        message_text: "Voy a buscar a papá. Debe estar en la sala.",
        next_level: true,
        next_locations: 'Inside the house',
        output: ['/sendMapDownstairs'],
        command: '/a3',
    },
    {
        id: uuidv4(),
        location_id: 1, 
        message_index: 0, 
        message_text: "No debería salir de casa todavía. ¿Dónde está papá?",
        next_level: false,
        command: '/a4',
    },
    {
        id: uuidv4(),
        location_id: 1, 
        message_index: 0, 
        message_text: "",
        next_level: false,
        output: ['/sendImageWorkshopEmpty'],
        command: '/b1',
    },
    {
        id: uuidv4(),
        location_id: 1, 
        message_index: 0, 
        message_text: "",
        next_level: false,
        output: ['/sendImageKitchen'],
        command: '/b2',
    },
    {
        id: uuidv4(),
        location_id: 2, 
        message_index: 1, 
        message_text: "",
        next_level: false,
        output: ['/sendImageWorkshopEmpty'],
        command: '/b1',
    },
    {
        id: uuidv4(),
        location_id: 2, 
        message_index: 1, 
        message_text: "",
        next_level: false,
        output: ['/sendImageDadRoom'],
        command: '/a1',
    },
    {
        id: uuidv4(),
        location_id: 2, 
        message_index: 1, 
        message_text: "No puedo regresar a mi cuarto todavia. Debo encontrar a papá.",
        next_level: false,
        command: '/a2',
    },
    {
        id: uuidv4(),
        location_id: 2, 
        message_index: 1, 
        message_text: "No debería salir de casa todavía. ¿Dónde está papá?",
        next_level: false,
        command: '/a3',
    },
    {
        id: uuidv4(),
        location_id: 2, 
        message_index: 1, 
        message_text: `Gracias por llegar tan rápido, Val.Tengo algo importante que encargarte.
                    \nHoy es la coronación de la nueva reina, Mipha, y necesitamos llevarle un regalo de parte nuestra.
                    \nEntra al taller, escoge la escultura que más te guste y llévala de inmediato a la ceremonia.`,
        next_level: true,
        output: ['/sendImageKitchen', '/sendMapDownstairs'],
        next_locations: 'Kitchen',
        command: '/b2',
    },
    {
        id: uuidv4(),
        location_id: 4, 
        message_index: 2, 
        message_text: "",
        next_level: true,
        output: ['/sendMapWorkshop'],
        next_locations: 'Carpentry Workshop',
        command: '/b1',
    },
    {
        id: uuidv4(),
        location_id: 4, 
        message_index: 2, 
        message_text: "",
        next_level: false,
        output: ['/sendImageDadRoom'],
        command: '/a1',
    },
    {
        id: uuidv4(),
        location_id: 4, 
        message_index: 2, 
        message_text: "Mmmm, no necesito nada del cuarto por el momento. Mejor voy al taller por una escultura.",
        next_level: false,
        command: '/a2',
    },
    {
        id: uuidv4(),
        location_id: 4, 
        message_index: 2, 
        message_text: "No puedo salir de casa sin la escultura. Val... ¡enfócate!",
        next_level: false,
        command: '/a3',
    },
    {
        id: uuidv4(),
        location_id: 4, 
        message_index: 2, 
        message_text: "",
        next_level: false,
        output: ['/sendImageKitchen'],
        command: '/b2',
    },
    {
        id: uuidv4(),
        location_id: 4, 
        message_index: 2, 
        message_text: "Pero... ¿cómo me voy a quedar en la sala? ¡Voy por la escultura!",
        next_level: false,
        output: ['/sendImageKitchen'],
        command: '/b3',
    }
];
