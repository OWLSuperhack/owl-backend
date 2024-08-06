import TelegramBot from 'node-telegram-bot-api';
import * as fs from 'fs';
import * as path from 'path';

import UserService from '../services/user.service';
import Web3Service from '../services/web3.service';

const userService = new UserService();
const web3Service = new Web3Service();
export function StartBotMessageReceptor() {
  console.log('starting bot');
  
  const token = process.env.TELEGRAM_BOT_TOKEN;

  if(!token) {
    console.error('The TELEGRAM_BOT_TOKEN is required');
    process.exit(1);
  }

  const bot = new TelegramBot(token, { polling: true });

  //The structure for messages sent by the user with specific commands like /start or /help
  bot.onText(/\/start/, async (msg) => {
    try {
      const chatId = msg.chat.id;
      const userDb = await userService.getUserByTelegramId(chatId.toString());
      if (userDb) {
        //TODO
        bot.sendMessage(chatId, 'Great, this user is already created');
      }
    } catch (error: any) {
      console.log('Error on bot:', error);
      if (error.message === 'User not found') {
        const chatId = msg.chat.id;
        await sendIntroVideo(chatId.toString());
      }
    }
  });
  async function sendIntroVideo (chatId: string) {
    try {
       //TODO fetch the intro message from database
      const message = 'Welcome to OWL!!\n To start, please watch the next video and follow the instructions'
      //////////////// must be from database
      bot.sendMessage(chatId, message);
      const videoPath = path.resolve(__dirname, '../../video/intro.mp4');
      await bot.sendVideo(chatId, fs.createReadStream(videoPath), {
        caption: 'Welcome!!!',
      }).catch(err => {
        console.error('Error sending video:', err);
        bot.sendMessage(chatId, 'Error sending video, please try again later');
      });
      bot.sendMessage(chatId, 'When you finish following the instructions, please type /newAddress and send your address');
    } catch (error) {
      console.log('Error on sendIntroVideo:', error);
    }
  }

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

  bot.onText(/\/newAddress/, async (msg) => {
    try {
      const chatId = msg.chat.id;
      const parts = msg.text?.split(' ');
      const address = parts?.slice(1).join(' ');
      if (!address) {
        bot.sendMessage(chatId, 'Please send a valid address');
        return;
      }
      await web3Service.readIfAddressIsNew(address, bot, chatId.toString());
    } catch (error) {
      console.log('Error on /newAddress:', error);
      bot.sendMessage(msg.chat.id, 'There was an error processing your request.');
    }
  });

  //The structure for messages sent by the user with no specific commands, open message
  bot.on('message', async (msg) => {
    try {
      if (msg.text && msg.text.startsWith('/')) {
        return;
      }
      const chatId = msg.chat.id;
      console.log('Handling non-command message:', msg.text);  
    } catch (error: any) {
      console.log('Error on message handler:', error);
    }
  });
}