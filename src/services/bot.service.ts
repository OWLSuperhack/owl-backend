import * as fs from 'fs'
import * as path from 'path'
import TelegramBot from 'node-telegram-bot-api'

import { generalMessages } from '../utils/messages'
import { delayTimer } from '../utils/others'
import { stickers } from '../utils/sticker'
import { getAudioPath, getImagePath, getVideoPath } from '../utils/pathUtils'
import commandList from '../telegramBot/commandList'

const audioFormat = 'mp3'
const imageFormat = 'png'
const videoFormat = 'mp4'

export default class BotService {
  constructor() {}

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
        console.log('Processing action:', action);
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
    let directMessage = ''
    try {
      if (action.includes('*')) {
        directMessage = action.split('*')[1]
        action = action.split('*')[0]
      }

      let parsedAction = action.replace('/send', '');
      parsedAction = parsedAction.replace(parsedAction.charAt(0), parsedAction.charAt(0).toLowerCase());

      if (action.includes('Audio')) {
        await this.sendAudio(parsedAction, chatId, bot)
      } else if (action.includes('Image') || action.includes('Map')) {
        await this.sendImage(parsedAction, chatId, bot)
      } else if (action.includes('Video')) {
        await this.sendVideo(parsedAction, chatId, bot)
      } else if (action.includes('send')) {
        await bot.sendMessage(chatId, directMessage)
      } else {
        const commandKey = action.replace('/', '').split(' ')[0];
        if (commandList[commandKey]) {
          console.log('Processing command listed:', action)
          await commandList[commandKey](chatId, bot, action)
        } else {
          console.log('Processing command:', action)
          await bot.sendMessage(chatId, `Entering to the else block with command ${action}`)
        }
      }
    } catch (error) {
      console.log('Error on executeAction:', error)
    }
  }
  private async sendAudio(audio: string, chatId: string, bot: TelegramBot) {
    try {
      const audioPath = getAudioPath(`${audio}.${audioFormat}`)
      await bot.sendAudio(chatId, fs.createReadStream(audioPath), {
        title: audio,
        performer: 'OWL Bot',
      })
    } catch (error) {
      console.log('Error on sendAudio:', error)
    }
  }
  private async sendImage(
    prefix: string,
    chatId: string,
    bot: TelegramBot
  ) {
    try {
      const imagePath = getImagePath(`${prefix}.${imageFormat}`)
      await bot.sendPhoto(chatId, fs.createReadStream(imagePath), {
        caption: `${prefix}`,
      })
    } catch (error) {
      console.log('Error on sendImage:', error)
    }
  }

  public async sendVideo(video: string, chatId: string, bot: TelegramBot) {
    try {
      const videoPath = getVideoPath(`${video}.${videoFormat}`)
      console.log('videoPath:', videoPath)
      await bot
        .sendVideo(chatId, fs.createReadStream(videoPath), {})
        .catch((err) => {
          bot.sendMessage(chatId, generalMessages['error']['errorIntro'])
        })
    } catch (error) {
      console.log('Error on sendIntroVideo:', error)
    }
  }
}
