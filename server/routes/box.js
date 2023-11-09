const express = require('express');
const sessionController = require('../controllers/sessionController');
const userController = require('../controllers/userController');

const router = express.Router()

router.post('/getBoxData', sessionController.verifySession, userController.getBoxData, (req, res) => {
  console.log('hit post /box/getBoxData');
  res.status(200).json(res.locals.boxData);
});

router.post('/addToBox', sessionController.verifySession, userController.addToBox, (req, res) => {
  console.log('hit post /box/addToBox');
  res.status(200).json('here is my response from /box addtobox post');
});

module.exports = router;