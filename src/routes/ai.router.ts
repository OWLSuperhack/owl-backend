import { Router, Request, Response, NextFunction } from 'express';
import AiService from '../services/ai.service';

const route = Router();
const aiService = new AiService();

export default (app: Router) => {
  app.use('/ai', route);

  route.get('/ping', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ message: 'pong' });
  });
}