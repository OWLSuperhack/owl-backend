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

https://i.ibb.co/3SfFDtB/photo-2024-08-04-13-42-00.jpg

https://i.ibb.co/DL6z21c/2.png

 -->

<br />
<div align="center">
  <a href="https://github.com/OWLSuperhack/owl-backend">
    <img src="https://i.ibb.co/nk2NBjF/Banner-para-Twitch-Gamer-Streaming-Atrevido-Lila.png">
  </a>

 <h3 align="center">🦉On-chain open world game to explore and learn through a creative storyline.🦉</h3>

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


![OWL](https://i.ibb.co/0Zkb3fc/Learn-On-Chain.jpg)


OWL(Open World of Learning) is an innovative on-chain open-world game where players can explore and learn virtually any subject through a creative, immersive storyline. 

Designed to spark curiosity, OWL allows players to navigate the game at their own pace, making intuitive connections between concepts that enhance long-term memory. 

The learning experience is enriched with interactive elements delivered through a Telegram bot, combining narrative and multimedia to ensure a high-quality educational journey. 

One of OWL’s unique features is that the main storyline remains flexible, unaffected by the order in which players choose to learn, with on-chain interactions seamlessly integrated into the gameplay, offering a true blend of education and adventure.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


# Demo

<!-- INSERTAR DEMO AQUÍ


[![Demo Video](https://i.ibb.co/48PGvQk/Pocket-Youtube-Final.png)](https://www.youtube.com/watch?v=74cyIjHnwyc)

 -->
 
Ready to explore? Chat with OWL Bot: https://t.me/OwlSuperHackBot

<p align="right">(<a href="#readme-top">back to top</a>)</p> 


<!-- GETTING STARTED   -->


# How it Works

Game’s architecture integrates several key components to create a seamless and engaging experience for players.

## Core Components

- **Telegram Bot:** The primary interface for players, where commands and interactions take place. It also verifies new wallets and manages on-chain attestations as players progress, ensuring a smooth integration with the blockchain.
- **On-Chain Interactions:** OWL utilizes blockchain technology, specifically Base and Worldcoin, to offer seamless on-chain experiences. Players start by creating a new wallet, validated by the bot. As they advance in the storyline, they earn attestations on Base and unlock dynamic NFTs that evolve based on their progress.
- **Dynamic NFTs:** Players are rewarded with dynamic NFTs as they achieve milestones in the game. These NFTs grow and change based on the attestations collected, serving as a visual representation of the player’s journey and accomplishments.
- **Story-Driven Learning:** The game features a branching narrative that adapts to the player’s choices, allowing for a non-linear learning experience. The flexible storyline ensures that the order in which subjects are learned does not impact the overall experience, making each journey unique.
- **Integration with World ID:** A side quest involves registering with World ID, which lays the foundation for unique user validation and future access to basic income rewards within the game.

## User Journey

- **Initial Setup:** Players begin by watching a video that guides them to create an EOA wallet (e.g., Metamask or Zerion), which becomes their digital identity in the game.
- **First Command:** After setting up the wallet, players send their first command to begin their journey in the OWL universe.
- **Story Progression:** Players navigate through the storyline, making choices that affect their path. The game adapts to these choices, ensuring a personalized learning experience, while unlocking on-chain interactions.
- **Attestations and Rewards:** As players complete levels and milestones, they earn attestations and unlock dynamic NFTs or badges that reflect their progress and achievements.
- **Side Quests:** Players can engage in side quests, such as registering with World ID, to explore additional aspects of the game and gain access to unique rewards.

Overall, OWL delivers an educational experience that is both engaging and immersive, with a strong emphasis on intuitive learning and the seamless integration of blockchain technology.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


# Built With


OWL is proudly supported by the following sponsors:


* [![EAS Base][base.easscan]][easscan-url]
* [![Base][base.org]][base-url]
* [![Worldcoin][worldcoin.org]][worldcoin-url]
* [![Blockscout][blockscout.com]][blockscout-url]

These powerful partnershave enabled us to integrate cutting-edge technology, ensuring that OWL provides a truly innovative and engaging experience for all users.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->


# Team

Natalia Emma Carvajal ([@nataliaemmaC](https://twitter.com/nataliaemmaC)): OWL Founder
<br />

Sebastian Guaqueta ([@scguaquetam](https://twitter.com/scguaquetam)): Software Developer at Rootstock , collaborator at [happ3n](https://x.com/happ3nxyz) and [WTF Academy Contributor](https://twitter.com/WTFAcademy_).
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

[contributors-shield]: https://img.shields.io/github/contributors/OWLSuperhack/owl-backend.svg?style=for-the-badge&color=187f77

[contributors-url]: https://github.com/OWLSuperhack/owl-backend/graphs/contributors

[stars-shield]: https://img.shields.io/github/stars/OWLSuperhack/owl-backend.svg?style=for-the-badge&color=white

[stars-url]: https://github.com/OWLSuperhack/owl-backend/stargazers

[issues-shield]: https://img.shields.io/github/issues/OWLSuperhack/owl-backend.svg?style=for-the-badge&color=187f77

[issues-url]: https://github.com/OWLSuperhack/owl-backend/issues


<!-- SPONSORS  -->

[base.easscan]: https://img.shields.io/badge/Base%20EAS-4c63b6?style=for-the-badge&logo=gnosispay&logoColor=white
[easscan-url]:https://base.easscan.org/

[base.org]:https://img.shields.io/badge/base-1953ef?style=for-the-badge&logo=gnosispay&logoColor=white
[base-url]:https://www.base.org/

[worldcoin.org]:https://img.shields.io/badge/Worldcoin-fd0320?style=for-the-badge&logo=gnosispay&logoColor=white
[worldcoin-url]:https://worldcoin.org/

[blockscout.com]:https://img.shields.io/badge/Blockscout-5453d3?style=for-the-badge&logo=gnosispay&logoColor=white
[blockscout-url]:https://www.blockscout.com/