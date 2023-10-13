const {
  getAllUsersStats,
  writeUserStat,
} = require('../services/statsServices');
const { findUserByLogin } = require('../services/userService');

module.exports.getUserStats = async (req, res) => {
  try {
    const userRating = await getAllUsersStats();
    res.json(userRating);
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports.addUserStats = async (req, res) => {
  try {
    const { username } = req.session;
    const { points } = req.body;
    const currUser = await findUserByLogin(username);
    const addStat = await writeUserStat(currUser.id, points);
    if (addStat) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    res.sendStatus(500);
  }
};
