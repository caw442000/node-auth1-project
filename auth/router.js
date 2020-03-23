const bcrypt = require('bcryptjs');

const router = require('express').Router();

const Users = require('../users/users-model.js');

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  
})

module.exports = router;