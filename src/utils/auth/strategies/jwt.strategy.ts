import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { config } from '../../../config/config';

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
}

const JwtStrategy = new Strategy(options, (payload: any, done: VerifiedCallback) => {
  return done(null, payload);
});

export default JwtStrategy;
