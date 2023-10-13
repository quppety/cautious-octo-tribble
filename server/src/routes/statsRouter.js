const { Router } = require('express');
const {
  getUserStats,
  addUserStats,
} = require('../controllers/statsController');

const statsRouter = new Router();

module.exports = statsRouter.get('/', getUserStats).post('/', addUserStats);
