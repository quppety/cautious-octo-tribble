const router = require('express').Router();
const { Topic, Question, Game, User } = require('../db/models');

router.get('/topics', async (req, res) => {
  const topics = await Topic.findAll({
    raw: true,
    nest: true,
  });
  res.json(topics);
});

router.get('/questions', async (req, res) => {
  const questions = await Question.findAll({
    raw: true,
  });
  res.json(questions);
});

router.get('/profile/:id', async (req, res) => {
  const { id } = req.params;
  const currUser = await User.findOne({ where: { login: id }, raw: true });
  const stats = await Game.findAll({
    where: { user_id: currUser.id },
    order: [['createdAt', 'DESC']],
    raw: true,
  });
  res.json(stats);
});

router.post('/game/:id', async (req, res) => {
  const { id } = req.params;
  const { points } = req.body;
  const currUser = await User.findOne({ where: { login: id }, raw: true });
  const addStat = await Game.create({
    user_id: currUser.id,
    total_points: points,
  });
  if (addStat) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

module.exports = router;
