const { Game, User } = require('../../db/models');

module.exports.getAllUsersStats = async () => {
  try {
    const stats = await Game.findAll({
      include: [
        {
          model: User,
          attributes: ['login'],
        },
      ],
      order: [['totalPoints', 'DESC']],
      raw: true,
      nest: true,
    });
    return stats;
  } catch (error) {
    return null;
  }
};

module.exports.writeUserStat = async (id, points) => {
  try {
    const addStat = await Game.create({
      userId: id,
      totalPoints: points,
    });
    return addStat;
  } catch (error) {
    return null;
  }
};
