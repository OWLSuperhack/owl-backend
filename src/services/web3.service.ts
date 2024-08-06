import { ethers } from "ethers";
import TelegramBot from "node-telegram-bot-api";
const etherscanKey = process.env.ETHERSCAN_API_KEY;
import UserService from "./user.service";

const userService = new UserService();

export default class Web3Service {
  public async readIfAddressIsNew(address: string, bot: TelegramBot, chatId: string) {
    try {
      if(ethers.isAddress(address)) {
        const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${etherscanKey}`;
        const response = await fetch(url);
        if (response.status !== 200) {
          throw new Error('Error fetching data');
        }
        const data = await response.json();
        if(data.result.length === 0) {
          //TODO create the user in the database because it is a new address
          const newUser = await userService.createUser(chatId, address);
          console.log('newUser is:', newUser);
          bot.sendMessage(chatId, 'Perfect, now, send your first command to the bot, type /startGame, or type /help to see the available commands');
        } else {
          bot.sendMessage(chatId, 'This address is already in use, please create one new brand wallet address.');
        }
      } else {
        bot.sendMessage(chatId, 'Please send a correct wallet address.');
      }
    } catch (error) {
      console.log('Error on readIfAddressIsNew:', error);
      throw error;
    }
  }
}