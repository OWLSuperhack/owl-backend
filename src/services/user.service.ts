import boom from '@hapi/boom';
import sequelize from '../libs/sequelize';
import LoggerInstance from '../utils/logger';
import LocationService from './location.service';
import NFTService from './nft.service';

export default class UserService {

    private locationService : LocationService
    private nftService : NFTService

    constructor() {
        this.locationService = new LocationService();
        this.nftService = new NFTService();
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
                where: { address: address.toLowerCase() },
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
        
            return userRecord ? userRecord : null;

        } catch (error) {
            LoggerInstance.error('%s', error);
            throw error;
        }
    }

    public async createUser(telegramId: string, address: string) {
        try {
            const previousUser = await this.getUserByTelegramId(telegramId);
            if (previousUser) {
                LoggerInstance.error('%s', boom.conflict('User already exists'));
                return;
            }
            const location = await this.locationService.getLocationById(1);
            const user = {
                telegramId,
                address: address.toLowerCase(),
                currentLocation: location.dataValues.locationName,
                currentMessageIndex: 0,
            };
            const newUser = await sequelize.models.User.create(user);

            const nftPayload = {
                to: address.toLowerCase(),
                id: telegramId,
                index: 0,
                location: location.dataValues.locationName,
                data: '0x',
            };
            const nft = await this.nftService.mintNFT(nftPayload);
            await newUser.update({ tokenId: nft?.tokenId, hash: nft?.txHash });
            return {newUser, nft};
        } catch (error) {
            LoggerInstance.error('%s', error);
            throw error;
        }
    }

    public async deleteUser(address: string) {
        try {
            const userRecord = await this.getUserByAddress(address);
            if (!userRecord) {
                return null;
            }
            return await userRecord.destroy();
        } catch (error) {
            LoggerInstance.error('%s', error);
        }
    }

    public async createAttestation(telegramId: string, attestationData: any) {
        try {
            const user = await this.getUserByTelegramId(telegramId);
            if (!user) {
                throw boom.notFound('User not found');
            }
            const attestation = {
                ...attestationData,
                userId: user.dataValues.id,
            };
            return await sequelize.models.Attestation.create(attestation);
        } catch (error) {
            LoggerInstance.error('%s', error);
            throw error;
        }
    }

    public async registerAnswer(telegramId: string, selection: string) {
        try {
            const user = await this.getUserByTelegramId(telegramId);
            if (!user) {
                throw boom.notFound('User not found');
            }
            const decision = {
                userId: user.dataValues.id,
                locationName: user.dataValues.currentLocation,
                messageIndex: user.dataValues.currentMessageIndex,
                selection,
            };
            return await sequelize.models.Decision.create(decision);
        } catch (error) {
            LoggerInstance.error('%s', error);
            throw error;
        }
    }

    public async getUserAnswers(telegramId: string) {
        try {
            const user = await this.getUserByTelegramId(telegramId);
            if (!user) {
                throw boom.notFound('User not found');
            }
            
            const decisions = await sequelize.models.Decision.findAndCountAll({
                where: { 
                    userId: user.dataValues.id,
                    locationName: user.dataValues.currentLocation,
                    messageIndex: user.dataValues.currentMessageIndex,
                },
            });

            return decisions;

        } catch (error) {
            LoggerInstance.error('%s', error);
            throw error;
        }
    }

    public async getAllUserAnswers(telegramId: string) {
        try {
            const user = await this.getUserByTelegramId(telegramId);
            if (!user) {
                throw boom.notFound('User not found');
            }
            
            const decisions = await sequelize.models.Decision.findAndCountAll({
                where: { 
                    userId: user.dataValues.id,
                },
            });

            return decisions;

        } catch (error) {
            LoggerInstance.error('%s', error);
            throw error;
        }
    }

    public async UpdateUserProgress(telegramId: string, nextLocation: string) {
        try {
            const user = await this.getUserByTelegramId(telegramId);
            if (!user) {
                throw boom.notFound('User not found');
            }
            return await user.update({
                currentMessageIndex: user.dataValues.currentMessageIndex + 1,
                currentLocation: nextLocation,
            });
        } catch (error) {
            LoggerInstance.error('%s', error);
        }
    }

}