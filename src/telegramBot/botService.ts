import TelegramBot from 'node-telegram-bot-api';
import * as fs from 'fs';
import * as path from 'path';


export function StartBot() {
  console.log('starting bot');
  
  const token = process.env.TELEGRAM_BOT_TOKEN;

  if(!token) {
    console.error('The TELEGRAM_BOT_TOKEN is required');
    process.exit(1);
  }

  const bot = new TelegramBot(token, { polling: true });

  bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hello, here it starts your learning journey'); //TODO fetch intro message from database
  });

  bot.onText(/\/audio/, (msg) => {
    const chatId = msg.chat.id;
  
    const audioPath = path.resolve(__dirname, '../voice/VoiceIntro.wav');
  
    bot.sendAudio(chatId, fs.createReadStream(audioPath), {
      title: 'Welcome to the learning journey',
      performer: 'OWL Bot',
    }).catch(err => {
      console.error('Error sending audio:', err);
    });
  });
}