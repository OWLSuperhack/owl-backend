import boom from '@hapi/boom';
import sequelize from '../libs/sequelize';
import LoggerInstance from '../utils/logger';
import LocationService from './location.service';

export default class UserService {

    private locationService : LocationService

    constructor() {
        this.locationService = new LocationService();
    }

    public async getUserById(userId: string) {
        try {
            const userRecord = await sequelize.models.Decision.findByPk(userId, {
                include: [
                    {
                        model: sequelize.models.Decision,
                        as: 'decisions',
                    }
                ]
            });

            if (!userRecord) {
                throw boom.notFound('User not found');
            }
        
            return userRecord;

        } catch (error) {
            LoggerInstance.error('%s', error);
            throw error;
        }
    }

    public async getUserByAddress(address: string) {
        try {
            const userRecord = await sequelize.models.User.findOne({
                where: { address },
                include: [
                    {
                        model: sequelize.models.Decision,
                        as: 'decisions',
                    }
                ]
            });
            if (!userRecord) {
                throw boom.notFound('User not found');
            }
        
            return userRecord;

        } catch (error) {
            LoggerInstance.error('%s', error);
            throw error;
        }
    }

    public async getUserByTelegramId(telegramId: string) {
        try {
            const userRecord = await sequelize.models.User.findOne({
                where: { telegramId },
                include: [
                    {
                        model: sequelize.models.Decision,
                        as: 'decisions',
                    }
                ]
            });
            if (!userRecord) {
                throw boom.notFound('User not found');
            }
        
            return userRecord;

        } catch (error) {
            LoggerInstance.error('%s', error);
            throw error;
        }
    }

    public async createUser(telegramId: string, address: string) {
        try {
            const location = await this.locationService.getLocationById(1);
            const user = {
                telegramId,
                address,
                currentLocation: location.dataValues.name,
                currentMessageIndex: 0,
            };
            const newUser = await sequelize.models.User.create(user);
            return newUser;
        } catch (error) {
            LoggerInstance.error('%s', error);
            throw error;
        }
    }

}