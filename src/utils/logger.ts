import winston from 'winston';
import {config} from '../config/config';
import 'winston-daily-rotate-file';
import path from 'path';

const transports = [];

const fileTransport = new winston.transports.DailyRotateFile({
  filename: 'application-%DATE%.log',
  dirname: path.resolve(__dirname, '../../logs'),
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.json()
  )
});


if(process.env.NODE_ENV !== 'development') {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.json()
      ),
    }),
    fileTransport
  );
} else {
  transports.push(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss',
        }),
        winston.format.json()
      ),
    }),
    fileTransport
  )
}

const LoggerInstance = winston.createLogger({
  level: config.logs.level,
  levels: winston.config.npm.levels,
  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.errors({ stack: true }),
    winston.format.splat(),
    winston.format.json()
  ),
  transports
});

fileTransport.on('rotate', (oldFilename, newFilename) => {
  LoggerInstance.info(`Log file rotated from ${oldFilename} to ${newFilename}`);
});

fileTransport.on('new', (filename) => {
  LoggerInstance.info(`New log file created: ${filename}`);
});

fileTransport.on('archive', (filename) => {
  LoggerInstance.info(`Log file archived: ${filename}`);
});

fileTransport.on('error', (err) => {
  LoggerInstance.error(`Error with log file: ${err.message}`);
});

export default LoggerInstance;
