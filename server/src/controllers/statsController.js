const { Game, User } = require('../../db/models');

module.exports.getUserStats = async (req, res) => {
  try {
    const stats = await Game.findAll({
      include: [
        {
          model: User,
          attributes: ['login'],
        },
      ],
      order: [['createdAt', 'DESC']],
      raw: true,
      nest: true,
    });
    res.json(stats);
  } catch (error) {
    res.sendStatus(500);
  }
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
