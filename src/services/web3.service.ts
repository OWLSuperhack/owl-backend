import { ethers } from 'ethers'
import TelegramBot from 'node-telegram-bot-api'
const etherscanKey = process.env.ETHERSCAN_API_KEY
import UserService from './user.service'
import { generalMessages } from '../utils/messages'
import { config } from '../config/config'
import { stickers } from '../utils/sticker'

const userService = new UserService()

export default class Web3Service {
  public async readIfAddressIsNew(
    address: string,
    bot: TelegramBot,
    chatId: string
  ) {
    try {
      if (ethers.isAddress(address)) {
        const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${etherscanKey}`
        const response = await fetch(url)
        if (response.status !== 200) {
          throw new Error('Error fetching data')
        }
        const data = await response.json()
        if (data.result.length === 0) {
          await bot. sendMessage(chatId, stickers['thinking'])
          await bot.sendMessage(chatId, 'Procesando...')
          const creationResonse = await userService.createUser(chatId, address)
          if (creationResonse && creationResonse.nft)
          {
            await bot.sendMessage(
              chatId, 
              `Genial! Ya registraste tu dirección ${address} y recibiste tu NFT con el que podreas ver tu progreso en el juego.
              \n Para ver tu nft sigue este link:\n${config.nft.openSeaUrl}${creationResonse.nft.tokenId}
              \n Usa /start para comenzar a jugar!`
            )
          } else {
            bot.sendMessage(
              chatId,
              generalMessages['error']['errorGeneric']
            )
          }
        } else {
          bot.sendMessage(
            chatId,
            generalMessages['error']['addressInUse']
          )
        }
      } else {
        bot.sendMessage(chatId, generalMessages['error']['invalidAddress'])
      }
    } catch (error) {
      console.log('Error on readIfAddressIsNew:', error)
      throw error
    }
  }
}
