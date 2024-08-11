import { Model, DataTypes, Sequelize } from 'sequelize';

const USER_TABLE = 'users';

interface UserAttributes {
    id: string;
    telegramId: string;
    address: string;
    currentLocation?: string;
    currentMessageIndex?: number;
    tokenId?: number;
    createdAt?: Date;
    updatedAt?: Date;
    hash?: string;
    worldcoinId?: string;
}

const UserSchema = {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    telegramId: {
        field: 'telegram_id',
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
    },
    tokenId: {
        field: 'token_id',
        type: DataTypes.INTEGER,
    },
    hash: {
        field: 'hash',
        type: DataTypes.STRING,
    },
    address: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
    },
    currentLocation: {
        field: 'current_location',
        type: DataTypes.STRING,
    },
    currentMessageIndex: {
        field: 'current_message_index',
        type: DataTypes.INTEGER,
    },
    worldcoinId: {
        field: 'worldcoin_id',
        type: DataTypes.STRING,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'created_at',
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        field: 'updated_at',
    },
};

class User extends Model<UserAttributes> {

    public id!: string;
    public telegramId!: string;
    public tokenId!: number;
    public address!: string;
    public currentLocation!: string;
    public currentMessageIndex!: number;
    public worldcoinId!: string;
    public createdAt!: Date;
    public updatedAt!: Date;
    public hash!: string;

    static associate(models: any) {
        this.hasMany(models.Decision, {
            foreignKey: 'userId',
            as: 'decisions',
        });
        this.hasMany(models.Attestation, {
            foreignKey: 'userId',
            as: 'attestations',
        });
    }

    static config(sequelize: Sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: true,
        };
    }
}

export { USER_TABLE, UserSchema, User, UserAttributes };
