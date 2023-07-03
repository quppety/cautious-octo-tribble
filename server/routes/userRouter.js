const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Op } = require("sequelize");
const { User } = require("../db/models");

router.post("/signup", async (req, res) => {
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
      res.json(req.session);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post("/signin", async (req, res) => {
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
        res.json(req.session);
      } else {
        res.sendStatus(401);
      }
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.clearCookie("connect.sid");
      res.sendStatus(200);
    }
  });
});

module.exports = router;
