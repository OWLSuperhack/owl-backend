import { Application, Router } from 'express';
import worldcoinRoute from './worldcoin.route';

export default (app : Application) => {
    const router = Router();
    app.use('/api', router);
    worldcoinRoute(router);

}