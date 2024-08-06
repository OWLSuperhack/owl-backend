# Project Readme

![photo_2024-08-04_13-42-00](https://github.com/user-attachments/assets/0b8c2e6d-8028-4e5b-ab61-a9485adf1af8)

## Project Setup for Development

This README provides detailed instructions to set up and run the project in a development environment.

### Prerequisites

- Ensure Docker is installed and running on your machine.
- Node.js and npm should be installed.
- Ensure you have Nodemon installed globally.

### Steps to Set Up the Project

1. **Start Docker**

   Make sure Docker is running. Use the following command to start the Docker containers (use sudo if needed):
   ```sh
   docker compose -f ./docker-compose-dev.yml up -d

2. **Install Node Modules (Only first time)**

   Install the required Node modules by running:

   ```sh
   npm install

3. **Run Migrations (Only first time)**

   To set up the database schema, run the migrations:

   ```sh
   npm run migrations:run

4. **Install Nodemon (if not installed)**

   Nodemon is used for automatically restarting the server. Install it globally if you haven't already:

   ```sh
   npm install -g nodemon

5. **Run the Server**

   Start the development server with:

   ```sh
   npm run dev

### Environment Variables

Create a `.env` file in the root directory of the project. Use the `example.env` file as a guide to set up your environment variables.

### Database Backup

If you have a backup or a previous database to use, place it inside a folder named `postgres` at the root of the project directory. Ensure all the database files are directly inside this folder without any extra subfolders.

### Stack Specifications

- **Node.js**: The runtime environment for executing JavaScript on the server side.
- **Express**: A minimal and flexible Node.js web application framework.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **PostgreSQL**: The relational database management system used.
- **Sequelize**: A promise-based Node.js ORM for PostgreSQL.

### Additional Notes

- Make sure Docker is running before executing any Docker commands.
- The `.env` file is crucial for configuration. Double-check the variables set in this file.
- Follow the folder structure guidelines for database backups to ensure proper loading.

By following these steps, you should be able to set up and run the project in a development environment successfully.
