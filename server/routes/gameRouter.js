const router = require("express").Router();
const { Topic, Question, Game, User } = require("../db/models");

router.get("/topics", async (req, res) => {
  const topics = await Topic.findAll({
    raw: true,
    nest: true,
  });
  console.log(topics);
  res.json(topics);
});

router.get("/questions", async (req, res) => {
  const questions = await Question.findAll({
    raw: true,
  });
  console.log(questions);
  res.json(questions);
});

router.get("/profile/:id", async (req, res) => {
  const { id } = req.params;
  const currUser = await User.findOne({ where: { login: id }, raw: true });
  const stats = await Game.findAll({ where: { user_id: currUser.id } });
  res.json(stats);
});

module.exports = router;
