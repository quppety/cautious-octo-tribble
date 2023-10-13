const { Router } = require('express');
const {
  getTopics,
  getQuestions,
} = require('../controllers/gameController');

const gameRouter = new Router();

module.exports = gameRouter
  .get('/topics', getTopics)
  .get('/questions', getQuestions);

module.exports = gameRouter;
