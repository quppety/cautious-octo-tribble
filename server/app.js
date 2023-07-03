require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);

const { corsMiddleware } = require('./corsMiddleware');
const gameRouter = require('./routes/gameRouter');
const userRouter = require('./routes/userRouter');

const app = express();

const PORT = process.env.PORT || 3000;

const sessionConfig = {
  store: new FileStore(), // добавить после установки session-file-store
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999 * 60 * 1000, // устанавливаем сколько живет кука
    httpOnly: true,
  },
};
app.use(expressSession(sessionConfig));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use(corsMiddleware);

app.use('/', userRouter);
app.use('/', gameRouter);

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
