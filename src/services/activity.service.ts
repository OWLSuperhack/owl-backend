import boom from '@hapi/boom';
import sequelize from '../libs/sequelize';
import LoggerInstance from '../utils/logger';

export default class ActivityService {
    constructor() {}

    public async getAnwswerEnglish(english: string) {
        try {
            
            const activityRecord = await sequelize.models.Activity.findOne({
                where: { english: english }
            });

            return activityRecord ? activityRecord : null;

        } catch (error) {
            LoggerInstance.error('%s', error);
            throw error;
        }
    }
}