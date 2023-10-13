const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const { User } = require('../../db/models');

module.exports.findUserByEmail = async (email) => {
  try {
    const currUser = await User.findOne({
      where: { email },
      raw: true,
    });
    return currUser;
  } catch (error) {
    return null;
  }
};

module.exports.findUserByLogin = async (login) => {
  try {
    const currUser = await User.findOne({
      where: { login },
      raw: true,
    });
    return currUser;
  } catch (error) {
    return null;
  }
};

module.exports.comparePassword = async (password, hashedPassword) => {
  try {
    await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    return null;
  }
};

module.exports.findOrCreateUser = async (login, email, password) => {
  try {
    const hashPassword = await bcrypt.hash(password, 8);
    const userData = await User.findOrCreate({
      where: { [Op.or]: [{ login }, { email }] },
      defaults: { login, email, password: hashPassword },
    });
    return userData;
  } catch (error) {
    return null;
  }
};
