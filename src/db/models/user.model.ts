import { Model, DataTypes, Sequelize } from 'sequelize';

const USER_TABLE = 'users';

interface UserAttributes {
    id: string;
    telegramId: string;
    address: string;
    currentLocation?: string;
    currentMessageIndex?: number;
    createdAt?: Date;
    updatedAt?: Date;
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
        type: DataTypes.STRING,
    },
    address: {
        allowNull: false,
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
    public address!: string;
    public currentLocation!: string;
    public currentMessageIndex!: number;
    public createdAt!: Date;
    public updatedAt!: Date;

    static associate(models: any) {
        this.hasMany(models.Decision, {
            foreignKey: 'userId',
            as: 'decisions',
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
