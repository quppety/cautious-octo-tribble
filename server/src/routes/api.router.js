const router = require('express').Router();
const gameRouter = require('./gameRouter');
const statsRouter = require('./statsRouter');
const userRouter = require('./userRouter');

module.exports = router
  .use('/auth', userRouter)
  .use('/game', gameRouter)
  .use('/stats', statsRouter);
