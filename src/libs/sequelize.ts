import { Sequelize } from 'sequelize';
import { config } from '../config/config';
import setupModels from '../db/models';

const USER: string = encodeURIComponent(config.dbUser as string);
const PASSWORD: string = encodeURIComponent(config.dbPassword as string);
const URI: string = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: false,
});

setupModels(sequelize);

// Synchronizing the models (Note: Use migrations in production)
// sequelize.sync();

// Graceful shutdown
process.on('SIGTERM', async () => {
  try {
    await sequelize.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error closing the database connection:', error);
  } finally {
    process.exit(0);
  }
});

process.on('SIGINT', async () => {
  try {
    await sequelize.close();
    console.log('Database connection closed');
  } catch (error) {
    console.error('Error closing the database connection:', error);
  } finally {
    process.exit(0);
  }
});

export default sequelize;

