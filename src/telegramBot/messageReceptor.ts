import TelegramBot from 'node-telegram-bot-api'
import * as fs from 'fs'
import * as path from 'path'

import UserService from '../services/user.service'
import Web3Service from '../services/web3.service'
import BotService from '../services/bot.service'
import MessageService from '../services/message.service'

const userService = new UserService()
const web3Service = new Web3Service()
const botService = new BotService()
const messageService  = new MessageService()

export function StartBotMessageReceptor() {
  console.log('starting bot')

  const token = process.env.TELEGRAM_BOT_TOKEN

  if (!token) {
    console.error('The TELEGRAM_BOT_TOKEN is required')
    process.exit(1)
  }

  const bot = new TelegramBot(token, { polling: true })

  bot.onText(/\/start/, async (msg) => {
    const chatId = msg.chat.id
    console.log('chatId:', chatId);
    
    const userDb = await userService.getUserByTelegramId(chatId.toString())
    console.log('userDb:', userDb);
    
    if (userDb) {
      processCommand('/start', chatId.toString())
    } else {
      const chatId = msg.chat.id
      botService.sendIntroVideo(chatId.toString(), bot)
    }
  })
  bot.onText(/\/newAddress/, async (msg) => {
    try {
      const chatId = msg.chat.id
      const parts = msg.text?.split(' ')
      const address = parts?.slice(1).join(' ')
      if (!address) {
        bot.sendMessage(chatId, 'Please send a valid address')
        return
      }
      await web3Service.readIfAddressIsNew(address, bot, chatId.toString())
    } catch (error) {
      console.log('Error on /newAddress:', error)
      bot.sendMessage(
        msg.chat.id,
        'There was an error processing your request.'
      )
    }
  })
  bot.on('message', async (msg) => {
    try {
      if (msg.text && msg.text.startsWith('/')) {
        return
      }
      const chatId = msg.chat.id
      console.log('Handling non-command message:', msg.text)
    } catch (error: any) {
      console.log('Error on message handler:', error)
    }
  })

  async function processCommand(command: string, chatId: string) {
    try {
      const response = await messageService.getMessageByTelegramId(chatId, command)
      console.log('response is : ',response);
    } catch (error) {
      
    }
  }
  // bot.onText(/\/audio/, (msg) => {
  //   const chatId = msg.chat.id

  //   const audioPath = path.resolve(__dirname, '../voice/VoiceIntro.wav')

  //   bot
  //     .sendAudio(chatId, fs.createReadStream(audioPath), {
  //       title: 'Welcome to the learning journey',
  //       performer: 'OWL Bot',
  //     })
  //     .catch((err) => {
  //       console.error('Error sending audio:', err)
  //     })
  // })


  // //The structure for messages sent by the user with no specific commands, open message
  // bot.on('sticker', (msg) => {
  //   const stickerId = msg.sticker?.file_id;
  //   console.log('Sticker file_id:', stickerId);
  //   bot.sendMessage(msg.chat.id, `Recibí un sticker con file_id: ${stickerId}`);
  // });
}
