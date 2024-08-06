import { QueryInterface } from 'sequelize';
import { messagesValRoom } from '../../utils/seeds/messages';
import { MESSAGE_TABLE } from '../models/message.model';


/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(MESSAGE_TABLE, messagesValRoom, {});
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete(MESSAGE_TABLE, {}, {});
  },
};
