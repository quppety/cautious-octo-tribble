require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const expressSession = require('express-session');
const FileStore = require('session-file-store')(expressSession);

const { corsMiddleware } = require('./middleware/corsMiddleware');
const apiRouter = require('./routes/api.router');

const app = express();

const PORT = process.env.PORT || 3000;

const sessionConfig = {
  store: new FileStore(),
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 9999 * 60 * 1000,
    httpOnly: true,
  },
};
app.use(expressSession(sessionConfig));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ credentials: true, origin: true }));
app.use(corsMiddleware);

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
