const express = require('express');
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');

const router = express.Router();

router.post('/signup', userController.createUser, sessionController.sessionDB, (req, res) => {
  console.log('hit router post signup');
  res.status(200).json(res.locals.id);
});

module.exports = router;