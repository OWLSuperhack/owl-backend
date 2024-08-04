import { QueryInterface } from 'sequelize';
import { LOCATION_TABLE } from '../models/location.model';
import { locations } from '../../utils/seeds/locations';


/** @type {import("sequelize-cli").Migration} */
module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert(LOCATION_TABLE, locations, {});
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete(LOCATION_TABLE, {}, {});
  },
};
