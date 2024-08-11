import { Router, Request, Response, NextFunction } from 'express';
import axios from 'axios';
import { config } from '../config/config';

const route = Router();
//authorize?redirect_uri=https%3A%2F%2Fdocs.worldcoin.org%2Ftry-callback&response_type=code&scope=openid+profile+email&client_id=app_ce4cb73cb75fc3b73b71ffb4de178410'

export default (app: Router) => {
    app.use('/worldcoin', route);

    route.get('/authorize',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const url = `${config.worldcoin.url}/authorize?redirect_uri=${encodeURI(config.worldcoin.callbackUrl)}&response_type=code&scope=openid&client_id=${config.worldcoin.appId}`;
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

            //Request user info
            const urlUser = `${config.worldcoin.url}/userinfo`;
            const responseUser = await axios.post(urlUser, {},{
                headers: {
                    Authorization: `Bearer ${response.data.access_token}`,
                },
            });

            return res.status(200).json(responseUser.data.sub);
        }
        catch (e) {
            next(e);
        }
    });


}
