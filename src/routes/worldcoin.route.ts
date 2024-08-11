import { Router, Request, Response, NextFunction } from 'express';
import axios from 'axios';
import { config } from '../config/config';
import TelegramBot from 'node-telegram-bot-api';
import { bot } from '../telegramBot/messageReceptor';
import UserService from '../services/user.service';

const route = Router();
const userService = new UserService();

export default (app: Router) => {
    app.use('/worldcoin', route);

    route.get('/authorize',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const url = `${config.worldcoin.url}/authorize?state=${5058531629}&redirect_uri=${encodeURI(config.worldcoin.callbackUrl)}&response_type=code&scope=openid&client_id=${config.worldcoin.appId}`;
            return res.status(200).json(url);
        }
        catch (e) {
            next(e);
        }
    });

    route.get('/callback',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const code = req.query.code as string;
            const url = `${config.worldcoin.url}/token`;
            const data = new URLSearchParams()
            data.append('code', code)
            data.append('grant_type', 'authorization_code')
            data.append('redirect_uri', config.worldcoin.callbackUrl)
            const response = await axios.post(url, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Basic ${btoa(`${config.worldcoin.appId}:${config.worldcoin.clientSecret}`)}`, 
                },
            });

            const urlUser = `${config.worldcoin.url}/userinfo`;
            const responseUser = await axios.post(urlUser, {},{
                headers: {
                    Authorization: `Bearer ${response.data.access_token}`,
                },
            });

            const chatId = req.query.state as TelegramBot.ChatId;

            const user = await userService.getUserByTelegramId(chatId.toString());
            if (!user) {
                await bot.sendMessage(chatId, 'Algo ha salido mal con el proceso, intenta nuevamente');
                return res.status(200).json({message: 'Todo ha salido bien, ya puedes volver a telegram'});
            }
            await user?.update({worldcoinId: responseUser.data.sub});
            await bot.sendMessage(chatId, '¡Felicidades! Tu marca de vida Worldcoin ha sido registrada. Tu registro es: ' + responseUser.data.sub);
            await bot.sendMessage(chatId, 'Mipha: ¡Sabía que había escogido bien! Ahora tienes que /verMapa para seguir tu camino. Que la suerte esté de tu lado.');
            
            return res.status(200).json({message: 'Todo ha salido bien, ya puedes volver a telegram'});
        }
        catch (e) {
            next(e);
        }
    });


}
