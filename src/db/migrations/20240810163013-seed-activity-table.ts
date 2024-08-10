import { QueryInterface } from 'sequelize';
import { ACTIVITY_TABLE } from '../models/activity.model';
import { activities } from '../../utils/seeds/activities';


/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(ACTIVITY_TABLE, activities, {});
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete(ACTIVITY_TABLE, {}, {});
  },
};
