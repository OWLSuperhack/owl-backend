import { Application, Router } from 'express';
import aiRouter from './ai.router';


export default (app : Application) => {
    const router = Router();
    app.use('/api', router);
    aiRouter(router);
}