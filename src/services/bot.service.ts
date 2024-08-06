import * as fs from 'fs'
import * as path from 'path'
import TelegramBot from 'node-telegram-bot-api'

import { generalMessages } from '../utils/messages'
import { delayTimer } from '../utils/others'
import { stickers } from '../utils/sticker'
import { getVideoPath } from '../utils/pathUtils'

export default class BotService {
  public async sendIntroVideo(chatId: string, bot: TelegramBot) {
    try {
      bot.sendMessage(chatId, generalMessages['welcome'])
      delayTimer(500)
      bot.sendSticker(chatId, stickers['cool']).then((sentMessage) => {
        setTimeout(() => {
          bot.deleteMessage(chatId, sentMessage.message_id);
        }, 3000);
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
}
