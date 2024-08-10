import { Model, DataTypes, Sequelize } from 'sequelize';

const ACTIVITY_TABLE = 'activities';

interface ActivityAttributes {
    id: number;
    type: string;
    english: string;
    spanish: string;
}

const ActivitySchema = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    type: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    english: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    spanish: {
        allowNull: false,
        type: DataTypes.STRING,
    },
};

class Activity extends Model<ActivityAttributes> {

    public id!: number;
    public type!: string;
    public english!: string;
    public spanish!: string;

    static config(sequelize: Sequelize) {
        return {
            sequelize,
            tableName: ACTIVITY_TABLE,
            modelName: 'Activity',
            timestamps: false,
        };
    }

}

export { Activity, ActivityAttributes, ActivitySchema, ACTIVITY_TABLE };