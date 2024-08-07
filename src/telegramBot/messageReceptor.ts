import TelegramBot from 'node-telegram-bot-api'
import * as fs from 'fs'
import * as path from 'path'

import UserService from '../services/user.service'
import Web3Service from '../services/web3.service'
import BotService from '../services/bot.service'
import MessageService from '../services/message.service'
import { generalMessages } from '../utils/messages'

const userService = new UserService()
const web3Service = new Web3Service()
const botService = new BotService()
const messageService = new MessageService()

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
    processCommand('/start', chatId.toString(), bot)
  })
  bot.onText(/\/test/, async (msg) => {
    const chatId = msg.chat.id
    processCommand('/test', chatId.toString(), bot)
  })

  bot.onText(/\/newAddress/, async (msg) => {
    try {
      const chatId = msg.chat.id
      const userDb = await userService.getUserByTelegramId(chatId.toString())
      if (userDb) {
        bot.sendMessage(chatId, generalMessages['error']['alreadyRegistered'])
        return
      }
      const parts = msg.text?.split(' ')
      const address = parts?.slice(1).join(' ')
      if (!address) {
        bot.sendMessage(chatId, generalMessages['error']['invalidAddress'])
        return
      }
      await web3Service.readIfAddressIsNew(address, bot, chatId.toString())
    } catch (error) {
      console.log('Error on /newAddress:', error)
      bot.sendMessage(msg.chat.id, generalMessages['error']['errorGeneric'])
    }
  })
  bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id
    const helpMessage = generalMessages['commands']
    bot.sendMessage(chatId, helpMessage)
  })
  bot.on('message', async (msg) => {
    try {
      if (msg.text && msg.text.startsWith('/')) {
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
          if (response.dataValues.output.length > 0) {
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
