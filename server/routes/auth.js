const express = require('express');
const userController = require('../controllers/userController');
const sessionController = require('../controllers/sessionController');

const router = express.Router();

router.post('/signup', userController.createUser, sessionController.sessionDB, (req, res) => {
  console.log('hit router post signup');
  res.status(200).json(res.locals.id);
});

router.post('/login', userController.login, sessionController.sessionDB, (req, res) => {
  console.log('hit router post login');
  res.status(200).json(res.locals.id);
});

router.post('/logout', sessionController.deleteSession, (req, res) => {
  console.log('hit router post logout');
  res.status(200).json('success');
});

module.exports = router;