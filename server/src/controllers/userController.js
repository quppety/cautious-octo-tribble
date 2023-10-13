const {
  findUserByEmail,
  comparePassword,
  findOrCreateUser,
} = require('../services/userService');

module.exports.signup = async (req, res) => {
  const { login, email, password } = req.body;
  try {
    const userCheck = await findOrCreateUser(login, email, password);
    if (userCheck) {
      const [userData, isCreated] = userCheck;
      if (isCreated) {
        req.session.username = userData.login;
        res.json({
          user: userData.login,
          session: Boolean(req.session),
        });
      } else {
        res.status(400).json({ message: 'User already exists' });
      }
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const currentUser = await findUserByEmail(email);
    if (currentUser) {
      const passwordCheck = comparePassword(password, currentUser.password);
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
