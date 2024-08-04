import boom from '@hapi/boom';
import { UserAttributes } from '../db/models/user.model';
import sequelize from '../libs/sequelize';
import { Op } from 'sequelize';
import LoggerInstance from '../utils/logger';

export default class UserService {
    constructor() {}

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
            return {error};
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
            return {error};
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
            return {error};
        }
    }

}