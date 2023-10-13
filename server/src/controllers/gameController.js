const {
  Topic,
  Question,
  User,
  Game,
  GameQuestion,
} = require('../../db/models');

module.exports.getTopics = async (req, res) => {
  const topics = await Topic.findAll({
    raw: true,
    nest: true,
  });
  res.json(topics);
};

module.exports.getQuestions = async (req, res) => {
  const questions = await Question.findAll({
    raw: true,
  });
  res.json(questions);
};
