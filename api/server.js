const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session')

const usersRouter = require('../users/users-router.js')
const authRouter = require('../auth/router.js')
const restricted = require('../auth/restricted-middleware.js');
const server = express();

const sessionConfig = {
  name: 'newSession',
  secret: 'I want to build a snow man',
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,
    httpOnly: true
  },
  resave: false, 
  saveUninitialized: true
};

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());
server.use(session(sessionConfig));

server.use('/api/users', restricted, usersRouter);
server.use('/api/auth', authRouter);


server.get('/', (req, res) => {
  res.status(200).json({api: "up"});
})
module.exports = server;