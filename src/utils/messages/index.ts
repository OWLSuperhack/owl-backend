export const generalMessages = {
  welcome:
    'Bienvenido a OWL!\n\nPara poder empezar, por favor pónle atención al siguiente video:',
  intro:
    'Paso siguiente: Registrar tu dirección de billetera\nDespués de seguir las instrucciones, envía el comando /newAddress seguido de la dirección de tu billetera que copiaste de Coinbase Wallet.\n🔍 Ejemplo: /newAddress 0x7f3c8991CbdFC3e90485190423A0B73F8F5C0678\nEsto nos ayudará a registrar tu marca de vida y comenzar esta aventura. 🚀',
  startMsg: '¡Perfecto! ahora envía tu primer comando y escribe: /start',
  sendMapValRoom: '¿Qué quieres hacer? \n',
  sendMapDownstairs: 'Voy a buscar a papá. Debe estar en la sala.',
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
