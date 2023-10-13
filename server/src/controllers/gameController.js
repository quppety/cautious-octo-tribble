const { findAllTopics, findAllQuestions } = require('../services/gameServices');

module.exports.getTopics = async (req, res) => {
  const topics = await findAllTopics();
  res.json(topics);
};

module.exports.getQuestions = async (req, res) => {
  const questions = await findAllQuestions();
  res.json(questions);
};
