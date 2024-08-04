import { QueryInterface } from 'sequelize';
import { USER_TABLE, UserSchema } from '../models/user.model';
import { LOCATION_TABLE, LocationSchema } from '../models/location.model';
import { MESSAGE_TABLE, MessageSchema } from '../models/message.model';
import { DECISION_TABLE, DecisionSchema } from '../models/decision.model';


/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(LOCATION_TABLE, LocationSchema);
    await queryInterface.createTable(MESSAGE_TABLE, MessageSchema);
    await queryInterface.createTable(DECISION_TABLE, DecisionSchema);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable(DECISION_TABLE);
    await queryInterface.dropTable(MESSAGE_TABLE);
    await queryInterface.dropTable(LOCATION_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  },
};
