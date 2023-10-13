const { Router } = require('express');
const { logout, signin, signup } = require('../controllers/userController');

const userRouter = new Router();

module.exports = userRouter
  .post('/signup', signup)
  .post('/signin', signin)
  .get('/logout', logout);
