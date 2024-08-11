import TelegramBot from 'node-telegram-bot-api'

import UserService from '../services/user.service'
import Web3Service from '../services/web3.service'
import BotService from '../services/bot.service'
import MessageService from '../services/message.service'
import { generalMessages } from '../utils/messages'
import commandList from './commandList'

const userService = new UserService()
const web3Service = new Web3Service()
const botService = new BotService()
const messageService = new MessageService()
export let bot : TelegramBot

export function StartBotMessageReceptor() {
  console.log('starting bot')

  const token = process.env.TELEGRAM_BOT_TOKEN

  if (!token) {
    console.error('The TELEGRAM_BOT_TOKEN is required')
    process.exit(1)
  }

  bot = new TelegramBot(token, { polling: true })

  bot.on('message', async (msg) => {
    console.log('entering to the on message')
    try {
      if (msg.text && msg.text.startsWith('/')) {
        const commandKey = msg.text.replace('/', '').split(' ')[0];
        console.log('commandKey:', commandKey)
        if (commandList[commandKey]) {
          console.log('Processing command listed:', msg.text)
          commandList[commandKey](msg.chat.id.toString(), bot, msg)
        } else {
          console.log('Processing command:', msg.text)
          processCommand(msg.text, msg.chat.id.toString(), bot)
        }
        return
      }
      const chatId = msg.chat.id
      const userDb = await userService.getUserByTelegramId(chatId.toString())
      if (!userDb) {
        bot.sendMessage(chatId, generalMessages['error']['notRegistered'], {
          parse_mode: 'HTML',
        })
        return
      } else {
        bot.sendMessage(chatId, generalMessages['error']['followInstructions'])
      }
    } catch (error: any) {
      console.log('Error on message handler:', error)
    }
  })

  async function processCommand(
    command: string,
    chatId: string,
    bot: TelegramBot
  ) {
    try {
      const userDb = await userService.getUserByTelegramId(chatId)

      if (userDb) {
        const response = await messageService.getMessageByTelegramId(
          chatId,
          command
        )
        console.log(`response for ${command} is :`, response?.dataValues)
        if (response) {
          if (response.dataValues.output && response.dataValues.output.length > 0) {
            botService.processMultipleOutput(
              response.dataValues.output,
              bot,
              chatId
            )
          } else {
            bot.sendMessage(chatId, response.dataValues.messageText)
          }
        } else {
          bot.sendMessage(chatId, generalMessages['error']['errorGeneric'])
        }
      } else {
        botService.sendIntroVideo(chatId.toString(), bot)
      }
    } catch (error) {
      console.log('Error processing command:', error)
      bot.sendMessage(chatId, generalMessages['error']['errorGeneric'])
    }
  }
}
