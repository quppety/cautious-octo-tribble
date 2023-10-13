const { Game, User, GameQuestion } = require('../../db/models');

module.exports.getUserStats = async (req, res) => {
  const { id } = req.params;
  const currUser = await User.findOne({ where: { login: id }, raw: true });
  const stats = await Game.findAll({
    where: { userId: currUser.id },
    order: [['createdAt', 'DESC']],
    raw: true,
  });
  res.json(stats);
};

module.exports.addUserStats = async (req, res) => {
  const { id } = req.params;
  const { points } = req.body;
  const currUser = await User.findOne({ where: { login: id }, raw: true });
  const addStat = await Game.create({
    userId: currUser.id,
    totalPoints: points,
  });
  if (addStat) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
};
