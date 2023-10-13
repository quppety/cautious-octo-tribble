# ~~Jeopardy!~~ Generic Quiz Game

## Description

Perhaps you watched the TV show "Jeopardy!". It is a televised mind game in which players are presented with a set of questions divided by topic and difficulty. Players select a topic they want to hear a question about, and then select a difficulty that determines the number of points they can earn for answering correctly. As you might have guessed, this is the web version of the game.

You can find out more about this television game [here](https://en.wikipedia.org/wiki/Jeopardy!).
Below is a picture showing the question selection field.

![1920px-Jeopardy!_game_board_US svg](https://github.com/quppety/cautious-octo-tribble/assets/124813316/cc559daf-649a-4fc7-945b-7409a3a471be)


**Pic 1. Question selection field**

## Demo

Try the simplified demo [here](https://cautious-octo-tribble.vercel.app/)


## Technologies

Generic Quiz Game is built with the following technologies:

- **Frontend**:
  - React
  - Redux
  - Axios
  - TypeScript
  - Tailwind CSS

- **Backend**:
  - Node.js
  - Express
  - PostgreSQL
  - Sequelize ORM

## Features

- Engaging Jeopardy gameplay
- Multiple categories with customizable questions
- Interactive user interface
- Mobile-responsive design
- Easily configurable for your specific use case
- Scorekeeping
- Competitive mode (coming)

## Getting Started

To run the game locally, follow these simple steps:

### Server (Backend)

1. **Navigate to the server folder**:

   cd server

2. **Install the server dependencies**:

   npm install

3. **Set up environmental variables**:
   
   Check .env-example for the necessary variables
   
   touch .env
   
5. **Set up the database**:

   sequelize db:create --url $DATABASE
   
   npx sequelize-cli db:migrate
   
   npx sequelize-cli db:seed:all

6. **Start the server**:

   npm run dev

   
### Client (Frontend)

1. **Navigate to the client folder**:

   cd client

2. **Install the client dependencies**:

   npm install

3. **Start the client application**:
   
   npm run dev

4. **Play the game**:
   
   Open a web browser and visit the address in your terminal

## Contact

If you have any questions or want to chat about this pet project, feel free to reach out to me on [GitHub](https://github.com/quppety).
