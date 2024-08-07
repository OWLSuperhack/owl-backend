export const generalMessages = {
  welcome:
    'Bienvenido a OWL!\nPara poder empezar, por favor pónle atención al siguiente video:',
  intro:
    'Cuando termines de ver y seguir las instrucciones, escribe y envía /newAddress seguido de tu nueva dirección de billetera.',
  startMsg: '¡Perfecto! ahora envía tu primer comando y escribe: /start',
  error: {
    errorGeneric: 'Error, por favor intenta de nuevo más tarde.',
    errorIntro:
      'Error enviando el video, por favor intenta de nuevo más tarde.',
    alreadyRegistered: 'Ya has registrado tu dirección.',
    invalidAddress: 'Por favor envía una dirección válida.',
    addressInUse: 'Esta dirección ya está en uso, por favor crea una nueva.',
    notRegistered:
      'Ups! Aún necesitamos un número de wallet nuevo antes de empezar. Recuerda que esto se convierte en tu Marca de Vida y <b>cada jugador</b> necesita ésto para poder avanzar en el juego',
    followInstructions: "Por favor sigue las instrucciones dadas previamente.",
  },
  commands: `
      Lista de comandos disponibles:
      /start - Inicia la conversación con el bot
      /newAddress - Registra tu dirección de billetera
      /help - Muestra esta ayuda
    `,
}
