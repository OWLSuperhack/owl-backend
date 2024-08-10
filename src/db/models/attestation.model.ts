import { Model, DataTypes, Sequelize } from 'sequelize';
import { USER_TABLE } from './user.model';

const ATTESTATION_TABLE = 'attestations';

interface AttestationAttributes {
    uuid: string
    id: string
    index: number
    location: string
    address: string
    data?: string
    userId: string
}

const AttestationSchema = {
    uuid: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    id: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    index: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    address: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    location: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    data: {
        type: DataTypes.STRING,
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
};

class Attestation extends Model<AttestationAttributes> {

    public uuid!: string
    public id!: string
    public index!: number
    public location!: string
    public address!: string
    public data!: string
    public userId!: string    

    static associate(models: any) {
        this.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'user',
        });
    }

    static config(sequelize: Sequelize) {
        return {
            sequelize,
            tableName: ATTESTATION_TABLE,
            modelName: 'Attestation',
            timestamps: false,
        };
    }
}

export { Attestation, AttestationAttributes, AttestationSchema, ATTESTATION_TABLE };
