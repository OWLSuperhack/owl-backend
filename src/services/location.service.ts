import boom from '@hapi/boom';
import sequelize from '../libs/sequelize';
import LoggerInstance from '../utils/logger';

export default class LocationService {
    constructor() {}

    public async getLocationById(id: number) {
        try {
            const locationRecord = await sequelize.models.Location.findByPk(id, {
                include: [
                    {
                        model: sequelize.models.Message,
                        as: 'messages',
                    }
                ]
            });

            if (!locationRecord) {
                throw boom.notFound('Location not found');
            }
        
            return locationRecord;

        } catch (error) {
            LoggerInstance.error('%s', error);
            throw error;
        }
    }

    public async getUserByName(name: string) {
        try {
            const locationRecord = await sequelize.models.Location.findOne({
                where: { name },
                include: [
                    {
                        model: sequelize.models.Message,
                        as: 'messages',
                    }
                ]
            });

            if (!locationRecord) {
                throw boom.notFound('Location not found');
            }
        
            return locationRecord;

        } catch (error) {
            LoggerInstance.error('%s', error);
            throw error;
        }
    }
}