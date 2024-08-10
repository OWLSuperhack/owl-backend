import TelegramBot from "node-telegram-bot-api"
import UserService from "../services/user.service"
import { generalMessages } from '../utils/messages'
import MessageService from "../services/message.service"
import Web3Service from "../services/web3.service"
import AttestationService, { AttestationData } from "../services/attestation.service"
import { AttestationAttributes } from "../db/models/attestation.model"
import { stickers } from "../utils/sticker"
import ActivityService from "../services/activity.service"
import BotService from "../services/bot.service"

const userService = new UserService()
const web3Service = new Web3Service()
const messageService = new MessageService()
const attestationService = new AttestationService()
const activityService = new ActivityService()


exports.newAddress = async function (chatId: string, bot: TelegramBot, msg: TelegramBot.Message) {
    try {
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
}

exports.help = async function (chatId: string, bot: TelegramBot, msg: TelegramBot.Message) {
    const helpMessage = generalMessages['commands']
    bot.sendMessage(chatId, helpMessage)
}

exports.delete = async function (chatId: string, bot: TelegramBot, msg: TelegramBot.Message) {
    try {
        const address = msg.text?.split(' ')[1] || '0x0'
        const result = await userService.deleteUser(address);
        if (result) {
          bot.sendMessage(chatId, 'User deleted')
        } else {
          bot.sendMessage(chatId, 'Something went wrong trying to delete the user')
        }
    } catch (error) {
    console.log('Error on /delete:', error)
    bot.sendMessage(msg.chat.id, generalMessages['error']['errorGeneric'])
    }
}

exports.submitAttestation = async function (chatId: string, bot: TelegramBot, msg: TelegramBot.Message) {
    try {
      await bot. sendMessage(chatId, stickers['thinking'])
      const user = await userService.getUserByTelegramId(chatId);
      if (!user) {
        bot.sendMessage(chatId, generalMessages['error']['notRegistered'])
        return
      }
      
      const payload : AttestationData = {
        id: chatId,
        index: user.dataValues.currentMessageIndex,
        location: user.dataValues.currentLocation,
        address: user.dataValues.address,
        data: '0x'
      }
      const result = await attestationService.attestMilestone(payload);
      const createUserAttest : AttestationAttributes = {
        address: result.address,
        id: chatId,
        userId: user.dataValues.id,
        uuid: result.newAttestationUID,
        location: result.attestData.find((data) => data.name === 'location')?.value || '',
        data: result.attestData.find((data) => data.name === 'data')?.value || '',
        index: parseInt(result.attestData.find((data) => data.name === 'index')?.value || '0'),
      }

      const message = await userService.createAttestation(chatId, createUserAttest);
      if (message) {
        await bot.sendMessage(chatId, 'Felicitaciones por tu nueva attestation, su UUID es: ' + result.newAttestationUID);
      } else {
        await bot.sendMessage(chatId, 'Algo salio mal creando la attestation');
      }
      } catch (error) {
        console.log('Error on /attestation:', error)
        bot.sendMessage(msg.chat.id, generalMessages['error']['errorGeneric'])
      }
}

exports.deleteAccount = async function (chatId: string, bot: TelegramBot, msg: TelegramBot.Message) {
    try {
        const address = msg.text?.split(' ')[1] || '0x0'
        const result = await userService.deleteUser(address);
        if (result) {
          bot.sendMessage(chatId, 'User deleted')
        } else {
          bot.sendMessage(chatId, 'Something went wrong trying to delete the user')
        }
    } catch (error) {
    console.log('Error on /delete:', error)
    bot.sendMessage(msg.chat.id, generalMessages['error']['errorGeneric'])
    }
}

exports.answer = async function (chatId: string, bot: TelegramBot, msg: TelegramBot.Message) {
    try {
        const user = await userService.getUserByTelegramId(chatId);
        if (!user) {
          bot.sendMessage(chatId, generalMessages['error']['notRegistered'])
          return
        }
        const parts = msg.text?.split(' ')
        const answer = parts?.slice(1).join(' ')
        console.log("answer", answer)
        if (!answer) {
          bot.sendMessage(chatId, "Debes ingresar una respuesta")
          return
        }
        const result = await activityService.getAnwswerEnglish(answer)
        if (result) {
          await userService.registerAnswer(chatId, answer);
          const decisions = await userService.getUserAnswers(chatId);
          if (decisions.count >= 3) {
            await userService.UpdateUserProgress(chatId, user.dataValues.currentLocation);
            bot.sendMessage(chatId, "Has completado la actividad, guarda tu progreso con /attestation")

          } else {
            bot.sendMessage(chatId, "La fuente esta reaccionando, lo haces bien, continua enviando respuestas")
          }
        } else {
          bot.sendMessage(chatId, "No parece que surta efecto, intenta con otra respuesta")
        }
    } catch (error) {
        console.log('Error on /answerMuseum:', error)
        bot.sendMessage(msg.chat.id, generalMessages['error']['errorGeneric'])
    }
}

const commandList : { [key: string]: any } = {
    newAddress: exports.newAddress,
    help: exports.help,
    submitAttestation: exports.submitAttestation,
    delete: exports.delete,
    answer: exports.answer,
} 

export default commandList;