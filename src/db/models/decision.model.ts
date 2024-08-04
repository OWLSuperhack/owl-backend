import { Model, DataTypes, Sequelize } from 'sequelize';
import { USER_TABLE } from './user.model';
import { LOCATION_TABLE } from './location.model';

const DECISION_TABLE = 'decisions';

interface DecisionAttributes {
    id: string;
    userId: string;
    locationId: string;
    messageIndex: number;
    chosenLocation: string;
    decisionTime?: Date;
}

const DecisionSchema = {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    userId: {
        field: 'user_id',
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    locationId: {
        field: 'location_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: LOCATION_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    messageIndex: {
        field: 'message_index',
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    chosenLocation: {
        field: 'chosen_location',
        type: DataTypes.STRING,
        allowNull: false,
    },
    decisionTime: {
        field: 'decision_time',
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
};

class Decision extends Model<DecisionAttributes> {

    public id!: string;
    public userId!: string;
    public locationId!: string;
    public messageIndex!: number;
    public chosenLocation!: string;
    public decisionTime!: Date;

    static associate(models: any) {
        this.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
        });
        this.belongsTo(models.Location, {
            foreignKey: 'locationId',
            as: 'location',
        });
    }

    static config(sequelize: Sequelize) {
        return {
            sequelize,
            tableName: DECISION_TABLE,
            modelName: 'Decision',
            timestamps: false,
        };
    }
}

export { DECISION_TABLE, DecisionSchema, Decision, DecisionAttributes };
