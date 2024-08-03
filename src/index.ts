import express, { Application, Request, Response } from 'express';
import {  errorHandler, boomErrorHandler, ormErrorHandler, logErrors, logUndefinedRoutes } from './middlewares/error.handler';
import { config } from './config/config';
import routes from './routes';
import cors from 'cors';
import passport from 'passport';
import JwtStrategy from './utils/auth/strategies/jwt.strategy';

passport.use(JwtStrategy);

const app: Application = express();
const port = config.port;
app.use(express.json());

const corsOptions = {
  origin: '*'
};

app.use(cors(corsOptions));

routes(app);

app.use(logUndefinedRoutes);
app.use(logErrors);
app.use(ormErrorHandler)
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});