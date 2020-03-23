const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const usersRouter = require('../users/users-router.js')
const authRouter = require('../auth/router.js')
const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());


server.get('/', (req, res) => {
  res.status(200).json({api: "up"});
})
module.exports = server;