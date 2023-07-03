const router = require("express").Router();
const { Topic, Question } = require("../db/models");

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

module.exports = router;
