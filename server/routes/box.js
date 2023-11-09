const express = require('express');
const sessionController = require('../controllers/sessionController');
const userController = require('../controllers/userController');

const router = express.Router()

router.post('/', sessionController.verifySession, userController.addToBox, (req, res) => {
  console.log('hit post /box');
  res.status(200).json('here is my response from /box post');
});

module.exports = router;