import * as fs from 'fs'
import * as path from 'path'
import TelegramBot from 'node-telegram-bot-api'

import { generalMessages } from '../utils/messages'
import { delayTimer } from '../utils/others'
import { stickers } from '../utils/sticker'
import { getAudioPath, getImagePath, getVideoPath } from '../utils/pathUtils'

const audioFormat = 'wav'
const imageFormat = 'png'

export default class BotService {
  public async sendIntroVideo(chatId: string, bot: TelegramBot) {
    try {
      bot.sendMessage(chatId, generalMessages['welcome'])
      delayTimer(500)
      bot.sendSticker(chatId, stickers['cool']).then((sentMessage) => {
        setTimeout(() => {
          bot.deleteMessage(chatId, sentMessage.message_id)
        }, 3000)
      })
      const videoPath = getVideoPath('intro.mp4')
      console.log('videoPath:', videoPath)
      await bot
        .sendVideo(chatId, fs.createReadStream(videoPath), {})
        .catch((err) => {
          bot.sendMessage(chatId, generalMessages['error']['errorIntro'])
        })
      delayTimer(500)
      bot.sendMessage(chatId, generalMessages['intro'])
    } catch (error) {
      console.log('Error on sendIntroVideo:', error)
    }
  }
  public async processMultipleOutput(
    actions: string[],
    bot: TelegramBot,
    chatId: string
  ) {
    try {
      for (const action of actions) {
        await this.executeAction(action, bot, chatId)
      }
    } catch (error) {
      console.log('Error on processMultipleOutput:', error)
    }
  }
  private async executeAction(
    action: string,
    bot: TelegramBot,
    chatId: string
  ) {
    try {
      let messageError = ''
      if (action.includes('*')) {
        action = action.split('*')[0]
        messageError = action.split('*')[1]
      }
      switch (action) {
        case '/sendAudio1':
          await this.sendAudio(1, chatId, bot)
          break
        case '/sendAudio2':
          await this.sendAudio(2, chatId, bot)
          break
        case '/sendAudio3':
          await this.sendAudio(3, chatId, bot)
          break
        case '/insertImageVal1':
          await this.sendImage('imageVal', '1', chatId, bot)
          break
        case '/sendMapValRoom':
          await bot.sendMessage(chatId, generalMessages['sendMapValRoom']) //TODO change to new logic
          await this.sendImage('mapVal', 'Room', chatId, bot)
          break
        case '/sendImageWorkshopEmpty':
          await this.sendImage('workshop', 'Empty', chatId, bot)
          break
        case '/sendImageKitchen':
          await this.sendImage('kitch', 'en', chatId, bot)
          break
        case '/sendMapDownstairs':
          await bot.sendMessage(chatId, generalMessages['sendMapDownstairs']) //TODO change to new logic
          await this.sendImage('map', 'Downstairs', chatId, bot)
          break
        case '/error':
          await bot.sendMessage(chatId, messageError)
          break
        default:
          break
      }
    } catch (error) {
      console.log('Error on executeAction:', error)
    }
  }
  private async sendAudio(index: number, chatId: string, bot: TelegramBot) {
    try {
      const audioPath = getAudioPath(`audio${index}.${audioFormat}`)
      await bot.sendAudio(chatId, fs.createReadStream(audioPath), {
        title: `Audio ${index}`,
        performer: 'OWL Bot',
      })
    } catch (error) {
      console.log('Error on sendAudio:', error)
    }
  }
  private async sendImage(
    prefix: string,
    index: string,
    chatId: string,
    bot: TelegramBot
  ) {
    try {
      const imagePath = getImagePath(`${prefix}${index}.${imageFormat}`)
      await bot.sendPhoto(chatId, fs.createReadStream(imagePath), {
        caption: `${prefix} ${index}`,
      })
    } catch (error) {
      console.log('Error on sendImage:', error)
    }
  }
}
