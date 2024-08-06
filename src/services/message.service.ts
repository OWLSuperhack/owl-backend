import boom from '@hapi/boom';
import sequelize from '../libs/sequelize';
import LoggerInstance from '../utils/logger';
import UserService from './user.service';
import LocationService from './location.service';

export default class MessageService {

    private userService : UserService
    private locationService : LocationService


    constructor() {
        this.userService = new UserService();
        this.locationService = new LocationService();
    }

    public async getMessageByTelegramId(telegramId: string, command: string) {
        try {
            const userRecord = await this.userService.getUserByTelegramId(telegramId);

            if (!userRecord) {
                throw boom.notFound('User not found, not progress fetched');
            }

            const location = await this.locationService.getUserByName(userRecord.dataValues.currentLocation);
    
            const currentMessage = await sequelize.models.Message.findOne({
                where: {
                    locationId: location.dataValues.id,
                    messageIndex: userRecord.dataValues.currentMessageIndex,
                    command
                }
            });

            if (currentMessage && currentMessage.dataValues.nextLevel) {
                await userRecord.update({
                    currentMessageIndex: userRecord.dataValues.currentMessageIndex + 1,
                    currentLocation: currentMessage.dataValues.nextLocations
                });
            }

            return currentMessage ? currentMessage : null;

        } catch (error) {
            LoggerInstance.error('%s', error);
            throw error;
        }
    }

    public async getCurrentProgrress(telegramId: string) {
        try {
            const userRecord = await this.userService.getUserByTelegramId(telegramId);

            if (!userRecord) {
                throw boom.notFound('User not found, not progress fetched');
            }

            const location = await this.locationService.getUserByName(userRecord.dataValues.currentLocation);

            const currentMessage = await sequelize.models.Message.findOne({
                where: {
                    locationId: location.dataValues.id,
                    messageIndex: userRecord.dataValues.currentMessageIndex,
                    nextLevel: true
                }
            });

            return currentMessage ? currentMessage : null;

        } catch (error) {
            LoggerInstance.error('%s', error);
            throw error;
        }
    }

}