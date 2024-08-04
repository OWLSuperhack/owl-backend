import { Model, DataTypes, Sequelize } from 'sequelize';

const LOCATION_TABLE = 'locations';

interface LocationAttributes {
  id: string;
  locationName: string;
  description?: string;
}

const LocationSchema = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  locationName: {
    field: 'location_name',
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  description: {
    type: DataTypes.TEXT,
  },
};

class Location extends Model<LocationAttributes> {

  public id!: string;
  public locationName!: string;
  public description!: string;

  static associate(models: any) {
    this.hasMany(models.Message, {
      foreignKey: 'locationId',
      as: 'messages',
    });
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: LOCATION_TABLE,
      modelName: 'Location',
      timestamps: false,
    };
  }
}

export { LOCATION_TABLE, LocationSchema, Location, LocationAttributes };
