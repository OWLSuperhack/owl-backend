import { QueryInterface } from 'sequelize';
import { USER_TABLE, UserSchema } from '../models/user.model';
import { LOCATION_TABLE, LocationSchema } from '../models/location.model';
import { MESSAGE_TABLE, MessageSchema } from '../models/message.model';
import { DECISION_TABLE, DecisionSchema } from '../models/decision.model';
import { ATTESTATION_TABLE, AttestationSchema } from '../models/attestation.model';
import { ACTIVITY_TABLE, ActivitySchema } from '../models/activity.model';

/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(LOCATION_TABLE, LocationSchema);
    await queryInterface.createTable(MESSAGE_TABLE, MessageSchema);
    await queryInterface.createTable(DECISION_TABLE, DecisionSchema);
    await queryInterface.createTable(ATTESTATION_TABLE, AttestationSchema);
    await queryInterface.createTable(ACTIVITY_TABLE, ActivitySchema);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable(DECISION_TABLE);
    await queryInterface.dropTable(MESSAGE_TABLE);
    await queryInterface.dropTable(LOCATION_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(ATTESTATION_TABLE);
    await queryInterface.dropTable(ACTIVITY_TABLE);
  },
};
