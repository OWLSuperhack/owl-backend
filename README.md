<a name="readme-top"></a>

<div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

</div>

<!-- PROJECT INTRO -->

<!-- Notas:

No olvidar conectar los repos o folders
No olvidar subir el link del bot para test 
No olvidar subir el link del demo 

Agregar link a: View demo, report bug, request feature.

 -->

<br />
<div align="center">
  <a href="https://github.com/OWLSuperhack/owl-backend">
    <img src="https://i.ibb.co/3SfFDtB/photo-2024-08-04-13-42-00.jpg">
  </a>

 <h3 align="center">  🦉Agregar aquí una short description🦉</h3>

  <p align="center">

  [Superhack 2024 Online Hackathon](https://ethglobal.com/events/superhack2024)

   <br />
    <a href="https://github.com/OWLSuperhack/owl-backend"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/OWLSuperhack/owl-backend">View Demo</a>
    ·
    <!-- Agregar Demo Link Aquí -->
    <a href="https://github.com/OWLSuperhack/owl-backend">Report Bug</a>
    ·
    <a href="https://github.com/OWLSuperhack/owl-backend">Request Feature</a>
  </p>
</div>

<br />


<!-- TABLE OF CONTENTS -->

# Table of Contents 

1. [About de Project](#about-the-project)
2. [Demo](#demo)
3. [Built With](#built-with)
4. [How it works](#how-it-works)
5. [Team](#team)
6. [Acknowledgments](#acknowledgments)

<br />


<!-- ABOUT THE PROJECT -->

# About The Project


<br />


<!-- ![OWL](Agregar aquí una imagen) -->

OWL (Open World of Learning), an innovative RPG that uses an Open World concept to teach a wide range of subjects. 

Players will seamlessly interact with on-chain elements without even realizing it, making learning engaging and subtly introducing them to web3 technologies.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


# Demo

<!-- INSERTAR DEMO AQUÍ


[![Demo Video](https://i.ibb.co/48PGvQk/Pocket-Youtube-Final.png)](https://www.youtube.com/watch?v=74cyIjHnwyc)

Run Pocket Demo here: https://pocketapp.my.canva.site/main -->

<p align="right">(<a href="#readme-top">back to top</a>)</p> 



<!-- GETTING STARTED   -->


# How it Works

<!-- Toca mejorar esto  -->

A game on chain in an open world style where you could learn virtually any subject through a creative storyline. 

The idea is for the players to be curious enough to go from one part of the game to another, at their own pace and through their own intuition in order to make better connections between concepts and thus make a more positive impact in their long term memory. 

All of this results in a higher quality learning experience where the best part is that the main story line is not affected by the order in which you choose to learn and you have on chain interactions without even knowing it.


### Goals



### Components



### User Journey

<p align="right">(<a href="#readme-top">back to top</a>)</p>


# Built With


OWL is proudly supported by the following sponsors:


<!-- Toca mejorar esto  
* [![Gnosis Pay][gnosispay.com]][gnosispay-url]
* [![Safe][safe.global]][safe-url]
* [![Uniswap][uniswap.org]][uniswap-url]
* [![Panceswap][pancakeswap.finance]][pancakeswap-url]
* [![Morpho][morpho.org]][morpho-url]
* [![Nouns][nouns.wtf]][nouns-url]


These powerful partners have helped us create a seamless user experience and ensure the scalability and reliability of our project.

-->

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->


# Team

Natalia Emma Carvajal ([@nataliaemmaC](https://twitter.com/nataliaemmaC)): OWL Founder
<br />

Sebastian Guaqueta ([@scguaquetam](https://twitter.com/scguaquetam)): Building [happ3n](https://x.com/happ3nxyz) and [WTF Academy Contributor](https://twitter.com/WTFAcademy_).
<br />

Nicolas Vergara ([@champilas](https://x.com/champilas)): Backend Developer at [happ3n](https://x.com/happ3nxyz)
<br />

Angela Ocando ([@ocandocrypto](https://twitter.com/ocandocrypto)): Core Contributor at [Web3 Citizen](https://twitter.com/web3citizenxyz) and Arbitrum DAO Delegate.
<br />


<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- INstallation -->

## Installation 

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

<p align="right">(<a href="#readme-top">back to top</a>)</p>




<!-- MARKDOWN LINKS -->

[contributors-shield]: https://img.shields.io/github/contributors/EthPocketHQ/Pocket.svg?style=for-the-badge

[contributors-url]: https://github.com/OWLSuperhack/owl-backend/graphs/contributors

[stars-shield]: https://img.shields.io/github/stars/EthPocketHQ/Pocket.svg?style=for-the-badge

[stars-url]: https://github.com/OWLSuperhack/owl-backend/stargazers

[issues-shield]: https://img.shields.io/github/issues/EthPocketHQ/Pocket.svg?style=for-the-badge&logoColor=white

[issues-url]: https://github.com/OWLSuperhack/owl-backend/issues


<!-- SPONSORS


[gnosispay.com]:https://img.shields.io/badge/gnosispay-6FAEF6?style=for-the-badge&logo=gnosispay&logoColor=white
[gnosispay-url]:https://gnosispay.com

[safe.global]:https://img.shields.io/badge/safe-6FAEF6?style=for-the-badge&logo=safe&logoColor=white
[safe-url]:https://safe.global

[uniswap.org]:https://img.shields.io/badge/uniswap-6FAEF6?style=for-the-badge&logo=uniswap&logoColor=white
[uniswap-url]:https://uniswap.org

[pancakeswap.finance]:https://img.shields.io/badge/pancakeswap-6FAEF6?style=for-the-badge&logo=pancakeswap&logoColor=white
[pancakeswap-url]:https://pancakeswap.finance

[morpho.org]:https://img.shields.io/badge/morpho-6FAEF6?style=for-the-badge&logo=morpho&logoColor=white
[morpho-url]:https://morpho.org/

[nouns.wtf]:https://img.shields.io/badge/nounsdao-6FAEF6?style=for-the-badge&logo=nounsdao&logoColor=white
[Nouns-url]:https://nouns.wtf

 -->




<!-- 


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
-->