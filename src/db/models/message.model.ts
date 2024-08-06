import { Model, DataTypes, Sequelize } from 'sequelize';
import { LOCATION_TABLE } from './location.model';

const MESSAGE_TABLE = 'messages';

interface MessageAttributes {
  id: string;
  locationId: number;
  messageIndex: number;
  messageText: string;
  nextLocations?: string;
  nextLevel?: boolean;
  output?: string[];
  command?: string;
}

const MessageSchema = {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
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
  command: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  messageIndex: {
    field: 'message_index',
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  messageText: {
    field: 'message_text',
    type: DataTypes.TEXT,
    allowNull: false,
  },
  nextLocations: {
    field: 'next_locations',
    type: DataTypes.STRING,
  },
  nextLevel: {
    field: 'next_level',
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  output: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
    defaultValue: [],
  },
};

class Message extends Model<MessageAttributes> {

  public id!: string;
  public locationId!: string;
  public command!: string;
  public nextLevel!: boolean;
  public output!: string[];
  public messageIndex!: number;
  public messageText!: string;
  public nextLocations!: string;

  static associate(models: any) {
    this.belongsTo(models.Location, {
      foreignKey: 'locationId',
      as: 'location',
    });
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: MESSAGE_TABLE,
      modelName: 'Message',
      timestamps: false,
    };
  }
}

export { MESSAGE_TABLE, MessageSchema, Message, MessageAttributes };
