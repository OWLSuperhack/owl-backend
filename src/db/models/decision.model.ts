import { Model, DataTypes, Sequelize } from 'sequelize';
import { USER_TABLE } from './user.model';
import { LOCATION_TABLE } from './location.model';

const DECISION_TABLE = 'decisions';

interface DecisionAttributes {
    id: string;
    userId: string;
    locationName: string;
    messageIndex: number;
    selection: string;
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
    locationName: {
        field: 'location_name',
        type: DataTypes.STRING,
        allowNull: false,
    },
    messageIndex: {
        field: 'message_index',
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    selection: {
        type: DataTypes.STRING,
        allowNull: false,
    },
};

class Decision extends Model<DecisionAttributes> {

    public id!: string;
    public userId!: string;
    public locationName!: string;
    public messageIndex!: number;
    public selection!: string;

    static associate(models: any) {
        this.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
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
