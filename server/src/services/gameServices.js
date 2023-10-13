const { Topic, Question } = require('../../db/models');

module.exports.findAllTopics = async () => {
  try {
    const topics = await Topic.findAll({
      raw: true,
      nest: true,
    });
    return topics;
  } catch (error) {
    return null;
  }
};

module.exports.findAllQuestions = async () => {
  try {
    const questions = await Question.findAll({
      raw: true,
    });
    return questions;
  } catch (error) {
    return null;
  }
};
