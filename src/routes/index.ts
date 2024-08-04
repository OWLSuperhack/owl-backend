import { Application, Router } from 'express';


export default (app : Application) => {
    const router = Router();
    app.use('/api', router);
}