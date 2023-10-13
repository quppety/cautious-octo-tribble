const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { User } = require('../../db/models');

module.exports.signup = async (req, res) => {
  const { login, email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 8);
    const isUserExists = await User.findOrCreate({
      where: { [Op.or]: [{ login }, { email }] },
      defaults: { login, email, password: hashPassword },
    });
    const [userData, isCreated] = isUserExists;
    if (isCreated) {
      req.session.username = userData.login;
      res.json({
        user: userData.login,
        session: Boolean(req.session),
      });
    } else {
      res.status(400).json({ message: 'User already exists' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const currentUser = await User.findOne({ where: { email }, raw: true });
    if (currentUser) {
      const passwordCheck = await bcrypt.compare(
        password,
        currentUser.password
      );
      if (passwordCheck) {
        req.session.username = currentUser.login;
        res.json({
          user: currentUser.login,
          session: Boolean(req.session),
        });
      } else {
        res.status(401).json({ message: 'Wrong password' });
      }
    } else {
      res.status(401).json({ message: 'User not found' });
    }
  } catch (error) {
    res.sendStatus(500);
  }
};

module.exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.clearCookie('connect.sid');
      res.sendStatus(200);
    }
  });
};
